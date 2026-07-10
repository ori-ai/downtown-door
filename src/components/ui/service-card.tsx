import Link from "next/link";
import {
  Wrench,
  DoorOpen,
  AlarmClock,
  Store,
  KeyRound,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

const iconMap: Record<string, LucideIcon> = {
  Wrench,
  DoorOpen,
  AlarmClock,
  Store,
  KeyRound,
  ShieldCheck,
};

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Wrench;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-line bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-950/5"
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "grid h-11 w-11 place-items-center rounded-xl",
            service.emergency ? "bg-emergency-tint text-emergency" : "bg-brand-50 text-brand-600",
          )}
        >
          <Icon className="h-5.5 w-5.5" aria-hidden />
        </span>
        {service.emergency ? (
          <span className="rounded-full bg-emergency-tint px-2.5 py-0.5 text-xs font-semibold text-emergency">
            Emergency
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{service.heroTagline}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}
