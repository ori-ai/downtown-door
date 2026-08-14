import { NextResponse } from "next/server";
import { bidSchema } from "@/lib/forms";
import { verifyTurnstile, sendLeadEmail, inboxes } from "@/lib/server/leads";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = bidSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }
  const data = parsed.data;

  if (data.company) return NextResponse.json({ ok: true, delivered: false }); // honeypot

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const human = await verifyTurnstile(data.turnstileToken, ip);
  if (!human) {
    return NextResponse.json({ ok: false, error: "Spam check failed. Please retry." }, { status: 403 });
  }

  const text = [
    `New bid inquiry — ${data.organization}`,
    ``,
    `Organization:   ${data.organization}`,
    `Org type:       ${data.orgType || "—"}`,
    `Contact:        ${data.contactName}`,
    `Email:          ${data.email}`,
    `Phone:          ${data.phone || "—"}`,
    `Project type:   ${data.projectType || "—"}`,
    `Timeline:       ${data.timeline || "—"}`,
    `RFP/Bid ref:    ${data.rfpReference || "—"}`,
    `Wants cap. stmt: ${data.requestCapabilityStatement ? "YES" : "no"}`,
    ``,
    `Details:`,
    data.message,
  ].join("\n");

  const result = await sendLeadEmail({
    to: inboxes.bid.to(),
    subject: `${inboxes.bid.subjectPrefix} — ${data.organization}`,
    replyTo: data.email,
    text,
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "Could not send. Please email us directly." }, { status: 502 });
  }

  // Fire-and-forget: instant labeled WhatsApp to Ori via Clever.
  await fetch("https://tools.getclearops.io/clever/lead_notify", {
    signal: AbortSignal.timeout(4000),
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company: "Downtown Doors & Security Systems NYC", source: "website-bid",
      name: data.contactName, phone: data.phone, email: data.email,
      service: data.orgType, message: `[Commercial Bid Inquiry] ${data.message}`,
    }),
  }).catch(() => {});
  return NextResponse.json({ ok: true, delivered: result.delivered });
}
