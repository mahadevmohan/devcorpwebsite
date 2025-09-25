import { getAllPosts, getPostBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string }}) {
  const { meta, mdx } = await getPostBySlug(params.slug);
  return (
    <main className="max-w-3xl mx-auto p-8 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        {meta.excerpt && <p className="text-davy-gray">{meta.excerpt}</p>}
      </header>
      <article className="prose dark:prose-invert max-w-none">
        {mdx.content}
      </article>
    </main>
  );
}
