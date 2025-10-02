import { getProjectBlog } from "@/lib/content";
import BlogLayout from "@/components/BlogLayout";
import Callout from "@/components/mdx/Callout";

export default async function EDMSProjectPage() {
    const { meta } = await getProjectBlog("electronic-document-management");

    return (
        <BlogLayout
            title={meta.title}
            excerpt={meta.excerpt}
            author={meta.author || "Mahadev Mohan and Paramraj Singh Machre"}
            publishedAt={meta.publishedAt}
            readTime={meta.readTime}
        >
            <div className="space-y-12">
                {/* Introduction */}
                <section id="overview" className="space-y-6">
                    <blockquote className="border-l-4 border-black pl-6 italic text-lg text-gray-700">
                        &ldquo;Document management is not just about storing files; it&apos;s about creating intelligent workflows that enhance productivity and ensure security.&rdquo;
                    </blockquote>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The <strong>Electronic Document Management System (EDMS)</strong> is a full-stack web application built for secure document storage, management, and role-based access control. This project demonstrates modern software engineering practices, cloud integration, and production-ready deployment strategies.
                    </p>

                </section>

                {/* Architecture & Tech Stack */}
                <section id="technology" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🏗️ Architecture & Tech Stack</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The EDMS is built using a modern, scalable architecture that separates concerns and leverages cloud services for optimal performance and reliability.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Backend Technologies</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>⚡</span> Node.js + Express.js
                                    </h4>
                                    <p className="text-gray-600 mb-3">JavaScript runtime for server-side development with Express minimal web framework</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• RESTful API design with middleware</li>
                                        <li>• Session management & JWT authentication</li>
                                        <li>• Middleware chaining for security</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🗄️</span> MongoDB + Atlas
                                    </h4>
                                    <p className="text-gray-600 mb-3">NoSQL database for flexible document storage and user management</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• users collection for authentication</li>
                                        <li>• files collection for metadata</li>
                                        <li>• Cloud hosting with connection pooling</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>☁️</span> AWS S3 Integration
                                    </h4>
                                    <p className="text-gray-600 mb-3">Scalable cloud storage with direct browser-to-S3 uploads</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Pre-signed URLs for direct uploads</li>
                                        <li>• File metadata in MongoDB, files in S3</li>
                                        <li>• CORS configuration for browser uploads</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🔐</span> JWT Authentication
                                    </h4>
                                    <p className="text-gray-600 mb-3">Stateless authentication with secure user sessions</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Token expiration & secure secret keys</li>
                                        <li>• Protected routes validation</li>
                                        <li>• Role-based access control</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Frontend Technologies</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🎨</span> EJS Templating
                                    </h4>
                                    <p className="text-gray-600 mb-3">Server-side rendering with dynamic content generation</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• dashboard.ejs - Main user interface</li>
                                        <li>• admin.ejs - Admin management panel</li>
                                        <li>• Conditional rendering & form handling</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>⚡</span> Vanilla JavaScript (ES6+)
                                    </h4>
                                    <p className="text-gray-600 mb-3">No framework dependencies with full control over functionality</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Client-side filtering and sorting</li>
                                        <li>• File upload handling with progress</li>
                                        <li>• AJAX requests for real-time updates</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🎨</span> CSS3 + Flexbox/Grid
                                    </h4>
                                    <p className="text-gray-600 mb-3">Modern layout system with responsive design</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Mobile-first responsive design</li>
                                        <li>• Flexbox for header & user cards</li>
                                        <li>• CSS Grid for file grid layout</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>📱</span> Progressive Enhancement
                                    </h4>
                                    <p className="text-gray-600 mb-3">Works without JavaScript as fallback</p>
                                    <ul className="text-sm text-gray-500 space-y-1">
                                        <li>• Graceful degradation</li>
                                        <li>• SEO-friendly structure</li>
                                        <li>• Accessibility compliance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Implementation */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🔒 Security Implementation</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Security is paramount in document management systems. The EDMS implements multiple layers of security to protect sensitive data and ensure proper access control.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🔐</span> Authentication System
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• JWT-based authentication with 24h expiration</li>
                                <li>• Secure session management</li>
                                <li>• Password hashing with bcrypt</li>
                                <li>• Protected routes validation</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>👥</span> Role-Based Access Control
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li><strong>Admin:</strong> Full system access, user management</li>
                                <li><strong>Contributor:</strong> Upload/download, own file deletion</li>
                                <li><strong>Viewer:</strong> Download only, no upload/delete</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🛡️</span> Protected System Accounts
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Indestructible admin accounts</li>
                                <li>• Cannot be deleted or modified</li>
                                <li>• Special protection for system users</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>📁</span> File Security
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Filename sanitization</li>
                                <li>• Content-Type validation</li>
                                <li>• Size limits (100MB)</li>
                                <li>• S3 signed URLs for downloads</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* File Management System */}
                <section id="features" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">📁 File Management System</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The file management system is designed for efficiency, security, and scalability. Files are stored in AWS S3 with metadata in MongoDB for optimal performance.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Upload Process</h3>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <ol className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">1</span>
                                        <span>Client validation (size/type checks)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">2</span>
                                        <span>Server generates S3 pre-signed URL</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">3</span>
                                        <span>Browser uploads directly to S3</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">4</span>
                                        <span>Server saves file metadata in MongoDB</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">5</span>
                                        <span>User receives email notification</span>
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">File Operations</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>⬇️</span> Download
                                    </h4>
                                    <p className="text-gray-600">Secure downloads using S3 signed URLs with expiration</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>👁️</span> Preview
                                    </h4>
                                    <p className="text-gray-600">In-browser preview for images and PDFs with modal interface</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🗑️</span> Delete
                                    </h4>
                                    <p className="text-gray-600">Secure deletion from both S3 storage and database</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🔍</span> Search/Filter
                                    </h4>
                                    <p className="text-gray-600">Filter by category, uploader, size with instant results</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Callout type="info" title="Storage Architecture">
                        <strong>Browser → S3 (Files) → MongoDB (Metadata) → Dashboard Display</strong><br />
                        This architecture ensures optimal performance by separating file storage from metadata, enabling fast queries and scalable file handling.
                    </Callout>
                </section>

                {/* DevOps & Deployment */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🚀 DevOps & Deployment</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The deployment strategy leverages modern DevOps practices with automated testing, continuous integration, and serverless architecture for optimal performance and scalability.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>⚡</span> Vercel Serverless Functions
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Auto-scaling, pay-per-request model</li>
                                <li>• vercel.json configuration for routing</li>
                                <li>• Environment variable management</li>
                                <li>• Zero-downtime deployments</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🔄</span> GitHub Actions CI/CD
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Automated testing on multiple Node.js versions</li>
                                <li>• Quality assurance gates</li>
                                <li>• Automated deployment triggers</li>
                                <li>• Test coverage generation</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🧪</span> Jest Testing Framework
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Unit tests for server logic</li>
                                <li>• Integration tests for database operations</li>
                                <li>• Security tests for authentication</li>
                                <li>• Performance tests for file operations</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>📊</span> Monitoring & Logging
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Request/response logging</li>
                                <li>• Performance monitoring</li>
                                <li>• Error tracking and alerting</li>
                                <li>• Health check endpoints</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Performance Optimizations */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">⚡ Performance Optimizations</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Performance is critical for document management systems handling large files and multiple users. The EDMS implements various optimization strategies across the entire stack.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Client-Side Performance</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🚀</span> Lazy Loading
                                    </h4>
                                    <p className="text-gray-600">Files and images load on-demand to improve initial page speed</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>⚡</span> Event Delegation
                                    </h4>
                                    <p className="text-gray-600">Efficient event handling for large file grids</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🔍</span> Debounced Search
                                    </h4>
                                    <p className="text-gray-600">Reduces API calls during typing for better UX</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>💾</span> Browser Caching
                                    </h4>
                                    <p className="text-gray-600">Intelligent caching strategies for static assets</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Server-Side Performance</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🔗</span> Connection Pooling
                                    </h4>
                                    <p className="text-gray-600">MongoDB connection pooling for efficient database access</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>⚡</span> Asynchronous Operations
                                    </h4>
                                    <p className="text-gray-600">Non-blocking I/O operations for better throughput</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>🛡️</span> Graceful Error Handling
                                    </h4>
                                    <p className="text-gray-600">Proper error handling prevents crashes and improves reliability</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                        <span>💾</span> Memory Management
                                    </h4>
                                    <p className="text-gray-600">Efficient memory usage and garbage collection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Technical Decisions */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🎯 Key Technical Decisions</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        Several strategic decisions were made during development to ensure optimal performance, scalability, and maintainability.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>☁️</span> Direct S3 Uploads
                            </h3>
                            <p className="text-gray-600 mb-3">Files upload directly from browser to S3, bypassing server limitations</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Avoids Vercel&apos;s 4.5MB function limit</li>
                                <li>• Faster uploads with reduced server load</li>
                                <li>• Better scalability for large files</li>
                                <li>• Improved user experience with progress tracking</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🔍</span> Client-Side Filtering
                            </h3>
                            <p className="text-gray-600 mb-3">Filtering and sorting happens in the browser for instant results</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• No database queries for filtering operations</li>
                                <li>• Instant feedback for better UX</li>
                                <li>• Scalable with large datasets</li>
                                <li>• Works offline once data is loaded</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🎨</span> EJS over React
                            </h3>
                            <p className="text-gray-600 mb-3">Server-side rendering chosen over client-side framework</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Simpler server-side rendering setup</li>
                                <li>• No build pipeline required</li>
                                <li>• Faster initial page load</li>
                                <li>• SEO-friendly by default</li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🗄️</span> MongoDB over SQL
                            </h3>
                            <p className="text-gray-600 mb-3">NoSQL database chosen for flexible document storage</p>
                            <ul className="text-sm text-gray-500 space-y-1">
                                <li>• Schema flexibility for evolving requirements</li>
                                <li>• Natural fit with JavaScript ecosystem</li>
                                <li>• Easy horizontal scaling</li>
                                <li>• Perfect for file metadata storage</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* API Documentation */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">📚 API Documentation</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The EDMS includes comprehensive API documentation with OpenAPI/Swagger integration for easy integration and testing.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>📖</span> Interactive Documentation
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• OpenAPI/Swagger integration</li>
                                <li>• Interactive testing interface</li>
                                <li>• JWT authentication examples</li>
                                <li>• Request/response schemas</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🔗</span> Key Endpoints
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li><code>POST /registerSubmit</code> - User registration</li>
                                <li><code>POST /loginSubmit</code> - User authentication</li>
                                <li><code>GET /download/&#123;filename&#125;</code> - File download</li>
                                <li><code>POST /upload</code> - File upload</li>
                                <li><code>GET /api-docs</code> - Interactive documentation</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Future Enhancements */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">🔮 Future Enhancements</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The EDMS is designed with extensibility in mind. Future enhancements are planned across three phases to continuously improve functionality and user experience.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Phase 1: Security & API</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <h4 className="font-semibold text-blue-800 mb-2">Rate Limiting</h4>
                                    <p className="text-blue-700 text-sm">API rate limiting to prevent abuse</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <h4 className="font-semibold text-blue-800 mb-2">Audit Logging</h4>
                                    <p className="text-blue-700 text-sm">Comprehensive audit trails for compliance</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <h4 className="font-semibold text-blue-800 mb-2">API Versioning</h4>
                                    <p className="text-blue-700 text-sm">Versioned APIs for backward compatibility</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <h4 className="font-semibold text-blue-800 mb-2">Input Validation</h4>
                                    <p className="text-blue-700 text-sm">Stricter validation and sanitization</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Phase 2: Monitoring</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <h4 className="font-semibold text-green-800 mb-2">Error Tracking</h4>
                                    <p className="text-green-700 text-sm">Real-time error tracking and alerting</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <h4 className="font-semibold text-green-800 mb-2">Health Checks</h4>
                                    <p className="text-green-700 text-sm">Automated health check endpoints</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <h4 className="font-semibold text-green-800 mb-2">Performance Monitoring</h4>
                                    <p className="text-green-700 text-sm">Detailed performance metrics and dashboards</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <h4 className="font-semibold text-green-800 mb-2">User Analytics</h4>
                                    <p className="text-green-700 text-sm">User behavior and usage analytics</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-black mb-4">Phase 3: Advanced Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <h4 className="font-semibold text-purple-800 mb-2">File Versioning</h4>
                                    <p className="text-purple-700 text-sm">Version control for document revisions</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <h4 className="font-semibold text-purple-800 mb-2">Elasticsearch</h4>
                                    <p className="text-purple-700 text-sm">Advanced search capabilities</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <h4 className="font-semibold text-purple-800 mb-2">Real-time Collaboration</h4>
                                    <p className="text-purple-700 text-sm">Live document editing and commenting</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <h4 className="font-semibold text-purple-800 mb-2">Mobile App</h4>
                                    <p className="text-purple-700 text-sm">Native mobile application</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Summary */}
                <section id="status" className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">📋 Project Summary</h2>

                    <p className="text-lg leading-relaxed text-gray-700">
                        The EDMS project demonstrates enterprise-level software engineering skills and showcases how to build, deploy, and maintain production-ready applications. This comprehensive system combines modern web technologies with robust security practices and scalable architecture.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🛠️</span> Technical Skills Demonstrated
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Full-stack development with modern technologies</li>
                                <li>• Cloud integration (AWS S3, Vercel)</li>
                                <li>• Security implementation (JWT, RBAC)</li>
                                <li>• RESTful API design with Swagger docs</li>
                                <li>• Testing with Jest and CI/CD pipelines</li>
                                <li>• Performance optimization strategies</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                <span>🏗️</span> Architecture Decisions
                            </h3>
                            <ul className="text-gray-600 space-y-2">
                                <li>• Modular microservice-friendly design</li>
                                <li>• Serverless + cloud storage for scalability</li>
                                <li>• Multi-layered security implementation</li>
                                <li>• Responsive UI with real-time updates</li>
                                <li>• Progressive enhancement principles</li>
                                <li>• Production-ready deployment strategy</li>
                            </ul>
                        </div>
                    </div>

                    <Callout type="success" title="Production Ready">
                        The EDMS is currently deployed and serving real users with enterprise-grade security, performance, and reliability. Visit <strong><a href="https://edms-blue.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">edms-blue.vercel.app</a></strong> to explore the live system.
                    </Callout>
                </section>
            </div>
        </BlogLayout>
    );
}
