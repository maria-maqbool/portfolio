import { NavItem, SocialLink } from "@/types";
import { Github, Linkedin, Box,  } from "lucide-react";

export const navItems: NavItem[] = [
  { href: "#about", label: "About", index: "01." },
  { href: "#experience", label: "Experience", index: "02." },
  { href: "#work", label: "Work", index: "03." },
  { href: "#contact", label: "Contact", index: "04." },
];

export const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Ant Design",
  "Shadcn",
  "Material UI",
  "Bootstrap",
  "Tailwind CSS",
  "RESTful APIs",
  "GraphQL",
  "Prisma",
  "Postman",
  "VS Code",
  "PyCharm",
  "GitHub",
];

export const experiences = [
  {
    id: "crexed",
    company: "Crexed",
    title: "Frontend Developer",
    period: "April 2024 - Jan 2025",
    responsibilities: [
      " Deliver clean, responsive, and maintainable front-end code for a variety of web projects using technologies like React.js, Next.js, and TypeScript",
      "Collaborate closely with UI/UX designers and project managers to implement intuitive user interfaces and meet project goals. Translate design concepts into functional, accessible components using frameworks such as Tailwind CSS, Ant Design, and Material UI",
      "Participate in code reviews, team discussions, and knowledge sharing sessions to contribute to team growth and maintain code quality. Integration of front-end applications with APIs and backend services, ensuring smooth data flow and performance",
      "Work on live production websites including Iconix Medical, For All Doctors and others, enhancing user experience and performance"
    ],
  },
]

export const allProjects = [
  {
    title: "ProStore – E-Commerce Platform",
    description: "A fully responsive and user-friendly online store for fashion products. The platform includes dynamic product listings, filters, shopping cart functionality, discount pricing, and user authentication. Integrated with payment gateways and admin dashboard for product management.",
    tech: ["Next.js", "Prisma", "TS", "Tailwind CSS", "Zod"],
    github: "https://github.com/",
    external: "#",
  },
  {
    title: "ForAllDoctors – Professional Platform",
    description: "ForAllDoctors is a secure and exclusive online directory and social networking platform designed for medical, legal, and PhD professionals worldwide. The platform allows users to connect, communicate, and grow professionally in a trusted and verified community.",
    tech: ["Next.js", "Next Auth", "TypeScript", "Ant D"],
    github: "https://github.com/",
    external: "#",
  },
  {
    title: "Portfolio - My Personal Portfolio Website",
    description: "A fully responsive and modern portfolio website to showcase my projects, skills, and experience as a Front-End Developer. Built with a focus on performance, clean UI/UX, and accessibility. It features sections for project showcases, about me, resume download, and contact form.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/",
    external: "#",
  },
]


export const projects = [
  {
    title: "Iconix Medical",
    description: `Iconix Medical is a streamlined healthcare platform specializing in Men's Testosterone Replacement Therapy (TRT). The project includes a modern, user-friendly website and patient portal designed to simplify the TRT journey from education to treatment.`,
    imageUrl: "/images/IconixMedical.png",
    imageAlt: "Iconix Medical",
    techStack: ["TypeScript", "Next.js", "AntD", "Tailwind-CSS", "GraphQL", "Prisma" ],
    links: {
      github: "https://github.com/",
      live: "#",
    },
    direction: "right",
  },
  {
    title: "The Style – Online Fashion Store",
    description: `The Style is a modern, responsive eCommerce website designed for a seamless online shopping experience. It features a clean and intuitive user interface that allows users to browse and purchase fashion items. This project demonstrates proficiency in front-end development, user interface design, and eCommerce layout structuring.`,
    imageUrl: "/images/TheStyle.png",
    imageAlt: "The Style",
    techStack: ["React", "Styled Components", "Ant Design", "Tailwind CSS"],
    links: {
      github: "https://github.com/",
      live: "#",
    },
    direction: "left",
  },
  {
    title: "Forest Fire Prediction and Detection System",
    description: [
      `An AI-based web application that predicts and detects forest fires using real-time data, along with camera-based visual monitoring.`,
      `The system uses ML and Deep Learning to assess fire risk and provides early warnings.`,
    ],
    imageUrl: "/images/ForestFireSystem.png",
    imageAlt: "Forest Fire Prediction and Detection System",
    techStack: ["Python", "Flask", "ML", "DeepLearning", "VS-Code", "PyCharm" ],
    links: {
      external: "#",
    },
    direction: "right",
  },
];

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/maria-maqbool", Icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/maria-maqbool-258085223", Icon: Linkedin, label: "LinkedIn" },
  { href: "#", Icon: Box, label: "Portfolio" }, // Replace `#` with actual URL
];