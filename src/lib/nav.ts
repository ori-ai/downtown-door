import { services, serviceCategories, type ServiceCategory } from "./services";
import { publishedHubs } from "./service-areas";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  children?: NavLink[];
}

/** Services grouped by category, for the header mega-menu. */
export const servicesByCategory: { category: ServiceCategory; label: string; links: NavLink[] }[] =
  (Object.keys(serviceCategories) as ServiceCategory[]).map((category) => ({
    category,
    label: serviceCategories[category],
    links: services
      .filter((s) => s.category === category)
      .map((s) => ({
        label: s.title,
        href: `/services/${s.slug}`,
      })),
  }));

export const serviceLinks: NavLink[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.slug}`,
}));

export const areaLinks: NavGroup[] = publishedHubs.map((h) => ({
  label: h.name,
  href: `/service-areas/${h.slug}`,
  children: h.neighborhoods.map((n) => ({
    label: n.name,
    href: `/service-areas/${h.slug}/${n.slug}`,
  })),
}));

/** Primary header navigation. */
export const mainNav: NavGroup[] = [
  { label: "Services", href: "/services", children: serviceLinks },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: publishedHubs.map((h) => ({ label: h.name, href: `/service-areas/${h.slug}` })),
  },
  { label: "Our Work", href: "/case-studies" },
  { label: "Government", href: "/government-contracting" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Footer link columns. */
export const footerNav: NavGroup[] = [
  { label: "Services", href: "/services", children: serviceLinks },
  {
    label: "Service Areas",
    href: "/service-areas",
    children: publishedHubs.map((h) => ({ label: h.name, href: `/service-areas/${h.slug}` })),
  },
  {
    label: "Public Sector",
    href: "/government-contracting",
    children: [
      { label: "Government Contracting", href: "/government-contracting" },
      { label: "Capability Statement", href: "/government-contracting/capability-statement" },
      { label: "Case Studies", href: "/government-contracting/case-studies" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/case-studies" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
