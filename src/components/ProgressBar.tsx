export default function ProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full h-2 bg-alabaster rounded">
      <div className="h-2 bg-black rounded" style={{ width: `${clamped}%` }} />
    </div>
  );
}
