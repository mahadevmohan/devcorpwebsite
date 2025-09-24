"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils"; // if you have a cn helper; otherwise remove and inline classes

type Props = {
  title: string;
  slug: string;
  summary: string;
  status: "planned" | "building" | "shipped";
  progress: number;
  demoUrl?: string;
  thumbnail?: string;
  techStack?: string[];
};

export default function ProjectRow({
  title,
  slug,
  summary,
  demoUrl,
  thumbnail,
  techStack = [],
}: Props) {
  const hasDemo = Boolean(demoUrl);

  return (
    <article className="bg-white rounded-lg p-8 shadow-sm border border-neutral-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Thumbnail */}
        <div className="order-2 lg:order-1">
          <div className="relative w-full overflow-hidden rounded-xl bg-neutral-200">
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={`${title} thumbnail`}
                width={960}
                height={540}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="aspect-[16/9] flex items-center justify-center">
                {/* simple placeholder icon */}
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="opacity-50 text-neutral-400"
                >
                  <path
                    d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2 0v14h14V5H5zm2 10 3-4 2 3 3-4 2 5H7z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <header>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              <Link href={`/projects/${slug}`} className="hover:text-neutral-600 transition-colors">
                {title}
              </Link>
            </h3>

            {/* Tech Stack */}
            {techStack.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-neutral-600 mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </header>

          <p className="text-neutral-700 leading-relaxed mb-6">
            {summary}
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={hasDemo ? demoUrl! : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!hasDemo}
              className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
                hasDemo
                  ? "bg-neutral-900 text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  : "cursor-not-allowed bg-neutral-300 text-neutral-600"
              )}
            >
              Go to project
            </a>

            <Link
              href={`/projects/${slug}`}
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              Go to blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
