import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";

import { siteConfig, formattedLocation, emailAddress } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";
import { ContactTabs } from "@/components/forms/contact-tabs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Downtown Door Repair & Security — locksmith, security systems, and door repair across the five boroughs. Request a quote for residential or commercial work, or submit a bid inquiry for institutional projects.",
  alternates: { canonical: "/contact" },
  openGraph: { url: absoluteUrl("/contact") },
};

// place_id ties the embed to the actual verified GBP listing pin, not a
// geocoded guess from the address string.
const mapSrc = `https://www.google.com/maps?q=place_id:${siteConfig.reviews.googlePlaceId}&output=embed`;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const initial = type === "bid" ? "bid" : type === "book" ? "book" : "quote";

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Contact us</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Two ways in: a fast quote request for homes and businesses, or a bid
              inquiry for government and institutional projects. Pick the one that fits.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
            {/* Forms */}
            <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <ContactTabs initial={initial} />
            </div>

            {/* Info */}
            <aside className="space-y-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line ring-soft">
                <Image
                  src="/images/real/real-brownstone-jobsite.jpg"
                  alt="On site on a Brooklyn brownstone entry door"
                  fill
                  sizes="22rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold uppercase tracking-widest text-white">
                  On site in Brooklyn
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-surface p-6">
                <h2 className="text-lg font-bold text-ink">Reach us directly</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={siteConfig.phone.href} className="flex items-center gap-2.5 text-body hover:text-brand-700">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-950/60 text-brand-300">
                        <Phone className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      <span className="font-semibold">{siteConfig.phone.display}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${emailAddress("general")}`} className="flex items-center gap-2.5 text-body hover:text-brand-700">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-950/60 text-brand-300">
                        <Mail className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      {emailAddress("general")}
                    </a>
                  </li>
                  {siteConfig.locations.map((loc) => (
                    <li key={loc.street} className="flex items-start gap-2.5 text-body">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-950/60 text-brand-300">
                        <MapPin className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted">
                          {loc.label}
                        </span>
                        {formattedLocation(loc)}
                        <a href={loc.phone.href} className="block font-semibold hover:text-brand-700">
                          {loc.phone.display}
                        </a>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-line pt-3 text-xs text-muted">
                  Also reachable at{" "}
                  <a href={`mailto:${siteConfig.legacyContact.email}`} className="hover:text-brand-700">
                    {siteConfig.legacyContact.email}
                  </a>
                </p>
              </div>

              {/* Emergency line */}
              <div className="rounded-2xl border border-emergency/30 bg-emergency-tint p-6">
                <div className="flex items-center gap-2 text-emergency">
                  <AlertTriangle className="h-5 w-5" aria-hidden />
                  <h2 className="font-bold">Emergency?</h2>
                </div>
                <p className="mt-2 text-sm text-body">
                  Door won&apos;t lock or close, or a break-in? Don&apos;t use the form — call us
                  and we&apos;ll prioritize it.
                </p>
                <a
                  href={siteConfig.phone.href}
                  className="mt-3 inline-flex items-center gap-2 font-semibold text-emergency"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {siteConfig.phone.display}
                </a>
              </div>

              {/* Hours — placeholder, clearly marked for confirmation */}
              <div className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <Clock className="h-5 w-5" aria-hidden />
                  <h2 className="font-bold text-ink">Hours</h2>
                </div>
                <div className="mt-3 flex items-center justify-between rounded-lg border border-emergency/30 bg-emergency-tint px-3 py-2">
                  <dt className="font-bold text-emergency">Emergency service</dt>
                  <dd className="font-bold text-emergency">24/7</dd>
                </div>
                <dl className="mt-3 space-y-1.5 text-sm text-body">
                  <div className="flex justify-between"><dt>Scheduled — Mon–Fri</dt><dd>8:00 AM – 6:00 PM</dd></div>
                  <div className="flex justify-between"><dt>Scheduled — Saturday</dt><dd>9:00 AM – 4:00 PM</dd></div>
                  <div className="flex justify-between"><dt>Scheduled — Sunday</dt><dd>Closed</dd></div>
                </dl>
                <p className="mt-2 text-xs text-muted">Emergency repairs answered 24/7. Scheduled/non-emergency work books within the hours above.</p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Map */}
      <Section topBorder className="bg-surface !py-0">
        <div className="relative h-80 w-full">
          <iframe
            title={`Map of ${siteConfig.name}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
          <a
            href={siteConfig.gbpMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 rounded-lg border border-line bg-surface/95 px-4 py-2 text-sm font-medium text-ink shadow-lg backdrop-blur transition hover:bg-brand-600 hover:text-white"
          >
            View on Google Maps
          </a>
        </div>
      </Section>
    </>
  );
}
