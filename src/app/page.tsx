import Link from "next/link";
import { getAllProjects } from "@/lib/content";

export default async function Home() {
  const projects = await getAllProjects();
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-8">
      <section className="text-center space-y-3 py-12 bg-neutral-100 dark:bg-neutral-900 rounded">
        <h1 className="text-4xl font-bold">Code. Create. Conquer.</h1>
        <p className="text-gray-600">Devcorp</p>
        <div>
          <Link href="/projects" className="inline-block px-4 py-2 bg-black text-white rounded">Project Demos</Link>
        </div>
      </section>
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Project Preview</h2>
          <p className="text-sm text-gray-600">What we are building and why</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.slice(0,6).map(p => (
            <div key={p.slug} className="border rounded p-4 bg-white dark:bg-neutral-800">
              <h3 className="font-semibold"><Link href={`/projects/${p.slug}`}>{p.title}</Link></h3>
              <p className="text-sm text-gray-600">{p.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
