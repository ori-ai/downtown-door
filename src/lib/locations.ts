/**
 * The two real locations — full data for the /locations/* pages and the
 * per-location JSON-LD (schema.ts officeSchema).
 *
 * 2026-09-04 (Ori) — the truth:
 *   170 Hicks St, Brooklyn, NY 11201 — the ORIGINAL, reviewed Google listing.
 *     Locksmith-led (Google primary category: Locksmith; also door supplier,
 *     repair service, security system installation, emergency locksmith).
 *     Phone (347) 514-8770. Main office for schema `address` + sitewide NAP.
 *   232 Leonard St, Brooklyn, NY 11211 — new listing (created 2026-09-04).
 *     Door supplier + security system installation-led (its Google
 *     categories), locksmith secondary. Phone (347) 851-8615 (the sitewide
 *     CTA line; Dori AI reception answers it).
 *
 * PHONE MAPPING:
 *   (347) 851-8615 — sitewide primary CTA (header, call bar, CTA bands, forms)
 *                    AND the 232 Leonard St listing number.
 *   (347) 514-8770 — 170 Hicks St ONLY: its location page, its schema node,
 *                    and its own block in footer/contact.
 *
 * NEVER describe either location as a walk-in showroom. Hours are the single
 * sitewide story in site.ts (24/7). No invented details.
 *
 * PHOTOS: real photos of each location go in public/images/offices/<dir>/ and
 * are listed in `photos` with honest alt text. NO STOCK IMAGERY on location
 * pages, ever. If `photos` is empty the page simply omits the gallery.
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
  name: string; // display name of this location
  role: "main" | "secondary";
  shortLabel: string; // neighborhood label, e.g. "Brooklyn Heights"
  areaLabel: string; // neighborhood text, e.g. "Brooklyn Heights / Downtown Brooklyn"
  /** One-line positioning used in titles/descriptions. */
  positioning: string;
  /** <title> for this location's page. */
  pageTitle: string;
  /** Google Business Profile categories, primary first — mirrored, not invented. */
  categories: string[];
  /** schema.org @type for this location's node. */
  schemaTypes: string[];
  street: string;
  city: string;
  region: "NY";
  postalCode: string;
  neighborhood: string;
  /** /service-areas path for the neighborhood this office sits in. */
  neighborhoodPath: string;
  phone: { digits: string; display: string; href: string };
  geo: { lat: number; lng: number }; // VERIFY against GBP pin
  /** Google Maps embed + link (address-query embed needs no API key). */
  mapEmbedSrc: string;
  hasMap: string;
  /** What this location handles — mirrors its Google categories. */
  services: string[];
  transitNotes: string[];
  parkingNotes: string[];
  /** Real photos only. Empty until supplied. */
  photos: OfficePhoto[];
  /** Unique intro copy for the page. */
  intro: string;
  story: string;
}

const q = (addr: string) => encodeURIComponent(addr);

