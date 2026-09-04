/**
 * SINGLE SOURCE OF TRUTH for NAP (Name, Address, Phone) and business facts.
 *
 * RULE: Nothing on the site hardcodes NAP independently — header, footer,
 * JSON-LD, sitemap, forms and metadata all read from here. Change it once,
 * it changes everywhere. This is what keeps the site, schema and the Google
 * Business Profiles in exact agreement (a hard SEO requirement).
 *
 * 2026-09-04 (Ori): the real brand is "Downtown Door Repair & Security" with
 * TWO real Brooklyn locations (see `locations` below and src/lib/locations.ts).
 * The 2026-08-25 Manhattan-storefront rebrand was a misrepresentation and is
 * fully removed. Canonical domain: downtowndoorsandsecurity.com.
 *
 * ⚠️ ITEMS MARKED `// VERIFY` OR `null` ARE NOT CONFIRMED. Do not present them
 * as fact until the client supplies real data. See docs/human-todo.md.
 */

// Canonical live domain — downtowndoorsandsecurity.com (Ori, 2026-09-04; already
// on Vercel nameservers). downtowndoorrepairnyc.com is a FUTURE redirect only.
// NEXT_PUBLIC_SITE_URL still wins for preview/staging environments.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://downtowndoorsandsecurity.com";

// --- Phone -------------------------------------------------------------------
// Sitewide PRIMARY CTA line: answered 24/7 by "Dori" (ElevenLabs voice agent),
// who qualifies the job, captures the lead (routed to Ori), and hands off to
// Ori for the owner / emergencies / custom pricing. Provisioned via Twilio
// 2026-07-24. This is ALSO the listing number of the 232 Leonard St location.
const PHONE_DIGITS = "3478518615";

// 170 Hicks St (Brooklyn Heights) — the original, reviewed Google listing.
// Rendered ONLY where that location is shown as itself (its location page,
// its schema node, footer/contact location blocks) — never as the global CTA.
const HICKS_PHONE_DIGITS = "3475148770";

