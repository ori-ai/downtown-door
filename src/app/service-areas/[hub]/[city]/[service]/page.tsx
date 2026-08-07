import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MapPin, CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";

import { allPublishedNeighborhoods, getNeighborhood } from "@/lib/service-areas";
import { localServices, getLocalService } from "@/lib/local-services";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPublishedNeighborhoods().flatMap(({ hub, slug }) =>
    localServices.map((s) => ({ hub, city: slug, service: s.slug })),
  );
}

function resolve(hub: string, city: string, service: string) {
  const found = getNeighborhood(hub, city);
  const svc = getLocalService(service);
  if (!found || !svc) return null;
  return { hub: found.hub, neighborhood: found.neighborhood, svc };
}

const fill = (s: string, n: string, b: string) => s.replaceAll("{n}", n).replaceAll("{b}", b);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ hub: string; city: string; service: string }>;
}): Promise<Metadata> {
  const { hub, city, service } = await params;
  const r = resolve(hub, city, service);
  if (!r) return {};
  const n = r.neighborhood.name;
  const b = r.hub.name;
  const path = `/service-areas/${r.hub.slug}/${r.neighborhood.slug}/${r.svc.slug}`;
  return {
    title: `${r.svc.name} in ${n}, ${b}`,
    description: fill(r.svc.intro, n, b).slice(0, 300),
    alternates: { canonical: path },
    openGraph: { url: absoluteUrl(path), title: `${r.svc.name} in ${n}, ${b}` },
  };
}

export default async function LocalServicePage({
  params,
}: {
  params: Promise<{ hub: string; city: string; service: string }>;
}) {
  const { hub, city, service } = await params;
  const r = resolve(hub, city, service);
  if (!r) notFound();
  const { neighborhood, svc } = r;
  const n = neighborhood.name;
  const b = r.hub.name;

  const parent = getService(svc.parent);
  const faqs = svc.faqs.map((f) => ({ q: fill(f.q, n, b), a: fill(f.a, n, b) }));

  // Other keyword services in the SAME neighborhood, for internal linking.
  const siblingKeywords = localServices.filter((s) => s.slug !== svc.slug).slice(0, 8);
  const nearby = r.hub.neighborhoods.filter((x) => x.slug !== neighborhood.slug);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: r.hub.name, path: `/service-areas/${r.hub.slug}` },
          { name: neighborhood.name, path: `/service-areas/${r.hub.slug}/${neighborhood.slug}` },
          { name: svc.name, path: `/service-areas/${r.hub.slug}/${neighborhood.slug}/${svc.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(42rem 26rem at 8% -20%, color-mix(in oklab, var(--color-brand-600) 34%, transparent), transparent 60%)",
          }}
          aria-hidden
        />
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-800 bg-brand-950/50 px-3 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              {neighborhood.name}, {r.hub.name}
            </span>
            <h1 className="mt-5 font-display text-3xl font-bold uppercase leading-[1.12] tracking-[0.005em] text-ink md:text-5xl">
              {svc.name} in {neighborhood.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-body">{fill(svc.intro, n, b)}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Request your on-site quote
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </Link>
              <a
                href={siteConfig.phone.href}
                className={buttonVariants({ variant: "outline", size: "lg", className: "border-brand-700 bg-brand-950/40 text-ink hover:bg-brand-900/50" })}
              >
                <Phone className="h-4.5 w-4.5" aria-hidden />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Body */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_18rem]">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl uppercase tracking-tight text-ink">
                {svc.name} for homes &amp; businesses in {neighborhood.name}
              </h2>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {svc.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-4 text-sm text-body">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-400" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>

              {/* Neighborhood's real local context */}
              <h2 className="mt-12 font-display text-2xl uppercase tracking-tight text-ink">
                Local to {neighborhood.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{neighborhood.localContext}</p>

              {parent ? (
                <Link
                  href={`/services/${parent.slug}`}
                  className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300"
                >
                  Full {parent.title.toLowerCase()} details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </Link>
              ) : null}

              {/* FAQ */}
              <h2 className="mt-12 font-display text-2xl uppercase tracking-tight text-ink">
                {svc.name} in {neighborhood.name} — FAQ
              </h2>
              <div className="mt-6 space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="rounded-xl border border-line bg-surface p-5">
                    <h3 className="text-base font-bold text-ink">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-body">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-brand-300">
                  More in {neighborhood.name}
                </h2>
                <ul className="mt-3 space-y-1.5">
                  {siblingKeywords.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/service-areas/${r.hub.slug}/${neighborhood.slug}/${s.slug}`}
                        className="text-sm text-body hover:text-brand-300"
                      >
                        {s.name} in {neighborhood.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-6 font-display text-xs font-semibold uppercase tracking-widest text-brand-300">
                  Nearby areas
                </h2>
                <ul className="mt-3 space-y-1.5">
                  {nearby.slice(0, 5).map((x) => (
                    <li key={x.slug}>
                      <Link
                        href={`/service-areas/${r.hub.slug}/${x.slug}/${svc.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-body hover:text-brand-300"
                      >
                        <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                        {svc.name} in {x.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <CtaBand title={`Need ${svc.name.toLowerCase()} in ${neighborhood.name}?`} />
    </>
  );
}
