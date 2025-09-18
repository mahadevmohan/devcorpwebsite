import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export const projectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  summary: z.string(),
  status: z.enum(["planned", "building", "shipped"]).default("planned"),
  progress: z.number().min(0).max(100).default(0),
  tags: z.array(z.string()).default([]),
  techStack: z.array(z.string()).default([]),
  demoUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  thumbnail: z.string().optional(),
  publishedAt: z.string().optional(),
  updatedAt: z.string().optional()
});
export type ProjectFrontmatter = z.infer<typeof projectSchema>;

export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  projectSlug: z.string().optional(),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  coverImage: z.string().optional(),
  publishedAt: z.string(),
  updatedAt: z.string().optional()
});
export type PostFrontmatter = z.infer<typeof postSchema>;

const ROOT = process.cwd();
const PROJECTS_DIR = path.join(ROOT, "content", "projects");
const BLOG_DIR = path.join(ROOT, "content", "blog");

export async function readMdxFile(dir: string, slug: string) {
  const filePath = path.join(dir, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);
  return { content, data };
}

export async function listMdxSlugs(dir: string): Promise<string[]> {
  const files = await fs.readdir(dir);
  return files.filter(f => f.endsWith(".mdx")).map(f => f.replace(/\.mdx$/, ""));
}

export async function getAllProjects() {
  const slugs = await listMdxSlugs(PROJECTS_DIR);
  const items = await Promise.all(slugs.map(async slug => {
    const { content, data } = await readMdxFile(PROJECTS_DIR, slug);
    const meta = projectSchema.parse({ ...data, slug });
    return { ...meta, body: content };
  }));
  return items.sort((a,b) => (a.publishedAt || "").localeCompare(b.publishedAt || "")).reverse();
}

export async function getProjectBySlug(slug: string) {
  const { content, data } = await readMdxFile(PROJECTS_DIR, slug);
  const meta = projectSchema.parse({ ...data, slug });
  const mdx = await compileMDX<{ meta: ProjectFrontmatter }>({
    source: content,
    options: { mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } },
    components: {}
  });
  return { meta, mdx };
}

export async function getAllPosts() {
  const slugs = await listMdxSlugs(BLOG_DIR);
  const items = await Promise.all(slugs.map(async slug => {
    const { content, data } = await readMdxFile(BLOG_DIR, slug);
    const meta = postSchema.parse({ ...data, slug });
    return { ...meta, body: content };
  }));
  return items.sort((a,b) => a.publishedAt.localeCompare(b.publishedAt)).reverse();
}

export async function getPostBySlug(slug: string) {
  const { content, data } = await readMdxFile(BLOG_DIR, slug);
  const meta = postSchema.parse({ ...data, slug });
  const mdx = await compileMDX<{ meta: PostFrontmatter }>({
    source: content,
    options: { mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } },
    components: {}
  });
  return { meta, mdx };
}

