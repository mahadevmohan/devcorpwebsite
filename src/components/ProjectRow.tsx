"use client";

import Link from "next/link";
import Image from "next/image";
import StatusPill from "@/components/StatusPill";

type Props = {
  title: string;
  slug: string;
  summary: string;
  status: "planned" | "building" | "shipped";
  progress: number;
  demoUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
  techStack?: string[];
};

export default function ProjectRow({
  title,
  slug,
  summary,
  status,
  demoUrl,
  repoUrl,
  thumbnail = "/Images/logo.png", // Default fallback thumbnail
  techStack = [],
}: Props) {
  const hasDemo = Boolean(demoUrl);
  const hasRepo = Boolean(repoUrl);

  return (
    <article className="bg-seasalt rounded-lg p-8 shadow-sm border border-davy-gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Thumbnail */}
        <div className="order-2 lg:order-1">
          <div className="relative w-full overflow-hidden rounded-xl bg-alabaster">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={`${title} thumbnail`}
                width={960}
                height={540}
                className="h-full w-full object-cover"
                onError={(e) => {
                  // Hide the broken image and show placeholder
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'flex');
                }}
              />
            ) : null}
            <div
              className={`aspect-[16/9] flex items-center justify-center ${thumbnail ? 'hidden' : 'flex'}`}
              style={{ display: thumbnail ? 'none' : 'flex' }}
            >
              {/* simple placeholder icon */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="opacity-50 text-davy-gray"
              >
                <path
                  d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2 0v14h14V5H5zm2 10 3-4 2 3 3-4 2 5H7z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <header>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-black">
                <Link href={`/projects/${slug}`} className="hover:text-davy-gray transition-colors">
                  {title}
                </Link>
              </h3>
              <StatusPill status={status} />
            </div>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-davy-gray mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-alabaster text-davy-gray rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </header>

          <p className="text-davy-gray leading-relaxed mb-6">
            {summary}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            {status === "shipped" && hasDemo ? (
              <a
                href={demoUrl!}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-md px-4 py-2 text-sm font-medium transition bg-black text-seasalt hover:bg-davy-gray focus:outline-none focus:ring-2 focus:ring-davy-gray"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View Demo
              </a>
            ) : null}

            {hasRepo ? (
              <a
                href={repoUrl!}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-md px-4 py-2 text-sm font-medium transition border border-davy-gray text-davy-gray hover:bg-alabaster hover:text-black hover:border-black focus:outline-none focus:ring-2 focus:ring-davy-gray"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Source Code
              </a>
            ) : null}

            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center gap-2 justify-center rounded-md px-4 py-2 text-sm font-medium transition bg-black text-seasalt hover:bg-davy-gray focus:outline-none focus:ring-2 focus:ring-davy-gray"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
