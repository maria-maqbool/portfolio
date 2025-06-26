import { projects } from "@/data";
import FeaturedProject from "./featured-project";


const ProjectSection = () => {
  return (
    <section id="projects">
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-200 whitespace-nowrap">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-2">03.</span>
          Some Things I've Built
        </h2>
        <div className="ml-8 h-px bg-gray-600 flex-1 max-w-xs"></div>
      </div>

      {projects.map((project, index) => (
        <FeaturedProject key={index} {...project} />
      ))}
    </section>
  );
};

export default ProjectSection;

