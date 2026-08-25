import type { ProjectDetails } from "@/data/project-details";

interface ProjectRowProps {
  project: ProjectDetails;
  onDetailsClick: (project: ProjectDetails) => void;
  reverse?: boolean;
}

export default function ProjectRow({ project, onDetailsClick, reverse }: ProjectRowProps) {
  return (
    <div
      className={`flex flex-col items-center gap-10 lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="relative w-full lg:w-1/2">
        <div
          aria-hidden
          className="absolute inset-0 mx-auto h-[85%] w-[85%] rounded-full bg-linear-to-br from-[#F6C9AE] via-[#F2AF8E] to-[#D9713F] blur-2xl"
        />
        <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full shadow-2xl ring-4 ring-white sm:max-w-sm">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-4 text-left lg:w-1/2">
        <span className="text-sm font-semibold uppercase tracking-widest text-[#C4633C]">
          Past Project
        </span>
        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{project.title}</h3>
        <p className="text-base leading-relaxed text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-[#FBEAE1] px-3 py-1 text-xs font-semibold text-[#C4633C]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={() => onDetailsClick(project)}
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            More Details
          </button>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-gray-400"
            >
              Visit Site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
