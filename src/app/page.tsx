import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection"
export default function Home() {
  return (
    <main id="home">
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
    </main>
  );
}
