import type { ProjectDetails } from "@/data/project-details";
import ProjectCard from "@/ui/ProjectCard";

interface ProjectsSectionProps {
  projects: ProjectDetails[];
  onProjectClick: (project: ProjectDetails) => void;
}

export default function ProjectsSection({ projects, onProjectClick }: ProjectsSectionProps) {
  return (
    <div className="lg:p-20 p-10 flex flex-col gap-6">
      <h1 className="font-extrabold text-5xl text-center text-[#D9713F]">Projects</h1>
      <p className="text-center">Here are some projects i have worked on </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={onProjectClick} />
        ))}
      </div>
    </div>
  );
}
