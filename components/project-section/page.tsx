import FeaturedProject from "./featured-project";



const projects = [
  {
    title: "Halcyon Theme",
    description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
    // imageUrl: "/images/halcyon-theme.png",
    imageUrl: "https://t4.ftcdn.net/jpg/03/00/81/73/360_F_300817340_XgeBeZZdwZVUhPownI7xCrlu78IxsBkF.jpg",
    imageAlt: "Halcyon Theme",
    techStack: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    links: {
      github: "#",
      live: "#",
    },
    direction: "right",
  },
  {
    title: "Spotify Profile",
    description: `A web app for visualizing personalized Spotify data. View your top artists, tracks, recently played, and detailed audio stats. Create playlists from recommendations.`,
    // imageUrl: "/images/spotify-profile.png",
    imageUrl: "https://market-resized.envatousercontent.com/previews/files/634527604/preview/preview_00.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=2a8b6fcbb4db54d96ead144eb688245483ec6314ca557693826e0f3c40f56ef6",
    imageAlt: "Spotify Profile",
    techStack: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
    links: {
      github: "#",
      live: "#",
    },
    direction: "left",
  },
  {
    title: "Build a Spotify Connected App",
    description: [
      `Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.`,
      `This course covers everything from REST APIs to implementing Spotify's OAuth and fetching data in a React app. You’ll deploy a complete app by the end.`,
    ],
    // imageUrl: "/images/spotify-course.png",
    imageUrl: "https://www.entheosweb.com/wp-content/uploads/2024/01/flex-IT-Home-1-2.jpg",
    imageAlt: "Spotify Connected App Course",
    techStack: ["React", "Express", "Spotify API", "Styled Components"],
    links: {
      external: "#",
    },
    direction: "right",
  },
];

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





// import Link from "next/link"
// import { Github } from "lucide-react"

// const ProjectSection = () => {
//     return (
//         <>

//             <div className="flex items-center mb-12">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-200 whitespace-nowrap">
//                     <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-2">03.</span>
//                     Some Things I&apos;ve Built
//                 </h2>
//                 <div className="ml-8 h-px bg-gray-600 flex-1 max-w-xs"></div>
//             </div>

//             {/* Featured Project */}
//             <div className="relative mb-20">
//                 <div className="grid md:grid-cols-12 gap-4 items-center">
//                     {/* Project Image */}
//                     <div className="md:col-span-7 relative group">
//                         <div className="relative">
//                             <Link href="#" className="block">
//                                 <div className="relative overflow-hidden rounded bg-emerald-400/20">
//                                     <img
//                                         src="/images/halcyon-theme.png"
//                                         alt="Halcyon Theme"
//                                         className="w-full h-auto filter grayscale contrast-100 mix-blend-multiply transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
//                                     />
//                                     <div className="absolute inset-0 bg-emerald-400/20 mix-blend-multiply transition-all duration-300 group-hover:bg-transparent"></div>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Project Info */}
//                     <div className="md:col-span-5 relative">
//                         <div className="md:text-right">
//                             <p className="font-mono text-emerald-400 text-sm mb-2">Featured Project</p>
//                             <h3 className="text-2xl font-bold text-gray-200 mb-4">
//                                 <Link href="#" className="hover:text-emerald-400 transition-colors">
//                                     Halcyon Theme
//                                 </Link>
//                             </h3>

//                             <div className="bg-[#112240] p-6 rounded shadow-lg mb-4 md:ml-8">
//                                 <p className="text-gray-400 leading-relaxed">
//                                     A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on{" "}
//                                     <Link href="#" className="text-emerald-400 hover:underline">
//                                         Visual Studio Marketplace
//                                     </Link>
//                                     ,{" "}
//                                     <Link href="#" className="text-emerald-400 hover:underline">
//                                         Package Control
//                                     </Link>
//                                     ,{" "}
//                                     <Link href="#" className="text-emerald-400 hover:underline">
//                                         Atom Package Manager
//                                     </Link>
//                                     , and{" "}
//                                     <Link href="#" className="text-emerald-400 hover:underline">
//                                         npm
//                                     </Link>
//                                     .
//                                 </p>
//                             </div>

//                             <div className="flex flex-wrap gap-3 mb-4 md:justify-end font-mono text-sm text-gray-400">
//                                 <span>VS Code</span>
//                                 <span>Sublime Text</span>
//                                 <span>Atom</span>
//                                 <span>iTerm2</span>
//                                 <span>Hyper</span>
//                             </div>