export const siteConfig = {
  name: "Downtown Door Repair & Security",
  shortName: "Downtown Door Repair",
  // Registered entity: Downtown Door Repair & Security Inc., NYS DOS ID 7536197,
  // 170 Hicks St (Ori, 2026-09-04).
  legalName: "Downtown Door Repair & Security Inc.",
  tagline: "Locksmith, Door & Security Systems — Brooklyn & All of NYC",
  description:
    "Downtown Door Repair & Security provides locksmith services, door supply and repair, intercom systems, access control, security cameras, and security-system installation for homeowners, businesses, and institutional clients across NYC — from two Brooklyn offices: 170 Hicks St in Brooklyn Heights and 232 Leonard St in Williamsburg. Open 24/7.",

  url: SITE_URL,

  // --- Phone -----------------------------------------------------------------
  // The sitewide primary CTA number (header, mobile call bar, forms, CTA bands,
  // Organization schema). Each location block shows ITS OWN number — see
  // `locations` below.
  phone: {
    digits: PHONE_DIGITS,
    display: "(347) 851-8615",
    href: `tel:+1${PHONE_DIGITS}`,
  },

  // --- Email -----------------------------------------------------------------
  // Public-facing address; forwards to ori@clearmarketingdigital.com (configured
  // at the domain/email provider, NOT in code). Uses the real domain once set.
  email: {
    // Rendered with the live host once NEXT_PUBLIC_SITE_URL is a real domain.
    general: "office", // + "@" + domain — assembled by emailAddress()
    bids: "bids", // dedicated institutional/procurement inbox alias
  },

  // --- Address (MAIN OFFICE — 170 Hicks St, the original reviewed listing) ---
  // This is the sitewide NAP address and the schema `address` for the
  // Organization + every Service/brand provider node. The second location
  // lives in `locations` below and src/lib/locations.ts.
  address: {
    street: "170 Hicks St",
    city: "Brooklyn",
    region: "NY",
    regionName: "New York",
    postalCode: "11201",
    country: "US",
    neighborhood: "Brooklyn Heights",
  },

  // Approximate geo for 170 Hicks St, Brooklyn Heights. // VERIFY against the GBP pin.
  geo: {
    lat: 40.6972,
    lng: -73.9939,
  },

  // --- Office locations (both real locations, each with ITS OWN line) --------
  // Rendered wherever locations are listed (footer, contact page). The first
  // entry is the main office and doubles as `address` above — keep in sync.
  // Full per-location data (positioning, photos, schema) is in locations.ts.
  locations: [
    {
      label: "Main Office — Brooklyn Heights",
      street: "170 Hicks St",
      city: "Brooklyn",
      region: "NY",
      postalCode: "11201",
      neighborhood: "Brooklyn Heights",
      phone: { digits: HICKS_PHONE_DIGITS, display: "(347) 514-8770", href: `tel:+1${HICKS_PHONE_DIGITS}` },
    },
    {
      label: "Williamsburg Office",
      street: "232 Leonard St",
      city: "Brooklyn",
      region: "NY",
      postalCode: "11211",
      neighborhood: "Williamsburg",
      phone: { digits: PHONE_DIGITS, display: "(347) 851-8615", href: `tel:+1${PHONE_DIGITS}` },
    },
  ],

  // --- Hours -----------------------------------------------------------------
  // CONFIRMED by Ori 2026-08-24: "we provide 24/7 availability." This is THE
  // single hours story — site copy, both location pages, and all schema say
  // exactly this. If a GBP listing ever shows different hours, fix the GBP or
  // change it HERE, never in individual components.
  hoursConfirmed: true, // gate: schema openingHours only emitted when true
  hours: {
    open247: true,
    display: "Open 24/7 — calls answered around the clock",
  },

  // --- Trust / credentials ----------------------------------------------------
  // Claims the brief asks us to surface. Specific numbers stay null until the
  // client confirms them — components hide/placeholder empty values.
  credentials: {
    licensedInsured: true, // general trade claim shown in trust bar
    licenseNumber: "2109597" as string | null, // NYC DCA (Dept. of Consumer & Worker Protection) license #
    licenseAuthority: "NYC Department of Consumer and Worker Protection (DCA)",
    insuranceSummary: "General liability insured — COI available on request" as string | null, // Ori, 2026-08-24
    bondingSummary: null as string | null, // VERIFY (bonding capacity)
    yearEstablished: 2025 as number | null, // founded 02/2025 (Ori, 2026-08-24)
    // Institutional certifications — all placeholder until confirmed:
    mwbe: false, // VERIFY (NYC/NYS M/WBE)
    dbe: false, // VERIFY
    sbe: false, // VERIFY
    certifications: [] as string[], // e.g. ["NYC M/WBE #..."] once confirmed
    // Procurement portal registrations — placeholder until confirmed:
    procurementPortals: [] as { name: string; id?: string }[], // PASSPort / SCA / DASNY
  },

  // --- Reviews ---------------------------------------------------------------
  // Rating & count come LIVE from Google Business Profile at render time —
  // never hardcoded. See src/lib/reviews.ts. `null` here means "not yet wired".
  // This is the 170 Hicks St listing — the original, reviewed one.
  reviews: {
    googlePlaceId: "ChIJxbP4QSdbwokRti8UT3aRgp8" as string | null,
    profileUrl: "https://search.google.com/local/writereview?placeid=ChIJxbP4QSdbwokRti8UT3aRgp8" as string | null,
  },

  // --- Google Business Profile map link ---------------------------------------
  // The verified GBP listing's own maps link (cid-based) — NOT a generic address
  // search. Keeps "View on Google Maps" pointed at the actual business listing
  // (with reviews/hours attached), matching the NAP the GBP listing carries.
  gbpMapsUri: "https://maps.google.com/maps?cid=11493909136321818550",

  // --- Service area ------------------------------------------------------------
  // Matches the live Google Business Profile serviceArea exactly (hard SEO
  // requirement — schema/GBP must agree). Brooklyn/Manhattan/Queens/the Bronx/
  // Staten Island have dedicated neighborhood pages (src/lib/service-areas.ts);
  // the four counties are dispatch-only for now (no dedicated pages yet).
  // REVERIFICATION MODE: schema claims exactly what the GBPs claim — the five
  // boroughs only. Counties (Westchester/Rockland/Nassau/Bergen NJ) removed
  // from ALL structured data 2026-08-24 per Ori; dispatch there continues by
  // request, it's just not asserted to Google.
  serviceArea: [
    "Brooklyn",
    "Manhattan",
    "Queens",
    "The Bronx",
    "Staten Island",
  ] as const,

  // --- Social ----------------------------------------------------------------
  social: {
    google: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
  },

  // --- Where we're listed, besides Google (verified 2026-08 via live web
  // search) — Google itself uses `gbpMapsUri` above, not duplicated here.
  // Only platforms with a confirmed, real listing — do not add Angi, BBB,
  // HomeAdvisor, Houzz, Nextdoor, etc. without the same confirmation.
  otherProfiles: [
    {
      name: "Yelp",
      url: "https://m.yelp.com/biz/downtown-locksmiths-door-repair-and-security-brooklyn",
    },
    {
      name: "Thumbtack",
      url: "https://www.thumbtack.com/ny/brooklyn/locksmiths/downtown-door-repair-security/service/565595125467586570",
    },
  ] as { name: string; url: string }[],
} as const;

/** Every verified "find us on" listing, Google included — Google reuses `gbpMapsUri`. */
export function businessProfiles(): { name: string; url: string }[] {
  return [{ name: "Google", url: siteConfig.gbpMapsUri }, ...siteConfig.otherProfiles];
}

export type SiteConfig = typeof siteConfig;

/** Assemble a public email address on the current host (real domain once set). */
export function emailAddress(box: "general" | "bids" = "general"): string {
  const host = SITE_URL.replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  // Fall back to the known forwarding domain intent while on a placeholder host.
  const domain = host.includes("example") ? "downtowndoorrepair.example" : host;
  return `${siteConfig.email[box]}@${domain}`;
}

/** One-line postal address of the main office, e.g. "170 Hicks St, Brooklyn, NY 11201". */
export function formattedAddress(): string {
  const a = siteConfig.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}

export type OfficeLocation = (typeof siteConfig.locations)[number];

/** One-line postal address for a specific office location. */
export function formattedLocation(loc: OfficeLocation): string {
  return `${loc.street}, ${loc.city}, ${loc.region} ${loc.postalCode}`;
}
