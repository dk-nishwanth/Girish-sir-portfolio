import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroBlobImage from '@/assets/hero-blob.jpg';

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background morphing blob */}
      <motion.div
        className="morphing-blob absolute w-96 h-96 opacity-80"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      
      {/* Hero blob image */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img 
          src={heroBlobImage} 
          alt="Abstract morphing blob"
          className="w-[600px] h-[600px] object-contain opacity-60 animate-pulse"
          style={{ animationDuration: '4s' }}
        />
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h1
          className="text-7xl md:text-8xl lg:text-9xl font-poppins font-extrabold mb-6 gradient-text leading-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Polymorphism
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-foreground-secondary mb-12 font-inter font-light"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Engineer • Designer • Visionary
        </motion.p>
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="hero-button px-8 py-4 text-lg font-poppins font-semibold bg-button-primary hover:bg-button-primary-hover text-primary-foreground rounded-full glow-on-hover transition-all duration-300"
          >
            Explore My Work
          </Button>
        </motion.div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};