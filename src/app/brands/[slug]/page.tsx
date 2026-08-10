import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

import { brandPages, getBrand } from "@/lib/brands";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { publishedHubs } from "@/lib/service-areas";
import { brandSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { FaqList } from "@/components/ui/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/json-ld";
import { QuoteForm } from "@/components/forms/quote-form";

export function generateStaticParams() {
  return brandPages.map((b) => ({ slug: b.page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: { absolute: brand.page.metaTitle },
    description: brand.page.metaDescription,
    alternates: { canonical: `/brands/${brand.page.slug}` },
    openGraph: {
      title: brand.page.metaTitle,
      description: brand.page.metaDescription,
      url: absoluteUrl(`/brands/${brand.page.slug}`),
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const related = brand.page.relatedServiceSlugs.map(getService).filter(Boolean);

  return (
    <>
      <JsonLd data={brandSchema(brand)} />
      <JsonLd data={faqSchema(brand.page.faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
          { name: brand.name, path: `/brands/${brand.page.slug}` },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-800 bg-brand-950/50 px-3 py-1 text-sm font-medium text-brand-700">
              <MapPin className="h-4 w-4" aria-hidden />
              Five Boroughs
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl">{brand.name}</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">{brand.page.answerFirst}</p>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <a href={siteConfig.phone.href} className={buttonVariants({ size: "lg" })}>
                <Phone className="h-4.5 w-4.5" aria-hidden />
                {siteConfig.phone.display}
              </a>
              <a href="#quote-form" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Request a quote
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
            <div className="max-w-2xl">
              <h2 className="text-2xl">What we service</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {brand.page.whatWeService.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                    <span className="text-sm text-body">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink">How pricing works</h2>
                <div className="mt-4 rounded-2xl border border-line bg-surface p-6">
                  <p className="leading-relaxed text-body">
                    Every {brand.name} job is priced after an <strong className="text-ink">on-site diagnosis</strong> —
                    no guesswork and no surprises. We diagnose what's needed, explain your options in
                    plain language, and give you clear pricing before any work begins.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a href="#quote-form" className={buttonVariants({ size: "lg" })}>
                      Request your on-site quote
                      <ArrowRight className="h-4.5 w-4.5" aria-hidden />
                    </a>
                    <a
                      href={siteConfig.phone.href}
                      className={buttonVariants({ variant: "outline", size: "lg", className: "border-brand-700 bg-brand-950/40 text-ink hover:bg-brand-900/50" })}
                    >
                      <Phone className="h-4.5 w-4.5" aria-hidden />
                      {siteConfig.phone.display}
                    </a>
                  </div>
                </div>
              </div>

              {/* Inline quote form — converts right here, no navigating away */}
              <div id="quote-form" className="mt-10 scroll-mt-24 rounded-2xl border border-line bg-surface p-6 sm:p-8">
                <h2 className="text-2xl">Request your on-site quote</h2>
                <p className="mt-2 text-sm text-body">
                  Tell us what&apos;s going on — we&apos;ll get back to you with next steps and honest pricing.
                </p>
                <div className="mt-6">
                  <QuoteForm />
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl">Frequently asked</h2>
                <div className="mt-5">
                  <FaqList faqs={brand.page.faqs} />
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h2 className="text-lg font-bold text-ink">Talk to us</h2>
                <p className="mt-2 text-sm text-body">
                  Serving the five boroughs. Call for same-day help or request a quote.
                </p>
                <a href={siteConfig.phone.href} className={buttonVariants({ className: "mt-4 w-full" })}>
                  <Phone className="h-4.5 w-4.5" aria-hidden />
                  {siteConfig.phone.display}
                </a>
                <a href="#quote-form" className={buttonVariants({ variant: "outline", className: "mt-2.5 w-full" })}>
                  Request a quote
                </a>
                <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-sm text-body">
                  <ShieldCheck className="h-4.5 w-4.5 text-brand-600" aria-hidden />
                  Licensed &amp; Insured
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-line bg-surface p-6">
                <h2 className="text-sm font-semibold text-ink">Service areas</h2>
                <ul className="mt-3 space-y-1.5">
                  {publishedHubs.map((hub) => (
                    <li key={hub.slug}>
                      <Link
                        href={`/service-areas/${hub.slug}`}
                        className="inline-flex items-center gap-1 text-sm text-body hover:text-brand-700"
                      >
                        <MapPin className="h-3.5 w-3.5 text-brand-500" aria-hidden />
                        {hub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {related.length ? (
        <Section topBorder className="bg-surface">
          <Container>
            <SectionHeading eyebrow="Related" title="You might also need" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s!.slug} service={s!} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CtaBand quoteHref="#quote-form" />
    </>
  );
}
