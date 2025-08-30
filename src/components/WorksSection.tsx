import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ExternalLink, Star, Plus, Edit3, DollarSign, Users, Zap } from 'lucide-react';
import { OwnerAuth } from './OwnerAuth';
import { OWNER_CONFIG } from '../config/owner';
import { ProductUploadModal } from './ProductUploadModal';

// Secure owner authentication with session expiry
const isOwner = () => {
  const isAuthenticated = sessionStorage.getItem(OWNER_CONFIG.SESSION_KEY) === 'true';
  const expiryTime = sessionStorage.getItem('ownerExpiry');
  
  if (!isAuthenticated || !expiryTime) {
    return false;
  }
  
  // Check if session has expired
  if (Date.now() > parseInt(expiryTime)) {
    // Clear expired session
    sessionStorage.removeItem(OWNER_CONFIG.SESSION_KEY);
    sessionStorage.removeItem('ownerExpiry');
    return false;
  }
  
  return true;
};

const setOwnerStatus = (status: boolean) => {
  if (status) {
    sessionStorage.setItem(OWNER_CONFIG.SESSION_KEY, 'true');
    const expiryTime = Date.now() + OWNER_CONFIG.SESSION_DURATION;
    sessionStorage.setItem('ownerExpiry', expiryTime.toString());
  } else {
    sessionStorage.removeItem(OWNER_CONFIG.SESSION_KEY);
    sessionStorage.removeItem('ownerExpiry');
  }
};

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
    features: ['Emergency Reporting', 'Real-time Tracking', 'Clean UI'],
    downloads: '1.2M',
    revenue: '$500K'
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
    features: ['Modern Interface', 'Banking Tasks', 'Fast & Clean'],
    downloads: '500K',
    revenue: '$200K'
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
    features: ['POS System', 'Inventory Management', 'Real-time Dashboard'],
    downloads: '800K',
    revenue: '$1.5M'
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
    features: ['Online Application', 'Quick Approval', 'Risk Management'],
    downloads: '1.5M',
    revenue: '$10M'
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
    features: ['Live Auctions', 'Bidding System', 'Transparent Process'],
    downloads: '200K',
    revenue: '$50K'
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
    features: ['Core Banking', 'Scalable Architecture', 'Modern Interface'],
    downloads: '100+',
    revenue: '$5M+'
  }
];

export const WorksSection = () => {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentProducts, setCurrentProducts] = useState(products);
  const [isOwnerMode, setIsOwnerMode] = useState(isOwner());

  const handleProductAdded = (newProduct: any) => {
    setCurrentProducts([...currentProducts, newProduct]);
  };

  const handleOwnerAuth = (status: boolean) => {
    setIsOwnerMode(status);
    setOwnerStatus(status);
  };

  // Check session expiry on component mount and periodically
  useEffect(() => {
    const checkSession = () => {
      if (isOwnerMode && !isOwner()) {
        setIsOwnerMode(false);
      }
    };

    checkSession();
    const interval = setInterval(checkSession, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [isOwnerMode]);

  return (
    <section id="works" className="min-h-screen py-20 relative overflow-hidden bg-gradient-hero">
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
            THE DART
          </h2>
          <p className="text-xl text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed mb-8">
            Discover innovative solutions and cutting-edge applications that showcase the power of modern technology
          </p>
          
          {/* Owner Authentication */}
          <div className="flex items-center justify-center">
            <OwnerAuth 
              isAuthenticated={isOwnerMode} 
              onAuthenticate={handleOwnerAuth}
            />
            
            {isOwnerMode && (
              <motion.button
                onClick={() => setShowUploadModal(true)}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Plus className="w-4 h-4" />
                Add Product
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-poppins font-bold text-white mb-2">
              {currentProducts.reduce((acc, p) => acc + parseInt(p.downloads.replace(/[^0-9]/g, '')), 0)}K+
            </h3>
            <p className="text-gray-300 font-inter">Total Downloads</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-poppins font-bold text-white mb-2">
              $17M+
            </h3>
            <p className="text-gray-300 font-inter">Total Revenue</p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-poppins font-bold text-white mb-2">
              {currentProducts.length}
            </h3>
            <p className="text-gray-300 font-inter">Active Products</p>
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-poppins font-bold text-white mb-4">
              Quick Links
            </h3>
            <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto">
              Direct access to popular platforms and services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Amazon', url: 'https://amazon.com', icon: '🛒', color: 'from-orange-500 to-red-600' },
              { name: 'Flipkart', url: 'https://flipkart.com', icon: '📱', color: 'from-blue-500 to-yellow-500' },
              { name: 'Myntra', url: 'https://myntra.com', icon: '👗', color: 'from-pink-500 to-purple-600' },
              { name: 'eBay', url: 'https://ebay.com', icon: '🏪', color: 'from-red-500 to-blue-600' },
              { name: 'Meesho', url: 'https://meesho.com', icon: '🛍️', color: 'from-pink-400 to-purple-500' },
              { name: 'Ajio', url: 'https://ajio.com', icon: '👔', color: 'from-blue-600 to-green-600' }
            ].map((site, index) => (
              <motion.a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${site.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{site.icon}</span>
                </div>
                <h4 className="text-sm font-inter font-medium text-white group-hover:text-blue-400 transition-colors text-center">
                  {site.name}
                </h4>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">🚀</div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-inter rounded-full border border-blue-500/30 backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-inter font-medium">{product.rating}</span>
                </div>

                {/* Downloads & Revenue */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-white/80">
                  <span className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                    📥 {product.downloads}
                  </span>
                  <span className="bg-green-500/40 backdrop-blur-sm px-2 py-1 rounded-full">
                    💰 {product.revenue}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 space-y-4">
                {/* Product Name */}
                <h3 className="text-xl font-poppins font-bold text-white group-hover:text-blue-400 transition-colors">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-300 font-inter text-sm leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 text-xs text-gray-300 font-inter rounded-lg backdrop-blur-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-blue-400 font-poppins font-semibold text-lg">
                    {product.price}
                  </span>
                  
                  <motion.a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium rounded-xl transition-all duration-300 group-hover:scale-105 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Product</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              {/* Owner Edit Button */}
              {isOwnerMode && (
                <motion.button
                  className="absolute top-4 right-16 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Edit3 className="w-4 h-4" />
                </motion.button>
              )}
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
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-poppins font-bold text-white mb-4">
              Ready to explore more innovative solutions?
            </h3>
            <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
              Discover cutting-edge technology that transforms businesses and enhances user experiences.
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Product Upload Modal */}
      <ProductUploadModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
        onProductAdded={handleProductAdded}
      />
    </section>
  );
};
