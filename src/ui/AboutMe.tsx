import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

interface AboutMeProps {
  photo: string;
}

export default function AboutMe({ photo }: AboutMeProps) {
  return (
    <div className="bg-white rounded-3xl lg:rounded-[4rem] flex flex-col items-center gap-8 lg:gap-20 px-6 py-12 lg:px-40 lg:py-20 shadow-lg lg:flex-row mx-6 lg:mx-auto lg:max-w-6xl">
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6">
        <p>
          A frontend-focused developer with experience in modern web
          development using React and Next.js. Passionate about building
          responsive, high-performance applications that combine clean design
          with smooth functionality, and committed to creating user-centered,
          scalable solutions.
        </p>
        <div className="flex items-center gap-10">
          <a href="https://x.com/nosorade?s=11" target="_blank" rel="noreferrer">
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/augustina-osorade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noreferrer"
          >
            <CiLinkedin size={25} />
          </a>
          <a href="https://github.com/Augustina-123osorade" target="_blank" rel="noreferrer">
            <FaGithub size={25} />
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-[#F3E4D8] shadow-lg">
          <img src={photo} alt="Self" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
