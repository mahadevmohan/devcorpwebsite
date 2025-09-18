export default function StatusPill({ status }: { status: "planned"|"building"|"shipped" }) {
  const color = status === "shipped" ? "bg-green-600" : status === "building" ? "bg-yellow-600" : "bg-gray-500";
  const text = status.charAt(0).toUpperCase() + status.slice(1);
  return <span className={`inline-block text-white text-xs px-2 py-0.5 rounded ${color}`}>{text}</span>;
}
