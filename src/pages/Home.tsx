import { currentProjects } from "@/data/current-projects";
import HeroSection from "@/ui/HeroSection";
import TechStackSection from "@/ui/TechStackSection";
import ProjectsSpotlight from "@/ui/ProjectsSpotlight";
import selfPic from "../assets/images/teeImage.jpeg";

export default function Home() {
  const spotlightProjects = currentProjects.filter((project) => project.image).slice(0, 4);

  return (
    <div className="flex flex-col gap-20 overflow-x-hidden bg-[#FAF6F0]">
      <HeroSection photo={selfPic} />
      <ProjectsSpotlight projects={spotlightProjects} />
      <TechStackSection />
    </div>
  );
}
