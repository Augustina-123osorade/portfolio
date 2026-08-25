import FloatingBubbles from "@/ui/FloatingBubbles";

interface PhotoCollageProps {
  src: string;
  alt: string;
}

export default function PhotoCollage({ src, alt }: PhotoCollageProps) {
  return (
    <div className="relative w-full lg:w-1/2">
      <div
        aria-hidden
        className="absolute inset-0 mx-auto h-[85%] w-[85%] rounded-full bg-linear-to-br from-[#F6C9AE] via-[#F2AF8E] to-[#EAD7C4] blur-3xl"
      />
      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <FloatingBubbles />

        <div className="absolute left-0 top-2 z-20 aspect-square w-[62%] animate-[danceOne_6s_ease-in-out_infinite] overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover grayscale contrast-110"
            style={{ objectPosition: "35% 15%", transform: "scale(1.55)" }}
          />
        </div>
        <div className="absolute bottom-2 right-0 z-10 aspect-square w-[52%] animate-[danceTwo_7s_ease-in-out_0.4s_infinite] overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover grayscale contrast-110"
            style={{ objectPosition: "60% 30%", transform: "scale(2.1)" }}
          />
        </div>
      </div>
    </div>
  );
}
