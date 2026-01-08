import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'home', href: '#home', isSection: true },
  { label: 'about', href: '#about', isSection: true },
  { label: 'skills', href: '#skills', isSection: true },
  { label: 'experience', href: '#experience', isSection: true },
  { label: 'projects', href: '#projects', isSection: true },
  { label: 'blog', href: '/blog', isSection: false },
  { label: 'contact', href: '#contact', isSection: true },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold font-display text-foreground">
            VK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 rounded-full bg-muted/30 backdrop-blur-md border border-border/30">
              {navItems.map((item) => (
                item.isSection ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive(item)
                        ? 'bg-primary/20 text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive(item)
                        ? 'bg-primary/20 text-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-muted/30 backdrop-blur-md border border-border/30 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted/30 backdrop-blur-md border border-border/30 text-muted-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col gap-2 p-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.isSection ? (
                      <button
                        onClick={() => handleNavClick(item)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-lg transition-colors ${
                          isActive(item)
                            ? 'bg-primary/20 text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block w-full text-left px-4 py-3 rounded-xl text-lg transition-colors ${
                          isActive(item)
                            ? 'bg-primary/20 text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
