import { ExternalLink, Star } from "lucide-react";
import { businessProfiles } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Real, verified listing links only (Google, Yelp, Thumbtack — confirmed
 * 2026-08). Deliberately excludes Angi/BBB/HomeAdvisor/Houzz/Nextdoor and
 * anything else not confirmed to exist for this business.
 */
export function FindUsOn({ className, variant = "default" }: { className?: string; variant?: "default" | "compact" }) {
  const profiles = businessProfiles();

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {variant === "default" ? (
        <span className="mr-1 inline-flex items-center gap-1.5 text-sm font-semibold text-muted">
          <Star className="h-4 w-4 text-brand-500" aria-hidden />
          Find us on
        </span>
      ) : null}
      {profiles.map((p) => (
        <a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-body transition-colors hover:border-brand-300 hover:text-brand-700",
            variant === "compact" && "px-3 py-1 text-xs",
          )}
        >
          {p.name}
          <ExternalLink className={variant === "compact" ? "h-3 w-3" : "h-3.5 w-3.5"} aria-hidden />
        </a>
      ))}
    </div>
  );
}
