import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { publishedHubs } from "@/lib/service-areas";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Service Areas — NYC Locksmith & Security Systems",
  description:
    "Downtown Door Repair & Security serves all five NYC boroughs with neighborhood-level locksmith, security-system, and door repair service, plus Westchester, Rockland, and Nassau counties, and Bergen County, NJ, by request.",
  alternates: { canonical: "/service-areas" },
  openGraph: { url: absoluteUrl("/service-areas") },
};

export default function ServiceAreasIndexPage() {
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
              We serve {boroughList} for locksmith, security-system, and door work —
              with neighborhood-level pages for the five boroughs, and county-wide
              service by request for Westchester, Rockland, Nassau, and Bergen County.
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

      <CtaBand />
    </>
  );
}
