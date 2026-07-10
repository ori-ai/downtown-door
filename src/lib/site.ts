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
// ⚠️ FLAG: the brief lists this number, but it also appears in the owner's
// own config as the "ClearOps public reception line." Confirm it is the
// correct client CTA number before launch (see docs/human-todo.md).
// NOTE: this is DIFFERENT from the old WordPress site, which showed
// (347) 519-4918 / (347) 514-8770 — another reason to confirm against GBP.
const PHONE_DIGITS = "9175403962";

export const siteConfig = {
  name: "Downtown Door Repair & Security",
  shortName: "Downtown Door Repair",
  legalName: "Downtown Door Repair & Security",
  tagline: "Door Repair, Locksmith & Security Experts — Brooklyn & Manhattan",
  description:
    "Downtown Door Repair & Security provides door repair, installation, locksmith and commercial security systems across Brooklyn and Manhattan — for homeowners, businesses, and institutional clients.",

  url: SITE_URL,

  // --- Phone -----------------------------------------------------------------
  phone: {
    digits: PHONE_DIGITS,
    display: "(917) 540-3962",
    href: `tel:+1${PHONE_DIGITS}`,
  },

  // --- Email -----------------------------------------------------------------
  // Public-facing address; forwards to ori@clearmarketingdigital.com (configured
  // at the domain/email provider, NOT in code). Uses the real domain once set.
  email: {
    // Rendered with the live host once NEXT_PUBLIC_SITE_URL is a real domain.
    general: "info", // + "@" + domain — assembled by emailAddress()
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
    licenseNumber: null as string | null, // VERIFY (NYC DCWP / relevant license #)
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
    googlePlaceId: null as string | null, // VERIFY / supply GBP place id
    profileUrl: null as string | null,
  },

  // --- Service area (Phase 1) ------------------------------------------------
  serviceAreaPhase1: ["Brooklyn", "Manhattan"] as const,

  // --- Social ----------------------------------------------------------------
  social: {
    google: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
  },
} as const;

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
