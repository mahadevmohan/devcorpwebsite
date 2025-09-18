import { getAllProjects, getProjectBySlug, getAllPosts } from "@/lib/content";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({ params }: { params: { slug: string }}) {
  const { meta, mdx } = await getProjectBySlug(params.slug);
  const posts = (await getAllPosts()).filter(p => p.projectSlug === params.slug);
  return (
    <main className="max-w-3xl mx-auto p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <Link href="/projects" className="text-sm underline">Back</Link>
      </div>
      <div className="text-gray-600">{meta.summary}</div>
      <div className="prose dark:prose-invert max-w-none">
        {/* @ts-expect-error Async Server Component */}
        {mdx.content}
      </div>
      {posts.length > 0 && (
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Related Posts</h2>
          <ul className="list-disc pl-5">
            {posts.map(p => (
              <li key={p.slug}><Link href={`/blog/${p.slug}`}>{p.title}</Link></li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
