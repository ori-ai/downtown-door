import { ShieldCheck, MapPin, Building2, Star } from "lucide-react";
import { getGoogleReviews } from "@/lib/reviews";
import { Container } from "@/components/ui/section";

/**
 * Trust bar. The Google rating is rendered ONLY when live review data exists —
 * otherwise we show a neutral, honest trust item (never a fabricated number).
 */
export async function TrustBar() {
  const reviews = await getGoogleReviews();

  const items = [
    { icon: ShieldCheck, label: "Licensed & Insured" },
    { icon: MapPin, label: "Serving Brooklyn & Manhattan" },
    { icon: Building2, label: "Homes · Businesses · Institutions" },
    reviews
      ? {
          icon: Star,
          label: `${reviews.rating.toFixed(1)} ★ on Google (${reviews.count})`,
        }
      : { icon: Star, label: "Trusted local service" },
  ];

  return (
    <div className="border-y border-line bg-white">
      <Container>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 py-4 md:flex md:items-center md:justify-between">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-medium text-body">
              <Icon className="h-4.5 w-4.5 shrink-0 text-brand-600" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
