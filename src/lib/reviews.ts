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
 *
 * LIVE FETCH (implemented 2026-08-24): Google Places API (New), server-side,
 * revalidated every 6h. Lights up as soon as GOOGLE_PLACES_API_KEY is set in
 * the environment (Ori: Vercel → env vars). Until then: null, honest UI.
 */
export async function getGoogleReviews(): Promise<ReviewSummary | null> {
  const placeId = siteConfig.reviews.googlePlaceId;
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!placeId || !key) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,reviews,googleMapsUri`,
      {
        headers: { "X-Goog-Api-Key": key },
        next: { revalidate: 21600 }, // 6h — reviews don't need realtime
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      rating?: number;
      userRatingCount?: number;
      googleMapsUri?: string;
      reviews?: {
        rating?: number;
        text?: { text?: string };
        relativePublishTimeDescription?: string;
        authorAttribution?: { displayName?: string; photoUri?: string };
      }[];
    };
    if (typeof data.rating !== "number" || !data.userRatingCount) return null;

    return {
      rating: data.rating,
      count: data.userRatingCount,
      profileUrl: data.googleMapsUri ?? siteConfig.reviews.profileUrl ?? undefined,
      reviews: (data.reviews ?? [])
        .filter((r) => typeof r.rating === "number" && r.text?.text)
        .map((r) => ({
          author: r.authorAttribution?.displayName ?? "Google user",
          rating: r.rating as number,
          text: r.text?.text as string,
          relativeTime: r.relativePublishTimeDescription,
          profilePhoto: r.authorAttribution?.photoUri,
        })),
    };
  } catch {
    // Network/API failure — hide rating UI rather than show stale/fake data.
    return null;
  }
}
