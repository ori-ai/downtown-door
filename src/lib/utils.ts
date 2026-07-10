import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with correct precedence. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Absolute URL for a path, using the configured site origin. */
export function absoluteUrl(path = "/"): string {
  const base = (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://downtowndoorrepair.example"
  );
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
