
import { technologies } from "@/data";
import Image from "next/image";



const AboutSection = () => {
  return (
    <section id="about" className="mt-32 md:mt-48 max-w-4xl">
      {/* Section Header */}
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-200 whitespace-nowrap">
          <span className="text-emerald-400 font-mono text-xl md:text-2xl mr-2">01.</span>
          About Me
        </h2>
        <div className="ml-8 h-px bg-gray-600 flex-1 max-w-xs" />
      </div>

      {/* Section Content */}
      <div className="grid md:grid-cols-3 gap-12 items-start">
        {/* Text Section */}
        <div className="md:col-span-2 space-y-4 text-gray-400">
          <p>
            Hello! My name is <span className="text-emerald-400">Maria Maqbool</span>, and I love bringing ideas to life on the web. My journey into web development began during my academic years, where I started experimenting with HTML, CSS, and JavaScript — and quickly fell in love with building interactive user experiences.
          </p>
          <p>
            Since then, I’ve had the opportunity to work with{" "}
            <span className="text-emerald-400">startups</span>, {" "} contributing to responsive, scalable, and accessible {" "}
            <span className="text-emerald-400">front-end applications</span>.{" "} My main focus these days is building modern, user-centered digital products using technologies like{" "}
            <span className="text-emerald-400">React.js</span>, and{" "}
            <span className="text-emerald-400">Next.js</span>.

          </p>
           <p>
              I’m continuously exploring new {" "}
              <span className="text-emerald-400">tools and frameworks</span> to improve both the user experience and development process — and I’m passionate about creating clean, maintainable code and intuitive
              {" "}
              <span className="text-emerald-400">UI designs</span>.
            </p>

            <p>Here are a few technologies I&apos;ve been working with recently:</p>

          {/* Technologies List */}
          <div className="mt-6 grid grid-cols-2 gap-2 text-sm font-mono">
            {technologies.map((tech, idx) => (
              <div key={idx} className="flex items-center">
                <span className="text-emerald-400 mr-2">▸</span>
                <span className="text-emerald-400">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative group">
          <div className="relative z-10 bg-emerald-400 rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60"
              width={200}
              height={400}
              alt="Maria Maqbool"
              className="w-full h-auto mix-blend-multiply filter grayscale contrast-100 transition-all duration-300 group-hover:filter-none group-hover:mix-blend-normal"
            />
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-400 rounded -z-10 transition-all duration-300 group-hover:top-2 group-hover:left-2" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

