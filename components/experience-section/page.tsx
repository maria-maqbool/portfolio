import { experiences } from "@/data";
import { useState } from "react"


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