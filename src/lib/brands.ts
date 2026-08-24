/**
 * Hardware & tool SUPPLIER brands — categorically different from competing
 * locksmith/security SERVICE businesses (never listed here; see
 * feedback_no_cross_bot_contamination-style exclusions in project memory —
 * D&B Security Group, Mustang Locksmith, Bedford Locksmith & Security are
 * competitors and must never be featured).
 *
 * Every brand below was visually confirmed in the owner's own jobsite/
 * workshop photo library (2026-08 review of ~130 source files) — either
 * installed hardware in frame, or genuine stocked product on the shelf/
 * workbench. Nothing here is from generic industry knowledge. Evidence:
 *  - Mul-T-Lock  — owner's own branded workwear (see hero) + stocked hardware
 *  - DeWalt      — drills/tools in near-constant use across dozens of photos
 *  - Milwaukee   — branded drill-bit index cases, tool bags
 *  - ENFORCER    — installed exit-device faceplate + stocked product boxes
 *  - Schlage     — engraved cylinder + key blanks, hand-photographed
 *  - Rosslare    — stocked keypad/reader product boxes
 *  - Seco-Larm   — stocked sensor & door-holder product boxes
 *  - Ives        — stocked hinge/strike hardware boxes
 *  - Don-Jo      — stocked "Armor-Strike" security-accessory placard
 *  - Husky       — tool bag, clearly branded
 * A photographed supplier "brands carried" flyer in the same source folder
 * lists additional names (Baldwin, Arrow, Assa Abloy, Yale, Amsec, Medeco,
 * Aiphone, Gardall, Dorma, Sargent) — that's a marketing graphic, not
 * hardware seen in use, so it's deliberately excluded from this list.
 */
export interface BrandFaq {
  q: string;
  a: string;
}

/**
 * Optional landing-page content for a supplier brand. Only added for brands
 * a customer would actually search by name when choosing a locksmith/
 * security installer (locks, exit devices, access control, sensors) — not
 * the tool brands (DeWalt, Milwaukee, Husky), which have no page: nobody
 * searches "DeWalt locksmith NYC".
 */
export interface BrandPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  category: "locksmith" | "security";
  answerFirst: string;
  whatWeService: string[];
  faqs: BrandFaq[];
  relatedServiceSlugs: string[];
}

export interface SupplierBrand {
  name: string;
  page?: BrandPage;
}

