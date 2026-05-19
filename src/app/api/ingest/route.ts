import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

/** Validate ingest key */
function authorized(req: NextRequest): boolean {
  const key = req.headers.get("x-ingest-key");
  return !!key && key === process.env.INGEST_KEY;
}

/** Slugify a string */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

/** RFC 7807 error helper */
function problem(status: number, title: string, detail?: string) {
  return NextResponse.json(
    { type: "about:blank", title, status, detail },
    {
      status,
      headers: { "Content-Type": "application/problem+json" },
    }
  );
}

// ── GET /api/ingest — list all posts (for JAYA sync check) ──────────────
export async function GET(req: NextRequest) {
  if (!authorized(req)) return problem(401, "Unauthorized", "Invalid or missing x-ingest-key");

  if (!fs.existsSync(BLOG_DIR)) return NextResponse.json({ posts: [] });

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const slugs = files.map((f) => f.replace(/\.mdx$/, ""));
  return NextResponse.json({ count: slugs.length, posts: slugs });
}

// ── POST /api/ingest — create or update a blog post ─────────────────────
export async function POST(req: NextRequest) {
  if (!authorized(req)) return problem(401, "Unauthorized", "Invalid or missing x-ingest-key");

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return problem(400, "Bad Request", "Invalid JSON body");
  }

  const {
    title,
    description,
    content,
    category = "Insights",
    author = "LeadHunterIQ Team",
    readTime,
    date,
    slug: providedSlug,
  } = body as {
    title?: string;
    description?: string;
    content?: string;
    category?: string;
    author?: string;
    readTime?: string;
    date?: string;
    slug?: string;
  };

  // Validate required fields
  if (!title || !content) {
    return problem(400, "Bad Request", "Fields 'title' and 'content' are required");
  }

  const slug = providedSlug ? slugify(providedSlug) : slugify(title);
  const postDate = date || new Date().toISOString().split("T")[0];
  const wordCount = content.split(/\s+/).length;
  const estimatedReadTime = readTime || `${Math.max(1, Math.ceil(wordCount / 250))} min read`;

  // Build frontmatter
  const frontmatter = [
    "---",
    `title: "${title.replace(/"/g, '\\"')}"`,
    `description: "${(description || title).replace(/"/g, '\\"')}"`,
    `date: "${postDate}"`,
    `category: "${category}"`,
    `author: "${author}"`,
    `readTime: "${estimatedReadTime}"`,
    "---",
  ].join("\n");

  const mdxContent = `${frontmatter}\n\n${content}\n`;

  // Ensure content directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const isUpdate = fs.existsSync(filePath);
  fs.writeFileSync(filePath, mdxContent, "utf8");

  // Revalidate blog pages so new content appears immediately
  try {
    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
  } catch {
    // revalidation may fail in some edge cases — post is still written
  }

  return NextResponse.json(
    {
      ok: true,
      action: isUpdate ? "updated" : "created",
      slug,
      url: `/blog/${slug}`,
      wordCount,
      readTime: estimatedReadTime,
    },
    { status: isUpdate ? 200 : 201 }
  );
}

// ── DELETE /api/ingest?slug=xxx — remove a blog post ────────────────────
export async function DELETE(req: NextRequest) {
  if (!authorized(req)) return problem(401, "Unauthorized", "Invalid or missing x-ingest-key");

  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return problem(400, "Bad Request", "Query param 'slug' is required");

  const filePath = path.join(BLOG_DIR, `${slugify(slug)}.mdx`);
  if (!fs.existsSync(filePath)) return problem(404, "Not Found", `Post '${slug}' not found`);

  fs.unlinkSync(filePath);

  try {
    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
  } catch {
    // best effort
  }

  return NextResponse.json({ ok: true, action: "deleted", slug });
}
