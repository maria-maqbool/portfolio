import Link from "next/link";
import { Github } from "lucide-react";
import { Project } from "@/types";
import Image from "next/image";


const FeaturedProject = ({
  title,
  description,
  imageUrl,
  imageAlt,
  techStack,
  links,
  direction = "right"
}: Project) => {
  const isRight = direction === "right";

  return (
    <div className="relative mb-20">
      <div className={`grid md:grid-cols-12 gap-4 items-center`}>
        {/* Image */}
        <div className={`md:col-span-7 relative group ${isRight ? "order-1" : "order-2 md:order-2"}`}>
          <Link href={links.external || "#"} className="block">
            <div className="relative overflow-hidden rounded bg-emerald-400/20">
              <Image src={imageUrl} alt={imageAlt} width={1000} height={1000} className="w-full h-auto filter grayscale contrast-100 mix-blend-multiply transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal" />
              <div className="absolute inset-0 bg-emerald-400/20 mix-blend-multiply transition-all duration-300 group-hover:bg-transparent"></div>
            </div>
          </Link>
        </div>

        {/* Content */}
        <div className={`md:col-span-5 relative ${isRight ? "md:text-right order-2" : "order-1 md:order-1"}`}>
          <p className="font-mono text-emerald-400 text-sm mb-2">Featured Project</p>
          <h3 className="text-2xl font-bold text-gray-200 mb-4">
            <Link href={links.external || "#"} className="hover:text-emerald-400 transition-colors">
              {title}
            </Link>
          </h3>

          <div className={`bg-[#112240] p-6 rounded shadow-lg mb-4 ${isRight ? "md:ml-8" : "md:mr-8"}`}>
            {Array.isArray(description) ? (
              description.map((text, i) => (
                <p key={i} className={`text-gray-400 leading-relaxed ${i > 0 ? "mt-4" : ""}`}>
                  {text}
                </p>
              ))
            ) : (
              <p className="text-gray-400 leading-relaxed">{description}</p>
            )}
          </div>

          <div className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-gray-400 ${isRight ? "md:justify-end" : "md:justify-start"}`}>
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className={`flex gap-4 ${isRight ? "md:justify-end" : "md:justify-start"}`}>
            {links.github && (
              <Link href={links.github} className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </Link>
            )}
            {links.live && (
              <Link href={links.live} className="text-gray-400 hover:text-emerald-400 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </Link>
            )}
            {links.external && !links.live && (
              <Link
                href={links.external}
                className="inline-block font-mono text-emerald-400 border border-emerald-400 px-4 py-2 rounded hover:bg-emerald-400/10 transition-colors text-sm"
              >
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;