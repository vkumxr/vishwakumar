import { useMemo } from 'react';
import { motion } from 'framer-motion';

// Soft floating particle
const FloatingParticle = ({ 
  x, y, delay, size = 2 
}: { 
  x: string; y: string; delay: number; size?: number;
}) => (
  <motion.div
    className="absolute rounded-full"
    style={{ 
      left: x, 
      top: y, 
      width: size, 
      height: size,
      background: 'hsl(var(--muted-foreground) / 0.15)',
    }}
    animate={{
      y: [-15, 15, -15],
      x: [-8, 8, -8],
      opacity: [0.1, 0.25, 0.1],
    }}
    transition={{
      duration: 18 + Math.random() * 12,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

// Subtle connection line - no color, just structure
const ConnectionPath = ({ 
  startX, startY, endX, endY, delay 
}: { 
  startX: string; startY: string; endX: string; endY: string; delay: number;
}) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
    <motion.line
      x1={startX}
      y1={startY}
      x2={endX}
      y2={endY}
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="0.5"
      strokeOpacity="0.06"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0, 1, 0] }}
      transition={{
        duration: 12,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  </svg>
);

// Soft gradient orb - neutral colors
const GradientOrb = ({ 
  x, y, size, delay 
}: { 
  x: string; y: string; size: number; delay: number;
}) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: x,
      top: y,
      width: size,
      height: size,
      background: 'radial-gradient(circle, hsl(var(--muted) / 0.4) 0%, transparent 70%)',
      filter: 'blur(60px)',
      transform: 'translate(-50%, -50%)',
    }}
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.2, 0.35, 0.2],
    }}
    transition={{
      duration: 12 + Math.random() * 6,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

export const CyberBackground = () => {
  // Generate particles with varied positions
  const particles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: `${5 + Math.random() * 90}%`,
      y: `${5 + Math.random() * 90}%`,
      delay: Math.random() * 5,
      size: 1 + Math.random() * 2,
    })), []
  );

  // Connection paths - structural lines
  const connections = useMemo(() => [
    { startX: '10%', startY: '20%', endX: '25%', endY: '35%', delay: 0 },
    { startX: '75%', startY: '15%', endX: '88%', endY: '28%', delay: 3 },
    { startX: '15%', startY: '75%', endX: '30%', endY: '88%', delay: 6 },
    { startX: '65%', startY: '65%', endX: '78%', endY: '78%', delay: 9 },
  ], []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Base gradient background - charcoal with soft gradients */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 0%, hsl(220 12% 12%) 0%, transparent 50%),
            radial-gradient(ellipse 80% 50% at 100% 100%, hsl(220 12% 10%) 0%, transparent 40%),
            radial-gradient(ellipse 80% 50% at 0% 100%, hsl(220 12% 10%) 0%, transparent 40%),
            hsl(220 12% 8%)
          `,
        }}
      />

      {/* Subtle animated grid - very low opacity */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--muted-foreground) / 0.03) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--muted-foreground) / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>
      
      {/* Gradient orbs for depth - neutral colors */}
      <GradientOrb x="25%" y="30%" size={450} delay={0} />
      <GradientOrb x="75%" y="65%" size={350} delay={4} />
      <GradientOrb x="50%" y="85%" size={400} delay={8} />

      {/* Connection paths - subtle structure */}
      {connections.map((conn, i) => (
        <ConnectionPath key={i} {...conn} />
      ))}

      {/* Floating particles - neutral */}
      {particles.map((particle) => (
        <FloatingParticle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          delay={particle.delay}
          size={particle.size}
        />
      ))}

      {/* Vignette overlay */}
      <div className="vignette" />

      {/* Very subtle noise texture */}
      <div className="noise-overlay" />
    </div>
  );
};

export const Scanlines = () => (
  <div className="scanlines" aria-hidden="true" />
);

export default CyberBackground;