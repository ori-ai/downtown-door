/**
 * Reviews come LIVE from the Google Business Profile — never hardcoded.
 *
 * The old WordPress site claimed a "5.0" rating inline; we do NOT copy that.
 * Until a real data source is wired (GBP place id + API, or a build-time fetch),
 * this returns `null` and the UI shows a neutral, honest trust signal instead of
 * a fabricated number. No stand-in rating is ever rendered.
 *
 * TO WIRE UP (human): supply GBP place id / API access, then implement the fetch
 * in `getGoogleReviews()`. See docs/human-todo.md.
 */

import { siteConfig } from "./site";

export interface Review {
  author: string;
  rating: number; // 1–5
  text: string;
  relativeTime?: string;
  profilePhoto?: string;
}

export interface ReviewSummary {
  rating: number; // aggregate, 1–5
  count: number;
  reviews: Review[];
  profileUrl?: string;
}

/**
 * Returns the live review summary, or `null` when no live source is configured.
 * Callers MUST handle null by hiding rating UI — do not substitute a placeholder
 * number.
 */
export async function getGoogleReviews(): Promise<ReviewSummary | null> {
  if (!siteConfig.reviews.googlePlaceId) {
    // Not wired yet — stay honest, return nothing.
    return null;
  }

  // TODO(human): fetch from Google Places / Business Profile using the place id
  // and a server-side API key (GOOGLE_PLACES_API_KEY). Return real data only.
  return null;
}
