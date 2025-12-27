import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import KeyboardNavigation from '../components/KeyboardNavigation';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <KeyboardNavigation />
      <Navbar />
      
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <StatsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
