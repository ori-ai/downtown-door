import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ClipboardList, ShieldCheck } from "lucide-react";

import { caseStudies } from "@/lib/government";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Institutional Case Studies & References",
  description:
    "Past institutional door and security project references from Downtown Doors, Locksmith & Security Systems NYC, provided to procurement teams on request.",
  alternates: { canonical: "/government-contracting/case-studies" },
  openGraph: { url: absoluteUrl("/government-contracting/case-studies") },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Government Contracting", path: "/government-contracting" },
          { name: "Case Studies", path: "/government-contracting/case-studies" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Project references</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Institutional door and security project references — matched to your
              solicitation and provided directly to procurement teams.
            </p>
          </div>
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl border border-line ring-soft lg:block">
            <Image
              src="/images/real/real-storefront-mortise-install.jpg"
              alt="Commercial mortise lock hardware install, institutional-style building"
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          {caseStudies.length === 0 ? (
            // Honest empty state — we never invent projects, dollar amounts, or clients.
            <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface p-8 text-center md:p-12">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-950/60 text-brand-300">
                <ClipboardList className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mt-5 text-2xl">References available on request</h2>
              <p className="mt-3 text-body">
                We provide verified institutional project references directly to
                procurement and facilities teams, matched to your specific requirements —
                rather than publishing them here. Reach out with your solicitation and
                we&apos;ll share the most relevant references for your evaluation.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
                <Link href="/contact?type=bid" className={buttonVariants({ size: "lg" })}>
                  Request references
                </Link>
                <Link
                  href="/government-contracting/capability-statement"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Capability statement
                </Link>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
                <ShieldCheck className="h-4 w-4 text-brand-500" aria-hidden />
                We only list real, verifiable projects — added here as they&apos;re cleared to share.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <div key={cs.project} className="rounded-2xl border border-line bg-surface p-7">
                  <h3 className="text-lg font-bold text-ink">{cs.project}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">{cs.client}</p>
                  <p className="mt-3 text-sm text-body">{cs.summary}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
