import Link from "next/link";
import { DoorClosed, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, formattedAddress, emailAddress } from "@/lib/site";
import { footerNav } from "@/lib/nav";
import { Container } from "@/components/ui/section";

export function Footer() {
  const year = 2026; // build-time constant; avoids hydration mismatch

  return (
    <footer className="mt-4 border-t border-line bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + NAP */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-600 text-white">
                <DoorClosed className="h-5 w-5" aria-hidden />
              </span>
              <span className="font-display text-lg font-bold text-ink">
                {siteConfig.name}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              Door repair, installation, locksmith, and commercial security systems
              for homes, businesses, and institutions across Brooklyn and Manhattan.
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

            <p className="mt-5 inline-flex items-center rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-body">
              Licensed &amp; Insured
            </p>
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
            © {year} {siteConfig.name}. Serving Brooklyn &amp; Manhattan.
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
