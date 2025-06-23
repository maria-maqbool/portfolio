import Link from "next/link";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string | null;
  external?: string;
  highlighted?: boolean;
}

const ProjectCard = ({ title, description, tech, github, external, highlighted }: ProjectCardProps) => {
  return (
    <div
      className={`bg-[#112240] p-6 rounded shadow-lg transition-transform duration-300 group hover:-translate-y-1 ${
        highlighted ? "border-2 border-dashed border-emerald-400" : ""
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="text-emerald-400">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="flex gap-3">
          {github && (
            <Link href={github} className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={18} />
            </Link>
          )}
          {external && (
            <Link href={external} className="text-gray-400 hover:text-emerald-400 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      <h4
        className={`text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors ${
          highlighted ? "text-emerald-400" : "text-gray-200"
        }`}
      >
        {title}
      </h4>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-400">
        {tech.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
