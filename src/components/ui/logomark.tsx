/**
 * Custom brand mark: a shield (security) with an integrated door-and-keyhole
 * silhouette (the trade). Geometric and angular to match the Orbitron
 * display font and dark security-tech identity — not a stock icon.
 *
 * Renders as a standalone SVG (no wrapping badge) so callers control the
 * container (the header/footer currently wrap it in a rounded brand-600
 * square — this draws the mark itself, white-on-transparent, so it also
 * works directly on a solid brand background or, inverted, on light UI).
 */
export function Logomark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Shield outline */}
      <path
        d="M20 3.2 L33.5 8.4 V19.6 C33.5 27.8 28.1 34 20 37.4 C11.9 34 6.5 27.8 6.5 19.6 V8.4 Z"
        stroke="currentColor"
        strokeWidth="2.15"
        strokeLinejoin="round"
      />
      {/* Door: rectangle inset in the shield, with a keyhole */}
      <rect
        x="14.6"
        y="14.4"
        width="10.8"
        height="15.2"
        rx="1.2"
        stroke="currentColor"
        strokeWidth="1.9"
      />
      <circle cx="20" cy="21.1" r="1.55" fill="currentColor" />
      <path d="M20 22.4 L19.15 25.4 H20.85 Z" fill="currentColor" />
    </svg>
  );
}
