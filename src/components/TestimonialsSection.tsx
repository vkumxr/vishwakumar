import { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { useScrollY } from '../hooks/useParallax';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Professor, Computer Science',
    organization: 'University',
    content: 'Vishwa demonstrates exceptional problem-solving abilities and a deep understanding of systems architecture. His work on the AI-driven security tools was impressive.',
    avatar: 'SC',
  },
  {
    name: 'Rahul Mehta',
    role: 'Senior Developer',
    organization: 'InLighnX Global',
    content: 'A highly motivated intern who quickly grasped complex security concepts. His Python utilities for PDF protection showed real engineering maturity.',
    avatar: 'RM',
  },
  {
    name: 'Priya Sharma',
    role: 'Team Lead',
    organization: 'Tech Community',
    content: 'Vishwa\'s contributions to our open-source projects were outstanding. His reverse engineering framework for Android shows deep technical expertise.',
    avatar: 'PS',
  },
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const sectionRef = useRef<HTMLElement>(null);
  const scrollY = useScrollY();

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-32 px-6 section-light overflow-hidden relative grid-bg">
      {/* Decorative elements with parallax */}
      <div 
        className="absolute top-20 right-20 text-foreground/[0.03] text-[200px] font-serif select-none pointer-events-none transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.04}px)` }}
      >
        "
      </div>
      <div 
        className="absolute bottom-20 left-20 text-foreground/[0.03] text-[200px] font-serif select-none pointer-events-none rotate-180 transition-transform duration-100"
        style={{ transform: `rotate(180deg) translateY(${scrollY * -0.03}px)` }}
      >
        "
      </div>

      <div ref={ref} className={`container mx-auto max-w-5xl relative z-10 ${isInView ? 'section-bounce' : 'opacity-0'}`}>
        <div className="section-header">
          <p className="section-label">What others say</p>
          <h2 className="section-title shimmer-text">Testimonials</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`card-glow relative transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-foreground/10">
                <Quote size={24} />
              </div>

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-sm font-semibold text-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  <p className="text-muted-foreground/60 text-xs">{testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
