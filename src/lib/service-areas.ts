/**
 * Service areas.
 *
 * PUBLISHED (real NYC boroughs, with unique per-neighborhood pages): Brooklyn,
 * Manhattan, Queens, the Bronx, and Staten Island.
 *
 * RESERVED (published:false — outside NYC proper, not yet in scope): Nassau,
 * Westchester, and Bergen (NJ) counties. The dynamic route
 * /service-areas/[county]/[city] and these hub entries exist now so those
 * areas slot in later without a rebuild — the hubs render a "coming soon"
 * state and are excluded from the sitemap + noindex.
 *
 * Neighborhood copy is intentionally UNIQUE per page (not templated) and sticks
 * to real, general local context (building stock, door types) — no fabricated
 * claims or invented projects. This is a service-area business — copy is
 * phrased as "we serve X" / "we work on", never as a physical location in
 * every neighborhood.
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
    {
      slug: "greenpoint",
      name: "Greenpoint",
      intro:
        "In Greenpoint, Downtown Door Repair & Security works on the neighborhood's rowhouse and multi-family entry doors, converted-warehouse spaces, and the storefronts along Manhattan and Franklin — door repair, installation, locksmith, and commercial security.",
      localContext:
        "Greenpoint pairs older frame and masonry rowhouses with a growing base of converted industrial buildings, so the work ranges from careful repair of aging wood doors and frames to commercial closers, intercom entry, and access control for its waterfront conversions.",
    },
    {
      slug: "cobble-hill",
      name: "Cobble Hill",
      intro:
        "In Cobble Hill, we service the landmarked brownstone entry doors, garden-level apartments, and the Court and Smith Street storefronts — door repair, hardware matching, locksmith work, and security for homes and small businesses.",
      localContext:
        "Cobble Hill's historic district is dense with pre-war brownstones and small retail, so much of the work is careful repair and hardware matching on older doors, plus rekeying and storefront closers for its neighborhood shops and restaurants.",
    },
    {
      slug: "carroll-gardens",
      name: "Carroll Gardens",
      intro:
        "In Carroll Gardens, Downtown Door Repair & Security handles brownstone and rowhouse entry doors, garden-apartment doors, and the Smith and Court Street storefronts — repair, installation, locksmith, and commercial security.",
      localContext:
        "Carroll Gardens' deep-set brownstones and busy restaurant corridors mean a mix of high-use residential entry doors and storefront closers, along with lock upgrades and intercom entry for its multi-family buildings.",
    },
    {
      slug: "fort-greene",
      name: "Fort Greene",
      intro:
        "In Fort Greene, we work on the neighborhood's landmarked brownstones, apartment buildings, and the storefronts and cultural venues around Fulton Street and BAM — door repair, installation, locksmith, and security systems.",
      localContext:
        "Fort Greene combines historic brownstones with newer apartment stock and an active commercial and cultural corridor, driving careful door repair on older buildings alongside commercial closers, panic hardware, and access control near its venues.",
    },
    {
      slug: "boerum-hill",
      name: "Boerum Hill",
      intro:
        "In Boerum Hill, Downtown Door Repair & Security services brownstone and rowhouse entry doors, apartment doors, and the Atlantic and Smith Street storefronts — repair, installation, locksmith, and commercial security.",
      localContext:
        "Boerum Hill's mix of historic rowhouses and Atlantic Avenue retail means repair and hardware matching on older doors plus storefront closers, rekeying, and intercom entry for its small businesses and multi-unit buildings.",
    },
    {
      slug: "downtown-brooklyn",
      name: "Downtown Brooklyn",
      intro:
        "In Downtown Brooklyn, we handle commercial and office building doors, residential tower entrances, and street-level retail — door repair, installation, locksmith, and access-control systems for the borough's busiest commercial core.",
      localContext:
        "Downtown Brooklyn's office towers, courts, and high-rise residential drive heavy commercial door, closer, and panic-hardware work, plus access control, intercom entry, and cameras for its offices and mixed-use buildings.",
    },
    {
      slug: "crown-heights",
      name: "Crown Heights",
      intro:
        "In Crown Heights, Downtown Door Repair & Security serves multi-family and brownstone entry doors, apartment doors, and the Franklin and Nostrand Avenue storefronts — repair, installation, locksmith, and security work.",
      localContext:
        "Crown Heights' large stock of pre-war multi-family buildings and rowhouses means frequent rekeying, buzzer and intercom entry, and lock upgrades, along with repair of high-use entry and storefront doors on its commercial avenues.",
    },
    {
      slug: "bedford-stuyvesant",
      name: "Bedford-Stuyvesant",
      intro:
        "In Bedford-Stuyvesant, we work on the neighborhood's landmarked brownstones, multi-family buildings, and growing storefronts along Fulton and Nostrand — door repair, installation, locksmith, and commercial security.",
      localContext:
        "Bed-Stuy's historic brownstone blocks and multi-family stock call for careful repair and hardware matching on older doors and frames, plus rekeying, intercom entry, and security upgrades for its many multi-unit buildings and neighborhood shops.",
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
    {
      slug: "soho",
      name: "SoHo",
      intro:
        "In SoHo, we service the cast-iron loft buildings, residential conversions, and high-end retail storefronts the neighborhood is known for — door repair, installation, locksmith work, and commercial security.",
      localContext:
        "SoHo's landmarked cast-iron buildings pair loft residences with demanding flagship retail entrances, so the work ranges from careful repair of large historic doors to commercial closers, pivots, and access control for its storefronts.",
    },
    {
      slug: "west-village",
      name: "West Village",
      intro:
        "In the West Village, Downtown Door Repair & Security handles townhouse and brownstone entry doors, apartment doors, and the neighborhood's small storefronts and restaurants — repair, installation, locksmith, and security work.",
      localContext:
        "The West Village's historic townhouses and narrow retail streets call for careful repair and hardware matching on older doors, plus rekeying, storefront closers, and intercom entry for its restaurants, shops, and multi-unit buildings.",
    },
    {
      slug: "greenwich-village",
      name: "Greenwich Village",
      intro:
        "In Greenwich Village, we work on brownstone and apartment building entry doors, university and office entrances, and retail storefronts — door repair, installation, locksmith, and commercial security systems.",
      localContext:
        "Greenwich Village blends historic residential blocks with institutional and retail activity, driving careful repair on older doors alongside commercial closers, panic hardware, intercom entry, and access control for its buildings and shops.",
    },
    {
      slug: "east-village",
      name: "East Village",
      intro:
        "In the East Village, Downtown Door Repair & Security services tenement and walk-up entry doors, apartment doors, and the neighborhood's bars, restaurants, and storefronts — repair, installation, locksmith, and security.",
      localContext:
        "The East Village's older tenements and walk-ups mean frequent rekeying, buzzer and intercom entry, and repair of high-use entry doors, plus storefront closers and security for its dense strip of bars, restaurants, and shops.",
    },
    {
      slug: "lower-east-side",
      name: "Lower East Side",
      intro:
        "On the Lower East Side, we handle tenement and mixed-use building doors, apartment doors, and the neighborhood's storefronts and nightlife entrances — door repair, installation, locksmith, and commercial security.",
      localContext:
        "The Lower East Side's tenement stock and busy ground-floor retail and nightlife drive repair of high-use entry and storefront doors, along with rekeying, intercom entry, and access control for its mixed-use buildings.",
    },
    {
      slug: "midtown",
      name: "Midtown",
      intro:
        "In Midtown, Downtown Door Repair & Security handles commercial and office building doors, residential tower entrances, and street-level retail — door repair, installation, locksmith, and access-control systems for one of the city's busiest commercial districts.",
      localContext:
        "Midtown's office towers and high-traffic retail rely heavily on commercial door hardware, closers, and panic/exit devices, alongside access control, intercom entry, and cameras for its offices, lobbies, and storefronts.",
    },
  ],
};

const queens: AreaHub = {
  slug: "queens",
  name: "Queens",
  kind: "borough",
  state: "NY",
  published: true,
  intro:
    "Downtown Door Repair & Security serves Queens — from the pre-war apartment buildings and rowhouses of Astoria and Jackson Heights to the high-rise towers of Long Island City and the dense retail corridors of Flushing and Elmhurst. We handle door repair, installation, locksmith work, and security systems across the borough's homes, apartment buildings, and businesses.",
  neighborhoods: [
    {
      slug: "astoria",
      name: "Astoria",
      intro:
        "In Astoria, Downtown Door Repair & Security services the neighborhood's pre-war multi-family apartment buildings, rowhouses, and the restaurant and retail strips along Broadway and 30th Avenue — door repair, installation, locksmith, and security work.",
      localContext:
        "Astoria's mix of older walk-up apartment buildings and a busy, restaurant-heavy commercial strip means frequent buzzer and intercom repair, rekeying for turnover-heavy rentals, and storefront closer and lock work for its restaurants and shops.",
    },
    {
      slug: "long-island-city",
      name: "Long Island City",
      intro:
        "In Long Island City, we work on the neighborhood's high-rise residential towers, converted industrial loft buildings, and ground-floor commercial and office space — door repair, installation, locksmith, and access-control systems.",
      localContext:
        "LIC's newer high-rise towers and converted warehouse loft buildings call for a lot of commercial-grade door hardware, access control, and intercom entry, alongside apartment lock service for its fast-growing residential base.",
    },
    {
      slug: "flushing",
      name: "Flushing",
      intro:
        "In Flushing, Downtown Door Repair & Security handles apartment and co-op building doors, storefront entrances along Main Street and Roosevelt Avenue, and office doors — repair, installation, locksmith, and commercial security.",
      localContext:
        "Flushing's dense mixed-use retail corridor and older apartment and co-op stock drive heavy storefront gate and door work alongside rekeying, buzzer entry, and lock upgrades for its multi-family buildings.",
    },
    {
      slug: "jackson-heights",
      name: "Jackson Heights",
      intro:
        "In Jackson Heights, we service the neighborhood's historic garden-apartment co-ops, rowhouses, and the storefronts along 37th Avenue and 74th Street — door repair, hardware matching, locksmith work, and security systems.",
      localContext:
        "Jackson Heights' landmarked garden-apartment complexes and pre-war co-ops mean careful repair and hardware matching on older doors, plus rekeying and intercom entry for its many multi-unit buildings and busy retail strip.",
    },
    {
      slug: "forest-hills",
      name: "Forest Hills",
      intro:
        "In Forest Hills, Downtown Door Repair & Security works on the Tudor-style homes of Forest Hills Gardens, large pre-war apartment buildings along Queens Boulevard, and the Austin Street storefronts — repair, installation, locksmith, and security.",
      localContext:
        "Forest Hills pairs historic Tudor-style houses with big pre-war apartment buildings on Queens Boulevard, so the work ranges from careful residential door and hardware repair to rekeying and intercom entry for its large co-ops and rentals.",
    },
    {
      slug: "sunnyside",
      name: "Sunnyside",
      intro:
        "In Sunnyside, we service the garden-apartment co-ops of Sunnyside Gardens, rowhouses, and the commercial strip along Skillman and Queens Boulevard — door repair, installation, locksmith, and security work.",
      localContext:
        "Sunnyside's historic garden-apartment blocks and rowhouses call for careful repair and hardware matching on older doors, plus rekeying and buzzer entry for its co-ops and rental buildings.",
    },
    {
      slug: "elmhurst",
      name: "Elmhurst",
      intro:
        "In Elmhurst, Downtown Door Repair & Security handles dense multi-family apartment buildings, the storefronts along Broadway and Grand Avenue, and neighborhood offices — door repair, installation, locksmith, and commercial security.",
      localContext:
        "Elmhurst's dense stock of older multi-family walk-ups and a busy commercial strip drive frequent rekeying and buzzer entry, along with storefront closer and lock work for the neighborhood's shops.",
    },
    {
      slug: "ridgewood",
      name: "Ridgewood",
      intro:
        "In Ridgewood, we work on the neighborhood's brick rowhouses, converted industrial and loft buildings, and the growing storefronts along Myrtle and Fresh Pond Road — door repair, installation, locksmith, and security systems.",
      localContext:
        "Ridgewood's landmarked brick rowhouse blocks and converted warehouse spaces mean a mix of careful residential door repair and commercial closers, access control, and intercom entry for its newer loft conversions and storefronts.",
    },
    {
      slug: "woodside",
      name: "Woodside",
      intro:
        "In Woodside, Downtown Door Repair & Security services two-family homes, multi-family walk-up buildings, and the retail strip along Roosevelt Avenue — door repair, installation, locksmith, and security work.",
      localContext:
        "Woodside's mix of two-family houses and older walk-up apartment buildings means regular door and lock repair for owner-occupied homes alongside rekeying and buzzer entry for its rental units.",
    },
    {
      slug: "rego-park",
      name: "Rego Park",
      intro:
        "In Rego Park, we handle co-op apartment tower doors, the retail strip along Queens Boulevard and 63rd Drive, and neighborhood offices — door repair, installation, locksmith, and commercial security.",
      localContext:
        "Rego Park's co-op apartment towers and busy Queens Boulevard retail corridor drive a lot of lobby and unit-entry lock work, buzzer and intercom repair, and storefront door service for its shops.",
    },
  ],
};

const theBronx: AreaHub = {
  slug: "the-bronx",
  name: "The Bronx",
  kind: "borough",
  state: "NY",
  published: true,
  intro:
    "Downtown Door Repair & Security serves the Bronx — from the co-ops and single-family homes of Riverdale and Throggs Neck to the dense apartment buildings along the Grand Concourse and the busy retail corridor of Fordham Road. We provide door repair, installation, locksmith work, and security systems for homes and businesses across the borough.",
  neighborhoods: [
    {
      slug: "riverdale",
      name: "Riverdale",
      intro:
        "In Riverdale, Downtown Door Repair & Security services single-family homes, co-op and condo towers, and the retail strip along Riverdale Avenue — door repair, installation, locksmith, and security work.",
      localContext:
        "Riverdale's mix of single-family houses and larger co-op and condo buildings means both homeowner door and lock service and lobby-level access control, intercom entry, and rekeying for its apartment towers.",
    },
    {
      slug: "fordham",
      name: "Fordham",
      intro:
        "In Fordham, we work on the neighborhood's dense multi-family walk-up buildings and the busy storefronts along Fordham Road — door repair, installation, locksmith, and commercial security.",
      localContext:
        "Fordham's dense multi-family walk-ups and one of the Bronx's busiest retail corridors drive frequent rekeying, buzzer and intercom repair, and storefront gate and closer work for its shops.",
    },
    {
      slug: "mott-haven",
      name: "Mott Haven",
      intro:
        "In Mott Haven, Downtown Door Repair & Security handles converted industrial loft buildings, rowhouses, and newer waterfront residential development — door repair, installation, locksmith, and access-control systems.",
      localContext:
        "Mott Haven's converted warehouse and loft buildings alongside newer residential construction call for commercial-grade hardware, access control, and intercom entry, plus door and lock service for its rowhouses.",
    },
    {
      slug: "pelham-bay",
      name: "Pelham Bay",
      intro:
        "In Pelham Bay, we service single- and two-family homes and the small local storefronts along Crosby and Westchester Avenue — door repair, installation, locksmith, and security work.",
      localContext:
        "Pelham Bay's largely single- and two-family housing stock means most of our work here is residential entry-door repair, lock changes, and security upgrades for homeowners.",
    },
    {
      slug: "concourse",
      name: "Concourse",
      intro:
        "In Concourse, Downtown Door Repair & Security works on the historic apartment buildings along the Grand Concourse and neighboring multi-family walk-ups — door repair, installation, locksmith, and security systems.",
      localContext:
        "The Grand Concourse's historic apartment buildings and dense surrounding walk-ups mean a lot of lobby door and buzzer repair, rekeying after tenant turnover, and intercom entry work.",
    },
    {
      slug: "throggs-neck",
      name: "Throggs Neck",
      intro:
        "In Throggs Neck, we handle single- and two-family homes and the small commercial strips near the waterfront — door repair, installation, locksmith, and security work.",
      localContext:
        "Throggs Neck's peninsula setting and largely single- and two-family homes mean most calls here are residential door repair, lock changes, and security upgrades rather than commercial or high-rise work.",
    },
    {
      slug: "kingsbridge",
      name: "Kingsbridge",
      intro:
        "In Kingsbridge, Downtown Door Repair & Security services multi-family apartment buildings and the commercial strip along Kingsbridge Road and Broadway — door repair, installation, locksmith, and security.",
      localContext:
        "Kingsbridge's multi-family apartment stock and busy commercial strip drive regular buzzer and intercom repair, rekeying, and storefront door and lock work for its shops.",
    },
    {
      slug: "morris-park",
      name: "Morris Park",
      intro:
        "In Morris Park, we work on two-family homes and the small commercial strip along Morris Park Avenue — door repair, installation, locksmith, and security work.",
      localContext:
        "Morris Park's two-family homes and small local retail strip keep the work mostly residential — entry-door repair, lock changes, and security upgrades — with occasional storefront service.",
    },
    {
      slug: "parkchester",
      name: "Parkchester",
      intro:
        "In Parkchester, Downtown Door Repair & Security services the neighborhood's large cooperative apartment complex and surrounding multi-family buildings and retail — door repair, installation, locksmith, and access-control systems.",
      localContext:
        "Parkchester's large-scale cooperative apartment development and surrounding retail mean a steady flow of unit and lobby door repair, rekeying, buzzer entry, and access-control work.",
    },
    {
      slug: "norwood",
      name: "Norwood",
      intro:
        "In Norwood, we handle multi-family walk-up buildings and the commercial strip along Bainbridge Avenue and White Plains Road — door repair, installation, locksmith, and security work.",
      localContext:
        "Norwood's multi-family walk-ups and local commercial strip mean regular rekeying, buzzer and intercom repair, and storefront door service for its shops.",
    },
  ],
};

const statenIsland: AreaHub = {
  slug: "staten-island",
  name: "Staten Island",
  kind: "borough",
  state: "NY",
  published: true,
  intro:
    "Downtown Door Repair & Security serves Staten Island — from the rowhouses and multi-family buildings near St. George and Stapleton to the single-family homes that make up much of the island's South Shore, including Great Kills and Tottenville. We provide door repair, installation, locksmith work, and security systems for homes and businesses across the borough.",
  neighborhoods: [
    {
      slug: "st-george",
      name: "St. George",
      intro:
        "In St. George, Downtown Door Repair & Security services the neighborhood's rowhouses, multi-family buildings, and the commercial corridor near the ferry terminal — door repair, installation, locksmith, and security work.",
      localContext:
        "St. George's mix of older rowhouses, multi-family walk-ups, and newer residential development near the ferry terminal means both careful residential door repair and buzzer/intercom and lock work for its apartment buildings.",
    },
    {
      slug: "stapleton",
      name: "Stapleton",
      intro:
        "In Stapleton, we work on rowhouses, multi-family walk-up buildings, and the storefronts along Bay Street — door repair, installation, locksmith, and commercial security.",
      localContext:
        "Stapleton's rowhouse and multi-family housing stock, plus its waterfront-adjacent commercial strip, drive a mix of residential entry-door repair, rekeying, and storefront lock and gate work.",
    },
    {
      slug: "west-brighton",
      name: "West Brighton",
      intro:
        "In West Brighton, Downtown Door Repair & Security services single- and two-family homes and the local retail strip along Forest Avenue — door repair, installation, locksmith, and security work.",
      localContext:
        "West Brighton's largely single- and two-family homes mean most of our work here is residential — entry-door repair, lock changes, and security upgrades — with storefront service along Forest Avenue.",
    },
    {
      slug: "port-richmond",
      name: "Port Richmond",
      intro:
        "In Port Richmond, we handle older single- and two-family homes, rowhouses, and the commercial corridor along Port Richmond Avenue — door repair, installation, locksmith, and security work.",
      localContext:
        "Port Richmond's older housing stock and small commercial strip mean a mix of careful residential door and hardware repair alongside storefront lock and gate service for its shops.",
    },
    {
      slug: "new-dorp",
      name: "New Dorp",
      intro:
        "In New Dorp, Downtown Door Repair & Security services single-family homes and the retail strip along New Dorp Lane — door repair, installation, locksmith, and security work.",
      localContext:
        "New Dorp's largely single-family, post-war housing stock keeps the work mostly residential entry-door repair, lock changes, and security upgrades, with storefront service along New Dorp Lane.",
    },
    {
      slug: "great-kills",
      name: "Great Kills",
      intro:
        "In Great Kills, we work on single-family homes near the harbor and the small commercial strip along Hylan Boulevard — door repair, installation, locksmith, and security work.",
      localContext:
        "Great Kills' single-family homes and harbor-adjacent setting mean most calls here are residential door and lock service, with occasional storefront work along Hylan Boulevard.",
    },
    {
      slug: "tottenville",
      name: "Tottenville",
      intro:
        "In Tottenville, Downtown Door Repair & Security services the single-family homes of Staten Island's southernmost neighborhood and its small Main Street commercial strip — door repair, installation, locksmith, and security work.",
      localContext:
        "Tottenville's single-family housing stock and small-town commercial strip along Main Street mean the work here is mostly residential entry-door repair, lock changes, and security upgrades.",
    },
    {
      slug: "annadale",
      name: "Annadale",
      intro:
        "In Annadale, we handle single-family homes and the neighborhood's small local retail — door repair, installation, locksmith, and security work.",
      localContext:
        "Annadale's suburban, single-family housing stock keeps our work here almost entirely residential — entry-door repair, lock changes, and home security upgrades.",
    },
    {
      slug: "eltingville",
      name: "Eltingville",
      intro:
        "In Eltingville, Downtown Door Repair & Security services single-family and townhouse developments and the retail strip near the Eltingville Transit Center — door repair, installation, locksmith, and security work.",
      localContext:
        "Eltingville's single-family and townhouse developments, plus the retail near the transit center, drive a mix of residential entry-door and lock work and occasional storefront service.",
    },
  ],
};

// --- COUNTIES (outside NYC proper) -------------------------------------------
// Hub + per-town pages, live -- matches the real service area on the GBP
// listing and site-wide schema. Towns are real, well-known municipalities in
// each county (available by request, general "we serve X" copy) -- no
// fabricated job history or invented local detail, same honesty standard as
// the borough neighborhoods above.

const nassauCounty: AreaHub = {
  slug: "nassau-county",
  name: "Nassau County",
  kind: "county",
  state: "NY",
  published: false,
  intro:
    "Downtown Door Repair & Security serves Nassau County for locksmith, security-system, and door work -- available by request alongside our core five-borough coverage.",
  neighborhoods: [
    {
      slug: "hempstead",
      name: "Hempstead",
      intro:
        "In Hempstead, we handle locksmith work, security-system installs, and door repair for homes and businesses across the village and surrounding area -- rekeys, lock installs, access control, and storefront service.",
      localContext:
        "Hempstead's mix of single-family homes, apartment buildings, and a busy commercial downtown means both residential lockouts/rekeys and commercial storefront and access-control work.",
    },
    {
      slug: "garden-city",
      name: "Garden City",
      intro:
        "In Garden City, we service residential locks and security systems for its homes, plus door and hardware work for its retail and office buildings along Seventh Street and Franklin Avenue.",
      localContext:
        "Garden City's tree-lined residential streets and established retail corridor mean a mix of home lock upgrades and commercial storefront and office door service.",
    },
    {
      slug: "freeport",
      name: "Freeport",
      intro:
        "In Freeport, Downtown Door Repair & Security handles locksmith, security, and door work for homes and the businesses along the Nautical Mile and Main Street.",
      localContext:
        "Freeport's residential neighborhoods and waterfront commercial strip both need reliable lock, access-control, and door hardware service.",
    },
    {
      slug: "long-beach",
      name: "Long Beach",
      intro:
        "In Long Beach, we service the city's apartment buildings, boardwalk-area businesses, and single-family homes -- locksmith, security systems, and door repair.",
      localContext:
        "Long Beach's dense multi-family housing and beachfront businesses drive frequent rekeying, buzzer/intercom entry, and storefront security work.",
    },
    {
      slug: "great-neck",
      name: "Great Neck",
      intro:
        "In Great Neck, we handle locksmith and security-system work for homes and the businesses along Middle Neck Road -- lock upgrades, access control, and door hardware.",
      localContext:
        "Great Neck's larger private homes and village commercial center mean both high-end residential security upgrades and storefront lock and door service.",
    },
    {
      slug: "mineola",
      name: "Mineola",
      intro:
        "In Mineola, we service homes, offices, and the businesses near the county seat -- locksmith work, security systems, and door repair and installation.",
      localContext:
        "Mineola's mix of residential streets and a busy municipal/commercial center means both home lock service and office and storefront security work.",
    },
  ],
};

const westchesterCounty: AreaHub = {
  slug: "westchester-county",
  name: "Westchester County",
  kind: "county",
  state: "NY",
  published: false,
  intro:
    "Downtown Door Repair & Security serves Westchester County for locksmith, security-system, and door work -- available by request alongside our core five-borough coverage.",
  neighborhoods: [
    {
      slug: "yonkers",
      name: "Yonkers",
      intro:
        "In Yonkers, we handle locksmith, security-system, and door work across the city's apartment buildings, homes, and commercial strips.",
      localContext:
        "Yonkers' dense mix of multi-family buildings and single-family homes drives frequent rekeying, buzzer/intercom entry, and lock installation work.",
    },
    {
      slug: "white-plains",
      name: "White Plains",
      intro:
        "In White Plains, we service the office buildings, apartment towers, and homes across the city -- locksmith work, access control, and commercial security systems.",
      localContext:
        "White Plains' office towers and multi-unit residential buildings mean a lot of access-control, intercom, and commercial-grade lock work alongside residential service.",
    },
    {
      slug: "new-rochelle",
      name: "New Rochelle",
      intro:
        "In New Rochelle, Downtown Door Repair & Security handles locksmith, security, and door work for homes and the businesses downtown.",
      localContext:
        "New Rochelle's mix of coastal homes, apartment buildings, and a growing downtown commercial district means both residential and commercial lock and security work.",
    },
    {
      slug: "mount-vernon",
      name: "Mount Vernon",
      intro:
        "In Mount Vernon, we service apartment buildings, homes, and storefronts -- locksmith work, rekeying, security systems, and door hardware.",
      localContext:
        "Mount Vernon's dense multi-family housing stock drives frequent rekeying, buzzer/intercom entry, and lock upgrades for landlords and tenants alike.",
    },
    {
      slug: "scarsdale",
      name: "Scarsdale",
      intro:
        "In Scarsdale, we handle locksmith and security-system work for the village's homes -- lock upgrades, smart locks, and access control.",
      localContext:
        "Scarsdale's larger private homes mean a focus on higher-end lock hardware, smart-lock installs, and residential security-camera systems.",
    },
    {
      slug: "rye",
      name: "Rye",
      intro:
        "In Rye, we service homes and the businesses downtown -- locksmith work, security systems, and door repair and installation.",
      localContext:
        "Rye's coastal homes and small downtown commercial area mean both residential security upgrades and storefront door and lock service.",
    },
  ],
};

const rocklandCounty: AreaHub = {
  slug: "rockland-county",
  name: "Rockland County",
  kind: "county",
  state: "NY",
  published: false,
  intro:
    "Downtown Door Repair & Security serves Rockland County for locksmith, security-system, and door work -- available by request alongside our core five-borough coverage.",
  neighborhoods: [
    {
      slug: "nyack",
      name: "Nyack",
      intro:
        "In Nyack, we handle locksmith and security work for the village's homes and the shops and restaurants along Main Street.",
      localContext:
        "Nyack's historic homes and busy Main Street commercial strip mean both residential lock and hardware repair and storefront security work.",
    },
    {
      slug: "spring-valley",
      name: "Spring Valley",
      intro:
        "In Spring Valley, Downtown Door Repair & Security services homes, apartment buildings, and businesses -- locksmith, rekeying, and security systems.",
      localContext:
        "Spring Valley's mix of multi-family housing and commercial strips drives frequent rekeying, lock installs, and storefront security service.",
    },
    {
      slug: "new-city",
      name: "New City",
      intro:
        "In New City, we service homes and the businesses along Main Street and South Main -- locksmith work, security systems, and door hardware.",
      localContext:
        "New City's residential neighborhoods and hamlet commercial center mean both home lock service and storefront and office door work.",
    },
    {
      slug: "suffern",
      name: "Suffern",
      intro:
        "In Suffern, we handle locksmith and security-system work for homes and the businesses in the village center.",
      localContext:
        "Suffern's village-center businesses and surrounding residential streets both need reliable lock, access-control, and door hardware service.",
    },
    {
      slug: "nanuet",
      name: "Nanuet",
      intro:
        "In Nanuet, we service homes and the retail and office businesses along Route 59 -- locksmith work, security systems, and door repair.",
      localContext:
        "Nanuet's mix of residential streets and a busy retail corridor drives both home lock service and commercial storefront and office security work.",
    },
    {
      slug: "pearl-river",
      name: "Pearl River",
      intro:
        "In Pearl River, we handle locksmith and door work for homes and the businesses along Central Avenue.",
      localContext:
        "Pearl River's residential neighborhoods and small downtown commercial strip both need reliable lock, hardware, and security service.",
    },
  ],
};

const bergenCounty: AreaHub = {
  slug: "bergen-county",
  name: "Bergen County",
  kind: "county",
  state: "NJ",
  published: false,
  intro:
    "Downtown Door Repair & Security serves Bergen County, NJ for locksmith, security-system, and door work -- available by request alongside our core five-borough coverage.",
  neighborhoods: [
    {
      slug: "hackensack",
      name: "Hackensack",
      intro:
        "In Hackensack, we handle locksmith, security-system, and door work for the county seat's homes, offices, and courthouse-area businesses.",
      localContext:
        "Hackensack's mix of office buildings, apartment complexes, and homes means both commercial access-control work and residential lock service.",
    },
    {
      slug: "fort-lee",
      name: "Fort Lee",
      intro:
        "In Fort Lee, we service the city's high-rise apartment buildings and businesses near the George Washington Bridge -- locksmith work, access control, and intercom systems.",
      localContext:
        "Fort Lee's dense high-rise residential buildings drive a lot of buzzer/intercom entry, access-control, and master-key system work.",
    },
    {
      slug: "paramus",
      name: "Paramus",
      intro:
        "In Paramus, we handle locksmith and security-system work for homes and the retail businesses along Route 17 and Route 4.",
      localContext:
        "Paramus's major retail corridors mean a focus on commercial-grade locks, access control, and security cameras alongside residential service.",
    },
    {
      slug: "englewood",
      name: "Englewood",
      intro:
        "In Englewood, Downtown Door Repair & Security services homes and the businesses downtown -- locksmith work, security systems, and door repair.",
      localContext:
        "Englewood's mix of larger private homes and a walkable downtown commercial district means both residential security upgrades and storefront lock service.",
    },
    {
      slug: "teaneck",
      name: "Teaneck",
      intro:
        "In Teaneck, we handle locksmith and door work for the township's homes and businesses.",
      localContext:
        "Teaneck's suburban single-family homes and local commercial strips both need reliable lock, hardware, and security service.",
    },
    {
      slug: "ridgewood",
      name: "Ridgewood",
      intro:
        "In Ridgewood, we service homes and the shops along East Ridgewood Avenue -- locksmith work, security systems, and door hardware.",
      localContext:
        "Ridgewood's residential neighborhoods and central shopping district mean both home lock service and storefront door and security work.",
    },
  ],
};

const counties: AreaHub[] = [nassauCounty, westchesterCounty, rocklandCounty, bergenCounty];

// --- Exports -----------------------------------------------------------------

export const areaHubs: AreaHub[] = [
  brooklyn,
  manhattan,
  queens,
  theBronx,
  statenIsland,
  ...counties,
];

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

// --- Indexed neighborhood set (2026-08-24 doorway-page prune) ----------------
// Only neighborhoods we GENUINELY and routinely service get a dedicated page:
// all of brownstone Brooklyn around both offices, plus the lower-Manhattan
// corridor the business has actually worked for years (see old blog archive:
// Tribeca, FiDi, SoHo, LES). Everything else is dispatch coverage and lives on
// the borough hub page only. Removed URLs 308 to the parent hub (redirects.ts).
const INDEXED_NEIGHBORHOODS: Record<string, string[]> = {
  brooklyn: [
    "brooklyn-heights",
    "park-slope",
    "williamsburg",
    "dumbo",
    "bushwick",
    "greenpoint",
    "cobble-hill",
    "carroll-gardens",
    "fort-greene",
    "boerum-hill",
    "downtown-brooklyn",
    "crown-heights",
    "bedford-stuyvesant",
  ],
  manhattan: [
    "tribeca",
    "financial-district",
    "soho",
    "lower-east-side",
    "west-village",
    "chelsea",
  ],
};

export function isIndexedNeighborhood(hubSlug: string, neighborhoodSlug: string): boolean {
  return INDEXED_NEIGHBORHOODS[hubSlug]?.includes(neighborhoodSlug) ?? false;
}

/** The neighborhoods of a hub that keep a dedicated page (renders + internal links). */
export function indexedNeighborhoodsOf(hub: AreaHub): Neighborhood[] {
  return hub.neighborhoods.filter((n) => isIndexedNeighborhood(hub.slug, n.slug));
}

/** All published + indexed (hub, neighborhood) pairs — for static params + sitemap. */
export function allPublishedNeighborhoods(): { hub: string; slug: string }[] {
  return publishedHubs.flatMap((h) =>
    indexedNeighborhoodsOf(h).map((n) => ({ hub: h.slug, slug: n.slug })),
  );
}

/**
 * Every (hub, neighborhood) pair that USED to have a URL but was pruned —
 * redirect sources. Includes the unpublished county hubs' cities.
 */
export function prunedNeighborhoods(): { hub: string; slug: string }[] {
  return areaHubs.flatMap((h) =>
    h.neighborhoods
      .filter((n) => !(h.published && isIndexedNeighborhood(h.slug, n.slug)))
      .map((n) => ({ hub: h.slug, slug: n.slug })),
  );
}
