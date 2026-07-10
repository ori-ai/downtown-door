"use client";

import * as React from "react";
import { Home, Landmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { QuoteForm } from "@/components/forms/quote-form";
import { BidForm } from "@/components/forms/bid-form";

type Tab = "quote" | "bid";

export function ContactTabs({ initial = "quote" }: { initial?: Tab }) {
  const [tab, setTab] = React.useState<Tab>(initial);

  return (
    <div>
      <div role="tablist" aria-label="Contact type" className="grid grid-cols-2 gap-2 rounded-xl border border-line bg-surface p-1.5">
        <button
          role="tab"
          aria-selected={tab === "quote"}
          onClick={() => setTab("quote")}
          className={cn(
            "flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors",
            tab === "quote" ? "bg-white text-brand-700 shadow-sm" : "text-muted hover:text-body",
          )}
        >
          <Home className="h-4 w-4" aria-hidden />
          Homeowner / Business
        </button>
        <button
          role="tab"
          aria-selected={tab === "bid"}
          onClick={() => setTab("bid")}
          className={cn(
            "flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors",
            tab === "bid" ? "bg-white text-brand-700 shadow-sm" : "text-muted hover:text-body",
          )}
        >
          <Landmark className="h-4 w-4" aria-hidden />
          Government / Institutional
        </button>
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
