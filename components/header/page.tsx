import { navItems } from "@/data";
import { HeaderProps } from "@/types";
import Link from "next/link";


const Header = ({ logoLetter = "M", resumeLink = "/resume.pdf" }: HeaderProps) => {
  return (
    <header className="flex justify-between items-center py-6">
      <div className="flex items-center justify-center h-12 w-12 border-2 border-emerald-400 text-emerald-400 rounded-md">
        <span className="text-2xl font-bold">{logoLetter}</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map(({ href, label, index }) => (
          <Link
            key={href}
            href={href}
            className="text-sm text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <span className="text-emerald-400 font-mono">{index}</span> {label}
          </Link>
        ))}

        <Link
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-emerald-400 border border-emerald-400 px-4 py-2 rounded hover:bg-emerald-400/10 transition-colors"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Header;

