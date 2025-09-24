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
      <section className="bg-neutral-900 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Dev Journal</h1>
          <p className="text-xl text-neutral-300">
            Behind the code: what we built, how we built it, and what we learned along the way
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {posts.map((post) => {
              const project = post.projectSlug ? projectMap.get(post.projectSlug) : null;
              return (
                <article key={post.slug} className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-neutral-600 transition-colors">
                          {post.title}
                        </Link>
                      </h2>
                      <time className="text-sm text-neutral-500">
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
                        className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                      >
                        View Project →
                      </Link>
                    )}
                  </div>

                  {/* Tech Stack */}
                  {project && project.techStack.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-neutral-600 mb-2">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
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
                      <p className="text-neutral-700 leading-relaxed">{post.excerpt}</p>
                    </div>
                  )}

                  {/* Content Preview */}
                  <div className="space-y-4 text-neutral-700">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Intro Paragraph:</h4>
                      <p className="text-sm italic">
                        Why you built it, what problem it solves, or what inspired it.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Challenges & Learnings:</h4>
                      <p className="text-sm italic">
                        A short bullet list or paragraph on what you struggled with and overcame.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Visuals:</h4>
                      <p className="text-sm italic">
                        A screenshot gallery, or an embedded video (demo walk-through).
                      </p>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-neutral-900 hover:text-neutral-600 font-medium transition-colors"
                    >
                      Read full blog post →
                    </Link>
                  </div>
                </article>
              );
            })}

            {/* Placeholder for future posts */}
            <article className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200 border-dashed">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">AI Generated Picture Checker</h2>
              <time className="text-sm text-neutral-500">Coming Soon</time>

              <div className="mt-6 space-y-4 text-neutral-700">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Intro Paragraph:</h4>
                  <p className="text-sm italic">
                    Why you built it, what problem it solves, or what inspired it.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Challenges & Learnings:</h4>
                  <p className="text-sm italic">
                    A short bullet list or paragraph on what you struggled with and overcame.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Visuals:</h4>
                  <p className="text-sm italic">
                    A screenshot gallery, or an embedded video (demo walk-through).
                  </p>
                </div>
              </div>
            </article>

            {/* Another placeholder */}
            <article className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200 border-dashed">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">TBD</h2>
              <time className="text-sm text-neutral-500">Coming Soon</time>

              <div className="mt-6 space-y-4 text-neutral-700">
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Intro Paragraph:</h4>
                  <p className="text-sm italic">
                    Why you built it, what problem it solves, or what inspired it.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Challenges & Learnings:</h4>
                  <p className="text-sm italic">
                    A short bullet list or paragraph on what you struggled with and overcame.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-900 mb-2">Visuals:</h4>
                  <p className="text-sm italic">
                    A screenshot gallery, or an embedded video (demo walk-through).
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
