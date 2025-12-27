import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Vishwa Kumar | Full Stack Developer & Creative Technologist</title>
        <meta 
          name="description" 
          content="Vishwa Kumar - Full Stack Developer specializing in React, Node.js, and building beautiful digital experiences. View my portfolio and let's build something amazing together."
        />
        <meta name="keywords" content="Vishwa Kumar, Full Stack Developer, React Developer, Web Developer, Portfolio" />
        <link rel="canonical" href="https://vishwakumar.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
