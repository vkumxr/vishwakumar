import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow delay-500" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground font-body text-lg md:text-xl mb-4 opacity-0 animate-fade-in">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl mb-6 opacity-0 animate-slide-up delay-100">
            <span className="text-gradient glow-text">Vishwa Kumar</span>
          </h1>

          {/* Title */}
          <p className="font-display text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 opacity-0 animate-slide-up delay-200">
            Full Stack Developer & Creative Technologist
          </p>

          {/* Description */}
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-slide-up delay-300">
            Passionate about crafting beautiful digital experiences through code. 
            I specialize in React, Node.js, and building products that make a difference.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12 opacity-0 animate-slide-up delay-400">
            <SocialLink href="https://github.com/vkumxr" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/vishwakumar" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com/vkumxr" icon={<Twitter size={20} />} label="Twitter" />
            <SocialLink href="mailto:hello@vishwakumar.dev" icon={<Mail size={20} />} label="Email" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up delay-500">
            <Button size="lg" className="px-8 font-display font-semibold">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="px-8 font-display font-semibold">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-body">Scroll</span>
            <ArrowDown size={20} className="animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 rounded-full border border-border flex items-center justify-center
               text-muted-foreground hover:text-primary hover:border-primary hover:glow-border
               transition-all duration-300"
  >
    {icon}
  </a>
);

export default HeroSection;
