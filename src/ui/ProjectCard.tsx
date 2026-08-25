import type { ProjectDetails } from "@/data/project-details";

interface ProjectCardProps {
  project: ProjectDetails;
  onClick: (project: ProjectDetails) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <button
          onClick={() => onClick(project)}
          className="mt-auto w-full rounded-full bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 disabled:opacity-50"
        >
          More Details
        </button>
      </div>
    </div>
  );
}
