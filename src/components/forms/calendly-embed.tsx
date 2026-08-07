"use client";

import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/ori-clearmarketingdigital/on-site-appointment-downtown-doors-security";

/**
 * Real live-availability booking (Calendly inline widget) — replaced the
 * request-a-time fallback once the Calendly connection was live. Dedicated
 * event type, not the personal/ClearOps ones on the same account.
 */
export function CalendlyEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=111d3b&text_color=f4f7fc&primary_color=1e63f0`}
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  );
}
