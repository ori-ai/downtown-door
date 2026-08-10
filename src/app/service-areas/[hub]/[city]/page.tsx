import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

import {
  allPublishedNeighborhoods,
  getNeighborhood,
  getHub,
} from "@/lib/service-areas";
import { services } from "@/lib/services";
import { localServices } from "@/lib/local-services";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaBand } from "@/components/sections/cta-band";
import { QuoteForm } from "@/components/forms/quote-form";

export const dynamicParams = false;

// Real, no-person job photos rotated across neighborhoods so each area page has a
// distinct local image (a local-relevance signal, per Ori's SEO experience).
// Curated for consistent quality — well-lit, sharp, clearly-framed shots only.
const AREA_PHOTOS = [
  "/images/real/real-commercial-door.jpg",
  "/images/real/real-storefront-door.jpg",
  "/images/real/real-access-install.jpg",
  "/images/real/real-mortise-keys.jpg",
  "/images/real/real-intercom-button.jpg",
  "/images/real/real-cctv-camera.jpg",
  "/images/real/real-electric-strike.jpg",
  "/images/real/real-panic-bar-exit.jpg",
  "/images/real/real-commercial-lock.jpg",
  "/images/real/real-drill-install.jpg",
  "/images/real/real-office-install.jpg",
  "/images/real/real-padlocks-gate.jpg",
  "/images/real/real-cctv-brick.jpg",
  "/images/real/real-intercom-outdoor.jpg",
  "/images/real/real-nyc-rooftop-access.jpg",
  "/images/real/real-black-door-cylinder.jpg",
  "/images/real/real-commercial-mortise-install.jpg",
  "/images/real/real-vestibule-door-latch.jpg",
  "/images/real/real-electric-strike-install-2.jpg",
  "/images/real/real-high-security-cylinder.jpg",
  "/images/real/real-smart-lock-kit.jpg",
  "/images/real/real-brass-strike-install.jpg",
  "/images/real/real-brownstone-jobsite.jpg",
  "/images/real/real-door-closer.jpg",
  "/images/real/real-keypad-lever-lock.jpg",
  "/images/real/real-landmark-door-hardware.jpg",
  "/images/real/real-mortise-repair.jpg",
  "/images/real/real-rooftop-door-install.jpg",
  "/images/real/real-black-gate-drill-install.jpg",
  "/images/real/real-bracket-install-street.jpg",
  "/images/real/real-brass-deadbolt-drill.jpg",
  "/images/real/real-brass-knob-outdoor.jpg",
  "/images/real/real-brick-wall-install.jpg",
  "/images/real/real-dome-camera-mount.jpg",
  "/images/real/real-door-closer-install.jpg",
  "/images/real/real-fence-hinge-install.jpg",
  "/images/real/real-frame-repair-oscillating.jpg",
  "/images/real/real-glass-door-measure.jpg",
  "/images/real/real-intercom-glove-install.jpg",
  "/images/real/real-intercom-wiring-gray-door.jpg",
  "/images/real/real-keypad-deadbolt-key.jpg",
  "/images/real/real-mortise-cylinder-install.jpg",
  "/images/real/real-office-door-open.jpg",
  "/images/real/real-panic-bar-black-door.jpg",
  "/images/real/real-panic-bar-red-door.jpg",
  "/images/real/real-panic-bar-street-install.jpg",
  "/images/real/real-reader-gray-door-install.jpg",
  "/images/real/real-reader-install-green.jpg",
  "/images/real/real-storefront-gate-install.jpg",
  "/images/real/real-storefront-mortise-install.jpg",
  "/images/real/real-storefront-pull-door.jpg",
  "/images/real/real-strike-plate-drill.jpg",
  "/images/real/real-wood-gate-padlocks.jpg",
  "/images/real/real-access-board-wiring.jpg",
  "/images/real/real-exposed-wires-access-box.jpg",
  "/images/real/real-gear-hardwood-entry.jpg",
  "/images/real/real-keypad-lever-standalone.jpg",
  "/images/real/real-mortise-pocket-chisel.jpg",
  "/images/real/real-security-hardware-stock.jpg",
  "/images/real/real-sensor-wire-install.jpg",
  "/images/real/real-storefront-door-repair-candid.jpg",
  "/images/real/real-glass-rail-install-candid.jpg",
];
function areaPhoto(slug: string): string {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return AREA_PHOTOS[h % AREA_PHOTOS.length];
}

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
  const localPhoto = areaPhoto(neighborhood.slug);

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

      {/* Hero — two-column with a local job photo */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(44rem 28rem at 8% -20%, color-mix(in oklab, var(--color-brand-600) 30%, transparent), transparent 60%)" }}
          aria-hidden
        />
        <Container className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-800 bg-brand-950/50 px-3 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {neighborhood.name}, {hub.name}
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold uppercase leading-[1.12] tracking-[0.005em] text-ink md:text-5xl">
              Locksmith &amp; Security in {neighborhood.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body">{neighborhood.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#quote-form" className={buttonVariants({ size: "lg" })}>
                Request your on-site quote
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </a>
              <a
                href={siteConfig.phone.href}
                className={buttonVariants({ variant: "outline", size: "lg", className: "border-brand-700 bg-brand-950/40 text-ink hover:bg-brand-900/50" })}
              >
                <Phone className="h-4.5 w-4.5" aria-hidden />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
          <div
            className="relative h-[20rem] overflow-hidden rounded-xl border border-brand-800 bg-surface bg-cover bg-center shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)] lg:h-[26rem]"
            style={{ backgroundImage: `url('${localPhoto}')` }}
            role="img"
            aria-label={`Door, lock, and security work by Downtown Doors, Locksmith & Security Systems NYC in ${neighborhood.name}, ${hub.name}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1330] via-transparent to-transparent" />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-brand-800 bg-[#0a1330]/80 px-4 py-2.5 text-sm font-medium text-ink backdrop-blur-sm">
              On-site in {neighborhood.name} — {hub.name}
            </div>
          </div>
        </Container>
      </section>

      {/* Local context + services */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink">Serving {neighborhood.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{neighborhood.localContext}</p>
              <p className="mt-4 text-lg leading-relaxed text-body">
                Across {neighborhood.name}, the most common calls are door repair and re-alignment on
                high-use entries, lock rekeying and lock changes after a move or tenant turnover, and
                storefront and commercial door work — closers, pivots, panic hardware, and glass — for
                the neighborhood&apos;s shops and offices. We also install and service intercom and buzzer
                entry, access control and electric strikes, and security cameras for {neighborhood.name}
                &apos;s apartment buildings and businesses, and provide 24/7 emergency door repair when a
                door won&apos;t lock, won&apos;t close, or has been forced in a break-in.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-body">
                Whether it&apos;s a single sticking apartment door, a fire door that needs to pass
                inspection, a storefront gate that won&apos;t roll, or a full building access-control and
                camera system, Downtown Doors, Locksmith &amp; Security Systems NYC handles it across {neighborhood.name}{" "}
                and the rest of {hub.name} — licensed, insured, and usually the same day.
              </p>

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
              <div className="rounded-2xl border border-line bg-surface p-6">
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

      {/* Programmatic keyword links for this neighborhood (local SEO) */}
      <Section topBorder>
        <Container>
          <SectionHeading
            eyebrow="Popular in this area"
            title={`${neighborhood.name} services`}
            intro={`Dedicated door, lock, and security services for ${neighborhood.name}, ${hub.name}.`}
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/service-areas/${hub.slug}/${neighborhood.slug}/${s.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-3 text-sm font-medium text-body transition-colors hover:border-brand-500 hover:text-ink"
                >
                  {s.name} in {neighborhood.name}
                  <ArrowRight className="h-4 w-4 shrink-0 text-brand-400 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Inline quote form — converts right here, no navigating away */}
      <Section topBorder className="bg-surface">
        <Container>
          <div id="quote-form" className="mx-auto max-w-2xl scroll-mt-24 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <SectionHeading
              eyebrow="Get started"
              title={`Request your on-site quote — ${neighborhood.name}`}
              intro="Tell us what's going on — we'll get back to you with next steps and honest pricing."
            />
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand title={`Need a door or lock handled in ${neighborhood.name}?`} quoteHref="#quote-form" />
    </>
  );
}
