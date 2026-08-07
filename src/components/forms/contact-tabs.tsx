"use client";

import * as React from "react";
import { Home, Landmark, CalendarClock } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuoteForm } from "@/components/forms/quote-form";
import { BidForm } from "@/components/forms/bid-form";
import { BookForm } from "@/components/forms/book-form";
import { CalendlyEmbed } from "@/components/forms/calendly-embed";

type Tab = "quote" | "bid" | "book";

const TABS: { id: Tab; label: string; icon: typeof Home }[] = [
  { id: "quote", label: "Homeowner / Business", icon: Home },
  { id: "book", label: "Book an Appointment", icon: CalendarClock },
  { id: "bid", label: "Government / Institutional", icon: Landmark },
];

export function ContactTabs({ initial = "quote" }: { initial?: Tab }) {
  const [tab, setTab] = React.useState<Tab>(initial);

  return (
    <div>
      <div role="tablist" aria-label="Contact type" className="grid grid-cols-1 gap-2 rounded-xl border border-line bg-surface p-1.5 sm:grid-cols-3">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(
              "flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
              tab === id ? "bg-white text-brand-700 shadow-sm" : "text-muted hover:text-body",
            )}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "quote" ? (
          <div role="tabpanel">
            <h2 className="text-xl font-bold text-ink">Request a quote</h2>
            <p className="mt-1 text-sm text-body">
              For homeowners, landlords, and businesses. For emergencies, call — it&apos;s faster.
            </p>
            <div className="mt-5">
              <QuoteForm />
            </div>
          </div>
        ) : tab === "book" ? (
          <div role="tabpanel">
            <h2 className="text-xl font-bold text-ink">Book an appointment</h2>
            <p className="mt-1 text-sm text-body">
              Pick a real open slot below — it&apos;s confirmed the moment you book. For emergencies, call — it&apos;s faster.
            </p>
            <div className="mt-5">
              <CalendlyEmbed />
            </div>
            <details className="mt-6 rounded-xl border border-line bg-surface p-4">
              <summary className="cursor-pointer text-sm font-semibold text-ink">
                Prefer to just send us your details instead?
              </summary>
              <div className="mt-4">
                <BookForm />
              </div>
            </details>
          </div>
        ) : (
          <div role="tabpanel">
            <h2 className="text-xl font-bold text-ink">Submit a bid inquiry</h2>
            <p className="mt-1 text-sm text-body">
              For facilities, procurement, and institutional buyers. Include a bid reference if you have one.
            </p>
            <div className="mt-5">
              <BidForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
