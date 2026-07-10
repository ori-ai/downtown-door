import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

import { siteConfig } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCallBar } from "@/components/layout/mobile-call-bar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Door Repair, Locksmith & Security — Brooklyn & Manhattan`,
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
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
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
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full`} data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-white">
        {/* Sitewide LocalBusiness structured data (NAP source of truth) */}
        <JsonLd data={localBusinessSchema()} />

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

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
