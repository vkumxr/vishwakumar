import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <p className="text-primary font-body font-medium mb-3">Get In Touch</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Let's Build Something
            <br />
            <span className="text-gradient">Amazing Together</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto mb-12">
            Have a project in mind or just want to chat? I'm always open to discussing 
            new opportunities and interesting ideas.
          </p>

          {/* Email Button */}
          <Button size="lg" className="px-8 font-display font-semibold mb-16">
            <Mail className="mr-2" size={18} />
            Say Hello
            <ArrowUpRight className="ml-2" size={18} />
          </Button>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-xl card-gradient border border-border">
              <Mail className="text-primary mb-4" size={24} />
              <p className="text-muted-foreground text-sm mb-1">Email</p>
              <a 
                href="mailto:hello@vishwakumar.dev" 
                className="font-display font-semibold hover:text-primary transition-colors"
              >
                hello@vishwakumar.dev
              </a>
            </div>
            <div className="p-6 rounded-xl card-gradient border border-border">
              <MapPin className="text-primary mb-4" size={24} />
              <p className="text-muted-foreground text-sm mb-1">Location</p>
              <p className="font-display font-semibold">India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <SocialLink href="https://github.com/vkumxr" icon={<Github size={24} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/vishwakumar" icon={<Linkedin size={24} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com/vkumxr" icon={<Twitter size={24} />} label="Twitter" />
          </div>
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
    className="text-muted-foreground hover:text-primary transition-colors duration-300"
  >
    {icon}
  </a>
);

export default ContactSection;
