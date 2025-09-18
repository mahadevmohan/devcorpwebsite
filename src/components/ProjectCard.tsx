import Link from "next/link";
import StatusPill from "@/components/StatusPill";
import ProgressBar from "@/components/ProgressBar";

export type ProjectCardProps = {
  title: string;
  slug: string;
  summary: string;
  status: "planned"|"building"|"shipped";
  progress: number;
  demoUrl?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          <Link href={`/projects/${props.slug}`}>{props.title}</Link>
        </h3>
        <StatusPill status={props.status} />
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{props.summary}</p>
      <div className="mt-3">
        <ProgressBar value={props.progress} />
      </div>
      <div className="mt-4 flex gap-2">
        {props.demoUrl && (
          <a className="px-3 py-1 rounded bg-black text-white text-sm" href={props.demoUrl} target="_blank" rel="noreferrer">Demo</a>
        )}
        <Link className="px-3 py-1 rounded border text-sm" href={`/projects/${props.slug}`}>Blog</Link>
      </div>
    </div>
  );
}
