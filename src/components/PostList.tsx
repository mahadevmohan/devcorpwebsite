import Link from "next/link";

export default function PostList({ posts }: { posts: { title: string; slug: string; publishedAt: string; }[] }) {
  return (
    <ul className="space-y-2">
      {posts.map(p => (
        <li key={p.slug} className="flex items-center justify-between border-b py-2">
          <Link href={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
          <time className="text-xs text-gray-500">{new Date(p.publishedAt).toLocaleDateString()}</time>
        </li>
      ))}
    </ul>
  );
}
