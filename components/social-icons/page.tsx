import Link from "next/link";
import { SocialIconsProps } from "@/types";
import { socialLinks } from "@/data";


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
