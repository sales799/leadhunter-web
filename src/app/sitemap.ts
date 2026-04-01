import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://leadhunteriq.in";
  const pages = [
    "", "features", "pricing", "how-it-works", "about", "contact", "demo",
    "customers", "integrations", "resources", "blog",
    "signal-report", "resources/signal-taxonomy",
    "solutions/gcc-tracking", "solutions/lead-scoring", "solutions/india-data", "solutions/compliance",
    "for/agency-owners", "for/bd-teams", "for/enterprise",
    "compare/zoominfo", "compare/apollo", "compare/manual-process", "compare/recepto",
    "plays", "signup", "for/saas", "for/consulting", "for/it-services",
    "privacy", "terms", "refund", "security",
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map((p) => ({
    url: `${base}/${p}`,
    lastModified: new Date(),
    changeFrequency: (p === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: p === "" ? 1 : p.includes("/") ? 0.7 : 0.8,
  }));

  // Dynamic blog post URLs
  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
