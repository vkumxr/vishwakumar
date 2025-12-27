import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "GitHub Profile README Maker",
    description: "A modern tool to generate beautiful and customized GitHub profile READMEs with an intuitive UI.",
    tags: ["React", "Tailwind CSS", "GitHub API"],
    github: "https://github.com/vkumxr",
    live: "#",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and experience with stunning animations.",
    tags: ["Next.js", "Framer Motion", "TypeScript"],
    github: "https://github.com/vkumxr",
    live: "#",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, admin dashboard, and inventory management.",
    tags: ["MERN Stack", "Stripe", "Redux"],
    github: "https://github.com/vkumxr",
    live: "#",
    featured: false,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team features.",
    tags: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/vkumxr",
    live: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-body font-medium mb-3">Featured Work</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Projects That
              <span className="text-gradient"> Define Me</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for building 
              impactful digital products.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View All */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-display">
              View All Projects
              <ArrowUpRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  index 
}: { 
  project: typeof projects[0]; 
  index: number;
}) => (
  <div 
    className={`group relative p-8 rounded-2xl card-gradient border border-border
                hover:border-primary/50 transition-all duration-500
                ${project.featured ? 'md:col-span-1' : ''}`}
  >
    {/* Hover Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-2xl blur-sm" />
    </div>

    <div className="relative">
      {/* Project Number */}
      <span className="text-primary/30 font-display font-bold text-6xl absolute -top-2 -left-2">
        0{index + 1}
      </span>

      {/* Content */}
      <div className="pt-8">
        <h3 className="font-display font-bold text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground font-body mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs font-body bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
            Code
          </a>
          <a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowUpRight size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsSection;
