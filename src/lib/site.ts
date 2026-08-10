/**
 * SINGLE SOURCE OF TRUTH for NAP (Name, Address, Phone) and business facts.
 *
 * RULE: Nothing on the site hardcodes NAP independently — header, footer,
 * JSON-LD, sitemap, forms and metadata all read from here. Change it once,
 * it changes everywhere. This is what keeps the site, schema and the Google
 * Business Profile in exact agreement (a hard SEO requirement).
 *
 * ⚠️ ITEMS MARKED `// VERIFY` OR `null` ARE NOT CONFIRMED. Do not present them
 * as fact until the client supplies real data. See docs/human-todo.md.
 */

// The live domain is not registered yet — everything canonical derives from
// this env var. Swapping to the real domain later is a one-line change.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://downtowndoorrepair.example"; // PLACEHOLDER until the real domain is registered

// --- Phone -------------------------------------------------------------------
// Downtown's dedicated AI-reception line: calls are answered by "Dori" (an
// ElevenLabs voice agent), who qualifies the job, captures the lead (routed to
// Ori), and hands off to Ori at +19174388338 for the owner / emergencies /
// custom pricing. Provisioned via Twilio 2026-07-24. This REPLACES the old
// ClearOps reception line (9175403962) and the exposed personal number.
const PHONE_DIGITS = "3478518615";

export const siteConfig = {
  name: "Downtown Doors & Security Systems NYC",
  shortName: "Downtown Doors",
  legalName: "Downtown Doors & Security Systems NYC",
  tagline: "Locksmith & Security Systems Experts — Also Door Repair — The Five Boroughs",
  description:
    "Downtown Doors & Security Systems NYC provides locksmith services, security systems, access control, and intercom installation across the five boroughs — plus door repair, installation, and replacement — for homeowners, businesses, and institutional clients.",

  url: SITE_URL,

  // --- Phone -----------------------------------------------------------------
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

  // --- Address (from brief — matches Google Business Profile target) ----------
  address: {
    street: "170 Hicks St",
    city: "Brooklyn",
    region: "NY",
    regionName: "New York",
    postalCode: "11201",
    country: "US",
    neighborhood: "Brooklyn Heights",
  },

  // Approximate geo for 170 Hicks St, Brooklyn Heights. // VERIFY exact coords
  // against the Google Business Profile pin before launch.
  geo: {
    lat: 40.6962,
    lng: -73.9961,
  },

  // --- Hours -----------------------------------------------------------------
  // PLACEHOLDER — confirm real office hours + 24/7 emergency coverage.
  hoursConfirmed: false, // gate: schema openingHours only emitted when true
  hours: {
    // Weekday office hours (placeholder)
    weekdays: { opens: "08:00", closes: "18:00" },
    saturday: { opens: "09:00", closes: "16:00" },
    sundayClosed: true,
    emergency247: true, // VERIFY: emergency repair line availability
  },

  // --- Trust / credentials ----------------------------------------------------
  // Claims the brief asks us to surface. Specific numbers stay null until the
  // client confirms them — components hide/placeholder empty values.
  credentials: {
    licensedInsured: true, // general trade claim shown in trust bar
    licenseNumber: "2109597" as string | null, // NYC DCA (Dept. of Consumer & Worker Protection) license #
    licenseAuthority: "NYC Department of Consumer and Worker Protection (DCA)",
    insuranceSummary: null as string | null, // VERIFY (GL limits, etc.)
    bondingSummary: null as string | null, // VERIFY (bonding capacity)
    yearEstablished: null as number | null, // VERIFY — do not invent "years in business"
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
  serviceArea: [
    "Brooklyn",
    "Manhattan",
    "Queens",
    "The Bronx",
    "Staten Island",
    "Westchester County",
    "Rockland County",
    "Nassau County",
    "Bergen County, NJ",
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

/** One-line postal address, e.g. "170 Hicks St, Brooklyn, NY 11201". */
export function formattedAddress(): string {
  const a = siteConfig.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}
