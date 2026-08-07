import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { publishedHubs, allPublishedNeighborhoods } from "@/lib/service-areas";
import { localServices } from "@/lib/local-services";
import { posts } from "@/lib/blog";

/**
 * Sitemap. Only PUBLISHED, indexable URLs are listed — Phase 2 (reserved)
 * service-area hubs are noindex and intentionally excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const url = (p: string) => `${base}${p}`;

  const staticPages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/government-contracting", priority: 0.9, changeFrequency: "monthly" },
    { path: "/government-contracting/capability-statement", priority: 0.7, changeFrequency: "monthly" },
    { path: "/government-contracting/case-studies", priority: 0.6, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/reviews", priority: 0.6, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: url(p.path),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  for (const s of services) {
    entries.push({ url: url(`/services/${s.slug}`), changeFrequency: "monthly", priority: 0.8 });
  }
  for (const h of publishedHubs) {
    entries.push({ url: url(`/service-areas/${h.slug}`), changeFrequency: "monthly", priority: 0.7 });
  }
  for (const { hub, slug } of allPublishedNeighborhoods()) {
    entries.push({ url: url(`/service-areas/${hub}/${slug}`), changeFrequency: "monthly", priority: 0.6 });
    // Programmatic service × neighborhood keyword pages
    for (const s of localServices) {
      entries.push({ url: url(`/service-areas/${hub}/${slug}/${s.slug}`), changeFrequency: "monthly", priority: 0.6 });
    }
  }
  for (const post of posts) {
    entries.push({ url: url(`/blog/${post.slug}`), changeFrequency: "yearly", priority: 0.5 });
  }

  return entries;
}
