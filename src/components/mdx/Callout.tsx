import { ReactNode } from "react";

interface CalloutProps {
    type?: "info" | "warning" | "success" | "error";
    title?: string;
    children: ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
    const styles = {
        info: "bg-blue-50 border-blue-200 text-blue-800",
        warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
        success: "bg-green-50 border-green-200 text-green-800",
        error: "bg-red-50 border-red-200 text-red-800",
    };

    const icons = {
        info: "💡",
        warning: "⚠️",
        success: "✅",
        error: "❌",
    };

    return (
        <div className={`border-l-4 rounded-r-lg p-4 my-6 ${styles[type]}`}>
            {title && (
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{icons[type]}</span>
                    <h4 className="font-semibold text-sm uppercase tracking-wide">{title}</h4>
                </div>
            )}
            <div className="prose prose-sm max-w-none">{children}</div>
        </div>
    );
}
