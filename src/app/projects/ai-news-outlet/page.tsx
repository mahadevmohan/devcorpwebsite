import { getProjectBlog } from "@/lib/content";
import BlogLayout from "@/components/BlogLayout";
import Callout from "@/components/mdx/Callout";

export default async function AINewsOutletPage() {
    const { meta } = await getProjectBlog("ai-news-outlet");

    // Estimated read time: ~1200 words / 225 wpm = 6 minutes
    const readTime = 6;

    return (
        <BlogLayout
            title={meta.title}
            excerpt={meta.excerpt || undefined}
            author={meta.author || "Mahadev Mohan and Paramraj Singh Machre"}
            publishedAt={meta.publishedAt}
            readTime={readTime}
        >
            <div className="space-y-12">
                {/* Project Overview */}
                <section id="overview" className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <p className="text-blue-800 font-semibold mb-2">Project Status: Planned</p>
                        <p className="text-blue-700">
                            This project is currently in the planning phase. We&apos;re designing the architecture and defining requirements for an innovative AI-powered news platform.
                        </p>
                    </div>

                    <h2 className="">The Vision</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Imagine a news platform that operates 24/7, delivering personalized news broadcasts with AI-generated anchors and professional production quality—all automated. <strong>AI News Outlet</strong> aims to revolutionize how news content is created and consumed by leveraging cutting-edge artificial intelligence.
                    </p>

                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg border border-purple-200">
                        <h3 className="">What Makes This Special?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h4 className="">AI-Generated Everything</h4>
                                <p className="text-purple-600 text-sm">
                                    From script writing to anchor avatars, the entire news production process is powered by AI
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Global Reach</h4>
                                <p className="text-purple-600 text-sm">
                                    Multi-language support allows news to reach audiences worldwide in their native languages
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Real-Time Updates</h4>
                                <p className="text-purple-600 text-sm">
                                    Automated content generation means news is always current and relevant
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Professional Quality</h4>
                                <p className="text-purple-600 text-sm">
                                    AI-generated anchors and production quality rival traditional broadcast news
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why This Matters */}
                <section className="space-y-6">
                    <h2 className="">Why This Matters</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The traditional news industry faces challenges with production costs, time constraints, and limited personalization. AI News Outlet addresses these pain points by:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            
                            <h3 className="font-semibold text-lg mb-2">Cost Efficiency</h3>
                            <p className="text-gray-600 text-sm">
                                Dramatically reduces production costs by automating the entire news creation workflow
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <div className="text-3xl mb-3"></div>
                            <h3 className="font-semibold text-lg mb-2">Speed</h3>
                            <p className="text-gray-600 text-sm">
                                Generates news broadcasts in minutes instead of hours, keeping audiences informed faster
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            
                            <h3 className="font-semibold text-lg mb-2">Personalization</h3>
                            <p className="text-gray-600 text-sm">
                                Tailors content to individual interests and demographics for better engagement
                            </p>
                        </div>
                    </div>
                </section>

                {/* Planned Technology */}
                <section id="technology" className="space-y-6">
                    <h2 className="">Planned Technology Stack</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        We&apos;re planning to leverage state-of-the-art AI services and modern web technologies:
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-lg mb-3 text-blue-800">AI & ML Technologies</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <strong>OpenAI GPT</strong> for script generation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <strong>ElevenLabs</strong> for natural speech synthesis
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <strong>D-ID</strong> for AI anchor generation
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-3 text-green-800">Web Stack</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        <strong>FastAPI</strong> for high-performance backend
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        <strong>React</strong> for modern, responsive UI
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-green-500">•</span>
                                        <strong>Python</strong> for AI integration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Callout type="info" title="Architecture in Design">
                        We&apos;re currently architecting a scalable pipeline that will handle content aggregation, AI processing, and automated publishing in a seamless workflow.
                    </Callout>
                </section>

                {/* Key Features */}
                <section id="features" className="space-y-6">
                    <h2 className="">Planned Features</h2>

                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Intelligent Script Generation
                            </h3>
                            <p className="text-gray-600">
                                AI analyzes current events from multiple sources and generates cohesive, engaging news scripts with proper context and journalistic quality.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Realistic AI Anchors
                            </h3>
                            <p className="text-gray-600">
                                AI-generated news anchors with natural expressions, gestures, and speech patterns that feel authentic and professional.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Multi-Language Support
                            </h3>
                            <p className="text-gray-600">
                                Automatically translate and localize content for global audiences, breaking down language barriers in news consumption.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Automated Publishing
                            </h3>
                            <p className="text-gray-600">
                                Scheduled broadcast generation and distribution across multiple platforms, ensuring consistent content delivery.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Challenges & Considerations */}
                <section className="space-y-6">
                    <h2 className="">Key Challenges to Address</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Building an AI-powered news platform comes with unique challenges that we&apos;re prepared to tackle:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="font-semibold text-red-800 mb-2"> Factual Accuracy</h3>
                            <p className="text-red-700 text-sm">
                                Ensuring AI-generated content maintains journalistic integrity and fact-checks all information before broadcast
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                            <h3 className="font-semibold text-yellow-800 mb-2"> Natural Delivery</h3>
                            <p className="text-yellow-700 text-sm">
                                Creating AI voices and avatars that sound natural and maintain viewer engagement throughout broadcasts
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <h3 className="font-semibold text-purple-800 mb-2"> Ethical AI Use</h3>
                            <p className="text-purple-700 text-sm">
                                Transparent disclosure of AI involvement and responsible use of synthetic media technologies
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-800 mb-2"> Scalability</h3>
                            <p className="text-blue-700 text-sm">
                                Designing infrastructure that can handle multiple broadcasts, languages, and thousands of concurrent viewers
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline & Next Steps */}
                <section id="status" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">Project Timeline</h2>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200">
                        <h3 className="">What&apos;s Next?</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Research & Planning (Current Phase)</h4>
                                    <p className="text-blue-700 text-sm">Evaluating AI services, defining architecture, and creating detailed technical specifications</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                <div>
                                    <h4 className="font-semibold text-purple-800">Prototype Development</h4>
                                    <p className="text-purple-700 text-sm">Build MVP with basic script generation and single AI anchor</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                <div>
                                    <h4 className="font-semibold text-pink-800">Beta Testing</h4>
                                    <p className="text-pink-700 text-sm">Gather feedback from early users and iterate on content quality</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Full Launch</h4>
                                    <p className="text-green-700 text-sm">Scale to multiple languages and news categories with automated scheduling</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-blue-200">
                            <p className="text-blue-700 font-semibold">
                                Estimated Timeline: <span className="text-blue-900">8 months</span>
                            </p>
                            <p className="text-blue-600 text-sm mt-2">
                                We&apos;re in the early planning stages and expect to have a working prototype in the coming months. Stay tuned for updates!
                            </p>
                        </div>
                    </div>

                    <Callout type="success" title="Get Involved">
                        Interested in AI-powered media? Follow our progress on this project and reach out if you&apos;d like to contribute or provide feedback!
                    </Callout>
                </section>
            </div>
        </BlogLayout>
    );
}

