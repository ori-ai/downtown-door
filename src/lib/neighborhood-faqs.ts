/**
 * Per-neighborhood FAQs for the KEPT service-area pages (2026-08-24 prune).
 *
 * RULES: Every kept neighborhood page must have UNIQUE questions and answers
 * grounded in that neighborhood's real building stock and the work we actually
 * do there — never a template with the place name swapped. No invented
 * projects, clients, or stats. Keyed as "<hub>/<neighborhood>".
 */

export interface NeighborhoodFaq {
  q: string;
  a: string;
}

export const neighborhoodFaqs: Record<string, NeighborhoodFaq[]> = {
  // --- Brooklyn ---------------------------------------------------------------
  "brooklyn/brooklyn-heights": [
    {
      q: "Can you rekey or replace locks on a landmarked brownstone door without damaging it?",
      a: "Yes — this is the bulk of our Brooklyn Heights work. On landmarked brownstones we rekey or replace the cylinder and internal hardware while keeping the original escutcheons, rosettes, and mortise casework intact, so nothing changes on the street-facing side. Our main office is at 170 Hicks St, so a tech is minutes away.",
    },
    {
      q: "Do you service buzzer and intercom entry in pre-war co-op buildings?",
      a: "We repair and replace intercom and buzzer panels in Brooklyn Heights' pre-war co-ops regularly — from fixing dead door-release strikes on a single unit to replacing a full lobby panel with an audio/video or smartphone-based system, coordinated with the board or managing agent.",
    },
    {
      q: "Where is your Brooklyn Heights office?",
      a: "170 Hicks St, Brooklyn, NY 11201 — (347) 514-8770. It's our original location and main office: locksmith-led, with door supply and repair and security-system installation from the same crew, and it still handles most of the brownstone-Brooklyn and Downtown Brooklyn work.",
    },
  ],
  "brooklyn/park-slope": [
    {
      q: "Do you install smart locks on Park Slope rowhouse doors?",
      a: "Yes — smart-lock and keypad installs on rowhouse and garden-apartment doors are among our most common Park Slope jobs. Older stile-and-rail wood doors often need the bore adjusted or a reinforcement plate added, which we handle as part of the install rather than forcing hardware into a door that can't hold it.",
    },
    {
      q: "Can you fix a storefront door closer on Fifth or Seventh Avenue?",
      a: "We service the retail corridors on Fifth and Seventh Avenue frequently — worn closers, misaligned pivots, and dragging aluminum storefront doors. Most closer swaps are done in a single visit with commercial-grade hardware sized to the door.",
    },
    {
      q: "I'm a landlord with several Park Slope units — can you master-key them?",
      a: "Yes. We design master-key systems for multi-unit rowhouses so you carry one key while each tenant's key opens only their unit, and we keep the bitting records on file for future rekeys.",
    },
  ],
  "brooklyn/williamsburg": [
    {
      q: "Where is your Williamsburg office?",
      a: "232 Leonard St, Brooklyn, NY 11211 — (347) 851-8615. It leads with door supply and installation and security-system installation, with locksmith service alongside, and it's our hub for Williamsburg and North Brooklyn work.",
    },
    {
      q: "Can you put access control on a converted-loft building entrance?",
      a: "Yes — Williamsburg's converted industrial buildings are a big part of our access-control work: electric strikes or maglocks on heavy steel and glass entry doors, fob or keypad readers, and intercom release wired to each unit. We spec hardware rated for the door's weight and traffic, which matters on former warehouse entrances.",
    },
    {
      q: "Do you handle restaurant and bar doors along Bedford and Berry?",
      a: "We service the hospitality corridor regularly — panic hardware for egress compliance, storefront glass-door pivots and closers, gate locks, and rekeying after staff turnover. Emergency calls for doors that won't lock at closing time are common and we prioritize them.",
    },
  ],
  "brooklyn/dumbo": [
    {
      q: "Can you install video intercoms in a DUMBO loft building?",
      a: "Yes — DUMBO's converted warehouses are exactly where we install the most video intercom systems: lobby panels with camera and remote release, wired to apartments or to residents' phones. Thick masonry walls and long cable runs are normal here and we plan the wiring path before quoting.",
    },
    {
      q: "Do you work on the oversized steel doors common in former industrial buildings?",
      a: "We do — oversized and overweight doors need heavier hinges, longer-throw closers, and strikes rated for the mass. We repair, re-hang, and re-hardware these doors rather than treating them like standard commercial entries.",
    },
    {
      q: "Can you secure a gallery or office space with card or fob access?",
      a: "Yes. For DUMBO's offices and galleries we install standalone or networked reader systems — fob, card, or PIN — with audit trails, scheduled unlocking for business hours, and integration with the building's intercom where the landlord allows it.",
    },
  ],
  "brooklyn/bushwick": [
    {
      q: "Can you rekey a whole multi-family building in Bushwick?",
      a: "Yes — tenant turnover rekeys across Bushwick's multi-family stock are one of our most frequent jobs. We rekey entry, vestibule, and unit doors in one visit, and can set up a simple master system so the owner carries one key.",
    },
    {
      q: "Do you install intercoms in walk-up buildings that never had one?",
      a: "We do first-time intercom installs in Bushwick walk-ups regularly — surface-run wiring where the building has no conduit, a weatherproof entry panel, and either in-unit stations or a telephone/smartphone-based system that avoids in-wall wiring entirely.",
    },
    {
      q: "Can you secure a converted studio or warehouse workspace?",
      a: "Yes — for Bushwick's converted commercial spaces we install high-security cylinders, panic-compliant exit hardware, gates and padlock systems, and camera coverage for shared entrances and loading areas.",
    },
  ],
  "brooklyn/greenpoint": [
    {
      q: "Can you repair an old wooden door and frame on a Greenpoint rowhouse?",
      a: "Yes — Greenpoint's older frame rowhouses give us constant work straightening sagging wood doors, rebuilding split jambs, and fitting new mortise hardware into doors that are decades old. We repair and reinforce first; replacement is the last resort.",
    },
    {
      q: "Do you service the storefronts on Manhattan and Franklin Avenue?",
      a: "We handle the commercial strip regularly — storefront glass-door closers and pivots, gate and padlock hardware, rekeying after employee changes, and camera installs covering entries and registers.",
    },
    {
      q: "Can you add access control to a converted waterfront building?",
      a: "Yes — for Greenpoint's newer conversions we install fob and keypad access on lobby and amenity doors, video intercom entry, and electric strikes, coordinated with property management on wiring and fire-egress requirements.",
    },
  ],
  "brooklyn/cobble-hill": [
    {
      q: "Can you match period hardware on a Cobble Hill brownstone door?",
      a: "Matching and restoring period hardware is a specialty here — Cobble Hill's historic district means owners usually want the original knobs, rosettes, and mortise locks preserved. We source compatible mortise bodies and cylinders so the door keeps its face while the security underneath is new.",
    },
    {
      q: "Do you service the shops on Court and Smith Street?",
      a: "Yes — small-storefront work on Court and Smith is steady: door closers, deadbolt and mortise repairs, gate locks, and rekeys. Most jobs are same-day since our Brooklyn Heights office at 170 Hicks St is a few minutes away.",
    },
    {
      q: "Can you quiet a slamming vestibule door in a small co-op?",
      a: "Yes — that's usually a worn or wrongly-sized closer. We fit a properly rated closer with backcheck and delayed action so the vestibule door closes fully (and locks) without slamming, which also keeps the buzzer-release strike from getting hammered loose.",
    },
  ],
  "brooklyn/carroll-gardens": [
    {
      q: "Can you secure the under-stoop garden-apartment entrance of a Carroll Gardens brownstone?",
      a: "Yes — garden-level doors sit below grade and out of sight, so we typically fit a high-security deadbolt with a reinforced strike, and often add a camera angle covering the gated areaway. It's one of the most common requests we get in Carroll Gardens.",
    },
    {
      q: "Do you handle restaurant doors along Smith and Court?",
      a: "We service the restaurant rows regularly — panic hardware for egress, closers on high-traffic entry doors, walk-in and office rekeys after staff changes, and emergency lockout or lock-failure calls at open and close.",
    },
    {
      q: "Can you install an intercom in a two- or three-family rowhouse?",
      a: "Yes — small multi-family intercoms are a staple here: a two- or three-button entry panel, release strike on the entry door, and either in-unit stations or phone-based answering so tenants can buzz guests in remotely.",
    },
  ],
  "brooklyn/fort-greene": [
    {
      q: "Can you upgrade security on a landmarked Fort Greene brownstone without changing its look?",
      a: "Yes — like the rest of brownstone Brooklyn's historic districts, the rule in Fort Greene is: keep the face, upgrade the guts. High-security cylinders in original mortise bodies, reinforced strikes hidden in the jamb, and discreet cameras that don't alter the facade.",
    },
    {
      q: "Do you install panic hardware near the BAM cultural district?",
      a: "We install and service panic bars and exit devices for venues, restaurants, and commercial spaces around the Fulton Street corridor — code-compliant egress hardware that still locks securely from outside.",
    },
    {
      q: "Can you handle a mixed-use building with apartments over a storefront?",
      a: "Yes — that's a classic Fort Greene configuration. We separate the systems: storefront hardware and gates for the commercial space, intercom and mailbox-area security for the residential entrance, and a key plan that keeps the two from crossing.",
    },
  ],
  "brooklyn/boerum-hill": [
    {
      q: "Can you service the storefronts along Atlantic Avenue?",
      a: "Yes — Atlantic Avenue's antique shops, restaurants, and showrooms bring us steady closer, gate, and mortise-lock work. Older commercial doors on the avenue often carry vintage hardware worth preserving, and we repair in place where we can.",
    },
    {
      q: "Do you rekey after a renovation or contractor handover in Boerum Hill?",
      a: "Constantly — with the amount of townhouse renovation in Boerum Hill, post-construction rekeys are one of our most common calls. We rekey every cylinder the contractors had access to and hand you a fresh key set the same visit.",
    },
    {
      q: "Can you add a camera doorbell or intercom to a rowhouse?",
      a: "Yes — we install video doorbells and small intercom systems on Boerum Hill rowhouses, including running discreet wiring on masonry facades and integrating the door-release with an existing deadbolt or strike.",
    },
  ],
  "brooklyn/downtown-brooklyn": [
    {
      q: "Do you handle commercial office-building door work in Downtown Brooklyn?",
      a: "Yes — Downtown Brooklyn is our heaviest commercial territory: office-suite lock changes, ADA operators and closers, panic and fire-exit hardware, and access-control readers on suite and stairwell doors, coordinated with building management and their fire-safety requirements.",
    },
    {
      q: "Can you install access control for a whole floor or suite?",
      a: "We design and install networked access control — card, fob, or mobile-credential readers, electric strikes or maglocks per door, scheduled unlock hours, and audit logs — scaled from a single suite entrance to a full floor.",
    },
    {
      q: "Do you service high-rise residential towers?",
      a: "Yes — for the newer residential towers we handle unit-door lock service, amenity-space access control, and package-room and garage-entry hardware, working through the property manager or super.",
    },
  ],
  "brooklyn/crown-heights": [
    {
      q: "Can you replace a lobby-door lock in a pre-war Crown Heights apartment building?",
      a: "Yes — Crown Heights' large pre-war multi-family stock keeps us busy with lobby and vestibule door work: heavy-duty mortise locks and panic-compliant exit hardware paired with the buzzer release, built to survive hundreds of cycles a day.",
    },
    {
      q: "Do you fix intercoms where half the building's buzzers are dead?",
      a: "That's a classic aging-riser problem in pre-war buildings — we diagnose whether it's the panel, the wiring riser, or individual stations, and either repair the branch or replace the system with one that uses the existing wiring or residents' phones.",
    },
    {
      q: "Can you secure a storefront on Franklin or Nostrand Avenue?",
      a: "Yes — we install and repair storefront gates and gate locks, high-security padlocks and hasps, mortise and deadbolt hardware, and cameras for the avenues' shops and restaurants.",
    },
  ],
  "brooklyn/bedford-stuyvesant": [
    {
      q: "Can you restore the original door hardware on a Bed-Stuy brownstone?",
      a: "Yes — Bed-Stuy has some of the finest surviving brownstone doors in Brooklyn, and owners usually want them kept original. We restore and re-secure period mortise locks, fit new cylinders into original trim, and reinforce frames without altering the door's face.",
    },
    {
      q: "Do you rekey SRO or room-by-room rental configurations?",
      a: "We handle room-level keying in Bed-Stuy's subdivided townhouses — individual keyed bedroom doors under a landlord master key, with records kept so future turnovers are a quick rekey rather than new hardware.",
    },
    {
      q: "Can you install cameras on a mixed residential block?",
      a: "Yes — we install residential camera systems covering stoops, areaways, and rear yards, with recording local to the house and phone access for the owner. We position cameras to cover your property, not your neighbors'.",
    },
  ],

  // --- Manhattan --------------------------------------------------------------
  "manhattan/tribeca": [
    {
      q: "Can you service the heavy loft doors in Tribeca's converted buildings?",
      a: "Yes — Tribeca's cast-iron-era conversions have some of the heaviest residential doors in the city. We re-hang and re-hardware oversized loft doors, fit high-security mortise locks, and install closers and pivots rated for the weight.",
    },
    {
      q: "Do you do emergency storefront door repair in Tribeca?",
      a: "Emergency commercial work is a long-standing part of our Tribeca coverage — glass storefront doors that won't latch, damaged frames after attempted break-ins, and failed panic hardware. We stabilize and secure the same visit, then complete permanent repairs.",
    },
    {
      q: "Can you install access control in a boutique office or gallery?",
      a: "Yes — fob or mobile-credential readers, electric strikes, video intercom entry, and camera coverage sized for Tribeca's boutique commercial spaces, installed cleanly around high-end finishes.",
    },
  ],
  "manhattan/financial-district": [
    {
      q: "Do you work on office-building suite doors in FiDi?",
      a: "Yes — suite-door lock changes, fire-rated hardware, closers, and access-control readers are our core FiDi work, scheduled around building freight-elevator and COI requirements. We carry insurance certificates that Class-A management companies accept.",
    },
    {
      q: "Can you handle after-hours commercial lock emergencies in the Financial District?",
      a: "We do — when a commercial door won't secure at closing time, we treat it as an emergency dispatch. FiDi's mix of ground-floor retail and office lobbies means most of these calls are failed mortise locks or panic devices on aluminum-and-glass doors, which we carry parts for.",
    },
    {
      q: "Do you install high-security cylinders for offices handling sensitive material?",
      a: "Yes — we install restricted-keyway, pick- and drill-resistant cylinders (with controlled key duplication) on office, server-room, and records-room doors, keyed into a master system where the tenant wants one.",
    },
  ],
  "manhattan/soho": [
    {
      q: "Can you repair a SoHo storefront door without disrupting business hours?",
      a: "Yes — most SoHo retail work is scheduled early morning or after close so the sales floor stays open. Closers, pivots, glass-door patch fittings, and gate hardware are the usual jobs on the cast-iron district's storefronts.",
    },
    {
      q: "Do you install security systems for high-value retail?",
      a: "We install layered retail security in SoHo — high-security locks and reinforced strikes, cameras covering entries and stock rooms, and access control separating the sales floor from back-of-house — built around how the store actually operates.",
    },
    {
      q: "Can you work on a landmarked cast-iron building's entrance?",
      a: "Yes — like the brownstone districts we work in across the river, SoHo's landmarked facades mean the hardware has to disappear into the existing door: cylinders and internal mechanisms upgraded while the visible ironwork and trim stay untouched.",
    },
  ],
  "manhattan/lower-east-side": [
    {
      q: "Do you install panic bars for LES bars and venues?",
      a: "Yes — egress hardware for the Lower East Side's bars, restaurants, and venues is work we've done for years: code-compliant panic devices that satisfy FDNY egress requirements while still locking hard from the street side.",
    },
    {
      q: "Can you fix the entry door and buzzer on an old tenement building?",
      a: "Constantly — LES tenement entry doors take enormous abuse. We repair or replace the door and frame, fit heavy-duty closers and locks, and get the buzzer release working with the existing intercom riser, or replace the panel outright.",
    },
    {
      q: "Do you secure basement and cellar access doors?",
      a: "Yes — sidewalk cellar doors and rear basement entries are a common LES vulnerability. We install hasp-and-padlock systems, interior drop bars, and alarm contacts, and repair the steel doors and frames themselves.",
    },
  ],
  "manhattan/west-village": [
    {
      q: "Can you preserve the look of a West Village townhouse door while upgrading its locks?",
      a: "Yes — the Greenwich Village Historic District means most owners want zero visible change. We upgrade cylinders and mortise internals behind the original hardware, reinforce the frame from inside the jamb, and match any new trim to the door's period style.",
    },
    {
      q: "Do you service the small storefronts on Bleecker and Hudson?",
      a: "We handle the boutique storefronts regularly — narrow older doors with vintage hardware, closer and pivot repairs, rekeys between tenants, and discreet camera installs that keep a historic streetscape intact.",
    },
    {
      q: "Can you add a video intercom to a small co-op without in-wall wiring?",
      a: "Yes — in the Village's older small co-ops we often use smartphone-based intercom systems that need only the entry panel and door-release wiring, avoiding riser work entirely in buildings where opening walls isn't an option.",
    },
  ],
  "manhattan/chelsea": [
    {
      q: "Do you install access control for Chelsea galleries?",
      a: "Yes — gallery access control is a Chelsea staple for us: buzz-in video intercoms at the street door, maglocks or strikes on interior doors, and after-hours camera coverage, installed around finished exhibition walls without visible conduit.",
    },
    {
      q: "Can you service loft-building entry doors in West Chelsea?",
      a: "We work on the converted loft and warehouse entries throughout West Chelsea — heavy steel and glass doors, high-cycle closers, intercom release, and fob readers for buildings without a doorman.",
    },
    {
      q: "Do you handle apartment lock work in Chelsea's larger buildings?",
      a: "Yes — unit-door lock changes, high-security cylinder upgrades, and smart-lock installs, coordinated with building management where house rules require specific hardware or key escrow.",
    },
  ],
};

export function faqsFor(hubSlug: string, neighborhoodSlug: string): NeighborhoodFaq[] {
  return neighborhoodFaqs[`${hubSlug}/${neighborhoodSlug}`] ?? [];
}
