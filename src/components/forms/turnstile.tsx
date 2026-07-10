"use client";

import * as React from "react";

/**
 * Cloudflare Turnstile widget. Optional by design: when no site key is
 * configured (pre-launch/dev), it renders nothing and reports an empty token —
 * the form still submits and the server skips verification. Add
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable.
 */

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (id?: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";

export function Turnstile({ onToken }: { onToken: (token: string) => void }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rendered = React.useRef(false);

  React.useEffect(() => {
    if (!SITE_KEY) {
      onToken(""); // not configured — signal "no token required"
      return;
    }
    if (rendered.current) return;

    function render() {
      if (!ref.current || !window.turnstile || rendered.current) return;
      rendered.current = true;
      window.turnstile.render(ref.current, {
        sitekey: SITE_KEY,
        callback: (token: string) => onToken(token),
        "error-callback": () => onToken(""),
        "expired-callback": () => onToken(""),
      });
    }

    if (window.turnstile) {
      render();
    } else if (!document.querySelector(`script[src^="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.defer = true;
      s.onload = render;
      document.head.appendChild(s);
    } else {
      const t = setInterval(() => {
        if (window.turnstile) {
          clearInterval(t);
          render();
        }
      }, 200);
      return () => clearInterval(t);
    }
  }, [onToken]);

  if (!SITE_KEY) return null;
  return <div ref={ref} className="min-h-[65px]" />;
}
