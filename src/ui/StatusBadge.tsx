interface StatusBadgeProps {
  status: "done" | "in-progress";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const isDone = status === "done";
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
        isDone ? "bg-emerald-50 text-emerald-600" : "bg-[#FBEAE1] text-[#C4633C]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${isDone ? "bg-emerald-500" : "animate-pulse bg-[#D9713F]"}`}
      />
      {isDone ? "Done" : "In Progress"}
    </span>
  );
}
