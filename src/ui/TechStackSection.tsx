import TechStackGrid from "@/ui/TechStackGrid";

export default function TechStackSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mx-auto max-w-xl text-center">
        <span className="inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#C4633C]">
          <span aria-hidden className="h-px w-8 bg-[#C4633C]" />
          Skills
          <span aria-hidden className="h-px w-8 bg-[#C4633C]" />
        </span>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.15] text-gray-900 sm:text-5xl">
          Tools I{" "}
          <span className="font-serif text-[0.95em] font-normal italic text-[#D9713F]">
            Build With
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-600">
          Technologies and tools I use to build responsive, high-performance,
          and interactive interfaces.
        </p>
      </div>

      <div className="mt-12">
        <TechStackGrid />
      </div>
    </section>
  );
}
