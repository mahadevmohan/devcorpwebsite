"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "planned" | "building" | "shipped";
  progress: number;
  tags: string[];
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
  publishedAt?: string;
  updatedAt?: string;
  body: string;
};

interface HomeClientProps {
  projects: Project[];
}

export default function HomeClient({ projects }: HomeClientProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto px-8 text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Code. Create. Conquer.
          </motion.h1>
          <motion.p
            className="text-xl text-neutral-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            devcorp
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-block px-5 py-2 rounded bg-seasalt text-black shadow-sm hover:opacity-90 transition-opacity"
            >
              Project Demos
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Cue */}
        <motion.button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ y: -2 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </section>

      {/* PROJECT PREVIEW */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-4">Project Preview</h2>
            <p className="text-center text-muted">What we are building and why</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.slice(0, 6).map((p, index) => (
              <motion.div
                key={p.slug}
                className="bg-davy-gray text-seasalt rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-seasalt mb-2">
                  <Link href={`/projects/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h3>
                <p className="text-sm text-silver">{p.summary}</p>
              </motion.div>
            ))}
            {/* Fillers to keep the grid feel if few projects exist */}
            {projects.length < 6 && Array.from({ length: 6 - projects.length }).map((_, i) => (
              <motion.div
                key={`placeholder-${i}`}
                className="bg-davy-gray text-seasalt rounded-lg p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: (projects.length + i) * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-seasalt mb-2">TBD</h3>
                <p className="text-sm text-silver">Coming soon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
