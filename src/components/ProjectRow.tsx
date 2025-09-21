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
    <article className="grid grid-cols-12 gap-6 rounded-2xl bg-stone-50 p-4 shadow-sm dark:bg-neutral-950/60">
      {/* Thumbnail */}
      <div className="col-span-12 md:col-span-5">
        <div className="relative w-full overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
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
                className="opacity-50"
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
      <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
        <header>
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            <Link href={`/projects/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>

          {/* “Tech Stack” pill (matches the small green tag in your mock) */}
          <div className="mt-2">
            <span className="inline-flex items-center rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-300/20 dark:text-emerald-300">
              Tech Stack
            </span>
            {techStack.length > 0 && (
              <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">
                {techStack.slice(0, 4).join(" · ")}
                {techStack.length > 4 ? " +" + (techStack.length - 4) : ""}
              </span>
            )}
          </div>
        </header>

        <p className="mt-2 line-clamp-3 text-sm text-neutral-600 dark:text-neutral-300">
          {summary}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <a
            href={hasDemo ? demoUrl! : undefined}
            target="_blank"
            rel="noreferrer"
            aria-disabled={!hasDemo}
            className={cn(
              "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
              hasDemo
                ? "bg-neutral-900 text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-neutral-400"
                : "cursor-not-allowed bg-neutral-300 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-500"
            )}
          >
            Go to project
          </a>

          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800"
          >
            Go to blog
          </Link>
        </div>
      </div>
    </article>
  );
}
