import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, ShieldCheck } from "lucide-react";

import { offices, officeAddress } from "@/lib/locations";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Our Two Brooklyn Offices — Walk-Ins Welcome",
  description: `${siteConfig.name} has two ground-floor, walk-in offices: 170 Hicks St in Brooklyn Heights (the original) and 232 Leonard St in Williamsburg (main office). Estimates, key cutting, hardware pickup, and dispatch.`,
  alternates: { canonical: "/locations" },
  openGraph: { url: absoluteUrl("/locations") },
};

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ]}
      />

      <section className="relative overflow-hidden border-b border-line">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl font-bold uppercase leading-[1.12] text-ink md:text-5xl">
              Two real Brooklyn offices — walk right in
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body">
              Downtown Door Repair &amp; Security runs two ground-floor, glass-door offices. Both take
              walk-ins for estimates, key cutting, lock and hardware pickup, and security design
              consults — and both dispatch techs across the five boroughs. {siteConfig.hours.display}.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Visit us" title="Pick your office" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {offices.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-surface p-7 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
              >
                <span className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
                  {o.role === "original" ? "The original location" : "Main office"}
                </span>
                <h2 className="mt-2 text-xl font-bold text-ink">{o.name}</h2>
                <div className="mt-4 space-y-2 text-sm text-body">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-500" aria-hidden />
                    {officeAddress(o)}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-500" aria-hidden />
                    {o.phone.display}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-500" aria-hidden />
                    {siteConfig.hours.display}
                  </p>
                  <p className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brand-500" aria-hidden />
                    NYC DCWP License #{siteConfig.credentials.licenseNumber}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  Office details, map &amp; directions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title="Not near an office? We come to you — 24/7 dispatch." />
    </>
  );
}
