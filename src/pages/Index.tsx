import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SocialButtons from "@/components/SocialButtons";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <div
        className={`bg-glow transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <SocialButtons />
        <Footer />
      </div>
    </>
  );
};

export default Index;
