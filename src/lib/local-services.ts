/**
 * LOCAL SERVICE KEYWORDS — programmatic SEO.
 *
 * Each entry becomes a page for every published neighborhood, at
 *   /service-areas/[hub]/[city]/[service]
 * e.g. /service-areas/brooklyn/williamsburg/commercial-door-repair
 *      → "Commercial Door Repair in Williamsburg, Brooklyn"
 *
 * Content is deliberately NOT thin/duplicate: each page combines (a) genuinely
 * keyword-specific copy written per service angle, with (b) the neighborhood's
 * own unique localContext from service-areas.ts. `{n}` = neighborhood name,
 * `{b}` = borough/hub name — interpolated at render time.
 *
 * Honesty gates (same as services.ts): no fabricated certifications, guarantees,
 * counts, or invented past jobs.
 */

import type { ServiceCategory } from "@/lib/services";

export interface LocalService {
  slug: string;
  /** Keyword, Title Case — e.g. "Commercial Door Repair". */
  name: string;
  category: ServiceCategory;
  emergency?: boolean;
  /** Parent service slug (for "full service details" link + related). */
  parent: string;
  /** Answer-first opening. Interpolates {n} (neighborhood) and {b} (borough). */
  intro: string;
  /** 3–5 keyword-specific bullets (what's covered / signs you need it). */
  points: string[];
  /** 2 keyword + location specific FAQs. */
  faqs: { q: string; a: string }[];
}

