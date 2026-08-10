import type { Metadata } from "next";
import { services, serviceCategories, type ServiceCategory } from "@/lib/services";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Door, Locksmith & Security Services",
  description:
    "Door repair and installation, emergency repair, commercial storefront doors, locksmith and hardware, and security & access control across the five boroughs.",
  alternates: { canonical: "/services" },
  openGraph: { url: absoluteUrl("/services") },
};

export default function ServicesIndexPage() {
  const categories = Object.keys(serviceCategories) as ServiceCategory[];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Our services</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Downtown Door Repair &amp; Security covers doors, locks, and building
              security for homes and businesses across the five boroughs — from a
              single sticking door to a full access-control system.
            </p>
          </div>
        </Container>
      </section>

      {categories.map((category, idx) => {
        const items = services.filter((s) => s.category === category);
        return (
          <Section key={category} topBorder={idx > 0} className={idx % 2 === 1 ? "bg-surface" : ""}>
            <Container>
              <SectionHeading eyebrow={`Category ${idx + 1}`} title={serviceCategories[category]} />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      <CtaBand />
    </>
  );
}
