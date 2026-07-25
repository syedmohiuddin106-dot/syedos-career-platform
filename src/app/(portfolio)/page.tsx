import type { Metadata } from "next";

import { HomeAbout } from "@/components/sections/home-about";
import { HomeContact } from "@/components/sections/home-contact";
import { HomeEducation } from "@/components/sections/home-education";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeProjects } from "@/components/sections/home-projects";
import { HomeSkills } from "@/components/sections/home-skills";

export const metadata: Metadata = {
  title: "Full-Stack Developer and AI Builder",
  description:
    "Explore Syed Mohiuddin's full-stack development projects, artificial intelligence work, technical skills, education, achievements, and professional career portfolio.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syed Mohiuddin | Full-Stack Developer and AI Builder",
    description:
      "Explore full-stack software projects, artificial intelligence work, technical skills, education, and career achievements.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main
      aria-label="Syed Mohiuddin professional portfolio"
      className="min-w-0 overflow-hidden"
    >
      <HomeHero />
      <HomeAbout />
      <HomeProjects />
      <HomeSkills />
      <HomeEducation />
      <HomeContact />
    </main>
  );
}