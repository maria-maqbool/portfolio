import { HeroSectionProps } from "@/types";
import Link from "next/link";


const HeroSection = ({
  name = "Maria Maqbool.",
  role = "I turn ideas into products.",
  description = `I'm a front-end developer focused on building responsive, accessible, and user-friendly web interfaces. Currently, I'm focused on creating high-quality, performance-driven products that prioritize`,
  highlightedText = { first: "UX", second: "Visual Design" },
  ctaText = "Check out my Resume!",
  ctaLink = "/resume.pdf",
}: HeroSectionProps) => {
  return (
    <main className="mt-24 md:mt-32">
      <div className="max-w-3xl">
        <p className="text-emerald-400 font-mono mb-5">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-200 mb-4">{name}</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">{role}</h2>
        <p className="text-gray-400 max-w-lg mb-12">
          {description} {" "}
          <Link href="#" className="text-emerald-400 hover:underline">
            {highlightedText.first}
          </Link> {" "} and{" "}
          <Link href="#" className="text-emerald-400 hover:underline">
            {highlightedText.second}
          </Link>.

        </p>
        <Link
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-mono text-emerald-400 border border-emerald-400 px-6 py-4 rounded hover:bg-emerald-400/10 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </main>
  );
}

export default HeroSection;