import { projects } from "@/data/project-details"
import { projectModalOpenAtom, selectedProjectAtom } from "@/store/atom"
import { useAtom } from "jotai"
import ProjectModal from "@/ui/ProjectModal"

export default function Projects(){
    const [, setIsModalOpen]=useAtom(projectModalOpenAtom)
    const[, setSelectedProject]=useAtom(selectedProjectAtom)

    const handleProjectClick=(project:any)=>{
        setSelectedProject(project)
        setIsModalOpen(true)
    }
    return(
        <div className="bg-radial-[at_50%_65%] from-sky-50 via-blue-50 to-violet-50 to-90% flex flex-col   p-10   gap-10 lg:p-40">
            <h1 className="text-4xl font-bold mb-8 text-center text-violet-400">Projects</h1>
            <p className="text-center">Here are some of the projects I’ve built, focusing on responsive design, performance, and clean user experiences.</p>
      
      
      <div className="flex flex-col gap-20 ">
        {projects.map((project) => (
          <div
            key={project.id}
            
            className=" border-white border rounded p-10 flex flex-col gap-5  bg-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out "
          >
            <img
              src={project.image}
              alt={project.title}
              className=" "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <button
                onClick={() => handleProjectClick(project)}
                className=" w-full bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition-colors disabled:opacity-50 font-medium"
              >
                More Details
              </button>
              
            </div>
          </div>
        ))}
      </div>

      
      <ProjectModal />

        </div>
    )
}