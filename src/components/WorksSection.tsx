import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Panic Button',
    category: 'Mobile App',
    description: 'A simple yet essential SOS app built for Damkar Banten. Designed for quick, real-time emergency reporting and tracking, it helps firefighters receive, manage, and respond to incidents faster.',
    image: '/placeholder.svg',
    link: 'https://example.com/panic-button',
    price: 'Free',
    rating: 4.8,
    features: ['Emergency Reporting', 'Real-time Tracking', 'Clean UI']
  },
  {
    id: 2,
    name: 'FE Touch',
    category: 'Banking App',
    description: 'A sleek, tablet-based app made for bank tellers - associated with Collega Inti Pratama. FE Touch brings a fresh, modern interface to everyday banking tasks.',
    image: '/placeholder.svg',
    link: 'https://example.com/fe-touch',
    price: 'Enterprise',
    rating: 4.9,
    features: ['Modern Interface', 'Banking Tasks', 'Fast & Clean']
  },
  {
    id: 3,
    name: 'ROAST POS',
    category: 'Restaurant App',
    description: 'An all-in-one restaurant operations app built to handle everything from POS transactions to inventory, stock tracking, staff presence, and real-time dashboards.',
    image: '/placeholder.svg',
    link: 'https://example.com/roast-pos',
    price: 'From $99/month',
    rating: 4.7,
    features: ['POS System', 'Inventory Management', 'Real-time Dashboard']
  },
  {
    id: 4,
    name: 'Digital Lending',
    category: 'Finance Platform',
    description: 'A seamless loan application platform that brings the lending process fully online - from registration to approval. Built to simplify and speed up credit access.',
    image: '/placeholder.svg',
    link: 'https://example.com/digital-lending',
    price: 'From $199/month',
    rating: 4.6,
    features: ['Online Application', 'Quick Approval', 'Risk Management']
  },
  {
    id: 5,
    name: 'Lelang Online',
    category: 'Auction Platform',
    description: 'A digital platform that brings the excitement of live auctions to your screen. Built to simplify the bidding process, manage listings, and ensure a fair experience.',
    image: '/placeholder.svg',
    link: 'https://example.com/lelang-online',
    price: 'Commission-based',
    rating: 4.5,
    features: ['Live Auctions', 'Bidding System', 'Transparent Process']
  },
  {
    id: 6,
    name: 'Core X',
    category: 'Banking System',
    description: 'A modern core banking solution built to replace aging systems. Designed to handle the heart of banking operations with a more scalable, efficient approach.',
    image: '/placeholder.svg',
    link: 'https://example.com/core-x',
    price: 'Enterprise',
    rating: 4.9,
    features: ['Core Banking', 'Scalable Architecture', 'Modern Interface']
  }
];

export const WorksSection = () => {
  return (
    <section id="works" className="min-h-screen py-20 relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-accent/10 rounded-full blur-3xl" />
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
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-4">
            THE DART
          </h2>
          <p className="text-xl text-foreground-secondary font-inter max-w-3xl mx-auto">
            Discover innovative solutions and cutting-edge applications that showcase the power of modern technology
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card rounded-2xl overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-secondary-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl text-primary/30">📱</div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-inter rounded-full border border-primary/30">
                    {product.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-card/80 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-inter">{product.rating}</span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 space-y-4">
                {/* Product Name */}
                <h3 className="text-xl font-poppins font-bold text-white group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-foreground-secondary font-inter text-sm leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-card border border-card-border text-xs text-foreground-secondary font-inter rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-primary font-poppins font-semibold">
                    {product.price}
                  </span>
                  
                  <motion.a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary hover:bg-primary/80 text-white font-inter font-medium rounded-lg transition-all duration-300 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Product</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-foreground-secondary font-inter mb-6">
            Ready to explore more innovative solutions?
          </p>
          <motion.button
            className="px-8 py-4 bg-primary hover:bg-primary/80 text-white font-poppins font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
