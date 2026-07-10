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
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { publishedHubs } from "@/lib/service-areas";
import { faqSchema } from "@/lib/schema";
import { buttonVariants } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Hero } from "@/components/sections/hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { JsonLd } from "@/components/json-ld";

const homeFaqs = [
  {
    q: "What areas does Downtown Door Repair & Security serve?",
    a: "We serve Brooklyn and Manhattan for door repair, installation, locksmith, and security-system work. Expansion to Queens, the Bronx, Staten Island, Nassau, Westchester, and Bergen County (NJ) is planned.",
  },
  {
    q: "Do you offer emergency door repair?",
    a: "Yes. We provide emergency door repair across Brooklyn and Manhattan when a door won't lock, won't close, or has been damaged in a break-in — securing the opening first, then completing a full repair.",
  },
  {
    q: "Do you work with government agencies, schools, and institutions?",
    a: "Yes. Alongside residential and commercial work, we serve institutional clients — public schools, hospitals, and municipal buildings. See our government & institutional contracting section to request a capability statement or submit a bid inquiry.",
  },
];

const workGallery = [
  { src: "/images/hero-entry.png", label: "Entry & residential doors" },
  { src: "/images/storefront.png", label: "Commercial & storefront doors" },
  { src: "/images/intercom.png", label: "Intercom & entry systems" },
  { src: "/images/security-cctv.png", label: "Security cameras & CCTV" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <Hero />

      {/* ---------------- SERVICES ---------------- */}
      <Section topBorder>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Door, lock & security services"
              intro="Residential and commercial work across Brooklyn and Manhattan — from a single sticking door to a full building access-control system."
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ---------------- MEDIA SHOWCASE ---------------- */}
      <Section topBorder className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The work we do"
              title="One team for doors, hardware & security"
              intro="Illustrative of the services we provide across NYC. Your own project photos drop in here once supplied — we don't pass off stock as your work."
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workGallery.map((item) => (
              <StaggerItem key={item.src}>
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
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ---------------- PROCESS ---------------- */}
      <Section topBorder>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Straightforward, from call to fixed"
              intro="No guesswork and no surprise pricing — you know what's wrong and what it costs before we start."
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Phone, title: "Call or request a quote", desc: "Tell us what's going on. We'll advise and schedule promptly." },
              { icon: Search, title: "On-site diagnosis", desc: "We find the real cause — often the frame or hardware, not the door." },
              { icon: ClipboardCheck, title: "Clear scope & price", desc: "Plain-language options and pricing before any work begins." },
              { icon: Wrench, title: "Repaired & verified", desc: "We fix it, test that it locks and seals, and clean up." },
            ].map((step, i) => (
              <StaggerItem key={step.title}>
                <div className="relative h-full rounded-2xl border border-line bg-white p-6 ring-soft transition-transform hover:-translate-y-1">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <step.icon className="h-5.5 w-5.5" aria-hidden />
                  </span>
                  <span className="absolute right-5 top-5 font-display text-2xl font-bold text-brand-100">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-body">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* ---------------- SERVICE AREAS ---------------- */}
      <Section topBorder className="bg-surface">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Serving Brooklyn & Manhattan"
              intro="Local, neighborhood-level service. More boroughs and counties are coming in Phase 2."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {publishedHubs.map((hub, i) => (
              <Reveal key={hub.slug} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 ring-soft">
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
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-800 bg-brand-950 text-white ring-soft">
              <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
                <Image
                  src="/images/intercom.png"
                  alt="Building intercom and access-control panel"
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
          </Reveal>
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
                    <div key={f.q} className="rounded-xl border border-line bg-white p-5 ring-soft">
                      <h3 className="text-base font-bold text-ink">{f.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-body">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-3xl border border-line bg-brand-600 p-8 text-white ring-soft">
                <h2 className="text-3xl text-white">Ready when you are.</h2>
                <p className="mt-3 text-brand-50">
                  Call for same-day help, or send a few details and we'll get right back to
                  you with next steps and pricing.
                </p>
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                  <a href={siteConfig.phone.href} className={buttonVariants({ size: "lg", className: "bg-white text-brand-700 hover:bg-brand-50" })}>
                    <Phone className="h-4.5 w-4.5" aria-hidden />
                    {siteConfig.phone.display}
                  </a>
                  <Link
                    href="/contact"
                    className={buttonVariants({ variant: "outline", size: "lg", className: "border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50" })}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
