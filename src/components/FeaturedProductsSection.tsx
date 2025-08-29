import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';
import product5 from '@/assets/product-5.jpg';
import product6 from '@/assets/product-6.jpg';

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    caption: "Sound Perfection",
    image: product1,
    category: "Tech",
    link: "https://example.com/headphones",
    price: "$199"
  },
  {
    id: 2,
    name: "Luxury Skincare",
    caption: "Radiant Glow",
    image: product2,
    category: "Beauty",
    link: "https://example.com/skincare",
    price: "$89"
  },
  {
    id: 3,
    name: "Smart Watch",
    caption: "Future Ready",
    image: product3,
    category: "Tech",
    link: "https://example.com/watch",
    price: "$299"
  },
  {
    id: 4,
    name: "Designer Sneakers",
    caption: "Street Style",
    image: product4,
    category: "Fashion",
    link: "https://example.com/sneakers",
    price: "$159"
  },
  {
    id: 5,
    name: "Artisan Coffee",
    caption: "Pure Bliss",
    image: product5,
    category: "Lifestyle",
    link: "https://example.com/coffee",
    price: "$24"
  },
  {
    id: 6,
    name: "Travel Backpack",
    caption: "Adventure Ready",
    image: product6,
    category: "Travel",
    link: "https://example.com/backpack",
    price: "$129"
  }
];

export const FeaturedProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [likedProducts, setLikedProducts] = useState<number[]>([]);

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const loadMore = () => {
    setVisibleProducts(prev => Math.min(prev + 3, products.length));
  };

  return (
    <section id="products" ref={ref} className="py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-6xl font-poppins font-bold mb-6 gradient-text">
            Featured Picks
          </h2>
          <p className="text-xl text-foreground-secondary font-inter max-w-2xl mx-auto">
            Carefully curated products that I personally love and recommend to my community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.slice(0, visibleProducts).map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-card border border-card-border rounded-3xl overflow-hidden cursor-pointer"
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Like button */}
                <motion.button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-background"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${
                      likedProducts.includes(product.id) 
                        ? 'text-secondary-accent fill-secondary-accent' 
                        : 'text-foreground-muted'
                    }`}
                  />
                </motion.button>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-inter font-medium text-primary-foreground">
                  {product.category}
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-secondary-accent font-inter font-medium mb-4">
                      {product.caption}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-poppins font-bold text-foreground">
                        {product.price}
                      </span>
                      <Button
                        onClick={() => window.open(product.link, '_blank')}
                        size="sm"
                        className="bg-button-primary hover:bg-button-primary-hover text-primary-foreground rounded-full px-4 py-2 font-inter font-medium"
                      >
                        View Product
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Static content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-poppins font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-lg font-poppins font-bold text-secondary-accent">
                    {product.price}
                  </span>
                </div>
                <p className="text-foreground-muted font-inter text-sm">
                  {product.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < products.length && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              onClick={loadMore}
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-card-border hover:border-primary transition-all duration-300 font-inter font-medium"
            >
              Load More Products
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};