import Link from "next/link";

const HeroSection = () => {
    return ( 
         <main className="mt-24 md:mt-32">
          <div className="max-w-3xl">
            <p className="text-emerald-400 font-mono mb-5">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-200 mb-4">Maria Maqbool.</h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">I build things for the web.</h2>
            <p className="text-gray-400 max-w-lg mb-12">
              I&apos;m a software engineer specializing in building (and occasionally designing) exceptional digital
              experiences. Currently, I&apos;m focused on building accessible, human-centered products at{" "}
              <Link href="#" className="text-emerald-400 hover:underline">
                Upstatement
              </Link>
              .
            </p>
            <Link
              href="#course"
              className="inline-block font-mono text-emerald-400 border border-emerald-400 px-6 py-4 rounded hover:bg-emerald-400/10 transition-colors"
            >
              Check out my Resume!
            </Link>
          </div>
        </main>
     );
}
 
export default HeroSection;


// import Link from "next/link";

// type HeroSectionProps = {
//   name?: string;
//   role?: string;
//   description?: string;
//   company?: {
//     name: string;
//     url: string;
//   };
//   ctaText?: string;
//   ctaLink?: string;
// };

// const HeroSection = ({
//   name = "Brittany Chiang",
//   role = "I build things for the web.",
//   description = `I'm a software engineer specializing in building (and occasionally designing) exceptional digital
//   experiences. Currently, I'm focused on building accessible, human-centered products at`,
//   company = { name: "Upstatement", url: "#" },
//   ctaText = "Check out my course!",
//   ctaLink = "#course",
// }: HeroSectionProps) => {
//   return (
//     <section className="mt-24 md:mt-32">
//       <div className="max-w-3xl">
//         <p className="text-emerald-400 font-mono mb-5">Hi, my name is</p>

//         <h1 className="text-5xl md:text-7xl font-bold text-gray-200 mb-4">{name}.</h1>

//         <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">{role}</h2>

//         <p className="text-gray-400 max-w-lg mb-12">
//           {description}{" "}
//           <Link href={company.url} className="text-emerald-400 hover:underline">
//             {company.name}
//           </Link>
//           .
//         </p>

//         <Link
//           href={ctaLink}
//           className="inline-block font-mono text-emerald-400 border border-emerald-400 px-6 py-4 rounded hover:bg-emerald-400/10 transition-colors"
//         >
//           {ctaText}
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
