import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { posts, getPost, audienceLabels } from "@/lib/blog";
import { absoluteUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Container, Section } from "@/components/ui/section";
import { CtaBand } from "@/components/sections/cta-band";

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
            <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {audienceLabels[post.audience]}
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl">{post.title}</h1>
            <time className="mt-2 block text-sm text-muted" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </time>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-body">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
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
