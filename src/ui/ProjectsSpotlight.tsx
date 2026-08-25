import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CurrentProject } from "@/data/current-projects";
import ImageLightbox from "@/ui/ImageLightbox";

interface ProjectsSpotlightProps {
  projects: CurrentProject[];
}

const satellitePositions = ["left-2 top-2", "-left-2 top-1/2 -translate-y-1/2", "left-6 bottom-0"];

export default function ProjectsSpotlight({ projects }: ProjectsSpotlightProps) {
  const primary = projects[0];
  const satellites = projects.slice(1, 4);
  const [lightbox, setLightbox] = useState<CurrentProject | null>(null);

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-10 lg:flex-row-reverse lg:items-center lg:gap-16">
      <div className="flex w-full flex-col items-start gap-6 text-left lg:w-1/2">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#C4633C]">
          <span aria-hidden className="h-px w-8 bg-[#C4633C]" />
          Selected Work
        </span>

        <h2 className="text-4xl font-extrabold leading-[1.15] text-gray-900 sm:text-5xl lg:text-[3.4rem]">
          Projects I've Recently{" "}
          <span className="font-serif text-[0.95em] font-normal italic text-[#D9713F]">
            Built
          </span>
        </h2>

        <p className="max-w-md text-base leading-relaxed text-gray-600">
          A few projects that show how I turn ideas into fast, responsive,
          and visually polished web experiences — for businesses and for
          causes that matter.
        </p>

        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          View All Projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="relative w-full lg:w-1/2 lg:mt-16">
        <div
          aria-hidden
          className="absolute left-0 top-1/2 h-80 w-80 -translate-x-10 -translate-y-1/2 rounded-full bg-linear-to-br from-[#F6C9AE] via-[#F2AF8E] to-[#D9713F] sm:h-96 sm:w-96"
        />
        <div className="relative mx-auto flex h-80 items-center justify-center sm:h-96">
          <button
            onClick={() => setLightbox(primary)}
            aria-label={`View ${primary.title}`}
            className={`relative z-10 flex aspect-square w-64 items-center justify-center overflow-hidden rounded-full shadow-2xl ring-4 ring-white transition hover:scale-[1.03] sm:w-72 ${
              primary.image ? "" : `bg-linear-to-br ${primary.gradient}`
            }`}
          >
            {primary.image ? (
              <img src={primary.image} alt={primary.title} className="h-full w-full object-cover" />
            ) : (
              <span className="text-3xl font-extrabold text-white">{primary.initials}</span>
            )}
          </button>

          {satellites.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setLightbox(project)}
              aria-label={`View ${project.title}`}
              className={`absolute z-20 flex aspect-square w-16 items-center justify-center overflow-hidden rounded-full shadow-lg ring-4 ring-white transition hover:scale-110 sm:w-20 ${satellitePositions[index]} ${
                project.image ? "" : `bg-linear-to-br ${project.gradient}`
              }`}
              style={{
                animationName: "bubbleFloat",
                animationDuration: `${5 + index}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${index * 0.4}s`,
              }}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
              ) : (
                <span className="text-sm font-extrabold text-white">{project.initials}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {lightbox && lightbox.image && (
        <ImageLightbox src={lightbox.image} alt={lightbox.title} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
