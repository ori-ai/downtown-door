/**
 * THE storefront — data for the single /locations page and the office JSON-LD
 * (schema.ts officeSchema).
 *
 * 2026-08-25 (Ori): the company operates from ONE storefront — 803 Greenwich
 * St, West Village. The prior Brooklyn office pages are removed from the site
 * and 308 to this page (GBP listings are managed by Ori directly; the site
 * asserts only this location). ONE phone sitewide: (347) 851-8615.
 *
 * GEO: approximate street-address coordinates — VERIFY against the GBP pin.
 */

import { siteConfig } from "./site";

export interface OfficePhoto {
  src: string;
  alt: string;
}

export interface Office {
  slug: string; // /locations/<slug>
  name: string;
  role: "main" | "original";
  shortLabel: string;
  street: string;
  city: string;
  region: "NY";
  postalCode: string;
  neighborhood: string;
  phone: { digits: string; display: string; href: string };
  geo: { lat: number; lng: number }; // VERIFY against GBP pin
  mapEmbedSrc: string;
  hasMap: string;
  walkInServices: string[];
  transitNotes: string[];
  parkingNotes: string[];
  photos: OfficePhoto[];
  intro: string;
  story: string;
}

const q = (addr: string) => encodeURIComponent(addr);

export const offices: Office[] = [
  {
    slug: "west-village-803-greenwich-st",
    name: "West Village Storefront — 803 Greenwich St",
    role: "main",
    shortLabel: "West Village",
    street: "803 Greenwich St",
    city: "New York",
    region: "NY",
    postalCode: "10014",
    neighborhood: "West Village",
    phone: { ...siteConfig.phone },
    geo: { lat: 40.7376, lng: -74.0055 }, // VERIFY against GBP pin
    mapEmbedSrc: `https://www.google.com/maps?q=${q("803 Greenwich St, New York, NY 10014")}&output=embed`,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${q("803 Greenwich St, New York, NY 10014")}`,
    walkInServices: [
      "Walk-in service — no appointment needed",
      "We make keys — cutting & duplication at the counter",
      "High-security locks & hardware off the shelf (Mul-T-Lock dealer)",
      "Intercom & access-control design consults",
      "Free in-store estimates",
      "24/7 tech dispatch across NYC",
    ],
    transitNotes: [
      "8 Av (L) and 14 St (A/C/E) stations nearby",
      "14 St / 7 Av (1/2/3) a short walk east",
      "Christopher St PATH about ten minutes south",
    ],
    parkingNotes: [
      "Metered street parking on Greenwich St and nearby blocks",
      "Paid garages along West St and around 14th St",
    ],
    photos: [
      {
        src: "/images/offices/west-village/803-greenwich-storefront.jpg",
        alt: "The Downtown storefront at 803 Greenwich St, West Village — locksmith, intercom & security systems, open 24/7",
      },
    ],
    intro:
      "803 Greenwich St in the West Village is our storefront — a ground-floor shop where you can walk in for keys, high-security locks, and hardware, sit down for an intercom or access-control consult, or have a tech dispatched anywhere in NYC. Open 24/7, one number: (347) 851-8615.",
    story:
      "The trade was built in Brooklyn — locksmith work, intercom entry, and access control for brownstones, co-ops, and storefronts — and now operates from its West Village home. Same licensed company (NYC DCWP #2109597), same crew, one front door.",
  },
];

export function getOffice(slug: string): Office | undefined {
  return offices.find((o) => o.slug === slug);
}

/** One-line postal address for an office. */
export function officeAddress(o: Office): string {
  return `${o.street}, ${o.city}, ${o.region} ${o.postalCode}`;
}

/** Hours are shared (single hours story sitewide). */
export const officeHours = siteConfig.hours;
