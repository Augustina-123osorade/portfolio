import spaceSite from "../assets/images/space-site.png";
import shakoMako from '../assets/images/shakomako.png';
import mediSync from '../assets/images/medi-sync.png';
import todoApp from '../assets/images/todo-app.png';

export interface ProjectDetails {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveLink: string;
    featured?: boolean;

}
export const projects: ProjectDetails[]=[
    {
        id:1,
        title:"An E-commerce Restaurant Website",
        description:"A fully responsive e-commerce site for a restaurant — letting customers browse the menu, order, and pay online, with an admin panel for managing dishes and orders.",
        image:shakoMako,
        technologies:["React","TypeScript","Tailwind CSS","Shadcn","Next.js", "firebase"],
        liveLink:"https://shako-resto.vercel.app/",
        featured: true

    },
    {
        id:2,
        title:"SpaceSite",
        description:"A visually rich content site covering space exploration — news, articles, and multimedia built for easy browsing and space enthusiasts.",
        image:spaceSite,
        technologies:["React","TypeScript","Tailwind CSS","Shadcn","Vite", "tansack router"],
        liveLink:"https://space-site-tau.vercel.app/"

    },
    {
        id:3,
        title:"MediSync",
        description:"A healthcare platform that syncs medical records and connects patients with providers — secure record access, appointment scheduling, and messaging in one place.",
        image:mediSync,
        technologies:["React","JavaScript","Tailwind CSS","Shadcn","Vite", "tansack router"],
        liveLink:"https://medisync-puce.vercel.app/auth",
        featured: true

    },
    {
        id:4,
        title:"ToDo App",
        description:"A clean, intuitive task manager for creating, editing, and completing to-dos — built to learn Jotai state management and Jest testing.",
        image:todoApp,
        technologies:["React","TypeScript","Tailwind CSS","Shadcn","Next.js", "Jotai","Jest"],
        liveLink:"https://jotai-todo-ten.vercel.app/"

    },
]