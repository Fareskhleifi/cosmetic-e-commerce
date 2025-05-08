import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg"
    >
      {/* Badge: New Arrival or Best Seller */}
      {product.newArrival && (
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full z-10"
        >
          New
        </motion.div>
      )}
      {product.bestSeller && !product.newArrival && (
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          className="absolute top-2 left-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full z-10"
        >
          Best Seller
        </motion.div>
      )}
      
      {/* Image Container */}
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Quick Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
          >
            <div className="flex space-x-2">
              <motion.button 
                onClick={handleAddToCart}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-2 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingBag size={18} />
              </motion.button>
              <motion.button 
                onClick={handleWishlistToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full transition-colors ${
                  isInWishlist(product.id) 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-white text-gray-800 hover:bg-pink-600 hover:text-white'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart size={18} className={isInWishlist(product.id) ? 'fill-current' : ''} />
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Product Details */}
        <div className="p-4">
          <motion.h3 
            className="text-gray-800 font-medium mb-1 group-hover:text-pink-600 transition-colors"
            whileHover={{ x: 5 }}
          >
            {product.name}
          </motion.h3>
          <p className="text-pink-600 font-semibold">{product.price.toFixed(2)} DT</p>
          
          {/* Rating Stars */}
          {product.rating && (
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, i) => (
                <motion.svg 
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'text-amber-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
              <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;