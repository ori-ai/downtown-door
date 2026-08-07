import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A clearly-marked photo placeholder. We do NOT ship stock or fabricated
 * imagery — the client supplies real photos, and each slot names exactly what
 * belongs there. Swap for <Image> when the real asset arrives.
 */
export function ImageSlot({
  label,
  aspect = "aspect-[4/3]",
  className,
  note = "Client to provide",
}: {
  label: string;
  aspect?: string;
  className?: string;
  note?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-dashed border-brand-800 bg-brand-950/50/60 p-6 text-center",
        aspect,
        className,
      )}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <ImageIcon className="h-6 w-6 text-brand-300" aria-hidden />
      <span className="text-sm font-medium text-brand-800">{label}</span>
      <span className="text-xs text-muted">{note}</span>
    </div>
  );
}
