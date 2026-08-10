import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock } from "lucide-react";
import { areaHubs, publishedHubs } from "@/lib/service-areas";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Service Areas — NYC Locksmith & Security Systems",
  description:
    "Downtown Doors & Security Systems NYC serves all five NYC boroughs with neighborhood-level locksmith, security-system, and door repair service, plus Westchester, Rockland, and Nassau counties, and Bergen County, NJ, by request.",
  alternates: { canonical: "/service-areas" },
  openGraph: { url: absoluteUrl("/service-areas") },
};

export default function ServiceAreasIndexPage() {
  const comingSoon = areaHubs.filter((h) => !h.published);
  const publishedNames = publishedHubs.map((h) => h.name);
  const boroughList =
    publishedNames.length > 1
      ? `${publishedNames.slice(0, -1).join(", ")} and ${publishedNames[publishedNames.length - 1]}`
      : publishedNames[0];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Service areas</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              We currently serve {boroughList} with neighborhood-level locksmith,
              security-system, and door repair service — plus Westchester, Rockland,
              and Nassau counties, and Bergen County, NJ, by request. Dedicated pages
              for those counties are coming in Phase 2.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionHeading eyebrow="Now serving" title={boroughList ?? "Our service areas"} />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {publishedHubs.map((hub) => (
              <div key={hub.slug} className="rounded-2xl border border-line bg-surface p-7">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-ink">{hub.name}</h2>
                  <Link href={`/service-areas/${hub.slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                    View area →
                  </Link>
                </div>
                <p className="mt-2 text-sm text-body">{hub.intro}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {hub.neighborhoods.map((n) => (
                    <li key={n.slug}>
                      <Link
                        href={`/service-areas/${hub.slug}/${n.slug}`}
                        className="inline-flex items-center gap-1 rounded-full border border-line bg-surface px-3 py-1 text-sm text-body hover:border-brand-300 hover:text-brand-700"
                      >
                        <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                        {n.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Phase 2"
            title="Expanding soon"
            intro="These areas aren't live yet — but if you have a project there, get in touch and we'll let you know our timeline."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {comingSoon.map((hub) => (
              <li
                key={hub.slug}
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-line bg-surface px-4 py-2 text-sm text-muted"
              >
                <Clock className="h-4 w-4 text-brand-400" aria-hidden />
                {hub.name}
                <span className="rounded-full bg-surface-2 px-2 py-0.5 text-xs font-medium text-brand-700">
                  Coming soon
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
