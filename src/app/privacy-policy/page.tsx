import type { Metadata } from "next";
import { siteConfig, emailAddress } from "@/lib/site";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
  openGraph: { url: absoluteUrl("/privacy-policy") },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />
      <Section>
        <Container>
          <article className="prose-page mx-auto max-w-2xl text-body">
            <h1 className="text-3xl md:text-4xl">Privacy Policy</h1>
            <p className="mt-2 text-sm text-muted">
              Template — review and finalize with the business / legal counsel before launch.
            </p>

            <div className="mt-8 space-y-6 leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-ink">Overview</h2>
                <p className="mt-2">
                  {siteConfig.name} (&quot;we&quot;) respects your privacy. This policy explains
                  what information we collect when you use our website or contact us, and
                  how we use it.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-ink">Information we collect</h2>
                <p className="mt-2">
                  When you submit a quote request or bid inquiry, we collect the details
                  you provide — such as your name, organization, phone number, email
                  address, and a description of your request. We may also collect basic,
                  aggregate analytics about how visitors use the site.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-ink">How we use it</h2>
                <p className="mt-2">
                  We use the information you submit solely to respond to your request,
                  provide quotes, and deliver our services. We do not sell your personal
                  information.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-ink">Third-party services</h2>
                <p className="mt-2">
                  We use privacy-respecting analytics and a spam-protection service to
                  operate the site, and an email service to deliver form submissions to us.
                </p>
              </section>
              <section>
                <h2 className="text-xl font-bold text-ink">Contact</h2>
                <p className="mt-2">
                  Questions about this policy? Email{" "}
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
