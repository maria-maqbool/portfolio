import Image from "next/image";
import Link from "next/link"

const AboutSection = () => {
    return ( 
         <section id="about" className="mt-32 md:mt-48 max-w-4xl">
          <div className="flex items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-200 whitespace-nowrap">
              <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-2">01.</span>
              About Me
            </h2>
            <div className="ml-8 h-px bg-gray-600 flex-1 max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="space-y-4 text-gray-400">
                <p>
                  Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web
                  development started back in 2012 when I decided to try editing custom Tumblr themes — turns out
                  hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p>
                  Fast-forward to today, and I&apos;ve had the privilege of working at{" "}
                  <span className="text-emerald-400">an advertising agency</span>,{" "}
                  <span className="text-emerald-400">a start-up</span>,{" "}
                  <span className="text-emerald-400">a huge corporation</span>, and{" "}
                  <span className="text-emerald-400">a student-led design studio</span>. My main focus these days is
                  building accessible, inclusive products and digital experiences at{" "}
                  <Link href="#" className="text-emerald-400 hover:underline">
                    Upstatement
                  </Link>{" "}
                  for a variety of clients.
                </p>
                <p>
                  I also recently{" "}
                  <Link href="#" className="text-emerald-400 hover:underline">
                    launched a course
                  </Link>{" "}
                  that covers everything you need to build a web app with the Spotify API using Node & React.
                </p>
                <p>Here are a few technologies I&apos;ve been working with recently:</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2 text-sm font-mono">
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">▸</span>
                  <span className="text-gray-400">JavaScript (ES6+)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">▸</span>
                  <span className="text-gray-400">TypeScript</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">▸</span>
                  <span className="text-gray-400">React</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">▸</span>
                  <span className="text-gray-400">Eleventy</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">▸</span>
                  <span className="text-gray-400">Node.js</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400 mr-2">▸</span>
                  <span className="text-gray-400">WordPress</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="relative">
                <div className="relative z-10 bg-emerald-400 rounded overflow-hidden">
                  {/* <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Brittany Chiang"
                    className="w-full h-auto mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
                  /> */}
                  <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                    width={200} height={400}
                    alt="Maria Maqbool"
                    className="w-full h-auto mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
              />
                </div>
                <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-400 rounded -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
              </div>
            </div>
          </div>
        </section>
     );
}
 
export default AboutSection;


// import Link from "next/link";

// type AboutSectionProps = {
//   sectionId?: string;
//   sectionNumber?: string;
//   sectionTitle?: string;
//   intro?: string;
//   paragraphs?: string[];
//   company?: { name: string; url: string };
//   course?: { text: string; url: string };
//   technologies?: string[];
//   imageUrl?: string;
//   imageAlt?: string;
// };

// const defaultProps: AboutSectionProps = {
//   sectionId: "about",
//   sectionNumber: "01.",
//   sectionTitle: "About Me",
//   intro: "Hello! My name is Brittany and I enjoy creating things that live on the internet.",
//   paragraphs: [
//     `My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!`,
//     `Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at `,
//     `I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.`,
//     `Here are a few technologies I’ve been working with recently:`,
//   ],
//   company: {
//     name: "Upstatement",
//     url: "#",
//   },
//   course: {
//     text: "launched a course",
//     url: "#",
//   },
//   technologies: [
//     "JavaScript (ES6+)",
//     "TypeScript",
//     "React",
//     "Eleventy",
//     "Node.js",
//     "WordPress",
//   ],
//   imageUrl: "/placeholder.svg?height=300&width=300",
//   imageAlt: "Brittany Chiang",
// };

// const AboutSection = ({
//   sectionId,
//   sectionNumber,
//   sectionTitle,
//   intro,
//   paragraphs = [],
//   company,
//   course,
//   technologies = [],
//   imageUrl,
//   imageAlt,
// }: AboutSectionProps) => {
//   return (
//     <section id={sectionId} className="mt-32 md:mt-48 max-w-4xl">
//       {/* Section Title */}
//       <div className="flex items-center mb-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-200 whitespace-nowrap">
//           <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-2">{sectionNumber}</span>
//           {sectionTitle}
//         </h2>
//         <div className="ml-8 h-px bg-gray-600 flex-1 max-w-xs"></div>
//       </div>

//       <div className="grid md:grid-cols-3 gap-12 items-start">
//         {/* Text Content */}
//         <div className="md:col-span-2 space-y-4 text-gray-400">
//           <p>{intro}</p>
//           <p>
//             {paragraphs[0]}
//           </p>
//           <p>
//             {paragraphs[1]}
//             {company && (
//               <Link href={company.url} className="text-emerald-400 hover:underline">
//                 {company.name}
//               </Link>
//             )}
//             .
//           </p>
//           <p>
//             I also{" "}
//             {course && (
//               <Link href={course.url} className="text-emerald-400 hover:underline">
//                 {course.text}
//               </Link>
//             )}{" "}
//             that covers everything you need to build a web app with the Spotify API using Node & React.
//           </p>
//           <p>{paragraphs[3]}</p>

//           {/* Technology List */}
//           <div className="mt-6 grid grid-cols-2 gap-2 text-sm font-mono">
//             {technologies.map((tech) => (
//               <div key={tech} className="flex items-center">
//                 <span className="text-emerald-400 mr-2">▸</span>
//                 <span className="text-gray-400">{tech}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Image */}
//         <div className="relative group">
//           <div className="relative z-10 bg-emerald-400 rounded overflow-hidden">
//             <img
//               src={imageUrl}
//               alt={imageAlt}
//               className="w-full h-auto mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
//             />
//           </div>
//           <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-400 rounded -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// AboutSection.defaultProps = defaultProps;

// export default AboutSection;
