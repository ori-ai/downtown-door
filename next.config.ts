import type { NextConfig } from "next";
import { migrationRedirects } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores stray lockfiles elsewhere.
  turbopack: {
    root: import.meta.dirname,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // Real photos are added later; allow common CDNs the client may use.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" }, // GBP photos
      { protocol: "https", hostname: "jrsmxpbxgsboyoxffejg.supabase.co" }, // content pipeline media
    ],
  },
  // 301/308 migration redirects from the old WordPress site.
  async redirects() {
    return migrationRedirects;
  },
};

export default nextConfig;
