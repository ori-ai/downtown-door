import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { brandPages, supplierBrands } from "@/lib/brands";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Hardware Brands We Install",
  description:
    "Mul-T-Lock, Schlage, ENFORCER, Rosslare, Seco-Larm, and other real hardware brands Downtown Doors & Security Systems NYC installs and services across the five boroughs.",
  alternates: { canonical: "/brands" },
  openGraph: { url: absoluteUrl("/brands") },
};

export default function BrandsIndexPage() {
  const toolBrands = supplierBrands.filter((b) => !b.page);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Hardware brands we install</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Real hardware we stock and install, confirmed in our own jobsite photos —
              not a generic industry list.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Locksmith & security hardware" title="Browse by brand" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brandPages.map((b) => (
              <Link
                key={b.page.slug}
                href={`/brands/${b.page.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand-500"
              >
                <span className="font-display text-lg font-bold uppercase tracking-wide text-ink">
                  {b.name}
                </span>
                <ArrowRight
                  className="h-5 w-5 text-brand-600 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {toolBrands.length ? (
        <Section topBorder className="bg-surface">
          <Container>
            <SectionHeading eyebrow="On the truck" title="Tools we work with" />
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {toolBrands.map((b) => (
                <li key={b.name} className="font-display text-base font-bold uppercase tracking-wide text-body/80">
                  {b.name}
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
