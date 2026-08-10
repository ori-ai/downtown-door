import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Download, CheckCircle2, Clock } from "lucide-react";

import { capabilityStatement } from "@/lib/government";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { BidForm } from "@/components/forms/bid-form";

export const metadata: Metadata = {
  title: "Capability Statement",
  description:
    "Request the Downtown Doors, Locksmith & Security Systems NYC capability statement — company overview, services, licensing, insurance, and how to engage us on institutional projects.",
  alternates: { canonical: "/government-contracting/capability-statement" },
  openGraph: { url: absoluteUrl("/government-contracting/capability-statement") },
};

const included = [
  "Company overview & core competencies",
  "Door, hardware & security service capabilities",
  "Licensing, insurance & bonding summary",
  "Certifications & procurement registrations",
  "Point of contact & how to engage",
];

export default function CapabilityStatementPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Government Contracting", path: "/government-contracting" },
          { name: "Capability Statement", path: "/government-contracting/capability-statement" },
        ]}
      />

      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/real/real-door-closer-install.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/92 to-brand-950/70" />
        </div>
        <Container className="relative py-14 md:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-brand-100">
              <FileText className="h-4 w-4" aria-hidden />
              For procurement & facilities teams
            </p>
            <h1 className="mt-5 text-4xl text-white md:text-5xl">Capability statement</h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-100">
              A concise summary of who we are, what we deliver, and the credentials your
              vendor file needs — for door, hardware, and security projects at schools,
              hospitals, and municipal facilities.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Download / status + what's included */}
            <div>
              {capabilityStatement.available ? (
                <a
                  href="/downloads/capability-statement.pdf"
                  className={buttonVariants({ size: "lg" })}
                  download
                >
                  <Download className="h-4.5 w-4.5" aria-hidden />
                  Download capability statement (PDF)
                </a>
              ) : (
                <div className="rounded-2xl border border-dashed border-brand-800 bg-brand-950/50 p-6">
                  <div className="flex items-center gap-2 text-brand-700">
                    <Clock className="h-5 w-5" aria-hidden />
                    <h2 className="font-bold text-ink">Being finalized</h2>
                  </div>
                  <p className="mt-2 text-sm text-body">{capabilityStatement.note}</p>
                  <p className="mt-2 text-xs text-muted">
                    Placeholder — the downloadable PDF appears here once the client
                    supplies it.
                  </p>
                </div>
              )}

              <div className="mt-8">
                <h2 className="text-xl font-bold text-ink">What&apos;s included</h2>
                <ul className="mt-4 space-y-2.5">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-body">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                <p className="text-sm text-body">
                  Need it faster, or have a specific solicitation?{" "}
                  <Link href="/contact?type=bid" className="font-semibold text-brand-700 hover:text-brand-800">
                    Submit a full bid inquiry
                  </Link>{" "}
                  and we&apos;ll respond with everything your process requires.
                </p>
              </div>
            </div>

            {/* Request form */}
            <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink">Request the capability statement</h2>
              <p className="mt-1 text-sm text-body">
                Tell us where to send it. We&apos;ll include current licensing and insurance
                documentation.
              </p>
              <div className="mt-5">
                <BidForm defaultRequestCapability />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
