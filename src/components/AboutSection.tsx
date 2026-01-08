import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import profileImage from '@/assets/profile.png';

const AboutSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

  const infoItems = [
    { label: 'Education', value: 'RV University — B.Tech' },
    { label: 'Focus', value: 'AI & Cybersecurity' },
    { label: 'Location', value: 'Bengaluru, India' },
    { label: 'Status', value: 'Open to opportunities' },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 md:py-32 px-6 bg-background relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <p className="section-label">Get to know me</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <motion.div
                className="w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden glass-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Vishwa Kumar"
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl blur-xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm an engineering student with a focus on building{' '}
                <span className="text-foreground font-medium">intelligent tools</span> that actually work in the real world.
                My interests span AI-driven systems, backend development, and cybersecurity—three areas that, when combined,
                create software that's both smart and secure.
              </p>
              <p>
                I run <span className="text-foreground font-medium">Linux as my primary OS</span>, not because it's trendy,
                but because I want to understand what's happening under the hood. From writing BASH scripts to debugging embedded systems,
                I'm drawn to problems that require digging deeper than surface-level solutions.
              </p>
              <p>
                My projects reflect this approach: a{' '}
                <span className="text-foreground font-medium">reverse engineering framework</span> for Android apps,
                a <span className="text-foreground font-medium">conversational banking assistant</span> powered by LLMs,
                and a <span className="text-foreground font-medium">modular robotics system</span> with voice control.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-sm text-primary font-medium mb-1">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
