/**
 * 301/permanent redirect map: old WordPress URLs (downtowndoorrepairnyc.com)
 * → new equivalents. Wired into next.config.ts `redirects()`.
 *
 * `permanent: true` emits a 308 (permanent) redirect — the modern equivalent of
 * a 301 for SEO; Google treats both as permanent and passes link equity.
 *
 * Trailing slashes on the old URLs are normalized by Next before matching, so
 * sources are written without them. ORDER MATTERS: specific paths precede the
 * `/brooklyn/:slug` catch-all. Source of truth: docs/migration-inventory.md.
 */

type Redirect = { source: string; destination: string; permanent: boolean };

const p = (source: string, destination: string): Redirect => ({ source, destination, permanent: true });

// Old blog post slugs → /blog (retarget to /blog/<slug> once each post is migrated).
const oldBlogPosts = [
  "door-repair-panic-bar-installation",
  "emergency-storefront-door-repair-nyc-why-business-security-starts-at-the-entry-point",
  "fire-rated-door-replacement-in-soho-protecting-businesses-communities",
  "panic-bar-installation-in-les-keeping-nyc-businesses-safe",
  "emergency-door-repair-in-tribeca-fast-secure-reliable",
  "late-summer-door-repair-security-tips-for-nyc-businesses",
  "trusted-door-repair-access-control-in-tribeca-williamsburg",
  "panic-bar-installation-for-nyc-businesses-why-its-essential",
  "how-to-spot-a-failing-door-closer-before-it-becomes-a-safety-risk",
  "emergency-door-repair-panic-bar-install-in-tribeca",
  "emergency-door-repair-in-tribeca-commercial-storefront-secured-fast",
  "how-to-know-when-your-business-needs-emergency-door-service-in-nyc",
  "how-to-tell-if-you-need-a-commercial-door-frame-repair",
  "summer-security-prep-why-now-is-the-time-to-upgrade-your-storefront-doors-in-nyc",
  "why-tribeca-and-the-financial-district-rely-on-expert-emergency-door-repair",
  "enhancing-building-security-in-lower-manhattan",
  "how-regular-door-maintenance-can-save-you-money",
  "how-to-extend-the-lifespan-of-your-doors-with-routine-maintenance",
  "6-modern-door-design-trends-to-elevate-your-home",
  "why-professional-door-installation-is-worth-the-investment",
  "the-benefits-of-sliding-doors-for-your-home",
  "when-to-call-a-locksmith-vs-attempting-diy-locksmith-services",
  "top-7-door-security-upgrades-to-protect-your-home",
  "a-step-by-step-guide-to-professional-door-installation",
  "common-door-repair-mistakes-and-how-to-avoid-them",
  "choosing-the-right-type-of-door",
];

export const migrationRedirects: Redirect[] = [
  // --- Core pages ---
  p("/about-us", "/about"),
  p("/doors-services", "/services"),
  p("/terms-and-conditions", "/terms"),

  // --- Services / products → nearest new service ---
  p("/door-repair", "/services/door-repair"),
  p("/emergency-door-repair", "/services/emergency-door-repair"),
  p("/residential-door-installation-repair", "/services/door-installation"),
  p("/automatic-door-installation", "/services/door-installation"),
  p("/door-installation-nyc", "/services/door-installation"),
  p("/commercial-door-installation-repair", "/services/commercial-storefront-doors"),
  p("/lock-repair", "/services/locksmith-door-hardware"),
  p("/residential-locksmith", "/services/locksmith-door-hardware"),
  p("/commercial-locksmith", "/services/locksmith-door-hardware"),
  p("/locksmith-in-nyc", "/services/locksmith-door-hardware"),
  p("/master-key-systems", "/services/locksmith-door-hardware"),
  p("/door-hardware", "/services/locksmith-door-hardware"),
  p("/door-hardware-2", "/services/locksmith-door-hardware"),
  p("/door-closers", "/services/locksmith-door-hardware"),
  p("/hinges", "/services/locksmith-door-hardware"),
  p("/locks", "/services/locksmith-door-hardware"),
  p("/smart-locks", "/services/locksmith-door-hardware"),
  p("/panic-bars", "/services/locksmith-door-hardware"),
  p("/security-system-installation", "/services/security-systems-access-control"),
  p("/security-camera-system-installation", "/services/security-systems-access-control"),
  p("/cctv", "/services/security-systems-access-control"),
  p("/intercom-system-installation", "/services/security-systems-access-control"),
  p("/access-control", "/services/security-systems-access-control"),
  p("/access-control-systems", "/services/security-systems-access-control"),
  p("/cloud-based-access-control-systems", "/services/security-systems-access-control"),
  p("/electric-strike-buzzer-systems", "/services/security-systems-access-control"),
  p("/magnetic-locks", "/services/security-systems-access-control"),
  p("/magnetic-locks-hardware", "/services/security-systems-access-control"),

  // --- Locksmith-neighborhood pages → new neighborhood pages ---
  p("/locksmith-williamsburg", "/service-areas/brooklyn/williamsburg"),
  p("/locksmith-park-slope", "/service-areas/brooklyn/park-slope"),
  p("/locksmith-dumbo", "/service-areas/brooklyn/dumbo"),
  p("/locksmith-brooklyn-heights", "/service-areas/brooklyn/brooklyn-heights"),

  // --- Manhattan neighborhoods (top-level old slugs) ---
  p("/tribeca", "/service-areas/manhattan/tribeca"),
  p("/chelsea", "/service-areas/manhattan/chelsea"),
  p("/financial-district-fidi", "/service-areas/manhattan/financial-district"),
  p("/civic-center", "/service-areas/manhattan"),
  p("/two-bridges", "/service-areas/manhattan"),
  p("/chinatown", "/service-areas/manhattan"),
  p("/gramercy-park", "/service-areas/manhattan"),
  p("/hudson-square-seaport-district", "/service-areas/manhattan"),
  p("/noho-flatiron-district", "/service-areas/manhattan"),
  p("/battery-park-city", "/service-areas/manhattan"),
  p("/greenwich-village-west-village", "/service-areas/manhattan"),
  p("/soho", "/service-areas/manhattan"),
  p("/manhattan", "/service-areas/manhattan"),

  // --- Brooklyn: specific neighborhoods FIRST, then catch-all ---
  p("/brooklyn/brooklyn-heights", "/service-areas/brooklyn/brooklyn-heights"),
  p("/brooklyn/park-slope", "/service-areas/brooklyn/park-slope"),
  p("/brooklyn/williamsburg", "/service-areas/brooklyn/williamsburg"),
  p("/brooklyn/dumbo", "/service-areas/brooklyn/dumbo"),
  p("/brooklyn/bushwick", "/service-areas/brooklyn/bushwick"),
  // Remaining old Brooklyn hood pages (not yet built) → the borough hub.
  p("/brooklyn/:slug", "/service-areas/brooklyn"),
  p("/brooklyn", "/service-areas/brooklyn"),

  // --- Old blog posts → /blog (retarget individually once migrated) ---
  ...oldBlogPosts.map((slug) => p(`/${slug}`, "/blog")),
];
