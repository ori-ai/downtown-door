import type { Metadata } from "next";
import { Orbitron, Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { siteConfig } from "@/lib/site";
import { businessGraphSchemas } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";
import { FloatingContactWidget } from "@/components/layout/floating-contact-widget";

// Body: Hanken Grotesk — clean, warm, highly readable (replaces Inter).
// (CSS var name kept as --font-inter so globals.css needs no change.)
const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display: Orbitron — wide geometric "security-tech" face (the YDA signature)
// for headlines, eyebrows, brand and CTAs. Techy, engineered, NYC-security tone.
const displayFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `West Village Locksmith, Intercom & Security Systems NYC | ${siteConfig.name}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} h-full`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-[#0a1330]">
        {/* Sitewide entity graph: Organization + BOTH offices as
            ["Locksmith","LocalBusiness"] nodes, each with its own phone,
            geo, hours and map (NAP source of truth: site.ts + locations.ts) */}
        {businessGraphSchemas().map((s, i) => (
          <JsonLd key={i} data={s} />
        ))}

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        <Header />

        {/* pb accounts for the fixed mobile call bar so it never covers content */}
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>

        <Footer />
        <MobileCallBar />
        <FloatingContactWidget />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
