import type { ReactNode } from "react";

interface HeroBadgeProps {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function HeroBadge({ icon, children, className = "" }: HeroBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-[#FBEAE1] px-4 py-1.5 text-sm font-medium text-[#C4633C] ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
