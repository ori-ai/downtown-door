import type { Metadata } from "next";
import Image from "next/image";

import { galleryItems } from "@/lib/gallery";
import { serviceCategories, type ServiceCategory } from "@/lib/services";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Real jobsite photos from Downtown Door Repair & Security — locksmith work, access control and intercom installs, security cameras, and door repair.",
  alternates: { canonical: "/gallery" },
  openGraph: { url: absoluteUrl("/gallery") },
};

// Locksmith and security lead — matches the site-wide priority order.
const categoryOrder: ServiceCategory[] = ["locksmith", "security", "door"];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }]} />

      <section className="bg-hero-sheen">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl">Real jobs, no stock photos</h1>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Locksmith work, access control and intercom installs, security cameras, and
              door repair — every photo here is a real job, not a stock library.
            </p>
          </div>
        </Container>
      </section>

      {categoryOrder.map((category, idx) => {
        const items = galleryItems.filter((g) => g.category === category);
        if (!items.length) return null;
        return (
          <Section key={category} topBorder={idx > 0} className={idx % 2 === 1 ? "bg-surface" : ""}>
            <Container>
              <SectionHeading eyebrow={`Category ${idx + 1}`} title={serviceCategories[category]} />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                  <figure
                    key={item.src}
                    className="group relative overflow-hidden rounded-2xl border border-line ring-soft"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={item.src}
                        alt={item.caption}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
                    </div>
                    <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                      {item.caption}
                    </figcaption>
                  </figure>
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
