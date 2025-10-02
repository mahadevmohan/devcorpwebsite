import { getAllPosts, getAllProjects } from "@/lib/content";
import Link from "next/link";
import StatusPill from "@/components/StatusPill";

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
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-black">
                          <Link href={`/projects/${post.projectSlug}`} className="hover:text-davy-gray transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        {project && <StatusPill status={project.status} />}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-silver">
                        <time>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
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

                  {/* Highlights */}
                  {post.highlights && post.highlights.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {post.highlights.slice(0, 3).map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-davy-gray">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                        {post.highlights.length > 3 && (
                          <li className="text-sm text-silver italic">
                            +{post.highlights.length - 3} more highlights...
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Lessons Learned */}
                  {post.lessonsLearned && post.lessonsLearned.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3">Lessons Learned</h4>
                      <ul className="space-y-2">
                        {post.lessonsLearned.slice(0, 2).map((lesson, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-davy-gray">
                            <span className="text-blue-600 mt-1">💡</span>
                            <span>{lesson}</span>
                          </li>
                        ))}
                        {post.lessonsLearned.length > 2 && (
                          <li className="text-sm text-silver italic">
                            +{post.lessonsLearned.length - 2} more lessons...
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Next Steps */}
                  {post.nextSteps && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-2">Next Steps</h4>
                      <p className="text-sm text-davy-gray italic">
                        {post.nextSteps.length > 120 ? `${post.nextSteps.substring(0, 120)}...` : post.nextSteps}
                      </p>
                    </div>
                  )}

                  {/* Read More Link */}
                  <div className="mt-8 pt-6 border-t border-neutral-200">
                    <Link
                      href={`/projects/${post.projectSlug}`}
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
