import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-seasalt mb-4">About Us</h1>
          <p className="text-xl text-silver">Meet the team behind devcorp</p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-seasalt py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Our Mission</h2>
          <p className="text-lg text-davy-gray leading-relaxed">
            devcorp is our creative playground. We build projects to learn, grow, and share. Our goal is to become better software engineers by solving real problems and shipping real code.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-seasalt py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Mahadev Mohan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-black mb-2">Mahadev Mohan</h3>
              <p className="text-davy-gray mb-4">CEO & Founder</p>
              <div className="space-y-4 text-davy-gray">
                <p className="leading-relaxed">
                  Hi, I’m <span className="font-semibold">Mahadev</span>, a Comp Sci grad from UW-Madison and founder
                  of devcorp, where I turn ideas into projects with real impact.
                  I’ve built everything from LLM-powered news apps for C-suites to quirky AI games,
                  and I have experiences in project management, enterprise sales, GenAI, and more.
                  I thrive on tackling tough problems, learning fast, and wearing as many hats as it takes to get things done.
                </p>
                <p className="text-sm italic">Fun fact: I procrastinate by cooking intricate meals for my friends.</p>
                <div className="flex flex-wrap items-center gap-3 pt-6">
                  <a
                    href="/Resume/OfficialResume2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-seasalt rounded-md hover:bg-davy-gray transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Résumé
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahadev-mohan-235ba6216/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-md hover:bg-[#006399] transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/mahadevmohan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#24292e] text-white rounded-md hover:bg-[#1a1e22] transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">


              <div className="aspect-square bg-alabaster rounded-lg overflow-hidden">
                <Image
                  src="/Images/mahadev.JPG"
                  alt="Mahadev Mohan"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-[100%_50%]"
                />
              </div>
            </div>
          </div>

          {/* Paramraj Singh Machre */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image Section */}
            <div className="order-2">
              <div className="aspect-square bg-alabaster rounded-lg overflow-hidden">
                <Image
                  src="/Images/paramraj-photo.jpg"
                  alt="Paramraj Singh Machre"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover object-[100%_50%]"
                />
              </div>
            </div>

            {/* Bio Section */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-black mb-2">Paramraj Singh Machre</h3>
              <p className="text-davy-gray mb-4">Founding Software Developer</p>
              <div className="space-y-4 text-davy-gray">
                <p className="leading-relaxed">
                  Hi, I’m <span className="font-semibold">Paramraj</span>, a Computer Science new grad from UMD with a passion
                  for building scalable, user-friendly systems. I love turning ideas into projects that blend clean code, smart
                  design, and a bit of creativity. I’ve worked across full-stack development, data engineering, and AI/ML, and
                  I’m always looking for new ways to learn and push boundaries.
                </p>

                <p className="text-sm italic">
                  Fun fact: I&apos;ve listened to <em>Circles</em> by Post Malone over 1,800 times on Spotify since 2021, and I&apos;m
                  still not tired of it.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-6">
                  <a
                    href="/Resume/ParamrajSinghMachre_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-black text-seasalt rounded-md hover:bg-davy-gray transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Résumé
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pmachre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-md hover:bg-[#006399] transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/bennytobby"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#24292e] text-white rounded-md hover:bg-[#1a1e22] transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-seasalt py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-lg text-davy-gray">What drives us to build?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Learn by Building */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-alabaster rounded-full flex items-center justify-center">
                <span className="text-davy-gray font-bold">i</span>
              </div>
              <h3 className="text-xl font-bold text-black">Learn by Building</h3>
              <p className="text-davy-gray">
                We believe in hands-on learning. Every project is an opportunity to master new technologies and solve complex problems.
              </p>
            </div>

            {/* Stay Curious */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-alabaster rounded-full flex items-center justify-center">
                <span className="text-davy-gray font-bold">i</span>
              </div>
              <h3 className="text-xl font-bold text-black">Stay Curious</h3>
              <p className="text-davy-gray">
                Technology evolves rapidly. We maintain our curiosity and continuously explore new frameworks, tools, and methodologies.
              </p>
            </div>

            {/* Growth Over Perfection */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-alabaster rounded-full flex items-center justify-center">
                <span className="text-davy-gray font-bold">i</span>
              </div>
              <h3 className="text-xl font-bold text-black">Growth Over Perfection</h3>
              <p className="text-davy-gray">
                We prioritize learning and improvement over perfection. Shipping code and learning from feedback drives our progress.
              </p>
            </div>

            {/* Teamwork First */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-alabaster rounded-full flex items-center justify-center">
                <span className="text-davy-gray font-bold">i</span>
              </div>
              <h3 className="text-xl font-bold text-black">Teamwork First</h3>
              <p className="text-davy-gray">
                Collaboration amplifies our individual strengths. We work together, share knowledge, and support each other&apos;s growth.
              </p>
            </div>

            {/* Solve Real Problems */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-alabaster rounded-full flex items-center justify-center">
                <span className="text-davy-gray font-bold">i</span>
              </div>
              <h3 className="text-xl font-bold text-black">Solve Real Problems</h3>
              <p className="text-davy-gray">
                We focus on building solutions that address genuine needs and create meaningful impact for users and businesses.
              </p>
            </div>

            {/* Share and Inspire */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-alabaster rounded-full flex items-center justify-center">
                <span className="text-davy-gray font-bold">i</span>
              </div>
              <h3 className="text-xl font-bold text-black">Share and Inspire</h3>
              <p className="text-davy-gray">
                Knowledge grows when shared. We document our journey, share insights, and inspire others in the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-seasalt py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Follow the latest trends</h2>
          <p className="text-lg text-davy-gray mb-8">With our daily newsletter</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 border border-davy-gray rounded-md focus:outline-none focus:ring-2 focus:ring-davy-gray text-black placeholder-silver"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-black text-seasalt rounded-md hover:bg-davy-gray transition-colors">
              Submit
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
