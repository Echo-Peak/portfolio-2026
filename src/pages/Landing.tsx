import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import type { ContentData } from "@/types/content";

interface LandingProps {
  content: ContentData;
}

export function Landing({ content }: LandingProps) {
  return (
    <>
      <Hero data={content.hero} certifications={content.certifications} />
      <Skills data={content.skills} />
      <Projects data={content.projects} />
      <Experience data={content.experiences} />
    </>
  );
}
