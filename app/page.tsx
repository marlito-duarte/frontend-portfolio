import { AboutSnippet } from "@/components/sections/about-snippet";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { ToolsSection } from "@/components/sections/tools-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <ToolsSection />
      <AboutSnippet />
      <FeaturedProjects />
      <Testimonials />
    </>
  );
}
