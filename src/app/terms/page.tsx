import type { Metadata } from "next";
import { siteConfig, emailAddress } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for ${siteConfig.name}.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: { url: absoluteUrl("/terms") },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />
      <Section>
        <Container>
          <article className="mx-auto max-w-2xl text-body">
            <h1 className="text-3xl md:text-4xl">Terms &amp; Conditions</h1>
            <p className="mt-2 text-sm text-muted">
              Template — review and finalize with the business / legal counsel before launch.
            </p>

            <div className="mt-8 space-y-6 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-ink">Use of this website</h2>
                <p className="mt-2">
                  By using this website you agree to these terms. The content on this site
                  is provided for general information about {siteConfig.name} and its
                  services and may be updated at any time.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-ink">Quotes &amp; pricing</h2>
                <p className="mt-2">
                  Any pricing shown on this site is general guidance only. Final pricing is
                  provided after an on-site assessment and is confirmed in writing before
                  work begins. Submitting a request does not create a binding agreement.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-ink">Services</h2>
                <p className="mt-2">
                  Service availability, response times, and scope depend on location,
                  demand, and the specifics of each job. We&apos;ll confirm details directly
                  with you.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-ink">Contact</h2>
                <p className="mt-2">
                  Questions about these terms? Email{" "}
                  <a href={`mailto:${emailAddress("general")}`} className="font-semibold text-brand-700">
                    {emailAddress("general")}
                  </a>
                  .
                </p>
              </section>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
