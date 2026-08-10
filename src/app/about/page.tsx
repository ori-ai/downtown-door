import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Building2, Users, Wrench, HeartHandshake, MapPin, BadgeCheck } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { supplierBrands } from "@/lib/brands";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import { VideoGallery, type RealVideo } from "@/components/sections/video-gallery";
import { FindUsOn } from "@/components/sections/find-us-on";

// Real, no-person shots that show how the work actually gets done — the shop,
// the truck, and jobs on real Brooklyn/Manhattan buildings.
const aboutGallery = [
  { src: "/images/real/real-hardware-supply-room.jpg", label: "Our hardware stock" },
  { src: "/images/real/real-key-van-workshop.jpg", label: "Key cutting, on the truck" },
  { src: "/images/real/real-brownstone-jobsite.jpg", label: "On site in Brooklyn Heights" },
  { src: "/images/real/real-landmark-door-hardware.jpg", label: "Landmark building door hardware" },
  { src: "/images/real/real-key-wall-board.jpg", label: "Cut keys, wall to wall" },
  { src: "/images/real/real-milwaukee-toolbox-hardware.jpg", label: "The truck, restocked" },
  { src: "/images/real/real-toolboxes-sidewalk.jpg", label: "Set up curbside for the day" },
  { src: "/images/real/real-key-cutting-workbench.jpg", label: "Cutting a car key on the bench" },
  { src: "/images/real/real-storefront-door-repair-candid.jpg", label: "Mid-repair, commercial glass entry" },
  { src: "/images/real/real-glass-rail-install-candid.jpg", label: "Glass door rail, fit in place" },
];

// Real, unedited jobsite clips — no faces, no competitor branding, no stock
// footage. Muted autoplay loops with a click-to-unmute affordance.
const aboutVideos: RealVideo[] = [
  {
    src: "/videos/real-glass-door-sensor-install.mp4",
    poster: "/videos/real-glass-door-sensor-install-poster.jpg",
    label: "Wireless sensor install, glass storefront door",
  },
  {
    src: "/videos/real-gate-padlock-install.mp4",
    poster: "/videos/real-gate-padlock-install-poster.jpg",
    label: "Hasp & padlock install, wood gate",
  },
  {
    src: "/videos/real-door-hardware-test.mp4",
    poster: "/videos/real-door-hardware-test-poster.jpg",
    label: "Deadbolt & lever hardware, fit and test",
  },
  {
    src: "/videos/real-storefront-handle-test.mp4",
    poster: "/videos/real-storefront-handle-test-poster.jpg",
    label: "Storefront door handle, fit and test",
  },
  {
    src: "/videos/real-alarm-panel-wiring.mp4",
    poster: "/videos/real-alarm-panel-wiring-poster.jpg",
    label: "Alarm panel wiring, exterior brick mount",
  },
  {
    src: "/videos/real-knob-install-quick.mp4",
    poster: "/videos/real-knob-install-quick-poster.jpg",
    label: "Knob & latch install",
  },
  {
    src: "/videos/real-office-access-walkthrough.mp4",
    poster: "/videos/real-office-access-walkthrough-poster.jpg",
    label: "Commercial access-control walkthrough",
  },
  {
    src: "/videos/real-institutional-door-closer.mp4",
    poster: "/videos/real-institutional-door-closer-poster.jpg",
    label: "Door closer adjustment, institutional stairwell",
  },
];

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Downtown Doors & Security Systems NYC is a Brooklyn-based door repair, locksmith, and security company serving homes, businesses, and institutions across the five boroughs.",
  alternates: { canonical: "/about" },
  openGraph: { url: absoluteUrl("/about") },
};

