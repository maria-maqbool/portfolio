"use client";

import { useState } from "react";
import ProjectCard from "./project-card";


const allProjects = [
  {
    title: "Integrating Algolia Search with WordPress Multisite",
    description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
    tech: ["Algolia", "WordPress", "PHP"],
    github: "#",
    external: "#",
  },
  {
    title: "Time to Have More Fun",
    description:
      "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    github: "#",
    external: "#",
  },
  {
    title: "Building a Headless Mobile App CMS From Scratch",
    description:
      "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
    tech: ["Node", "Express", "Firebase", "Vue"],
    github: null,
    external: "#",
  },
  {
    title: "OctoProfile",
    description:
      "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and recent activity.",
    tech: ["Next.js", "Chart.js", "GitHub API"],
    github: "#",
    external: "#",
  },
  {
    title: "Google Keep Clone",
    description:
      "A simple Google Keep clone built with React and Firebase. Features include creating, editing, deleting, and searching notes.",
    tech: ["React", "Firebase", "Styled Components"],
    github: "#",
    external: "#",
  },
  {
    title: "Apple Music Embeddable Web Player Widget",
    description:
      "Embeddable web player widget for Apple Music that lets users log in and listen to full songs in the browser.",
    tech: ["Ember.js", "Apple Music API", "MusicKit.js"],
    github: null,
    external: "#",
    highlighted: true,
  },
  // Additional projects for "Show More"
  {
    title: "React Profile",
    description:
      "A simple GitHub user lookup powered by the GitHub API to fetch profile data and display it in a clean, responsive interface.",
    tech: ["React", "GitHub API", "Styled Components"],
    github: "#",
    external: "#",
  },
  {
    title: "Weather App",
    description: "A simple weather app built with vanilla JavaScript that fetches data from the OpenWeatherMap API.",
    tech: ["JavaScript", "CSS", "OpenWeather API"],
    github: "#",
    external: "#",
  },
  {
    title: "Forkify Recipe App",
    description:
      "A recipe search app built with vanilla JavaScript. Search for recipes, bookmark favorites, and create your own recipes.",
    tech: ["JavaScript", "Webpack", "Babel"],
    github: "#",
    external: "#",
  },
  {
    title: "Personal Website v2",
    description: "Second iteration of my personal website. Built with Jekyll and hosted on GitHub Pages.",
    tech: ["Jekyll", "Sass", "JavaScript"],
    github: "#",
    external: "#",
  },
  {
    title: "Course Source",
    description: "A web app for viewing and managing course information. Built with AngularJS and Firebase.",
    tech: ["AngularJS", "Firebase", "Gulp"],
    github: "#",
    external: "#",
  },
  {
    title: "Personal Website v1",
    description: "My first portfolio website I built with HTML, CSS, and jQuery. It was a great learning experience.",
    tech: ["HTML", "CSS", "jQuery"],
    github: "#",
    external: "#",
  },
]


const ProjectsCardsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section className="mt-20">
      <h3 className="text-2xl font-bold text-gray-200 mb-4 text-center">Other Noteworthy Projects</h3>
      <div className="text-center mb-12">
        <a href="/archive" className="font-mono text-emerald-400 hover:underline text-sm">
          view the archive
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsToShow.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="font-mono text-emerald-400 border border-emerald-400 px-6 py-3 rounded hover:bg-emerald-400/10 transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default ProjectsCardsSection;





// import Link from "next/link"
// import { Github } from "lucide-react"
// import { useState } from "react"


