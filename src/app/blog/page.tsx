import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import PageHero from "@/components/layout/PageHero";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export const metadata: Metadata = {
  title: "Blog | LeadHunterIQ",
  description:
    "Insights, strategies, and signal intelligence for Indian IT staffing leaders. GCC tracking, AI lead scoring, and market analysis.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <>
      <PageHero
        badge="Blog"
        title="Insights for Indian IT staffing leaders"
        description="Data-driven strategies, GCC intelligence, and AI-powered tactics to win more contracts and grow your staffing business."
      />

      {/* Category filters */}
      <Section bg="white">
        {categories.length > 0 && (
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <Badge variant="blue">All</Badge>
            {categories.map((cat) => (
              <Badge key={cat} variant="navy">
                {cat}
              </Badge>
            ))}
          </div>
        )}

        {/* Posts grid */}
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              Blog posts coming soon. Check back for insights on Indian IT
              staffing intelligence.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full group cursor-pointer">
                  <div className="mb-4">
                    <Badge variant="navy">{post.category}</Badge>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
                    <span>{formatDate(post.date)}</span>
                    <span>{post.readTime}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Section>

      {/* Newsletter signup */}
      <Section bg="gray">
        <NewsletterSignup
          source="blog"
          variant="card"
          heading="Get staffing intelligence in your inbox"
          description="Weekly insights on GCC expansions, hiring signals, and AI-powered lead generation for Indian IT staffing firms."
        />
      </Section>
    </>
  );
}
