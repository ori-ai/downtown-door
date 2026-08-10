import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star, Quote, ExternalLink } from "lucide-react";

import { getGoogleReviews } from "@/lib/reviews";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";

// The work behind the reviews — real jobs, no stock photography.
const reviewStrip = [
  "/images/real/real-brass-deadbolt-drill.jpg",
  "/images/real/real-storefront-gate-install.jpg",
  "/images/real/real-fence-hinge-install.jpg",
  "/images/real/real-dome-camera-mount.jpg",
];

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what customers say about Downtown Doors, Locksmith & Security Systems NYC. Reviews are pulled live from our Google Business Profile.",
  alternates: { canonical: "/reviews" },
  openGraph: { url: absoluteUrl("/reviews") },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < Math.round(rating) ? "h-5 w-5 fill-brand-500 text-brand-500" : "h-5 w-5 text-line"}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default async function ReviewsPage() {
  // Live from Google Business Profile — null until wired. We never fabricate reviews.
  const data = await getGoogleReviews();

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Customer reviews</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              What our customers say — pulled live from our Google Business Profile, never
              edited or invented.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {reviewStrip.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-xl border border-line ring-soft">
                <Image src={src} alt="Real job, Downtown Doors, Locksmith & Security Systems NYC" fill sizes="(max-width: 640px) 50vw, 20vw" className="object-cover" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          {data ? (
            <>
              <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-surface p-6">
                <div className="text-4xl font-bold text-ink">{data.rating.toFixed(1)}</div>
                <div>
                  <Stars rating={data.rating} />
                  <p className="mt-1 text-sm text-muted">Based on {data.count} Google reviews</p>
                </div>
                {data.profileUrl ? (
                  <a
                    href={data.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "outline", className: "ml-auto" })}
                  >
                    View on Google
                    <ExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                ) : null}
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {data.reviews.map((r, i) => (
                  <figure key={i} className="rounded-2xl border border-line bg-surface p-6">
                    <Quote className="h-6 w-6 text-brand-200" aria-hidden />
                    <blockquote className="mt-3 text-body">{r.text}</blockquote>
                    <figcaption className="mt-4 flex items-center justify-between">
                      <span className="font-semibold text-ink">{r.author}</span>
                      <Stars rating={r.rating} />
                    </figcaption>
                  </figure>
                ))}
              </div>
            </>
          ) : (
            // Honest state until the GBP feed is connected — no fabricated reviews.
            <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface p-8 text-center md:p-12">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-950/60 text-brand-300">
                <Star className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mt-5 text-2xl">Reviews load from Google</h2>
              <p className="mt-3 text-body">
                This page displays live reviews from our Google Business Profile. Once the
                profile is connected, real customer reviews and our current rating appear
                here automatically — we don&apos;t post placeholder or fabricated reviews.
              </p>
              <Link href="/contact" className={buttonVariants({ size: "lg", className: "mt-6" })}>
                Work with us
              </Link>
            </div>
          )}
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
