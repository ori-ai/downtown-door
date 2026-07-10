import type { Metadata } from "next";
import { ShieldCheck, Building2, Users, Wrench, HeartHandshake, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { ImageSlot } from "@/components/ui/image-slot";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Downtown Door Repair & Security is a Brooklyn-based door repair, locksmith, and security company serving homes, businesses, and institutions across Brooklyn and Manhattan.",
  alternates: { canonical: "/about" },
  openGraph: { url: absoluteUrl("/about") },
};

const values = [
  { icon: Wrench, title: "Do it right the first time", desc: "We diagnose the real cause and fix it properly — not the quickest patch." },
  { icon: HeartHandshake, title: "Straight talk on price", desc: "Clear scope and pricing before work starts. No surprises on the invoice." },
  { icon: ShieldCheck, title: "Licensed & insured", desc: "Proper credentials and documentation, for homeowners and institutions alike." },
  { icon: Building2, title: "Built for any client", desc: "From a single apartment door to a full building security system." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-sm font-medium text-brand-700">
              <MapPin className="h-4 w-4" aria-hidden />
              Brooklyn &amp; Manhattan
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl">About Downtown Door Repair &amp; Security</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              We&apos;re a Brooklyn-based door, lock, and security company serving homeowners,
              businesses, and institutions across Brooklyn and Manhattan — from emergency
              repairs to full building security systems.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <h2 className="text-2xl">Who we are</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  Downtown Door Repair &amp; Security handles the full range of door,
                  hardware, locksmith, and security work — repair and installation,
                  emergency response, storefront and commercial doors, locks and smart
                  hardware, and access control, intercoms, and cameras.
                </p>
                <p>
                  We work for two very different kinds of clients: homeowners and
                  businesses who need something fixed quickly and correctly, and
                  institutional clients — schools, hospitals, and municipal facilities —
                  who need a vendor with the credentials and process to deliver on public
                  projects. We&apos;re set up to serve both well.
                </p>
                <p className="text-sm text-muted">
                  Company history, team bios, and founding details will be added here once
                  provided by the business — we don&apos;t publish details we can&apos;t verify.
                </p>
              </div>
            </div>
            <ImageSlot label="Team / van / shopfront photo" aspect="aspect-[4/3]" />
          </div>
        </Container>
      </Section>

      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="How we work" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-white p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <v.icon className="h-5.5 w-5.5" aria-hidden />
                </span>
                <h3 className="mt-4 font-bold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm text-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section topBorder>
        <Container>
          <div className="grid gap-6 rounded-3xl border border-line bg-white p-8 md:grid-cols-3 md:p-10">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 shrink-0 text-brand-600" aria-hidden />
              <div>
                <h3 className="font-bold text-ink">Licensed &amp; Insured</h3>
                <p className="mt-1 text-sm text-body">Documentation available on request.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 shrink-0 text-brand-600" aria-hidden />
              <div>
                <h3 className="font-bold text-ink">Residential &amp; commercial</h3>
                <p className="mt-1 text-sm text-body">Homes, storefronts, offices, and buildings.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="h-6 w-6 shrink-0 text-brand-600" aria-hidden />
              <div>
                <h3 className="font-bold text-ink">Institutional-ready</h3>
                <p className="mt-1 text-sm text-body">Set up for public-sector procurement.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title="Work with us" subtitle={`Serving Brooklyn & Manhattan. Call ${siteConfig.phone.display} or request a quote.`} />
    </>
  );
}
