import type { CSSProperties } from "react";

interface Bubble {
  size: string;
  position: string;
  color: string;
  duration: string;
  delay?: string;
  z?: string;
}

const defaultBubbles: Bubble[] = [
  { size: "h-5 w-5", position: "-left-3 top-6", color: "bg-[#F2AF8E]/70", duration: "5s", z: "z-30" },
  { size: "h-3 w-3", position: "right-6 top-0", color: "bg-[#D9713F]/60", duration: "4s", delay: "0.6s", z: "z-30" },
  {
    size: "h-8 w-8",
    position: "-right-4 top-1/3",
    color: "bg-[#FBEAE1] ring-1 ring-[#F2AF8E]/40",
    duration: "6.5s",
    delay: "0.3s",
    z: "z-0",
  },
  { size: "h-6 w-6", position: "-left-5 bottom-16", color: "bg-white/80 shadow-sm", duration: "5.5s", delay: "1s", z: "z-0" },
  { size: "h-4 w-4", position: "bottom-0 left-1/3", color: "bg-[#F2AF8E]/50", duration: "4.5s", delay: "0.8s", z: "z-30" },
  { size: "h-2.5 w-2.5", position: "-right-2 bottom-8", color: "bg-[#C4633C]/70", duration: "3.8s", delay: "0.2s", z: "z-30" },
];

interface FloatingBubblesProps {
  bubbles?: Bubble[];
}

export default function FloatingBubbles({ bubbles = defaultBubbles }: FloatingBubblesProps) {
  return (
    <>
      {bubbles.map((bubble, index) => {
        const style: CSSProperties = {
          animationName: "bubbleFloat",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDuration: bubble.duration,
          animationDelay: bubble.delay ?? "0s",
        };
        return (
          <span
            key={index}
            aria-hidden
            style={style}
            className={`absolute ${bubble.position} ${bubble.z ?? "z-30"} ${bubble.size} rounded-full ${bubble.color}`}
          />
        );
      })}
    </>
  );
}
