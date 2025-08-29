import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, ExternalLink, Instagram, Youtube } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/girish",
    label: "Instagram"
  },
  {
    icon: Youtube,
    href: "https://youtube.com/girish",
    label: "YouTube"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/girish",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:hello@girish.com",
    label: "Email"
  }
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you within 24 hours.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={ref} className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-foreground-secondary font-inter max-w-2xl mx-auto">
            Have a brand partnership idea or just want to connect? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input h-14 text-lg rounded-2xl border-0"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input h-14 text-lg rounded-2xl border-0"
                required
              />
            </div>
          </div>
          
          <div>
            <Textarea
              name="message"
              placeholder="Tell me about your brand or collaboration idea..."
              value={formData.message}
              onChange={handleChange}
              className="form-input min-h-32 text-lg rounded-2xl border-0 resize-none"
              required
            />
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto px-12 py-4 text-lg font-poppins font-semibold bg-button-primary hover:bg-button-primary-hover text-primary-foreground rounded-full glow-on-hover transition-all duration-300"
            >
              Send Message
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.form>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-card border border-card-border rounded-full flex items-center justify-center text-foreground-secondary hover:text-primary hover:border-primary transition-all duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <IconComponent className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-10 border-t border-card-border text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-foreground-muted font-inter">
            © 2024 Girish • Influencer Portfolio. Creating authentic connections through genuine recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};