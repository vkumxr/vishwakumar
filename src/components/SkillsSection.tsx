const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Python", category: "Language" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Figma", category: "Design" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-body font-medium mb-3">Skills & Expertise</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              Technologies I
              <span className="text-gradient"> Work With</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              A curated collection of technologies and tools I use to bring ideas to life.
              Always learning, always growing.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ 
  skill, 
  index 
}: { 
  skill: { name: string; category: string }; 
  index: number;
}) => (
  <div 
    className="group relative p-6 rounded-xl card-gradient border border-border
               hover:border-primary/50 hover:glow-border transition-all duration-300"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
    <div className="relative">
      <p className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
        {skill.name}
      </p>
      <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
    </div>
  </div>
);

export default SkillsSection;
