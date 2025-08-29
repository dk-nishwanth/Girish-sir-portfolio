import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Palette, Code, Rocket } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "Conceptualize and research the perfect solution"
  },
  {
    icon: Palette,
    title: "Design",
    description: "Craft beautiful and intuitive user experiences"
  },
  {
    icon: Code,
    title: "Build",
    description: "Develop with precision and attention to detail"
  },
  {
    icon: Rocket,
    title: "Deliver",
    description: "Launch and iterate based on real feedback"
  }
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 lg:px-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text">
            My Process
          </h2>
          <p className="text-xl text-foreground-secondary font-inter max-w-2xl mx-auto">
            From initial spark to final product, every step is crafted with intention
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Animated connecting line */}
            <motion.div
              className="absolute top-20 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center relative"
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      ease: "easeOut"
                    }}
                  >
                    {/* Icon circle */}
                    <motion.div
                      className="w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                      whileHover={{ scale: 1.1, borderColor: 'hsl(var(--accent))' }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-8 h-8 text-primary" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-poppins font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-foreground-secondary font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-12">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-card border-2 border-primary rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, borderColor: 'hsl(var(--accent))' }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-8 h-8 text-primary" />
                </motion.div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground-secondary font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};