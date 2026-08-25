import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import HeroBadge from "@/ui/HeroBadge";
import PhotoCollage from "@/ui/PhotoCollage";

interface HeroSectionProps {
  photo: string;
}

export default function HeroSection({ photo }: HeroSectionProps) {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 px-6 pb-10 pt-6 lg:flex-row lg:items-center lg:gap-16 lg:pt-8">
      <div className="flex w-full flex-col items-start gap-6 text-left lg:w-1/2">
        <HeroBadge icon={<Sparkles className="h-3.5 w-3.5" />}>Available for new projects</HeroBadge>

        <h1 className="text-4xl font-extrabold leading-[1.15] text-gray-900 sm:text-5xl lg:text-[3.4rem]">
          I Build Web Experiences
          <br />
          That Solve Real
          <br />
          <span className="font-serif text-[0.95em] font-normal italic text-[#D9713F]">
            Problems
          </span>
        </h1>

        <p className="max-w-md text-base leading-relaxed text-gray-600">
          Hi, I'm Augustina — a frontend developer crafting fast, responsive
          web experiences for businesses and communities alike, from
          e-commerce platforms to tools that make a real difference.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            View My Work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-gray-400"
          >
            Let's Talk
            <MessageCircle className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <PhotoCollage src={photo} alt="Augustina Osorade" />
    </section>
  );
}
