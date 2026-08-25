import { ExternalLink, Users } from "lucide-react";
import type { CurrentProject } from "@/data/current-projects";
import StatusBadge from "@/ui/StatusBadge";

interface CurrentProjectRowProps {
  project: CurrentProject;
  reverse?: boolean;
}

export default function CurrentProjectRow({ project, reverse }: CurrentProjectRowProps) {
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
        {project.image ? (
          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full shadow-2xl ring-4 ring-white sm:max-w-sm">
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div
            className={`relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center rounded-full text-4xl font-extrabold text-white shadow-2xl ring-4 ring-white sm:max-w-sm bg-linear-to-br ${project.gradient}`}
          >
            {project.initials}
          </div>
        )}
      </div>

      <div className="flex w-full flex-col items-start gap-4 text-left lg:w-1/2">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#C4633C]">
            Current Project
          </span>
          <StatusBadge status={project.status} />
          {project.isGroupProject && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400">
              <Users className="h-3 w-3" />
              Group Project
            </span>
          )}
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{project.title}</h3>
        <p className="text-base leading-relaxed text-gray-600">{project.description}</p>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Visit Site
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
