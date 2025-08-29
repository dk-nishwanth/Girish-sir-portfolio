import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const collaborationFeatures = [
  {
    icon: Sparkles,
    title: "Authentic Content",
    description: "Genuine reviews and recommendations that resonate with my audience"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of driving engagement and meaningful conversions"
  },
  {
    icon: Users,
    title: "Engaged Community",
    description: "25K+ active followers across multiple platforms"
  },
  {
    icon: Zap,
    title: "Creative Excellence",
    description: "High-quality content that aligns with your brand vision"
  }
];

export const CollaborationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-20 px-6 lg:px-20 bg-background-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="morphing-blob-small absolute top-20 right-20 w-32 h-32" />
        <div className="morphing-blob absolute bottom-20 left-20 w-24 h-24" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text">
            Work With Me
          </h2>
          <p className="text-xl text-foreground-secondary font-inter max-w-3xl mx-auto leading-relaxed">
            Brands and creators collaborate with me to reach audiences in fresh and engaging ways. 
            Let's create something amazing together that resonates with your target market.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {collaborationFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="w-16 h-16 bg-card border border-card-border rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-primary transition-colors"
                  whileHover={{ scale: 1.1, borderColor: 'hsl(var(--secondary-accent))' }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-8 h-8 text-secondary-accent" />
                </motion.div>
                
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground-secondary font-inter leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-card border border-card-border rounded-3xl p-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl font-poppins font-bold text-foreground mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-lg text-foreground-secondary font-inter mb-8 max-w-2xl mx-auto">
            Whether you're launching a new product or want to expand your reach, 
            I'm here to help you connect with the right audience through authentic storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="px-8 py-4 text-lg font-poppins font-semibold bg-button-primary hover:bg-button-primary-hover text-primary-foreground rounded-full glow-on-hover transition-all duration-300"
              >
                Let's Collaborate
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-poppins font-semibold rounded-full border-card-border hover:border-secondary-accent hover:text-secondary-accent transition-all duration-300"
                onClick={() => window.open('mailto:hello@girish.com?subject=Media Kit Request', '_blank')}
              >
                Download Media Kit
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};