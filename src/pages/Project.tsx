import { useAtom } from "jotai";
import { projects, type ProjectDetails } from "@/data/project-details";
import { currentProjects } from "@/data/current-projects";
import { projectModalOpenAtom, selectedProjectAtom } from "@/store/atom";
import ProjectModal from "@/ui/ProjectModal";
import ProjectRow from "@/ui/ProjectRow";
import CurrentProjectRow from "@/ui/CurrentProjectRow";

export default function Projects() {
  const [, setIsModalOpen] = useAtom(projectModalOpenAtom);
  const [, setSelectedProject] = useAtom(selectedProjectAtom);

  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-20 bg-[#FAF6F0] px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto w-full max-w-6xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-[#C4633C]">
          Portfolio
        </span>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">My Work</h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          Here's some of the work I've built, focusing on responsive design,
          performance, and clean user experiences — for businesses and for
          causes that matter.
        </p>
      </div>

      <section className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-[#C4633C]" />
          <h2 className="text-2xl font-extrabold text-gray-900">Current Projects</h2>
        </div>
        <p className="mt-2 text-sm text-gray-600">Actively being built or recently shipped.</p>

        <div className="mt-16 flex flex-col gap-20">
          {currentProjects.map((project, index) => (
            <CurrentProjectRow key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-8 bg-[#C4633C]" />
          <h2 className="text-2xl font-extrabold text-gray-900">Past Projects</h2>
        </div>
        <p className="mt-2 text-sm text-gray-600">Completed builds from earlier work.</p>

        <div className="mt-16 flex flex-col gap-20">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              onDetailsClick={handleProjectClick}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <ProjectModal />
    </div>
  );
}
