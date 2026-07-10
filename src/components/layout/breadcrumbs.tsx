import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { Container } from "@/components/ui/section";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Renders the visible breadcrumb trail AND the matching BreadcrumbList JSON-LD.
 * Always pass the full trail starting from Home.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <div className="border-b border-line bg-surface/60">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 overflow-x-auto py-3 text-sm">
            {items.map((item, i) => {
              const last = i === items.length - 1;
              return (
                <span key={item.path} className="flex items-center gap-1.5 whitespace-nowrap">
                  {i > 0 ? <ChevronRight className="h-3.5 w-3.5 text-muted" aria-hidden /> : null}
                  {last ? (
                    <span className="font-medium text-ink" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link href={item.path} className="text-muted hover:text-brand-700">
                      {item.name}
                    </Link>
                  )}
                </span>
              );
            })}
          </nav>
        </Container>
      </div>
    </>
  );
}
