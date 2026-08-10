import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import Image from "next/image";

import { services, getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { publishedHubs } from "@/lib/service-areas";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { absoluteUrl, cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { FaqList } from "@/components/ui/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/json-ld";
import { QuoteForm } from "@/components/forms/quote-form";

/** Category-relevant hero imagery — real, no-person job photos, one per service. */
const serviceHeroImage: Record<string, string> = {
  "door-repair": "/images/real/real-mortise-repair.jpg",
  "door-installation": "/images/real/real-office-install.jpg",
  "emergency-door-repair": "/images/real/real-drill-install.jpg",
  "commercial-storefront-doors": "/images/real/real-commercial-door.jpg",
  "locksmith-door-hardware": "/images/real/real-mortise-keys.jpg",
  "security-systems-access-control": "/images/real/real-access-install.jpg",
  "fire-door-repair": "/images/real/real-panic-bar-exit.jpg",
  "panic-exit-devices": "/images/real/real-hero-panicbar.jpg",
  "door-closers": "/images/real/real-door-closer.jpg",
  "security-gates": "/images/real/real-padlocks-gate.jpg",
  "intercom-systems": "/images/real/real-intercom-button.jpg",
  "cctv-camera-systems": "/images/real/real-cctv-camera.jpg",
  "master-key-systems": "/images/real/real-keypad-lever-lock.jpg",
};

/**
 * A second, distinct real photo per service — dropped into the body copy so
 * service pages aren't just a hero image and a wall of text. Deliberately
 * different shots than the hero (a mid-repair or in-progress angle, not the
 * same finished-product photo twice).
 */
const serviceBodyImage: Record<string, { src: string; caption: string }> = {
  "door-repair": { src: "/images/real/real-frame-repair-oscillating.jpg", caption: "Cutting out a damaged frame pocket before rebuilding it" },
  "door-installation": { src: "/images/real/real-brass-deadbolt-drill.jpg", caption: "Fitting a new deadbolt on a freshly hung door" },
  "emergency-door-repair": { src: "/images/real/real-strike-plate-drill.jpg", caption: "Re-setting a strike plate after a forced-entry repair" },
  "commercial-storefront-doors": { src: "/images/real/real-storefront-pull-door.jpg", caption: "Storefront glass door, hardware realigned and tested" },
  "locksmith-door-hardware": { src: "/images/real/real-key-wall-board.jpg", caption: "Blanks on hand for same-day key cutting" },
  "security-systems-access-control": { src: "/images/real/real-reader-install-green.jpg", caption: "Card reader wired in on a commercial entry" },
  "fire-door-repair": { src: "/images/real/real-door-frame-measure.jpg", caption: "Confirming clearances on a fire-rated door frame" },
  "panic-exit-devices": { src: "/images/real/real-panic-bar-street-install.jpg", caption: "Exit device install on a commercial rear door" },
  "door-closers": { src: "/images/real/real-door-closer-install.jpg", caption: "New door closer, mounted and adjusted" },
  "security-gates": { src: "/images/real/real-wood-gate-padlocks.jpg", caption: "Hasp and padlock hardware on a gate install" },
  "intercom-systems": { src: "/images/real/real-intercom-wiring-gray-door.jpg", caption: "Wiring a buzzer entry system at the door" },
  "cctv-camera-systems": { src: "/images/real/real-dome-camera-mount.jpg", caption: "Dome camera mounted on an exterior door frame" },
  "master-key-systems": { src: "/images/real/real-milwaukee-toolbox-hardware.jpg", caption: "Cylinders and cut keys for a building master-key set" },
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    // metaTitle already includes the brand — use absolute to avoid a double suffix.
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/services/${service.slug}`),
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related.map(getService).filter(Boolean);
  const isEmergency = service.emergency;
  const bodyImage = serviceBodyImage[service.slug];

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />

      {/* Hero — cinematic two-column */}
      <section className={cn("relative overflow-hidden border-b border-line", isEmergency ? "bg-emergency-tint/20" : "")}>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(44rem 28rem at 8% -20%, color-mix(in oklab, var(--color-brand-600) 30%, transparent), transparent 60%)" }}
          aria-hidden
        />
        <Container className="relative grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <div className="reveal">
            {isEmergency ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-emergency px-3 py-1 text-sm font-semibold text-white">
                24/7 Emergency Service
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-800 bg-brand-950/50 px-3.5 py-1.5 text-sm font-medium text-brand-300">
                <MapPin className="h-4 w-4" aria-hidden />
                Five Boroughs
              </span>
            )}
            <h1 className="mt-4 text-4xl md:text-5xl">{service.title}</h1>
            {/* Answer-first (GEO/AEO) */}
            <p className="mt-4 text-lg leading-relaxed text-body">{service.answerFirst}</p>
            <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={siteConfig.phone.href}
                className={buttonVariants({ size: "lg", variant: isEmergency ? "emergency" : "primary" })}
              >
                <Phone className="h-4.5 w-4.5" aria-hidden />
                {siteConfig.phone.display}
              </a>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Request a quote
              </Link>
            </div>
          </div>

          <div
            className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl border border-line ring-soft"
            style={{ ["--reveal-delay" as string]: "0.12s" }}
          >
            <Image
              src={serviceHeroImage[service.slug] ?? "/images/real/real-storefront-door.jpg"}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/25 via-transparent to-transparent" />
          </div>
        </Container>
      </section>

      {/* Body */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
            {/* Main column */}
            <div className="max-w-2xl">
              {/* What it is */}
              <div className="space-y-4">
                {service.whatItIs.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-body">
                    {p}
                  </p>
                ))}
              </div>

              {/* When it's needed */}
              <div className="mt-10">
                <h2 className="text-2xl">When you need it</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.whenNeeded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                      <span className="text-sm text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mid-body real photo — breaks up the text wall with a second, distinct shot */}
              {bodyImage ? (
                <figure className="mt-10 overflow-hidden rounded-2xl border border-line ring-soft">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={bodyImage.src}
                      alt={bodyImage.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 42rem"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-line bg-surface px-5 py-3 text-sm text-body">
                    {bodyImage.caption}
                  </figcaption>
                </figure>
              ) : null}

              {/* Process */}
              <div className="mt-10">
                <h2 className="text-2xl">How it works</h2>
                <ol className="mt-5 space-y-4">
                  {service.process.map((step, i) => (
                    <li key={step.title} className="flex gap-4 rounded-xl border border-line bg-surface p-5">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-ink">{step.title}</h3>
                        <p className="mt-1 text-sm text-body">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* How pricing works — honest, no placeholder ranges */}
              <div className="mt-10">
                <h2 className="font-display text-2xl uppercase tracking-tight text-ink">How pricing works</h2>
                <div className="mt-4 rounded-2xl border border-line bg-surface p-6">
                  <p className="leading-relaxed text-body">
                    Every {service.shortTitle.toLowerCase()} job is priced after an <strong className="text-ink">on-site diagnosis</strong> —
                    no guesswork and no surprises. We diagnose the real issue, explain your options in
                    plain language, and give you clear pricing before any work begins.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
              </div>

              {/* Inline quote form — converts right here, no navigating away */}
              <div id="quote-form" className="mt-10 scroll-mt-24 rounded-2xl border border-line bg-surface p-6 sm:p-8">
                <h2 className="text-2xl">Request your on-site quote</h2>
                <p className="mt-2 text-sm text-body">
                  Tell us what&apos;s going on — we&apos;ll get back to you with next steps and honest pricing.
                </p>
                <div className="mt-6">
                  <QuoteForm defaultService={service.title} />
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-10">
                <h2 className="text-2xl">Frequently asked</h2>
                <div className="mt-5">
                  <FaqList faqs={service.faqs} />
                </div>
              </div>
            </div>

            {/* Sidebar */}
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

      {/* Related services */}
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
