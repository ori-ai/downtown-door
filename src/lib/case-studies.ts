/**
 * Real commercial clients — owner-confirmed, 2026-08. This is the
 * COMMERCIAL companion to the institutional references under
 * `/government-contracting/case-studies` (schools/hospitals/municipal —
 * currently empty by design, references provided on request). These six
 * are real, named local businesses; nothing beyond what's listed here
 * (no dates, dollar figures, or quotes) is invented.
 *
 * `image` / `imageAlt` are REPRESENTATIVE work photos, not photos of the
 * client's actual storefront — we don't have on-site photos of these
 * specific jobs. The page copy makes that distinction explicit; never
 * present these as literal photos of the client's location.
 */
export interface CommercialCaseStudy {
  client: string;
  workPerformed: string[];
  image: string;
  imageAlt: string;
}

export const commercialCaseStudies: CommercialCaseStudy[] = [
  {
    client: "Jane's Carousel",
    workPerformed: ["Storefront door install", "Security cameras", "Lock rekey", "Gate repair"],
    image: "/images/real/real-storefront-door.jpg",
    imageAlt: "Commercial storefront door install — representative of the work performed for Jane's Carousel",
  },
  {
    client: "Five Guys",
    workPerformed: ["Security cameras", "Storefront door install", "Lock rekey", "Gate repair"],
    image: "/images/real/real-dome-camera-mount.jpg",
    imageAlt: "Security camera mounting — representative of the camera work performed for Five Guys",
  },
  {
    client: "Buzzy Cannabis Store",
    workPerformed: ["Storefront door install", "Security cameras", "Lock rekey", "Gate repair"],
    image: "/images/real/real-storefront-gate-install.jpg",
    imageAlt: "Storefront security gate install — representative of the work performed for Buzzy Cannabis Store",
  },
  {
    client: "787 Coffee",
    workPerformed: ["Storefront door install", "Security cameras", "Lock rekey", "Gate repair"],
    image: "/images/real/real-storefront-pull-door.jpg",
    imageAlt: "Storefront pull door — representative of the work performed for 787 Coffee",
  },
  {
    client: "12 Chairs Café",
    workPerformed: ["Storefront door install", "Security cameras", "Lock rekey", "Gate repair"],
    image: "/images/real/real-storefront-mortise-install.jpg",
    imageAlt: "Storefront mortise lock install — representative of the work performed for 12 Chairs Café",
  },
  {
    client: "Astoria Pediatric & Dental",
    workPerformed: ["Intercom system installation"],
    image: "/images/real/real-intercom-outdoor.jpg",
    imageAlt: "Intercom system install — representative of the work performed for Astoria Pediatric & Dental",
  },
];
