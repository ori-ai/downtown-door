import "server-only";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

/**
 * Server-side lead delivery + spam verification. Designed to fail SAFE:
 * if keys aren't configured yet, the submission is accepted and logged (never
 * lost), and the response flags that delivery isn't wired. The human adds
 * RESEND_API_KEY / TURNSTILE_SECRET_KEY to go live (docs/human-todo.md).
 */

const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(token: string | undefined, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Not configured → skip verification (dev / pre-launch).
  if (!secret) return true;
  if (!token) return false;

  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.append("remoteip", ip);
    const res = await fetch(TURNSTILE_VERIFY_URL, { method: "POST", body });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export interface LeadEmail {
  to: string;
  subject: string;
  /** Plain-text body (rendered as <pre> in HTML). */
  text: string;
  replyTo?: string;
}

export interface DeliveryResult {
  ok: boolean;
  delivered: boolean;
  error?: string;
}

export async function sendLeadEmail(email: LeadEmail): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    // Fail safe: log so the lead is never silently dropped in dev/pre-launch.
    console.warn(
      `[lead] Email not configured (RESEND_API_KEY / EMAIL_FROM missing). ` +
        `Lead for "${email.subject}" was received but NOT emailed.\n${email.text}`,
    );
    return { ok: true, delivered: false };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: email.to,
      subject: email.subject,
      replyTo: email.replyTo,
      text: email.text,
    });
    if (error) return { ok: false, delivered: false, error: error.message };
    return { ok: true, delivered: true };
  } catch (e) {
    return { ok: false, delivered: false, error: e instanceof Error ? e.message : "send failed" };
  }
}

/** Distinct, unambiguous subject prefixes keep the two lead types separate. */
export const inboxes = {
  quote: {
    to: () => process.env.LEAD_INBOX_QUOTE || "ori@clearmarketingdigital.com",
    subjectPrefix: `[Quote Request] ${siteConfig.shortName}`,
  },
  bid: {
    to: () => process.env.LEAD_INBOX_BID || "ori@clearmarketingdigital.com",
    subjectPrefix: `[Bid Inquiry — Public Sector] ${siteConfig.shortName}`,
  },
};
