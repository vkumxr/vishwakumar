import { Github, Linkedin, Mail, ArrowRight, FileText, Twitter, Instagram, BookOpen, ArrowUpRight, Code, Shield, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.png';
import { MagneticWrapper } from './motion/MagneticButton';

const socialLinks = [
  { icon: Github, href: 'https://github.com/vkumxr', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vishwakumarv/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/vkumxrr', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/vishwakumar_vk/', label: 'Instagram' },
  { icon: BookOpen, href: 'https://substack.com/@vkumxr', label: 'Substack' },
  { icon: Mail, href: 'mailto:vishwakumarv05@gmail.com', label: 'Email' },
];

const bentoCards = [
  { 
    title: 'AI & ML', 
    description: 'Building intelligent systems',
    icon: Cpu,
    href: '#projects',
    size: 'small'
  },
  { 
    title: 'Cybersecurity', 
    description: 'Reverse engineering & tooling',
    icon: Shield,
    href: '#skills',
    size: 'small'
  },
  { 
    title: 'Backend Dev', 
    description: 'Scalable architectures',
    icon: Code,
    href: '#experience',
    size: 'small'
  },
];

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--foreground) / 0.08) 0%, transparent 50%)`,
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} 
      />

      <motion.div 
        className="container mx-auto max-w-6xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* Left Column - Profile Card */}
          <motion.div 
            className="lg:col-span-4 lg:row-span-2"
            variants={itemVariants}
          >
            <div className="glass-card h-full flex flex-col items-center justify-center text-center p-8">
              {/* Profile Image */}
              <motion.div 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-foreground/10 mb-6"
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--foreground) / 0.3)' }}
              >
                <img 
                  src={profileImage} 
                  alt="Vishwa Kumar Venkateswaran" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Name */}
              <h1 className="text-2xl md:text-3xl font-bold mb-2 font-display">
                Vishwa Kumar
              </h1>
              <p className="text-lg text-muted-foreground mb-1">Venkateswaran</p>
              
              {/* Role Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mt-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for hire</span>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 mt-6">
                {socialLinks.slice(0, 4).map((link) => (
                  <MagneticWrapper key={link.label} strength={0.3} radius={60}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-foreground/10 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={link.label}
                    >
                      <link.icon size={18} />
                    </motion.a>
                  </MagneticWrapper>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Column - Main Headline */}
          <motion.div 
            className="lg:col-span-8"
            variants={itemVariants}
          >
            <div className="glass-card h-full flex flex-col justify-center p-8 md:p-10">
              <p className="text-muted-foreground text-sm uppercase tracking-widest mb-4">
                AI & Cybersecurity Student
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-display">
                Tooling + Reverse Engineering
                <span className="block text-muted-foreground mt-2">Building ReDroid-AI</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Engineering student specializing in AI systems, cybersecurity, and scalable backend development. 
                Passionate about building tools that make a difference.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/VISHWA-RESUME.pdf"
                  download="Vishwa_Kumar_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FileText size={18} />
                  Download Resume
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get in Touch
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row - Bento Cards */}
          {bentoCards.map((card, index) => (
            <motion.div 
              key={card.title}
              className="lg:col-span-4 md:col-span-1"
              variants={itemVariants}
              custom={index}
            >
              <motion.button
                onClick={() => scrollToSection(card.href)}
                className="glass-card w-full h-full p-6 text-left group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center">
                    <card.icon size={24} className="text-foreground" />
                  </div>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" 
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1 font-display">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </motion.button>
            </motion.div>
          ))}

          {/* Quick Stats Row */}
          <motion.div 
            className="lg:col-span-12"
            variants={itemVariants}
          >
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {[
                  { value: '4+', label: 'Projects Built' },
                  { value: '5+', label: 'Certifications' },
                  { value: '2+', label: 'Years Learning' },
                  { value: '∞', label: 'Curiosity' },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold mb-1 font-display">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border border-foreground/20 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-2 rounded-full bg-foreground/40"
            animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;