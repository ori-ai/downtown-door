import { Container } from "@/components/ui/section";

/**
 * YDA-style credibility strip — but with REAL, defensible claims only.
 * (No fabricated "10+ years / 5,000+ clients / 1-yr warranty" until Ori
 * confirms the numbers — then they slot straight in here.)
 */
const markers = [
  {
    title: "Licensed & insured",
    desc: "Covered for residential, commercial, and institutional work across NYC.",
  },
  {
    title: "Same-day emergency",
    desc: "Door won't lock or close? We secure the opening first — same day, Brooklyn & Manhattan.",
  },
  {
    title: "On-site diagnosis",
    desc: "We diagnose on site and price it in plain language before any work begins.",
  },
  {
    title: "Homes · Businesses · Institutions",
    desc: "One vetted vendor — from a sticking door to a full building access-control system.",
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-line bg-surface">
      <Container>
        <ul className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
          {markers.map((m, i) => (
            <li
              key={m.title}
              className={`py-9 lg:px-8 ${i > 0 ? "lg:border-l lg:border-line" : "lg:pl-0"} ${i === markers.length - 1 ? "lg:pr-0" : ""}`}
            >
              <span className="block h-px w-9 bg-accent" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-medium leading-snug text-ink">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{m.desc}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