// const allProjects = [
//   {
//     title: "Integrating Algolia Search with WordPress Multisite",
//     description: "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
//     tech: ["Algolia", "WordPress", "PHP"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Time to Have More Fun",
//     description:
//       "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
//     tech: ["Next.js", "Tailwind CSS", "Firebase"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Building a Headless Mobile App CMS From Scratch",
//     description:
//       "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
//     tech: ["Node", "Express", "Firebase", "Vue"],
//     github: null,
//     external: "#",
//   },
//   {
//     title: "OctoProfile",
//     description:
//       "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and recent activity.",
//     tech: ["Next.js", "Chart.js", "GitHub API"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Google Keep Clone",
//     description:
//       "A simple Google Keep clone built with React and Firebase. Features include creating, editing, deleting, and searching notes.",
//     tech: ["React", "Firebase", "Styled Components"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Apple Music Embeddable Web Player Widget",
//     description:
//       "Embeddable web player widget for Apple Music that lets users log in and listen to full songs in the browser.",
//     tech: ["Ember.js", "Apple Music API", "MusicKit.js"],
//     github: null,
//     external: "#",
//     highlighted: true,
//   },
//   // Additional projects for "Show More"
//   {
//     title: "React Profile",
//     description:
//       "A simple GitHub user lookup powered by the GitHub API to fetch profile data and display it in a clean, responsive interface.",
//     tech: ["React", "GitHub API", "Styled Components"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Weather App",
//     description: "A simple weather app built with vanilla JavaScript that fetches data from the OpenWeatherMap API.",
//     tech: ["JavaScript", "CSS", "OpenWeather API"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Forkify Recipe App",
//     description:
//       "A recipe search app built with vanilla JavaScript. Search for recipes, bookmark favorites, and create your own recipes.",
//     tech: ["JavaScript", "Webpack", "Babel"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Personal Website v2",
//     description: "Second iteration of my personal website. Built with Jekyll and hosted on GitHub Pages.",
//     tech: ["Jekyll", "Sass", "JavaScript"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Course Source",
//     description: "A web app for viewing and managing course information. Built with AngularJS and Firebase.",
//     tech: ["AngularJS", "Firebase", "Gulp"],
//     github: "#",
//     external: "#",
//   },
//   {
//     title: "Personal Website v1",
//     description: "My first portfolio website I built with HTML, CSS, and jQuery. It was a great learning experience.",
//     tech: ["HTML", "CSS", "jQuery"],
//     github: "#",
//     external: "#",
//   },
// ]


// const ProjectsCardsSection = () => {

//   const [showAllProjects, setShowAllProjects] = useState(false)
//   const visibleProjects = showAllProjects ? allProjects : allProjects.slice(0, 6)


//     return ( 
//         <>
//          {/* Other Notable Projects */}
//           <div className="mt-20">
//             <h3 className="text-2xl font-bold text-gray-200 mb-4 text-center">Other Noteworthy Projects</h3>
//             <div className="text-center mb-12">
//               <Link href="/archive" className="font-mono text-emerald-400 hover:underline text-sm">
//                 view the archive
//               </Link>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {visibleProjects.map((project, index) => (
//                 <div
//                   key={index}
//                   className={`bg-[#112240] p-6 rounded shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300 group ${
//                     project.highlighted ? "border-2 border-dashed border-emerald-400" : ""
//                   }`}
//                 >
//                   <div className="flex justify-between items-start mb-4">
//                     <div className="text-emerald-400">
//                       <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                         <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
//                       </svg>
//                     </div>
//                     <div className="flex gap-3">
//                       {project.github && (
//                         <Link href={project.github} className="text-gray-400 hover:text-emerald-400 transition-colors">
//                           <Github size={18} />
//                         </Link>
//                       )}
//                       {project.external && (
//                         <Link
//                           href={project.external}
//                           className="text-gray-400 hover:text-emerald-400 transition-colors"
//                         >
//                           <svg
//                             width="18"
//                             height="18"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                             <polyline points="15,3 21,3 21,9" />
//                             <line x1="10" y1="14" x2="21" y2="3" />
//                           </svg>
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                   <h4
//                     className={`text-xl font-semibold mb-3 group-hover:text-emerald-400 transition-colors ${
//                       project.highlighted ? "text-emerald-400" : "text-gray-200"
//                     }`}
//                   >
//                     {project.title}
//                   </h4>
//                   <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
//                   <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-400">
//                     {project.tech.map((tech, techIndex) => (
//                       <span key={techIndex}>{tech}</span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Show More / Show Less Button */}
//             <div className="text-center mt-12">
//               <button
//                 onClick={() => setShowAllProjects(!showAllProjects)}
//                 className="font-mono text-emerald-400 border border-emerald-400 px-6 py-3 rounded hover:bg-emerald-400/10 transition-colors"
//               >
//                 {showAllProjects ? "Show Less" : "Show More"}
//               </button>
//             </div>
//           </div>
//         </>
//      );
// }
 
// export default ProjectsCardsSection;