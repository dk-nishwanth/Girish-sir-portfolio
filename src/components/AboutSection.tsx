import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Morphing shape */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="morphing-blob-small w-80 h-80 lg:w-96 lg:h-96" />
            
            {/* Additional floating elements */}
            <motion.div
              className="absolute top-10 right-10 w-8 h-8 bg-accent rounded-full opacity-70"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-16 left-8 w-6 h-6 bg-primary rounded-full opacity-60"
              animate={{
                y: [10, -10, 10],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div>
              <motion.h2
                className="text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                About Me
              </motion.h2>
              
              <motion.div
                className="space-y-6 text-lg lg:text-xl text-foreground-secondary leading-relaxed font-inter"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p>
                  I bridge the gap between engineering precision and artistic imagination, 
                  crafting digital experiences that seamlessly blend form and function.
                </p>
                <p>
                  Like polymorphism in nature, I adapt and transform ideas into multiple 
                  forms - from elegant code architectures to stunning visual designs that 
                  captivate and inspire.
                </p>
                <p>
                  Every project is an opportunity to push boundaries, challenge conventions, 
                  and create something extraordinary that resonates with both logic and emotion.
                </p>
              </motion.div>
            </div>
            
            {/* Skills/Technologies floating tags */}
            <motion.div
              className="flex flex-wrap gap-3 pt-6"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {['React', 'TypeScript', 'Design Systems', 'Three.js', 'Node.js', 'UI/UX'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-card border border-card-border rounded-full text-sm font-inter text-foreground-secondary"
                  whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  custom={index}
                  style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};