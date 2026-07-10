import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Home, Landmark } from "lucide-react";

import { sortedPosts, audienceLabels, type Audience } from "@/lib/blog";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog — Door & Security Insights",
  description:
    "Practical guidance on doors, locks, and security — for homeowners and businesses, and for institutional facilities teams.",
  alternates: { canonical: "/blog" },
  openGraph: { url: absoluteUrl("/blog") },
};

function PostCard({ slug, title, excerpt }: { slug: string; title: string; excerpt: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-950/5"
    >
      <h3 className="text-lg font-bold text-ink group-hover:text-brand-700">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-body">{excerpt}</p>
      <span className="mt-4 text-sm font-semibold text-brand-700">Read more →</span>
    </Link>
  );
}

export default function BlogIndexPage() {
  const audiences: Audience[] = ["consumer", "institutional"];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Door & security insights</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Straightforward guidance on doors, locks, and building security — written
              for two audiences: homeowners and businesses, and institutional facilities
              teams.
            </p>
          </div>
        </Container>
      </section>

      {sortedPosts.length === 0 ? (
        <Section>
          <Container>
            <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-white p-8 text-center md:p-12">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Newspaper className="h-7 w-7" aria-hidden />
              </span>
              <h2 className="mt-5 text-2xl">Articles coming soon</h2>
              <p className="mt-3 text-body">
                We&apos;re preparing buyer-intent guides for both audiences. In the meantime,
                explore our services or get in touch.
              </p>
              <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-surface p-5">
                  <Home className="h-5 w-5 text-brand-600" aria-hidden />
                  <h3 className="mt-2 font-bold text-ink">{audienceLabels.consumer}</h3>
                  <p className="mt-1 text-sm text-body">Repair vs. replace, cost expectations, emergency vs. scheduled.</p>
                </div>
                <div className="rounded-xl border border-line bg-surface p-5">
                  <Landmark className="h-5 w-5 text-brand-600" aria-hidden />
                  <h3 className="mt-2 font-bold text-ink">{audienceLabels.institutional}</h3>
                  <p className="mt-1 text-sm text-body">What schools & facilities should look for in a door vendor.</p>
                </div>
              </div>
              <Link href="/services" className={buttonVariants({ size: "lg", className: "mt-8" })}>
                Explore our services
              </Link>
            </div>
          </Container>
        </Section>
      ) : (
        audiences.map((audience, idx) => {
          const items = sortedPosts.filter((p) => p.audience === audience);
          if (!items.length) return null;
          return (
            <Section key={audience} topBorder={idx > 0} className={idx % 2 === 1 ? "bg-surface" : ""}>
              <Container>
                <SectionHeading eyebrow="For" title={audienceLabels[audience]} />
                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <PostCard key={p.slug} slug={p.slug} title={p.title} excerpt={p.excerpt} />
                  ))}
                </div>
              </Container>
            </Section>
          );
        })
      )}
    </>
  );
}
