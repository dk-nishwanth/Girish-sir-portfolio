import { motion } from "framer-motion";
import bwPortrait from "../assets/2ndportrait.png";
 // <-- put your black & white image in assets folder

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Portrait Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-amber-800/30 to-amber-700/40 rounded-2xl border border-card-border relative overflow-hidden flex items-center justify-center">
                <img
                  src={bwPortrait}
                  alt="Black and White Portrait"
                  className="w-full h-full object-cover rounded-2xl opacity-90"
                />

                {/* Tagline overlay */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <p className="text-white font-poppins font-bold text-lg leading-tight drop-shadow-lg">
                    I BUILD THE QUIET SPACE-
                    <br />
                    WHERE FUNCTION AND BEAUTY MEET.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Section Label */}
            <motion.div
              className="text-foreground-secondary text-lg font-inter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              (About.)
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'M GIRISH.
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-xl md:text-2xl text-foreground-secondary font-inter leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              I USE FLUTTER AND FIGMA TO CRAFT DIGITAL ANATOMIES WHERE THE
              ELEGANCE OF ARCHITECTURE AND THE BEAUTY OF DESIGN ASSEMBLED TO
              DELIVER EFFICIENT- HIGH PERFORMING SOLUTIONS.
            </motion.p>

            {/* Tagline */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-poppins font-bold text-white leading-tight">
              Crafting Serenity
                <br />
                With Purpose and Style.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-20 pt-16 border-t border-card-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="stat-number">5+</div>
            <p className="text-foreground-secondary font-inter">
              Years Experience
            </p>
          </div>
          <div className="text-center">
            <div className="stat-number">10+</div>
            <p className="text-foreground-secondary font-inter">
              Projects Completed
            </p>
          </div>
          <div className="text-center">
            <div className="stat-number">MILLIONS</div>
            <p className="text-foreground-secondary font-inter">
              of Codes Written
            </p>
          </div>
          <div className="text-center">
            <div className="stat-number">HUNDREDS</div>
            <p className="text-foreground-secondary font-inter">
              of Screen Designed
            </p>
          </div>
          <div className="text-center">
            <div className="stat-number">∞</div>
            <p className="text-foreground-secondary font-inter">
              Coffee Consumed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
