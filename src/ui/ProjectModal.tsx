import { useAtom } from "jotai";
import { projectModalOpenAtom, selectedProjectAtom } from "@/store/atom";

import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


export default function ProjectModal() {
    const [isOpen, setIsOpen] = useAtom(projectModalOpenAtom);
    const [project] = useAtom(selectedProjectAtom);

    if (!isOpen || !project) return null;
    return(
        <div>
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={()=> setIsOpen(false)}/>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl z-50 p-6">
                <button
                onClick={()=> setIsOpen(false)} className="relative w-full flex justify-end">
                    <IoMdClose size={24} className="absolute top-4 right-4 cursor-pointer hover:text-gray-600"/>
                </button>

                {project.image && (
                    <img src={project.image} alt={project.title} 
                    className="w-full h-64 object-cover rounded-lg mb-6"/>
                )
                    
                }
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div>
                    {
                        project.technologies.map((tech) =>(
                            <span key={tech} className="inline-block bg-violet-200 text-violet-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                                {tech}
                            </span>
                        ))
                    }
                </div>
                <div>
                    {
                        project.liveLink && (
                            <a href={project.liveLink} target="_blank"><FaExternalLinkAlt size={20}/></a>
                        )
                    }
                </div>

            </div>

            
        </div>
        
        
    )
    
}