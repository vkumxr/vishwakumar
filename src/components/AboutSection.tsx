const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image/Visual */}
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-2xl card-gradient border border-border overflow-hidden glow-border">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />
                <div className="h-full flex items-center justify-center">
                  <div className="text-8xl font-display font-bold text-gradient">VK</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/20 rounded-2xl" />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <p className="text-primary font-body font-medium mb-3">About Me</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                Turning Ideas Into
                <br />
                <span className="text-gradient">Digital Reality</span>
              </h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a keen eye for design and a love 
                  for creating seamless user experiences. With expertise in modern web technologies, 
                  I bring ideas to life through clean, efficient code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
                <p>
                  I believe in continuous learning and pushing the boundaries of what's possible 
                  on the web. Let's build something amazing together.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                <StatItem number="3+" label="Years Experience" />
                <StatItem number="50+" label="Projects Done" />
                <StatItem number="20+" label="Happy Clients" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center md:text-left">
    <p className="font-display font-bold text-3xl md:text-4xl text-gradient">{number}</p>
    <p className="text-muted-foreground text-sm mt-1">{label}</p>
  </div>
);

export default AboutSection;
