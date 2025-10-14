import { getProjectBlog } from "@/lib/content";
import BlogLayout from "@/components/BlogLayout";
import Callout from "@/components/mdx/Callout";

export default async function DiscordAINotetakerPage() {
    const { meta } = await getProjectBlog("discord-ai-notetaker");

    // Estimated read time: ~1400 words / 225 wpm = 7 minutes
    const readTime = 7;

    const tableOfContents = [
        { id: "overview", label: "Project Overview" },
        { id: "technology", label: "Architecture & Tech Stack" },
        { id: "features", label: "Planned Features" },
        { id: "status", label: "Current Status" }
    ];

    return (
        <BlogLayout
            title={meta.title}
            excerpt={meta.excerpt || undefined}
            author={meta.author || "Mahadev Mohan and Paramraj Singh Machre"}
            publishedAt={meta.publishedAt}
            readTime={readTime}
            tableOfContents={tableOfContents}
        >
            <div className="space-y-12">
                {/* Project Overview */}
                <section id="overview" className="space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                        <p className="text-indigo-800 font-semibold mb-2">Project Status: Planned</p>
                        <p className="text-indigo-700">
                            This project is in the planning phase. We&apos;re researching voice transcription technologies and designing the bot architecture for seamless Discord integration.
                        </p>
                    </div>

                    <h2 className="">The Problem We&apos;re Solving</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Ever been in a Discord call where important decisions were made, but you can&apos;t remember the details? <strong>Discord AI Notetaker</strong> is an intelligent bot that joins your voice channels to provide real-time transcription, intelligent summaries, and actionable insights—so you never miss a beat.
                    </p>

                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg border border-indigo-200">
                        <h3 className="">Key Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-indigo-700"> Real-Time Transcription</h4>
                                <p className="text-indigo-600 text-sm">
                                    Automatically transcribes voice conversations with high accuracy and speaker identification
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Smart Summaries</h4>
                                <p className="text-indigo-600 text-sm">
                                    AI-powered summarization extracts key points and decisions from long conversations
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Action Items</h4>
                                <p className="text-indigo-600 text-sm">
                                    Automatically identifies tasks, deadlines, and assignments mentioned in discussions
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Privacy-First</h4>
                                <p className="text-indigo-600 text-sm">
                                    Designed with privacy in mind, with optional local processing and data deletion
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why This Matters */}
                <section className="space-y-6">
                    <h2 className="">Why Discord Needs This</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Discord is the hub for millions of communities, from game teams to study groups to remote work teams. However, important information often gets lost in voice conversations. Our bot addresses this by:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

                            <h3 className="font-semibold text-lg mb-2">Productivity Boost</h3>
                            <p className="text-gray-600 text-sm">
                                Never waste time asking &ldquo;What did we decide?&rdquo; again. All decisions are documented automatically.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

                            <h3 className="font-semibold text-lg mb-2">Team Alignment</h3>
                            <p className="text-gray-600 text-sm">
                                Members who missed the call can quickly catch up with AI-generated summaries and key points.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

                            <h3 className="font-semibold text-lg mb-2">Knowledge Base</h3>
                            <p className="text-gray-600 text-sm">
                                Build a searchable archive of discussions, decisions, and insights over time.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Planned Technology */}
                <section id="technology" className="space-y-6">
                    <h2 className="">Technical Architecture</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        We&apos;re planning to leverage state-of-the-art voice AI and Discord&apos;s powerful bot APIs:
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-lg mb-3 text-indigo-800">Voice AI Stack</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-indigo-500">•</span>
                                        <strong>OpenAI Whisper</strong> for transcription
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-indigo-500">•</span>
                                        <strong>GPT-4</strong> for summarization & insights
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-indigo-500">•</span>
                                        <strong>Speaker diarization</strong> for identification
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-3 text-blue-800">Bot Infrastructure</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <strong>Discord.py</strong> for bot framework
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <strong>WebSocket</strong> for real-time audio
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-blue-500">•</span>
                                        <strong>PostgreSQL</strong> for data persistence
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Callout type="info" title="Privacy-First Design">
                        We&apos;re designing the bot with privacy as a core principle, offering options for local processing and automatic data deletion after a specified period.
                    </Callout>
                </section>

                {/* Key Features */}
                <section id="features" className="space-y-6">
                    <h2 className="">Planned Bot Features</h2>

                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Seamless Voice Integration
                            </h3>
                            <p className="text-gray-600">
                                Simply invite the bot to your voice channel and it starts transcribing. No complex setup or configuration required.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Intelligent Summaries
                            </h3>
                            <p className="text-gray-600">
                                After the call, receive a concise summary highlighting key decisions, action items, and important topics discussed.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Timestamped Notes
                            </h3>
                            <p className="text-gray-600">
                                Full transcripts with timestamps and speaker labels, making it easy to jump to specific moments in the conversation.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Productivity Integrations
                            </h3>
                            <p className="text-gray-600">
                                Export action items to Notion, Trello, or other project management tools for seamless workflow integration.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Challenges */}
                <section className="space-y-6">
                    <h2 className="">Technical Challenges</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Building a reliable voice transcription bot for Discord presents unique challenges:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                            <h3 className="font-semibold text-yellow-800 mb-2"> Real-Time Processing</h3>
                            <p className="text-yellow-700 text-sm">
                                Processing audio streams in real-time while maintaining transcription accuracy and low latency
                            </p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="font-semibold text-red-800 mb-2"> Audio Quality</h3>
                            <p className="text-red-700 text-sm">
                                Handling various audio qualities, background noise, and multiple simultaneous speakers
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <h3 className="font-semibold text-purple-800 mb-2"> Privacy & Security</h3>
                            <p className="text-purple-700 text-sm">
                                Ensuring sensitive conversations are handled securely with user consent and data protection
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-800 mb-2"> Scalability</h3>
                            <p className="text-blue-700 text-sm">
                                Supporting multiple concurrent voice channels across different servers efficiently
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="space-y-6">
                    <h2 className="">Who&apos;s This For?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-lg mb-3 text-blue-800">Remote Teams</h3>
                            <p className="text-blue-700 text-sm mb-3">
                                Keep distributed teams aligned with automated meeting notes and action item tracking.
                            </p>
                            <ul className="text-blue-600 text-sm space-y-1">
                                <li>• Stand-up meeting summaries</li>
                                <li>• Project discussion archives</li>
                                <li>• Decision documentation</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                            <h3 className="">Gaming Communities</h3>
                            <p className="text-purple-700 text-sm mb-3">
                                Track raid strategies, tournament planning, and community decisions.
                            </p>
                            <ul className="text-purple-600 text-sm space-y-1">
                                <li>• Strategy session summaries</li>
                                <li>• Event planning notes</li>
                                <li>• Community announcements</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200">
                            <h3 className="">Study Groups</h3>
                            <p className="text-green-700 text-sm mb-3">
                                Never miss important study session notes or assignment discussions.
                            </p>
                            <ul className="text-green-600 text-sm space-y-1">
                                <li>• Lecture review summaries</li>
                                <li>• Study plan tracking</li>
                                <li>• Q&A transcriptions</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                            <h3 className="">Content Creators</h3>
                            <p className="text-orange-700 text-sm mb-3">
                                Document brainstorming sessions and collaboration discussions effortlessly.
                            </p>
                            <ul className="text-orange-600 text-sm space-y-1">
                                <li>• Content planning notes</li>
                                <li>• Collaboration summaries</li>
                                <li>• Feedback compilation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Timeline & Next Steps */}
                <section id="status" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">Development Timeline</h2>

                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-lg border border-indigo-200">
                        <h3 className="">Roadmap to Launch</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                <div>
                                    <h4 className="font-semibold text-indigo-800">Research & Architecture (Current Phase)</h4>
                                    <p className="text-indigo-700 text-sm">Evaluating transcription APIs, designing bot architecture, and planning privacy features</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Core Bot Development</h4>
                                    <p className="text-blue-700 text-sm">Build basic Discord bot with voice channel integration and transcription</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                <div>
                                    <h4 className="font-semibold text-purple-800">AI Features</h4>
                                    <p className="text-purple-700 text-sm">Add summarization, action item extraction, and speaker identification</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Beta & Launch</h4>
                                    <p className="text-green-700 text-sm">Test with early communities, refine features, and public release</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-indigo-200">
                            <p className="text-indigo-700 font-semibold">
                                Estimated Timeline: <span className="text-indigo-900">4 months</span>
                            </p>
                            <p className="text-indigo-600 text-sm mt-2">
                                We&apos;re currently in the planning phase, researching the best approach to build a reliable, privacy-focused bot. Updates coming soon!
                            </p>
                        </div>
                    </div>

                    <Callout type="success" title="Early Access">
                        Interested in testing the bot with your Discord community? Reach out to join our beta program when we launch!
                    </Callout>
                </section>
            </div>
        </BlogLayout>
    );
}

