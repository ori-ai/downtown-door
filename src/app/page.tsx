import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Search,
  ClipboardCheck,
  Wrench,
  BadgeCheck,
  MapPin,
  Star,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { galleryItems } from "@/lib/gallery";
import { publishedHubs } from "@/lib/service-areas";
import { faqSchema } from "@/lib/schema";
import { buttonVariants } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { BrandsStrip } from "@/components/sections/brands-strip";
import { Reveal } from "@/components/motion/reveal";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion/scroll-fx";
import { JsonLd } from "@/components/json-ld";
import { CtaBand } from "@/components/sections/cta-band";
import { QuoteForm } from "@/components/forms/quote-form";

const homeFaqs = [
  {
    q: "What areas does Downtown Locksmith & Security Intercoms serve?",
    a: "We serve all five NYC boroughs — Brooklyn, Manhattan, Queens, the Bronx, and Staten Island — for locksmith, security-system, and door work, plus Westchester, Rockland, and Nassau counties, and Bergen County, NJ, by request.",
  },
  {
    q: "Do you offer 24/7 emergency locksmith service near me?",
    a: "Yes. We respond around the clock across the five boroughs for lockouts, broken keys, and lock changes after a break-in — no appointment needed for an emergency call.",
  },
  {
    q: "How fast can you install commercial access control in NYC?",
    a: "Most single-door commercial access control or intercom installs are quoted and scheduled within a few days of an on-site assessment — larger multi-door or building-wide systems take longer depending on wiring and panel count.",
  },
  {
    q: "How much does an intercom repair cost?",
    a: "It depends on whether it's a wiring issue, a panel or unit failure, or a full video-intercom upgrade — we diagnose on site and give a plain-language price before any work begins.",
  },
  {
    q: "Do you offer emergency door repair?",
    a: "Yes. We provide emergency door repair across the five boroughs when a door won't lock, won't close, or has been damaged in a break-in — securing the opening first, then completing a full repair.",
  },
  {
    q: "Do you work with government agencies, schools, and institutions?",
    a: "Yes. Alongside residential and commercial work, we serve institutional clients — public schools, hospitals, and municipal buildings. See our government & institutional contracting section to request a capability statement or submit a bid inquiry.",
  },
];

