import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  TrainFront,
  CircleParking,
  ShieldCheck,
} from "lucide-react";

import { offices, getOffice, officeAddress } from "@/lib/locations";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { officeSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return offices.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const office = getOffice(slug);
  if (!office) return {};
  return {
    title: `West Village Locksmith & Security Storefront — ${office.street}, NYC`,
    description: `${siteConfig.name} at ${officeAddress(office)} — ground-floor walk-in office for locksmith, intercom, access control & security work. ${office.phone.display}. Open 24/7.`,
    alternates: { canonical: `/locations/${office.slug}` },
    openGraph: {
      url: absoluteUrl(`/locations/${office.slug}`),
      title: `${siteConfig.name} — ${office.shortLabel}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const office = getOffice(slug);
  if (!office) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: office.shortLabel, path: `/locations/${office.slug}` },
  ];

  return (
    <>
      {/* This office's own ["Locksmith","LocalBusiness"] node (merges by @id
          with the sitewide graph) */}
      <JsonLd data={officeSchema(office)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(44rem 28rem at 8% -20%, color-mix(in oklab, var(--color-brand-600) 30%, transparent), transparent 60%)",
          }}
          aria-hidden
        />
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-800 bg-brand-950/50 px-3 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              The storefront — walk-ins welcome
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold uppercase leading-[1.12] tracking-[0.005em] text-ink md:text-5xl">
              {office.shortLabel} Office — {office.street}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body">{office.intro}</p>

            {/* NAP block — THIS office's own number only */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-surface p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <MapPin className="h-4 w-4 text-brand-400" aria-hidden />
                  {officeAddress(office)}
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-body">
                  <Clock className="h-4 w-4 text-brand-400" aria-hidden />
                  {siteConfig.hours.display}
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-body">
                  <ShieldCheck className="h-4 w-4 text-brand-400" aria-hidden />
                  NYC DCWP License #{siteConfig.credentials.licenseNumber}
                </div>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <a href={office.phone.href} className={buttonVariants({ size: "lg" })}>
                  <Phone className="h-4.5 w-4.5" aria-hidden />
                  {office.phone.display}
                </a>
                <a
                  href={office.hasMap}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "border-brand-700 bg-brand-950/40 text-ink hover:bg-brand-900/50",
                  })}
                >
                  Get directions
                  <ArrowRight className="h-4.5 w-4.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What you can do here + story */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading eyebrow="Walk-in office" title="What you can do at this office" />
              <ul className="mt-6 grid gap-3">
                {office.walkInServices.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-4 text-sm text-body"
                  >
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg leading-relaxed text-body">{office.story}</p>
            </div>

            {/* Embedded Google Map */}
            <div>
              <div className="overflow-hidden rounded-2xl border border-line">
                <iframe
                  src={office.mapEmbedSrc}
                  title={`Map — ${siteConfig.name}, ${officeAddress(office)}`}
                  className="h-[24rem] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Transit + parking */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-ink">
                    <TrainFront className="h-4 w-4 text-brand-400" aria-hidden />
                    Getting here
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-body">
                    {office.transitNotes.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-ink">
                    <CircleParking className="h-4 w-4 text-brand-400" aria-hidden />
                    Parking
                  </h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-body">
                    {office.parkingNotes.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Real office photos — rendered ONLY when real photos exist. Never stock. */}
      {office.photos.length ? (
        <Section topBorder className="bg-surface">
          <Container>
            <SectionHeading
              eyebrow="Inside the office"
              title={`${office.shortLabel} — the real thing`}
              intro="Actual photos of this office — no stock imagery."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {office.photos.map((p) => (
                <div key={p.src} className="relative h-64 overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Cross-links: the other office + the neighborhood page */}
      <Section topBorder>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {offices
              .filter((o) => o.slug !== office.slug)
              .map((o) => (
                <Link
                  key={o.slug}
                  href={`/locations/${o.slug}`}
                  className="group rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300"
                >
                  <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                    <MapPin className="h-5 w-5 text-brand-500" aria-hidden />
                    Our {o.shortLabel} office
                  </h3>
                  <p className="mt-2 text-sm text-body">{officeAddress(o)}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    Visit page
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              ))}
            <Link
              href={`/service-areas/manhattan/${office.neighborhood.toLowerCase().replace(/ /g, "-")}`}
              className="group rounded-2xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
                <MapPin className="h-5 w-5 text-brand-500" aria-hidden />
                Our work in {office.neighborhood}
              </h3>
              <p className="mt-2 text-sm text-body">
                Locksmith, intercom, access control &amp; security service around this office.
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                {office.neighborhood} service area
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      <CtaBand title={`Stop by ${office.street} or call ${office.phone.display}`} />
    </>
  );
}
