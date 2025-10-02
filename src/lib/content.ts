import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const dateString = z.union([z.string(), z.date()]).transform((v) => {
  return typeof v === "string" ? v : v.toISOString();
});

// Project info schema (for project previews and TypeScript pages)
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
  publishedAt: dateString.optional(),
  author: z.string().optional(),
  // Project structure fields
  challenges: z.array(z.string()).default([]),
  keyFeatures: z.array(z.string()).default([]),
  role: z.string().optional(),
  duration: z.string().optional(),
  // Blog/journal specific fields
  blogTitle: z.string().optional(),
  blogExcerpt: z.string().optional(),
  readTime: z.number().optional(),
  highlights: z.array(z.string()).optional(),
  lessonsLearned: z.array(z.string()).optional(),
  nextSteps: z.string().optional()
});

// Blog post metadata schema (for TypeScript pages)
export const projectBlogSchema = z.object({
  title: z.string(),
  slug: z.string(),
  projectSlug: z.string(),
  excerpt: z.string().optional(),
  tags: z.array(z.string()).default([]),
  publishedAt: dateString,
  author: z.string().optional(),
  readTime: z.number().optional()
});

export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type ProjectBlogFrontmatter = z.infer<typeof projectBlogSchema>;

const ROOT = process.cwd();
const PROJECTS_DIR = path.join(ROOT, "content", "projects");

export async function readMdxFile(dir: string, slug: string) {
  const filePath = path.join(dir, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);
  return { content, data };
}

// Get all project directories
export async function getAllProjectSlugs(): Promise<string[]> {
  const entries = await fs.readdir(PROJECTS_DIR, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name);
}

// Get project basic info from index.mdx
export async function getProjectInfo(slug: string) {
  const projectDir = path.join(PROJECTS_DIR, slug);
  const { content, data } = await readMdxFile(projectDir, "index");
  const meta = projectSchema.parse({ ...data, slug });
  return { ...meta, body: content };
}

// Get project blog metadata (for TypeScript pages)
export async function getProjectBlog(slug: string) {
  const projectDir = path.join(PROJECTS_DIR, slug);
  try {
    const { content, data } = await readMdxFile(projectDir, "blog");
    const meta = projectBlogSchema.parse({ ...data, slug, projectSlug: slug });
    return { meta };
  } catch (error) {
    // If no blog.mdx exists, create default metadata
    const projectInfo = await getProjectInfo(slug);
    const meta = projectBlogSchema.parse({
      title: projectInfo.title,
      slug: `${slug}-development`,
      projectSlug: slug,
      excerpt: projectInfo.summary,
      tags: projectInfo.tags,
      publishedAt: projectInfo.publishedAt || new Date().toISOString(),
      author: projectInfo.author || "Mahadev Mohan and Paramraj Singh Machre",
      readTime: 5
    });
    return { meta };
  }
}

// Get all projects (basic info only)
export async function getAllProjects() {
  const slugs = await getAllProjectSlugs();
  const items = await Promise.all(slugs.map(async slug => {
    return await getProjectInfo(slug);
  }));

  // Custom sorting: first by status (shipped > building > planned), then by creation order
  return items.sort((a, b) => {
    // Define status priority order
    const statusPriority = { shipped: 0, building: 1, planned: 2 };
    const aStatusPriority = statusPriority[a.status];
    const bStatusPriority = statusPriority[b.status];

    // If status is different, sort by status priority
    if (aStatusPriority !== bStatusPriority) {
      return aStatusPriority - bStatusPriority;
    }

    // If status is the same, sort by publishedAt (most recent first within each status group)
    const aDate = a.publishedAt || "";
    const bDate = b.publishedAt || "";
    return bDate.localeCompare(aDate);
  });
}

// Get all blog posts (for blog page - using project data)
export async function getAllPosts() {
  const projects = await getAllProjects();

  // Create blog entries from project data
  return projects.map(project => ({
    title: project.blogTitle || project.title,
    slug: `${project.slug}-development`,
    projectSlug: project.slug,
    excerpt: project.blogExcerpt || project.summary,
    tags: project.tags,
    publishedAt: project.publishedAt || new Date().toISOString(),
    author: project.author || "Mahadev Mohan and Paramraj Singh Machre",
    readTime: project.readTime || 5,
    highlights: project.highlights || [],
    lessonsLearned: project.lessonsLearned || [],
    nextSteps: project.nextSteps || null
  }));
}

