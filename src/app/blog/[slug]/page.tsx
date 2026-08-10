import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone } from "lucide-react";

import { posts, getPost, audienceLabels } from "@/lib/blog";
import { absoluteUrl } from "@/lib/utils";
import { blogPostingSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

/** One conversion nudge dropped partway through the article, not just at the end. */
function InlineCta() {
  return (
    <div className="not-prose my-10 flex flex-col items-start gap-4 rounded-2xl border border-brand-400/30 bg-brand-950/40 p-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-base font-semibold text-ink">
        Dealing with this right now? We answer 24/7.
      </p>
      <a
        href={siteConfig.phone.href}
        className={buttonVariants({ size: "md", className: "shrink-0" })}
      >
        <Phone className="h-4 w-4" aria-hidden />
        {siteConfig.phone.display}
      </a>
    </div>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", url: absoluteUrl(`/blog/${post.slug}`), title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.excerpt,
          datePublished: post.date,
          path: `/blog/${post.slug}`,
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <Section>
        <Container>
          <article className="mx-auto max-w-2xl">
            <span className="inline-flex rounded-full bg-brand-950/50 px-3 py-1 text-xs font-semibold text-brand-300">
              {audienceLabels[post.audience]}
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl">{post.title}</h1>
            <time className="mt-2 block text-sm text-muted" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>

            <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover"
              />
            </div>

            <div className="mt-8 space-y-8 text-lg leading-relaxed text-body">
              {post.sections.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
                  )}
                  <div className={section.heading ? "mt-3 space-y-4" : "space-y-4"}>
                    {section.paragraphs.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                  {i === Math.floor((post.sections.length - 1) * 0.4) && <InlineCta />}
                </div>
              ))}
            </div>

            <Link href="/blog" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to blog
            </Link>
          </article>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
