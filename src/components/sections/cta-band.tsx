import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/section";

/**
 * Path A conversion band — call + quote. Reused at the foot of service and
 * area pages.
 */
export function CtaBand({
  title = "Need it handled today?",
  subtitle = "Call for same-day service across Brooklyn and Manhattan, or send a few details and we'll get right back to you.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section topBorder>
      <Container>
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-brand-600 p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-xl">
            <h2 className="text-3xl text-white">{title}</h2>
            <p className="mt-3 text-brand-50">{subtitle}</p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:flex-row md:w-auto">
            <a
              href={siteConfig.phone.href}
              className={buttonVariants({ size: "lg", className: "bg-white text-brand-700 hover:bg-brand-50" })}
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
              Get a quote
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
