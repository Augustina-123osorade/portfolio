import { techStack } from "@/data/tech-stack";
import { useInView } from "@/hooks/useInView";

export default function TechStackGrid() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
      {techStack.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <div
            key={tech.name}
            className={`group flex flex-col items-center gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-[#F2AF8E]/60 sm:p-6 ${
              inView ? "animate-[fadeInUp_0.5s_ease-out_forwards]" : "opacity-0"
            }`}
            style={inView ? { animationDelay: `${index * 70}ms` } : undefined}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBEAE1] transition-colors group-hover:bg-[#F6DCC9]">
              <Icon size={24} className={tech.className} />
            </div>
            <p className="text-xs font-semibold text-gray-700">{tech.name}</p>
          </div>
        );
      })}
    </div>
  );
}
