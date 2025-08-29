import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Clock } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight">
              LET'S BUILD SOMETHING TOGETHER.
            </h2>

            {/* Description */}
            <p className="text-xl text-foreground-secondary font-inter leading-relaxed">
              Have a project in mind? Send me a message below or email me directly at{' '}
              <a 
                href="mailto:girish@example.com" 
                className="text-primary hover:text-primary/80 transition-colors underline"
              >
                girish@example.com
              </a>
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-inter font-medium">Email</p>
                  <p className="text-foreground-secondary font-inter">girish@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-inter font-medium">Location</p>
                  <p className="text-foreground-secondary font-inter">Jakarta, Indonesia</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-inter font-medium">Response Time</p>
                  <p className="text-foreground-secondary font-inter">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card">
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white font-inter font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white font-inter font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white font-inter font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-input-border rounded-lg text-white placeholder-foreground-muted focus:border-primary focus:outline-none transition-colors form-input resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-white font-poppins font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-16 border-t border-card-border text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-foreground-secondary font-inter">
            <div>
              <p>© 2025 Girish.</p>
            </div>
            <div>
              <p>girish@example.com</p>
            </div>
            <div>
              <p>Jakarta 10:33 PM</p>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-8">
            <motion.a
              href="#"
              className="w-10 h-10 bg-card border border-card-border rounded-lg flex items-center justify-center text-foreground-secondary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-lg font-mono">{'<>'}</span>
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 bg-card border border-card-border rounded-lg flex items-center justify-center text-foreground-secondary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              💼
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 bg-card border border-card-border rounded-lg flex items-center justify-center text-foreground-secondary hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              📷
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};