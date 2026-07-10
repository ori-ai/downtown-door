import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  ArrowRight,
  GraduationCap,
  Cross,
  Landmark,
  ShieldCheck,
  Building2,
  ClipboardCheck,
  Wrench,
  BadgeCheck,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

import {
  clientsServed,
  whyChoose,
  credentialFields,
  procurementPortals,
  safetyStatement,
  govFaqs,
} from "@/lib/government";
import { faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { FaqList } from "@/components/ui/faq";
import { JsonLd } from "@/components/json-ld";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  Cross,
  Landmark,
  ShieldCheck,
  Building2,
  ClipboardCheck,
  Wrench,
};

export const metadata: Metadata = {
  title: "Government & Institutional Contracting",
  description:
    "Downtown Door Repair & Security serves NYC public schools, hospitals, and municipal agencies — with the licensing, insurance, compliance, and capability institutional door and security projects require.",
  alternates: { canonical: "/government-contracting" },
  openGraph: { url: absoluteUrl("/government-contracting") },
};

export default function GovernmentContractingPage() {
  return (
    <>
      <JsonLd data={faqSchema(govFaqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Government Contracting", path: "/government-contracting" },
        ]}
      />

      {/* Hero — credential-led, no call urgency */}
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/security-cctv.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/92 to-brand-950/60" />
        </div>
        <Container className="relative py-16 md:py-20">
          <div className="reveal max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-sm font-medium text-brand-100">
              <Landmark className="h-4 w-4" aria-hidden />
              Public sector & institutional
            </p>
            <h1 className="mt-5 text-4xl text-white md:text-5xl">
              A door & security vendor you can vet.
            </h1>
            {/* Answer-first (GEO/AEO) */}
            <p className="mt-5 text-lg leading-relaxed text-brand-100">
              Downtown Door Repair &amp; Security supports facilities and procurement
              teams at NYC public schools, hospitals, and municipal agencies — providing
              door repair, replacement, and security systems backed by the licensing,
              insurance, compliance, and references institutional buyers require.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/government-contracting/capability-statement"
                className={buttonVariants({ size: "lg", className: "bg-white text-brand-800 hover:bg-brand-50" })}
              >
                <FileText className="h-4.5 w-4.5" aria-hidden />
                Request Capability Statement
              </Link>
              <Link
                href="/contact?type=bid"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "border-white/25 bg-transparent text-white hover:bg-white/10 hover:border-white/40",
                })}
              >
                Submit a Bid Inquiry
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Who we serve */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Who we serve" title="Built for institutional facilities" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {clientsServed.map((c) => {
              const Icon = icons[c.icon] ?? Building2;
              return (
                <div key={c.name} className="rounded-2xl border border-line bg-white p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{c.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why choose us */}
      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Why institutional clients choose us"
            title="Proof of capacity, not sales pressure"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {whyChoose.map((w) => {
              const Icon = icons[w.icon] ?? BadgeCheck;
              return (
                <div key={w.title} className="flex gap-4 rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-body">{w.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Credentials & compliance */}
      <Section topBorder>
        <Container>
          <SectionHeading
            eyebrow="Credentials & compliance"
            title="Licensing, insurance & bonding"
            intro="The documentation your vendor file needs. Specifics are provided on request and confirmed before any award."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-line">
                  {credentialFields.map((f) => (
                    <tr key={f.label} className="bg-white">
                      <th scope="row" className="w-1/2 px-5 py-4 align-top font-semibold text-ink">
                        {f.label}
                        <span className="mt-0.5 block text-xs font-normal text-muted">{f.hint}</span>
                      </th>
                      <td className="px-5 py-4 align-top">
                        {f.value ? (
                          <span className="font-medium text-body">{f.value}</span>
                        ) : (
                          <span className="inline-flex items-center rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-brand-700">
                            Provided on request
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-7">
              <div className="flex items-center gap-2 text-brand-700">
                <ShieldCheck className="h-5 w-5" aria-hidden />
                <h3 className="font-bold text-ink">Safety & compliance</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-body">{safetyStatement}</p>
              <Link
                href="/government-contracting/capability-statement"
                className={buttonVariants({ variant: "secondary", className: "mt-5" })}
              >
                <FileText className="h-4.5 w-4.5" aria-hidden />
                Request full documentation
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Procurement registrations */}
      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Procurement"
            title="Portal registrations"
            intro="We can confirm current registration status for your procurement process on request."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {procurementPortals.map((p) => (
              <div key={p.name} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-body">{p.full}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 text-xs font-medium text-brand-700">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                  {p.status}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capability statement + case studies teaser */}
      <Section topBorder>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-brand-200 bg-brand-950 p-8 text-white">
              <FileText className="h-8 w-8 text-brand-300" aria-hidden />
              <h3 className="mt-4 text-2xl text-white">Capability statement</h3>
              <p className="mt-2 flex-1 text-brand-100">
                A one-page summary of who we are, what we do, our credentials, and how to
                engage us on institutional projects.
              </p>
              <Link
                href="/government-contracting/capability-statement"
                className={buttonVariants({ className: "mt-6 self-start bg-white text-brand-800 hover:bg-brand-50" })}
              >
                Request it
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl border border-line bg-white p-8">
              <ClipboardCheck className="h-8 w-8 text-brand-600" aria-hidden />
              <h3 className="mt-4 text-2xl">Past project references</h3>
              <p className="mt-2 flex-1 text-body">
                Institutional project references are provided directly to procurement
                teams on request, matched to your solicitation.
              </p>
              <Link
                href="/government-contracting/case-studies"
                className={buttonVariants({ variant: "outline", className: "mt-6 self-start" })}
              >
                View case studies
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Institutional questions" />
          <div className="mt-8 max-w-3xl">
            <FaqList faqs={govFaqs} />
          </div>
        </Container>
      </Section>

      {/* Bid inquiry CTA */}
      <Section topBorder>
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-brand-950 p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <h2 className="text-3xl text-white">Have a solicitation or project?</h2>
              <p className="mt-3 text-brand-100">
                Submit a bid inquiry with your project type, timeline, and any RFP or bid
                reference number — we'll respond with the documentation you need.
              </p>
            </div>
            <Link
              href="/contact?type=bid"
              className={buttonVariants({ size: "lg", className: "bg-white text-brand-800 hover:bg-brand-50" })}
            >
              Submit a Bid Inquiry
              <ArrowRight className="h-4.5 w-4.5" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
