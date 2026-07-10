import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  Phone,
  ArrowRight,
  FileText,
  Home,
  Landmark,
  CheckCircle2,
  BadgeCheck,
  MapPin,
  Star,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

const d = (s: number): CSSProperties => ({ "--reveal-delay": `${s}s` } as CSSProperties);

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Animated aurora + grain backdrop */}
      <div className="bg-aurora grain" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/70 to-white" aria-hidden />

      <Container className="relative pt-16 pb-6 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700" style={d(0)}>
            <MapPin className="h-4 w-4" aria-hidden />
            Serving Brooklyn &amp; Manhattan
          </p>

          <h1 className="mt-6 text-[2.6rem] leading-[1.03] md:text-6xl">
            <span className="reveal block" style={d(0.08)}>Doors repaired.</span>
            <span className="reveal block" style={d(0.18)}>Buildings secured.</span>
            <span className="reveal block text-gradient" style={d(0.28)}>Done right, the first time.</span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body" style={d(0.4)}>
            Downtown Door Repair &amp; Security handles door repair, installation,
            locksmith, and commercial security work across Brooklyn and Manhattan — for
            homeowners and businesses that need it done fast, and for institutions that
            need a vendor they can vet.
          </p>
        </div>

        {/* Two distinct buyer paths */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {/* PATH A */}
          <div className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white ring-soft" style={d(0.5)}>
            <div className="relative h-44 overflow-hidden">
              <Image
                src="/images/hero-entry.png"
                alt="Modern residential entry door in Brooklyn"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent" />
              <span className="glass absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl text-brand-600">
                <Home className="h-5.5 w-5.5" aria-hidden />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-2xl">Need a repair now?</h2>
              <p className="mt-2 text-body">
                Homeowners, landlords &amp; businesses — a door, lock, or storefront fixed
                fast. Same-visit repairs when parts are on hand.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-body">
                {["Door repair & installation", "Emergency & break-in repair", "Locks, hardware & security"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4.5 w-4.5 text-brand-600" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <a href={siteConfig.phone.href} className={buttonVariants({ size: "lg", className: "flex-1" })}>
                  <Phone className="h-4.5 w-4.5" aria-hidden />
                  {siteConfig.phone.display}
                </a>
                <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg", className: "flex-1" })}>
                  Get a quote
                </Link>
              </div>
            </div>
          </div>

          {/* PATH B */}
          <div className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-brand-800 bg-brand-950 text-white ring-soft" style={d(0.6)}>
            <div className="relative h-44 overflow-hidden">
              <Image
                src="/images/security-cctv.png"
                alt="Commercial building security cameras"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/40 to-transparent" />
              <span className="glass-dark absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl text-brand-200">
                <Landmark className="h-5.5 w-5.5" aria-hidden />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-2xl text-white">Bidding on a public project?</h2>
              <p className="mt-2 text-brand-100">
                Facilities &amp; procurement teams — review our capacity to deliver on
                institutional door and security projects across NYC.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-brand-100">
                {["Licensing, insurance & bonding", "Capability statement & references", "Schools, hospitals & municipal"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <BadgeCheck className="h-4.5 w-4.5 text-brand-300" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <Link href="/government-contracting" className={buttonVariants({ size: "lg", className: "flex-1 bg-white text-brand-800 hover:bg-brand-50" })}>
                  Public sector
                  <ArrowRight className="h-4.5 w-4.5" aria-hidden />
                </Link>
                <Link
                  href="/government-contracting/capability-statement"
                  className={buttonVariants({ variant: "outline", size: "lg", className: "flex-1 border-white/25 bg-transparent text-white hover:bg-white/10 hover:border-white/40" })}
                >
                  <FileText className="h-4.5 w-4.5" aria-hidden />
                  Capability
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust row */}
        <ul className="reveal mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted" style={d(0.7)}>
          <li className="flex items-center gap-2"><ShieldCheck className="h-4.5 w-4.5 text-brand-600" aria-hidden /> Licensed &amp; Insured</li>
          <li className="flex items-center gap-2"><Star className="h-4.5 w-4.5 text-brand-500" aria-hidden /> Trusted local service</li>
          <li className="flex items-center gap-2"><MapPin className="h-4.5 w-4.5 text-brand-600" aria-hidden /> Brooklyn &amp; Manhattan</li>
          <li className="flex items-center gap-2"><BadgeCheck className="h-4.5 w-4.5 text-brand-600" aria-hidden /> Residential · Commercial · Institutional</li>
        </ul>
      </Container>
    </section>
  );
}
