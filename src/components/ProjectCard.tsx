import Link from "next/link";
import StatusPill from "@/components/StatusPill";
import ProgressBar from "@/components/ProgressBar";

export type ProjectCardProps = {
  title: string;
  slug: string;
  summary: string;
  status: "planned" | "building" | "shipped";
  progress: number;
  demoUrl?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="border rounded-lg p-4 bg-seasalt">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          <Link href={`/projects/${props.slug}`}>{props.title}</Link>
        </h3>
        <StatusPill status={props.status} />
      </div>
      <p className="text-sm text-davy-gray mt-1">{props.summary}</p>
      <div className="mt-3">
        <ProgressBar value={props.progress} />
      </div>
      <div className="mt-4 flex gap-2">
        {props.demoUrl && props.status === "shipped" ? (
          <a className="px-3 py-1 rounded bg-black text-seasalt text-sm hover:bg-black/90 transition-colors" href={props.demoUrl} target="_blank" rel="noreferrer">Demo</a>
        ) : null}
        <Link className="px-3 py-1 rounded bg-black text-seasalt text-sm hover:bg-black/90 transition-colors" href={`/projects/${props.slug}`}>Read More</Link>
      </div>
    </div>
  );
}
