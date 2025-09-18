import { getAllPosts } from "@/lib/content";
import PostList from "@/components/PostList";

export const dynamic = "force-static";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  return (
    <main className="max-w-3xl mx-auto p-8 space-y-6">
      <header>
        <h1 className="text-3xl font-bold">Dev Journal</h1>
        <p className="text-gray-600">Behind the code: what we built, how we built it, and what we learned.</p>
      </header>
      <PostList posts={posts.map(p => ({ title: p.title, slug: p.slug, publishedAt: p.publishedAt }))} />
    </main>
  );
}
