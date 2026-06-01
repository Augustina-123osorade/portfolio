import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { projects } from "@/data/project-details";
import { useAtom } from "jotai";
import { projectModalOpenAtom, selectedProjectAtom } from "@/store/atom";
import ProjectModal from "@/ui/ProjectModal";
import selfPic from "../assets/images/teeImage.jpeg";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
export default function Home() {
  const [, setIsModalOpen] = useAtom(projectModalOpenAtom);
  const [, setSelectedProject] = useAtom(selectedProjectAtom);

  const featuredProjects = projects.filter((project) => project.featured);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  return (
    <div className="bg-radial-[at_50%_65%] from-sky-50 via-blue-50 to-violet-50 to-90% flex flex-col gap-20">
      <div className="lg:p-40 pt-40 flex flex-col gap-5  items-center  ">
        <div className="flex items-center gap-3">
          <span className="w-8 border-t border border-gray-400 opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.6s_forwards] "></span>
          <p className="">HELLO WORLD</p>
        </div>
        <h1 className="font-extrabold text-center text-4xl lg:text-7xl opacity-0 animate-[fadeInLeft_0.8s_ease-out_1s_forwards]">
          I am Augustina Osorade.
        </h1>
        <h1 className="font-extrabold text-center text-4xl lg:text-7xl opacity-0 animate-[fadeInLeft_0.8s_ease-out_1.4s_forwards] text-violet-400">
          Software Developer
        </h1>
        <h1 className="font-extrabold text-center text-4xl lg:text-7xl opacity-0 animate-[fadeInLeft_0.8s_ease-out_1.8s_forwards]">
          Frontend-Focused
        </h1>
      </div>
      <div className="bg-white rounded-3xl lg:rounded-[4rem] flex flex-col items-center gap-8 lg:gap-20 px-6 py-12 lg:px-40 lg:py-20 shadow-lg lg:flex-row">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
          <div className="text-center lg:text-left">
      <h1 className="font-extrabold text-3xl lg:text-4xl mb-2">Know more</h1>
      <h1 className="font-bold text-3xl lg:text-4xl text-violet-400">About me</h1>
    </div>
          <p>
            A frontend-focused developer with experience in modern web
            development using React and Next.js. Passionate about building
            responsive, high-performance applications that combine clean design
            with smooth functionality, and committed to creating user-centered,
            scalable solutions.
          </p>
          <div className="flex items-center gap-10">
            <div className="">
              <a href="https://x.com/nosorade?s=11" target="blank">
                <FaXTwitter size={20} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/augustina-osorade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="blank"
              >
                <CiLinkedin size={25} />
              </a>
            </div>
            <div>
              <a href="https://github.com/Augustina-123osorade" target="blank">
                <FaGithub size={25} />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className=" w-64 h-64 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-violet-100 shadow-lg">
          <img src={selfPic} alt="Self" className="w-full h-full object-cover" />
        </div>
        </div>
      </div>
      <div className="p-5 lg:p-20 flex flex-col  gap-6">
        <h1 className="font-extrabold text-5xl text-center text-violet-400">
          Tech Stack
        </h1>
        <p className="text-center">
          Technologies and tools I use to build responsive and interactive
          interfaces
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className=" border-white border rounded p-10 flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaHtml5 size={50} className="text-orange-600" />
            <p className="text-sm font-extralight ">HTML5</p>
          </div>
          <div className=" border-white border rounded p-10  flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaCss3Alt size={50} className="text-[#1572B6]" />
            <p className="text-sm font-extralight ">CSS3</p>
          </div>
          <div className=" border-white border rounded p-10  flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <RiTailwindCssFill size={50} className="text-[#38BDF8]" />
            <p className="text-sm font-extralight ">Tailwind CSS</p>
          </div>
          <div className=" border-white border rounded p-10  flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <IoLogoJavascript size={50} className="text-[#F7DF1E]" />
            <p className="text-sm font-extralight ">JavaScript</p>
          </div>
          <div className=" border-white border rounded p-10  flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <SiTypescript size={50} className="text-[#3178C6]" />
            <p className="text-sm font-extralight ">TypeScript</p>
          </div>
          <div className=" border-white border rounded p-10  flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaReact size={50} className="text-[#61DAFB]" />
            <p className="text-sm font-extralight ">React</p>
          </div>
          <div className=" border-white border rounded p-10  flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <RiNextjsFill size={50} />
            <p className="text-sm font-extralight ">Nextjs</p>
          </div>
          <div className=" border-white border rounded p-10 flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <SiShadcnui size={50} />
            <p className="text-sm font-extralight ">Shadcn</p>
          </div>
          <div className=" border-white border rounded p-10 flex flex-col gap-5 items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <SiJest size={50} className="text-[#C21325]" />
            <p className="text-sm font-extralight ">Jest</p>
          </div>
          <div className=" border-white border rounded p-10 flex flex-col gap-5  items-center bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <TbBrandVite size={50} className=" text-[#646CFF]" />
            <p className="text-sm font-extralight ">Vite</p>
          </div>
          <div className=" border-white border rounded p-10 flex flex-col gap-5 items-center  bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <FaGithub size={50} />
            <p className="text-sm font-extralight ">GitHub</p>
          </div>
          <div className=" border-white border rounded p-10 flex flex-col gap-5 items-center  bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <BiLogoVisualStudio size={50} className="text-blue-600" />
            <p className="text-sm font-extralight ">GitHub</p>
          </div>
        </div>
      </div>
      <div className="lg:p-20 p-10 flex flex-col  gap-6">
        <h1 className="font-extrabold text-5xl text-center text-violet-400">
          Projects
        </h1>
        <p className="text-center">Here are some projects i have worked on </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className=" border-white border rounded p-10 flex flex-col gap-5  bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out "
            >
              <img src={project.image} alt={project.title} className=" " />
              <div className="p-6">
                <h3 className="text-xl  mb-2">{project.title}</h3>
                <button
                  onClick={() => handleProjectClick(project)}
                  className="w-full bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 font-medium"
                >
                  More Details
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <ProjectModal />
      </div>
    </div>
  );
}
