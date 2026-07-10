/**
 * Blog content model.
 *
 * Posts are added here (or migrated from the old WordPress blog) as real
 * content is written — split by audience. Nothing is fabricated: the array is
 * empty until genuine posts exist, and the blog pages show an honest empty
 * state until then. When migrating the 26 old posts, add them here and point
 * their old URLs at /blog/<slug> (see docs/migration-inventory.md).
 */

export type Audience = "consumer" | "institutional";

export interface BlogPost {
  slug: string;
  title: string;
  audience: Audience;
  excerpt: string;
  date: string; // ISO
  /** Body as an array of paragraphs (upgrade to MDX when the blog grows). */
  content: string[];
}

export const audienceLabels: Record<Audience, string> = {
  consumer: "Homeowners & Businesses",
  institutional: "Institutional & Public Sector",
};

export const posts: BlogPost[] = [];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