export const supplierBrands: SupplierBrand[] = [
  {
    name: "Mul-T-Lock",
    page: {
      slug: "mul-t-lock",
      metaTitle: "Mul-T-Lock Installation & Rekeying in Five Boroughs | Downtown Doors",
      metaDescription:
        "Mul-T-Lock high-security cylinder installation, rekeying, and key control for homes and businesses across the five boroughs — pick-resistant, patented-key hardware.",
      category: "locksmith",
      answerFirst:
        "Downtown Door Repair & Security installs and services Mul-T-Lock high-security hardware — pick-resistant cylinders, interchangeable-core systems, and patented key control that stops unauthorized key duplication at the hardware store. We stock Mul-T-Lock hardware and carry it on the truck for same-visit installs and rekeys.",
      whatWeService: [
        "High-security cylinder installation and upgrades for existing doors",
        "Rekeying to Mul-T-Lock so old keys stop working immediately",
        "Interchangeable-core (IC) systems for buildings that rekey often",
        "Restricted key control — keys that can't be copied without authorization",
      ],
      faqs: [
        {
          q: "What makes Mul-T-Lock different from a standard deadbolt cylinder?",
          a: "Mul-T-Lock cylinders use a patented key design that's far harder to pick or bump than a standard pin-tumbler lock, and the keys can't be duplicated at a regular hardware store without authorization — so you control who's able to get a copy.",
        },
        {
          q: "Can you upgrade my existing door to Mul-T-Lock without replacing the whole lock?",
          a: "In most cases yes — we can swap just the cylinder to a Mul-T-Lock high-security cylinder if your existing hardware supports it, which is faster and cheaper than a full lock replacement.",
        },
      ],
      relatedServiceSlugs: ["locksmith", "master-key-systems"],
    },
  },
  {
    name: "Schlage",
    page: {
      slug: "schlage",
      metaTitle: "Schlage Lock Installation & Repair in Five Boroughs | Downtown Doors",
      metaDescription:
        "Schlage deadbolt, lever, and smart lock installation, repair, and rekeying for homes and businesses across the five boroughs.",
      category: "locksmith",
      answerFirst:
        "Downtown Door Repair & Security installs, repairs, and rekeys Schlage locks — deadbolts, levers, and smart/keyless models — for residential and commercial doors across the five boroughs. We carry Schlage cylinders and key blanks on the truck for same-visit work.",
      whatWeService: [
        "Deadbolt and lever installation, residential and commercial",
        "Rekeying existing Schlage locks",
        "Smart lock and keypad-entry installation and setup",
        "Repair of sticking, hard-to-turn, or failing Schlage hardware",
      ],
      faqs: [
        {
          q: "Do you install Schlage smart locks?",
          a: "Yes — we install and set up Schlage keypad and smart-lock models for homes and businesses, including keyed-alike setups where several doors share one key or code.",
        },
        {
          q: "Can you rekey a Schlage lock I already have?",
          a: "Yes. If the lock itself is in good working condition, rekeying is usually faster and cheaper than replacing the hardware.",
        },
      ],
      relatedServiceSlugs: ["locksmith", "door-repair"],
    },
  },
  {
    name: "ENFORCER",
    page: {
      slug: "enforcer",
      metaTitle: "ENFORCER Panic Bar & Exit Device Installation | Downtown Doors",
      metaDescription:
        "ENFORCER panic bar and exit device installation and repair for commercial doors across the five boroughs — code-required push-bar hardware.",
      category: "security",
      answerFirst:
        "Downtown Door Repair & Security installs and repairs ENFORCER panic bars and exit devices — the push-bar hardware required on many commercial and assembly exits so occupants can get out instantly in an emergency, no key or knowledge needed.",
      whatWeService: [
        "Exit device installation on commercial and assembly-occupancy doors",
        "Repair of panic bars that stick, don't latch, or fail to release",
        "Integration with alarmed or delayed-egress exit hardware",
        "Code-compliance checks on existing exit devices",
      ],
      faqs: [
        {
          q: "Does my business need a panic bar on this door?",
          a: "It depends on occupancy type and load — many commercial and assembly spaces are required by code to have panic hardware on certain exits. We can assess your specific door and tell you plainly whether it's required.",
        },
        {
          q: "My exit device doesn't latch properly — is that a fire-code issue?",
          a: "Yes, a panic bar that doesn't fully latch is both a security gap and a common code violation flagged on inspection. We diagnose and repair this on site.",
        },
      ],
      relatedServiceSlugs: ["panic-hardware", "door-repair"],
    },
  },
  {
    name: "Rosslare",
    page: {
      slug: "rosslare",
      metaTitle: "Rosslare Access Control & Card Reader Installation | Downtown Doors",
      metaDescription:
        "Rosslare card reader and keypad access-control installation for offices and multi-unit buildings across the five boroughs.",
      category: "security",
      answerFirst:
        "Downtown Door Repair & Security installs Rosslare card readers and keypads as part of commercial access-control systems — letting property owners and businesses manage who can open a door with a credential instead of a physical key.",
      whatWeService: [
        "Card reader and keypad installation, wired into your door's electric strike or maglock",
        "Access-control system design for offices and multi-unit buildings",
        "Credential and permission setup",
        "Integration with existing intercom or CCTV systems",
      ],
      faqs: [
        {
          q: "Can Rosslare readers work with the electric strike I already have installed?",
          a: "In most cases yes — we assess your existing door hardware and wire the reader to work with it, or recommend a compatible strike or maglock if needed.",
        },
        {
          q: "How many doors can one access-control system manage?",
          a: "It scales from a single door to a full building — we design the system to fit how many entry points and users you actually have.",
        },
      ],
      relatedServiceSlugs: ["access-control"],
    },
  },
  {
    name: "Seco-Larm",
    page: {
      slug: "seco-larm",
      metaTitle: "Seco-Larm Door Sensors & Alarm Accessories Installation | Downtown Doors",
      metaDescription:
        "Seco-Larm door/window sensor, magnetic door holder, and alarm-accessory installation for homes and businesses across the five boroughs.",
      category: "security",
      answerFirst:
        "Downtown Door Repair & Security installs Seco-Larm door and window sensors, magnetic door holders, and alarm accessories as part of a security or access-control system — the components that tell an alarm panel when a door has been opened.",
      whatWeService: [
        "Door and window contact sensor installation",
        "Magnetic door holder installation for fire-rated doors",
        "Integration with existing alarm panels and access-control systems",
        "Troubleshooting sensors that trigger false alarms or fail to report",
      ],
      faqs: [
        {
          q: "What does a door contact sensor actually do?",
          a: "It's a two-part magnetic switch — one half on the door, one on the frame — that tells your alarm panel whenever the door opens or closes, whether or not the lock itself is engaged.",
        },
        {
          q: "Can you add sensors to an alarm system that's already installed?",
          a: "Yes — we can add Seco-Larm sensors and accessories to most existing alarm panels, matched to what the panel already supports.",
        },
      ],
      relatedServiceSlugs: ["access-control", "cctv-cameras"],
    },
  },
  { name: "DeWalt" },
  { name: "Milwaukee" },
  { name: "Ives" },
  { name: "Don-Jo" },
  { name: "Husky" },
];

/** Every supplier brand that has a landing page. */
export const brandPages: (SupplierBrand & { page: BrandPage })[] = supplierBrands.filter(
  (b): b is SupplierBrand & { page: BrandPage } => Boolean(b.page),
);

export function getBrand(slug: string) {
  return brandPages.find((b) => b.page.slug === slug);
}
