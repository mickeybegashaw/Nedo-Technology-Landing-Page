import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection"
export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <ProjectsSection/>
      <h1>hello</h1>
    </main>
  );
}
