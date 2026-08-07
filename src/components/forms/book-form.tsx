"use client";

import * as React from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { bookSchema } from "@/lib/forms";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { Label, Input, Textarea, Select, FieldError, Honeypot } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Turnstile } from "@/components/forms/turnstile";

type Errors = Partial<Record<string, string>>;

export function BookForm({ defaultService }: { defaultService?: string }) {
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = React.useState<string>("");
  const tokenRef = React.useRef<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      service: String(fd.get("service") || ""),
      address: String(fd.get("address") || ""),
      preferredDate: String(fd.get("preferredDate") || ""),
      preferredWindow: String(fd.get("preferredWindow") || "") || undefined,
      message: String(fd.get("message") || ""),
      company: String(fd.get("company") || ""),
      turnstileToken: tokenRef.current,
    };

    const parsed = bookSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([k, v]) => [k, v?.[0]])));
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error || "Something went wrong. Please call us.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("Network error. Please call us.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-800 bg-brand-950/50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-600" aria-hidden />
        <h3 className="mt-3 text-xl font-bold text-ink">Request received</h3>
        <p className="mt-2 text-body">
          Thanks — we&apos;ll confirm your appointment time shortly. For urgent help, call{" "}
          <a href={siteConfig.phone.href} className="font-semibold text-brand-700">
            {siteConfig.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-4">
      <Honeypot />
      <p className="text-xs text-muted">
        This requests a time — it isn&apos;t a confirmed booking yet. We&apos;ll call or email to lock it in.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-name" required>Name</Label>
          <Input id="b-name" name="name" autoComplete="name" placeholder="Your name" />
          <FieldError>{errors.name}</FieldError>
        </div>
        <div>
          <Label htmlFor="b-phone" required>Phone</Label>
          <Input id="b-phone" name="phone" type="tel" autoComplete="tel" placeholder="(917) 000-0000" />
          <FieldError>{errors.phone}</FieldError>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-email">Email</Label>
          <Input id="b-email" name="email" type="email" autoComplete="email" placeholder="you@email.com" />
          <FieldError>{errors.email}</FieldError>
        </div>
        <div>
          <Label htmlFor="b-service">Service needed</Label>
          <Select id="b-service" name="service" defaultValue={defaultService || ""}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure">Not sure yet</option>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-date">Preferred date</Label>
          <Input id="b-date" name="preferredDate" type="date" />
        </div>
        <div>
          <Label htmlFor="b-window">Preferred time</Label>
          <Select id="b-window" name="preferredWindow" defaultValue="">
            <option value="">No preference</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="b-address">Address / neighborhood</Label>
        <Input id="b-address" name="address" placeholder="Where's the job? (Brooklyn, Manhattan, Queens, Bronx, or Staten Island)" />
      </div>
      <div>
        <Label htmlFor="b-message">Anything else we should know?</Label>
        <Textarea id="b-message" name="message" placeholder="Briefly describe the job (optional)." />
      </div>

      <Turnstile onToken={(t) => (tokenRef.current = t)} />

      {serverError ? <p className="text-sm text-emergency">{serverError}</p> : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request this time"}
        </Button>
        <a href={siteConfig.phone.href} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
          <Phone className="h-4 w-4" aria-hidden />
          or call {siteConfig.phone.display}
        </a>
      </div>
    </form>
  );
}
