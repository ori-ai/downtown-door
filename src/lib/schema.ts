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
  GeoCoordinates,
  HomeAndConstructionBusiness,
  OpeningHoursSpecification,
  PostalAddress,
  Service as ServiceSchema,
  WithContext,
} from "schema-dts";

import { siteConfig, formattedAddress, emailAddress } from "./site";
import { absoluteUrl } from "./utils";
import type { Service } from "./services";
import type { SupplierBrand, BrandPage } from "./brands";

const ORG_ID = `${siteConfig.url}/#business`;

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

function geo(): GeoCoordinates {
  return {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  };
}

function openingHours(): OpeningHoursSpecification[] | undefined {
  // Do not assert hours we haven't confirmed.
  if (!siteConfig.hoursConfirmed) return undefined;
  const h = siteConfig.hours;
  const specs: OpeningHoursSpecification[] = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: h.weekdays.opens,
      closes: h.weekdays.closes,
    },
  ];
  if (!h.sundayClosed || h.saturday) {
    specs.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: h.saturday.opens,
      closes: h.saturday.closes,
    });
  }
  return specs;
}

/** Core LocalBusiness (HomeAndConstructionBusiness subtype). */
export function localBusinessSchema(): WithContext<HomeAndConstructionBusiness> {
  const sameAs = Object.values(siteConfig.social).filter(Boolean) as string[];
  const hours = openingHours();

  const schema: WithContext<HomeAndConstructionBusiness> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": ORG_ID,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+1${siteConfig.phone.digits}`,
    email: emailAddress("general"),
    image: absoluteUrl("/og.jpg"),
    address: postalAddress(),
    geo: geo(),
    areaServed: [...siteConfig.serviceArea],
    knowsAbout: [
      "Locksmith services",
      "Emergency locksmith",
      "Access control",
      "Intercom systems",
      "Electric strikes",
      "Magnetic locks",
      "Buzzer systems",
      "CCTV",
      "Master key systems",
      "Security systems",
      "Door repair",
      "Door installation",
      "Commercial storefront doors",
    ],
    // priceRange is a coarse signal Google expects for LocalBusiness.
    priceRange: "$$",
  };

  if (hours) schema.openingHoursSpecification = hours;
  if (sameAs.length) schema.sameAs = sameAs;
  // NOTE: aggregateRating intentionally omitted — wired only from live GBP data.

  return schema;
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
      "@type": "HomeAndConstructionBusiness",
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
      "@type": "HomeAndConstructionBusiness",
      "@id": ORG_ID,
      name: siteConfig.name,
      telephone: `+1${siteConfig.phone.digits}`,
      address: postalAddress(),
    },
    areaServed: [...siteConfig.serviceArea],
    url: absoluteUrl(`/services/${service.slug}`),
  };
}

/**
 * Service schema for a single local-service × neighborhood keyword page
 * (/service-areas/[hub]/[city]/[service]). Distinct from serviceSchema() above
 * (which describes the general /services/[slug] page) -- this one scopes
 * areaServed to the specific neighborhood/city rather than the whole phase-1
 * area, which is the more precise, correct signal for a page about doing this
 * exact service in this exact place.
 */
export function localServiceAreaSchema(params: {
  serviceName: string;
  description: string;
  areaName: string; // e.g. "Williamsburg, Brooklyn"
  path: string; // e.g. "/service-areas/brooklyn/williamsburg/door-repair"
}): WithContext<ServiceSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.serviceName,
    description: params.description,
    serviceType: params.serviceName,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": ORG_ID,
      name: siteConfig.name,
      telephone: `+1${siteConfig.phone.digits}`,
      address: postalAddress(),
    },
    areaServed: { "@type": "Place", name: params.areaName },
    url: absoluteUrl(params.path),
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
      "@type": "HomeAndConstructionBusiness",
      "@id": ORG_ID,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "HomeAndConstructionBusiness",
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
