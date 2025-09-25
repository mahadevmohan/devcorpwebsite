export default function StatusPill({ status }: { status: "planned"|"building"|"shipped" }) {
  const color = status === "shipped" ? "bg-davy-gray" : status === "building" ? "bg-silver" : "bg-black";
  const text = status.charAt(0).toUpperCase() + status.slice(1);
  return <span className={`inline-block text-seasalt text-xs px-2 py-0.5 rounded ${color}`}>{text}</span>;
}
