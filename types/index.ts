import { LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  index: string;
};

export type HeaderProps = {
  logoLetter?: string;
  resumeLink?: string;
};

export type Project = {
  title: string;
  description: string | string[];
  imageUrl: string;
  imageAlt: string;
  techStack: string[];
  links: {
    github?: string;
    external?: string;
    live?: string;
  };
  direction?: "left" | "right";
};

export type SocialLink = {
  href: string;
  Icon: LucideIcon;
  label: string;
};

export type SocialIconsProps = {
  iconSize?: number;
  positionClasses?: string;
  direction?: "vertical" | "horizontal";
};

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string | null;
  external?: string;
}

export type HeroSectionProps = {
  name?: string;
  role?: string;
  description?: string;
  highlightedText?: {
    first: string;
    second: string;
  };
  ctaText?: string;
  ctaLink?: string;
};