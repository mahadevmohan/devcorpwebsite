import { getAllPosts, getAllProjects } from "@/lib/content";
import Link from "next/link";

export const dynamic = "force-static";

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  // Create a map of project slugs to project data for easy lookup
  const projectMap = new Map(projects.map(p => [p.slug, p]));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-seasalt mb-4">Dev Journal</h1>
          <p className="text-xl text-silver">
            Behind the code: what we built, how we built it, and what we learned along the way
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-seasalt py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {posts.map((post) => {
              const project = post.projectSlug ? projectMap.get(post.projectSlug) : null;
              return (
                <article key={post.slug} className="bg-seasalt rounded-lg p-8 shadow-sm border border-davy-gray">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-davy-gray transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <time className="text-sm text-silver">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    {project && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm text-davy-gray hover:text-black transition-colors"
                      >
                        View Project →
                      </Link>
                    )}
                  </div>

                  {/* Tech Stack */}
                  {project && project.techStack.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-davy-gray mb-2">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-alabaster text-davy-gray rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Excerpt */}
                  {post.excerpt && (
                    <div className="mb-6">
                      <p className="text-davy-gray leading-relaxed">{post.excerpt}</p>
                    </div>
                  )}

                  {/* Content Preview */}
                  <div className="space-y-4 text-davy-gray">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Intro Paragraph:</h4>
                      <p className="text-sm italic">
                        Why you built it, what problem it solves, or what inspired it.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">Challenges & Learnings:</h4>
                      <p className="text-sm italic">
                        A short bullet list or paragraph on what you struggled with and overcame.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">Visuals:</h4>
                      <p className="text-sm italic">
                        A screenshot gallery, or an embedded video (demo walk-through).
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-black hover:text-davy-gray font-medium transition-colors"
                    >
                      Read full blog post →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
