import Link from "next/link";
import { Phone, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";
import { MotionReveal } from "@/components/motion/scroll-fx";

/**
 * Path A conversion band — call + quote. Reused at the foot of service and
 * area pages. Deliberately louder than a flat color block: layered gradient,
 * glow, and a scroll-triggered pop-in so it reads as a real conversion
 * moment, not another gray card.
 */
export function CtaBand({
  title = "Need it handled today?",
  subtitle = "Call for same-day service across the five boroughs, or send a few details and we'll get right back to you.",
  eyebrow = "Same-day availability",
}: {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <Section topBorder>
      <Container>
        <MotionReveal>
          <div
            className="relative overflow-hidden rounded-3xl border border-brand-400/30 p-8 text-white shadow-[0_30px_90px_-30px_var(--color-brand-600)] md:p-12"
            style={{
              background:
                "radial-gradient(120% 160% at 0% 0%, color-mix(in oklab, var(--color-brand-400) 55%, transparent), transparent 55%), radial-gradient(120% 160% at 100% 100%, color-mix(in oklab, var(--color-accent) 35%, transparent), transparent 55%), linear-gradient(115deg, var(--color-brand-600), var(--color-brand-700) 65%)",
            }}
          >
            {/* faint tech grid, matches hero */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
              aria-hidden
            />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white ring-1 ring-white/25 backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  {eyebrow}
                </span>
                <h2 className="mt-3 text-3xl text-white">{title}</h2>
                <p className="mt-3 text-brand-50">{subtitle}</p>
              </div>
              <div className="flex w-full flex-col gap-2.5 sm:flex-row md:w-auto">
                <a
                  href={siteConfig.phone.href}
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-white text-brand-700 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.4)] hover:bg-brand-50 hover:shadow-[0_10px_30px_-6px_rgba(0,0,0,0.5)]",
                  })}
                >
                  <Phone className="h-4.5 w-4.5" aria-hidden />
                  {siteConfig.phone.display}
                </a>
                <Link
                  href="/contact"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className: "border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50",
                  })}
                >
                  <Zap className="h-4.5 w-4.5" aria-hidden />
                  Get a quote
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </Section>
  );
}
