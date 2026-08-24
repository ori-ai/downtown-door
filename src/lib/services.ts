/**
 * PATH A — Residential & small-commercial services (transactional funnel).
 *
 * Content here is general, non-fabricated trade knowledge. Two honesty gates:
 *  - `pricing` numbers are ILLUSTRATIVE ranges the client must confirm/replace
 *    (rendered with a visible "guidance only" disclaimer). See docs/human-todo.md.
 *  - No invented certifications, guarantees, or specific past jobs.
 */

export type ServiceCategory = "door" | "locksmith" | "security";

export interface PriceGuide {
  item: string;
  range: string;
  note?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  emergency?: boolean;
  icon: string; // lucide icon name
  metaTitle: string;
  metaDescription: string;
  /** GEO/AEO answer-first opening — one direct paragraph. */
  answerFirst: string;
  heroTagline: string;
  whatItIs: string[];
  whenNeeded: string[];
  process: ProcessStep[];
  pricing: PriceGuide[];
  faqs: Faq[];
  related: string[]; // other service slugs
  /** Real install photos from /public/images/real — no stock, honest alt text. */
  photos?: { src: string; alt: string }[];
}

const allServices: Service[] = [
  {
    "slug": "locksmith",
    "title": "Locksmith Services",
    "shortTitle": "Locksmith",
    "category": "locksmith",
    "emergency": true,
    "icon": "KeyRound",
    "metaTitle": "Brooklyn Locksmith — 24/7 Licensed | Downtown",
    "metaDescription": "Licensed NYC locksmith (DCWP #2109597). 24/7 lockouts, rekeys, lock installs, walk-in key cutting at 170 Hicks St & 232 Leonard St. All five boroughs.",
    "answerFirst": "Downtown Door Repair & Security is a licensed NYC locksmith (DCWP license #2109597) operating 24/7 across all five boroughs, with two walk-in offices — 170 Hicks St in Brooklyn Heights and 232 Leonard St in Williamsburg. We handle residential and commercial lockouts, rekeying, mortise and cylindrical lock installation and repair, and on-the-spot key cutting at both office counters. Because we run real storefronts with real machines — not a dispatch number reselling your call to a subcontractor — you get a licensed technician, a written quote before work starts, and hardware we actually stock, including Mul-T-Lock and Maxtek high-security cylinders.",
    "heroTagline": "Two Brooklyn storefronts. Licensed techs, stocked vans, keys cut while you wait — 24 hours a day.",
    "whatItIs": [
      "Locksmith work in New York City is not the same trade it is in the suburbs. Most doors we open, rekey, or rebuild are mortise locks — the tall rectangular lock bodies set into a pocket in the door edge, standard on brownstones, pre-war apartment buildings, and older storefronts. Mortise hardware uses a threaded cylinder that screws into the lock case, which means parts, cams, and spindle lengths have to match, and a tech who only knows cylindrical (knob-and-bore) hardware from a big-box store will get it wrong. We carry mortise cases, cylinders, cams, and trim on the van, and we repair the existing case where possible instead of defaulting to a full replacement.",
      "The everyday work is lockouts, rekeys, and lock changes. A rekey swaps the pins inside your existing cylinder so old keys stop working — usually the right call after a move-in, a lost key, a breakup, or a contractor who never returned the spare. A lock change replaces the hardware itself, which is what you want when the lock is worn, drilled, seized from decades of Brooklyn weather, or simply too low-grade for an entry door. On lockouts we pick or bypass first; drilling is a last resort, and if we do have to drill we tell you before we start and replace the cylinder in the same visit.",
      "Both offices operate as true walk-in shops. There is an Xhorse automatic key-cutting machine at the counter, so standard house keys, mortise keys, and most commercial keys are cut while you wait — duplicated from your working key or, in many cases, originated to code. We also cut and pin cylinders in-house, which is why a Downtown rekey or master-key change turns around faster than shops that send cylinders out. If you're near Brooklyn Heights or Williamsburg, walking in is almost always cheaper and faster than a service call for key work.",
      "Every job is performed under NYC DCWP license #2109597 — worth checking on any locksmith you call, because unlicensed operators are a real and expensive problem in this city. The classic scam is a $29 quote over the phone that becomes several hundred dollars of 'necessary drilling' at your door. We quote the realistic range before dispatch, confirm it in person before touching the lock, and put the final number in writing."
    ],
    "whenNeeded": [
      "Locked out of your apartment, brownstone, or storefront — day or night",
      "Just moved in and don't know who still has keys — rekey every cylinder",
      "Key turns but the mortise lock won't retract, or the key spins freely",
      "Landlord or property manager needs a vacant unit rekeyed between tenants",
      "Broken key snapped off inside the cylinder",
      "Insurance or co-op board requires a specific lock grade on your entry door",
      "Storefront gate or commercial door lock seized or vandalized overnight",
      "You need duplicate keys cut accurately — walk into either office, no appointment"
    ],
    "process": [
      {
        "title": "Call or walk in",
        "description": "Describe the door and the problem — apartment, brownstone, storefront, mortise or cylindrical if you know it. We give a realistic price range up front, not a teaser number, and dispatch from the nearest office or van."
      },
      {
        "title": "On-site assessment",
        "description": "The technician inspects the lock, door, and frame, confirms the quote in writing, and explains options — repair the existing hardware, rekey, or replace — before any work begins."
      },
      {
        "title": "The work",
        "description": "Non-destructive entry first on lockouts. Rekeys and cylinder pinning are done on the spot from van stock. Mortise repairs use matched parts, not forced substitutes. Keys are cut and tested in the lock before we call it done."
      },
      {
        "title": "Test, hand over, document",
        "description": "You test every key in every cylinder yourself. You get an itemized receipt under our DCWP license number, and we log the keying so future service on the same door is faster."
      }
    ],
    "pricing": [
      {
        "item": "Residential lockout (standard entry)",
        "range": "$$ (confirm)",
        "note": "Final price depends on lock type and whether non-destructive entry is possible — confirmed before work starts."
      },
      {
        "item": "Rekey per cylinder",
        "range": "$$ (confirm)",
        "note": "Multi-cylinder and whole-building rekeys are quoted as a package."
      },
      {
        "item": "Mortise lock repair or replacement",
        "range": "$$ (confirm)",
        "note": "Repair of the existing case is quoted first where the hardware allows it."
      },
      {
        "item": "Walk-in key cutting (per key)",
        "range": "$ (confirm)",
        "note": "Cut while you wait at 170 Hicks St or 232 Leonard St."
      }
    ],
    "faqs": [
      {
        "q": "How much does a lockout actually cost in NYC, and why do quotes vary so much?",
        "a": "The honest answer: it depends on the lock, the hour, and whether the door can be opened without drilling. A standard cylindrical lock on an apartment door at 2pm is the low end; a high-security mortise cylinder on a steel door at 3am is the high end. The $19–$39 quotes you see online are bait — the price is invented at your door once the tech claims the lock 'must be drilled.' We quote a realistic range on the phone, confirm the exact number in person before starting, and we pick or bypass before drilling is ever discussed. Any drilling is explained and approved by you first, with the replacement cylinder included in the quote."
      },
      {
        "q": "I just moved into a co-op. Can I change my own lock, and does the board get a key?",
        "a": "In most NYC co-ops the answer is yes you can change the lock, but the proprietary lease usually requires the corporation to hold a key or that your lock be openable in an emergency — check your house rules before assuming otherwise. Many boards also restrict what you can mount on the corridor-facing side of the door for uniformity, and fire-rated apartment entry doors limit what hardware can legally be installed. The common path is rekeying the existing mortise hardware and giving the managing agent the new key, which keeps you compliant while making sure the previous owner's keys are dead. We do this daily in Brooklyn Heights and can work within whatever your board's alteration rules require."
      },
      {
        "q": "I'm a tenant. Can I rekey my apartment without my landlord's permission?",
        "a": "Your lease governs this, and most NYC leases require you to provide the landlord a copy of any new key so they can access the unit in an emergency — landlords are also generally entitled to access with notice under NYC housing rules. What you cannot be forced to accept is old tenants or unknown parties holding working keys; rekeying after move-in is reasonable and standard. The clean approach: rekey the cylinder, keep the same hardware so nothing about the door changes, and hand the landlord one copy. If a lock is failing and the landlord won't act, document it — a functioning entry lock is part of the warranty of habitability."
      },
      {
        "q": "Do you cut keys while I wait, or do I have to leave them?",
        "a": "While you wait, at both offices. There's an Xhorse automatic key-cutting machine at the counter at 170 Hicks St and at 232 Leonard St, so standard residential, mortise, and most commercial keys are cut and handed back in minutes. Restricted keys — Mul-T-Lock and other patent-protected keyways — are different: those require the key's control card or proof of authorization, and duplication happens only for the verified keyholder. That restriction is the entire point of a restricted system, so no shop that takes it seriously will cut one for whoever walks in with the key."
      },
      {
        "q": "My key goes in but the lock won't turn, or turns without unlocking. Is the whole lock dead?",
        "a": "Usually not. On mortise locks this is most often a worn cam, a failed spring or hub inside the case, or a cylinder set screw that backed out and let the cylinder rotate — all repairable without replacing the visible hardware. On older brownstone doors the door itself has often sagged so the bolt binds against the strike, which is an alignment fix, not a lock fix. We open the case, diagnose the actual failure, and quote repair against replacement honestly. Original pre-war mortise hardware is frequently worth saving, both because it's better made than modern builder-grade and because matching the door prep for new hardware on a landmark door is its own project."
      },
      {
        "q": "Are you actually licensed, and why does it matter?",
        "a": "Yes — NYC DCWP locksmith license #2109597, and every technician works under it. New York City requires locksmiths to be licensed, and it matters for practical reasons: a licensed shop has a fixed business address you can walk into (we have two), accountability if something goes wrong, and no incentive to run the drill-everything pricing scam that unlicensed dispatch operations depend on. If you're comparing locksmiths, ask for the license number and an address before you ask for the price. A company that won't give you both isn't a company — it's a phone number."
      }
    ],
    "related": [
      "high-security-locks",
      "master-key-systems",
      "door-repair",
      "intercom-systems",
      "security-gates"
    ],
    "photos": [
      {
        "src": "/images/real/real-key-cutting.jpg",
        "alt": "Key being cut on the automatic key-cutting machine at the Downtown office counter"
      },
      {
        "src": "/images/real/real-fresh-cut-keys-handful2.jpg",
        "alt": "Handful of freshly cut keys ready for a customer"
      },
      {
        "src": "/images/real/real-mortise-repair.jpg",
        "alt": "Technician repairing an opened mortise lock case on a Brooklyn door"
      },
      {
        "src": "/images/real/real-key-van-workshop.jpg",
        "alt": "Inside the Downtown service van, stocked with lock hardware and key blanks"
      }
    ]
  },
  {
    "slug": "intercom-systems",
    "title": "Intercom System Installation & Repair",
    "shortTitle": "Intercom Systems",
    "category": "security",
    "emergency": true,
    "icon": "Radio",
    "metaTitle": "Intercom Installation & Repair NYC | Downtown",
    "metaDescription": "Licensed NYC intercom installers. Video, audio & smartphone intercoms for co-ops, condos & rentals. Two Brooklyn offices, 24/7 service, five boroughs.",
    "answerFirst": "Downtown Door Repair & Security installs and repairs building intercom systems across NYC — audio buzzers, video entry panels, and smartphone-based systems that need no in-apartment wiring. We service everything from a single dead apartment station to full lobby panel replacements in 100+ unit buildings, working with co-op and condo boards, property managers, and individual owners. Licensed by NYC DCWP (#2109597), open 24/7, with walk-in offices in Brooklyn Heights and Williamsburg.",
    "heroTagline": "Lobby panels, apartment stations, and smartphone entry — installed, repaired, and rewired by NYC's door and security specialists.",
    "whatItIs": [
      "An intercom system is the front line of a multi-tenant building: the lobby panel where a visitor calls up, the apartment stations where residents answer, the door release that fires the electric strike or maglock on the vestibule door, and the wiring riser that ties it all together. In NYC this is not optional equipment — the Multiple Dwelling Law requires self-locking entrance doors in most multiple dwellings, and buildings with eight or more apartments are generally required to maintain a working two-way intercom and buzzer-release system. When the system dies, tenants complain, packages disappear, and HPD violations follow. We keep these systems running in pre-war walk-ups, elevator co-ops, and new-construction condos across the five boroughs.",
      "There are three broad system types, and choosing the right one is most of the job. Wired audio intercoms are the classic buzzer: a lobby directory panel, a handset or speaker station in each apartment, and a door-release button. Wired video intercoms add a camera at the entrance and a monitor at each station, so residents see who is buzzing before they release the door. Smartphone-based (cellular or IP) intercoms replace the apartment station entirely — the lobby panel calls the resident's phone app, and the door release travels over the internet. For pre-war buildings where the original riser wiring is brittle, spliced beyond recognition, or buried behind decades of plaster, a smartphone-based panel is often the only realistic full-building upgrade, because it requires power and internet at the entrance and nothing inside the apartments.",
      "Repair work is its own discipline. A single dead apartment station usually traces to the station itself, the punch-down connections at the amplifier, or a break in that apartment's pair in the riser. A lobby panel that buzzes every apartment at once, or releases the door without being told to, usually means water intrusion at the entrance panel or a shorted release wire. We open the panel, trace the wiring, and fix the actual fault — we do not default to 'you need a whole new system' the way many installers do. When the riser really is beyond saving, we say so, and we quote the replacement honestly against a no-new-wiring smartphone option so the board can compare real numbers.",
      "Because we are a door and lock company first, we handle the part most intercom vendors subcontract out: the door hardware. An intercom is only as good as the release it drives. We install and service the electric strikes, maglocks, and door closers on the entrance itself — including the Seco-Larm and Enforcer maglocks and exit devices we stock — so the buzz actually opens the door, the door actually relocks behind the visitor, and the whole entry sequence works as one system. One contractor, one point of responsibility, from the lobby panel to the latch."
    ],
    "whenNeeded": [
      "Your apartment's buzzer or handset is dead while the rest of the building works — usually a station or riser-pair fault, not a full-system problem",
      "The lobby panel is damaged, waterlogged, vandalized, or has missing/unreadable tenant buttons",
      "The door release buzzes but the entrance door doesn't unlock — a strike, maglock, or release-wiring fault on the door itself",
      "Your co-op or condo board wants to upgrade from audio-only to video or smartphone entry",
      "A pre-war building's riser wiring is too degraded to repair and you need a no-new-wiring smartphone-based replacement",
      "HPD has issued a violation for a non-functioning intercom or self-locking entrance door",
      "New construction or gut renovation needs a full intercom rough-in coordinated with the electrician",
      "Delivery access is a problem — you want virtual keys, delivery PINs, or video call logs at the front door"
    ],
    "process": [
      {
        "title": "Site survey & wiring assessment",
        "description": "We inspect the lobby panel, a sample of apartment stations, the amplifier or head-end, and the riser condition. In older buildings this determines everything: whether the existing wiring can carry a new system or whether a smartphone-based panel that needs no riser is the smarter path. You get a written scope, not a guess."
      },
      {
        "title": "System selection & board approval package",
        "description": "We spec the system — audio, video, or smartphone-based — with model numbers, wiring plan, and door-hardware requirements. For co-ops and condos we prepare what the board and managing agent need: scope of work, insurance certificates, and scheduling that respects alteration-agreement rules and quiet hours."
      },
      {
        "title": "Installation",
        "description": "We mount and weatherproof the entrance panel, wire or configure apartment stations or resident phone apps, install or service the electric strike or maglock the system releases, and land everything at the head-end. Building entrances are never left unsecured — doors stay lockable at every stage of the work."
      },
      {
        "title": "Testing, tenant handoff & documentation",
        "description": "We test call, talk, video, and release from the panel and from a sample of stations, program the tenant directory, walk the super or manager through administration, and leave labeled wiring and written documentation so the next repair — by us or anyone — takes minutes, not hours."
      }
    ],
    "pricing": [
      {
        "item": "Single apartment station repair or replacement",
        "range": "$$ (confirm)",
        "note": "Depends on system brand and riser condition"
      },
      {
        "item": "Lobby panel repair or replacement",
        "range": "$$ (confirm)",
        "note": "Audio vs video panel; includes weatherproofing"
      },
      {
        "item": "Smartphone-based intercom (full building, no new riser wiring)",
        "range": "$$$ (confirm)",
        "note": "Scales with unit count; requires power + internet at entrance"
      },
      {
        "item": "Full wired video intercom system (per building)",
        "range": "$$$$ (confirm)",
        "note": "Driven by unit count and riser condition — survey required"
      }
    ],
    "faqs": [
      {
        "q": "Can you fix just my apartment's buzzer, or do you only do whole buildings?",
        "a": "We do single-apartment repairs constantly — it is one of our most common calls. If the rest of the building works and your station is dead, the fault is usually in your station, its riser pair, or its punch-down at the amplifier, and it is repairable without touching anyone else's unit. You may need your super or managing agent to give us access to the head-end, which is usually in the basement or a locked closet. If we open the job and find the fault is actually building-wide, we tell you before doing work you would be paying for alone."
      },
      {
        "q": "Do I need my building's or board's permission to work on the intercom?",
        "a": "For anything beyond your own apartment station, yes — the lobby panel, riser, and amplifier are common elements owned by the building, so the board or managing agent has to authorize work on them. Replacing or repairing the station inside your own apartment is typically your call in a rental or condo, though co-op alteration rules can still apply. We deal with boards and property managers every week and can provide the insurance certificates and scope-of-work documents they require. If you're not sure who owns what, send us a photo of the setup and we'll tell you where the line is."
      },
      {
        "q": "Our building is pre-war and the wiring is shot. Do we have to rewire the whole riser?",
        "a": "Usually not. Rewiring a riser in an occupied pre-war building means opening walls in every apartment and common hallway — it is disruptive and expensive, and boards rarely approve it. The modern alternative is a smartphone-based entry panel: it needs only power and an internet connection at the entrance, calls each resident's phone instead of a wall station, and releases the door over the network. Residents without smartphones can be set up with a standard phone-line call instead of the app. We quote both paths after a survey so the board compares real numbers, but in genuinely degraded pre-war risers the no-wiring option almost always wins."
      },
      {
        "q": "Is a building intercom legally required in NYC?",
        "a": "In most multiple dwellings, the entrance door must be self-closing and self-locking, and buildings with eight or more apartments are generally required to provide a working two-way intercom with buzzer door release under the Multiple Dwelling Law. A dead intercom is the kind of condition HPD writes violations for after tenant complaints. If you've received a violation, bring it to us — the fix is often a repair rather than a full replacement, and we can document the restored operation for the managing agent's records."
      },
      {
        "q": "Smartphone intercom vs. rewired system — how do I think about cost?",
        "a": "The cost logic comes down to wiring. A wired video system's price is dominated by labor: pulling cable through the riser and installing a station in every unit, which in an occupied building means scheduling access apartment by apartment. A smartphone-based system concentrates nearly all the cost at the front door — one panel, power, internet — and adds a per-building or per-unit service subscription. For small buildings with healthy wiring, wired can be cheaper over time because there's no subscription. For larger buildings or bad risers, the smartphone panel usually wins on total cost and wins massively on disruption. We'll price both against your actual building."
      },
      {
        "q": "How fast can you get here, and how long does the work take?",
        "a": "We're open 24/7 with offices in Brooklyn Heights and Williamsburg, so repair calls anywhere in the five boroughs are typically same-day or next-day. A single-station repair is usually done in one visit. A lobby panel replacement is typically a one-day job once the panel is in hand. Full-building installations depend on unit count and access coordination — smartphone-based systems often install in a day or two since no apartment entry is needed, while wired systems are scheduled across multiple days with the managing agent. Special-order panels can add lead time, which we confirm before you commit."
      }
    ],
    "related": [
      "access-control",
      "electric-strikes",
      "magnetic-locks",
      "cctv-cameras",
      "door-repair",
      "locksmith"
    ],
    "photos": [
      {
        "src": "/images/real/real-intercom-outdoor.jpg",
        "alt": "Outdoor building intercom entry panel installed at an NYC entrance"
      },
      {
        "src": "/images/real/real-intercom-button-wiring2.jpg",
        "alt": "Technician wiring the back of an intercom call button during installation"
      },
      {
        "src": "/images/real/real-intercom-glove-install.jpg",
        "alt": "Gloved technician mounting an intercom unit on a building doorway"
      },
      {
        "src": "/images/real/real-intercom-wiring-gray-door.jpg",
        "alt": "Intercom wiring being run along a gray metal door frame"
      }
    ]
  },
  {
    "slug": "access-control",
    "title": "Access Control System Installation",
    "shortTitle": "Access Control",
    "category": "security",
    "icon": "Fingerprint",
    "metaTitle": "Access Control Installation NYC | Downtown",
    "metaDescription": "Card, fob, keypad & mobile access control for NYC buildings. Rosslare readers, maglocks, strikes, code-compliant egress. Licensed, 24/7, five boroughs.",
    "answerFirst": "Downtown Door Repair & Security designs and installs access control systems for NYC buildings — fob, card, PIN, and mobile-credential entry on anything from a single storefront door to networked multi-door systems across residential and commercial properties. We stock Rosslare readers and controllers and Seco-Larm/Enforcer exit devices, and because we're a door company first, every installation includes correct locking hardware and code-compliant egress. NYC DCWP licensed (#2109597), 24/7, serving all five boroughs from two Brooklyn offices.",
    "heroTagline": "Fobs, cards, keypads, and mobile credentials — with the door hardware and egress compliance most access vendors get wrong.",
    "whatItIs": [
      "Access control replaces mechanical keys with managed credentials: a reader at the door, a controller that decides who gets in, and electrified locking hardware that does the physical work. Instead of tracking hundreds of brass keys — and re-keying the building every time one walks off with a departing tenant, employee, or contractor — you issue fobs, cards, PIN codes, or mobile credentials that can be revoked in seconds. Every entry is logged with a name and a timestamp, which changes how property managers handle disputes, deliveries, staff turnover, and after-hours access.",
      "System architecture matters more than the reader on the wall. A standalone unit — like a self-contained keypad or a single Rosslare reader-controller — runs one door with no network and no software, and is often the right answer for a storefront back door, a package room, or a basement storage cage. A networked system puts a controller panel in a closet running two, four, or eight doors, with door count scaling by adding panels; credentials, schedules, and logs are managed from software so one revoked fob dies at every door simultaneously. On the wiring side, readers talk to controllers over Wiegand — the decades-old standard most NYC buildings still run — or OSDP, the newer supervised, encrypted protocol we recommend for new installations because it resists reader-spoofing and reports tampering. We install both and we retrofit OSDP onto existing systems where the hardware supports it.",
      "The locking hardware is where door expertise pays. Every controlled door needs an electrified lock, and the choice between a magnetic lock and an electric strike is a real engineering decision, not a coin flip. A maglock is fail-safe: cut the power and the door opens — which is exactly what fire egress requires on many doors, but also means a dead power supply is an unlocked building unless it's specified with battery backup. An electric strike can be fail-secure: power fails, the door stays locked, and free mechanical egress remains from the inside — often the better choice for perimeter doors. NYC Building Code and FDNY requirements govern this: maglocked egress doors need request-to-exit hardware, and electromagnetic locking arrangements must release on fire-alarm activation and power loss. We stock Seco-Larm and Enforcer maglocks and exit devices and install request-to-exit buttons, motion-sensor REX, and fire-alarm tie-ins so the door is both secure and legal.",
      "We build these systems for the full range of NYC properties: co-op and condo lobbies, service entrances, and amenity spaces; office suites and shared floors; warehouses and commercial storefronts; gyms, medical offices, and houses of worship. For boards and property managers we handle the whole workflow — survey, proposal with model numbers, insurance certificates, phased installation that never leaves a door unsecured, and admin training so your staff can add and revoke credentials without calling us. And because keys never fully disappear, we integrate access control with the mechanical side: high-security key overrides, master key systems for staff, and panic hardware where egress demands it."
    ],
    "whenNeeded": [
      "Key control has collapsed — too many mechanical keys in circulation and no record of who holds what",
      "Staff or tenant turnover means constant re-keying; you want credentials you can revoke in seconds instead",
      "Your board or property manager wants an entry log — who came in, through which door, and when",
      "A storefront, office, or package room needs a keypad or fob reader on one or two doors without full network infrastructure",
      "You're scaling from one controlled door to many and need a networked panel system with central management",
      "An existing maglock installation has no request-to-exit or fire-alarm release — a code problem that needs correcting",
      "You want mobile credentials or PIN codes for cleaners, dog walkers, and contractors instead of loose keys",
      "A vacated commercial space needs its credentials wiped and readers reprogrammed before a new tenant moves in"
    ],
    "process": [
      {
        "title": "Survey & door schedule",
        "description": "We walk every door in scope and document what each one actually is: material, frame condition, swing, existing hardware, egress role, and power availability. This produces a door schedule — the honest basis for choosing maglock vs. electric strike, standalone vs. networked, and Wiegand vs. OSDP per opening."
      },
      {
        "title": "System design & proposal",
        "description": "You get a written design with specific hardware — Rosslare readers and controllers, Seco-Larm/Enforcer locking and exit devices where they fit — credential types, panel locations, power supplies with battery backup, and the egress devices each door requires for code compliance. Boards get the documentation package their approval process needs."
      },
      {
        "title": "Installation & integration",
        "description": "We mount readers and controllers, install and align the electrified locking hardware, run and dress the wiring, wire request-to-exit devices and fire-alarm release where required, and bring the system online. Doors are secured at the end of every workday — no building is left open mid-project."
      },
      {
        "title": "Programming, testing & handoff",
        "description": "We enroll initial credentials, build access schedules and groups, test every door for read, release, relock, REX, and fail-safe/fail-secure behavior, then train your admin on adding and revoking users. You leave with labeled panels, documentation, and a system your own staff can run day to day."
      }
    ],
    "pricing": [
      {
        "item": "Standalone keypad or reader (single door)",
        "range": "$$ (confirm)",
        "note": "Self-contained; no network or software required"
      },
      {
        "item": "Networked access control (per door, incl. reader + electrified hardware)",
        "range": "$$$ (confirm)",
        "note": "Panel-based; per-door cost drops as door count rises"
      },
      {
        "item": "Maglock or electric strike retrofit with code-compliant egress",
        "range": "$$ (confirm)",
        "note": "Includes REX device; fire-alarm tie-in scoped per building"
      },
      {
        "item": "Credential reprogramming / turnover lockout service",
        "range": "$ (confirm)",
        "note": "Wipe departed users, re-enroll, audit the log"
      }
    ],
    "faqs": [
      {
        "q": "How many doors can one access control system run?",
        "a": "A standalone reader or keypad runs exactly one door — that's its job, and for a single back door it's the most economical answer. Networked systems are built from controller panels that typically handle two, four, or eight doors each, and you scale by adding panels on the same software, so there is no practical ceiling: the same architecture runs a 3-door walk-up and a portfolio of buildings with hundreds of openings. The real planning question is where panels and power supplies live and how home-run wiring reaches each door, which is exactly what our survey and door schedule resolve before you commit to anything."
      },
      {
        "q": "Maglock or electric strike — which do I actually need?",
        "a": "It depends on the door's egress role and construction, not preference. A maglock is fail-safe — power cut, door open — which suits doors where code demands free egress on alarm or power loss, but it requires request-to-exit hardware and fire-alarm release to be legal, and battery backup if you don't want a blackout to unlock the building. An electric strike can be fail-secure — power cut, door stays locked, while the inside lever or panic bar still lets people out mechanically — which is usually right for perimeter and storefront doors. Glass herculite doors, hollow-metal doors, and aluminum storefront frames each push the choice differently. We spec it per door on the schedule and we stock both, including Seco-Larm and Enforcer maglocks."
      },
      {
        "q": "Is it legal to put a maglock on my building's exit door?",
        "a": "Only when it's installed as a compliant electromagnetic locking arrangement. NYC Building Code and FDNY requirements mean a maglocked egress door generally must unlock on fire-alarm activation and on power failure, and must have a request-to-exit provision — a sensor or clearly marked push-to-exit button — so nobody is ever trapped inside. A bare maglock wired to nothing but a reader is the single most common code violation we find on existing NYC installations, and it's a life-safety problem, not a paperwork problem. If you have one, we can retrofit the REX device and alarm tie-in without replacing the whole system."
      },
      {
        "q": "Fobs, cards, PIN codes, or phone credentials — what should we issue?",
        "a": "Most buildings mix them. Fobs and cards are cheap, fast at the reader, and easy for residents and staff — but they can be shared or cloned, which is why we push encrypted credential formats and OSDP readers on new work rather than legacy 125kHz proximity. PIN codes cost nothing to issue and suit vendors and cleaners, but codes spread, so they belong on schedules that expire. Mobile credentials live in the user's phone, are hard to clone and easy to revoke remotely, and are increasingly what boards ask for — the tradeoff is dependence on the platform and on residents' phones. A common pattern we install: fobs for residents, scheduled PINs for vendors, mobile for management."
      },
      {
        "q": "Can you take over or expand a system another company installed?",
        "a": "Usually, yes. Wiegand wiring is a common standard, so existing readers and door wiring can often be reused even when we swap the controller, and Rosslare controllers in particular are friendly to takeover work. The genuine obstacle is proprietary cloud systems where the original vendor owns the software account — there we can either work with the platform or migrate the doors onto hardware you own. Bring us the panel photos and whatever documentation exists; we'll tell you honestly whether it's a takeover, an expansion, or a case where replacement is cheaper than untangling."
      },
      {
        "q": "How long does installation take, and what are lead times?",
        "a": "A standalone keypad or single-door reader with an electric strike is typically a same-day installation. A networked system across several doors usually runs a few days: wiring first, hardware second, programming and testing last, always leaving doors secured overnight. We stock Rosslare readers and controllers and Seco-Larm/Enforcer locking hardware at our Brooklyn offices, so common configurations are not waiting on freight; specialty items — specific finishes, herculite-door hardware, large panel counts — can add lead time we confirm at proposal stage. For boards, the approval process is usually the long pole, not the installation."
      }
    ],
    "related": [
      "intercom-systems",
      "magnetic-locks",
      "electric-strikes",
      "master-key-systems",
      "high-security-locks",
      "panic-hardware",
      "cctv-cameras"
    ],
    "photos": [
      {
        "src": "/images/real/real-access-panel-install.jpg",
        "alt": "Access control panel being installed and wired on a building wall"
      },
      {
        "src": "/images/real/real-reader-install-green.jpg",
        "alt": "Technician installing a proximity card reader beside a green door"
      },
      {
        "src": "/images/real/real-access-board-wiring.jpg",
        "alt": "Close-up of terminal wiring on an access control circuit board"
      },
      {
        "src": "/images/real/final_enforcer-exit-button.jpg",
        "alt": "Enforcer push-to-exit button mounted next to a controlled door"
      }
    ]
  },
  {
    "slug": "magnetic-locks",
    "title": "Magnetic Lock (Maglock) Installation & Repair",
    "shortTitle": "Magnetic Locks",
    "category": "security",
    "emergency": true,
    "icon": "Magnet",
    "metaTitle": "Maglock Installation NYC | Downtown Door & Security",
    "metaDescription": "Licensed maglock installation and repair for NYC commercial buildings. 600lb and 1200lb magnetic locks, REX sensors, fire alarm tie-in, code-compliant egress. 24/7.",
    "answerFirst": "A magnetic lock (maglock) is an electromagnet mounted to the door frame that holds a steel armature plate on the door with 600 to 1200 pounds of force whenever power is applied. Downtown Door Repair & Security installs, repairs, and brings maglocks up to NYC code across the five boroughs — including request-to-exit sensors, battery-backed power supplies, and the fire alarm tie-in that NYC law requires so the door releases automatically when the alarm sounds. Walk-in offices at 170 Hicks St, Brooklyn Heights and 232 Leonard St, Williamsburg. NYC DCWP license #2109597, open 24/7.",
    "heroTagline": "1200 pounds of holding force, wired to release the instant your fire alarm says so.",
    "whatItIs": [
      "A magnetic lock is the simplest piece of electrified door hardware there is: an electromagnet bolted to the header of the frame, and a flat steel armature plate bolted to the door. Energize the magnet and the plate can't pull away — a standard single maglock holds around 600 pounds of direct pull, and the 1200lb units we install on main entrances and roof doors will outlast the door itself in a pull test. There's no latch, no bolt, no keeper to align, which is exactly why maglocks are the go-to on doors where a mechanical lock is a headache: glass storefront doors, narrow-stile aluminum doors, gates, and doors that have sagged so badly nothing else lines up anymore.",
      "The tradeoff is that a maglock is always fail-safe: cut the power and the door is unlocked, period. That is not a flaw — it's the reason maglocks are permitted on egress doors at all. But it means the install is really an electrical system, not just a lock. Every maglock we hang gets a proper power supply, sized for the coil draw, with battery backup so a blip in building power doesn't leave your door swinging open. What the battery backup does not do — by design — is hold the door locked during a fire alarm. NYC code requires that any maglock on a door in the path of egress drop out the moment the fire alarm activates, so we land a relay on your fire alarm panel (or coordinate with your alarm company to do it) as part of the job, not as an afterthought.",
      "Free egress is the other half of a legal maglock. Someone walking up to the door from inside must be able to leave without knowing anything about the system. The standard setup we install is layered: a request-to-exit (REX) motion sensor above the door that drops the magnet as you approach, a labeled push-to-exit button as the manual release, and where the client wants a cleaner look, a Seco-Larm Enforcer wave-to-open sensor so nobody touches anything at all. We stock the Enforcer wave-to-open units and piezoelectric exit plates at our Brooklyn offices — piezo plates have no moving parts to wear out, which matters on a lobby door that cycles hundreds of times a day. On the entry side, the maglock releases from whatever credential system you run: keypad, card reader, fob, intercom buzzer, or a full access control panel.",
      "Where maglocks earn their keep in NYC is on doors that fight every other kind of hardware. Aluminum storefront doors with a half-inch of play in the frame, steel doors on roof bulkheads, courtyard gates, interior vestibule doors between the sidewalk and your lobby — the magnet doesn't care about alignment, it just needs flat contact between coil and plate. We also install magnetic door holders (which we stock) for the opposite job: holding a fire door open all day and releasing it to swing shut on alarm. Same physics, opposite duty, and both live or die on how cleanly the low-voltage wiring is run, which is most of what separates a maglock that works for a decade from one that starts dropping doors randomly after the first winter."
    ],
    "whenNeeded": [
      "Your building's entry door is glass or narrow-stile aluminum and mechanical locks keep failing or won't fit",
      "You're adding buzzer, keypad, fob, or card-reader entry and need electrified locking to go with it",
      "An existing maglock stays locked during fire alarm testing — that's a code violation that needs a fire alarm tie-in now",
      "The door releases randomly or 'clunks' open — usually a failing power supply, dead backup battery, or corroded armature contact",
      "FDNY or a DOB inspection flagged your egress door hardware",
      "You need a roof door, basement door, or courtyard gate secured without giving out keys",
      "Tenants prop the door because the current lock is a hassle — free-egress maglock setups remove the excuse",
      "You want fire doors held open during business hours but self-closing on alarm (magnetic door holders)"
    ],
    "process": [
      {
        "title": "Site survey & code check",
        "description": "We look at the door, frame, and header, confirm which direction it swings, measure the stile, and — most importantly — determine whether the door is in the path of egress and whether the building has a fire alarm panel to tie into. That decides the sensor package and release wiring before any hardware is chosen."
      },
      {
        "title": "Hardware & power design",
        "description": "We spec the magnet (600lb single, 1200lb, or double-door pairs), brackets for the frame type (Z-brackets for outswing, angle brackets or glass-door kits as needed), a power supply sized for total coil draw with battery backup, and the exit devices: REX motion, push-to-exit button, or Enforcer wave-to-open sensor from our stock."
      },
      {
        "title": "Installation & wiring",
        "description": "Magnet and armature plate mounted and shimmed for full-face contact, low-voltage runs fished and concealed where possible, power supply mounted in a serviceable location, exit sensors wired to break coil power directly (not just through the controller), and the fire alarm relay landed so alarm activation cuts the lock."
      },
      {
        "title": "Testing & handoff",
        "description": "We pull-test the bond, verify free egress from the inside via every release device, cut power to confirm fail-safe behavior, trigger the fire alarm relay to confirm the door drops, and walk your super or property manager through resets, battery replacement intervals, and what to check before calling us."
      }
    ],
    "pricing": [
      {
        "item": "Single-door maglock installed (600lb, REX + exit button, power supply)",
        "range": "$$ (confirm)",
        "note": "Most common storefront and lobby setup"
      },
      {
        "item": "1200lb maglock or double-door pair, installed",
        "range": "$$ (confirm)",
        "note": "Main entrances, roof doors, high-traffic doors"
      },
      {
        "item": "Fire alarm tie-in / bringing an existing maglock up to code",
        "range": "$$ (confirm)",
        "note": "Coordination with your alarm company included"
      },
      {
        "item": "Maglock service call (random release, dead magnet, sensor failure)",
        "range": "$$ (confirm)",
        "note": "24/7 across the five boroughs"
      }
    ],
    "faqs": [
      {
        "q": "Is a maglock even legal on my exit door in NYC?",
        "a": "Yes — with conditions, and the conditions are the whole job. Because a maglock has no mechanical release, NYC code allows it on egress doors only when free egress is guaranteed: a sensor or exit device on the inside that releases the lock, and a tie-in that drops the magnet automatically when the fire alarm activates. A maglock wired to a keypad with no REX sensor and no fire alarm release is the kind of install that fails an FDNY inspection and creates real liability. We install to the code-compliant configuration by default and we retrofit plenty of maglocks that someone else installed bare."
      },
      {
        "q": "What happens in a power outage?",
        "a": "The magnet releases and the door is unlocked — every maglock is fail-safe, that's inherent to the technology. That's why we install battery-backed power supplies on every job: normal utility blips and brief outages won't unlock your building. The batteries carry the lock for hours, not days, so for a door that must stay secured through extended outages we'll either add a mechanical deadlatch or storefront lock as a nighttime backstop, or recommend fail-secure hardware like an electric strike instead. What we will never do is defeat the fire-alarm release to keep a door locked — that part stays fail-safe no matter what."
      },
      {
        "q": "Maglock or electric strike — which one should I use?",
        "a": "It depends on the door and on what you need during a power failure. A maglock is fail-safe (power loss = unlocked), works on almost any door regardless of alignment, and is the practical choice for glass and aluminum storefront doors. An electric strike works with your existing latch, can be fail-secure (power loss = still locked), and leaves the door usable with a key like a normal door. Rough rule for NYC buildings: strikes on interior doors and doors with good latching hardware, maglocks on storefronts, gates, and problem doors. We install both daily and will tell you on-site which one your specific door wants."
      },
      {
        "q": "Can you tie the maglock into my existing fire alarm?",
        "a": "Yes — that tie-in is a standard part of our maglock installs, not an extra. If your building has a fire alarm panel, we land a relay so alarm activation cuts power to the magnet instantly, which is what NYC code requires for maglocks on egress doors. Where the panel is maintained by an alarm company under contract, we coordinate with them so the relay is added cleanly and their monitoring isn't disturbed. If the building has no alarm panel at all, we'll tell you honestly what your code-compliant options are for that door rather than installing something that can't pass inspection."
      },
      {
        "q": "How long does a maglock installation take?",
        "a": "A straightforward single door — magnet, brackets, REX sensor, exit button, power supply, and clean wire runs — is typically done in one visit. Add a fire alarm tie-in, a card reader or intercom release, or a double-door pair and it can extend, mostly on the wiring paths: fishing low-voltage through a finished lobby ceiling takes longer than running it through a back-of-house wall. We give you a realistic window after the site survey instead of quoting a fantasy number over the phone, and because we're open 24/7 we can schedule installs outside your business hours so the entrance is never blocked during the day."
      },
      {
        "q": "My maglock keeps releasing on its own. What's wrong with it?",
        "a": "The usual suspects, roughly in order: a power supply whose backup battery has died and can no longer smooth out voltage dips; a REX motion sensor aimed too wide so lobby foot traffic or even HVAC-blown signage trips it; corrosion or grime on the armature plate breaking full-face contact and gutting the holding force; or a loose low-voltage splice that opens intermittently. All of these are diagnosable in one service visit with a meter and a pull test. What you shouldn't do is let a flaky maglock ride — a door that's randomly unlocked is worse than no lock, because everyone believes it's secured."
      }
    ],
    "related": [
      "access-control",
      "electric-strikes",
      "intercom-systems",
      "panic-hardware",
      "door-repair"
    ],
    "photos": [
      {
        "src": "/images/real/real-access-button-wired.jpg",
        "alt": "Wired access control exit button installed beside a commercial door during a maglock system install"
      },
      {
        "src": "/images/real/final_enforcer-exit-button.jpg",
        "alt": "Seco-Larm Enforcer exit release button mounted and wired at a Brooklyn commercial entry"
      },
      {
        "src": "/images/real/real-sensor-wire-install.jpg",
        "alt": "Technician running low-voltage sensor wiring for an electrified door lock system"
      },
      {
        "src": "/images/real/real-access-wiring-storefront.jpg",
        "alt": "Access control wiring being installed at a New York storefront entrance"
      }
    ]
  },
  {
    "slug": "electric-strikes",
    "title": "Electric Strike Installation & Repair",
    "shortTitle": "Electric Strikes",
    "category": "security",
    "emergency": true,
    "icon": "Zap",
    "metaTitle": "Electric Strike Installation NYC | Downtown Door",
    "metaDescription": "Electric strike installation for NYC commercial doors — hollow metal, aluminum storefront, and wood frames. Fail-secure or fail-safe, buzzer and access control ready. 24/7.",
    "answerFirst": "An electric strike replaces the fixed strike plate in your door frame with a motorized keeper that pivots open on an electric signal, letting the door open without retracting the latch — the hardware behind every NYC 'buzz-in' door. Downtown Door Repair & Security cuts in and wires electric strikes on hollow metal, aluminum storefront, and wood frames across the five boroughs, matched to your latch, your frame, and the fail-safe or fail-secure behavior your door actually needs. Walk-in offices in Brooklyn Heights (170 Hicks St) and Williamsburg (232 Leonard St). NYC DCWP license #2109597, open 24/7.",
    "heroTagline": "The buzz-in door, done right: cut clean into the frame, aligned to the latch, wired to whatever lets people in.",
    "whatItIs": [
      "An electric strike is the part of a buzz-in door that people never see working. Your door keeps its normal lockset or panic device with its normal latch — but instead of that latch seating into a fixed plate, it seats into a strike whose keeper is held by a small solenoid or motor. Send it voltage (from an intercom buzzer, keypad, card reader, or access control panel) and the keeper swings free, so the door pushes open with the latch still extended. Release the door and the latch snaps back into a locked keeper. Nothing about how the door works with a key changes, which is the electric strike's core advantage over a maglock: the door remains a normal door.",
      "The decision that matters most is fail-secure versus fail-safe. A fail-secure strike (the default for most perimeter doors) stays locked when power is lost — you can still exit freely, because egress comes from the latch side and turning the lever or pushing the panic bar always works, and you can still enter with a key. A fail-safe strike unlocks when power drops, which is required in specific cases like stairwell doors that must allow re-entry during an alarm, and for certain fire-rated openings the fail-secure/fail-safe choice interacts with the door's rating — a fire-rated opening needs a fire-rated, fail-secure strike so the door stays positively latched during a fire. We sort this out per door, because getting it backwards either locks people into a stairwell or leaves your back door unlocked every time the power flickers.",
      "The install itself is frame surgery, and the frame material dictates the whole approach. Hollow metal frames — the standard in NYC commercial corridors — get the strike pocket cut with precision: enlarge the existing strike prep, deal with the grout or mortar that frames are often filled with, and land the strike body so the keeper sits exactly where the latch lands. Aluminum storefront frames are a different animal: narrow, thin-walled, often with a shallow backset and a Adams Rite-style deadlatch, so they take specific narrow-stile strikes and careful cutting so you don't gut the frame's strength. Wood frames are the most forgiving to cut but the least forgiving over time, since seasonal movement changes keeper alignment. In every case the wire path has to be planned before the first cut — fishing 12–24V down a grouted hollow metal frame is half the job.",
      "Keeper alignment is where cheap installs die. The latch has to land centered on the keeper with the door fully closed and the weatherstripping compressed; a strike set a few millimeters off leaves the door 'buzzing but not opening' because the latch is binding against the keeper under door pressure — the single most common electric strike complaint in the city, especially on storefront doors where the closer slams the door and the frame has racked over the years. We cut for the real, as-hanging position of your door, not the spec sheet's ideal, and we test under closer pressure. The result is a buzz-in door that opens with a fingertip push every time, works with a key when the intercom dies, and holds the latch strength your insurance company assumes you have."
    ],
    "whenNeeded": [
      "You're installing or upgrading an intercom and need the door to actually buzz open",
      "Adding keypad, fob, or card-reader entry to an office suite, lobby, or back-of-house door",
      "Your current strike buzzes but the door won't open — keeper misalignment or a burned-out solenoid",
      "The building's buzz-in system is dead and tenants are keying everyone in manually",
      "You want the door to stay LOCKED during a power outage (fail-secure) instead of maglock behavior",
      "A storefront aluminum door needs electrified entry but a maglock isn't wanted on the glass",
      "Fire-rated corridor or stairwell doors need electrified access that keeps positive latching",
      "Landlord/tenant turnover: rekeying plus electrified entry on the same door in one visit"
    ],
    "process": [
      {
        "title": "Door & latch assessment",
        "description": "We identify your latch hardware (cylindrical lockset, mortise lock, rim or Adams Rite-style storefront deadlatch, panic device), measure the frame material and depth, check how the door actually hangs and closes today, and confirm fire rating and egress requirements for the opening."
      },
      {
        "title": "Strike selection & fail mode",
        "description": "We match a strike to the latch and frame — heavy-duty hollow metal strikes for corridors, narrow-stile strikes for aluminum storefronts — and lock in fail-secure or fail-safe behavior with you based on what the door must do when power is lost, plus voltage matched to your intercom or access panel."
      },
      {
        "title": "Cutting, mounting & wiring",
        "description": "Frame cut cleanly for the strike body (grinding out grout in filled hollow metal frames where needed), keeper aligned to the latch under real closing pressure, low-voltage run fished to the release source — intercom amplifier, keypad, reader controller, or access panel — with concealed routing wherever the building allows."
      },
      {
        "title": "Live testing & handoff",
        "description": "We cycle the door dozens of times under closer pressure, test release from every credential and the buzzer, verify key override and free egress, confirm fail mode by cutting power, and leave your manager knowing exactly which box to check before calling anyone if the buzz-in ever stops working."
      }
    ],
    "pricing": [
      {
        "item": "Electric strike installed on hollow metal frame (fail-secure, wired to existing intercom)",
        "range": "$$ (confirm)",
        "note": "The standard NYC buzz-in door"
      },
      {
        "item": "Narrow-stile strike on aluminum storefront door",
        "range": "$$ (confirm)",
        "note": "Includes matching to Adams Rite-style deadlatch"
      },
      {
        "item": "Strike + keypad or reader package (strike, release device, power supply)",
        "range": "$$ (confirm)"
      },
      {
        "item": "Strike service call (buzzes but won't open, dead solenoid, alignment)",
        "range": "$$ (confirm)",
        "note": "24/7 across the five boroughs"
      }
    ],
    "faqs": [
      {
        "q": "Electric strike or maglock — which one is right for my door?",
        "a": "Start with one question: when the power goes out, do you need the door locked or unlocked? An electric strike can be fail-secure — power fails, door stays locked, key still works, exit is still free from the inside. A maglock is always fail-safe and unlocks on power loss. Strikes also keep the door working like a normal door, which building staff and tenants appreciate. Maglocks win on doors where a latch can't do its job: glass doors, badly sagged doors, gates. For a typical office suite, corridor, or back door with decent latching hardware, we usually recommend the strike; for storefront glass and problem doors, the maglock. We'll confirm on-site in minutes."
      },
      {
        "q": "What happens to a strike door during a power outage?",
        "a": "Whatever you chose on install day — that's the point. A fail-secure strike keeps the keeper locked with no power: the buzzer won't release the door, but keys work normally and people inside can always exit by turning the lever or pushing the bar, because egress never depends on the strike. A fail-safe strike releases when power drops, and is used where code demands it, like stairwell re-entry doors. If you don't know which type is on your door right now, that's worth a service visit — plenty of NYC doors have the wrong fail mode installed, and nobody finds out until an outage or an inspection."
      },
      {
        "q": "Can you cut a strike into my aluminum storefront door frame?",
        "a": "Yes — it's one of the most common installs we do, and it's a specialty for a reason. Storefront framing is narrow-stile, thin-walled aluminum, usually running an Adams Rite-style deadlatch with a shallow backset, so it takes a strike built for that geometry and a careful cut that doesn't compromise the frame. Alignment matters even more here because storefront doors rack and sag with weather and slamming closers. We cut for the door's real closed position, wire down the frame cleanly, and the result is a glass storefront that buzzes open reliably without a magnet hanging over the header. If the frame is too far gone, we'll say so and give you the honest alternatives."
      },
      {
        "q": "My door buzzes but won't open. Do I need a whole new system?",
        "a": "Almost never. That symptom is usually one of three things: the latch is binding against the keeper because the door or frame has shifted since install (most common — the fix is realignment, not replacement); the strike's solenoid has weakened and can't overcome door pressure; or the door closer is slamming so hard the latch preloads the keeper, which a fingertip pull while buzzing temporarily 'fixes' — a classic sign. All three are same-visit repairs. The intercom amplifier's release relay can also be the culprit, which we can isolate in minutes by testing the strike directly. Diagnosis first; we don't sell you a new system to fix an alignment problem."
      },
      {
        "q": "How long does an electric strike installation take?",
        "a": "A single door with sane wire access — strike cut in, wired to an existing intercom or keypad, tested under load — is typically a same-day, single-visit job. Grout-filled hollow metal frames add grinding time, and long or awkward wire runs (through finished ceilings, across a lobby) add more than the cutting ever does. A full package with a new keypad or reader and power supply is still usually one visit. We're 24/7, so for retail and restaurants we routinely do these installs before opening or after close so your entrance never sits torn open during business hours."
      },
      {
        "q": "Will an electric strike work with my panic bar?",
        "a": "Yes, when it's matched correctly. A rim-type panic device takes a surface-mounted rim strike made for exit devices, and mortise-lock exit hardware pairs with a strike matched to the mortise latch. The critical detail is that the panic side never changes: pushing the bar always retracts the latch and opens the door regardless of what the strike is doing, so egress stays purely mechanical, exactly as FDNY expects. The strike only controls entry from the outside. One caveat — vertical-rod exit devices latch at the top and bottom of the door rather than into an edge strike, so those doors get electrified differently; we'll spec the right approach when we see the hardware."
      }
    ],
    "related": [
      "intercom-systems",
      "access-control",
      "magnetic-locks",
      "locksmith",
      "door-repair"
    ],
    "photos": [
      {
        "src": "/images/real/real-electric-strike.jpg",
        "alt": "Electric strike installed in a commercial door frame, keeper visible"
      },
      {
        "src": "/images/real/real-electric-strike-install-2.jpg",
        "alt": "Technician fitting an electric strike into a cut door frame during installation"
      },
      {
        "src": "/images/real/real-strike-plate-drill.jpg",
        "alt": "Drilling the frame to cut in a strike plate on a commercial door"
      },
      {
        "src": "/images/real/final_access-strike-install.jpg",
        "alt": "Completed access control strike installation wired at the door frame"
      }
    ]
  },
  {
    "slug": "cctv-cameras",
    "title": "CCTV & Security Camera Installation",
    "shortTitle": "CCTV Cameras",
    "category": "security",
    "icon": "Camera",
    "metaTitle": "CCTV Camera Installation NYC | Downtown",
    "metaDescription": "Professional security camera installation in NYC. PoE IP cameras, NVR systems, remote viewing for co-ops, condos & businesses. Licensed, 24/7, five boroughs.",
    "answerFirst": "Downtown Door Repair & Security installs CCTV and IP security camera systems for NYC buildings and businesses — PoE cameras wired to an on-site NVR, with remote viewing on your phone and footage retention sized to your building's needs. We handle lobbies, entrances, hallways, basements, package rooms, storefronts, and rooftops, mounting on brick, masonry, and metal, and we coordinate with co-op/condo boards and property managers on camera placement and privacy. NYC DCWP licensed (#2109597), 24/7, all five boroughs.",
    "heroTagline": "PoE cameras, on-site recording, phone viewing — placed where incidents actually happen, installed to survive NYC weather and NYC tenants.",
    "whatItIs": [
      "A modern camera system is an IP network: PoE (Power over Ethernet) cameras that receive both power and data over a single Cat6 cable, home-run to an NVR (network video recorder) that stores footage on hard drives sized for your retention window. One cable per camera means cleaner installs, easier troubleshooting, and no separate power supplies rotting in a ceiling somewhere. The NVR sits in a locked closet or basement room, records continuously or on motion, and serves live and recorded video to authorized phones and desktops — the super checks the package room from his apartment, the managing agent pulls an incident clip from their office, the owner watches the register from home.",
      "Placement is the actual skill. In a residential building, the shots that matter are the front entrance (a face-height view of everyone who enters — the shot police actually ask for), the vestibule and lobby, the package area, the basement and service entrance, elevator landings, the roof door, and the rear yard or alley. In a commercial space it's entrances, the register or reception, stock and receiving, and the sidewalk approach. We choose camera types per position: turret and dome cameras for interior ceilings — domes where tenants or intruders might grab at the housing — bullet or turret cameras on exterior brick, wide-angle for tight vestibules, and higher-resolution units where you need to read a face or a plate at distance. Every exterior unit is weather-rated, sealed at the penetration, and mounted into masonry properly, because a camera that fills with water in February is a camera you bought twice.",
      "Retention and recording strategy get decided up front, not discovered later. Storage is the product of camera count, resolution, frame rate, and days retained; motion-based recording stretches the same drives much further than continuous. Many boards and insurers want footage held for roughly 30 days; high-turnover doors or incident-prone properties sometimes justify more. We size the NVR's drives to hit your number with headroom, and we set the system to overwrite oldest-first so it never silently stops recording — the classic failure we find in systems other companies installed and nobody ever checked. We also find plenty of dead systems: cameras up, NVR unplugged for two years. Part of every handoff is showing your staff how to verify, in thirty seconds, that recording is actually happening.",
      "Cameras work best as one layer of a system, and that's the reason to hire a door-and-security company instead of a camera-only vendor. The entrance camera should cover the door the intercom releases; the package room camera should pair with the access-controlled door that logs who badged in; footage plus an access log turns 'someone got in' into a name and a timestamp. We install all three layers — cameras, access control, intercoms — and the door hardware under them, so coverage, entry logs, and physical locking are designed together. For boards and property managers we handle placement review, privacy questions from residents, insurance documentation, and service on systems we didn't originally install."
    ],
    "whenNeeded": [
      "Package theft in the lobby or mailroom and no footage to identify who took what",
      "An incident happened — break-in, vandalism, a dispute — and the existing system turned out to be dead or overwritten",
      "Your co-op or condo board wants building-wide coverage with defined retention for insurance and liability",
      "A storefront or office needs entrance, register, and stock-room coverage with remote viewing after hours",
      "Existing analog cameras are blurry and useless for identification — time to migrate to IP/PoE resolution",
      "Illegal dumping, loitering, or graffiti at a rear yard, alley, or building side that needs documented evidence",
      "Roof door and basement coverage after unauthorized access or an HPD/insurance walkthrough flagged blind spots",
      "You manage multiple properties and want every site viewable from one phone with per-building user permissions"
    ],
    "process": [
      {
        "title": "Coverage survey",
        "description": "We walk the property and map what actually needs to be seen: entries, approaches, choke points, package areas, blind spots, and prior incident locations. You get a camera-by-camera placement plan with fields of view, mounting surfaces, and cable paths — not a generic 8-camera kit quote."
      },
      {
        "title": "System design & retention sizing",
        "description": "We spec camera models per position, the NVR and switch, and hard-drive capacity calculated from your camera count, resolution, and required retention days. Boards get placement drawings and a privacy-conscious plan — cameras on common areas and entrances, never facing into apartment interiors."
      },
      {
        "title": "Installation & cabling",
        "description": "We run Cat6 home-runs through risers, drop ceilings, and exterior conduit as the building demands, mount and seal cameras into brick, masonry, or metal, and rack the NVR in a locked location. Penetrations are sealed, cable is dressed and labeled, and exterior work is weather-rated for NYC winters."
      },
      {
        "title": "Configuration & handoff",
        "description": "We aim and focus every camera on its intended shot, set motion zones and recording schedules, verify retention math against the live system, and set up phone and desktop viewing with per-user permissions. Your staff gets trained on exporting incident clips and on the 30-second check that confirms recording is healthy."
      }
    ],
    "pricing": [
      {
        "item": "Camera installation (per camera, PoE, wired to NVR)",
        "range": "$$ (confirm)",
        "note": "Varies with cable run length and mounting surface"
      },
      {
        "item": "NVR + storage (system head-end)",
        "range": "$$$ (confirm)",
        "note": "Sized by camera count and retention days"
      },
      {
        "item": "Analog-to-IP system upgrade",
        "range": "$$$ (confirm)",
        "note": "Existing cable sometimes reusable — survey determines"
      },
      {
        "item": "Service call / repair on existing system (any installer)",
        "range": "$ (confirm)",
        "note": "Dead cameras, failed drives, remote-viewing setup"
      }
    ],
    "faqs": [
      {
        "q": "Is it legal to install security cameras in my NYC building?",
        "a": "Yes, in common areas — lobbies, hallways, entrances, elevators, basements, package rooms, and building exteriors are legitimate camera locations, and NYC buildings use them everywhere. The lines you cannot cross: no cameras in places with a reasonable expectation of privacy such as bathrooms or locker rooms, and no cameras aimed into apartment interiors or positioned to see through a neighbor's windows. Audio recording is a separate and stricter legal question than video, so we install video-only in common areas unless you've gotten specific legal guidance. For co-ops and condos, camera placement in common elements is a board decision, and we provide placement drawings that make that approval straightforward."
      },
      {
        "q": "How long is footage kept, and who decides?",
        "a": "You decide, and hardware is sized to match. Retention is a function of hard-drive capacity against camera count, resolution, and recording mode — motion-triggered recording can multiply the days the same drives hold. Around 30 days is the common target for residential boards and what many insurers expect; some properties choose 60 or 90 for problem locations. The critical detail is that the system overwrites oldest footage automatically and never just stops recording when full — a misconfiguration we regularly find in inherited systems. If an incident happens, export the clip promptly; once the retention window passes, it's gone."
      },
      {
        "q": "Can I watch my cameras from my phone?",
        "a": "Yes — remote viewing is standard on every system we install. The NVR connects to your building's internet, and authorized users get live view and playback on iOS, Android, and desktop, with per-user permissions so the super, the board president, and the managing agent can each see what they should and nothing more. We set this up securely: strong credentials, no default passwords, and no cameras exposed directly to the open internet — the misconfiguration behind most 'hacked camera' stories. If the building has no internet service at the NVR location, footage still records locally and we can discuss options for connectivity."
      },
      {
        "q": "We have an old blurry camera system. Replace everything or upgrade it?",
        "a": "Survey first — it's often a partial answer. Old analog systems record at resolutions where a face at the front door is an unidentifiable smudge, which defeats the purpose. Full IP/PoE replacement gives the best result, and in some buildings the existing coax can be reused with converters to carry HD video, which saves significant cabling labor in finished hallways. The DVR is almost always replaced with an NVR either way, and drive sizing gets redone for the new resolution. We'll tell you which cables are salvageable and which runs need Cat6 before quoting, so you're comparing real options rather than a reflexive rip-and-replace."
      },
      {
        "q": "Do cameras need permission from my co-op or condo board?",
        "a": "If the cameras go in common areas or on the building exterior, yes — those are common elements, and installation there is a board or managing-agent decision. An individual owner generally cannot mount a private camera in a shared hallway without approval, and boards do make people take them down. What we do in practice: prepare the placement plan, coverage rationale, and insurance certificates the board needs, present the privacy boundaries clearly (common areas only, no sightlines into units), and schedule installation under the building's contractor rules. For commercial tenants, your lease and landlord approval govern exterior mounting — we've handled that workflow across the five boroughs."
      },
      {
        "q": "How fast can you install, and what if a camera fails later?",
        "a": "A typical storefront or small-building system — four to eight cameras and an NVR — is usually installed in one to two days once hardware is confirmed, and common configurations are not long-lead items. Larger multi-building or high-camera-count projects get phased so recording starts on the most critical doors first. After installation, we service what we install and what others installed: dead cameras, failed hard drives, lost remote access, and storm-damaged exterior units. We're open 24/7 with offices in Brooklyn Heights and Williamsburg, so a failed camera on a door that just had an incident doesn't wait until Monday."
      }
    ],
    "related": [
      "access-control",
      "intercom-systems",
      "security-gates",
      "high-security-locks",
      "door-repair",
      "locksmith"
    ],
    "photos": [
      {
        "src": "/images/real/real-cctv-camera.jpg",
        "alt": "Security camera installed and aimed at a building entry point"
      },
      {
        "src": "/images/real/real-cctv-brick.jpg",
        "alt": "CCTV camera mounted on a brick exterior wall of an NYC building"
      },
      {
        "src": "/images/real/real-dome-camera-brick-install.jpg",
        "alt": "Technician installing a dome camera on a brick facade"
      },
      {
        "src": "/images/real/real-dome-camera-mount.jpg",
        "alt": "Dome security camera being mounted to its ceiling bracket"
      }
    ]
  },
  {
    "slug": "master-key-systems",
    "title": "Master Key Systems",
    "shortTitle": "Master Keys",
    "category": "locksmith",
    "icon": "Lock",
    "metaTitle": "Master Key Systems NYC — Design & Install | Downtown",
    "metaDescription": "Master key systems for NYC buildings — designed, pinned & installed by a licensed locksmith. Restricted keyways, landlord & super keys, five-borough service.",
    "answerFirst": "A master key system pins a building's cylinders so each tenant's key opens only their own door while a master key opens every door in its group — the standard way NYC landlords, supers, property managers, and multi-room businesses control access without carrying a ring of thirty keys. Downtown Door Repair & Security designs, pins, and installs master key systems across the five boroughs, from a three-family brownstone to multi-building portfolios, on standard or restricted keyways including Mul-T-Lock and Maxtek. We keep the keying records, cut keys at our Brooklyn Heights and Williamsburg offices, and service the system when tenants turn over — all under NYC DCWP license #2109597.",
    "heroTagline": "One key for you, one key per door for everyone else — designed on paper before it's ever pinned in brass.",
    "whatItIs": [
      "Mechanically, master keying works by adding master pins inside each cylinder so the lock operates at two or more shear lines: the change key (the tenant's key) works one, the master key works another. Done casually, this quietly weakens the system — every added shear line is another combination that can operate the lock, and sloppy keying creates 'ghost keys' nobody intended. Done properly, the system is designed on paper first: a keying chart that maps every door, every key, and every level, chosen to minimize incidental combinations and to leave room for expansion. We build the chart before we touch a pinning kit, and we keep it on file so lost keys, new doors, and tenant turnover are handled against the record instead of by guesswork.",
      "Structure follows the building. A three-family brownstone usually needs one level: the owner's master opens the entry door, the cellar, and each apartment, while each tenant's key opens the entry and their own unit. A managed walk-up portfolio adds levels — a grand master for the management office, per-building masters for supers, change keys per unit. Commercial spaces map to functions instead: an owner's master over office, stockroom, basement, and gates, with staff keys limited to the front door and floor. Mixed hardware is normal in NYC — pre-war mortise cases on apartment doors, rim cylinders on jimmy-proofs, cylindrical levers on office suites — and we key across all of it, including keyed-alike groups where a true hierarchy is more than the building needs.",
      "The decision that determines whether the system stays secure is the keyway. On an open commercial keyway, any key — including the master — can be copied at a hardware store, and a master system where the master has been quietly duplicated is worse than no system at all. Building the system on a restricted keyway (we stock and are authorized for Mul-T-Lock, and offer Maxtek as the value line) means every key, master or change, can only be cut for verified authorized signers, with each duplicate logged. For landlords this converts key control from an act of faith into a record you can actually audit when a unit turns over or a super leaves.",
      "Two NYC realities shape every system we design. First, egress: master keying controls who gets in, never who gets out — every door in the system still opens freely from inside, and apartment entry doors keep single-action egress, consistent with FDNY and HPD requirements. Second, tenant privacy: a landlord's master key is for lawful access — emergencies and repairs with proper notice — and each tenant's change key must not operate any neighbor's door, which is exactly the cross-keying error a designed chart prevents and an improvised one invites. We also plan for compromise: when a master goes missing, the chart tells us precisely which cylinders must be re-pinned, so recovery is a scoped job instead of a full rebuild."
    ],
    "whenNeeded": [
      "You own or manage a multi-family building and carry a different key for every door",
      "A super, porter, or property manager left and may still hold a master key",
      "New building acquisition — you inherited unknown keys and an undocumented keying mess",
      "Office or storefront where staff need the front door but not the stockroom or office",
      "Portfolio of buildings that should run on one grand-master hierarchy",
      "Frequent tenant turnover making per-unit rekeys slow and error-prone",
      "You want master convenience without copyable keys — restricted-keyway system",
      "Adding doors (cellar, roof, package room, gates) to an existing system"
    ],
    "process": [
      {
        "title": "Survey and keying chart",
        "description": "We walk the building, list every door and its hardware — mortise, rim, cylindrical — and interview you on who needs access to what. The output is a written keying chart: levels, key symbols, and door assignments you approve before anything is pinned."
      },
      {
        "title": "Keyway and hardware selection",
        "description": "We choose the keyway (open, or restricted Mul-T-Lock / Maxtek for controlled duplication), reusing existing cylinders where their condition allows and replacing only what's worn or incompatible."
      },
      {
        "title": "Pinning and installation",
        "description": "Cylinders are pinned to the chart in-house at our shop, then installed door by door. Every change key and master is tested in every cylinder it should — and should not — operate."
      },
      {
        "title": "Records, keys, and handover",
        "description": "You receive masters and change keys per the chart, signed for by key symbol. We retain the keying record and authorization list, so future keys, added doors, and lost-master recoveries are executed against the system as designed."
      }
    ],
    "pricing": [
      {
        "item": "System design and keying chart",
        "range": "$$ (confirm)",
        "note": "Scoped by door count and levels; credited toward installation on approved systems."
      },
      {
        "item": "Master keying per cylinder (existing hardware)",
        "range": "$$ (confirm)",
        "note": "Re-pinning your current cylinders into the system where condition allows."
      },
      {
        "item": "Restricted-keyway system (Mul-T-Lock / Maxtek)",
        "range": "$$$ (confirm)",
        "note": "New controlled-duplication cylinders throughout; quoted per building walkthrough."
      },
      {
        "item": "Additional change or master keys",
        "range": "$ (confirm)",
        "note": "Cut against the keying record at either Brooklyn office; restricted keys require an authorized signer."
      }
    ],
    "faqs": [
      {
        "q": "Does master keying make my building's locks easier to pick or bypass?",
        "a": "Adding master pins does create extra shear lines, so a master-keyed cylinder has more theoretically valid combinations than a straight-keyed one — that's a real trade-off, not a myth. The practical answer is design and hardware: a properly charted system keeps incidental combinations to a minimum, avoids the cross-keying that plagues improvised systems, and a restricted high-security cylinder like Mul-T-Lock remains extremely resistant to picking and bumping even when master keyed. The insecure version of master keying is the one done ad hoc over decades by whoever showed up — which is what most older NYC buildings actually have, and what a documented rebuild fixes."
      },
      {
        "q": "Our super quit and we can't get his master key back. Do we have to rekey the whole building?",
        "a": "Not necessarily the whole building — the answer depends on what his key opened, which is exactly what a keying chart tells you. If he held a building master, every cylinder that master operates needs re-pinning; apartment change keys can often stay valid, so tenants may not need new keys at all, which makes the job far less disruptive than it sounds. If the system was undocumented, we survey and decode what's actually in the doors first, then rebuild on a clean chart so the next departure is a scoped re-pin instead of a crisis. This is also the moment most owners move the masters to a restricted keyway, so the next ex-employee can't have quietly made copies beforehand."
      },
      {
        "q": "As a landlord, am I allowed to keep a master key to tenant apartments?",
        "a": "Yes — NYC landlords routinely retain access for emergencies and repairs, and multiple-dwelling rules effectively require the owner to be able to get into units when it matters. What the master key does not change are the access rules: outside genuine emergencies, entry requires proper notice for repairs or inspections, and a tenant's own key must never open a neighbor's door. A designed system actually protects you here, because it eliminates accidental cross-keying and gives you a record showing exactly who was issued which key — useful the day a tenant claims someone entered their unit. If a tenant adds their own lock, that's a lease conversation, not a locksmith workaround we'll perform without the tenant's authorization."
      },
      {
        "q": "Can a tenant or employee copy their key — or worse, the master — at a hardware store?",
        "a": "On an open keyway, yes: any standard key, including a master, can be duplicated in a minute wherever blanks are sold, and there is no meaningful way to prevent it — 'do not duplicate' stamps are a suggestion, not a control. That's why we recommend building any system with real stakes on a restricted keyway. With Mul-T-Lock or Maxtek, blanks aren't available to hardware stores and every key is cut only for authorized signers against the system's record, so the count of existing keys is a fact you can verify rather than hope about. Many owners split the difference: restricted masters, standard change keys — the masters are the keys that can hurt you."
      },
      {
        "q": "We have old mortise locks on the apartments and modern levers in the offices. Can one system cover both?",
        "a": "Yes, and in NYC it almost always has to — pre-war mortise cases, rim cylinders on jimmy-proof drop bolts, and modern cylindrical levers routinely coexist in the same building. As long as the cylinders run (or can be converted to run) a common keyway, they can all be pinned into one chart, and mortise, rim, and standard-profile cylinders are all available in that shared keyway, including the Mul-T-Lock restricted lines we stock. Where a cylinder is too worn or an obsolete format can't be sourced, we replace just that cylinder, not the visible hardware — important on brownstone and landmark doors where the original trim should stay. The survey stage exists precisely to catch these hardware realities before the chart is finalized."
      },
      {
        "q": "How long does a master key system take, and what's the lead time for extra keys later?",
        "a": "A small building — say a three- or four-family brownstone — typically goes from survey to installed system within days: the chart is drafted after the walkthrough, and pinning plus installation is usually a single day on site since we pin in our own shop rather than sending cylinders out. Larger or restricted-keyway systems add hardware lead time, and we give you the real schedule at quote, not an optimistic one. Afterward, change keys and masters are cut against your keying record at 170 Hicks St or 232 Leonard St — standard keys while you wait, restricted keys for authorized signers, generally same visit for common formats. Because we hold the records, a phone call with the key symbol is enough to have keys ready for pickup."
      }
    ],
    "related": [
      "locksmith",
      "high-security-locks",
      "access-control",
      "intercom-systems",
      "door-repair"
    ],
    "photos": [
      {
        "src": "/images/real/real-key-wall-board.jpg",
        "alt": "Organized key board on the shop wall tracking keys by system"
      },
      {
        "src": "/images/real/real-mortise-keys.jpg",
        "alt": "Mortise cylinder keys laid out during a keying job"
      },
      {
        "src": "/images/real/real-cylinder-cut-tested.jpg",
        "alt": "Freshly pinned cylinder being tested with its cut key"
      },
      {
        "src": "/images/real/real-schlage-keys-handful.jpg",
        "alt": "Handful of keyed change keys prepared for a building handover"
      }
    ]
  },
  {
    "slug": "high-security-locks",
    "title": "High-Security Lock Installation",
    "shortTitle": "High-Security Locks",
    "category": "locksmith",
    "icon": "ShieldCheck",
    "metaTitle": "High-Security Locks NYC — Mul-T-Lock | Downtown",
    "metaDescription": "Mul-T-Lock & Maxtek high-security cylinders installed by a licensed NYC locksmith. Pick, drill & bump resistant, restricted keys. Brooklyn offices, 5 boroughs.",
    "answerFirst": "A high-security lock replaces a standard pin-tumbler cylinder with one built to resist picking, bumping, drilling, and unauthorized key copying — the four ways NYC apartments and storefronts actually get compromised. Downtown Door Repair & Security stocks and installs Mul-T-Lock and Maxtek high-security cylinders in both mortise and cylindrical formats, matched to brownstone, co-op, and commercial doors across the five boroughs. Keys are on restricted keyways, so duplicates can only be cut for verified keyholders. Installation, keying, and service run through our two Brooklyn offices under NYC DCWP license #2109597.",
    "heroTagline": "Mul-T-Lock and Maxtek cylinders in stock — keys that can't be copied at a hardware store, locks that don't open for a bump key.",
    "whatItIs": [
      "The cylinder is the part of the lock a burglar actually attacks, and the standard cylinders installed on most NYC doors are the same basic pin-tumbler design that bump keys and cheap pick sets defeat. A high-security cylinder redesigns that mechanism: Mul-T-Lock's telescoping pin-within-pin system requires two components to align at every chamber, and hardened steel inserts sit in front of the drill points. Maxtek cylinders bring similar pick and drill resistance at a different price point. We stock both, in the formats NYC doors need — threaded mortise cylinders for pre-war and brownstone hardware, rim cylinders for the drop-bolt and jimmy-proof locks common on apartment doors, and standard profiles for cylindrical locksets and deadbolts.",
      "The second half of high security is the key itself. Standard keys are copied anywhere, by anyone holding them for thirty seconds — which is why 'who has a key' becomes unanswerable within a year of move-in. High-security systems use restricted keyways protected by patent and contract: blanks aren't sold to hardware stores, and duplicates are cut only when the keyholder presents the system's control card. For a landlord, a storefront with employee turnover, or anyone who has ever handed a key to a dog walker or contractor, key control is usually worth more than the pick resistance.",
      "In practice, most upgrades keep your existing lock hardware. A mortise lock on a brownstone door, a Medeco-era deadbolt housing, a commercial storefront's mortise case — the case and trim usually stay, and we swap the cylinder to Mul-T-Lock or Maxtek. That keeps costs down, avoids re-prepping a door (a real issue on landmark and pre-war doors where new hardware never quite matches the old mortise pocket), and preserves the look a co-op board or landmarks-conscious block expects. Where the underlying hardware is worn out or under-grade, we'll say so and quote a full lock replacement honestly.",
      "One thing high security cannot override: legal egress. On any door in an occupied building, the inside must open in a single motion without a key — double-cylinder deadbolts on apartment entry doors are a life-safety violation and an FDNY egress problem, no matter how good the cylinder is. We configure high-security hardware with interior thumbturns or compliant classroom functions, and we'll flag it plainly when a customer asks for a setup that would lock people in. Security that traps you in a fire isn't security."
    ],
    "whenNeeded": [
      "Your building has had break-ins where locks were picked or bumped without visible damage",
      "You need to know exactly who can have a key — no hardware-store duplicates, ever",
      "Storefront with staff turnover: recover key control without rekeying every month",
      "Insurance carrier or commercial lease requires a high-security or restricted cylinder",
      "Upgrading a brownstone or pre-war mortise lock without replacing original hardware",
      "Previous owner, super, or contractor may still hold copies of your current key",
      "Street-facing door that has been drilled or wrenched before",
      "You want one restricted key to run multiple doors (pairs with a master-key system)"
    ],
    "process": [
      {
        "title": "Door and risk assessment",
        "description": "We look at the actual attack surface — cylinder, lock case, strike, door and frame condition — because a high-security cylinder in a rotted jamb protects nothing. You get a straight recommendation, including where the cheaper Maxtek line is genuinely enough."
      },
      {
        "title": "Cylinder and keyway selection",
        "description": "We match format (mortise, rim, or standard profile), finish, and keyway to your doors, and decide keying: keyed alike across doors, keyed different, or folded into a restricted master-key system."
      },
      {
        "title": "Installation and keying",
        "description": "Cylinders are pinned in-house and installed with hardened collars and security screws where the door allows. Most single-door upgrades are done in one visit from van stock."
      },
      {
        "title": "Key registration and handover",
        "description": "You receive your keys and the system's control card, we record the authorization for future duplication, and you test every key in every door before we leave."
      }
    ],
    "pricing": [
      {
        "item": "Mul-T-Lock cylinder, supplied and installed",
        "range": "$$ (confirm)",
        "note": "Per cylinder; mortise, rim, and standard profiles priced on inspection."
      },
      {
        "item": "Maxtek high-security cylinder, supplied and installed",
        "range": "$$ (confirm)",
        "note": "Value option with pick and drill resistance; ask which line fits your risk."
      },
      {
        "item": "Restricted key duplication (verified keyholders)",
        "range": "$ (confirm)",
        "note": "Control card or registered authorization required — cut at either office."
      },
      {
        "item": "Multi-door / whole-building upgrade",
        "range": "$$$ (confirm)",
        "note": "Quoted as a package after a walkthrough; keyed-alike and master-keyed options."
      }
    ],
    "faqs": [
      {
        "q": "Is a high-security cylinder actually worth it on an NYC apartment door?",
        "a": "It depends on how your building fails. If your street door is propped open all day and your apartment door has a hollow frame, spend money there first — we'll tell you that on the assessment. But if the door and frame are sound, the cylinder is the remaining weak point: bump keys and picks leave no forced-entry evidence, which also complicates insurance claims. A Mul-T-Lock or Maxtek cylinder closes the covert-entry route and, just as importantly, ends the question of who's holding copies of your key. For most brownstone and co-op owners it's a one-time cost that outlasts the tenancy of everyone who ever had a spare."
      },
      {
        "q": "What's the real difference between Mul-T-Lock and Maxtek, and which do I need?",
        "a": "Both resist picking, bumping, and drilling far beyond a standard cylinder; both run on restricted keyways with controlled duplication. Mul-T-Lock is the established international system — telescoping pin-in-pin mechanism, hardened anti-drill elements, deep patent protection, and the broadest range of formats, which matters when you're keying odd pre-war hardware or building a large restricted master system. Maxtek delivers strong pick and drill resistance at a lower price, which makes it the sensible pick for rental units, secondary doors, or budget-conscious storefronts. We stock both and will tell you plainly when the cheaper one is enough — upselling every door to the flagship line is how the other guys do it."
      },
      {
        "q": "Can someone copy my high-security key at a hardware store or one of those kiosk machines?",
        "a": "No. Restricted keyways are protected by patent and by contract: the blanks aren't distributed to hardware stores, and self-serve kiosks can't source or cut them. Duplicates are cut only by an authorized dealer, only for the registered keyholder presenting the system's control card. That's the feature — if you give a key to a contractor for a week, you know exactly how many keys exist when the week is over. Guard the control card like a bank card; whoever holds it holds the authority to order keys. If a card is lost, tell us and we'll flag the system so duplication requires re-verification."
      },
      {
        "q": "Can I put a double-keyed deadbolt on my door so a burglar can't open it from inside?",
        "a": "On an apartment or any residential entry door in an occupied NYC building — no, and we won't install one there. Egress rules require the door to open from the inside in one motion without a key or special knowledge; in a fire, a keyed interior cylinder is how people get trapped, and it creates real liability with FDNY and HPD. The legitimate concern behind the request — usually glass near the lock — is solved differently: a high-security cylinder with an interior thumbturn, laminated glazing or glass protection, and a reinforced strike. On certain commercial doors outside business hours there are narrow lawful configurations, and we'll walk through them honestly rather than bolt on a violation."
      },
      {
        "q": "Do I have to replace my whole lock, or just the cylinder? My co-op won't let me change the door hardware.",
        "a": "Usually just the cylinder, and that's exactly why this upgrade works well in co-ops. Mortise cylinders are threaded and standardized; in most cases we screw a Mul-T-Lock or Maxtek cylinder into your existing mortise case with a matching finish collar, and from the hallway the door looks unchanged — which keeps boards and managing agents happy. Same story for rim cylinders feeding a jimmy-proof drop bolt. Check your alteration agreement, but a cylinder swap rarely triggers the approval process a full hardware change does. If your lock case itself is failing, we'll show you the wear and quote that separately instead of hiding it in the job."
      },
      {
        "q": "How long does installation take, and how fast can I get extra keys later?",
        "a": "A single-door cylinder swap is typically done in one visit — we stock Mul-T-Lock and Maxtek on the van and pin cylinders in-house, so there's no order-and-wait for common formats. Multi-door or keyed-alike jobs usually run one visit after a walkthrough. Additional restricted keys are cut at either office — 170 Hicks St in Brooklyn Heights or 232 Leonard St in Williamsburg — for verified keyholders with the control card, generally while you wait since we're an authorized point for the systems we install. Unusual formats or large batches can add lead time, and we'll tell you the real number when you order rather than promising same-day and slipping."
      }
    ],
    "related": [
      "locksmith",
      "master-key-systems",
      "door-repair",
      "access-control",
      "security-gates"
    ],
    "photos": [
      {
        "src": "/images/real/real-high-security-cylinder.jpg",
        "alt": "High-security lock cylinder ready for installation"
      },
      {
        "src": "/images/real/real-ori-multilock-tee-jobsite.jpg",
        "alt": "Downtown technician in a Mul-T-Lock shirt on a Brooklyn job site"
      },
      {
        "src": "/images/real/real-mortise-cylinder-install.jpg",
        "alt": "Threaded mortise cylinder being installed into an existing lock case"
      },
      {
        "src": "/images/real/real-cylinder-install-commercial.jpg",
        "alt": "New cylinder installed on a commercial door"
      }
    ]
  },
  {
    "slug": "panic-hardware",
    "title": "Panic Bar & Exit Device Installation",
    "shortTitle": "Panic Hardware",
    "category": "security",
    "emergency": true,
    "icon": "LogOut",
    "metaTitle": "Panic Bar Installation NYC | Downtown Door & Security",
    "metaDescription": "Panic bar and exit device installation and repair for NYC commercial buildings. Rim, mortise, and vertical rod devices, FDNY-ready egress, alarmed exits. Licensed, 24/7.",
    "answerFirst": "Panic hardware — the horizontal push bar on a commercial exit door — lets anyone leave a building with a single push, no keys and no knowledge, which is exactly what NYC egress code and the FDNY require on many commercial exit doors. Downtown Door Repair & Security installs and repairs rim, mortise, and vertical rod exit devices on steel, wood, and aluminum storefront doors across the five boroughs, including outside trim for keyed entry, alarmed bars, and electrified devices tied to access control. Walk-in offices at 170 Hicks St, Brooklyn Heights and 232 Leonard St, Williamsburg. NYC DCWP license #2109597, open 24/7.",
    "heroTagline": "One push and everyone's out. That's the law — and it's also just a good door.",
    "whatItIs": [
      "Panic hardware (an 'exit device' in the trade) is the push bar that spans an exit door and retracts the latch when anything presses against it. The principle behind it is grim and simple: in a fire or a crowd panic, people surge toward the door, and the door has to open from that surge alone — no lever to find, no thumbturn to twist, no key, no instructions. NYC egress code requires exactly this single-motion, no-special-knowledge exit on doors serving assembly spaces, many commercial occupancies, and most public-facing exits, and FDNY inspectors check for it. A chained panic bar or a deadbolt added above one is the violation inspectors photograph first, and it's the kind that comes with real consequences because it's the kind that kills people.",
      "There are three main types, and the door dictates which one you need. A rim device mounts on the surface of the door and latches into a strike on the frame — the workhorse for single steel and wood doors, fast to install and easy to service. A mortise device pairs the push bar with a mortise lock body inside the door edge, giving you heavier-duty latching and better keyed-trim options on doors that already have a mortise pocket. Vertical rod devices latch at the top and bottom of the door instead of at the edge, which is how you secure double doors with no center mullion — each leaf gets its own device, and both leaves open independently with a push. Vertical rods come surface-mounted or concealed inside the door, and the concealed kind on a narrow-stile aluminum storefront door is a genuinely finicky piece of hardware that punishes sloppy installation with bottom rods that drag and top latches that don't throw.",
      "A panic bar controls exit; the question of who gets in is separate, and that's where trim and electrification come in. Outside trim — a keyed lever or pull with a cylinder — gives staff normal keyed entry while the bar side stays pure egress. 'Exit only' doors get no outside trim at all. For alarmed exits, we install devices with a built-in local alarm that screams when the bar is pushed, which is how retail keeps a required exit legal without inviting shrinkage through the back door. And for buildings running access control, exit devices can be electrified — latch retraction or electrified trim wired to your card readers — so the same door is a controlled entrance from outside and an unconditional exit from inside. NYC also has narrow provisions for delayed egress devices, which hold the door for a short timed delay after the bar is pushed while sounding an alarm; they're only permitted in specific occupancies, they must release instantly on fire alarm or power loss, and we'll tell you plainly whether your building qualifies before anyone orders hardware.",
      "Repair is at least half of the panic hardware work we do in Brooklyn and Manhattan, because these devices lead hard lives: delivery carts slam them, closers slam the doors they're on, and street-facing exits live in weather. Typical failures are dogging mechanisms that no longer hold the latch retracted for business hours, rim latches chewed down until the door can be pulled open without pushing the bar, vertical rods knocked out of adjustment so the bottom bolt grinds the threshold or the top latch misses its strike, and storefront devices whose narrow aluminum stiles have cracked around the mounting points. We stock common devices and parts at our two Brooklyn offices, we cut and reinforce doors that weren't originally prepped for exit devices, and because a dead panic bar on an occupied building is a life-safety problem and not a Monday problem, we run these calls 24/7."
    ],
    "whenNeeded": [
      "FDNY or DOB flagged an exit door — chained bar, added deadbolt, or missing panic hardware",
      "Opening a restaurant, bar, gym, church, or any assembly space where occupancy triggers panic hardware requirements",
      "The bar pushes but the latch doesn't release, or releases only with a hard shove — worn latch or rod misalignment",
      "Double exit doors need securing without a center mullion — vertical rod devices on both leaves",
      "The back door is a theft problem but must legally stay an exit — alarmed panic hardware",
      "Dogging is broken and staff are wedging the door open during business hours",
      "You want keyed entry from outside on an exit-only door — adding outside trim with a cylinder",
      "Tying an exit door into access control without touching its egress function — electrified latch retraction or trim"
    ],
    "process": [
      {
        "title": "Door & occupancy assessment",
        "description": "We confirm what the opening requires: door material and thickness, single or pair, fire rating, whether the space's use and occupancy trigger a panic hardware requirement, and what's failing on any existing device. Street-facing storefront doors also get checked for stile width and frame condition."
      },
      {
        "title": "Device selection",
        "description": "Rim, mortise, or vertical rod, matched to the door — with fire-rated ('fire exit hardware') devices on rated openings, which cannot have mechanical dogging. We spec outside trim for entry needs, alarmed devices where theft is the driver, and electrified options if the door joins your access control."
      },
      {
        "title": "Installation & fitting",
        "description": "Door prepped and reinforced as needed, device mounted level at code height, strikes set and — on vertical rod jobs — top and bottom latches adjusted so both throw fully with the door closed under closer pressure. Outside trim and cylinders keyed to your existing system where wanted."
      },
      {
        "title": "Function & egress testing",
        "description": "We push-test at multiple points along the bar, verify single-motion egress with the door under pressure, test dogging, alarm, and key trim, confirm rated doors still positively latch, and cycle the closer-and-latch interaction the way real traffic will — then walk your manager through the device before we leave."
      }
    ],
    "pricing": [
      {
        "item": "Rim exit device installed on single steel or wood door",
        "range": "$$ (confirm)",
        "note": "The standard back-of-house exit"
      },
      {
        "item": "Vertical rod devices on a pair of doors (surface or concealed)",
        "range": "$$ (confirm)",
        "note": "Concealed narrow-stile storefront work quoted after site survey"
      },
      {
        "item": "Alarmed panic bar or outside keyed trim added",
        "range": "$$ (confirm)"
      },
      {
        "item": "Panic hardware repair call (latch, rods, dogging, alignment)",
        "range": "$$ (confirm)",
        "note": "24/7 — a dead exit device is a life-safety call"
      }
    ],
    "faqs": [
      {
        "q": "Does my NYC business legally need panic bars?",
        "a": "It depends on your occupancy classification and occupant load, not on the business type alone. Assembly spaces — restaurants, bars, venues, houses of worship, gyms — trigger panic hardware requirements at occupant loads that many NYC storefronts hit easily, and other commercial occupancies require it on certain exit doors as well. The practical version: if the public gathers in your space, assume the exit doors need single-motion, no-key egress and get the specific answer for your certificate of occupancy. What's never legal is 'solving' security by chaining a required exit or stacking a deadbolt above a panic bar — that's the violation FDNY writes first. We'll assess your actual doors against your actual occupancy on-site."
      },
      {
        "q": "Can I lock a door that has a panic bar on it?",
        "a": "From the outside, yes — from the inside, never. The correct setup is outside trim with a key cylinder (or an electrified strike or trim on access control) so entry is controlled, while the bar side always opens with one push. What you cannot do is add any inside-locking device — deadbolt, slide bolt, chain, hook — to a door required to have panic hardware, because the moment egress takes two motions or a key, the door is illegal and dangerous. If your real problem is people using an exit as an unauthorized entrance or walk-out, the legal fixes are an alarmed device, better door position switches on your alarm, or a camera on the door — and we install all three."
      },
      {
        "q": "What's the difference between rim, mortise, and vertical rod devices?",
        "a": "Rim devices are surface-mounted and latch into a strike on the frame — simplest, most serviceable, and right for most single doors. Mortise devices use a lock body mortised into the door edge, giving heavier latching and more robust keyed trim; they make sense on doors that already have a mortise prep or need the extra duty. Vertical rod devices skip the edge latch entirely and throw bolts into the frame head and the floor, which is how you secure a pair of double doors with no post between them — each leaf works independently. Concealed vertical rods hide inside the door for looks and tamper resistance, and they're the standard answer on narrow-stile aluminum storefront pairs, where there's no meat in the stile for anything else."
      },
      {
        "q": "My panic bar sticks or the door won't latch behind people. Can it be repaired?",
        "a": "Usually, yes — and usually in one visit. Sticking bars are most often gummed or worn internal springs and a latch chewed out of shape by years of slamming; doors that won't relatch behind traffic typically have a strike out of alignment, a closer too weak to overcome the latch, or on vertical rod devices, rods knocked out of adjustment so the bottom bolt drags before the top latch seats. We carry common devices and parts in stock at our Brooklyn offices, so when a device is genuinely dead — cracked case, stripped dogging, obsolete model — we can typically swap it the same day rather than leaving an exit door unsecured overnight."
      },
      {
        "q": "How long does a panic bar installation take?",
        "a": "A rim device on a single steel door that's already in decent shape is a same-day, single-visit job, including outside trim if you want keyed entry. Pairs with vertical rod devices take longer because both leaves get devices and four latching points need adjustment under real closing pressure; concealed rods in narrow-stile storefront doors are the longest, since the hardware lives inside the stile. Doors that were never prepped for exit devices may need reinforcement first. We schedule around your operating hours — 24/7 — so a retail back door or restaurant exit gets done before open or after close, and the door is never out of service while you're full of customers."
      },
      {
        "q": "Can a panic bar door be part of my access control system?",
        "a": "Yes, and it's the right way to put an exit door on access control. From the inside nothing changes — the bar always opens the door mechanically, with no dependence on power or software, which is what keeps it legal. From the outside, entry is granted electronically: either an electrified strike that releases for the reader, electrified outside trim, or electric latch retraction inside the device itself, which also enables push-pull traffic during business hours. On fire-rated doors we spec fire exit hardware versions that keep positive latching. If you're also considering delayed egress — holding the door briefly with an alarm after a push — that's allowed only in limited NYC occupancies and must drop instantly on fire alarm, so ask us before buying hardware."
      }
    ],
    "related": [
      "door-repair",
      "electric-strikes",
      "magnetic-locks",
      "access-control",
      "security-gates"
    ],
    "photos": [
      {
        "src": "/images/real/real-hero-panicbar.jpg",
        "alt": "Commercial panic bar exit device installed across a heavy exit door"
      },
      {
        "src": "/images/real/real-panic-bar-exit.jpg",
        "alt": "Push-bar exit device mounted on a commercial exit door"
      },
      {
        "src": "/images/real/real-panic-bar-street-install.jpg",
        "alt": "Technician installing a panic bar on a street-facing commercial door in NYC"
      },
      {
        "src": "/images/real/real-panic-bar-black-door.jpg",
        "alt": "Finished panic bar installation on a black steel commercial door"
      }
    ]
  },
  {
    "slug": "security-gates",
    "title": "Security Gates & Roll-Down Gates",
    "shortTitle": "Security Gates",
    "category": "security",
    "icon": "Store",
    "metaTitle": "Security Gate & Roll-Down Gate Repair in Five Boroughs | Downtown Doors",
    "metaDescription": "Roll-down and security gate repair and installation across NYC — rolling steel gates, scissor gates, motors, springs, locks, and open-grille storefront gates.",
    "answerFirst": "Downtown Door Repair & Security repairs and installs security gates and roll-down gates across the five boroughs — rolling steel and open-grille storefront gates, scissor gates, their motors, springs, and locks. We keep the gate that protects your storefront rolling smoothly and locking securely.",
    "heroTagline": "Roll-down gates that open smooth and lock tight.",
    "whatItIs": [
      "A storefront's roll-down or scissor gate is its first line of security — and when the motor, spring, track, or lock fails, the gate jams open, jams shut, or won't secure at closing.",
      "We repair and install rolling steel gates, open-grille gates, and scissor gates, plus their tension springs, motors, chains, tracks, and slide-bolt or cylinder locks, for retail and commercial storefronts."
    ],
    "whenNeeded": [
      "A roll-down gate is stuck open or stuck shut",
      "The gate motor, chain, or spring has failed",
      "The gate is off its track or dragging",
      "The gate lock won't secure at closing time",
      "You need a new security gate for a storefront"
    ],
    "process": [
      {
        "title": "Assess the gate system",
        "description": "We check the curtain or grille, springs, motor, tracks, and locks to find why it's binding or won't secure."
      },
      {
        "title": "Repair or replace",
        "description": "We adjust or replace springs, motors, tracks, and locks, or install a new gate sized to the opening."
      },
      {
        "title": "Test open, close & lock",
        "description": "We cycle the gate to confirm it rolls smoothly and locks securely at closing."
      }
    ],
    "pricing": [
      {
        "item": "Gate service & diagnosis",
        "range": "$$ (confirm)"
      },
      {
        "item": "Spring / lock / track repair",
        "range": "$$–$$$ (confirm)"
      },
      {
        "item": "Motor replacement / new gate",
        "range": "$$$$ (confirm)"
      }
    ],
    "faqs": [
      {
        "q": "My storefront gate is stuck — can you get it open today?",
        "a": "A gate stuck open or shut is a priority — we respond to get your storefront secure and operating, and complete any larger repair (spring, motor, track) promptly."
      },
      {
        "q": "Do you install new roll-down security gates?",
        "a": "Yes. We install rolling steel, open-grille, and scissor gates sized to your storefront, with the motor and locking you need."
      }
    ],
    "related": [
      "door-repair",
      "access-control"
    ]
  },
  {
    "slug": "door-repair",
    "title": "Door Repair & Door Supply",
    "shortTitle": "Door Repair",
    "category": "door",
    "icon": "Wrench",
    "metaTitle": "Door Repair & Door Supply NYC | Downtown",
    "metaDescription": "One page, all door work: repair, installation & supply, emergency & break-in response, storefront doors, closers, and fire-rated doors — five boroughs, 24/7.",
    "answerFirst": "Downtown Door Repair & Security handles all door work across the five boroughs on one crew: repairing misaligned or damaged doors and frames, supplying and installing new residential and commercial doors, emergency and break-in response, storefront and fire-rated doors, and closers. It supports our core locksmith, intercom, and access-control trade — a properly hung, properly closing door is what makes every lock and reader actually work.",
    "heroTagline": "Doors that stick, sag, or won't latch — fixed right the first time.",
    "whatItIs": [
      "Door repair covers everything that keeps a door from opening, closing, sealing, or locking the way it should: sagging or dragging doors, racked frames, split jambs, loose or bent hinges, misaligned strike plates, and closers that slam or no longer pull the door shut.",
      "For homes that usually means an entry, apartment, or interior door. For businesses it often means a high-traffic storefront, office, or fire-rated door that has to open and close hundreds of times a day. We repair both, matching the fix to how the door is used.",
      "Beyond repair, we supply and install new doors — entry and interior doors for homes and apartments, hollow-metal and fire-rated doors for commercial buildings, and aluminum-and-glass storefront doors — sourced from our own stock and suppliers, hung square, and finished with the right hardware.",
      "Emergency work is part of the same page: when a door has been forced in a break-in, won't lock at closing time, or won't open at all, we secure the opening first and complete the permanent repair after — around the clock.",
      "Commercial closers, pivots, and fire-rated assemblies round it out: we size and install closers to the door's weight and traffic, and keep fire doors self-closing and self-latching the way inspections require."
    ],
    "whenNeeded": [
      "The door drags on the floor or won't latch without lifting or slamming it",
      "There's a visible gap letting in drafts, water, or light around the frame",
      "Hinges are loose, squealing, or pulling out of the frame",
      "The closer slams the door, leaks oil, or no longer closes it fully",
      "The lock or latch sticks, or the deadbolt no longer lines up with the strike",
      "The frame or jamb is cracked, split, or damaged after a break-in or impact",
      "You need a new door supplied and installed, not just a repair",
      "A break-in or attempted break-in damaged the door, frame, or hardware",
      "A storefront or fire-rated door needs commercial-grade repair to pass inspection"
    ],
    "process": [
      {
        "title": "On-site diagnosis",
        "description": "We assess the door, frame, hinges, and hardware to find the actual cause — often it's the frame or hinges, not the door itself."
      },
      {
        "title": "Clear scope & options",
        "description": "You get a plain-language explanation of what's wrong and whether a repair or a replacement is the smarter call, with pricing before work starts."
      },
      {
        "title": "Repair on the spot",
        "description": "Common repairs — realignment, hinge and closer replacement, strike and weatherstrip adjustment — are completed the same visit when parts are on hand."
      },
      {
        "title": "Test & verify",
        "description": "We cycle the door, confirm it latches and locks cleanly, and make sure it seals properly before we leave."
      }
    ],
    "pricing": [
      {
        "item": "Standard service call & diagnosis",
        "range": "$ (confirm)",
        "note": "Illustrative — replace with your real trip/diagnostic fee."
      },
      {
        "item": "Alignment / hinge / strike adjustment",
        "range": "$$ (confirm)"
      },
      {
        "item": "Closer replacement",
        "range": "$$–$$$ (confirm)",
        "note": "Varies by closer type and door weight."
      },
      {
        "item": "Frame / jamb repair",
        "range": "$$$ (confirm)",
        "note": "Depends on material and extent of damage."
      }
    ],
    "faqs": [
      {
        "q": "Can you repair my door the same day?",
        "a": "Most common door repairs across the five boroughs are completed on the first visit when the needed parts are on hand. For specialty hardware or custom doors we confirm parts first, then schedule promptly."
      },
      {
        "q": "Should I repair or replace my door?",
        "a": "If the door slab is sound and the problem is alignment, hinges, a closer, or hardware, a repair is usually the better value. If the slab is warped, rotted, or structurally damaged, replacement is often more cost-effective long term. We give you an honest recommendation on-site."
      },
      {
        "q": "Do you repair commercial and storefront doors?",
        "a": "Yes. We repair residential doors as well as high-traffic commercial, office, storefront, and fire-rated doors. See our commercial storefront door page for details."
      },
      {
        "q": "Do you respond to emergency door damage after a break-in?",
        "a": "Yes — 24/7. We board or secure the opening on the first visit so the property is safe, then complete the permanent door, frame, and hardware repair. If locks were compromised we rekey or replace them in the same job."
      },
      {
        "q": "Do you supply new doors or only repair existing ones?",
        "a": "Both. We stock and source residential entry and interior doors, hollow-metal commercial doors, fire-rated assemblies, and storefront aluminum-and-glass doors, and we install what we supply — one crew, one warranty conversation."
      }
    ],
    "related": [
      "locksmith",
      "panic-hardware",
      "security-gates"
    ],
    "emergency": true,
    "photos": [
      {
        "src": "/images/real/real-storefront-door-repair-candid.jpg",
        "alt": "Mid-repair on a commercial glass storefront entry door"
      },
      {
        "src": "/images/real/real-frame-repair-oscillating.jpg",
        "alt": "Cutting out a damaged door frame section with an oscillating tool"
      },
      {
        "src": "/images/real/real-door-closer-install.jpg",
        "alt": "Installing a commercial door closer"
      },
      {
        "src": "/images/real/real-door-frame-measure.jpg",
        "alt": "Measuring a door frame before installation"
      }
    ]
  }
];

const categoryPriority: Record<ServiceCategory, number> = {
  locksmith: 0,
  security: 1,
  door: 2,
};

export const services: Service[] = [...allServices].sort(
  (a, b) => categoryPriority[a.category] - categoryPriority[b.category],
);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories: Record<ServiceCategory, string> = {
  door: "Door Services",
  locksmith: "Locksmith & Hardware",
  security: "Security & Access Control",
};
