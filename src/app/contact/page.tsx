export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-seasalt mb-4">Contact Us</h1>
          <p className="text-xl text-silver">
            Get in touch with us to discuss projects, collaborations, or just say hello
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-seasalt py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
                <p className="text-lg text-davy-gray leading-relaxed mb-8">
                  We&apos;re always excited to hear about new projects and opportunities.
                  Whether you want to collaborate, have questions about our work, or just want to chat about technology, we&apos;d love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-alabaster rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-davy-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-davy-gray">hello@devcorp.com</p>
                    <p className="text-sm text-silver">We&apos;ll get back to you within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-alabaster rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-davy-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Location</h3>
                    <p className="text-davy-gray">San Francisco, CA</p>
                    <p className="text-sm text-silver">Remote-first team</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-alabaster rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-davy-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Response Time</h3>
                    <p className="text-davy-gray">Usually within 24 hours</p>
                    <p className="text-sm text-silver">Monday - Friday, 9 AM - 6 PM PST</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-neutral-200">
                <h3 className="font-semibold text-black mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-alabaster rounded-lg flex items-center justify-center hover:bg-silver transition-colors">
                    <span className="text-davy-gray font-semibold">X</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-alabaster rounded-lg flex items-center justify-center hover:bg-silver transition-colors">
                    <span className="text-davy-gray font-semibold">LI</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-alabaster rounded-lg flex items-center justify-center hover:bg-silver transition-colors">
                    <span className="text-davy-gray font-semibold">GH</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-alabaster rounded-lg flex items-center justify-center hover:bg-silver transition-colors">
                    <span className="text-davy-gray font-semibold">YT</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-seasalt rounded-lg p-8 shadow-sm border border-davy-gray">
              <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-davy-gray mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-davy-gray rounded-md focus:outline-none focus:ring-2 focus:ring-davy-gray text-black"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-davy-gray mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-davy-gray rounded-md focus:outline-none focus:ring-2 focus:ring-davy-gray text-black"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-davy-gray mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-davy-gray rounded-md focus:outline-none focus:ring-2 focus:ring-davy-gray text-black"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-davy-gray mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-davy-gray rounded-md focus:outline-none focus:ring-2 focus:ring-davy-gray text-black"
                  >
                    <option value="">Select a topic</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="hiring">Hiring Opportunities</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-davy-gray mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-davy-gray rounded-md focus:outline-none focus:ring-2 focus:ring-davy-gray text-black resize-vertical"
                    placeholder="Tell us about your project or question..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-seasalt py-3 px-6 rounded-md hover:bg-davy-gray transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-seasalt py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-davy-gray">
              Quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">How long does a typical project take?</h3>
              <p className="text-davy-gray">
                Project timelines vary based on complexity and scope. Simple web applications typically take 2-4 weeks,
                while more complex systems can take 2-6 months. We provide detailed timelines during our initial consultation.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">Do you work with startups or only established companies?</h3>
              <p className="text-davy-gray">
                We work with clients of all sizes, from early-stage startups to Fortune 500 companies.
                We&apos;re particularly passionate about helping startups bring their innovative ideas to life.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">What technologies do you specialize in?</h3>
              <p className="text-davy-gray">
                We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel.
                We stay up-to-date with the latest frameworks and tools to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-black mb-3">Do you provide ongoing support after project completion?</h3>
              <p className="text-davy-gray">
                Yes! We offer various support packages including maintenance, updates, and feature additions.
                We believe in building long-term relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
