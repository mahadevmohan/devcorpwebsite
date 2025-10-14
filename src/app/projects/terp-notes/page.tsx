import { getAllProjects } from "@/lib/content";
import BlogLayout from "@/components/BlogLayout";
import Callout from "@/components/mdx/Callout";
import TechStack from "@/components/mdx/TechStack";

export default async function TerpNotesPage() {
    const projects = await getAllProjects();
    const terpNotes = projects.find(project => project.slug === "terp-notes");

    if (!terpNotes) {
        return <div>Project not found</div>;
    }

    const meta = {
        title: terpNotes.blogTitle || terpNotes.title,
        excerpt: terpNotes.blogExcerpt || terpNotes.summary,
        author: terpNotes.author || "Paramraj Singh Machre",
        publishedAt: terpNotes.publishedAt || "2024-12-15",
        readTime: typeof terpNotes.readTime === 'number' ? terpNotes.readTime : 12
    };

    const tableOfContents = [
        { id: "problem", label: "The Problem" },
        { id: "architecture", label: "Architecture & Tech Stack" },
        { id: "decisions", label: "Key Technical Decisions" },
        { id: "challenges", label: "Technical Challenges & Solutions" },
        { id: "security", label: "Security Implementation" },
        { id: "performance", label: "Performance & Impact" },
        { id: "lessons", label: "Lessons Learned" },
        { id: "roadmap", label: "Future Roadmap" },
        { id: "highlights", label: "Technical Highlights" },
        { id: "conclusion", label: "Conclusion" }
    ];

    return (
        <BlogLayout
            title={meta.title}
            excerpt={meta.excerpt}
            author={meta.author}
            publishedAt={meta.publishedAt}
            readTime={meta.readTime}
            tableOfContents={tableOfContents}
        >
            <div className="prose prose-lg max-w-none">

                {/* Introduction */}
                <section id="problem" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">The Problem</h2>
                    <p className="text-lg text-davy-gray leading-relaxed mb-6">
                        As a student at the University of Maryland, I experienced firsthand the fragmented nature of study material sharing.
                        Quality notes were scattered across dozens of GroupMe chats, Google Drives, and personal folders. Finding the right
                        materials for a specific class often meant digging through multiple platforms, and many students missed out on
                        valuable resources simply because they weren&apos;t in the right chat or didn&apos;t know the right person.
                    </p>

                    <Callout type="info" title="The Vision">
                        I wanted to create a centralized platform where Terps could easily share and discover study materials,
                        built specifically for our community by someone who understood our needs.
                    </Callout>

                    <p className="text-lg text-davy-gray leading-relaxed mb-6">
                        The result is <strong>Terp Notes</strong> - a free, student-driven platform that now serves over 150 active users
                        and hosts more than 600 files. It&apos;s become the go-to resource for study materials across campus,
                        proving that sometimes the best solutions come from solving problems you experience yourself.
                    </p>
                </section>

                {/* Architecture Overview */}
                <section id="architecture" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Architecture & Tech Stack</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-semibold text-black mb-4">Backend</h3>
                            <ul className="space-y-2 text-davy-gray">
                                <li>• Node.js 18+ with Express.js</li>
                                <li>• MongoDB Atlas (M0 free tier)</li>
                                <li>• AWS S3 for file storage</li>
                                <li>• Vercel for serverless deployment</li>
                                <li>• bcrypt for password hashing</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-black mb-4">Frontend</h3>
                            <ul className="space-y-2 text-davy-gray">
                                <li>• EJS templating for SSR</li>
                                <li>• Vanilla JavaScript (no framework bloat)</li>
                                <li>• Custom CSS with UMD theme</li>
                                <li>• Mobile-first responsive design</li>
                                <li>• Three view modes (Grid, List, Grouped)</li>
                            </ul>
                        </div>
                    </div>

                    <TechStack
                        technologies={[
                            "Node.js", "Express.js", "MongoDB", "AWS S3", "EJS",
                            "JavaScript", "Vercel", "VirusTotal API", "bcrypt", "Helmet.js"
                        ]}
                    />
                </section>

                {/* Key Technical Decisions */}
                <section id="decisions" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Key Technical Decisions</h2>

                    <div className="space-y-8">
                        <div className="border-l-4 border-blue-500 pl-6">
                            <h3 className="text-xl font-semibold text-black mb-3">Client-Side Filtering for Performance</h3>
                            <p className="text-davy-gray mb-3">
                                Instead of server-side queries that took 200-500ms, I implemented client-side filtering
                                that provides instant results in ~10ms. While this increases initial load time,
                                the trade-off is worth it for the user experience.
                            </p>
                            <p className="text-sm text-silver">
                                <strong>Impact:</strong> 5ms response time vs 200-500ms server queries
                            </p>
                        </div>

                        <div className="border-l-4 border-green-500 pl-6">
                            <h3 className="text-xl font-semibold text-black mb-3">File Deduplication for Cost Optimization</h3>
                            <p className="text-davy-gray mb-3">
                                Using SHA-256 hashing, I implemented automatic file deduplication. When 100 students
                                upload the same PDF, only one copy is stored in S3, saving approximately 60% on storage costs.
                            </p>
                            <p className="text-sm text-silver">
                                <strong>Impact:</strong> 60% reduction in storage costs in first semester
                            </p>
                        </div>

                        <div className="border-l-4 border-purple-500 pl-6">
                            <h3 className="text-xl font-semibold text-black mb-3">Direct S3 Uploads for Scalability</h3>
                            <p className="text-davy-gray mb-3">
                                Pre-signed URLs allow clients to upload directly to S3, bypassing server bottlenecks
                                and easily handling 100MB files. The server never touches the actual file data.
                            </p>
                            <p className="text-sm text-silver">
                                <strong>Impact:</strong> Can handle large files without server timeout issues
                            </p>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-6">
                            <h3 className="text-xl font-semibold text-black mb-3">Serverless Architecture for Cost & Maintenance</h3>
                            <p className="text-davy-gray mb-3">
                                Vercel&apos;s serverless functions provide automatic scaling and zero maintenance,
                                perfect for a student project with unpredictable traffic patterns.
                            </p>
                            <p className="text-sm text-silver">
                                <strong>Impact:</strong> $0 hosting cost, no server maintenance, auto-scaling
                            </p>
                        </div>
                    </div>
                </section>

                {/* Major Challenges */}
                <section id="challenges" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Technical Challenges & Solutions</h2>

                    <div className="space-y-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-black mb-3">Challenge 1: Virus Scanning in Serverless Environment</h3>
                            <p className="text-davy-gray mb-3">
                                <strong>Problem:</strong> Vercel has a 10-second execution timeout, but VirusTotal scans take 30-60 seconds.
                            </p>
                            <p className="text-davy-gray mb-3">
                                <strong>Solution:</strong> Implemented background scanning with cron jobs. Files are marked as &quot;pending&quot;
                                immediately after upload, and a Vercel cron job runs every 5 minutes to scan up to 5 pending files.
                                Students can download while pending but see a warning badge.
                            </p>
                            <Callout type="warning" title="Learning">
                                Serverless requires async thinking - you can&apos;t block the main flow for long-running operations.
                            </Callout>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-black mb-3">Challenge 2: Database Query Performance</h3>
                            <p className="text-davy-gray mb-3">
                                <strong>Problem:</strong> As files grew from 50 to 500+, dashboard loaded slowly (2-3 seconds).
                            </p>
                            <p className="text-davy-gray mb-3">
                                <strong>Solution:</strong> Strategic indexing with compound indexes on (classCode, semester, year)
                                and (uploadedBy, uploadDate) for user-specific queries.
                            </p>
                            <p className="text-sm text-silver">
                                <strong>Result:</strong> Query time dropped from 800ms to 50ms (94% improvement)
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-black mb-3">Challenge 3: Icon Asset Optimization</h3>
                            <p className="text-davy-gray mb-3">
                                <strong>Problem:</strong> 35+ custom icons totaling 12MB caused slow page loads on mobile.
                            </p>
                            <p className="text-davy-gray mb-3">
                                <strong>Solution:</strong> Aggressive PNG optimization using Python/PIL - quantized colors to 256
                                while preserving transparency and compressed with level 9 optimization.
                            </p>
                            <p className="text-sm text-silver">
                                <strong>Result:</strong> 93% reduction (12.31 MB → 0.87 MB)
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold text-black mb-3">Challenge 4: Rate Limiting Strategy</h3>
                            <p className="text-davy-gray mb-3">
                                <strong>Problem:</strong> Potential abuse from spam uploads and brute force login attempts.
                            </p>
                            <p className="text-davy-gray mb-3">
                                <strong>Solution:</strong> Tiered rate limiting - 10 login attempts per 15 minutes, 20 uploads per hour per user,
                                100 API calls per 15 minutes.
                            </p>
                            <Callout type="info" title="Learning">
                                Rate limits need to be user-friendly but secure. Too strict frustrates legitimate users,
                                too loose enables abuse.
                            </Callout>
                        </div>
                    </div>
                </section>

                {/* Security Implementation */}
                <section id="security" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Security Implementation</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <h3 className="font-semibold text-red-800 mb-2">Virus Scanning</h3>
                            <p className="text-red-700 text-sm">Every uploaded file is scanned by VirusTotal&apos;s 70+ antivirus engines</p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-800 mb-2">Email Verification</h3>
                            <p className="text-blue-700 text-sm">100% email verification rate with UMD domain validation</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h3 className="font-semibold text-green-800 mb-2">Rate Limiting</h3>
                            <p className="text-green-700 text-sm">Multi-tier rate limiting prevents abuse and DDoS attacks</p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <h3 className="font-semibold text-purple-800 mb-2">Role-Based Access</h3>
                            <p className="text-purple-700 text-sm">Three permission levels: Admin, Contributor, and Viewer</p>
                        </div>
                    </div>
                </section>

                {/* Performance Metrics */}
                <section id="performance" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Performance & Impact</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-3xl font-bold text-black">150+</div>
                            <div className="text-sm text-davy-gray">Active Users</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-3xl font-bold text-black">600+</div>
                            <div className="text-sm text-davy-gray">Files Shared</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-3xl font-bold text-black">2,000+</div>
                            <div className="text-sm text-davy-gray">Downloads</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-3xl font-bold text-black">99.9%</div>
                            <div className="text-sm text-davy-gray">Uptime</div>
                        </div>
                    </div>

                    <Callout type="success" title="Zero-Cost Operation">
                        The entire platform runs on free tiers - Vercel hosting, MongoDB Atlas M0, and AWS S3 free tier.
                        Careful architecture and optimization keep us under all limits while serving the entire campus community.
                    </Callout>
                </section>

                {/* Lessons Learned */}
                <section id="lessons" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Lessons Learned</h2>

                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                                <strong>Start with the simplest solution:</strong> I initially planned a React frontend but wasted 2 days.
                                Switching to EJS had a working prototype in 3 hours.
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                            <div>
                                <strong>Free tiers can go far:</strong> With careful architecture, I stayed under all free tier limits
                                while serving 150+ users and 600+ files.
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <div>
                                <strong>Security first:</strong> Implementing virus scanning and rate limiting from day 1 saved me
                                from multiple bot attacks and security issues.
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                            <div>
                                <strong>Performance matters:</strong> The initial 5-second dashboard load lost users during beta testing.
                                Fixing performance with indexing and client-side filtering was crucial for retention.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Future Roadmap */}
                <section id="roadmap" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Future Roadmap</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-semibold text-black mb-2">Short-term (3 months)</h3>
                            <ul className="text-sm text-davy-gray space-y-1">
                                <li>• File preview functionality</li>
                                <li>• Study group matching</li>
                                <li>• Dark mode support</li>
                                <li>• Mobile app (React Native)</li>
                            </ul>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-semibold text-black mb-2">Medium-term (6-12 months)</h3>
                            <ul className="text-sm text-davy-gray space-y-1">
                                <li>• Expand to other universities</li>
                                <li>• Collaborative annotations</li>
                                <li>• AI-powered content suggestions</li>
                                <li>• Advanced analytics dashboard</li>
                            </ul>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-lg">
                            <h3 className="font-semibold text-black mb-2">Long-term Vision</h3>
                            <ul className="text-sm text-davy-gray space-y-1">
                                <li>• Official UMD partnership</li>
                                <li>• Self-sustaining platform</li>
                                <li>• Open-source core</li>
                                <li>• Community governance</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Technical Highlights */}
                <section id="highlights" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Technical Highlights</h2>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <ul className="space-y-2 text-davy-gray">
                            <li>• <strong>Full-stack development:</strong> Backend (Node/Express), Frontend (EJS/JS), Database (MongoDB)</li>
                            <li>• <strong>Cloud architecture:</strong> S3, serverless functions, CDN with automatic scaling</li>
                            <li>• <strong>Security:</strong> Virus scanning, rate limiting, email verification, input validation</li>
                            <li>• <strong>Performance:</strong> Client-side filtering, database indexing, 93% asset optimization</li>
                            <li>• <strong>Real-world impact:</strong> 150+ users, 600+ files, solving actual student problems</li>
                            <li>• <strong>Production experience:</strong> Deployed, monitored, iterated based on user feedback</li>
                        </ul>
                    </div>
                </section>

                {/* Conclusion */}
                <section id="conclusion" className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Conclusion</h2>

                    <p className="text-lg text-davy-gray leading-relaxed mb-6">
                        Terp Notes taught me more than any tutorial could. Dealing with real users, real bugs, and real constraints
                        forced me to think critically about every decision. The satisfaction of seeing classmates use something I built
                        to actually help them succeed is what makes software engineering fulfilling.
                    </p>

                    <p className="text-lg text-davy-gray leading-relaxed mb-6">
                        Most importantly, I learned that perfect code doesn&apos;t exist - shipped code does. I iterated based on feedback,
                        fixed bugs as they came, and continuously improved. That&apos;s the reality of software development, and I&apos;m ready for it.
                    </p>

                    <Callout type="info" title="Try It Out">
                        Visit <a href="https://terp-notes.org" className="text-blue-600 hover:text-blue-800 underline">terp-notes.org</a> to see the platform in action,
                        or check out the <a href="https://github.com/bennytobby/terp-notes" className="text-blue-600 hover:text-blue-800 underline">source code on GitHub</a>.
                    </Callout>
                </section>

            </div>
        </BlogLayout>
    );
}
