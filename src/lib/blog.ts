/**
 * Blog content model.
 *
 * Posts are added here (or migrated from the old WordPress blog) as real
 * content is written — split by audience. Nothing is fabricated: the array is
 * empty until genuine posts exist, and the blog pages show an honest empty
 * state until then. When migrating the 26 old posts, add them here and point
 * their old URLs at /blog/<slug> (see docs/migration-inventory.md).
 */

export type Audience = "consumer" | "institutional";

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  audience: Audience;
  excerpt: string;
  date: string; // ISO
  /** Hero photo shown at the top of the post and as the card thumbnail. */
  image: string;
  imageAlt: string;
  /** Body broken into headed sections (upgrade to MDX when the blog grows). */
  sections: BlogSection[];
}

export const audienceLabels: Record<Audience, string> = {
  consumer: "Homeowners & Businesses",
  institutional: "Institutional & Public Sector",
};

export const posts: BlogPost[] = [
  {
    "slug": "video-intercom-upgrade-brooklyn-multifamily",
    "title": "Upgrading to a Video Intercom in a Brooklyn Multifamily Building: A Straight-Answer Guide",
    "audience": "consumer",
    "excerpt": "What actually changes when a Brooklyn walk-up or elevator building swaps its old buzzer for a video intercom — wiring realities, board approval, and how the project runs from survey to sign-off.",
    "date": "2026-08-24",
    "image": "/images/real/real-intercom-outdoor.jpg",
    "imageAlt": "Outdoor video intercom panel installed at a building entrance",
    "sections": [
      {
        "heading": "The short answer first",
        "paragraphs": [
          "If your building still runs an original audio buzzer, you can almost always upgrade to a video intercom without ripping open walls. Most modern video systems are designed to reuse the existing intercom riser — the vertical bundle of wires already running from the lobby panel up through the building — or to skip in-building wiring entirely and route calls to residents' phones over the internet. The decision that actually matters is which of those two paths fits your building, and that comes down to the condition of the old wiring and what your residents will actually use.",
          "Brooklyn's housing stock makes this a local question, not a catalog question. A 1920s Crown Heights walk-up with cloth-insulated riser wire is a different project than a 2005 Williamsburg condo with Cat5 already in the walls. A survey of the existing panel, one apartment station, and the riser path tells you most of what you need to know before anyone talks about equipment. That's the first thing our techs do on any intercom estimate, whether the call comes through our Brooklyn Heights office on Hicks Street or the Williamsburg office on Leonard Street."
        ]
      },
      {
        "heading": "Audio, video, or smartphone-based: what each one really gets you",
        "paragraphs": [
          "A straight audio replacement is the cheapest path and sometimes the right one — you get a new lobby panel, new apartment handsets, and reliable door release, but residents still can't see who's ringing. For buildings where the priority is simply 'the buzzer must work again,' this is a legitimate answer, and it usually reuses the existing two-wire or three-wire riser as-is.",
          "A hardwired video intercom adds a camera at the entrance and a screen at each apartment station. Residents see the person at the door before releasing it, which matters for package theft, unwanted solicitors, and basic security in buildings without a doorman. The catch: video needs more bandwidth than a 1960s riser was built for, so the system either needs riser wire in good enough shape to carry the signal, new cable pulled through the existing conduit path, or an IP-based design that converts the signal.",
          "Smartphone-based systems move the 'apartment station' into an app. The entrance panel calls the resident's phone; they see video, talk, and buzz the door open from anywhere — including when they're not home, which is how a lot of Brooklyn residents now handle deliveries and dog walkers. These systems need power and an internet connection at the entrance panel, but they can eliminate the riser problem entirely, which is why they've become the default recommendation for buildings whose old wiring is beyond saving. The tradeoff is real: residents without smartphones need an alternative, and the building takes on a dependency on its internet service."
        ]
      },
      {
        "heading": "Existing risers vs. going wireless: the decision that sets the budget",
        "paragraphs": [
          "The riser is the expensive part of any intercom job. If the existing wiring tests clean — continuity on every conductor, no shorts between pairs, no sections spliced with tape in a wall cavity somewhere — a new system can often ride on it, and the project stays a panel-and-stations job rather than a wiring job. Some manufacturers build their systems specifically to run video over legacy two-wire risers for exactly this reason.",
          "When the riser fails testing, you have three options: pull new cable through the existing conduit or wire path, fish new cable through walls (disruptive, and in a pre-war building often impractical), or go wireless/IP so the riser stops mattering. Which one wins depends on the building. In a six-unit brownstone, pulling new wire floor to floor is often manageable. In a 60-unit elevator building, abandoning the riser in place and going smartphone-based is frequently the more sensible call. The honest answer requires someone to actually open the panel and test — not to quote from the sidewalk."
        ]
      },
      {
        "heading": "Why pre-war buzzer systems fail the way they do",
        "paragraphs": [
          "Most legacy Brooklyn intercoms fail from age in predictable places. The insulation on old riser wire dries out and cracks, and conductors short against each other — that's the classic symptom where pressing one apartment's button rings a different apartment, or the talk circuit hums and crackles. Decades of paint jobs seal apartment stations shut and gum up the button contacts. Lobby panels corrode from weather exposure, and the door-release transformer in the basement quietly dies of old age so the buzzer 'works' but the door never unlocks.",
          "The other common killer is renovation history. Every gut renovation, cable installation, and electrical upgrade over 80 years is a chance somebody cut, moved, or borrowed the intercom wiring. In buildings like this, the system didn't fail all at once — it degraded apartment by apartment until enough residents complained. That pattern matters for the upgrade decision: a system with scattered, cumulative wiring damage is usually a candidate for replacement rather than another round of patch repairs, because each fix just moves the fault to the next weak point in the riser."
        ]
      },
      {
        "heading": "Getting it through the board or management",
        "paragraphs": [
          "In a co-op or condo, an intercom replacement is a building-wide capital decision, and the approval path is familiar: the board (or management on its behalf) gathers proposals, compares systems, and votes. What boards should insist on in every proposal: a written scope that says explicitly whether existing wiring is being reused or replaced, what happens in apartments where the tech can't get access on installation day, who programs the directory, and what the service arrangement looks like after installation. Vague one-line quotes are how buildings end up with half-finished riser work.",
          "Boards should also settle the resident-facing questions before signing, not after. Will every apartment get a physical station, or is the system app-only? What's the plan for elderly residents or anyone without a smartphone — most app-based systems can also ring a regular phone line, and the building should confirm that's configured. Who manages move-ins and move-outs in the directory? A ten-minute conversation about these upfront saves months of complaints. Rental buildings skip the vote but not the planning: management still has to coordinate apartment access, and in occupied buildings that scheduling is usually the longest part of the project."
        ]
      },
      {
        "heading": "How the project actually runs",
        "paragraphs": [
          "A typical upgrade follows the same arc regardless of building size. First, a site survey: open the existing panel, test the riser, check power and — for smartphone systems — internet availability at the entrance. Second, a written proposal with the system spec and the wiring decision made explicit. Third, installation, which starts at the entrance panel and door release, then moves through the building station by station. The entrance door hardware matters more than people expect: the best video panel in the world is pointless if the door's lock and closer don't reliably latch, so a competent installer inspects and adjusts the door as part of the job.",
          "For a small building reusing its riser, installation is commonly a matter of days. Full riser replacement in a larger building runs longer, mostly driven by apartment access scheduling. The building keeps a working front-door lock throughout — the door release is cut over last, and any decent installer leaves the old release functioning until the new one is tested. After cutover, the installer should walk the building: every station rings, every station releases the door, video is clean at the panel, and the directory is correct. Downtown Locksmith & Security Intercoms (NYC DCWP license #2109597) surveys and installs intercoms across all five boroughs, and our line is answered 24/7 — because buzzer systems have a habit of dying at inconvenient hours."
        ]
      }
    ]
  },
  {
    "slug": "maglock-vs-electric-strike-nyc",
    "title": "Maglock vs. Electric Strike: Which Door Release Belongs on Your NYC Building?",
    "audience": "consumer",
    "excerpt": "Maglocks and electric strikes both release a door electronically, but they behave completely differently in a fire, a blackout, and an NYC inspection. Here's how to pick the right one for your door.",
    "date": "2026-08-24",
    "image": "/images/real/real-electric-strike.jpg",
    "imageAlt": "Electric strike installed in a metal door frame",
    "sections": [
      {
        "heading": "The short answer first",
        "paragraphs": [
          "For most NYC building entrances, an electric strike is the safer default: it locks the door from the outside while leaving the inside handle working exactly as it always did, so egress never depends on electronics. A maglock is the right tool when the door can't take a strike — glass storefront doors with narrow aluminum frames, doors with badly worn frames, or openings where you need holding force across the whole door — but it comes with strict NYC fire-code obligations, because a maglock physically holds the door shut in both directions until power is cut.",
          "That's the entire decision in miniature: a strike modifies how the door locks; a maglock adds a new lock that didn't exist before. Everything else — fail-safe versus fail-secure, request-to-exit devices, fire alarm tie-ins — follows from that difference. If someone quotes you a maglock on a door that could take a strike, ask why, because they may just be avoiding the frame work."
        ]
      },
      {
        "heading": "Fail-safe vs. fail-secure: what happens when the power goes out",
        "paragraphs": [
          "Fail-safe hardware unlocks when power is lost. Fail-secure hardware stays locked when power is lost. Maglocks are inherently fail-safe — they're electromagnets, so no power means no magnetism means an unlocked door. Electric strikes come in both flavors, and the choice is made at ordering time: a fail-secure strike keeps the door latched during an outage (people inside still exit freely through the mechanical handle), while a fail-safe strike releases.",
          "In New York, blackouts are not hypothetical — every building owner who was here for a summer grid event knows this. A building entrance on a fail-secure strike stays locked to the street during an outage, which is usually what an owner wants. The same building on a maglock has an unlocked front door until power returns, unless the maglock has battery backup — and battery backup on a maglock has to be designed carefully, because the fire-safety logic described below must still cut power to the lock even when the batteries are the thing supplying it.",
          "This is also why the two get combined with different hardware. Fail-safe locking is what you want on certain interior doors — like a stairwell re-entry door that must open when the fire alarm sounds — while fail-secure is the norm for perimeter security. A good access-control design mixes both deliberately rather than defaulting one type everywhere."
        ]
      },
      {
        "heading": "The NYC fire-code reality for maglocks",
        "paragraphs": [
          "New York City building and fire codes treat a maglock as what it is: a device that can hold a person inside a building. So a maglock on a door in a path of egress must release automatically when the building's fire alarm activates, must release on power failure, and must be releasable by the occupant without any special knowledge — which in practice means motion-sensor release, a push-to-exit button, or exit hardware that cuts lock power directly, arranged per the code section your specific door falls under. If your building has a fire alarm system, the maglock gets tied into it. That tie-in is real wiring to the fire alarm panel, not a suggestion.",
          "Electric strikes mostly sidestep this because the inside handle still retracts the latch mechanically — the strike never restrains anyone trying to leave. That's the deep reason strikes are the default answer for so many NYC doors: the egress analysis is simple. With a maglock, every inspection — FDNY, insurance, a buyer's engineer during a sale — will look at the release logic, and a maglock installed without proper egress release is the kind of violation that gets a system red-tagged. If you're inheriting a building with existing maglocks, having the release chain verified (alarm drop, motion sensor, exit button, power-loss behavior) is a cheap check against an expensive problem."
        ]
      },
      {
        "heading": "REX devices: the part of the system nobody explains",
        "paragraphs": [
          "REX means request-to-exit — the device that tells the access system 'someone is leaving, let them.' On a maglock door it is not optional equipment; it is the thing that makes the door legal and livable. The common setup is a passive-infrared motion sensor above the inside of the door that drops the lock as a person approaches, backed up by a labeled push-to-exit button that cuts lock power directly through its own contacts. The button is the belt-and-suspenders: even if the access controller crashes, pressing it physically interrupts power to the magnet.",
          "On an electric strike door, a REX device usually plays a quieter role: it tells the system the door is about to open legitimately, so the door-position sensor doesn't log a forced-door alarm every time someone walks out. Same name, much lower stakes. When you're comparing access-control proposals, look at how the REX is specified. A maglock quote with no motion sensor and no exit button is incomplete, and a proposal that treats REX as an add-on line item to trim from a maglock door is a proposal to make your building noncompliant."
        ]
      },
      {
        "heading": "What your actual door can take: aluminum storefront, hollow metal, wood",
        "paragraphs": [
          "Narrow-stile aluminum storefront doors — the glass doors on most NYC retail and many lobby entrances — are the classic maglock candidate. The vertical frame member is often too narrow to house a standard strike, and the door usually swings against an aluminum frame with little meat to cut into. A surface-mounted maglock on the header, with the armature plate on the door, needs no frame cutting at all. There are electrified solutions built for narrow stiles too, but on many storefront doors the maglock is genuinely the practical answer — which is fine, as long as the egress release is done right.",
          "Hollow metal doors in hollow metal frames — the standard for building service entrances, side doors, and commercial interiors — are ideal strike territory. The frame can be cut and reinforced for a heavy-duty strike matched to the existing lockset, and the result is a door that locks electronically outside and works mechanically inside. One critical caveat: if the door is a fire-rated door, the strike must carry a fire rating too, and the frame modification has to preserve the door assembly's listing. Wood doors and frames, common in older office buildings and brownstone interiors, also take strikes well, though soft or split frames sometimes need reinforcement first — and a frame too rotten to hold a strike is telling you the frame, not the lock, is the real project."
        ]
      },
      {
        "heading": "When each one wins",
        "paragraphs": [
          "Choose an electric strike when the door and frame can accept one, when free mechanical egress should be preserved untouched, when you want the door to stay locked during a power failure, and when you'd rather keep the fire-alarm interface simple. That covers most hollow metal and wood doors in NYC buildings — service entrances, package rooms, basement doors, office suites, and plenty of lobby doors.",
          "Choose a maglock when the door physically can't take a strike (narrow-stile storefront glass being the leading case), when the frame is too far gone for a clean strike install, when you need strong holding force on a large or flexing door, or when the design intentionally calls for fail-safe behavior. Accept the obligations that come with it: fire alarm tie-in, motion-sensor REX, exit button, and periodic testing of the release chain.",
          "Plenty of buildings correctly end up with both — a maglock on the glass front door and strikes everywhere else. If you're weighing this for a specific door, the useful next step is a hardware survey of the actual opening, not a phone-call guess. Downtown Locksmith & Security Intercoms installs and services both, licensed by NYC DCWP (#2109597), with walk-in offices at 803 Greenwich Street in Brooklyn Heights and 803 Greenwich Street in Williamsburg, and we work across the five boroughs around the clock."
        ]
      }
    ]
  },
  {
    "slug": "intercom-buzzer-not-working-nyc",
    "title": "Buzzer Not Working? How Intercom Repair Actually Gets Diagnosed in NYC Buildings",
    "audience": "consumer",
    "excerpt": "A dead buzzer is a diagnosis problem before it's a repair problem. Here's how a tech isolates the fault — panel, riser, or apartment station — and how to think about repair versus replacement.",
    "date": "2026-08-24",
    "image": "/images/real/real-intercom-wiring-gray-door.jpg",
    "imageAlt": "Intercom wiring exposed beside a gray building door during service",
    "sections": [
      {
        "heading": "The short answer first",
        "paragraphs": [
          "An intercom system has three zones where it can fail: the lobby panel (including its power supply and door-release circuit), the riser wiring running up through the building, and the individual apartment stations. The single most useful diagnostic fact is how many apartments are affected. One apartment dead, rest of the building fine: the fault is almost certainly that apartment's station or its branch off the riser. Every apartment dead: the fault is almost certainly at the panel or the power supply. A cluster of apartments dead — say, one line of units or everything above the third floor: that points at a break or short in a specific section of riser.",
          "That triage is worth doing before you call anyone, because it's the first question a competent tech will ask, and your answer shapes the visit. 'The whole building's buzzer is out' is often a one-visit repair at the panel. 'Apartments 4B and 5B stopped working last year and now 3B is out too' is a riser story, and it changes the repair-versus-replace conversation from the start."
        ]
      },
      {
        "heading": "What a tech checks first — and why it starts at the panel",
        "paragraphs": [
          "Diagnosis starts at the lobby panel because that's where power, the amplifier, and every riser conductor come together in one accessible place. First check is power: is the transformer or power supply alive, and is it delivering the right voltage? A silently dead transformer in the basement is one of the most common causes of a fully dead system, and it's among the cheapest fixes in the entire trade. Next is the door-release circuit, tested by jumping the release directly at the panel: if the door buzzes open on a direct test but not from apartments, the lock and release are fine and the fault is upstream in the talk/release wiring.",
          "From there the tech works the riser from the panel side, checking continuity and shorts on the conductors serving the dead apartments. Old NYC systems are mostly simple analog circuits, which is good news: they can be tested conductor by conductor with basic instruments, and the fault can usually be localized to a floor or a segment. Only after the panel and riser check out does it make sense to go into an apartment and open the station itself. A tech who starts by quoting a new system without opening the panel hasn't diagnosed anything."
        ]
      },
      {
        "heading": "Single-apartment failures: usually the station, sometimes the branch",
        "paragraphs": [
          "When one apartment can't hear, can't talk, or can't buzz the door, the usual suspect is the apartment station — the handset or wall unit inside the apartment. Decades of paint seal the buttons, the talk-listen switch contacts oxidize, handset cords break internally, and renovations knock stations off the wall and reconnect them wrong or not at all. These are bench-level repairs: clean or replace the station, re-terminate the wires, done in one visit if a compatible station is available. Compatibility is the catch — some legacy brands are still supported with replacement stations, others are long gone, and an orphaned system can turn a five-minute station swap into a hunt for salvage parts.",
          "The other single-apartment cause is the branch: the short wire run connecting that apartment to the riser. A nail from picture-hanging, a renovation, or simple corrosion at a splice can kill one branch while the riser stays healthy. Symptoms like 'my neighbor's buzzer rings my apartment' or 'I can hear the lobby but they can't hear me' are classic crossed-or-broken-conductor signatures — one function per conductor is a rough but useful mental model for these old systems, so a single bad wire often kills exactly one function."
        ]
      },
      {
        "heading": "Building-wide failures and the riser problem",
        "paragraphs": [
          "Whole-building failures usually trace to the panel zone: dead power supply, failed amplifier, corroded panel (street-facing panels live a hard life in NYC weather), or a door-release solenoid or strike that's mechanically worn out. All of these are repairable at reasonable cost, and 'the whole buzzer system is dead' frequently ends as a same-day fix. This is also the failure mode most worth calling in fast, because a building whose front door either won't lock or won't release is a security problem and an accessibility problem at once — it's a big part of why our line runs 24/7.",
          "Riser faults are the harder category. A short or break inside a wall can't be repaired at the exact point without opening the wall, so the practical fix is rerouting around the bad segment or pulling replacement conductors through the existing path where possible. When failures accumulate — multiple bad segments, multiple crossed pairs, hum and crosstalk everywhere — the riser is telling you it's at end of life. That's the point where continued spot-repair becomes the expensive option, because each visit fixes one symptom of a wiring plant that keeps producing new ones."
        ]
      },
      {
        "heading": "Repair or replace: the honest decision logic",
        "paragraphs": [
          "Repair wins when the fault is localized and parts exist: a dead transformer, a corroded panel, a broken station, one bad branch. Systems from major legacy manufacturers can often be kept running for years this way, and for a building that just needs its buzzer working, that's a perfectly good outcome. There is no rule that a 40-year-old intercom must be replaced — a simple analog system in decent wiring is remarkably serviceable.",
          "Replacement wins in three situations. First, orphaned equipment: when the manufacturer is defunct and compatible stations can't be sourced, every future failure becomes a scavenger hunt. Second, degraded risers: when the wiring itself is the recurring fault, repairs are rent, not ownership. Third, when the building wants capability the old system can't offer — video at the door, smartphone access for deliveries — the repair-versus-replace question becomes an upgrade question, and money spent patching the old system is money not spent on the one you actually want. A useful test: if this is the third intercom service call in recent memory, ask the tech to price the current repair against a replacement path before authorizing more patchwork."
        ]
      },
      {
        "heading": "For landlords: the buzzer is a legal obligation, not an amenity",
        "paragraphs": [
          "In New York City, a working front-door lock and intercom system isn't optional in most multifamily buildings. State multiple dwelling law and the city's housing maintenance code require buildings with eight or more units to have a self-closing, self-locking entrance door, and buildings covered by the intercom requirement must maintain a functioning two-way intercom with door release from each apartment to the main entrance. Maintenance is the operative word: HPD treats a broken buzzer or a non-latching entrance door as a condition to be corrected, tenants can and do file 311 complaints about it, and complaints ripen into violations with correction deadlines.",
          "For owners and managers, the practical takeaway is to treat buzzer complaints with the same urgency as heat and hot water paperwork: log the complaint, get the repair scheduled fast, and keep the invoice as proof of correction. A dead intercom also quietly feeds other problems — tenants prop the front door open, which defeats the self-locking door requirement and invites package theft and worse. Downtown Locksmith & Security Intercoms (NYC DCWP license #2109597) handles intercom diagnosis and repair across the five boroughs, 24/7, with walk-in offices at 803 Greenwich Street in Brooklyn Heights and 803 Greenwich Street in Williamsburg — and for recurring offenders, we'll tell you straight whether you're maintaining a system or subsidizing a dead one."
        ]
      }
    ]
  }
] as BlogPost[];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
