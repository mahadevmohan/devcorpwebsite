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
                <div className="pt-4">
                  <a
                    href="/Resume/OfficialResume2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-black text-seasalt rounded-md hover:bg-davy-gray transition-colors"
                  >
                    Résumé
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
                  Fun fact: I’ve listened to <em>Circles</em> by Post Malone over 1,800 times on Spotify since 2021, and I’m
                  still not tired of it.
                </p>
                <div className="pt-4">
                  <a
                    href="/Resume/ParamrajSinghMachre_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-black text-seasalt rounded-md hover:bg-davy-gray transition-colors"
                  >
                    Résumé
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
