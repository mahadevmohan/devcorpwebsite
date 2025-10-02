interface ProgressBarProps {
  percentage: number;
  label?: string;
  color?: "blue" | "green" | "yellow" | "red";
}

export default function ProgressBar({ percentage, label, color = "blue" }: ProgressBarProps) {
  const colors = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
  };

  return (
    <div className="my-4 p-4 bg-white border rounded-lg shadow-sm">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-700">{label}</span>
          <span className="text-sm font-bold text-gray-600">{percentage}%</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-500 ${colors[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