//                             <div className="flex gap-4 md:justify-end">
//                                 <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                                     <Github size={20} />
//                                 </Link>
//                                 <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                                     <svg
//                                         width="20"
//                                         height="20"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     >
//                                         <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                                         <polyline points="15,3 21,3 21,9" />
//                                         <line x1="10" y1="14" x2="21" y2="3" />
//                                     </svg>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             {/* Featured Project 2 - Spotify Profile */}
//           <div className="relative mb-20">
//             <div className="grid md:grid-cols-12 gap-4 items-center">
//               {/* Project Info */}
//               <div className="md:col-span-5 relative">
//                 <div className="md:text-left">
//                   <p className="font-mono text-emerald-400 text-sm mb-2">Featured Project</p>
//                   <h3 className="text-2xl font-bold text-gray-200 mb-4">
//                     <Link href="#" className="hover:text-emerald-400 transition-colors">
//                       Spotify Profile
//                     </Link>
//                   </h3>

//                   <div className="bg-[#112240] p-6 rounded shadow-lg mb-4 md:mr-8">
//                     <p className="text-gray-400 leading-relaxed">
//                       A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently
//                       played tracks, and detailed audio information about each track. Create and save new playlists of
//                       recommended tracks based on your existing playlists and more.
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-3 mb-4 md:justify-start font-mono text-sm text-gray-400">
//                     <span>React</span>
//                     <span>Styled Components</span>
//                     <span>Express</span>
//                     <span>Spotify API</span>
//                     <span>Heroku</span>
//                   </div>

//                   <div className="flex gap-4 md:justify-start">
//                     <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                       <Github size={20} />
//                     </Link>
//                     <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
//                         <polyline points="15,3 21,3 21,9" />
//                         <line x1="10" y1="14" x2="21" y2="3" />
//                       </svg>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* Project Image */}
//               <div className="md:col-span-7 relative group">
//                 <div className="relative">
//                   <Link href="#" className="block">
//                     <div className="relative overflow-hidden rounded bg-emerald-400/20">
//                       <img
//                         src="/images/spotify-profile.png"
//                         alt="Spotify Profile"
//                         className="w-full h-auto filter grayscale contrast-100 mix-blend-multiply transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
//                       />
//                       <div className="absolute inset-0 bg-emerald-400/20 mix-blend-multiply transition-all duration-300 group-hover:bg-transparent"></div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//            {/* Featured Project 3 - Spotify Course */}
//           <div className="relative mb-20">
//             <div className="grid md:grid-cols-12 gap-4 items-center">
//               {/* Project Image */}
//               <div className="md:col-span-7 relative group">
//                 <div className="relative">
//                   <Link href="#" className="block">
//                     <div className="relative overflow-hidden rounded bg-emerald-400/20">
//                       <img
//                         src="/images/spotify-course.png"
//                         alt="Build a Spotify Connected App Course"
//                         className="w-full h-auto filter grayscale contrast-100 mix-blend-multiply transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
//                       />
//                       <div className="absolute inset-0 bg-emerald-400/20 mix-blend-multiply transition-all duration-300 group-hover:bg-transparent"></div>
//                     </div>
//                   </Link>
//                 </div>
//               </div>

//               {/* Project Info */}
//               <div className="md:col-span-5 relative">
//                 <div className="md:text-right">
//                   <p className="font-mono text-emerald-400 text-sm mb-2">Featured Project</p>
//                   <h3 className="text-2xl font-bold text-gray-200 mb-4">
//                     <Link href="#" className="hover:text-emerald-400 transition-colors">
//                       Build a Spotify Connected App
//                     </Link>
//                   </h3>

//                   <div className="bg-[#112240] p-6 rounded shadow-lg mb-4 md:ml-8">
//                     <p className="text-gray-400 leading-relaxed">
//                       Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I
//                       could have had.
//                     </p>
//                     <p className="text-gray-400 leading-relaxed mt-4">
//                       Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories,
//                       this course covers everything from explaining the principles of REST APIs to implementing
//                       Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you'll have
//                       an app deployed to the internet you can add to your portfolio.
//                     </p>
//                   </div>

//                   <div className="flex flex-wrap gap-3 mb-4 md:justify-end font-mono text-sm text-gray-400">
//                     <span>React</span>
//                     <span>Express</span>
//                     <span>Spotify API</span>
//                     <span>Styled Components</span>
//                   </div>

//                   <div className="flex gap-4 md:justify-end">
//                     <Link
//                       href="#"
//                       className="inline-block font-mono text-emerald-400 border border-emerald-400 px-4 py-2 rounded hover:bg-emerald-400/10 transition-colors text-sm"
//                     >
//                       Learn More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//     );
// }

// export default ProjectSection;