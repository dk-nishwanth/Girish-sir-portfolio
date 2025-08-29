import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import girishPortrait from '@/assets/girish-portrait.jpg';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Portrait */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <img 
                src={girishPortrait}
                alt="Girish - Influencer Portrait"
                className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-card"
              />
              
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 morphing-blob-small opacity-60"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
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
                  I showcase products, trends, and ideas that inspire people. From lifestyle 
                  essentials to creative tools, I connect audiences with what matters.
                </p>
                <p>
                  My content bridges the gap between discovery and decision, helping thousands 
                  find products that genuinely enhance their lives through authentic recommendations.
                </p>
                <p>
                  Every collaboration is an opportunity to introduce my community to innovations 
                  that align with their values and aspirations.
                </p>
              </motion.div>
            </div>
            
            {/* Audience/Content categories */}
            <motion.div
              className="flex flex-wrap gap-3 pt-6"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {['Tech', 'Lifestyle', 'Fashion', 'Beauty', 'Home', 'Travel'].map((category, index) => (
                <motion.span
                  key={category}
                  className="px-4 py-2 bg-card border border-card-border rounded-full text-sm font-inter text-foreground-secondary"
                  whileHover={{ scale: 1.05, borderColor: 'hsl(var(--secondary-accent))' }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  custom={index}
                  style={{ transitionDelay: `${0.9 + index * 0.1}s` }}
                >
                  {category}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};