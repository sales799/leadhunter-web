import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://leadhunteriq.in";
  const pages = [
    "", "features", "pricing", "how-it-works", "about", "contact", "demo",
    "customers", "integrations", "resources", "blog",
    "solutions/gcc-tracking", "solutions/lead-scoring", "solutions/india-data", "solutions/compliance",
    "for/agency-owners", "for/bd-teams", "for/enterprise",
    "compare/zoominfo", "compare/apollo", "compare/manual-process",
    "privacy", "terms", "refund",
  ];

  return pages.map((p) => ({
    url: `${base}/${p}`,
    lastModified: new Date(),
    changeFrequency: (p === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: p === "" ? 1 : p.includes("/") ? 0.7 : 0.8,
  }));
}