const values = [
  { icon: Wrench, title: "Do it right the first time", desc: "We diagnose the real cause and fix it properly — not the quickest patch." },
  { icon: HeartHandshake, title: "Straight talk on price", desc: "Clear scope and pricing before work starts. No surprises on the invoice." },
  { icon: ShieldCheck, title: "Licensed & insured", desc: "Proper credentials and documentation, for homeowners and institutions alike." },
  { icon: Building2, title: "Built for any client", desc: "From a single apartment door to a full building security system." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-800 bg-brand-950/50 px-3 py-1 text-sm font-medium text-brand-700">
              <MapPin className="h-4 w-4" aria-hidden />
              the Five Boroughs
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl">About Downtown Doors &amp; Security Systems NYC</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              We&apos;re a Brooklyn-based door, lock, and security company serving homeowners,
              businesses, and institutions across the five boroughs — from emergency
              repairs to full building security systems.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="max-w-xl">
              <h2 className="text-2xl">Who we are</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
                <p>
                  Downtown Doors &amp; Security Systems NYC handles the full range of door,
                  hardware, locksmith, and security work — repair and installation,
                  emergency response, storefront and commercial doors, locks and smart
                  hardware, and access control, intercoms, and cameras.
                </p>
                <p>
                  We work for two very different kinds of clients: homeowners and
                  businesses who need something fixed quickly and correctly, and
                  institutional clients — schools, hospitals, and municipal facilities —
                  who need a vendor with the credentials and process to deliver on public
                  projects. We&apos;re set up to serve both well.
                </p>
                <p>
                  Based in Brooklyn, we handle door repair and installation, locksmith and
                  door hardware, and commercial security and access control across the five
                  boroughs — for homeowners, businesses, and institutional clients alike.
                </p>
              </div>
            </div>
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-brand-800 bg-surface bg-cover bg-center"
              style={{ backgroundImage: "url('/images/real/real-vestibule-door-latch.jpg')" }}
              role="img"
              aria-label="Door hardware repair on a Brooklyn building entrance"
            />
          </div>
        </Container>
      </Section>

      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading eyebrow="What we stand for" title="How we work" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-line bg-surface p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-950/60 text-brand-300">
                  <v.icon className="h-5.5 w-5.5" aria-hidden />
                </span>
                <h3 className="mt-4 font-bold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-sm text-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading eyebrow="On the job" title="Real jobs, real hardware" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutGallery.map((item) => (
              <figure key={item.src} className="group relative overflow-hidden rounded-2xl border border-line ring-soft">
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
            ))}
          </div>
        </Container>
      </Section>

      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="On the job, on video"
            title="Real jobs, real footage"
            intro="Short clips straight from the field — no stock footage, no actors. Tap the speaker icon to unmute."
          />
          <div className="mt-8">
            <VideoGallery videos={aboutVideos} />
          </div>
        </Container>
      </Section>

      <Section topBorder>
        <Container>
          <div className="grid gap-6 rounded-3xl border border-line bg-surface p-8 md:grid-cols-3 md:p-10">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-6 w-6 shrink-0 text-brand-600" aria-hidden />
              <div>
                <h3 className="font-bold text-ink">Licensed &amp; Insured</h3>
                <p className="mt-1 text-sm text-body">Documentation available on request.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="h-6 w-6 shrink-0 text-brand-600" aria-hidden />
              <div>
                <h3 className="font-bold text-ink">Residential &amp; commercial</h3>
                <p className="mt-1 text-sm text-body">Homes, storefronts, offices, and buildings.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Building2 className="h-6 w-6 shrink-0 text-brand-600" aria-hidden />
              <div>
                <h3 className="font-bold text-ink">Institutional-ready</h3>
                <p className="mt-1 text-sm text-body">Set up for public-sector procurement.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section topBorder className="bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Hardware we install"
            title="Brands we work with"
            intro="Real hardware from our own trucks and jobs — not a generic industry list."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {supplierBrands.map((b) => (
              <span
                key={b.name}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-4 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-ink"
              >
                <BadgeCheck className="h-4 w-4 text-brand-500" aria-hidden />
                {b.name}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section topBorder>
        <Container>
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center md:p-8">
            <div>
              <h2 className="text-xl font-bold text-ink">Find us on</h2>
              <p className="mt-1.5 text-sm text-body">Verified listings — read reviews or reach out on the platform you already use.</p>
            </div>
            <FindUsOn />
          </div>
        </Container>
      </Section>

      <CtaBand title="Work with us" subtitle={`Serving the five boroughs. Call ${siteConfig.phone.display} or request a quote.`} />
    </>
  );
}
