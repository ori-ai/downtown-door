/**
 * JSON-LD builders (schema-dts typed). NAP is pulled from siteConfig so the
 * structured data always matches the visible page and the Google Business
 * Profile exactly.
 *
 * Honesty gates:
 *  - openingHoursSpecification is only emitted when hours are confirmed.
 *  - No aggregateRating is emitted until real GBP review data is wired (we never
 *    fabricate a rating).
 */

import type {
  BlogPosting,
  BreadcrumbList,
  FAQPage,
  LocalBusiness,
  OpeningHoursSpecification,
  Organization,
  PostalAddress,
  Service as ServiceSchema,
  WithContext,
} from "schema-dts";

import { siteConfig, emailAddress, formattedAddress } from "./site";
import { offices, type Office } from "./locations";
import { absoluteUrl } from "./utils";
import type { Service } from "./services";
import type { SupplierBrand, BrandPage } from "./brands";

/**
 * Entity graph (2026-08-24 restructure):
 *   ONE Organization node (#organization) — the brand.
 *   TWO location nodes (#office-<slug>) — @type ["Locksmith","LocalBusiness"],
 *   one per physical office, each with its OWN telephone, address, geo, hours,
 *   image, and hasMap, and parentOrganization → #organization.
 * Homepage emits all three; each /locations page emits its own office node.
 */
const ORG_ID = `${siteConfig.url}/#organization`;
const officeId = (o: Office) => `${siteConfig.url}/#office-${o.slug}`;

function postalAddress(): PostalAddress {
  const a = siteConfig.address;
  return {
    "@type": "PostalAddress",
    streetAddress: a.street,
    addressLocality: a.city,
    addressRegion: a.region,
    postalCode: a.postalCode,
    addressCountry: a.country,
  };
}

function officePostalAddress(o: Office): PostalAddress {
  return {
    "@type": "PostalAddress",
    streetAddress: o.street,
    addressLocality: o.city,
    addressRegion: o.region,
    postalCode: o.postalCode,
    addressCountry: "US",
  };
}

function openingHours(): OpeningHoursSpecification[] | undefined {
  // Do not assert hours we haven't confirmed. Confirmed 2026-08-24: 24/7.
  if (!siteConfig.hoursConfirmed || !siteConfig.hours.open247) return undefined;
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ];
}

const KNOWS_ABOUT = [
  "Locksmith services",
  "Emergency locksmith",
  "Intercom systems",
  "Buzzer systems",
  "Access control",
  "Electric strikes",
  "Magnetic locks",
  "Card and fob readers",
  "CCTV",
  "Security cameras",
  "Master key systems",
  "High-security locks",
  "Panic hardware",
  "Security systems",
  "Door repair",
  "Commercial storefront doors",
] as const;

/** The single parent Organization node — the brand itself. */
export function organizationSchema(): WithContext<Organization> {
  const sameAs = [
    ...(Object.values(siteConfig.social).filter(Boolean) as string[]),
    ...siteConfig.otherProfiles.map((p) => p.url),
  ];
  const schema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+1${siteConfig.phone.digits}`,
    email: emailAddress("general"),
    logo: absoluteUrl("/og.jpg"),
  };
  if (sameAs.length) schema.sameAs = sameAs;
  return schema;
}

/**
 * One physical office as ["Locksmith","LocalBusiness"] with its OWN phone,
 * geo, hours, photos and map link, tied to the parent Organization.
 * `image` is only emitted once real office photos exist — never stock.
 */
export function officeSchema(o: Office): WithContext<LocalBusiness> {
  const hours = openingHours();
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Locksmith", "LocalBusiness"],
    "@id": officeId(o),
    name: `${siteConfig.name} — ${o.shortLabel}`,
    description: o.intro,
    url: absoluteUrl(`/locations/${o.slug}`),
    telephone: `+1${o.phone.digits}`,
    email: emailAddress("general"),
    address: officePostalAddress(o),
    geo: { "@type": "GeoCoordinates", latitude: o.geo.lat, longitude: o.geo.lng },
    hasMap: o.hasMap,
    areaServed: [...siteConfig.serviceArea],
    knowsAbout: [...KNOWS_ABOUT],
    priceRange: "$$",
    parentOrganization: { "@id": ORG_ID },
  } as unknown as WithContext<LocalBusiness> & Record<string, unknown>;

  if (o.photos.length) schema.image = o.photos.map((p) => absoluteUrl(p.src));
  if (hours) schema.openingHoursSpecification = hours;
  // NOTE: aggregateRating intentionally omitted — wired only from live GBP data.
  return schema;
}

/** Homepage graph: the Organization + BOTH office nodes. */
export function businessGraphSchemas(): (WithContext<Organization> | WithContext<LocalBusiness>)[] {
  return [organizationSchema(), ...offices.map(officeSchema)];
}

/**
 * @deprecated Replaced by businessGraphSchemas()/officeSchema(). Kept only so
 * stray imports fail loudly in review rather than silently emitting the old
 * single-location HomeAndConstructionBusiness node.
 */
export function localBusinessSchema(): never {
  throw new Error("localBusinessSchema() was replaced by businessGraphSchemas() — 2026-08-24");
}

/** Service schema for a single brand landing page (e.g. Mul-T-Lock installation). */
export function brandSchema(brand: SupplierBrand & { page: BrandPage }): WithContext<ServiceSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.name} Installation & Service`,
    description: brand.page.metaDescription,
    serviceType: `${brand.name} installation and repair`,
    brand: { "@type": "Brand", name: brand.name },
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: siteConfig.name,
      telephone: `+1${siteConfig.phone.digits}`,
      address: postalAddress(),
    },
    areaServed: [...siteConfig.serviceArea],
    url: absoluteUrl(`/brands/${brand.page.slug}`),
  };
}

/** Service schema for a single Path A service page. */
export function serviceSchema(service: Service): WithContext<ServiceSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: siteConfig.name,
      telephone: `+1${siteConfig.phone.digits}`,
      address: postalAddress(),
    },
    areaServed: [...siteConfig.serviceArea],
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

/** BlogPosting schema for a single /blog/[slug] article. */
export function blogPostingSchema(params: {
  title: string;
  description: string;
  datePublished: string; // ISO date
  path: string; // e.g. "/blog/door-repair-nyc-guide"
}): WithContext<BlogPosting> {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    datePublished: params.datePublished,
    dateModified: params.datePublished,
    url: absoluteUrl(params.path),
    mainEntityOfPage: absoluteUrl(params.path),
    author: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: siteConfig.name,
    },
  };
}

/** FAQPage schema from Q/A pairs. */
export function faqSchema(faqs: { q: string; a: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList schema from an ordered list of {name, path}. */
export function breadcrumbSchema(
  items: { name: string; path: string }[],
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Convenience: the visible one-line address (kept in sync for consistency). */
export const nap = {
  name: siteConfig.name,
  address: formattedAddress(),
  phone: siteConfig.phone.display,
};
