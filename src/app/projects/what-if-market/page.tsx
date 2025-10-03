import { getProjectBlog } from "@/lib/content";
import BlogLayout from "@/components/BlogLayout";
import TechStack from "@/components/mdx/TechStack";
import Callout from "@/components/mdx/Callout";
import ProgressBar from "@/components/ProgressBar";

export default async function WhatIfMarketPage() {
    const { meta } = await getProjectBlog("what-if-market");

    // Estimated read time: ~1800 words / 225 wpm = 8 minutes
    const readTime = 8;

    return (
        <BlogLayout
            title={meta.title}
            excerpt={meta.excerpt || undefined}
            author={meta.author || "Mahadev Mohan and Paramraj Singh Machre"}
            publishedAt={meta.publishedAt}
            readTime={readTime}
        >
            <div className="space-y-12">
                {/* Introduction */}
                <section id="overview" className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <p className="text-blue-800 font-semibold mb-2">Project Status: Building</p>
                        <p className="text-blue-700 mb-4">
                            We&apos;re currently in active development of this project. The foundation is being built and core features are taking shape.
                        </p>
                        <div className="mt-4">
                            <div className="mb-2 text-sm font-medium text-blue-700">Overall Progress: 45%</div>
                            <ProgressBar value={45} />
                        </div>
                    </div>

                    <blockquote className="border-l-4 border-black pl-6 italic text-lg text-gray-700">
                        &ldquo;The stock market is a device for transferring money from the impatient to the patient.&rdquo; - Warren Buffett
                    </blockquote>

                    <p className="text-lg leading-relaxed text-gray-700">
                        <strong>What-If Market</strong> is an innovative platform that gamifies financial education through interactive stock market simulations and hypothetical scenario testing. We&apos;re building a safe, engaging environment where users can learn about markets without risking real money.
                    </p>
                </section>

                {/* Project Overview */}
                <section className="space-y-6">
                    <h2 className="">Project Overview</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        <strong>What-If Market</strong> addresses a critical gap in financial education by providing users with a <strong>safe, engaging environment</strong> to explore how different events and scenarios might impact financial markets. Instead of risking real money, users can experiment with various &ldquo;what-if&rdquo; situations and learn from the outcomes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                Gamified Learning
                            </h3>
                            <p className="text-gray-600">Make financial education fun and interactive</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                Risk-Free Environment
                            </h3>
                            <p className="text-gray-600">Learn without financial consequences</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                Real Market Data
                            </h3>
                            <p className="text-gray-600">Use actual stock prices and market conditions</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                Scenario-Based Learning
                            </h3>
                            <p className="text-gray-600">Understand cause-and-effect relationships</p>
                        </div>
                    </div>
                </section>

                {/* Development Status */}
                <section id="status" className="space-y-6">
                    <h2 className="">Current Development Status</h2>

                    <div className="mb-6">
                        <div className="mb-2 text-sm font-medium text-gray-700">What-If Market Development Progress: 45%</div>
                        <ProgressBar value={45} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                Completed Features
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-green-500"></span>
                                    <div>
                                        <h4 className="font-semibold">Core Architecture</h4>
                                        <p className="text-sm text-gray-600">React frontend with FastAPI backend</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Market Data Integration</h4>
                                        <p className="text-sm text-gray-600">Real-time stock data APIs integrated</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Basic Visualization</h4>
                                        <p className="text-sm text-gray-600">Initial D3.js charts and graphs implemented</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">User Authentication</h4>
                                        <p className="text-sm text-gray-600">Secure login and registration system</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-green-500"></span>
                                    <div>
                                        <h4 className="font-semibold">Scenario Engine</h4>
                                        <p className="text-sm text-gray-600">Basic framework for creating hypothetical scenarios</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                Currently Working On
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Advanced Visualization</h4>
                                        <p className="text-sm text-gray-600">Interactive charts with zoom, pan, and filtering</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Scenario Builder</h4>
                                        <p className="text-sm text-gray-600">User-friendly interface for creating custom scenarios</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Game Mechanics</h4>
                                        <p className="text-sm text-gray-600">Achievement system and progress tracking</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Educational Content</h4>
                                        <p className="text-sm text-gray-600">Comprehensive guides and tutorials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Implementation */}
                <section id="technology" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black"> Technical Implementation</h2>

                    <TechStack technologies={["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "WebSocket"]} title="Complete Technology Stack" />

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Frontend Development
                            </h3>

                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                <pre className="text-sm overflow-x-auto">
                                    <code>{`// Core architecture example
interface MarketSimulation {
  scenario: Scenario;
  initialData: StockData[];
  timeline: MarketEvent[];
  outcomes: SimulationResult[];
}`}</code>
                                </pre>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-500"></span>
                                    <div>
                                        <h4 className="font-semibold">React 18</h4>
                                        <p className="text-sm text-gray-600">Modern, responsive user interface</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">D3.js</h4>
                                        <p className="text-sm text-gray-600">Sophisticated data visualizations</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Tailwind CSS</h4>
                                        <p className="text-sm text-gray-600">Responsive, modern UI design</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Redux Toolkit</h4>
                                        <p className="text-sm text-gray-600">State management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Backend Architecture
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">FastAPI</h4>
                                        <p className="text-sm text-gray-600">High-performance API endpoints</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-green-500"></span>
                                    <div>
                                        <h4 className="font-semibold">PostgreSQL</h4>
                                        <p className="text-sm text-gray-600">Reliable data storage</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">WebSocket</h4>
                                        <p className="text-sm text-gray-600">Real-time market data streaming</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-green-500"></span>
                                    <div>
                                        <h4 className="font-semibold">Redis</h4>
                                        <p className="text-sm text-gray-600">Caching and session management</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                Data Sources
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Alpha Vantage API</h4>
                                        <p className="text-sm text-gray-600">Real-time stock data</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Yahoo Finance API</h4>
                                        <p className="text-sm text-gray-600">Historical data</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div>
                                        <h4 className="font-semibold">Financial News APIs</h4>
                                        <p className="text-sm text-gray-600">Scenario context</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Educational Impact */}
                <section id="features" className="space-y-6">
                    <h2 className="">Educational Impact</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        What-If Market isn&apos;t just a game—it&apos;s a <strong>comprehensive financial education tool</strong>:
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200">
                        <h3 className="">Learning Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start gap-3">
                                <span className="text-blue-500"></span>
                                <div>
                                    <h4 className="font-semibold text-blue-700">Risk-Free Learning</h4>
                                    <p className="text-blue-600">Experiment without financial consequences</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div>
                                    <h4 className="font-semibold text-blue-700">Real Market Data</h4>
                                    <p className="text-blue-600">Learn with actual stock prices and market conditions</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div>
                                    <h4 className="font-semibold text-blue-700">Scenario-Based Learning</h4>
                                    <p className="text-blue-600">Understand cause-and-effect relationships</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div>
                                    <h4 className="font-semibold text-blue-700">Progressive Difficulty</h4>
                                    <p className="text-blue-600">Start simple, advance to complex scenarios</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Callout type="info" title="Future Vision">
                        What-If Market aims to become the go-to platform for financial education, helping users of all ages and backgrounds understand market dynamics through interactive, engaging experiences.
                    </Callout>
                </section>
            </div>
        </BlogLayout>
    );
}
