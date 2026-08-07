import { Plus } from "lucide-react";
import type { Faq } from "@/lib/services";

/**
 * Accessible, zero-JS FAQ using native <details>/<summary>. Pair with
 * faqSchema()/JsonLd for FAQPage structured data on the page.
 */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {faqs.map((f) => (
        <details key={f.q} className="group px-5 py-1 open:bg-surface/40">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink marker:hidden">
            {f.q}
            <Plus className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-45" aria-hidden />
          </summary>
          <p className="pb-4 text-body leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