// Locksmith + security first, a few door shots for variety — pulled from the
// same real-photo pool as the full /gallery page (see src/lib/gallery.ts).
const workGallery = [
  ...galleryItems.filter((g) => g.category === "locksmith").slice(0, 8),
  ...galleryItems.filter((g) => g.category === "security").slice(0, 8),
  ...galleryItems.filter((g) => g.category === "door").slice(0, 4),
].map((g) => ({ src: g.src, label: g.caption }));

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero />
      <TrustStrip />
      <BrandsStrip />

      {/* ---------------- SERVICES ---------------- */}
      <Section topBorder>
        <Container>
          <MotionReveal>
            <SectionHeading
              eyebrow="What we do"
              title="Locksmith, security & access-control services"
              intro="Residential and commercial work across the five boroughs — from a lockout or intercom repair to a full building access-control system. Door repair, too."
            />
          </MotionReveal>
          <MotionStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <MotionStaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </Container>
      </Section>

      <CtaBand
        title="Not sure what you need?"
        subtitle="Tell us what's going on — we'll help you figure it out, price it honestly, and get it scheduled."
        quoteHref="#quote-form"
        phone={siteConfig.phone}
      />

      {/* ---------------- MEDIA SHOWCASE ---------------- */}
      <Section topBorder className="bg-surface">
        <Container>
          <MotionReveal>
            <SectionHeading
              eyebrow="The work we do"
              title="Locksmith, security & hardware — done on site"
              intro="Real jobs across the five boroughs — lock installs, access control, intercoms, cameras, and door hardware. No stock photos."
            />
          </MotionReveal>
          <MotionStagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workGallery.map((item) => (
              <MotionStaggerItem key={item.src}>
                <figure className="group relative overflow-hidden rounded-2xl border border-line ring-soft">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                    {item.label}
                  </figcaption>
                </figure>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
          <div className="mt-8 flex justify-center">
            <Link href="/gallery" className={buttonVariants({ variant: "outline", size: "lg" })}>
              See the full gallery
              <ArrowRight className="h-4.5 w-4.5" aria-hidden />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------------- INLINE POP CTA (post-gallery conversion moment) ---------------- */}
      <Section className="!py-8">
        <Container>
          <MotionReveal>
            <div className="relative overflow-hidden rounded-2xl border border-brand-500/40 bg-brand-950 px-6 py-5 shadow-[0_20px_60px_-24px_var(--color-brand-600)] sm:px-8">
              <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-70"
                style={{ background: "radial-gradient(60rem 20rem at 20% 0%, color-mix(in oklab, var(--color-brand-600) 55%, transparent), transparent 70%)" }}
                aria-hidden
              />
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-3">
                  <span className="hidden items-center gap-0.5 sm:flex" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-300 text-brand-300" />
                    ))}
                  </span>
                  <p className="text-center text-base font-semibold text-white sm:text-left">
                    Like what you see? Get the same crew on your job — today.
                  </p>
                </div>
                <a
                  href={siteConfig.phone.href}
                  className={buttonVariants({ size: "lg", className: "w-full shrink-0 bg-white text-brand-700 hover:bg-brand-50 sm:w-auto" })}
                  data-analytics="homepage-post-gallery-cta"
                >
                  <Phone className="h-4.5 w-4.5" aria-hidden />
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      {/* ---------------- PROCESS ---------------- */}
      <Section topBorder>
        <Container>
          <MotionReveal>
            <SectionHeading
              eyebrow="How it works"
              title="Straightforward, from call to fixed"
              intro="No guesswork and no surprise pricing — you know what's wrong and what it costs before we start."
            />
          </MotionReveal>
          <MotionStagger className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Phone, title: "Call or request a quote", desc: "Tell us what's going on. We'll advise and schedule promptly." },
              { icon: Search, title: "On-site diagnosis", desc: "We find the real cause — often the frame or hardware, not the door." },
              { icon: ClipboardCheck, title: "Clear scope & price", desc: "Plain-language options and pricing before any work begins." },
              { icon: Wrench, title: "Repaired & verified", desc: "We fix it, test that it locks and seals, and clean up." },
            ].map((step, i) => (
              <MotionStaggerItem key={step.title}>
                <div className="relative h-full rounded-2xl border border-line bg-surface p-6 transition-transform hover:-translate-y-1 hover:border-brand-700">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-950/60 text-brand-300">
                    <step.icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <span className="absolute right-5 top-5 font-display text-2xl font-bold text-brand-100">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-body">{step.desc}</p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </Container>
      </Section>

      <CtaBand
        title="See real jobs, then call us for yours."
        subtitle="Same crew, same quality — from a sticking door to a full building security upgrade."
        quoteHref="#quote-form"
        eyebrow="Real crew, real photos"
        phone={siteConfig.phone}
      />

      {/* ---------------- SERVICE AREAS ---------------- */}
      <Section topBorder className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Serving the five boroughs"
              intro="Local, neighborhood-level service across Brooklyn, Manhattan, Queens, the Bronx & Staten Island — plus Westchester, Rockland, Nassau & Bergen County, NJ, by request."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {publishedHubs.map((hub, i) => (
              <Reveal key={hub.slug} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-surface p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-ink">{hub.name}</h3>
                    <Link href={`/service-areas/${hub.slug}`} className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                      View area →
                    </Link>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {hub.neighborhoods.map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={`/service-areas/${hub.slug}/${n.slug}`}
                          className="inline-flex rounded-full border border-line bg-surface px-3 py-1 text-sm text-body transition-colors hover:border-brand-300 hover:text-brand-700"
                        >
                          {n.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------------- GOVERNMENT (Path B) ---------------- */}
      <Section topBorder>
        <Container>
          <MotionReveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-800 bg-brand-950 text-white ring-soft">
              <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
                <Image
                  src="/images/real/real-storefront-door.jpg"
                  alt="Commercial glass storefront door with door closer, installed by Downtown Locksmith & Security Intercoms in NYC"
                  fill
                  sizes="50vw"
                  className="object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-transparent" />
              </div>
              <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                    Government & institutional
                  </p>
                  <h2 className="mt-3 text-3xl text-white">Vetting vendors for a public project?</h2>
                  <p className="mt-4 text-brand-100">
                    We support facilities and procurement teams at public schools,
                    hospitals, and municipal agencies with the licensing, insurance,
                    compliance, and references institutional buyers require — no sales
                    urgency, just proof of capacity.
                  </p>
                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                    <Link href="/government-contracting" className={buttonVariants({ size: "lg", className: "bg-white text-brand-800 hover:bg-brand-50" })}>
                      Explore public sector
                      <ArrowRight className="h-4.5 w-4.5" aria-hidden />
                    </Link>
                    <Link
                      href="/contact?type=bid"
                      className={buttonVariants({ variant: "outline", size: "lg", className: "border-white/25 bg-transparent text-white hover:bg-white/10 hover:border-white/40" })}
                    >
                      Submit a bid inquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      {/* ---------------- FAQ + CTA ---------------- */}
      <Section topBorder className="bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <SectionHeading eyebrow="FAQ" title="Common questions" />
                <div className="mt-8 space-y-4">
                  {homeFaqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-line bg-surface p-5">
                      <h3 className="text-base font-bold text-ink">{f.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <MotionReveal delay={0.1}>
              <div
                className="relative flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-brand-400/30 p-8 text-white shadow-[0_30px_90px_-30px_var(--color-brand-600)] ring-soft"
                style={{
                  background:
                    "radial-gradient(120% 160% at 100% 0%, color-mix(in oklab, var(--color-accent) 30%, transparent), transparent 55%), linear-gradient(120deg, var(--color-brand-600), var(--color-brand-700) 70%)",
                }}
              >
                <BadgeCheck className="h-8 w-8 text-brand-200" aria-hidden />
                <h2 className="mt-4 text-3xl text-white">Ready when you are.</h2>
                <p className="mt-3 text-brand-50">
                  Call for same-day help, or send a few details and we'll get right back to
                  you with next steps and pricing.
                </p>
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={siteConfig.phone.href}
                    className={buttonVariants({ size: "lg", className: "bg-white text-brand-700 shadow-lg shadow-black/30 hover:bg-brand-50" })}
                  >
                    <Phone className="h-4.5 w-4.5" aria-hidden />
                    {siteConfig.phone.display}
                  </a>
                  <a
                    href="#quote-form"
                    className={buttonVariants({ variant: "outline", size: "lg", className: "border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50" })}
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </MotionReveal>
          </div>
        </Container>
      </Section>

      {/* Inline quote form — converts right here, no navigating away */}
      <Section topBorder>
        <Container>
          <div id="quote-form" className="mx-auto max-w-2xl scroll-mt-24 rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <SectionHeading
              eyebrow="Get started"
              title="Request your on-site quote"
              intro="Tell us what's going on — we'll get back to you with next steps and honest pricing."
            />
            <div className="mt-6">
              <QuoteForm phone={siteConfig.phone} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
