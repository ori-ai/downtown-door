import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

import { offices } from "@/lib/locations";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import { Parallax } from "@/components/motion/scroll-fx";
import { HeroMedia } from "@/components/sections/hero-media";

const trust = ["Licensed & insured", "24/7 emergency", "Residential · Commercial · Institutional"];

/**
 * Full-bleed cinematic hero: real photos/video ARE the background, the
 * whole width of the section — not boxed into a side panel. Text sits in a
 * scrim-protected column on top. This is the "ideal" pattern for a trade
 * brand leaning on real jobsite footage for credibility: let the real work
 * carry the visual weight instead of competing with it in a small frame.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      {/* Full-bleed real media, whole section */}
      <div className="absolute inset-0 -z-20">
        <Parallax strength={30} className="absolute -inset-y-16 inset-x-0">
          <HeroMedia />
        </Parallax>
      </div>

      {/* Scrim: dark from the left (text legibility) + from the bottom, on
          top of the media but under the text/CTA layer. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(105deg, #0a1330 0%, rgba(10,19,48,0.94) 32%, rgba(10,19,48,0.55) 58%, rgba(10,19,48,0.22) 78%, rgba(10,19,48,0.35) 100%), linear-gradient(to top, #0a1330 0%, rgba(10,19,48,0.5) 22%, transparent 46%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-brand-300) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-300) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      <Container className="relative flex min-h-[32rem] flex-col justify-center py-16 sm:min-h-[38rem] md:min-h-[42rem] md:py-20">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-700/60 bg-[#0a1330]/50 px-3 py-1 font-display text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-300 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
            803 Greenwich St · West Village · NYC
          </span>

          {/* H1 = the storefront sign, verbatim (Ori 2026-08-25) */}
          <h1 className="mt-6 font-display text-[1.55rem] font-bold uppercase leading-[1.15] tracking-[0.005em] text-ink drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] md:text-[2.35rem]">
            Downtown Locksmith <span className="text-brand-400">&amp; Security Intercoms</span>
            <span className="mt-1 block text-[1.05rem] font-semibold tracking-[0.08em] text-brand-100 md:text-[1.45rem]">
              West Village
            </span>
          </h1>

          <p className="mt-5 font-display text-sm font-medium uppercase tracking-[0.12em] text-brand-100 md:text-base">
            Locks changed. Buildings secured. Done right — the first time.
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
            Walk into our storefront at 803 Greenwich St for keys, high-security locks,
            and hardware — or have a tech dispatched anywhere in NYC for locksmith,
            intercom, access-control, camera, and door work. Open 24/7.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", className: "justify-center shadow-[0_10px_30px_-8px_var(--color-brand-600)]" })}
            >
              Request your on-site quote
              <ArrowRight className="h-4.5 w-4.5" aria-hidden />
            </Link>
            {/* THE one number — (347) 851-8615, same as the storefront sign */}
            {offices.map((o) => (
              <a
                key={o.slug}
                href={o.phone.href}
                className={buttonVariants({ variant: "outline", size: "lg", className: "justify-center border-white/25 bg-[#0a1330]/40 text-ink backdrop-blur-sm hover:bg-brand-900/60" })}
              >
                <Phone className="h-4.5 w-4.5" aria-hidden />
                <span>
                  {o.phone.display}
                  <span className="ml-2 hidden text-xs font-semibold uppercase tracking-wide text-brand-300 sm:inline">
                    {o.shortLabel}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/15 pt-6 text-sm">
            {trust.map((t, i) => (
              <li key={t} className="flex items-center gap-6">
                {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-brand-400 sm:block" aria-hidden />}
                <span className="font-medium text-body drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
