import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { sidebarOpenAtom } from "@/store/atom";
import { useAtom } from "jotai";


export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>404 - Page Not Found</div>,
});
function RootComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarOpenAtom);
  

  
  return (
    <div className="">
      <nav className="relative flex items-center px-10 py-5 h-20 bg-violet-100  shadow-md opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
        <div>
          <h2 className="bg-linear-to-r from-blue-400 to-violet-300 bg-clip-text text-2xl font-bold text-transparent">
            AugOs Space
          </h2>
        </div>
        <div className="hidden md:flex space-x-6 ml-20 absolute left-1/2 -translate-x-1/2">
          <Link to="/">Home</Link>
          
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className=" hover:bg-accent rounded-md absolute right-10 top-5 p-2"
          >
            <CiMenuBurger size={30} />
          </button>
        </div>
      </nav>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background  z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 hover:bg-accent rounded-md"
            >
              <IoMdClose size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsSidebarOpen(false)}
              className="text-lg hover:text-primary transition-colors py-2"
            >
              Home
            </Link>
            
            <Link
              to="/projects"
              onClick={() => setIsSidebarOpen(false)}
              className="text-lg hover:text-primary transition-colors py-2"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsSidebarOpen(false)}
              className="text-lg hover:text-primary transition-colors py-2"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      <Outlet />
      <footer>
        <div className="flex flex-col items-center gap-5 p-10  ">
          <p className="text-center text-xl font-bold">Reach Out</p>
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
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold text-xl">Contact</p>
            <div className="flex items-center gap-2">
              <SiGmail className="text-gray-400" />
              <a href="mailto:ewuramaosorade@gmail.com ">
                ewuramaosorade@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <p>Accra, Ghana</p>
            </div>
          </div>
        </div>
        <div className="border-t py-6 border-gray-300">
          <p className="text-center">
            © {new Date().getFullYear()} Augustina Osorade. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
