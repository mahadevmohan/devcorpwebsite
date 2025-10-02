interface TechStackProps {
    technologies: string[];
    title?: string;
}

export default function TechStack({ technologies, title = "Tech Stack" }: TechStackProps) {
    return (
        <div className="my-6 p-4 bg-gray-50 rounded-lg border">
            <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="text-lg">🛠️</span>
                {title}
            </h4>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
