import Link from "next/link";
import { supplierBrands } from "@/lib/brands";
import { Container } from "@/components/ui/section";
import { cn } from "@/lib/utils";

/**
 * Compact "hardware we install" strip — real supplier/tool brands only,
 * confirmed visible in our own jobsite and workshop photos (see
 * `src/lib/brands.ts` for the evidence trail). Never a competing
 * locksmith/security SERVICE business — those are excluded by design.
 * Brands with a landing page (src/app/brands/[slug]) link there; the rest
 * (tool brands like DeWalt/Milwaukee) render as plain text.
 */
export function BrandsStrip({ className }: { className?: string }) {
  return (
    <section className={cn("border-y border-line bg-surface", className)}>
      <Container className="flex flex-col items-center gap-5 py-9 sm:flex-row sm:justify-between">
        <p className="shrink-0 text-sm font-semibold uppercase tracking-wider text-muted">
          Hardware we install
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:justify-end">
          {supplierBrands.map((b) => (
            <li
              key={b.name}
              className="font-display text-sm font-bold uppercase tracking-wide text-body/80"
            >
              {b.page ? (
                <Link href={`/brands/${b.page.slug}`} className="hover:text-brand-700">
                  {b.name}
                </Link>
              ) : (
                b.name
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
