import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { sidebarOpenAtom } from "@/store/atom";
import { useAtom } from "jotai";
import Footer from "@/ui/Footer";


export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>404 - Page Not Found</div>,
});
function RootComponent() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(sidebarOpenAtom);
  

  
  return (
    <div className="">
      <nav className="relative flex items-center justify-between px-6 py-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards] md:px-16 lg:px-24">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
            AO
          </span>
          <span className="text-sm font-semibold tracking-tight text-gray-900">
            Augustina Osorade
          </span>
        </Link>

        <div className="hidden items-center gap-10 text-sm font-medium text-gray-600 md:flex">
          <Link to="/" className="transition hover:text-gray-900">
            Home
          </Link>
          <Link to="/projects" className="transition hover:text-gray-900">
            Work
          </Link>
          <Link to="/contact" className="transition hover:text-gray-900">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-900/5"
          >
            <CiMenuBurger size={26} />
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
      <Footer />
    </div>
  );
}
