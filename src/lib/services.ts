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
}

const allServices: Service[] = [
  {
    slug: "door-repair",
    title: "Door Repair",
    shortTitle: "Door Repair",
    category: "door",
    icon: "Wrench",
    metaTitle: "Door Repair in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Fast, reliable door repair for homes and businesses across Brooklyn and Manhattan — misaligned doors, damaged frames, failing closers, and hardware.",
    answerFirst:
      "Downtown Doors & Security Systems NYC repairs residential and commercial doors across Brooklyn and Manhattan — fixing misaligned or sticking doors, damaged frames and jambs, failing hinges and closers, and worn hardware. Most repairs are diagnosed on-site and completed the same visit whenever parts are on hand.",
    heroTagline: "Doors that stick, sag, or won't latch — fixed right the first time.",
    whatItIs: [
      "Door repair covers everything that keeps a door from opening, closing, sealing, or locking the way it should: sagging or dragging doors, racked frames, split jambs, loose or bent hinges, misaligned strike plates, and closers that slam or no longer pull the door shut.",
      "For homes that usually means an entry, apartment, or interior door. For businesses it often means a high-traffic storefront, office, or fire-rated door that has to open and close hundreds of times a day. We repair both, matching the fix to how the door is used.",
    ],
    whenNeeded: [
      "The door drags on the floor or won't latch without lifting or slamming it",
      "There's a visible gap letting in drafts, water, or light around the frame",
      "Hinges are loose, squealing, or pulling out of the frame",
      "The closer slams the door, leaks oil, or no longer closes it fully",
      "The lock or latch sticks, or the deadbolt no longer lines up with the strike",
      "The frame or jamb is cracked, split, or damaged after a break-in or impact",
    ],
    process: [
      {
        title: "On-site diagnosis",
        description:
          "We assess the door, frame, hinges, and hardware to find the actual cause — often it's the frame or hinges, not the door itself.",
      },
      {
        title: "Clear scope & options",
        description:
          "You get a plain-language explanation of what's wrong and whether a repair or a replacement is the smarter call, with pricing before work starts.",
      },
      {
        title: "Repair on the spot",
        description:
          "Common repairs — realignment, hinge and closer replacement, strike and weatherstrip adjustment — are completed the same visit when parts are on hand.",
      },
      {
        title: "Test & verify",
        description:
          "We cycle the door, confirm it latches and locks cleanly, and make sure it seals properly before we leave.",
      },
    ],
    pricing: [
      {
        item: "Standard service call & diagnosis",
        range: "$ (confirm)",
        note: "Illustrative — replace with your real trip/diagnostic fee.",
      },
      {
        item: "Alignment / hinge / strike adjustment",
        range: "$$ (confirm)",
      },
      {
        item: "Closer replacement",
        range: "$$–$$$ (confirm)",
        note: "Varies by closer type and door weight.",
      },
      {
        item: "Frame / jamb repair",
        range: "$$$ (confirm)",
        note: "Depends on material and extent of damage.",
      },
    ],
    faqs: [
      {
        q: "Can you repair my door the same day?",
        a: "Most common door repairs across Brooklyn and Manhattan are completed on the first visit when the needed parts are on hand. For specialty hardware or custom doors we confirm parts first, then schedule promptly.",
      },
      {
        q: "Should I repair or replace my door?",
        a: "If the door slab is sound and the problem is alignment, hinges, a closer, or hardware, a repair is usually the better value. If the slab is warped, rotted, or structurally damaged, replacement is often more cost-effective long term. We give you an honest recommendation on-site.",
      },
      {
        q: "Do you repair commercial and storefront doors?",
        a: "Yes. We repair residential doors as well as high-traffic commercial, office, storefront, and fire-rated doors. See our commercial storefront door page for details.",
      },
    ],
    related: ["door-installation", "emergency-door-repair", "commercial-storefront-doors"],
  },
  {
    slug: "door-installation",
    title: "Door Installation",
    shortTitle: "Door Installation",
    category: "door",
    icon: "DoorOpen",
    metaTitle: "Door Installation in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Professional door installation for homes and businesses in Brooklyn and Manhattan — entry doors, interior doors, storefront and commercial doors, done to spec.",
    answerFirst:
      "Downtown Doors & Security Systems NYC installs and replaces residential and commercial doors throughout Brooklyn and Manhattan — entry and interior doors for homes, and storefront, office, and fire-rated doors for businesses. Every install is measured, fitted, and hung so the door seals, swings, and locks correctly from day one.",
    heroTagline: "New doors, measured and hung to fit — not forced into place.",
    whatItIs: [
      "Door installation is more than hanging a slab: it's measuring the opening, checking the frame is square and plumb, fitting the door with correct clearances, and setting the hardware so the door seals against weather and locks securely.",
      "We install entry doors, interior doors, and specialty doors for homes, plus commercial, storefront, and fire-rated doors for businesses — replacing an existing door or fitting one into a new or modified opening.",
    ],
    whenNeeded: [
      "An existing door is beyond economical repair — warped, rotted, or badly damaged",
      "You're upgrading for security, energy efficiency, or appearance",
      "A break-in or accident damaged the door and frame",
      "A business needs a code-compliant or fire-rated door for an entry or exit",
      "You're renovating and need doors fitted to new openings",
    ],
    process: [
      {
        title: "Measure & assess the opening",
        description:
          "We confirm the opening is square and plumb and take precise measurements so the new door fits properly instead of being shimmed to fit.",
      },
      {
        title: "Recommend the right door",
        description:
          "We help you choose a door suited to the use, exposure, and any code requirements — including fire-rated assemblies where required.",
      },
      {
        title: "Install & hang",
        description:
          "We set the frame, hang the door with proper clearances, and fit locks, closers, and weatherstripping.",
      },
      {
        title: "Adjust, seal & verify",
        description:
          "We fine-tune the swing, confirm a clean seal and secure lock, and clean up the work area.",
      },
    ],
    pricing: [
      { item: "Interior door install", range: "$$ (confirm)" },
      { item: "Exterior / entry door install", range: "$$$ (confirm)" },
      {
        item: "Commercial / storefront door install",
        range: "$$$$ (confirm)",
        note: "Varies by door type, hardware, and code requirements.",
      },
    ],
    faqs: [
      {
        q: "Do you supply the door or do I?",
        a: "Either works. We can source and supply the door to spec, or install a door you've already purchased. We'll advise on the right type before anything is ordered.",
      },
      {
        q: "Can you install a fire-rated door for my business?",
        a: "Yes. We install code-compliant, fire-rated door assemblies for commercial and multi-unit buildings where they're required. We'll confirm the rating and hardware needed for your opening.",
      },
    ],
    related: ["door-repair", "commercial-storefront-doors", "locksmith-door-hardware"],
  },
  {
    slug: "emergency-door-repair",
    title: "Emergency Door Repair",
    shortTitle: "Emergency Repair",
    category: "door",
    emergency: true,
    icon: "AlarmClock",
    metaTitle: "Emergency Door Repair in Brooklyn & Manhattan | 24/7 Response",
    metaDescription:
      "Emergency door repair across Brooklyn and Manhattan — break-in damage, doors that won't lock or close, and storefront security restored fast.",
    answerFirst:
      "Downtown Doors & Security Systems NYC provides emergency door repair across Brooklyn and Manhattan when a door won't lock, won't close, or has been damaged in a break-in. We respond quickly to secure the opening first, then complete a proper repair — so your home or business isn't left exposed.",
    heroTagline: "Door won't lock or close? We secure it fast.",
    whatItIs: [
      "Emergency door repair is about getting a compromised door secure again quickly — after a break-in, an accident, vandalism, or a failure that leaves a door stuck open or unable to lock.",
      "For a business, an unsecured storefront is lost revenue and lost inventory. For a home, it's a safety risk. We prioritize making the opening secure, then restore the door to full working order.",
    ],
    whenNeeded: [
      "A break-in has damaged the door, frame, or lock",
      "The door won't lock or won't close and can't be left as-is",
      "A storefront gate, glass door, or entry has been forced or vandalized",
      "A closer or panic device has failed on a required exit door",
      "You're locked out or the lock has failed on an entry you can't leave unsecured",
    ],
    process: [
      {
        title: "Rapid response",
        description:
          "We prioritize emergency calls and head out to secure the opening as quickly as possible.",
      },
      {
        title: "Secure the opening",
        description:
          "First priority is making the door secure — so the property isn't left open or unlockable.",
      },
      {
        title: "Repair or temporary board-up",
        description:
          "We complete the repair on-site when possible, or secure the opening safely and schedule the permanent fix if specialty parts are needed.",
      },
    ],
    pricing: [
      {
        item: "Emergency response call",
        range: "$$ (confirm)",
        note: "Illustrative — set your real emergency/after-hours rate.",
      },
      {
        item: "Secure / board-up an opening",
        range: "$$–$$$ (confirm)",
      },
      {
        item: "Break-in lock & frame repair",
        range: "$$$ (confirm)",
      },
    ],
    faqs: [
      {
        q: "How fast can you get here for an emergency?",
        a: "Emergency calls are prioritized. Response time depends on your location in Brooklyn or Manhattan and current demand — call us and we'll give you a realistic ETA on the phone.",
      },
      {
        q: "Can you secure my storefront after a break-in?",
        a: "Yes. We secure forced or damaged storefronts, glass doors, and gates so your business isn't left exposed, then complete the full repair.",
      },
    ],
    related: ["door-repair", "commercial-storefront-doors", "locksmith-door-hardware"],
  },
  {
    slug: "commercial-storefront-doors",
    title: "Commercial & Storefront Doors",
    shortTitle: "Storefront Doors",
    category: "door",
    icon: "Store",
    metaTitle:
      "Commercial & Storefront Door Repair in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Storefront and commercial door repair and installation across Brooklyn and Manhattan — aluminum storefronts, glass doors, closers, panic bars, and pivots.",
    answerFirst:
      "Downtown Doors & Security Systems NYC repairs and installs commercial and storefront doors throughout Brooklyn and Manhattan — aluminum storefront systems, glass entrances, high-traffic office doors, closers, pivots, and panic hardware. We keep business entrances opening smoothly, closing securely, and meeting code.",
    heroTagline: "Keep your business entrance working — and secure.",
    whatItIs: [
      "Commercial and storefront doors take far more use than residential doors, so they wear differently — pivots, closers, and panic hardware are common failure points, and a stuck or unsecured entrance directly affects the business.",
      "We service aluminum storefront systems, glass entrances, hollow-metal and wood commercial doors, and the closers, panic bars, and locks that go with them — for retail, offices, restaurants, and mixed-use buildings.",
    ],
    whenNeeded: [
      "A storefront door won't close, latch, or lock at the end of the day",
      "The closer or pivot is worn, leaking, or slamming the door",
      "Panic/exit hardware is sticking or failing on a required exit",
      "Glass, frames, or thresholds are damaged and need repair",
      "You need code-compliant exit and fire-rated hardware for an inspection",
    ],
    process: [
      {
        title: "Assess the entrance system",
        description:
          "We evaluate the door, pivots or hinges, closer, threshold, and panic/exit hardware as a system.",
      },
      {
        title: "Scope & minimize downtime",
        description:
          "We plan the repair to keep your entrance usable and secure with as little disruption to business hours as possible.",
      },
      {
        title: "Repair or replace hardware",
        description:
          "We repair or replace closers, pivots, panic devices, locks, and thresholds, or install a new storefront door where needed.",
      },
      {
        title: "Verify security & code fit",
        description:
          "We confirm the door closes, latches, locks, and meets exit requirements before we finish.",
      },
    ],
    pricing: [
      { item: "Storefront service call & diagnosis", range: "$$ (confirm)" },
      { item: "Commercial closer / pivot replacement", range: "$$$ (confirm)" },
      {
        item: "Panic / exit hardware repair or replace",
        range: "$$$ (confirm)",
        note: "Varies by device and code requirements.",
      },
    ],
    faqs: [
      {
        q: "Do you work on aluminum storefront doors?",
        a: "Yes — aluminum storefront systems are one of the most common doors we service across Brooklyn and Manhattan, including closers, pivots, thresholds, and glass.",
      },
      {
        q: "Can you install panic bars and exit hardware to code?",
        a: "Yes. We install and repair panic/exit devices and fire-rated hardware so required exits meet code for inspections.",
      },
    ],
    related: ["door-repair", "emergency-door-repair", "security-systems-access-control"],
  },
  {
    slug: "locksmith-door-hardware",
    title: "Locksmith & Door Hardware",
    shortTitle: "Locksmith & Hardware",
    category: "locksmith",
    icon: "KeyRound",
    metaTitle:
      "Locksmith & Door Hardware in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Locksmith and door hardware services across Brooklyn and Manhattan — lock repair and rekeying, deadbolts, smart locks, master key systems, closers, and hinges.",
    answerFirst:
      "Downtown Doors & Security Systems NYC handles locksmith and door hardware work across Brooklyn and Manhattan — lock repair and rekeying, deadbolt and smart-lock installation, master key systems, and hardware like closers, hinges, and panic bars. We make sure your doors lock securely and the right people have access.",
    heroTagline: "Locks, keys, and hardware — installed and working securely.",
    whatItIs: [
      "This covers the lock and hardware side of a door: repairing or rekeying locks, installing deadbolts and smart locks, setting up master key systems for buildings, and replacing the closers, hinges, panic bars, and strikes that let a door function and lock properly.",
      "We serve homeowners, landlords, and businesses — from rekeying a single apartment after a tenant change to setting up a master key system for a multi-unit or commercial building.",
    ],
    whenNeeded: [
      "You've moved in, changed tenants, or lost a key and need locks rekeyed or replaced",
      "A lock is sticking, worn, or no longer secure",
      "You want to upgrade to a deadbolt, smart lock, or keypad entry",
      "A building needs a master key system so staff and tenants have the right access",
      "Door hardware — closer, hinges, panic bar, strike — needs replacing",
    ],
    process: [
      {
        title: "Assess access needs",
        description:
          "We look at who needs access to what, and the condition of the existing locks and hardware.",
      },
      {
        title: "Recommend locks & hardware",
        description:
          "We suggest the right locks and hardware for your security needs and budget — from standard deadbolts to smart locks and master key systems.",
      },
      {
        title: "Install & rekey",
        description:
          "We install, repair, or rekey locks and fit the associated hardware, then hand over keys or credentials.",
      },
    ],
    pricing: [
      { item: "Lock rekey (per lock)", range: "$ (confirm)" },
      { item: "Deadbolt / smart lock install", range: "$$ (confirm)" },
      {
        item: "Master key system",
        range: "$$$–$$$$ (confirm)",
        note: "Depends on number of doors and access tiers.",
      },
    ],
    faqs: [
      {
        q: "Can you rekey my locks instead of replacing them?",
        a: "In most cases, yes. If your existing locks are in good condition, rekeying is a faster, lower-cost way to make sure old keys no longer work — ideal after a move or tenant change.",
      },
      {
        q: "Do you install smart locks and keypad entry?",
        a: "Yes. We install smart locks, keypad, and keyless entry for homes and businesses, and can integrate them with access control where appropriate.",
      },
      {
        q: "Rekey vs. replace locks — which do I need?",
        a: "Rekeying changes the internal pins so old keys stop working, using your existing hardware — it's faster and cheaper, and the right call when the lock itself is in good shape. Replacing makes sense when the hardware is worn, damaged, or you want to upgrade to a higher-security or smart lock. We diagnose on site and recommend whichever actually solves the problem.",
      },
    ],
    related: ["door-repair", "security-systems-access-control", "door-installation"],
  },
  {
    slug: "security-systems-access-control",
    title: "Security Systems & Access Control",
    shortTitle: "Security & Access Control",
    category: "security",
    icon: "ShieldCheck",
    metaTitle:
      "Security Systems & Access Control in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Access control, intercoms, and camera systems for businesses and buildings across Brooklyn and Manhattan — keyless entry, cloud access control, and CCTV.",
    answerFirst:
      "Downtown Doors & Security Systems NYC designs and installs commercial security systems across Brooklyn and Manhattan — access control and keyless entry, intercom and buzzer systems, magnetic locks and electric strikes, and camera/CCTV systems. We help businesses and buildings control who gets in and keep a record of it.",
    heroTagline: "Control who gets in — and keep a record of it.",
    whatItIs: [
      "Security and access control is about managing entry to a building or space: who can open which doors, when, and with what credential — plus the cameras and intercoms that let you see and speak to visitors.",
      "We install access control and keyless entry (including cloud-based systems), intercom and buzzer entry, magnetic locks and electric strikes, and camera/CCTV systems for offices, retail, and multi-unit buildings.",
    ],
    whenNeeded: [
      "You want keyless or credential-based entry instead of physical keys",
      "A building needs intercom or buzzer entry for tenants and visitors",
      "You need to restrict access to certain doors, areas, or hours",
      "You want cameras to monitor and record entrances and common areas",
      "You're upgrading an old or failing access or intercom system",
    ],
    process: [
      {
        title: "Assess the site & access needs",
        description:
          "We map the doors, entry points, and who needs access to design a system that fits how the building actually operates.",
      },
      {
        title: "Design the system",
        description:
          "We recommend the right mix of access control, intercoms, locks, and cameras — scalable as needs grow.",
      },
      {
        title: "Install & integrate",
        description:
          "We install and wire the hardware, integrate it with your doors and locks, and configure credentials and permissions.",
      },
      {
        title: "Train & hand over",
        description:
          "We walk you through managing users, credentials, and footage so the system is genuinely usable day to day.",
      },
    ],
    pricing: [
      {
        item: "Access control per door",
        range: "$$$ (confirm)",
        note: "Varies by reader, lock type, and wiring.",
      },
      { item: "Intercom / buzzer entry system", range: "$$$ (confirm)" },
      {
        item: "Camera / CCTV system",
        range: "$$$–$$$$ (confirm)",
        note: "Depends on number of cameras and storage.",
      },
    ],
    faqs: [
      {
        q: "Do you install cloud-based access control?",
        a: "Yes. We install cloud-managed access control that lets you add or revoke credentials and view activity remotely, as well as traditional on-site systems.",
      },
      {
        q: "Can you integrate cameras, intercoms, and door locks together?",
        a: "Yes. We design access control, intercom entry, magnetic locks or electric strikes, and cameras to work together as one system for your building or business.",
      },
      {
        q: "Magnetic lock vs. electric strike — what's the difference?",
        a: "A magnetic lock holds the door shut with electromagnetic force and needs continuous power — strong holding force, but fails unlocked on a power cut (a fire-code consideration). An electric strike replaces part of the door frame and lets the existing mechanical lock or panic bar still work as a backup — more common for commercial doors that need a fail-secure option. We spec the right one for your door, code requirements, and access-control setup.",
      },
    ],
    related: ["locksmith-door-hardware", "commercial-storefront-doors", "door-installation"],
  },
  {
    slug: "fire-door-repair",
    title: "Fire Door Repair & Inspection",
    shortTitle: "Fire Doors",
    category: "door",
    icon: "Flame",
    metaTitle: "Fire Door Repair & Inspection in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Fire door repair, inspection, and code compliance for NYC buildings — self-closing hardware, gaps, labels, and latching fixed so doors pass FDNY and annual inspection.",
    answerFirst:
      "Downtown Doors & Security Systems NYC repairs and services fire-rated doors across Brooklyn and Manhattan so they meet code and pass inspection. We correct the common failures inspectors flag — doors that don't self-close and latch, oversized clearances, damaged or missing labels, painted-over hardware, and worn closers — on apartment, stairwell, and commercial fire doors.",
    heroTagline: "Fire doors that self-close, latch, and pass inspection.",
    whatItIs: [
      "A fire-rated door only protects an exit if it fully closes and latches on its own, seals within code clearances, and keeps its rated hardware and label intact. Over time closers weaken, gaps open up, hardware gets swapped, and labels get painted over — and the door fails inspection.",
      "We inspect and repair fire and stairwell doors in multi-unit residential and commercial buildings: resetting closers and coordinators, adjusting clearances, replacing rated hinges, latches, and seals, and correcting the deficiencies flagged in NFPA 80 annual fire-door inspections.",
    ],
    whenNeeded: [
      "An FDNY or annual NFPA 80 fire-door inspection flagged deficiencies",
      "A stairwell or apartment fire door won't self-close or latch",
      "Clearances (gaps) around the door exceed code",
      "The rated hardware, closer, or self-closing device is damaged or missing",
      "The fire label is painted over, damaged, or unreadable",
      "Hardware has been replaced with non-rated parts",
    ],
    process: [
      { title: "Inspect against code", description: "We check the door, frame, closer, latching, clearances, seals, and label against NFPA 80 fire-door requirements and note every deficiency." },
      { title: "Repair to rating", description: "We reset or replace closers and coordinators, adjust clearances, and fit rated hinges, latches, and seals so the assembly holds its fire rating." },
      { title: "Verify self-close & latch", description: "We cycle the door to confirm it self-closes and positively latches from any position, and that the label and rated hardware are intact." },
    ],
    pricing: [
      { item: "Fire-door inspection & report", range: "$$ (confirm)", note: "Per door or per building — set your rate." },
      { item: "Closer / self-closer reset or replace", range: "$$–$$$ (confirm)" },
      { item: "Clearance, seal & rated-hardware correction", range: "$$$ (confirm)" },
    ],
    faqs: [
      { q: "My building failed its fire-door inspection — can you fix the deficiencies?", a: "Yes. We correct the deficiencies NFPA 80 inspections flag — self-closing and latching, clearances, seals, rated hardware, and labels — so the doors pass on re-inspection." },
      { q: "Do all my fire doors need to self-close and latch?", a: "Yes — a fire door must self-close and positively latch on its own to do its job. A door propped, dragging, or that doesn't latch is a common and citable failure we correct." },
    ],
    related: ["door-repair", "commercial-storefront-doors", "door-closers"],
  },
  {
    slug: "panic-exit-devices",
    title: "Panic Bars & Exit Devices",
    shortTitle: "Panic Hardware",
    category: "door",
    icon: "LogOut",
    metaTitle: "Panic Bar & Exit Device Repair & Installation in NYC | Downtown Doors",
    metaDescription:
      "Panic bar and exit-device repair and installation across Brooklyn and Manhattan — crash bars, rim and mortise exit devices, and delayed-egress hardware to code.",
    answerFirst:
      "Downtown Doors & Security Systems NYC installs and repairs panic bars and exit devices across Brooklyn and Manhattan — the push-bar crash devices required on many commercial and assembly exits. We service rim, mortise, surface and concealed vertical-rod devices, and alarmed or delayed-egress exit hardware so required exits open instantly and meet code.",
    heroTagline: "Exits that open on a push — and pass code.",
    whatItIs: [
      "Panic (exit) hardware lets anyone leave through a door with a single push, no knowledge or key — required on many exits from assembly, commercial, and educational spaces. When the device sticks, dogs down, or won't latch, the exit is both a code violation and a security gap.",
      "We install and repair rim, mortise, and vertical-rod exit devices, panic bars, alarmed and delayed-egress hardware, and the strikes and closers that go with them, on storefront, stairwell, and commercial doors.",
    ],
    whenNeeded: [
      "A required exit needs code-compliant panic/exit hardware",
      "The push bar sticks, rattles, or no longer latches the door",
      "Vertical rods are out of adjustment and the door won't secure",
      "You need alarmed or delayed-egress hardware on a controlled exit",
      "An inspection flagged non-compliant or missing exit hardware",
    ],
    process: [
      { title: "Assess the exit & code path", description: "We confirm what the opening requires — device type, fire rating, and any alarm or delayed-egress function." },
      { title: "Install or repair the device", description: "We fit or rebuild the exit device, align the strikes and rods, and set the closer so it latches every time." },
      { title: "Test egress & security", description: "We verify the door opens instantly on a push, latches and locks from outside, and meets the exit requirement." },
    ],
    pricing: [
      { item: "Exit-device service & adjustment", range: "$$ (confirm)" },
      { item: "Panic bar / rim device replacement", range: "$$$ (confirm)" },
      { item: "Alarmed / delayed-egress device", range: "$$$–$$$$ (confirm)" },
    ],
    faqs: [
      { q: "Do you install alarmed and delayed-egress exit devices?", a: "Yes. We install alarmed exit bars and delayed-egress hardware where you need to control an exit while still meeting egress code, and confirm the configuration for your occupancy." },
      { q: "My panic bar won't latch the door — can you fix it?", a: "Yes — a panic bar that won't latch is usually a strike, rod, or closer adjustment or a worn device. We repair or replace it so the exit both opens on a push and secures when closed." },
    ],
    related: ["commercial-storefront-doors", "fire-door-repair", "door-closers"],
  },
  {
    slug: "door-closers",
    title: "Door Closer Repair & Installation",
    shortTitle: "Door Closers",
    category: "door",
    icon: "Wrench",
    metaTitle: "Door Closer Repair & Installation in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Door closer repair and installation across NYC — surface, concealed, and overhead closers adjusted or replaced so doors close fully, latch, and meet fire code.",
    answerFirst:
      "Downtown Doors & Security Systems NYC repairs and installs door closers across Brooklyn and Manhattan — the surface, concealed, and overhead devices that pull a door shut. We fix closers that slam, drift, leak oil, or no longer latch, and set the closing and latching speed so apartment, office, storefront, and fire doors close fully and securely.",
    heroTagline: "Doors that close fully — no slam, no drift.",
    whatItIs: [
      "A door closer controls how a door shuts: its speed, its final latch, and its back-check. When it fails, doors slam, drift open, don't latch, or leak hydraulic fluid — and on a fire door, a failed closer is a code violation.",
      "We service surface-mounted, concealed, overhead-concealed, and floor closers on residential, commercial, and fire-rated doors, adjusting closing and latching speed or replacing the closer to match the door's weight and use.",
    ],
    whenNeeded: [
      "The door slams shut or closes too hard",
      "The door drifts open or no longer closes fully",
      "The closer leaks oil or feels loose",
      "The door won't latch because it closes too slowly",
      "A fire or exit door's closer needs to meet code",
    ],
    process: [
      { title: "Diagnose the closer & door", description: "We check the closer, arm, mounting, and the door's weight and swing to find the real cause." },
      { title: "Adjust or replace", description: "We tune closing, latching, and back-check speed, or fit the correct-size closer for the door and its use." },
      { title: "Verify close & latch", description: "We cycle the door to confirm it closes smoothly, latches fully, and — on fire doors — self-closes to code." },
    ],
    pricing: [
      { item: "Closer adjustment / service", range: "$ (confirm)" },
      { item: "Surface closer replacement", range: "$$ (confirm)" },
      { item: "Concealed / overhead / floor closer", range: "$$$ (confirm)" },
    ],
    faqs: [
      { q: "Can you just adjust my closer instead of replacing it?", a: "Often, yes. If the closer is sound, we adjust the closing, latching, and back-check speed. If it's leaking or worn out, replacement is the reliable fix — we'll tell you which on site." },
      { q: "Do you install concealed and overhead closers?", a: "Yes. We install surface, concealed, overhead-concealed, and floor closers, sized to the door's weight and use, including fire-rated closers where required." },
    ],
    related: ["door-repair", "commercial-storefront-doors", "fire-door-repair"],
  },
  {
    slug: "security-gates",
    title: "Security Gates & Roll-Down Gates",
    shortTitle: "Security Gates",
    category: "security",
    icon: "Store",
    metaTitle: "Security Gate & Roll-Down Gate Repair in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Roll-down and security gate repair and installation across NYC — rolling steel gates, scissor gates, motors, springs, locks, and open-grille storefront gates.",
    answerFirst:
      "Downtown Doors & Security Systems NYC repairs and installs security gates and roll-down gates across Brooklyn and Manhattan — rolling steel and open-grille storefront gates, scissor gates, their motors, springs, and locks. We keep the gate that protects your storefront rolling smoothly and locking securely.",
    heroTagline: "Roll-down gates that open smooth and lock tight.",
    whatItIs: [
      "A storefront's roll-down or scissor gate is its first line of security — and when the motor, spring, track, or lock fails, the gate jams open, jams shut, or won't secure at closing.",
      "We repair and install rolling steel gates, open-grille gates, and scissor gates, plus their tension springs, motors, chains, tracks, and slide-bolt or cylinder locks, for retail and commercial storefronts.",
    ],
    whenNeeded: [
      "A roll-down gate is stuck open or stuck shut",
      "The gate motor, chain, or spring has failed",
      "The gate is off its track or dragging",
      "The gate lock won't secure at closing time",
      "You need a new security gate for a storefront",
    ],
    process: [
      { title: "Assess the gate system", description: "We check the curtain or grille, springs, motor, tracks, and locks to find why it's binding or won't secure." },
      { title: "Repair or replace", description: "We adjust or replace springs, motors, tracks, and locks, or install a new gate sized to the opening." },
      { title: "Test open, close & lock", description: "We cycle the gate to confirm it rolls smoothly and locks securely at closing." },
    ],
    pricing: [
      { item: "Gate service & diagnosis", range: "$$ (confirm)" },
      { item: "Spring / lock / track repair", range: "$$–$$$ (confirm)" },
      { item: "Motor replacement / new gate", range: "$$$$ (confirm)" },
    ],
    faqs: [
      { q: "My storefront gate is stuck — can you get it open today?", a: "A gate stuck open or shut is a priority — we respond to get your storefront secure and operating, and complete any larger repair (spring, motor, track) promptly." },
      { q: "Do you install new roll-down security gates?", a: "Yes. We install rolling steel, open-grille, and scissor gates sized to your storefront, with the motor and locking you need." },
    ],
    related: ["commercial-storefront-doors", "emergency-door-repair", "security-systems-access-control"],
  },
  {
    slug: "intercom-systems",
    title: "Intercom & Buzzer Systems",
    shortTitle: "Intercoms",
    category: "security",
    icon: "Radio",
    metaTitle: "Intercom & Buzzer System Repair & Installation in NYC | Downtown Doors",
    metaDescription:
      "Intercom and buzzer system repair and installation across Brooklyn and Manhattan — audio and video intercoms, door-release, and smartphone entry for buildings.",
    answerFirst:
      "Downtown Doors & Security Systems NYC installs and repairs intercom and buzzer entry systems across Brooklyn and Manhattan — audio and video intercoms for apartment buildings, offices, and multi-unit properties, integrated with electric strikes and maglocks so tenants and visitors can be seen, spoken to, and let in.",
    heroTagline: "See, speak to, and buzz in visitors — reliably.",
    whatItIs: [
      "An intercom is how a building controls its front door: tenants answer, see or hear the visitor, and release the door. When the panel, handset, wiring, or door-release fails, tenants can't let anyone in — or the door won't secure.",
      "We install and repair audio and video intercoms, lobby panels, in-unit stations, and buzzer entry, and can upgrade older systems to modern intercoms that release the door from a smartphone.",
    ],
    whenNeeded: [
      "The buzzer or door-release stopped working",
      "A lobby panel or in-unit handset is dead",
      "Tenants can't hear or see visitors",
      "You want video entry or smartphone door-release",
      "An old intercom system needs replacing",
    ],
    process: [
      { title: "Diagnose the system", description: "We trace the panel, wiring, handsets, and electric strike or maglock to find where entry is breaking down." },
      { title: "Repair or upgrade", description: "We repair the existing system or install a modern audio/video intercom with the door-release and features you want." },
      { title: "Test tenant entry", description: "We confirm every station calls, answers, and releases the door, and that the door secures again after." },
    ],
    pricing: [
      { item: "Intercom / buzzer service call", range: "$$ (confirm)" },
      { item: "Panel or handset repair / replace", range: "$$–$$$ (confirm)" },
      { item: "New audio/video intercom system", range: "$$$–$$$$ (confirm)" },
    ],
    faqs: [
      { q: "Can you fix the buzzer that won't open my building's door?", a: "Yes — a buzzer that won't release the door is a common repair. We diagnose the panel, wiring, and electric strike or maglock and restore entry." },
      { q: "Can I get a video intercom that works on my phone?", a: "Yes. We install modern video intercoms that let residents see and release visitors from a smartphone, alongside traditional handset systems." },
    ],
    related: ["security-systems-access-control", "cctv-camera-systems", "locksmith-door-hardware"],
  },
  {
    slug: "cctv-camera-systems",
    title: "Security Cameras & CCTV",
    shortTitle: "Cameras & CCTV",
    category: "security",
    icon: "Camera",
    metaTitle: "Security Camera & CCTV Installation in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Security camera and CCTV installation across NYC — HD and IP cameras, NVR recording, remote viewing, and entrance monitoring for homes, businesses, and buildings.",
    answerFirst:
      "Downtown Doors & Security Systems NYC installs security camera and CCTV systems across Brooklyn and Manhattan — HD and IP cameras with recording and remote viewing for homes, businesses, and multi-unit buildings. We cover entrances, common areas, and blind spots, and integrate cameras with your door and access-control system.",
    heroTagline: "See and record every entrance — from anywhere.",
    whatItIs: [
      "A camera system lets you monitor and record who comes and goes — at the front door, in the lobby, at the loading area, and over common spaces — and review footage after an incident.",
      "We install HD and IP cameras, network video recorders, and remote-viewing apps, and place cameras to cover entrances and eliminate blind spots for retail, offices, and residential buildings — and tie them into intercom and access control where it helps.",
    ],
    whenNeeded: [
      "You want to monitor and record your entrances and common areas",
      "You need to review footage after theft, vandalism, or a dispute",
      "You want to view cameras remotely from your phone",
      "An old analog system needs upgrading to HD/IP",
      "You want cameras tied to your intercom and access control",
    ],
    process: [
      { title: "Plan camera coverage", description: "We map entrances, common areas, and blind spots to place cameras where they actually help." },
      { title: "Install & configure", description: "We mount and wire cameras, set up recording, and configure remote viewing on your devices." },
      { title: "Walk through & hand over", description: "We confirm coverage and recording, and show you how to review and export footage." },
    ],
    pricing: [
      { item: "Per-camera install", range: "$$ (confirm)" },
      { item: "Recorder (NVR) & storage", range: "$$$ (confirm)" },
      { item: "Full building camera system", range: "$$$$ (confirm)" },
    ],
    faqs: [
      { q: "Can I view my cameras from my phone?", a: "Yes. We set up remote viewing so you can watch live and recorded footage from your phone or computer, anywhere." },
      { q: "Can you integrate cameras with my intercom and door locks?", a: "Yes. We tie cameras together with intercom entry and access control so you can see, speak to, and let in visitors — and have it all recorded." },
    ],
    related: ["security-systems-access-control", "intercom-systems", "security-gates"],
  },
  {
    slug: "master-key-systems",
    title: "Master Key Systems",
    shortTitle: "Master Key Systems",
    category: "locksmith",
    icon: "KeyRound",
    metaTitle: "Master Key Systems in Brooklyn & Manhattan | Downtown Doors",
    metaDescription:
      "Master key system design and installation across NYC — one key for management, individual keys per door, and clear access tiers for buildings and businesses.",
    answerFirst:
      "Downtown Doors & Security Systems NYC designs and installs master key systems across Brooklyn and Manhattan — so building management or ownership carries one key that opens every door, while each tenant, office, or area keeps its own key. We set up the access hierarchy for multi-unit residential, commercial, and mixed-use buildings.",
    heroTagline: "One key for management — the right key for everyone else.",
    whatItIs: [
      "A master key system organizes access: a master key opens many doors, sub-master keys open a floor or wing, and each door keeps its own change key. It replaces a ring of dozens of keys with a clean, controlled hierarchy.",
      "We design and pin master key systems for apartment buildings, offices, and commercial properties, plan the access tiers, and rekey or install the cylinders — with a key schedule so you know exactly which key opens what.",
    ],
    whenNeeded: [
      "Management or staff needs one key for many doors",
      "You're tired of carrying a ring of individual keys",
      "You need clear access tiers by floor, wing, or role",
      "Staff or tenant turnover means you need controlled rekeying",
      "You're setting up a new building's key system from scratch",
    ],
    process: [
      { title: "Map the access hierarchy", description: "We work out who should open which doors and design the master, sub-master, and change-key structure to match." },
      { title: "Pin & install cylinders", description: "We rekey or install the cylinders to the system and cut the keys per the schedule." },
      { title: "Deliver the key schedule", description: "We hand over a clear key schedule so you always know which key opens what, and can control future copies." },
    ],
    pricing: [
      { item: "Master key system design", range: "$$$ (confirm)", note: "Scales with number of doors and tiers." },
      { item: "Per-cylinder rekey to system", range: "$$ (confirm)" },
      { item: "Full building master key system", range: "$$$$ (confirm)" },
    ],
    faqs: [
      { q: "Can one key open every door in my building?", a: "Yes — that's exactly what a master key system does. Management carries a master that opens every door, while each unit or office keeps its own key that only opens theirs." },
      { q: "Can you control who's able to copy keys?", a: "Yes. We can set up restricted or patented keyways so keys can't be duplicated at a hardware store, and provide a key schedule to track issued keys." },
    ],
    related: ["locksmith-door-hardware", "security-systems-access-control", "door-installation"],
  },
];

// Locksmith & security lead (the core, subcontractor-free revenue) — door
// services follow. Stable sort preserves each category's original ordering.
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
