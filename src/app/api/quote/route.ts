import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/forms";
import { verifyTurnstile, sendLeadEmail, inboxes } from "@/lib/server/leads";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = quoteSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the form and try again.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }
  const data = parsed.data;

  // Honeypot: real users never fill "company".
  if (data.company) return NextResponse.json({ ok: true, delivered: false });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const human = await verifyTurnstile(data.turnstileToken, ip);
  if (!human) {
    return NextResponse.json({ ok: false, error: "Spam check failed. Please retry." }, { status: 403 });
  }

  const text = [
    `New quote request — ${data.name}`,
    ``,
    `Name:    ${data.name}`,
    `Phone:   ${data.phone}`,
    `Email:   ${data.email || "—"}`,
    `Service: ${data.service || "—"}`,
    `Address: ${data.address || "—"}`,
    ``,
    `Message:`,
    data.message,
  ].join("\n");

  const result = await sendLeadEmail({
    to: inboxes.quote.to(),
    subject: `${inboxes.quote.subjectPrefix} — ${data.name}`,
    replyTo: data.email || undefined,
    text,
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "Could not send. Please call us." }, { status: 502 });
  }

  // Fire-and-forget: instant labeled WhatsApp to Ori via Clever.
  await fetch("https://tools.getclearops.io/clever/lead_notify", {
    signal: AbortSignal.timeout(4000),
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company: "Downtown Doors & Security Systems NYC", source: "website-quote",
      name: data.name, phone: data.phone, email: data.email,
      service: (data as { service?: string }).service, message: (data as { message?: string }).message,
    }),
  }).catch(() => {});
  return NextResponse.json({ ok: true, delivered: result.delivered });
}
