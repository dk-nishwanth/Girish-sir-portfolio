import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowRight, CheckCircle } from 'lucide-react';

const affiliatePrograms = [
  {
    id: 1,
    name: 'Tech Products',
    commission: '15-25%',
    description: 'Earn commissions on cutting-edge technology products and software solutions.',
    features: ['High conversion rates', 'Recurring commissions', 'Marketing materials provided'],
    category: 'Technology'
  },
  {
    id: 2,
    name: 'Digital Services',
    commission: '20-30%',
    description: 'Promote our digital services including web development, mobile apps, and consulting.',
    features: ['Premium services', 'Long-term partnerships', 'Exclusive deals'],
    category: 'Services'
  },
  {
    id: 3,
    name: 'Enterprise Solutions',
    commission: '10-20%',
    description: 'Partner with us to promote enterprise-grade solutions to businesses.',
    features: ['High-value deals', 'Dedicated support', 'Custom solutions'],
    category: 'Enterprise'
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'High Commissions',
    description: 'Earn competitive commissions ranging from 10% to 30% on every successful referral.'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Get personalized support and marketing materials to help you succeed.'
  },
  {
    icon: DollarSign,
    title: 'Recurring Revenue',
    description: 'Build a sustainable income stream with our subscription-based services.'
  },
  {
    icon: Target,
    title: 'Quality Products',
    description: 'Promote products you can trust, built with cutting-edge technology.'
  }
];

export const AffiliateSection = () => {
  return (
    <section id="affiliate" className="min-h-screen py-20 relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-6">
            Affiliate Marketing
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed">
            Join our affiliate program and earn commissions by promoting innovative technology solutions. 
            Partner with us to build a sustainable income while helping businesses grow.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 font-inter text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Affiliate Programs */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-poppins font-bold text-white text-center mb-12">
            Our Affiliate Programs
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {affiliatePrograms.map((program, index) => (
              <motion.div
                key={program.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-inter rounded-full border border-blue-500/30">
                    {program.category}
                  </span>
                  <span className="text-2xl font-poppins font-bold text-green-400">
                    {program.commission}
                  </span>
                </div>
                
                <h4 className="text-xl font-poppins font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {program.name}
                </h4>
                
                <p className="text-gray-300 font-inter text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 font-inter text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium rounded-xl transition-all duration-300 group-hover:scale-105 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Join Program</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-poppins font-bold text-white mb-4">
              Ready to Start Earning?
            </h3>
            <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
              Join thousands of successful affiliates who are already earning with our program. 
              Start your journey today and build a sustainable income stream.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-poppins font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