export const offices: Office[] = [
  {
    slug: "170-hicks-st-brooklyn",
    name: "170 Hicks St — Brooklyn Heights",
    role: "main",
    shortLabel: "Brooklyn Heights",
    areaLabel: "Brooklyn Heights / Downtown Brooklyn",
    positioning: "locksmith-led, with door supply & repair and security-system installation",
    pageTitle: "Brooklyn Heights Locksmith, Door Repair & Security — 170 Hicks St",
    categories: [
      "Locksmith",
      "Door supplier",
      "Repair service",
      "Security system installation",
      "Emergency locksmith",
    ],
    schemaTypes: ["Locksmith", "LocalBusiness"],
    street: "170 Hicks St",
    city: "Brooklyn",
    region: "NY",
    postalCode: "11201",
    neighborhood: "Brooklyn Heights",
    neighborhoodPath: "/service-areas/brooklyn/brooklyn-heights",
    phone: { ...siteConfig.locations[0].phone },
    geo: { lat: 40.6972, lng: -73.9939 }, // VERIFY against GBP pin
    mapEmbedSrc: `https://www.google.com/maps?q=${q("170 Hicks St, Brooklyn, NY 11201")}&output=embed`,
    // The original, reviewed listing — link to the listing itself, not a search.
    hasMap: siteConfig.gbpMapsUri,
    services: [
      "Locksmith — lockouts, rekeys, lock installation & repair",
      "Emergency locksmith, 24/7",
      "Door supply, installation & repair",
      "Security system installation — cameras, access control, intercoms",
      "Key cutting & cylinder pinning on our own machines",
      "Tech dispatch across Brooklyn Heights, Downtown Brooklyn & all of NYC",
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
    photos: [
      {
        src: "/images/offices/170-hicks/170-hicks-exterior-signage.jpg",
        alt: "Downtown Door Repair & Security tech at the 170 Hicks St entrance — full business banner with phone and address on the door",
      },
      {
        src: "/images/offices/170-hicks/170-hicks-street-view.jpg",
        alt: "170 Hicks St from the corner — Hicks St street sign with the office's banners visible on the brownstone",
      },
      {
        src: "/images/offices/170-hicks/170-hicks-interior-banner.jpg",
        alt: "Inside the Brooklyn Heights office — company banner with NAP over the tool and hardware staging area",
      },
      {
        src: "/images/offices/170-hicks/170-hicks-branded-tool-kit.jpg",
        alt: "Branded business cards on the DeWalt tool kits that go out on Brooklyn Heights jobs",
      },
    ],
    intro:
      "170 Hicks St in Brooklyn Heights is where Downtown Door Repair & Security started, and it's our main office. Locksmith-led — lockouts, rekeys, and lock installs first — with door supply and repair and security-system installation from the same crew. Serving Brooklyn Heights, Downtown Brooklyn, and all of NYC, 24/7: (347) 514-8770.",
    story:
      "This is the original location. Brooklyn Heights' brownstones and pre-war co-ops and Downtown Brooklyn's storefronts and office buildings shaped the trade we lead with here: locksmith work first, with intercom entry, access control, cameras, and door repair as the supporting craft. Same licensed company (NYC DCWP #2109597), same crew.",
  },
  {
    slug: "232-leonard-st-brooklyn",
    name: "232 Leonard St — Williamsburg",
    role: "secondary",
    shortLabel: "Williamsburg",
    areaLabel: "Williamsburg / North Brooklyn",
    positioning: "door supplier & security-system installation, with locksmith service",
    pageTitle: "Williamsburg Door Supplier & Security System Installation — 232 Leonard St",
    categories: ["Door supplier", "Security system installation", "Locksmith"],
    schemaTypes: ["LocalBusiness"],
    street: "232 Leonard St",
    city: "Brooklyn",
    region: "NY",
    postalCode: "11211",
    neighborhood: "Williamsburg",
    neighborhoodPath: "/service-areas/brooklyn/williamsburg",
    phone: { ...siteConfig.locations[1].phone },
    geo: { lat: 40.7146, lng: -73.9503 }, // VERIFY against GBP pin
    mapEmbedSrc: `https://www.google.com/maps?q=${q("232 Leonard St, Brooklyn, NY 11211")}&output=embed`,
    hasMap: `https://www.google.com/maps/search/?api=1&query=${q("Downtown Door Repair & Security, 232 Leonard St, Brooklyn, NY 11211")}`,
    services: [
      "Door supply — residential, commercial & storefront doors",
      "Door installation & repair",
      "Security system installation — cameras, access control, intercoms",
      "Locksmith — lockouts, rekeys, lock installation",
      "Tech dispatch across Williamsburg, North Brooklyn & all of NYC",
    ],
    transitNotes: [
      "Graham Ave (L) and Metropolitan Av–Lorimer St (G) stations nearby",
      "B43 and B48 buses run close to Leonard St",
    ],
    parkingNotes: [
      "Street parking on Leonard St and surrounding blocks (metered and alternate-side)",
    ],
    photos: [], // real photos → public/images/offices/232-leonard/ (none yet — page omits the gallery)
    intro:
      "232 Leonard St in Williamsburg is our North Brooklyn office. It leads with doors and security systems — supplying and installing residential, commercial, and storefront doors, and installing cameras, access control, and intercoms — with locksmith service alongside. Serving Williamsburg, North Brooklyn, and all of NYC, 24/7: (347) 851-8615.",
    story:
      "Opened to keep up with North Brooklyn's converted lofts, multi-family buildings, and storefronts, the Williamsburg office is where our door-supply and security-system work is based — same trade, same license, second front door.",
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
