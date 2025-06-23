import { useState } from "react"

const experiences = [
  {
    id: "upstatement",
    company: "Upstatement",
    title: "Lead Engineer",
    period: "May 2018 - Present",
    responsibilities: [
      "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
    ],
  },
  {
    id: "apple",
    company: "Apple",
    title: "UI Engineer Co-op",
    period: "July 2017 - December 2017",
    responsibilities: [
      "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
      "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
      "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
      "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
    ],
  },
  {
    id: "scout-studio",
    company: "Scout Studio",
    title: "Developer",
    period: "January 2017 - June 2017",
    responsibilities: [
      "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern's IDEA venture accelerator",
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
    ],
  },
  {
    id: "starry",
    company: "Starry",
    title: "Software Engineer Co-op",
    period: "July 2016 - December 2016",
    responsibilities: [
      "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
      "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station",
      "Collaborated with cross-functional team of engineers, designers, and product managers to iterate on new features",
    ],
  },
  {
    id: "mullenlowe",
    company: "MullenLowe",
    title: "Creative Technologist Co-op",
    period: "July 2015 - December 2015",
    responsibilities: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
    ],
  },
]


const ExperienceSection = () => {

    const [activeExperience, setActiveExperience] = useState("upstatement")
    const currentExperience = experiences.find((exp) => exp.id === activeExperience) || experiences[0]


    return ( 
         <section id="experience" className="mt-32 md:mt-48 max-w-4xl">
          <div className="flex items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-200 whitespace-nowrap">
              <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-2">02.</span>
              Where I&apos;ve Worked
            </h2>
            <div className="ml-8 h-px bg-gray-600 flex-1 max-w-xs"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Company tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
              <div className="flex md:flex-col border-b-2 md:border-b-0 md:border-l-2 border-gray-600">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveExperience(exp.id)}
                    className={`px-4 py-3 text-left whitespace-nowrap font-mono text-sm transition-all duration-200 border-b-2 md:border-b-0 md:border-l-2 ${
                      activeExperience === exp.id
                        ? "text-emerald-400 border-emerald-400 bg-emerald-400/10"
                        : "text-gray-400 border-transparent hover:text-emerald-400 hover:bg-emerald-400/5"
                    }`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Job details */}
            <div className="flex-1 min-h-[400px]">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  {currentExperience.title} <span className="text-emerald-400">@ {currentExperience.company}</span>
                </h3>
                <p className="font-mono text-sm text-gray-400">{currentExperience.period}</p>
              </div>

              <div className="space-y-4">
                {currentExperience.responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-emerald-400 mr-3 mt-1 text-sm">▸</span>
                    <p className="text-gray-400 leading-relaxed">{responsibility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
     );
}
 
export default ExperienceSection;