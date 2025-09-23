import Link from "next/link";
import { getAllProjects } from "@/lib/content";

export default async function Home() {
  const projects = await getAllProjects();
  return (
    <>
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-8 py-24 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Code. Create. Conquer.</h1>
          <p className="text-lg text-muted/80">Devcorp</p>
          <div>
            <Link
              href="/projects"
              className="inline-block px-5 py-2 rounded bg-seasalt text-black shadow-sm hover:opacity-90"
            >
              Project Demos
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT PREVIEW */}
      <section className="bg-seasalt border-t border-border">
        <div className="max-w-5xl mx-auto px-8 py-10 space-y-4">
          <div>
            <h2 className="text-xl font-semibold">Project Preview</h2>
            <p className="text-sm text-muted">What we are building and why</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 6).map((p) => (
              <div key={p.slug} className="bg-davy-gray text-seasalt rounded-lg p-4">
                <h3 className="font-semibold text-seasalt">
                  <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="text-sm text-silver">{p.summary}</p>
              </div>
            ))}
            {/* Fillers to keep the grid feel if few projects exist */}
            {projects.length < 6 && Array.from({ length: 6 - projects.length }).map((_, i) => (
              <div key={`placeholder-${i}`} className="bg-davy-gray text-seasalt rounded-lg p-4">
                <h3 className="font-semibold text-seasalt">TBD</h3>
                <p className="text-sm text-silver">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
