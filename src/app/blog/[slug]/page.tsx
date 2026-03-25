import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "@/lib/mdx";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SocialShareBar from "@/components/sections/SocialShareBar";
import { SITE } from "@/lib/constants";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.meta.title} | LeadHunterIQ Blog`,
    description: post.meta.description,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Very basic markdown-to-HTML: headings, paragraphs, bold, italic, lists */
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-gray-600 leading-relaxed">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="my-4 space-y-2">$&</ul>')
    .replace(/^(?!<[hul])((?!<).+)$/gm, '<p class="text-gray-600 leading-relaxed mb-4">$1</p>')
    .replace(/<p class="text-gray-600 leading-relaxed mb-4"><\/p>/g, "");
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const { meta, content } = post;
  const html = markdownToHtml(content);

  return (
    <>
      <PageHero
        badge={meta.category}
        title={meta.title}
        description={meta.description}
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
      />

      <Section bg="white">
        <div className="mx-auto max-w-3xl">
          {/* Post meta */}
          <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 dark:border-gray-700 pb-6">
            <span className="font-medium text-gray-900 dark:text-white">{meta.author}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span>{formatDate(meta.date)}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <span>{meta.readTime}</span>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Badge variant="navy">{meta.category}</Badge>
          </div>

          {/* Share bar — top */}
          <div className="mb-8">
            <SocialShareBar
              url={`${SITE.url}/blog/${params.slug}`}
              title={meta.title}
            />
          </div>

          {/* Article content */}
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {/* Share bar — bottom */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <SocialShareBar
              url={`${SITE.url}/blog/${params.slug}`}
              title={meta.title}
            />
          </div>

          {/* CTA at bottom */}
          <div className="mt-16 rounded-2xl bg-gray-50 border border-gray-200 p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Turn these insights into revenue
            </h3>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              LeadHunterIQ detects the hiring signals mentioned in this article
              and delivers them to your inbox daily. Start your 14-day free trial.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <Button href="/demo" size="lg">
                Start Free Trial
              </Button>
              <Button href="/blog" variant="secondary" size="lg">
                More Articles
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
