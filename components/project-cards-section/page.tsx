"use client";
import { useState } from "react";
import ProjectCard from "./project-card";
import { allProjects } from "@/data";
 

const ProjectsCardsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section className="mt-20">
      <h3 className="text-2xl font-bold text-gray-200 text-center  mb-12">Other Noteworthy Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsToShow.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsCardsSection;