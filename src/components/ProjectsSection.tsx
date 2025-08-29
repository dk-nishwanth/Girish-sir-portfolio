import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const projects = [
  {
    id: 1,
    title: "Responsive Dashboard",
    description: "Modern web interface with advanced data visualization",
    image: project1,
    tags: ["React", "TypeScript", "Charts"]
  },
  {
    id: 2,
    title: "Mobile FinTech App",
    description: "Sleek financial management application",
    image: project2,
    tags: ["React Native", "API", "UI/UX"]
  },
  {
    id: 3,
    title: "3D Visualization",
    description: "Interactive architectural modeling platform",
    image: project3,
    tags: ["Three.js", "WebGL", "3D"]
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-stack online shopping experience",
    image: project4,
    tags: ["Next.js", "Stripe", "Database"]
  },
  {
    id: 5,
    title: "Brand Identity System",
    description: "Complete visual identity and design language",
    image: project5,
    tags: ["Design", "Branding", "Typography"]
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    description: "Real-time business intelligence interface",
    image: project6,
    tags: ["Vue.js", "D3.js", "Analytics"]
  }
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text">
            Featured Work
          </h2>
          <p className="text-xl text-foreground-secondary font-inter max-w-2xl mx-auto">
            A collection of projects that showcase the intersection of technology and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="p-6 w-full">
                    <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-foreground-secondary font-inter mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-inter text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Static content below image */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-muted font-inter text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};