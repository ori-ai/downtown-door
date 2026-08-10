import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Info, Landmark } from "lucide-react";

import { commercialCaseStudies } from "@/lib/case-studies";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/motion/scroll-fx";

export const metadata: Metadata = {
  title: "Our Work — Commercial Clients",
  description:
    "Real commercial clients Downtown Doors & Security Systems NYC has worked with across the five boroughs — storefront doors, security cameras, lock rekeys, gate repair, and intercom systems.",
  alternates: { canonical: "/case-studies" },
  openGraph: { url: absoluteUrl("/case-studies") },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/case-studies" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Our work</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              A look at real commercial clients we&apos;ve worked with across the five
              boroughs — storefront doors, security cameras, lock rekeys, gate repair, and
              intercom systems.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <MotionReveal>
            <div className="mb-10 flex items-start gap-3 rounded-2xl border border-line bg-surface p-5">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" aria-hidden />
              <p className="text-sm leading-relaxed text-body">
                Photos below show the type of work performed — not the client&apos;s actual
                storefront. We don&apos;t have on-site photos of these specific jobs, so each
                card uses a representative shot from our own job history.
              </p>
            </div>
          </MotionReveal>

          <MotionStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commercialCaseStudies.map((cs) => (
              <MotionStaggerItem key={cs.client}>
                <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface ring-soft">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                    <span className="absolute left-3 top-3 inline-flex items-center rounded-full border border-line bg-brand-950/70 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-brand-200 backdrop-blur-sm">
                      Representative work
                    </span>
                  </div>
                  <figcaption className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-ink">{cs.client}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {cs.workPerformed.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-body">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </figcaption>
                </figure>
              </MotionStaggerItem>
            ))}
          </MotionStagger>

          <MotionReveal delay={0.1}>
            <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-start gap-2.5 text-sm text-body">
                <Landmark className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                Working with a school, hospital, or municipal facility? See our{" "}
                <Link href="/government-contracting" className="font-semibold text-brand-700 hover:text-brand-800">
                  institutional &amp; government contracting
                </Link>{" "}
                page.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <CtaBand
        title="Want your business on this list?"
        subtitle={`Storefront doors, cameras, locks, gates, and intercoms — call ${siteConfig.phone.display} or request a quote.`}
      />
    </>
  );
}
