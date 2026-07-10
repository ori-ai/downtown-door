import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Clock, ArrowRight } from "lucide-react";

import { areaHubs, getHub } from "@/lib/service-areas";
import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaBand } from "@/components/sections/cta-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return areaHubs.map((h) => ({ hub: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string }>;
}): Promise<Metadata> {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) return {};

  if (!hub.published) {
    return {
      title: `${hub.name} — Coming Soon`,
      description: hub.intro,
      robots: { index: false, follow: true },
      alternates: { canonical: `/service-areas/${hub.slug}` },
    };
  }

  return {
    title: `Door Repair, Locksmith & Security in ${hub.name}`,
    description: `Door repair, installation, locksmith, and security systems across ${hub.name}. Serving its neighborhoods with fast, reliable local service.`,
    alternates: { canonical: `/service-areas/${hub.slug}` },
    openGraph: { url: absoluteUrl(`/service-areas/${hub.slug}`) },
  };
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ hub: string }>;
}) {
  const { hub: hubSlug } = await params;
  const hub = getHub(hubSlug);
  if (!hub) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service Areas", path: "/service-areas" },
    { name: hub.name, path: `/service-areas/${hub.slug}` },
  ];

  // Phase 2 (reserved) — "coming soon" state.
  if (!hub.published) {
    return (
      <>
        <Breadcrumbs items={crumbs} />
        <Section>
          <Container>
            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-line bg-surface p-10 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700">
                <Clock className="h-4 w-4" aria-hidden />
                Phase 2 — Coming soon
              </span>
              <h1 className="mt-4 text-3xl">{hub.name}</h1>
              <p className="mt-3 text-body">{hub.intro}</p>
              <div className="mt-6 flex flex-col justify-center gap-2.5 sm:flex-row">
                <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                  Ask about {hub.name}
                </Link>
                <Link href="/service-areas" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  See current areas
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </>
    );
  }

  // Phase 1 — published borough hub.
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <section className="relative overflow-hidden bg-white">
        <div className="bg-aurora grain" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/60 to-white" aria-hidden />
        <Container className="relative grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <div className="reveal">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-brand-700">
              <MapPin className="h-4 w-4" aria-hidden />
              {hub.name}, {hub.state}
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl">
              Door Repair & Security in {hub.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-body">{hub.intro}</p>
          </div>
          <div
            className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl border border-line ring-soft"
            style={{ ["--reveal-delay" as string]: "0.12s" }}
          >
            <Image
              src="/images/hero-entry.png"
              alt={`Door & security service in ${hub.name}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/25 via-transparent to-transparent" />
          </div>
        </Container>
      </section>

      {/* Neighborhoods */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Neighborhoods" title={`Where we work in ${hub.name}`} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hub.neighborhoods.map((n) => (
              <Link
                key={n.slug}
                href={`/service-areas/${hub.slug}/${n.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-950/5"
              >
                <div className="flex items-center gap-2 text-brand-600">
                  <MapPin className="h-5 w-5" aria-hidden />
                  <h3 className="text-lg font-bold text-ink">{n.name}</h3>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{n.intro}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                  {n.name} services
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services offered here */}
      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title={`What we do across ${hub.name}`}
            intro="Every service we offer is available throughout the borough — for homes and businesses alike."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand title={`Door or security help in ${hub.name}?`} />
    </>
  );
}
