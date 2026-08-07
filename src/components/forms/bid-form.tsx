"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { bidSchema } from "@/lib/forms";
import { emailAddress } from "@/lib/site";
import { Label, Input, Textarea, Select, FieldError, Honeypot } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Turnstile } from "@/components/forms/turnstile";

type Errors = Partial<Record<string, string>>;

export function BidForm({ defaultRequestCapability = false }: { defaultRequestCapability?: boolean }) {
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = React.useState<string>("");
  const tokenRef = React.useRef<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      organization: String(fd.get("organization") || ""),
      contactName: String(fd.get("contactName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      orgType: (String(fd.get("orgType") || "") || undefined) as
        | "Public School"
        | "Hospital / Healthcare"
        | "Municipal / Government"
        | "Other"
        | undefined,
      projectType: String(fd.get("projectType") || ""),
      timeline: String(fd.get("timeline") || ""),
      rfpReference: String(fd.get("rfpReference") || ""),
      requestCapabilityStatement: fd.get("requestCapabilityStatement") === "on",
      message: String(fd.get("message") || ""),
      company: String(fd.get("company") || ""),
      turnstileToken: tokenRef.current,
    };

    const parsed = bidSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([k, v]) => [k, v?.[0]])));
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/bid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(body.error || "Something went wrong. Please email us directly.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("Network error. Please email us directly.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-800 bg-brand-950/50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-600" aria-hidden />
        <h3 className="mt-3 text-xl font-bold text-ink">Inquiry received</h3>
        <p className="mt-2 text-body">
          Thank you. Our team will review your inquiry and respond with the documentation
          you requested. You can also reach us at{" "}
          <a href={`mailto:${emailAddress("bids")}`} className="font-semibold text-brand-700">
            {emailAddress("bids")}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative space-y-4">
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-org" required>Organization</Label>
          <Input id="b-org" name="organization" autoComplete="organization" placeholder="Agency / school / facility" />
          <FieldError>{errors.organization}</FieldError>
        </div>
        <div>
          <Label htmlFor="b-orgtype">Organization type</Label>
          <Select id="b-orgtype" name="orgType" defaultValue="">
            <option value="">Select…</option>
            <option>Public School</option>
            <option>Hospital / Healthcare</option>
            <option>Municipal / Government</option>
            <option>Other</option>
          </Select>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-contact" required>Contact name</Label>
          <Input id="b-contact" name="contactName" autoComplete="name" placeholder="Your name" />
          <FieldError>{errors.contactName}</FieldError>
        </div>
        <div>
          <Label htmlFor="b-email" required>Email</Label>
          <Input id="b-email" name="email" type="email" autoComplete="email" placeholder="you@agency.gov" />
          <FieldError>{errors.email}</FieldError>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-phone">Phone</Label>
          <Input id="b-phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
        </div>
        <div>
          <Label htmlFor="b-timeline">Timeline</Label>
          <Input id="b-timeline" name="timeline" placeholder="e.g. Q3, or bid due date" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-project">Project type</Label>
          <Input id="b-project" name="projectType" placeholder="e.g. door replacement, access control" />
        </div>
        <div>
          <Label htmlFor="b-rfp">RFP / Bid reference #</Label>
          <Input id="b-rfp" name="rfpReference" placeholder="If applicable" />
        </div>
      </div>
      <div>
        <Label htmlFor="b-message" required>Project details / request</Label>
        <Textarea id="b-message" name="message" placeholder="Describe the solicitation, scope, or documentation you need." />
        <FieldError>{errors.message}</FieldError>
      </div>

      <label className="flex items-start gap-2.5 rounded-lg border border-line bg-surface px-4 py-3 text-sm text-body">
        <input
          type="checkbox"
          name="requestCapabilityStatement"
          defaultChecked={defaultRequestCapability}
          className="mt-0.5 h-4 w-4 accent-brand-600"
        />
        Send me the capability statement along with your response.
      </label>

      <Turnstile onToken={(t) => (tokenRef.current = t)} />

      {serverError ? <p className="text-sm text-emergency">{serverError}</p> : null}

      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit bid inquiry"}
      </Button>
    </form>
  );
}
