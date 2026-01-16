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
        description:"A fully responsive e-commerce website built for a restaurant. The website features a user-friendly interface, allowing customers to browse the menu, place orders, and make payments online. It also has an admin panel for uploading available dishes and managing orders.",
        image:shakoMako,
        technologies:["React","TypeScript","Tailwind CSS","Shadcn","Next.js", "firebase"],
        liveLink:"https://shako-resto.vercel.app/",
        featured: true

    },
    {
        id:2,
        title:"SpaceSite",
        description:"A responsive website that provides information about space exploration, including news, articles, and multimedia content. The website is designed to be visually appealing and easy to navigate, with a focus on delivering high-quality content to space enthusiasts.",
        image:spaceSite,
        technologies:["React","TypeScript","Tailwind CSS","Shadcn","Vite", "tansack router"],
        liveLink:"https://space-site-tau.vercel.app/"

    },
    {
        id:3,
        title:"MediSync",
        description:"A website that is designed to synchronize medical records and facilitate communication between patients and healthcare providers. The website allows patients to securely access their medical information, schedule appointments, and communicate with their doctors online.",
        image:mediSync,
        technologies:["React","JavaScript","Tailwind CSS","Shadcn","Vite", "tansack router"],
        liveLink:"https://medisync-puce.vercel.app/auth",
        featured: true

    },
    {
        id:4,
        title:"ToDo App",
        description:"A simple and intuitive ToDo application that helps users manage their tasks efficiently. The app allows users to create, edit, and delete tasks, as well as mark them as completed. It features a clean and user-friendly interface, making it easy for users to stay organized and productive. This was done to learn more about Jotai state management library and Jest for testing.",
        image:todoApp,
        technologies:["React","TypeScript","Tailwind CSS","Shadcn","Next.js", "Jotai","Jest"],
        liveLink:"https://jotai-todo-ten.vercel.app/"

    },
]