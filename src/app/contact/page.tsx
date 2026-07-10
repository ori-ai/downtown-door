import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";

import { siteConfig, formattedAddress, emailAddress } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";
import { ContactTabs } from "@/components/forms/contact-tabs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Downtown Door Repair & Security in Brooklyn & Manhattan. Request a quote for residential or commercial work, or submit a bid inquiry for institutional projects.",
  alternates: { canonical: "/contact" },
  openGraph: { url: absoluteUrl("/contact") },
};

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${formattedAddress()}`,
)}&output=embed`;

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const initial = type === "bid" ? "bid" : "quote";

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
            <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
              <ContactTabs initial={initial} />
            </div>

            {/* Info */}
            <aside className="space-y-5">
              <div className="rounded-2xl border border-line bg-white p-6">
                <h2 className="text-lg font-bold text-ink">Reach us directly</h2>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a href={siteConfig.phone.href} className="flex items-center gap-2.5 text-body hover:text-brand-700">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                        <Phone className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      <span className="font-semibold">{siteConfig.phone.display}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${emailAddress("general")}`} className="flex items-center gap-2.5 text-body hover:text-brand-700">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                        <Mail className="h-4.5 w-4.5" aria-hidden />
                      </span>
                      {emailAddress("general")}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5 text-body">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <MapPin className="h-4.5 w-4.5" aria-hidden />
                    </span>
                    {formattedAddress()}
                  </li>
                </ul>
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
              <div className="rounded-2xl border border-line bg-white p-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <Clock className="h-5 w-5" aria-hidden />
                  <h2 className="font-bold text-ink">Hours</h2>
                </div>
                <dl className="mt-3 space-y-1.5 text-sm text-body">
                  <div className="flex justify-between"><dt>Mon–Fri</dt><dd>8:00 AM – 6:00 PM</dd></div>
                  <div className="flex justify-between"><dt>Saturday</dt><dd>9:00 AM – 4:00 PM</dd></div>
                  <div className="flex justify-between"><dt>Sunday</dt><dd>Closed</dd></div>
                  <div className="flex justify-between font-medium text-ink"><dt>Emergency</dt><dd>On call</dd></div>
                </dl>
                <p className="mt-2 text-xs text-muted">Hours to be confirmed with the business.</p>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Map */}
      <Section topBorder className="bg-surface !py-0">
        <div className="h-80 w-full">
          <iframe
            title={`Map of ${siteConfig.name}`}
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          />
        </div>
      </Section>
    </>
  );
}
