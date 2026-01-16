import { createFileRoute } from "@tanstack/react-router";
import Projects from "@/pages/Project";

export const Route = createFileRoute('/projects')({
    component: Projects,
})