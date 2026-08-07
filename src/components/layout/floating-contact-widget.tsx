"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Phone, FileText, X, Headset } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Modal } from "@/components/ui/modal";
import { QuoteForm } from "@/components/forms/quote-form";

/**
 * Sitewide floating contact launcher — call, or an inline quote form, without
 * leaving the page. Real channels only: no simulated "agent is typing" bot.
 * WhatsApp was removed (2026-08) — it routed through a shared ClearOps agent
 * not dedicated to this business. Hidden on Path B (government/institutional)
 * routes, matching MobileCallBar's restraint there.
 */
export function FloatingContactWidget() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [quoteOpen, setQuoteOpen] = React.useState(false);

  if (pathname.startsWith("/government-contracting")) return null;

  return (
    <>
      <div className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
        {open ? (
          <div className="w-64 rounded-2xl border border-line bg-surface p-3 shadow-2xl shadow-black/50 ring-soft">
            <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-muted">
              Talk to us
            </p>
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-950/50"
              data-analytics="widget-call"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                <Phone className="h-4.5 w-4.5" aria-hidden />
              </span>
              Call {siteConfig.phone.display}
            </a>
            <button
              type="button"
              onClick={() => {
                setQuoteOpen(true);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-ink transition-colors hover:bg-brand-950/50"
              data-analytics="widget-quote"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-950/60 text-brand-300">
                <FileText className="h-4.5 w-4.5" aria-hidden />
              </span>
              Request a quote
            </button>
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close contact options" : "Open contact options"}
          className="grid h-14 w-14 place-items-center rounded-full bg-brand-600 text-white shadow-2xl shadow-black/50 ring-4 ring-brand-600/20 transition-transform hover:scale-105 hover:bg-brand-700"
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Headset className="h-6 w-6" aria-hidden />}
        </button>
      </div>

      <Modal open={quoteOpen} onClose={() => setQuoteOpen(false)} title="Request a quote">
        <QuoteForm />
      </Modal>
    </>
  );
}
