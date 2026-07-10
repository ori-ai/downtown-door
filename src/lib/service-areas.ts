/**
 * Service areas.
 *
 * PHASE 1 (published): Brooklyn + Manhattan, with unique per-neighborhood pages.
 * PHASE 2 (reserved, published:false): Queens, Bronx, Staten Island, Nassau,
 * Westchester, Bergen (NJ). The dynamic route /service-areas/[county]/[city]
 * and these hub entries exist now so Phase 2 slots in without a rebuild — the
 * hubs render a "coming soon" state and are excluded from the sitemap + noindex.
 *
 * Neighborhood copy is intentionally UNIQUE per page (not templated) and sticks
 * to real, general local context (building stock, door types) — no fabricated
 * claims or invented projects.
 */

export interface Neighborhood {
  slug: string;
  name: string;
  /** Answer-first opening paragraph, unique to this neighborhood. */
  intro: string;
  /** 1–2 sentences of genuine local context (building stock, common door work). */
  localContext: string;
}

export interface AreaHub {
  slug: string; // borough or county slug
  name: string;
  kind: "borough" | "county";
  state: "NY" | "NJ";
  published: boolean; // false = Phase 2, "coming soon", noindex, excluded from sitemap
  /** Answer-first hub intro. */
  intro: string;
  neighborhoods: Neighborhood[];
}

// --- PHASE 1 (LIVE) ----------------------------------------------------------

const brooklyn: AreaHub = {
  slug: "brooklyn",
  name: "Brooklyn",
  kind: "borough",
  state: "NY",
  published: true,
  intro:
    "Downtown Door Repair & Security serves all of Brooklyn — from brownstone entry doors in the Heights and Park Slope to storefront and loft doors in Williamsburg, DUMBO, and Bushwick. We handle door repair, installation, locksmith work, and security systems for homes and businesses across the borough.",
  neighborhoods: [
    {
      slug: "brooklyn-heights",
      name: "Brooklyn Heights",
      intro:
        "In Brooklyn Heights, Downtown Door Repair & Security repairs and restores the historic entry doors, brownstone vestibules, and apartment doors the neighborhood is known for — along with locksmith and security work for its townhouses and small businesses.",
      localContext:
        "Brooklyn Heights is dense with landmarked brownstones and pre-war co-ops, so much of the work here is careful repair and hardware matching on older doors and frames rather than wholesale replacement — plus rekeying and buzzer/intercom entry for multi-unit buildings.",
    },
    {
      slug: "park-slope",
      name: "Park Slope",
      intro:
        "In Park Slope, we service the neighborhood's row-house entry doors, garden-apartment doors, and Fifth and Seventh Avenue storefronts — door repair, installation, locksmith work, and security for both homes and shops.",
      localContext:
        "Park Slope's mix of family townhouses and busy retail corridors means a lot of high-use entry doors and storefront closers, plus lock upgrades and smart-lock installs for homeowners and landlords.",
    },
    {
      slug: "williamsburg",
      name: "Williamsburg",
      intro:
        "In Williamsburg, Downtown Door Repair & Security handles everything from loft and converted-warehouse doors to the storefront and restaurant entrances along Bedford and Berry — repair, installation, locksmith, and commercial security systems.",
      localContext:
        "Williamsburg's converted industrial buildings and heavy commercial foot traffic drive a lot of storefront door, closer, and access-control work, alongside residential locks for its newer apartment stock.",
    },
    {
      slug: "dumbo",
      name: "DUMBO",
      intro:
        "In DUMBO, we work on the neighborhood's converted-warehouse residential doors, office and gallery entrances, and retail storefronts — door repair, hardware, locksmith, and access control for its mix of homes and businesses.",
      localContext:
        "DUMBO's loft conversions and creative-office spaces often need heavier commercial hardware, access control, and intercom entry, plus repair of the large, high-use doors common in former industrial buildings.",
    },
    {
      slug: "bushwick",
      name: "Bushwick",
      intro:
        "In Bushwick, Downtown Door Repair & Security serves apartment and multi-family entry doors, warehouse and studio spaces, and the neighborhood's growing storefronts — repair, installation, locksmith, and security work.",
      localContext:
        "Bushwick's mix of multi-family buildings and converted commercial spaces means frequent rekeying, buzzer/intercom entry, and security upgrades, along with repair of high-traffic entry and storefront doors.",
    },
  ],
};

