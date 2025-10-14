import { getProjectBlog } from "@/lib/content";
import BlogLayout from "@/components/BlogLayout";
import Callout from "@/components/mdx/Callout";

export default async function AIStoryGamePage() {
    const { meta } = await getProjectBlog("ai-story-game");

    // Estimated read time: ~1150 words / 225 wpm = 6 minutes
    const readTime = 6;

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
                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                        <p className="text-purple-800 font-semibold mb-2">Project Status: Planned</p>
                        <p className="text-purple-700">
                            This project is in the conceptual phase. We&apos;re designing game mechanics and exploring AI storytelling capabilities for an immersive interactive experience.
                        </p>
                    </div>

                    <h2 className="">The Concept</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        What if every time you played a game, the story was completely different? <strong>AI Story Text Game</strong> combines the creativity of artificial intelligence with the engagement of interactive fiction to create unique, personalized adventures that adapt to your choices in real-time.
                    </p>

                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg border border-pink-200">
                        <h3 className="">What Makes This Unique?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h4 className="">Dynamic Storytelling</h4>
                                <p className="text-pink-600 text-sm">
                                    AI generates unique narratives on-the-fly, ensuring no two playthroughs are ever the same
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Branching Paths</h4>
                                <p className="text-pink-600 text-sm">
                                    Your choices genuinely matter, with AI creating new story branches based on your decisions
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Character Depth</h4>
                                <p className="text-pink-600 text-sm">
                                    NPCs remember your actions and develop relationships that evolve throughout the game
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="">Multiple Genres</h4>
                                <p className="text-pink-600 text-sm">
                                    From fantasy adventures to sci-fi mysteries, explore different worlds and storylines
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why This Matters */}
                <section className="space-y-6">
                    <h2 className="">The Vision Behind It</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Traditional text-based games follow predetermined paths, limiting replayability and player agency. AI Story Text Game reimagines interactive fiction by:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

                            <h3 className="font-semibold text-lg mb-2">Infinite Creativity</h3>
                            <p className="text-gray-600 text-sm">
                                AI generates endless story possibilities, making each playthrough a fresh experience
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

                            <h3 className="font-semibold text-lg mb-2">True Player Agency</h3>
                            <p className="text-gray-600 text-sm">
                                Your choices shape the narrative in meaningful ways, not just selecting from pre-written options
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">

                            <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
                            <p className="text-gray-600 text-sm">
                                Text-based format makes gaming accessible to everyone, including visually impaired players
                            </p>
                        </div>
                    </div>
                </section>

                {/* Planned Technology */}
                <section id="technology" className="space-y-6">
                    <h2 className="">Technology Vision</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        We&apos;re planning to use cutting-edge AI and modern web technologies to create a seamless gaming experience:
                    </p>

                    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-lg mb-3 text-purple-800">AI & Game Engine</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-purple-500">•</span>
                                        <strong>OpenAI GPT</strong> for narrative generation
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-purple-500">•</span>
                                        <strong>Custom game state engine</strong> for coherence
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-purple-500">•</span>
                                        <strong>NLP processing</strong> for natural input
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-3 text-pink-800">Platform Stack</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-pink-500">•</span>
                                        <strong>React</strong> for responsive UI
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-pink-500">•</span>
                                        <strong>WebSocket</strong> for real-time updates
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-pink-500">•</span>
                                        <strong>MongoDB</strong> for game state persistence
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Callout type="info" title="Game Mechanics in Design">
                        We&apos;re developing a sophisticated system that balances AI creativity with game structure, ensuring stories remain engaging while giving players true narrative freedom.
                    </Callout>
                </section>

                {/* Key Features */}
                <section id="features" className="space-y-6">
                    <h2 className="">Planned Game Features</h2>

                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Adaptive Narratives
                            </h3>
                            <p className="text-gray-600">
                                AI continuously generates story content that responds to your actions, creating a living, breathing world that evolves with your choices.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-pink-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Natural Language Input
                            </h3>
                            <p className="text-gray-600">
                                Type your actions naturally—no need to memorize commands. The AI understands context and intent, making interaction intuitive.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Character Relationships
                            </h3>
                            <p className="text-gray-600">
                                Build relationships with characters who remember your past interactions and react accordingly, creating emotional investment in the story.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                Save & Share
                            </h3>
                            <p className="text-gray-600">
                                Save your progress at any point and share your unique story outcomes with the community, comparing different narrative paths.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Design Challenges */}
                <section className="space-y-6">
                    <h2 className="">Design Challenges</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Creating an AI-powered game that&apos;s both creative and coherent requires solving unique challenges:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                            <h3 className="font-semibold text-yellow-800 mb-2"> Story Coherence</h3>
                            <p className="text-yellow-700 text-sm">
                                Maintaining narrative consistency across branching paths while allowing AI freedom to create
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-800 mb-2"> Response Time</h3>
                            <p className="text-blue-700 text-sm">
                                Generating AI responses quickly enough to maintain gameplay flow and player immersion
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <h3 className="font-semibold text-purple-800 mb-2"> Game Balance</h3>
                            <p className="text-purple-700 text-sm">
                                Ensuring AI-generated challenges are appropriately difficult and rewarding
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="font-semibold text-green-800 mb-2"> Player Experience</h3>
                            <p className="text-green-700 text-sm">
                                Creating an interface that&apos;s engaging for text-based gameplay in a visual world
                            </p>
                        </div>
                    </div>
                </section>

                {/* Timeline & Next Steps */}
                <section id="status" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">Development Roadmap</h2>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200">
                        <h3 className="">From Concept to Reality</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                <div>
                                    <h4 className="font-semibold text-purple-800">Concept Design (Current Phase)</h4>
                                    <p className="text-purple-700 text-sm">Defining game mechanics, story structures, and AI interaction patterns</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                <div>
                                    <h4 className="font-semibold text-pink-800">Prototype Development</h4>
                                    <p className="text-pink-700 text-sm">Build basic game loop with simple AI-generated storylines</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Alpha Testing</h4>
                                    <p className="text-blue-700 text-sm">Test with early users and refine AI storytelling quality</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Feature Expansion</h4>
                                    <p className="text-green-700 text-sm">Add multiple genres, character systems, and community features</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-purple-200">
                            <p className="text-purple-700 font-semibold">
                                Estimated Timeline: <span className="text-purple-900">10 months</span>
                            </p>
                            <p className="text-purple-600 text-sm mt-2">
                                We&apos;re in the early design phase, exploring how to best balance AI creativity with engaging gameplay. Expect updates as we move forward!
                            </p>
                        </div>
                    </div>

                    <Callout type="success" title="Join the Adventure">
                        Love interactive fiction or AI-powered games? We&apos;d love your input as we design this experience. Reach out to share your ideas!
                    </Callout>
                </section>
            </div>
        </BlogLayout>
    );
}

