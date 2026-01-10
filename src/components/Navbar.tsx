import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#home', isSection: true },
  { label: 'About', href: '#about', isSection: true },
  { label: 'Skills', href: '#skills', isSection: true },
  { label: 'Experience', href: '#experience', isSection: true },
  { label: 'Projects', href: '#projects', isSection: true },
  { label: 'Blog', href: '/blog', isSection: false },
  { label: 'Contact', href: '#contact', isSection: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!isHomePage) return;

      const sectionItems = navItems.filter((item) => item.isSection);
      const sections = sectionItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMobileMenuOpen(false);
    
    if (!item.isSection) return;

    if (!isHomePage) {
      window.location.href = '/' + item.href;
      return;
    }

    const element = document.getElementById(item.href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (!item.isSection) {
      return location.pathname.startsWith(item.href);
    }
    return isHomePage && activeSection === item.href.slice(1);
  };

  return (
    <motion.header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'top-4' : 'top-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={`
        px-2 py-2 rounded-full transition-all duration-300
        ${isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border border-border/50' 
          : 'bg-background/60 backdrop-blur-md border border-transparent'
        }
      `}>
        <div className="flex items-center gap-1">
          {/* Logo */}
          <Link 
            to="/" 
            className="px-4 py-2 text-lg font-bold font-display hover:opacity-70 transition-opacity"
          >
            VK
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isSection ? (
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive(item)
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive(item) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-foreground/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive(item)
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {isActive(item) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-foreground/10 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Theme Toggle - Desktop */}
          <button
            onClick={toggleTheme}
            className="hidden md:flex p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-200 ml-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-1 ml-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full text-foreground hover:bg-foreground/5 transition-all"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-sm"
          >
            <div className="bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl p-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.isSection ? (
                      <button
                        onClick={() => handleNavClick(item)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive(item)
                            ? 'bg-foreground/10 text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          isActive(item)
                            ? 'bg-foreground/10 text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-foreground/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;