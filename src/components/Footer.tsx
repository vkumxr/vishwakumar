import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Instagram, BookOpen } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/vkumxr', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/vishwakumarv/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/vkumxrr', icon: Twitter, label: 'Twitter' },
  { href: 'https://www.instagram.com/vishwakumar_vk/', icon: Instagram, label: 'Instagram' },
  { href: 'https://substack.com/@vkumxr', icon: BookOpen, label: 'Substack' },
  { href: 'mailto:vishwakumarv05@gmail.com', icon: Mail, label: 'Email' },
];

const Footer = () => {
  return (
    <motion.footer
      className="py-8 px-6 border-t border-border/50 bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            © {new Date().getFullYear()} Vishwa Kumar. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-3">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-muted/30 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                aria-label={link.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
