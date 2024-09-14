import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';

const ProductScreen = () => {
  const product = {
    name: "High-Performance Brake Pads",
    price: 79.99,
    rating: 4.5,
    image: "/api/placeholder/400/300"
  };

  return (
    <div className="space-y-6">
      <motion.h1 
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {product.name}
      </motion.h1>

      <motion.img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      />

      <motion.div 
        className="flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-xl font-bold">${product.price}</p>
        <div className="flex items-center">
          <Star className="text-yellow-400 fill-current" size={20} />
          <span className="ml-1">{product.rating}</span>
        </div>
      </motion.div>

      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        High-quality brake pads designed for superior stopping power and long-lasting performance. Suitable for a wide range of vehicle models.
      </motion.p>

      <motion.button
        className="w-full bg-[#381552] text-white py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <ShoppingCart size={20} />
        <span>Add to Cart</span>
      </motion.button>
    </div>
  );
};

export default ProductScreen;