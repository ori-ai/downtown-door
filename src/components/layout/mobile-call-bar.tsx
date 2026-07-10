"use client";

import { usePathname } from "next/navigation";
import { Phone, MessageSquareText } from "lucide-react";
import { siteConfig } from "@/lib/site";

/**
 * Persistent click-to-call bar for Path A (mobile only). Fixed to the bottom of
 * the viewport on small screens; hidden on lg+ where the header CTA is visible.
 *
 * Deliberately hidden on Path B (government/institutional) routes — that buyer
 * gets credibility, not call-now urgency.
 */
export function MobileCallBar() {
  const pathname = usePathname();
  if (pathname.startsWith("/government-contracting")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a
          href={siteConfig.phone.href}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-600 font-semibold text-white"
          data-analytics="mobilebar-call"
        >
          <Phone className="h-4.5 w-4.5" aria-hidden />
          Call now
        </a>
        <a
          href="/contact"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-brand-200 bg-brand-50 font-semibold text-brand-800"
          data-analytics="mobilebar-quote"
        >
          <MessageSquareText className="h-4.5 w-4.5" aria-hidden />
          Get a quote
        </a>
      </div>
    </div>
  );
}
