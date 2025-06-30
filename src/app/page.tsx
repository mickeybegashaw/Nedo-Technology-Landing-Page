import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import CompanyCultureSection from "@/components/CompanyCulture";
export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <ProjectsSection/>
      <CompanyCultureSection/>
      <ContactSection/>
    </main>
  );
}
