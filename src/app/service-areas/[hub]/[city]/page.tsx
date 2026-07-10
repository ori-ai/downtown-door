import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MapPin, CheckCircle2 } from "lucide-react";

import {
  allPublishedNeighborhoods,
  getNeighborhood,
  getHub,
} from "@/lib/service-areas";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaBand } from "@/components/sections/cta-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPublishedNeighborhoods().map(({ hub, slug }) => ({ hub, city: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string; city: string }>;
}): Promise<Metadata> {
  const { hub, city } = await params;
  const found = getNeighborhood(hub, city);
  if (!found) return {};
  const { hub: h, neighborhood: n } = found;
  return {
    title: `Door Repair & Locksmith in ${n.name}, ${h.name}`,
    description: n.intro,
    alternates: { canonical: `/service-areas/${h.slug}/${n.slug}` },
    openGraph: { url: absoluteUrl(`/service-areas/${h.slug}/${n.slug}`) },
  };
}

export default async function NeighborhoodPage({
  params,
}: {
  params: Promise<{ hub: string; city: string }>;
}) {
  const { hub: hubSlug, city } = await params;
  const found = getNeighborhood(hubSlug, city);
  if (!found) notFound();
  const { hub, neighborhood } = found;

  // Sibling neighborhoods for internal linking.
  const siblings = hub.neighborhoods.filter((n) => n.slug !== neighborhood.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: hub.name, path: `/service-areas/${hub.slug}` },
          { name: neighborhood.name, path: `/service-areas/${hub.slug}/${neighborhood.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-sm font-medium text-brand-700">
              <MapPin className="h-4 w-4" aria-hidden />
              {neighborhood.name}, {hub.name}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl">
              Door Repair & Security in {neighborhood.name}
            </h1>
            {/* Answer-first, unique to this neighborhood */}
            <p className="mt-4 text-lg leading-relaxed text-body">{neighborhood.intro}</p>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <a href={siteConfig.phone.href} className={buttonVariants({ size: "lg" })}>
                <Phone className="h-4.5 w-4.5" aria-hidden />
                {siteConfig.phone.display}
              </a>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Request a quote
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Local context + services */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
            <div className="max-w-2xl">
              <h2 className="text-2xl">Serving {neighborhood.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{neighborhood.localContext}</p>

              <div className="mt-6 rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-base font-bold text-ink">What we handle locally</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {[
                    "Door repair & alignment",
                    "Entry & interior door installation",
                    "Emergency & break-in repair",
                    "Lock repair, rekeying & smart locks",
                    "Storefront & commercial doors",
                    "Intercom, access control & cameras",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-body">
                      <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-600" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar: nearby neighborhoods */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-white p-6">
                <h2 className="text-sm font-semibold text-ink">Nearby in {hub.name}</h2>
                <ul className="mt-3 space-y-1.5">
                  {siblings.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/service-areas/${hub.slug}/${n.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-body hover:text-brand-700"
                      >
                        <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                        {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/service-areas/${hub.slug}`}
                  className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  All of {hub.name} →
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Services grid */}
      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading eyebrow="Services" title={`Door, lock & security services in ${neighborhood.name}`} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title={`Need a door or lock handled in ${neighborhood.name}?`} />
    </>
  );
}
