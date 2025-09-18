import { getAllProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const dynamic = "force-static";

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Project Demos</h1>
        <p className="text-gray-600">See our projects in action — from idea to deployment</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(p => (
          <ProjectCard key={p.slug} title={p.title} slug={p.slug} summary={p.summary} status={p.status} progress={p.progress} demoUrl={p.demoUrl} />
        ))}
      </div>
    </main>
  );
}
