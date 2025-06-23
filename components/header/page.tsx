// import Link from "next/link"


// const Header = () => {
//     return ( 
//         <header className="flex justify-between items-center py-6">
//           <div className="flex items-center justify-center h-12 w-12 border-2 border-emerald-400 text-emerald-400 rounded-md">
//             <span className="text-2xl font-bold">B</span>
//           </div>
//           <nav className="hidden md:flex items-center gap-8">
//             <Link href="#about" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
//               <span className="text-emerald-400 font-mono">01.</span> About
//             </Link>
//             <Link href="#experience" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
//               <span className="text-emerald-400 font-mono">02.</span> Experience
//             </Link>
//             <Link href="#work" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
//               <span className="text-emerald-400 font-mono">03.</span> Work
//             </Link>
//             <Link href="#contact" className="text-sm text-gray-300 hover:text-emerald-400 transition-colors">
//               <span className="text-emerald-400 font-mono">04.</span> Contact
//             </Link>
//             <Link
//               href="/resume"
//               className="text-sm text-emerald-400 border border-emerald-400 px-4 py-2 rounded hover:bg-emerald-400/10 transition-colors"
//             >
//               Resume
//             </Link>
//           </nav>
//         </header>
//      );
// }
 
// export default Header;

import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
  index: string;
};

const navItems: NavItem[] = [
  { href: "#about", label: "About", index: "01." },
  { href: "#experience", label: "Experience", index: "02." },
  { href: "#work", label: "Work", index: "03." },
  { href: "#contact", label: "Contact", index: "04." },
];

type HeaderProps = {
  logoLetter?: string;
  resumeLink?: string;
};

const Header = ({ logoLetter = "B", resumeLink = "/resume" }: HeaderProps) => {
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
          className="text-sm text-emerald-400 border border-emerald-400 px-4 py-2 rounded hover:bg-emerald-400/10 transition-colors"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Header;

