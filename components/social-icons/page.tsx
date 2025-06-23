// import Link from "next/link"

// import { Github, Instagram, Twitter, Linkedin, Box } from "lucide-react"


// const SocialIcons = () => {
//     return ( 
//         <div className="fixed bottom-0 left-8 hidden md:flex flex-col items-center gap-6">
//         <Link href="https://github.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
//           <Github size={20} />
//         </Link>
//         <Link href="https://instagram.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
//           <Instagram size={20} />
//         </Link>
//         <Link href="https://twitter.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
//           <Twitter size={20} />
//         </Link>
//         <Link href="https://linkedin.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
//           <Linkedin size={20} />
//         </Link>
//         <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
//           <Box size={20} />
//         </Link>
//         <div className="h-24 w-px bg-gray-400 mt-4"></div>
//       </div>
//      );
// }
 
// export default SocialIcons;

import Link from "next/link";
import { Github, Instagram, Twitter, Linkedin, Box, LucideIcon } from "lucide-react";

type SocialLink = {
  href: string;
  Icon: LucideIcon;
  label: string;
};

const socialLinks: SocialLink[] = [
  { href: "https://github.com", Icon: Github, label: "GitHub" },
  { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
  { href: "#", Icon: Box, label: "Portfolio" }, // Replace `#` with actual URL
];

type SocialIconsProps = {
  iconSize?: number;
  positionClasses?: string;
  direction?: "vertical" | "horizontal";
};

const SocialIcons = ({
  iconSize = 20,
  positionClasses = "fixed bottom-0 left-8 hidden md:flex",
  direction = "vertical",
}: SocialIconsProps) => {
  const isVertical = direction === "vertical";

  return (
    <div
      className={`${positionClasses} ${isVertical ? "flex-col items-center" : "flex-row"} gap-6`}
    >
      {socialLinks.map(({ href, Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-400 hover:text-emerald-400 transition-colors"
        >
          <Icon size={iconSize} />
        </Link>
      ))}

      {isVertical && <div className="h-24 w-px bg-gray-400 mt-4" />}
    </div>
  );
};

export default SocialIcons;
