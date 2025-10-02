import { getAllProjects } from "@/lib/content";
import ProjectRow from "@/components/ProjectRow";

export const dynamic = "force-static";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-seasalt mb-4">Project Demos</h1>
          <p className="text-xl text-silver">
            See our projects in action, from idea to deployment
          </p>
        </div>
      </section>

      {/* Projects List Section */}
      <section className="bg-seasalt py-16">
        <div className="max-w-6xl mx-auto px-6">
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
                repoUrl={p.repoUrl}
                thumbnail={p.thumbnail}
                techStack={p.techStack}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
