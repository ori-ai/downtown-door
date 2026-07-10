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

export const services: Service[] = [
  {
    slug: "door-repair",
    title: "Door Repair",
    shortTitle: "Door Repair",
    category: "door",
    icon: "Wrench",
    metaTitle: "Door Repair in Brooklyn & Manhattan | Downtown Door Repair",
    metaDescription:
      "Fast, reliable door repair for homes and businesses across Brooklyn and Manhattan — misaligned doors, damaged frames, failing closers, and hardware.",
    answerFirst:
      "Downtown Door Repair & Security repairs residential and commercial doors across Brooklyn and Manhattan — fixing misaligned or sticking doors, damaged frames and jambs, failing hinges and closers, and worn hardware. Most repairs are diagnosed on-site and completed the same visit whenever parts are on hand.",
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
    metaTitle: "Door Installation in Brooklyn & Manhattan | Downtown Door Repair",
    metaDescription:
      "Professional door installation for homes and businesses in Brooklyn and Manhattan — entry doors, interior doors, storefront and commercial doors, done to spec.",
    answerFirst:
      "Downtown Door Repair & Security installs and replaces residential and commercial doors throughout Brooklyn and Manhattan — entry and interior doors for homes, and storefront, office, and fire-rated doors for businesses. Every install is measured, fitted, and hung so the door seals, swings, and locks correctly from day one.",
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
      "Downtown Door Repair & Security provides emergency door repair across Brooklyn and Manhattan when a door won't lock, won't close, or has been damaged in a break-in. We respond quickly to secure the opening first, then complete a proper repair — so your home or business isn't left exposed.",
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
      "Commercial & Storefront Door Repair in Brooklyn & Manhattan | Downtown Door Repair",
    metaDescription:
      "Storefront and commercial door repair and installation across Brooklyn and Manhattan — aluminum storefronts, glass doors, closers, panic bars, and pivots.",
    answerFirst:
      "Downtown Door Repair & Security repairs and installs commercial and storefront doors throughout Brooklyn and Manhattan — aluminum storefront systems, glass entrances, high-traffic office doors, closers, pivots, and panic hardware. We keep business entrances opening smoothly, closing securely, and meeting code.",
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
      "Locksmith & Door Hardware in Brooklyn & Manhattan | Downtown Door Repair",
    metaDescription:
      "Locksmith and door hardware services across Brooklyn and Manhattan — lock repair and rekeying, deadbolts, smart locks, master key systems, closers, and hinges.",
    answerFirst:
      "Downtown Door Repair & Security handles locksmith and door hardware work across Brooklyn and Manhattan — lock repair and rekeying, deadbolt and smart-lock installation, master key systems, and hardware like closers, hinges, and panic bars. We make sure your doors lock securely and the right people have access.",
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
      "Security Systems & Access Control in Brooklyn & Manhattan | Downtown Door Repair",
    metaDescription:
      "Access control, intercoms, and camera systems for businesses and buildings across Brooklyn and Manhattan — keyless entry, cloud access control, and CCTV.",
    answerFirst:
      "Downtown Door Repair & Security designs and installs commercial security systems across Brooklyn and Manhattan — access control and keyless entry, intercom and buzzer systems, magnetic locks and electric strikes, and camera/CCTV systems. We help businesses and buildings control who gets in and keep a record of it.",
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
    ],
    related: ["locksmith-door-hardware", "commercial-storefront-doors", "door-installation"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories: Record<ServiceCategory, string> = {
  door: "Door Services",
  locksmith: "Locksmith & Hardware",
  security: "Security & Access Control",
};
