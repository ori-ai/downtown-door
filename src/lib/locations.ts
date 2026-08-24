/**
 * The two physical offices — full data for the /locations/* pages and the
 * per-office JSON-LD (schema.ts officeSchema).
 *
 * PHONE MAPPING (documented in README.md):
 *   (347) 851-8615 — brand line, global header/footer/CTAs sitewide
 *   (347) 514-8770 — 170 Hicks St (Brooklyn Heights) — ONLY on its location
 *                    page + its schema node
 *   (347) 519-4918 — 232 Leonard St (Williamsburg) — ONLY on its location
 *                    page + its schema node
 *
 * PHOTOS: real interior/exterior photos of each office go in
 * public/images/offices/<dir>/ and are listed in `photos` below with honest
 * alt text. NO STOCK IMAGERY on location pages, ever. Until Ori's photos are
 * dropped in, `photos` stays empty and the page simply omits the gallery —
 * we never fake it.
 *
 * GEO: approximate street-address coordinates — VERIFY against each GBP pin.
 */

import { siteConfig } from "./site";

export interface OfficePhoto {
  src: string; // under /images/offices/
  alt: string;
}

export interface Office {
  slug: string; // /locations/<slug>
  name: string; // display name of this office
  role: "main" | "original";
  shortLabel: string;
  street: string;
  city: string;
  region: "NY";
  postalCode: string;
  neighborhood: string;
  phone: { digits: string; display: string; href: string };
  geo: { lat: number; lng: number }; // VERIFY against GBP pin
  /** Google Maps embed + link (address-query embed needs no API key). */
  mapEmbedSrc: string;
  hasMap: string;
  /** What you can actually do at this ground-floor, walk-in office. */
  walkInServices: string[];
  transitNotes: string[];
  parkingNotes: string[];
  /** Real photos only — interior + exterior signage. Empty until supplied. */
  photos: OfficePhoto[];
  /** Unique intro copy for the page. */
  intro: string;
  story: string;
}

const q = (addr: string) => encodeURIComponent(addr);

export const offices: Office[] = [
  {
    slug: "brooklyn-heights-170-hicks-st",
    name: "Brooklyn Heights Office — 170 Hicks St",
    role: "original",
    shortLabel: "Brooklyn Heights",
    street: "170 Hicks St",
    city: "Brooklyn",
    region: "NY",
    postalCode: "11201",
    neighborhood: "Brooklyn Heights",
    phone: { digits: "3475148770", display: "(347) 514-8770", href: "tel:+13475148770" },
    geo: { lat: 40.6972, lng: -73.9939 }, // VERIFY against GBP pin
    mapEmbedSrc: `https://www.google.com/maps?q=${q("170 Hicks St, Brooklyn, NY 11201")}&output=embed`,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${q("Downtown Door Repair & Security, 170 Hicks St, Brooklyn, NY 11201")}`,
    walkInServices: [
      "Walk-in service — no appointment needed",
      "Key cutting and duplication at the counter",
      "Lock, cylinder & hardware pickup",
      "Free in-office estimates",
      "Security & access-control design consults",
      "Tech dispatch for on-site jobs",
    ],
    transitNotes: [
      "Clark St station (2/3) — about a block away at Clark & Henry",
      "Borough Hall (2/3/4/5) and Court St (R) — short walk",
      "High St–Brooklyn Bridge (A/C) at Cadman Plaza",
    ],
    parkingNotes: [
      "Metered street parking on Hicks St and nearby blocks",
      "Paid garages around Cadman Plaza and Court St",
    ],
    photos: [], // Ori's interior + exterior signage photos → public/images/offices/170-hicks/
    intro:
      "170 Hicks St is where Downtown Door Repair & Security started — a ground-floor, glass-front office in Brooklyn Heights that still takes walk-ins every day. Come in for keys, locks, and hardware, sit down for an estimate or a security design consult, or have a tech dispatched to your building.",
    story:
      "This is the original location. Brooklyn Heights' brownstones, pre-war co-ops, and small storefronts shaped the trade we lead with today: locksmith work, intercom entry, and access control, with door repair as the supporting craft.",
  },
  {
    slug: "williamsburg-232-leonard-st",
    name: "Williamsburg Office — 232 Leonard St",
    role: "main",
    shortLabel: "Williamsburg",
    street: "232 Leonard St",
    city: "Brooklyn",
    region: "NY",
    postalCode: "11211",
    neighborhood: "Williamsburg",
    phone: { digits: "3475194918", display: "(347) 519-4918", href: "tel:+13475194918" },
    geo: { lat: 40.7146, lng: -73.9503 }, // VERIFY against GBP pin
    mapEmbedSrc: `https://www.google.com/maps?q=${q("232 Leonard St, Brooklyn, NY 11211")}&output=embed`,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${q("Downtown Door Repair & Security, 232 Leonard St, Brooklyn, NY 11211")}`,
    walkInServices: [
      "Walk-in service — no appointment needed",
      "Key cutting and duplication at the counter",
      "Lock, cylinder & hardware pickup",
      "Free in-office estimates",
      "Security & access-control design consults",
      "Tech dispatch — main dispatch hub for North Brooklyn",
    ],
    transitNotes: [
      "Graham Ave (L) and Metropolitan Av–Lorimer St (G) stations nearby",
      "B43 and B48 buses run close to Leonard St",
    ],
    parkingNotes: [
      "Street parking on Leonard St and surrounding blocks (metered and alternate-side)",
    ],
    photos: [], // Ori's interior + exterior signage photos → public/images/offices/232-leonard/
    intro:
      "232 Leonard St in Williamsburg is our main office — a ground-floor, glass-door location that handles walk-ins, estimates, hardware pickups, design consults, and the bulk of our dispatch. If you're in North Brooklyn, this is the office nearest you.",
    story:
      "Opened after the original Brooklyn Heights office to keep up with North Brooklyn's converted lofts, multi-family buildings, and storefronts, Williamsburg is now the operational hub — same trade, same license, second front door.",
  },
];

export function getOffice(slug: string): Office | undefined {
  return offices.find((o) => o.slug === slug);
}

/** One-line postal address for an office. */
export function officeAddress(o: Office): string {
  return `${o.street}, ${o.city}, ${o.region} ${o.postalCode}`;
}

/** Hours are shared by both offices (single hours story sitewide). */
export const officeHours = siteConfig.hours;