export const localServices: LocalService[] = [
  {
    slug: "door-repair",
    name: "Door Repair",
    category: "door",
    parent: "door-repair",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC provides door repair in {n}, {b} — fixing sticking and sagging doors, damaged frames and jambs, worn hinges, and failing closers for homes and businesses. Most repairs are diagnosed on site and finished the same visit when parts are on hand.",
    points: [
      "Doors that drag, stick, or won't latch without lifting or slamming",
      "Damaged or racked frames and split jambs, including after a break-in",
      "Loose, squealing, or pulling hinges and misaligned strike plates",
      "Closers that slam, leak, or no longer pull the door shut",
    ],
    faqs: [
      { q: "Can you repair my door the same day in {n}?", a: "Most common door repairs in {n} are completed on the first visit when the needed parts are on hand. For specialty hardware we confirm parts first, then schedule promptly." },
      { q: "Do you repair both home and business doors in {n}?", a: "Yes — we repair residential entry, apartment, and interior doors as well as high-traffic commercial and storefront doors throughout {n} and the rest of {b}." },
    ],
  },
  {
    slug: "door-installation",
    name: "Door Installation",
    category: "door",
    parent: "door-installation",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC installs and replaces doors in {n}, {b} — entry and interior doors for homes, and commercial, office, and fire-rated doors for businesses. Every door is measured, fitted, and hung so it seals, swings, and locks correctly from day one.",
    points: [
      "Entry and interior door replacement for homes and apartments",
      "Commercial, office, and fire-rated door installation for businesses",
      "Precise measuring so the door fits the opening — not shimmed to fit",
      "Locks, closers, weatherstripping, and hardware set on install",
    ],
    faqs: [
      { q: "Do you supply the door or do I in {n}?", a: "Either works. We can source and supply a door to spec, or install one you've already purchased in {n}. We advise on the right type before anything is ordered." },
      { q: "Can you install a fire-rated door for my {n} business?", a: "Yes. We install code-compliant, fire-rated door assemblies for commercial and multi-unit buildings in {n} where they're required, and confirm the rating and hardware for your opening." },
    ],
  },
  {
    slug: "emergency-door-repair",
    name: "Emergency Door Repair",
    category: "door",
    emergency: true,
    parent: "emergency-door-repair",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC provides emergency door repair in {n}, {b} — when a door won't lock, won't close, or has been damaged in a break-in. We move fast to secure the opening first, then complete a proper repair so your {n} home or business isn't left exposed.",
    points: [
      "Break-in damage to the door, frame, or lock",
      "A door that won't lock or close and can't be left as-is",
      "A forced or vandalized storefront gate, glass door, or entry",
      "A failed closer or panic device on a required exit door",
    ],
    faqs: [
      { q: "How fast can you reach {n} for an emergency?", a: "Emergency calls are prioritized. Response time depends on where you are in {n} and current demand — call and we'll give you a realistic ETA on the phone." },
      { q: "Can you secure my {n} storefront after a break-in?", a: "Yes. We secure forced or damaged storefronts, glass doors, and gates in {n} so your business isn't left exposed, then complete the full repair." },
    ],
  },
  {
    slug: "commercial-door-repair",
    name: "Commercial Door Repair",
    category: "door",
    parent: "commercial-storefront-doors",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC repairs commercial doors in {n}, {b} — high-traffic office, retail, and building entrances, hollow-metal and aluminum doors, and the closers, pivots, and panic hardware that go with them. We keep {n} business entrances opening smoothly, closing securely, and meeting code.",
    points: [
      "High-use office, retail, and building-entrance doors",
      "Worn or leaking commercial closers and pivots",
      "Sticking or failing panic/exit hardware on required exits",
      "Damaged thresholds, frames, and hollow-metal doors",
    ],
    faqs: [
      { q: "Can you minimize downtime for my {n} business?", a: "Yes — we scope commercial repairs to keep your {n} entrance usable and secure with as little disruption to business hours as possible." },
      { q: "Do you repair panic bars and exit devices in {n}?", a: "Yes. We repair and replace panic/exit hardware and fire-rated devices in {n} so required exits meet code for inspections." },
    ],
  },
  {
    slug: "commercial-door-installation",
    name: "Commercial Door Installation",
    category: "door",
    parent: "door-installation",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC installs commercial doors in {n}, {b} — office, retail, hollow-metal, and fire-rated door assemblies fitted to code, with the closers, panic hardware, and locks a business entrance needs. Doors are measured and hung so they seal and secure from day one.",
    points: [
      "Office, retail, and building-entrance door replacement",
      "Fire-rated and code-compliant door assemblies",
      "Commercial closers, panic hardware, and locks fitted on install",
      "Openings measured square and plumb for a proper fit",
    ],
    faqs: [
      { q: "Do you install fire-rated commercial doors in {n}?", a: "Yes. We install code-compliant, fire-rated commercial door assemblies in {n} and confirm the rating and hardware required for your opening and inspection." },
      { q: "Can you replace a storefront or office door in {n} with minimal disruption?", a: "Yes — we plan {n} commercial installs to keep the entrance secure and limit downtime during business hours." },
    ],
  },
  {
    slug: "storefront-door-repair",
    name: "Storefront Door Repair",
    category: "door",
    parent: "commercial-storefront-doors",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC repairs storefront doors in {n}, {b} — aluminum storefront systems, glass entrances, pivots, closers, and thresholds for retail, restaurants, and offices. We keep your {n} storefront opening smoothly and locking securely at the end of the day.",
    points: [
      "Aluminum storefront systems and glass entrances",
      "Worn pivots, closers, and sagging or dragging storefront doors",
      "Doors that won't latch or lock at closing time",
      "Damaged thresholds, frames, and glass",
    ],
    faqs: [
      { q: "Do you work on aluminum storefront doors in {n}?", a: "Yes — aluminum storefront systems are one of the most common doors we service in {n}, including closers, pivots, thresholds, and glass." },
      { q: "My {n} storefront won't lock at night — can you fix it fast?", a: "Yes. A storefront that won't secure is a priority — we repair the lock, closer, or pivot in {n} so your business is secure at closing, and complete any larger fix promptly." },
    ],
  },
  {
    slug: "storefront-door-installation",
    name: "Storefront Door Installation",
    category: "door",
    parent: "commercial-storefront-doors",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC installs storefront doors in {n}, {b} — aluminum storefront entrances, glass doors, and the closers, pivots, and panic hardware retail and restaurant entrances need. Each {n} storefront is fitted to seal, swing, and lock correctly from day one.",
    points: [
      "New aluminum storefront systems and glass entrances",
      "Commercial closers, pivots, and panic/exit hardware",
      "Code-compliant exit hardware for inspections",
      "Precise fit so the entrance seals and secures properly",
    ],
    faqs: [
      { q: "Can you install a new storefront entrance for my {n} shop?", a: "Yes. We install aluminum storefront systems and glass entrances in {n}, with the closers, pivots, and locks a high-traffic retail door needs." },
      { q: "Will the new storefront door meet code in {n}?", a: "Yes — we fit code-compliant exit and panic hardware on {n} storefront installs so required exits pass inspection." },
    ],
  },
  {
    slug: "door-closer-installation",
    name: "Door Closer Installation",
    category: "door",
    parent: "commercial-storefront-doors",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC installs and repairs door closers in {n}, {b} — surface and concealed closers for apartment, office, storefront, and fire-rated doors. We set the closing speed and latch so the door shuts fully and securely every time, and meets code where required.",
    points: [
      "Surface, concealed, and overhead door closers",
      "Closers that slam, leak oil, or no longer pull the door shut",
      "Correct closing and latching speed adjustment",
      "Fire-door closers set to meet code",
    ],
    faqs: [
      { q: "My door slams or won't close fully in {n} — is that the closer?", a: "Usually, yes. A closer that slams, drifts, or leaks needs adjustment or replacement — we install and tune closers in {n} so the door shuts fully and securely." },
      { q: "Do you install fire-door closers to code in {n}?", a: "Yes. We install and set fire-rated door closers in {n} so required fire and exit doors close and latch as code requires." },
    ],
  },
  {
    slug: "intercom-repair",
    name: "Intercom Repair",
    category: "security",
    parent: "security-systems-access-control",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC repairs intercom and buzzer entry systems in {n}, {b} — audio and video intercoms for apartment buildings, offices, and multi-unit properties. We get tenant entry, door-release, and buzzers working again so residents and visitors can get in.",
    points: [
      "Audio and video intercoms and buzzer entry systems",
      "Broken door-release, dead handsets, or failed lobby panels",
      "Multi-unit tenant entry that's stopped working",
      "Aging systems that need repair or partial replacement",
    ],
    faqs: [
      { q: "Can you repair my {n} building's intercom or buzzer?", a: "Yes. We repair audio and video intercom and buzzer entry in {n} — from a single dead handset to a failed lobby panel or door-release." },
      { q: "Do you fix the door-release / buzzer that won't open the door in {n}?", a: "Yes — a buzzer that won't release the door is a common {n} repair. We diagnose the panel, wiring, and electric strike or maglock and restore entry." },
    ],
  },
  {
    slug: "intercom-installation",
    name: "Intercom Installation",
    category: "security",
    parent: "security-systems-access-control",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC installs intercom and buzzer entry systems in {n}, {b} — audio and video intercoms for apartment buildings, offices, and multi-unit properties, integrated with electric strikes or maglocks for secure tenant and visitor entry.",
    points: [
      "Audio and video intercom and buzzer entry systems",
      "Apartment, office, and multi-unit tenant entry",
      "Integration with electric strikes and magnetic locks",
      "Modern systems with remote or smartphone door-release",
    ],
    faqs: [
      { q: "Can you install a video intercom for my {n} building?", a: "Yes. We install audio and video intercom and buzzer entry in {n}, integrated with your door hardware so tenants can see and release visitors securely." },
      { q: "Do you offer smartphone / remote entry intercoms in {n}?", a: "Yes — we install modern intercoms in {n} that let residents answer and release the door from a smartphone, alongside traditional handset systems." },
    ],
  },
  {
    slug: "locksmith",
    name: "Locksmith",
    category: "locksmith",
    parent: "locksmith-door-hardware",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC provides locksmith service in {n}, {b} — lock repair and rekeying, deadbolt and smart-lock installation, and door hardware for homes and businesses. We make sure your {n} doors lock securely and the right people have access.",
    points: [
      "Lock repair, rekeying, and replacement",
      "Deadbolt, smart-lock, and keypad-entry installation",
      "Rekeying after a move, tenant change, or lost key",
      "Door hardware — strikes, handlesets, and closers",
    ],
    faqs: [
      { q: "Can you rekey my {n} locks instead of replacing them?", a: "In most cases, yes. If your existing locks are in good condition, rekeying in {n} is a faster, lower-cost way to make sure old keys no longer work — ideal after a move or tenant change." },
      { q: "Do you install smart locks in {n}?", a: "Yes. We install smart locks, keypad, and keyless entry for {n} homes and businesses, and can integrate them with access control where appropriate." },
    ],
  },
  {
    slug: "commercial-locksmith",
    name: "Commercial Locksmith",
    category: "locksmith",
    parent: "locksmith-door-hardware",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC is a commercial locksmith in {n}, {b} — master key systems, high-security and commercial-grade locks, panic hardware, and access control for offices, retail, and multi-unit buildings. We control who gets into your {n} property and keep it secure.",
    points: [
      "Master key systems for multi-unit and commercial buildings",
      "Commercial-grade and high-security lock installation",
      "Panic/exit hardware and door closers",
      "Rekeying and lock changes after staff or tenant turnover",
    ],
    faqs: [
      { q: "Can you set up a master key system for my {n} building?", a: "Yes. We design and install master key systems in {n} so staff and tenants have the right access to the right doors, with a clear key hierarchy." },
      { q: "Do you install high-security commercial locks in {n}?", a: "Yes — we install commercial-grade and high-security locks and panic hardware for {n} offices, retail, and buildings, to code where required." },
    ],
  },
  {
    slug: "lock-change",
    name: "Lock Change & Rekey",
    category: "locksmith",
    parent: "locksmith-door-hardware",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC changes and rekeys locks in {n}, {b} — after a move, a tenant change, a lost key, or a break-in. We rekey or replace your {n} locks quickly so old keys no longer work and your door is secure.",
    points: [
      "Full lock changes and same-lock rekeying",
      "After a move, tenant turnover, lost key, or break-in",
      "Deadbolt and handleset upgrades",
      "Matching multiple doors to one key where wanted",
    ],
    faqs: [
      { q: "Should I change or rekey my locks in {n}?", a: "If the locks are in good shape, rekeying in {n} is faster and cheaper and makes old keys useless. If they're worn or you want an upgrade, a full lock change is the better call — we advise on site." },
      { q: "Can you change my {n} locks the same day?", a: "In most cases, yes. Standard lock changes and rekeys in {n} are completed on the first visit when stock hardware fits your door." },
    ],
  },
  {
    slug: "access-control-installation",
    name: "Access Control Installation",
    category: "security",
    parent: "security-systems-access-control",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC installs access control and keyless entry systems in {n}, {b} — key fob, keypad, and cloud-based credential systems that replace physical keys with managed entry. We wire it into your {n} doors' electric strikes or maglocks so you control exactly who gets in, and when.",
    points: [
      "Key fob, keypad, and mobile-credential entry systems",
      "Cloud-based access control managed remotely by property or business owners",
      "Integration with electric strikes, maglocks, and existing door hardware",
      "Scheduled or restricted access by door, tenant, or time of day",
    ],
    faqs: [
      { q: "Can you set up keyless entry for my {n} building or office?", a: "Yes. We install keypad, fob, or mobile-credential access control in {n} and integrate it with your doors' locking hardware so keys can be added, removed, or restricted without rekeying." },
      { q: "Can I manage access control for my {n} property remotely?", a: "Yes — we install cloud-based systems in {n} that let you add or revoke credentials, see entry activity, and manage multiple doors from a phone or computer." },
    ],
  },
  {
    slug: "security-camera-installation",
    name: "Security Camera Installation",
    category: "security",
    parent: "cctv-camera-systems",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC installs security camera and CCTV systems in {n}, {b} — HD and IP cameras with recording and remote viewing for homes, businesses, and multi-unit buildings. We place cameras to cover entrances and blind spots around your {n} property and can tie them into your intercom or access control.",
    points: [
      "HD and IP camera installation with NVR recording",
      "Coverage of entrances, common areas, and blind spots",
      "Remote viewing of live and recorded footage from a phone or computer",
      "Integration with existing intercom and access-control systems",
    ],
    faqs: [
      { q: "Can you install security cameras at my {n} home or business?", a: "Yes. We install HD/IP camera systems in {n}, plan coverage for your entrances and blind spots, and set up an NVR for recording." },
      { q: "Can I view my {n} property's cameras from my phone?", a: "Yes — we configure remote viewing so you can check live or recorded footage from your {n} property on a phone or computer from anywhere." },
    ],
  },
  {
    slug: "security-gate-repair",
    name: "Security Gate Repair",
    category: "security",
    parent: "security-gates",
    intro:
      "Downtown Doors, Locksmith & Security Systems NYC repairs roll-down and security gates in {n}, {b} — rolling steel and open-grille storefront gates, scissor gates, and their motors, springs, tracks, and locks. We get a stuck or failing {n} storefront gate rolling smoothly and locking securely again.",
    points: [
      "Roll-down gates stuck open, stuck shut, or off their track",
      "Failed or worn gate motors, chains, and tension springs",
      "Gate locks that won't secure at closing time",
      "Rolling steel, open-grille, and scissor gate repair",
    ],
    faqs: [
      { q: "My {n} storefront gate is stuck — how fast can you help?", a: "A gate stuck open or shut is a priority call — we work to get your {n} storefront secure and operating, then complete any larger spring, motor, or track repair promptly." },
      { q: "Do you repair gate motors and springs in {n}?", a: "Yes. We repair and replace gate motors, chains, tension springs, tracks, and locks for storefronts throughout {n} and the rest of {b}." },
    ],
  },
];

export function getLocalService(slug: string): LocalService | undefined {
  return localServices.find((s) => s.slug === slug);
}
