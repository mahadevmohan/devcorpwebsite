import { getProjectBlog } from "@/lib/content";
import BlogLayout from "@/components/BlogLayout";
import TechStack from "@/components/mdx/TechStack";
import Callout from "@/components/mdx/Callout";

export default async function DevcorpWebsitePage() {
    const { meta } = await getProjectBlog("devcorp-website");

    return (
        <BlogLayout
            title={meta.title}
            excerpt={meta.excerpt || undefined}
            author={meta.author || "Mahadev Mohan and Paramraj Singh Machre"}
            publishedAt={meta.publishedAt}
            readTime={meta.readTime}
        >
            <div className="space-y-12">
                {/* Introduction */}
                <section id="overview" className="space-y-6">
                    <blockquote className="border-l-4 border-black pl-6 italic text-lg text-gray-700">
                        &ldquo;The best way to predict the future is to create it.&rdquo; - Alan Kay
                    </blockquote>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The <strong>Devcorp Website</strong> is our flagship project—a modern, production-ready portfolio website that showcases our development journey, technical expertise, and innovative projects. Built from the ground up with <strong>Next.js 15</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, this website demonstrates enterprise-level software engineering practices and serves as a living example of our capabilities.
                    </p>

                    <Callout type="success" title="Live and Production-Ready">
                        Visit <strong><a href="https://devcorpwebsite.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">devcorpwebsite.vercel.app</a></strong> to explore the live site and experience all the features we&apos;ll discuss in this article.
                    </Callout>
                </section>

                {/* Project Genesis */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🎯 Project Genesis</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Every great project starts with a problem to solve. For Devcorp, we needed a platform that could showcase our work while demonstrating technical excellence.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🎨</span> Showcase Our Work
                            </h3>
                            <p className="text-gray-600">Present projects in a professional manner that highlights technical depth and innovation</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>📝</span> Share Our Journey
                            </h3>
                            <p className="text-gray-600">Document our development process, challenges, and learnings through detailed blog entries</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>⚡</span> Demonstrate Skills
                            </h3>
                            <p className="text-gray-600">Use the website itself as a technical showcase of modern web development</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🚀</span> Easy Maintenance
                            </h3>
                            <p className="text-gray-600">Create a system where adding new projects automatically updates all pages</p>
                        </div>
                    </div>
                </section>

                {/* Architecture & Tech Stack */}
                <section id="technology" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🏗️ Architecture & Tech Stack</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        We chose cutting-edge technologies that balance performance, developer experience, and maintainability. Each decision was made with scalability and future growth in mind.
                    </p>

                    <TechStack
                        technologies={["Next.js 15", "TypeScript", "React 19", "Tailwind CSS", "Framer Motion", "Gray Matter", "Zod", "Vercel"]}
                        title="Complete Technology Stack"
                    />

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Core Framework: Next.js 15</h3>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                                <p className="text-gray-600 mb-4">
                                    Next.js 15 provides the foundation for our modern web application with cutting-edge features:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-500">⚛️</span>
                                        <div>
                                            <h5 className="font-semibold">React 19 Server Components</h5>
                                            <p className="text-sm text-gray-500">Default to server rendering for optimal performance</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-500">📄</span>
                                        <div>
                                            <h5 className="font-semibold">Static Site Generation</h5>
                                            <p className="text-sm text-gray-500">Pre-render pages at build time for instant loading</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-500">🛣️</span>
                                        <div>
                                            <h5 className="font-semibold">App Router</h5>
                                            <p className="text-sm text-gray-500">File-based routing with enhanced developer experience</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-500">🖼️</span>
                                        <div>
                                            <h5 className="font-semibold">Image Optimization</h5>
                                            <p className="text-sm text-gray-500">Automatic WebP conversion and lazy loading</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Type Safety: TypeScript + Zod</h3>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                                <p className="text-gray-600 mb-4">
                                    End-to-end type safety from content files to rendered components:
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <pre className="text-sm overflow-x-auto">
                                        <code>{`// Zod schema defines structure and validation
export const projectSchema = z.object({
  title: z.string(),
  slug: z.string(),
  status: z.enum(["planned", "building", "shipped"]),
  techStack: z.array(z.string()).default([]),
  author: z.string().optional(),
  readTime: z.number().optional(),
  // ... 15+ more fields
});

// TypeScript types auto-generated
type Project = z.infer<typeof projectSchema>;`}</code>
                                    </pre>
                                </div>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• <strong>Build-time validation</strong>: Catches content errors before deployment</li>
                                    <li>• <strong>IDE autocomplete</strong>: Full IntelliSense support for content fields</li>
                                    <li>• <strong>Refactoring safety</strong>: Schema changes propagate through entire codebase</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Styling: Custom Design System</h3>
                            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                                <p className="text-gray-600 mb-4">
                                    A carefully crafted five-color palette provides the foundation for all visual design:
                                </p>
                                <div className="grid grid-cols-5 gap-3 mb-4">
                                    <div className="space-y-2">
                                        <div className="w-full h-16 bg-black rounded-lg"></div>
                                        <p className="text-xs text-center font-medium">Black</p>
                                        <p className="text-xs text-center text-gray-500">#000000</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-full h-16 bg-[#4a4a4a] rounded-lg"></div>
                                        <p className="text-xs text-center font-medium">Davy Gray</p>
                                        <p className="text-xs text-center text-gray-500">#4a4a4a</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-full h-16 bg-[#b3b3b3] rounded-lg"></div>
                                        <p className="text-xs text-center font-medium">Silver</p>
                                        <p className="text-xs text-center text-gray-500">#b3b3b3</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-full h-16 bg-[#f8f7f5] rounded-lg border border-gray-200"></div>
                                        <p className="text-xs text-center font-medium">Seasalt</p>
                                        <p className="text-xs text-center text-gray-500">#f8f7f5</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-full h-16 bg-[#f5f2e9] rounded-lg border border-gray-200"></div>
                                        <p className="text-xs text-center font-medium">Alabaster</p>
                                        <p className="text-xs text-center text-gray-500">#f5f2e9</p>
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <pre className="text-sm overflow-x-auto">
                                        <code>{`// CSS variables for consistent theming
:root {
  --black: #000000;
  --davy-gray: #4a4a4a;
  --silver: #b3b3b3;
  --seasalt: #f8f7f5;
  --alabaster: #f5f2e9;
}`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Management Deep Dive */}
                <section id="features" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">📁 Content Management System</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The centerpiece of the Devcorp website is its <strong>centralized content management system</strong>. This system eliminates hardcoded data and makes the entire site update automatically when new projects are added.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">How the System Works</h3>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <ol className="space-y-4 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
                                        <div>
                                            <strong>Create Project File</strong>: Add one MDX file in <code>content/projects/[slug]/index.mdx</code>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
                                        <div>
                                            <strong>Parse & Validate</strong>: Gray Matter extracts frontmatter, Zod validates schema
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
                                        <div>
                                            <strong>Generate Data</strong>: Functions aggregate all projects with type safety
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">4</span>
                                        <div>
                                            <strong>Auto-Update Pages</strong>: Home, Projects, and Blog pages all show the new project
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">5</span>
                                        <div>
                                            <strong>Build & Deploy</strong>: Vercel automatically rebuilds and deploys changes
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Content Schema Fields</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold mb-2 text-blue-800">Basic Info</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• title, slug, summary</li>
                                        <li>• status, progress, tags</li>
                                        <li>• techStack, role, duration</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold mb-2 text-green-800">Links & Assets</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• demoUrl, repoUrl</li>
                                        <li>• thumbnail, author</li>
                                        <li>• publishedAt, updatedAt</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold mb-2 text-purple-800">Project Details</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• challenges (array)</li>
                                        <li>• keyFeatures (array)</li>
                                        <li>• highlights (array)</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold mb-2 text-orange-800">Blog Specific</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• blogTitle, blogExcerpt</li>
                                        <li>• readTime, lessonsLearned</li>
                                        <li>• nextSteps</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Callout type="success" title="15+ Content Fields">
                        Our content schema supports over 15 different fields, giving you complete control over how projects are presented while maintaining type safety and validation throughout the entire system.
                    </Callout>
                </section>

                {/* Technical Challenges */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🚀 Major Technical Challenges</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Building a production-ready website from scratch presented some fascinating architectural and design challenges. Here are the big problems we tackled:
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span>🏗️</span> Challenge: Designing a Scalable Content Architecture
                            </h3>
                            <p className="text-gray-600 mb-3">
                                How do you build a content management system that&apos;s powerful enough for complex projects but simple enough that adding a new project is just creating one file?
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <pre className="text-sm overflow-x-auto">
                                    <code>{`// The goal: One file controls everything
content/projects/new-project/index.mdx
  ├── Homepage project card
  ├── Projects page entry
  ├── Blog page preview
  ├── Detailed blog post
  └── All metadata & relationships

// The challenge: 15+ fields, type safety, validation
export const projectSchema = z.object({
  title: z.string(),
  status: z.enum(["planned", "building", "shipped"]),
  techStack: z.array(z.string()).default([]),
  challenges: z.array(z.string()).default([]),
  keyFeatures: z.array(z.string()).default([]),
  highlights: z.array(z.string()).optional(),
  lessonsLearned: z.array(z.string()).optional(),
  // ... and 8 more fields
});`}</code>
                                </pre>
                            </div>
                            <p className="text-green-600 font-semibold">
                                ✅ Solution: Built a Zod-powered schema system that validates content at build time while generating TypeScript types automatically
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span>🎨</span> Challenge: Creating a Custom Design System from Scratch
                            </h3>
                            <p className="text-gray-600 mb-3">
                                We needed a design system that felt unique and professional while being maintainable. The challenge was balancing creativity with consistency across 5+ different page layouts.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <pre className="text-sm overflow-x-auto">
                                    <code>{`// Design constraints:
- 5 distinct page types (Home, About, Projects, Blog, Contact)
- Each needs unique layout but consistent branding
- Mobile-first responsive design
- Dark hero sections + light content sections
- Custom color palette that works in all contexts

// Our approach:
:root {
  --black: #000000;      // Headers, CTAs
  --davy-gray: #4a4a4a;  // Secondary text
  --silver: #b3b3b3;     // Muted elements
  --seasalt: #f8f7f5;    // Primary backgrounds
  --alabaster: #f5f2e9;  // Secondary backgrounds
}`}</code>
                                </pre>
                            </div>
                            <p className="text-green-600 font-semibold">
                                ✅ Solution: Created a five-color palette with CSS variables, ensuring every page feels cohesive while maintaining visual hierarchy
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span>⚡</span> Challenge: Optimizing for Performance Without Compromising Features
                            </h3>
                            <p className="text-gray-600 mb-3">
                                We wanted rich animations, large images, and interactive features while maintaining lightning-fast load times. The challenge was finding the right balance.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <pre className="text-sm overflow-x-auto">
                                    <code>{`// Performance goals:
- < 3s initial page load
- Smooth 60fps animations
- Optimized images with lazy loading
- Minimal JavaScript bundle

// Our strategy:
1. Server Components by default (smaller JS bundles)
2. Client components only for interactivity
3. Next.js Image optimization (WebP + lazy loading)
4. Framer Motion with GPU acceleration
5. Static site generation for instant loads

// Result: 95+ Lighthouse scores across all metrics`}</code>
                                </pre>
                            </div>
                            <p className="text-green-600 font-semibold">
                                ✅ Solution: Server-first architecture with selective client-side enhancements, achieving 95+ Lighthouse scores
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span>🧠</span> Challenge: Building Intelligent User Experience Patterns
                            </h3>
                            <p className="text-gray-600 mb-3">
                                How do you create navigation that feels intuitive and smart? Users expect the back button to work like a browser, but single-page apps with anchor links break this expectation.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <pre className="text-sm overflow-x-auto">
                                    <code>{`// The UX problem:
User journey: Home → Projects → Project Detail → Click TOC → Click Back
Expected: Goes back to Projects page
Actual: Goes to previous TOC section (confusing!)

// Our intelligent solution:
const SmartBackButton = () => {
  const referrer = document.referrer;
  const basePath = referrer.split('#')[0]; // Strip anchor links

  // Smart routing based on actual previous page
  if (basePath === "/") return "Back to Home";
  if (basePath === "/projects") return "Back to Projects";
  if (basePath === "/blog") return "Back to Blog";

  // Smooth scrolling without history pollution
  const handleTOCClick = () => {
    element.scrollIntoView({ behavior: 'smooth' });
    // No href="#" = no history entry
  };
};`}</code>
                                </pre>
                            </div>
                            <p className="text-green-600 font-semibold">
                                ✅ Solution: Built a SmartBackButton that tracks actual navigation patterns and table of contents that scrolls without polluting browser history
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <span>🔄</span> Challenge: Future-Proofing the Architecture
                            </h3>
                            <p className="text-gray-600 mb-3">
                                How do you build a website that can grow from 5 projects to 50 projects, from 2 authors to 10 authors, without major refactoring?
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg mb-3">
                                <pre className="text-sm overflow-x-auto">
                                    <code>{`// Scalability considerations:
- Dynamic sorting by status priority (shipped > building > planned)
- Flexible author system (single or multiple authors)
- Extensible content schema with optional fields
- Modular component architecture
- Type-safe refactoring (change schema = auto-update everywhere)

// Example: Adding a new project status
enum Status { shipped, building, planned, archived } // Just add here
// → All sorting, filtering, and UI updates automatically

// Example: Adding new content fields
blogExcerpt: z.string().optional(), // Just add to schema
// → TypeScript types generated, validation added, UI ready`}</code>
                                </pre>
                            </div>
                            <p className="text-green-600 font-semibold">
                                ✅ Solution: Built extensible schemas with optional fields, dynamic sorting algorithms, and type-safe architecture that grows with requirements
                            </p>
                        </div>
                    </div>
                </section>

                {/* Features Showcase */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">✨ Feature Showcase</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Let&apos;s explore the key features that make the Devcorp website stand out.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🎯</span> Status Badge System
                            </h3>
                            <p className="text-gray-600 mb-3">Color-coded badges appear across all project displays</p>
                            <div className="flex gap-2 mb-3">
                                <span className="inline-block text-white text-xs px-2 py-0.5 rounded-full font-medium bg-green-600">Shipped</span>
                                <span className="inline-block text-white text-xs px-2 py-0.5 rounded-full font-medium bg-blue-600">Building</span>
                                <span className="inline-block text-white text-xs px-2 py-0.5 rounded-full font-medium bg-gray-600">Planned</span>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>📱</span> Responsive Design
                            </h3>
                            <p className="text-gray-600">Mobile-first approach ensures perfect display on all devices from phones to desktops</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🎬</span> Smooth Animations
                            </h3>
                            <p className="text-gray-600">Framer Motion powers entrance animations, hover effects, and page transitions</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>📚</span> Table of Contents
                            </h3>
                            <p className="text-gray-600">Sticky sidebar navigation with smooth scrolling for long-form content</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🔍</span> SEO Optimization
                            </h3>
                            <p className="text-gray-600">Proper meta tags, structured data, and server-side rendering for search engines</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>♿</span> Accessibility
                            </h3>
                            <p className="text-gray-600">Semantic HTML, ARIA labels, keyboard navigation, and screen reader support</p>
                        </div>
                    </div>
                </section>

                {/* Project Summary */}
                <section id="status" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🎓 Lessons Learned & Takeaways</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Building the Devcorp website taught us invaluable lessons about modern web development, content architecture, and user experience design.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                                <span>💡</span> Content Management is Key
                            </h3>
                            <p className="text-blue-700">
                                Centralized content management eliminates hardcoded data and makes updates seamless across all pages. The investment in building a robust content system pays dividends in maintenance and scalability.
                            </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                                <span>💡</span> Design Systems Provide Consistency
                            </h3>
                            <p className="text-green-700">
                                Custom design systems with CSS variables provide consistency and easier maintenance. Our five-color palette ensures brand coherence without limiting creative expression.
                            </p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                            <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                                <span>💡</span> Type Safety Catches Bugs Early
                            </h3>
                            <p className="text-purple-700">
                                Zod schemas at the content layer catch errors at build time, not runtime. TypeScript integration provides excellent IDE support and refactoring safety.
                            </p>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                            <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                                <span>💡</span> User Experience is in the Details
                            </h3>
                            <p className="text-orange-700">
                                Small details matter: intelligent back buttons, smooth scrolling, hover effects, and thoughtful navigation create a polished experience that users notice and appreciate.
                            </p>
                        </div>

                        <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
                            <h3 className="font-semibold text-pink-800 mb-3 flex items-center gap-2">
                                <span>💡</span> Server Components as Default
                            </h3>
                            <p className="text-pink-700">
                                Server components should be the default—use client components only when you need interactivity. This approach reduces JavaScript bundle size and improves performance significantly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Future Enhancements */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🔮 Future Enhancements</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The Devcorp website is a living project that continues to evolve. Here&apos;s what&apos;s planned for future releases.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-800 mb-3">Phase 1: Dark Mode</h3>
                            <ul className="text-blue-700 space-y-2 text-sm">
                                <li>• System preference detection</li>
                                <li>• Manual toggle with persistence</li>
                                <li>• Smooth theme transitions</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="font-semibold text-green-800 mb-3">Phase 2: Advanced Filtering</h3>
                            <ul className="text-green-700 space-y-2 text-sm">
                                <li>• Filter projects by tech stack</li>
                                <li>• Search across all content</li>
                                <li>• Tag-based navigation</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <h3 className="font-semibold text-purple-800 mb-3">Phase 3: Analytics</h3>
                            <ul className="text-purple-700 space-y-2 text-sm">
                                <li>• User engagement tracking</li>
                                <li>• Popular projects insights</li>
                                <li>• Performance monitoring</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                            <h3 className="font-semibold text-orange-800 mb-3">Phase 4: Interactive Demos</h3>
                            <ul className="text-orange-700 space-y-2 text-sm">
                                <li>• Embedded code playgrounds</li>
                                <li>• Live project previews</li>
                                <li>• Interactive tutorials</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Final Thoughts */}
                <section className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200">
                        <h3 className="text-2xl font-bold mb-4 text-green-800">🎯 Final Thoughts</h3>
                        <p className="text-green-700 mb-4 leading-relaxed">
                            The Devcorp website is more than just a portfolio—it&apos;s a demonstration of what happens when you combine modern technologies with thoughtful engineering. From the centralized content management system to the intelligent navigation patterns, every feature was built with intention and care.
                        </p>
                        <p className="text-green-700 mb-4 leading-relaxed">
                            This project showcases our ability to build production-ready applications that are not only functional but also maintainable, scalable, and delightful to use. It represents our commitment to code quality, user experience, and continuous improvement.
                        </p>
                        <p className="text-green-700 font-semibold">
                            Explore the live site at <a href="https://devcorpwebsite.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">devcorpwebsite.vercel.app</a> and see these features in action!
                        </p>
                    </div>

                    <Callout type="info" title="Open Source & Collaboration">
                        We believe in learning by doing and sharing our knowledge. The Devcorp website is open source and available for others to learn from. We welcome feedback, suggestions, and contributions from the developer community.
                    </Callout>
                </section>
            </div>
        </BlogLayout>
    );
}
