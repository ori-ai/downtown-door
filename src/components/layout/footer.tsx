import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, formattedAddress, emailAddress } from "@/lib/site";
import { footerNav } from "@/lib/nav";
import { Container } from "@/components/ui/section";
import { Logomark } from "@/components/ui/logomark";
import { FindUsOn } from "@/components/sections/find-us-on";

export function Footer() {
  const year = 2026; // build-time constant; avoids hydration mismatch

  return (
    <footer className="relative mt-4 overflow-hidden border-t border-line bg-surface">
      {/* Faint jobsite texture — real photo, heavily dimmed, never competes with text */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <Image
          src="/images/real/real-key-wall-board.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top opacity-[0.05] grayscale"
        />
        <div className="grain absolute inset-0 opacity-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/98 to-surface" />
      </div>
      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + NAP */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white ring-1 ring-inset ring-white/15">
                <Logomark className="h-6 w-6" />
              </span>
              <span className="font-display text-lg font-bold text-ink">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              Door repair, installation, locksmith, and commercial security systems
              for homes, businesses, and institutions across the five boroughs.
            </p>

            <address className="mt-6 space-y-2 text-sm not-italic text-body">
              <a href={siteConfig.phone.href} className="flex items-center gap-2 hover:text-brand-700">
                <Phone className="h-4 w-4 text-brand-600" aria-hidden />
                {siteConfig.phone.display}
              </a>
              <a href={`mailto:${emailAddress("general")}`} className="flex items-center gap-2 hover:text-brand-700">
                <Mail className="h-4 w-4 text-brand-600" aria-hidden />
                {emailAddress("general")}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                {formattedAddress()}
              </span>
            </address>

            <p className="mt-5 inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-body">
              {siteConfig.credentials.licenseNumber
                ? `Licensed & Insured — NYC DCA Lic. #${siteConfig.credentials.licenseNumber}`
                : "Licensed & Insured"}
            </p>

            <FindUsOn variant="compact" className="mt-5" />
          </div>

          {/* Link columns */}
          {footerNav.map((col) => (
            <nav key={col.href} aria-label={col.label}>
              <h3 className="font-display text-sm font-semibold text-ink">{col.label}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.children?.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-body hover:text-brand-700">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Serving the Five Boroughs.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-brand-700">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-700">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
