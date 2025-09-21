import { getAllProjects } from "@/lib/content";
import ProjectRow from "@/components/ProjectRow";

export const dynamic = "force-static";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen bg-neutral-900">
      {/* Top nav spacing is handled by your layout; this keeps content centered */}
      <section className="bg-neutral-800/70">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-100">
            Project Demos
          </h1>
          <p className="mt-3 text-neutral-300">
            See our projects in action — from idea to deployment
          </p>
        </div>
      </section>

      {/* List */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="space-y-8">
          {projects.map((p) => (
            <ProjectRow
              key={p.slug}
              title={p.title}
              slug={p.slug}
              summary={p.summary}
              status={p.status}
              progress={p.progress}
              demoUrl={p.demoUrl}
              thumbnail={p.thumbnail}
              techStack={p.techStack}
            />
          ))}
        </div>
      </section>

      {/* (Optional) footer lives in your root layout; omitted here */}
    </main>
  );
}
