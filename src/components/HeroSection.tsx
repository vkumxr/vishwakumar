import { Github, Linkedin, Mail, ArrowDown, FileText, Twitter, Instagram, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.png';

const socialLinks = [
  { icon: Github, href: 'https://github.com/vkumxr', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vishwakumarv/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/vkumxrr', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/vishwakumar_vk/', label: 'Instagram' },
  { icon: BookOpen, href: 'https://substack.com/@vkumxr', label: 'Substack' },
  { icon: Mail, href: 'mailto:vishwakumarv05@gmail.com', label: 'Email' },
];

const navCategories = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection = () => {
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

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-glow-radial noise-texture overflow-hidden"
    >
      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl animate-glow"
          style={{
            background: 'radial-gradient(ellipse, hsl(25 90% 50% / 0.3) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-100px] left-1/4 w-[400px] h-[300px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, hsl(35 95% 55% / 0.2) 0%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="container mx-auto max-w-5xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div
            className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl"
            style={{ boxShadow: '0 0 60px hsl(25 90% 50% / 0.3)' }}
            whileHover={{ scale: 1.05, borderColor: 'hsl(25 90% 50% / 0.6)' }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={profileImage}
              alt="Vishwa Kumar - AI & Cybersecurity Engineer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 font-display"
          variants={itemVariants}
        >
          <span className="gradient-text">Vishwa Kumar</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          AI & Cybersecurity Student
        </motion.p>

        {/* Tagline */}
        <motion.p
          className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-xl mx-auto"
          variants={itemVariants}
        >
          Tooling + Reverse Engineering | Building ReDroid-AI
        </motion.p>

        {/* Navigation Pills */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          variants={itemVariants}
        >
          {navCategories.map((cat) => (
            <motion.button
              key={cat.label}
              onClick={() => scrollToSection(cat.href)}
              className="nav-pill lowercase"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="/VISHWA-RESUME.pdf"
            download="Vishwa_Kumar_Resume.pdf"
            className="glass-card-hover px-8 py-4 flex items-center gap-3 text-foreground font-medium"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <FileText size={20} />
            Download Resume
          </motion.a>

          <motion.button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-[0_0_30px_hsl(25_90%_50%_/_0.4)]"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-3"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={link.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
