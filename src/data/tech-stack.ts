import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiShadcnui, SiJest } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import type { IconType } from "react-icons";

export interface TechStackItem {
  icon: IconType;
  name: string;
  className: string;
}

export const techStack: TechStackItem[] = [
  { icon: FaHtml5, name: "HTML5", className: "text-orange-600" },
  { icon: FaCss3Alt, name: "CSS3", className: "text-[#1572B6]" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS", className: "text-[#38BDF8]" },
  { icon: IoLogoJavascript, name: "JavaScript", className: "text-[#F7DF1E]" },
  { icon: SiTypescript, name: "TypeScript", className: "text-[#3178C6]" },
  { icon: FaReact, name: "React", className: "text-[#61DAFB]" },
  { icon: RiNextjsFill, name: "Next.js", className: "text-gray-900" },
  { icon: SiShadcnui, name: "Shadcn", className: "text-gray-700" },
  { icon: SiJest, name: "Jest", className: "text-[#C21325]" },
  { icon: TbBrandVite, name: "Vite", className: "text-[#646CFF]" },
  { icon: FaGithub, name: "GitHub", className: "text-gray-900" },
  { icon: BiLogoVisualStudio, name: "VS Code", className: "text-blue-600" },
];
