import { ExternalLink, Users } from "lucide-react";
import StatusBadge from "@/ui/StatusBadge";
import type { CurrentProject } from "@/data/current-projects";

interface CurrentProjectCardProps {
  project: CurrentProject;
}

export default function CurrentProjectCard({ project }: CurrentProjectCardProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`flex h-32 items-center justify-center rounded-2xl bg-linear-to-br text-2xl font-extrabold text-white ${project.gradient}`}
      >
        {project.initials}
      </div>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <div className="flex flex-col items-end gap-1.5">
          <StatusBadge status={project.status} />
          {project.isGroupProject && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400">
              <Users className="h-3 w-3" />
              Group Project
            </span>
          )}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-600">{project.description}</p>
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#D9713F] transition hover:underline"
        >
          Visit site
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}
