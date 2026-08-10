import { NextResponse } from "next/server";
import { bookSchema } from "@/lib/forms";
import { verifyTurnstile, sendLeadEmail, inboxes } from "@/lib/server/leads";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const parsed = bookSchema.safeParse(json);
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
    `New appointment request — ${data.name}`,
    ``,
    `Name:            ${data.name}`,
    `Phone:           ${data.phone}`,
    `Email:           ${data.email || "—"}`,
    `Service:         ${data.service || "—"}`,
    `Address:         ${data.address || "—"}`,
    `Preferred date:  ${data.preferredDate || "No preference given"}`,
    `Preferred time:  ${data.preferredWindow || "No preference given"}`,
    ``,
    `Notes:`,
    data.message || "—",
    ``,
    `This is a REQUESTED time, not a confirmed booking — no live calendar is connected. Confirm the actual appointment with the client directly.`,
  ].join("\n");

  const result = await sendLeadEmail({
    to: inboxes.book.to(),
    subject: `${inboxes.book.subjectPrefix} — ${data.name}`,
    replyTo: data.email || undefined,
    text,
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: "Could not send. Please call us." }, { status: 502 });
  }

  // Fire-and-forget: instant labeled WhatsApp to Ori via Clever, same pipeline
  // as quote/bid — durably logs to Supabase leads + sends a caller SMS too.
  await fetch("https://tools.getclearops.io/clever/lead_notify", {
    signal: AbortSignal.timeout(4000),
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company: "Downtown Doors, Locksmith & Security Systems NYC", source: "website-booking",
      name: data.name, phone: data.phone, email: data.email,
      service: data.service,
      message: `Preferred: ${data.preferredDate || "no date given"}, ${data.preferredWindow || "no time preference"}. ${data.message || ""}`.trim(),
    }),
  }).catch(() => {});
  return NextResponse.json({ ok: true, delivered: result.delivered });
}