const manhattan: AreaHub = {
  slug: "manhattan",
  name: "Manhattan",
  kind: "borough",
  state: "NY",
  published: true,
  intro:
    "Downtown Door Repair & Security serves Manhattan — with a focus on Lower Manhattan and the surrounding neighborhoods. We repair and install residential and commercial doors and provide locksmith and security-system services for apartments, offices, and storefronts across the borough.",
  neighborhoods: [
    {
      slug: "tribeca",
      name: "Tribeca",
      intro:
        "In Tribeca, we service the neighborhood's loft-building entry doors, residential lobbies, and ground-floor retail and restaurant entrances — door repair, installation, locksmith work, and commercial security.",
      localContext:
        "Tribeca's cast-iron and converted-loft buildings pair high-end residential doors with demanding storefront and restaurant entrances, so the work ranges from careful repair to commercial closers and access control.",
    },
    {
      slug: "financial-district",
      name: "Financial District (FiDi)",
      intro:
        "In the Financial District, Downtown Door Repair & Security handles office and commercial building doors, residential conversions, and street-level retail — repair, installation, locksmith, and access-control systems.",
      localContext:
        "FiDi's office towers and residential conversions rely heavily on commercial door hardware, panic/exit devices, and access control, alongside apartment locks and buzzer entry for its growing residential base.",
    },
    {
      slug: "upper-east-side",
      name: "Upper East Side",
      intro:
        "On the Upper East Side, we service townhouse and co-op entry doors, apartment doors, and neighborhood storefronts — door repair, installation, locksmith, and security work for homes and businesses.",
      localContext:
        "The Upper East Side's pre-war co-ops and townhouses call for careful repair and hardware matching on older doors, plus rekeying, intercom entry, and lock upgrades for its many multi-unit buildings.",
    },
    {
      slug: "chelsea",
      name: "Chelsea",
      intro:
        "In Chelsea, Downtown Door Repair & Security works on residential building doors, gallery and office entrances, and retail storefronts — repair, installation, locksmith, and commercial security systems.",
      localContext:
        "Chelsea's mix of galleries, offices, and residential buildings drives storefront door, closer, and access-control work, along with apartment locks and intercom entry across the neighborhood.",
    },
  ],
};

// --- PHASE 2 (RESERVED — not yet published) ----------------------------------
// Route + hub shells exist so Phase 2 launches without a rebuild. No neighborhood
// pages are built yet; hubs render "coming soon" and are noindex + sitemap-excluded.

function reserved(
  slug: string,
  name: string,
  state: "NY" | "NJ",
): AreaHub {
  return {
    slug,
    name,
    kind: "county",
    state,
    published: false,
    intro: `Service to ${name} is planned as part of our Phase 2 expansion. We currently serve Brooklyn and Manhattan — check back soon or contact us about ${name}.`,
    neighborhoods: [],
  };
}

const phase2: AreaHub[] = [
  reserved("queens", "Queens", "NY"),
  reserved("the-bronx", "The Bronx", "NY"),
  reserved("staten-island", "Staten Island", "NY"),
  reserved("nassau-county", "Nassau County", "NY"),
  reserved("westchester-county", "Westchester County", "NY"),
  reserved("bergen-county", "Bergen County (NJ)", "NJ"),
];

// --- Exports -----------------------------------------------------------------

export const areaHubs: AreaHub[] = [brooklyn, manhattan, ...phase2];

export const publishedHubs = areaHubs.filter((h) => h.published);

export function getHub(slug: string): AreaHub | undefined {
  return areaHubs.find((h) => h.slug === slug);
}

export function getNeighborhood(
  hubSlug: string,
  neighborhoodSlug: string,
): { hub: AreaHub; neighborhood: Neighborhood } | undefined {
  const hub = getHub(hubSlug);
  const neighborhood = hub?.neighborhoods.find((n) => n.slug === neighborhoodSlug);
  if (!hub || !neighborhood) return undefined;
  return { hub, neighborhood };
}

/** All published (hub, neighborhood) pairs — for static params + sitemap. */
export function allPublishedNeighborhoods(): { hub: string; slug: string }[] {
  return publishedHubs.flatMap((h) =>
    h.neighborhoods.map((n) => ({ hub: h.slug, slug: n.slug })),
  );
}
