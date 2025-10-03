import { getAllProjects } from "@/lib/content";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Redirect to specific TypeScript pages for better control
  const projectPages: Record<string, string> = {
    "devcorp-website": "/projects/devcorp-website",
    "what-if-market": "/projects/what-if-market",
    "ai-news-outlet": "/projects/ai-news-outlet",
    "ai-story-game": "/projects/ai-story-game",
    "discord-ai-notetaker": "/projects/discord-ai-notetaker",
    "electronic-document-management": "/projects/electronic-document-management"
  };

  if (projectPages[slug]) {
    redirect(projectPages[slug]);
  }

  // Fallback for projects without custom pages
  redirect("/projects");
}
