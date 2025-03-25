
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Product } from '@/lib/products';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product detail
    e.stopPropagation(); // Prevent event bubbling
    toast.success(`${product.name} added to cart!`);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        "relative group rounded-xl overflow-hidden cursor-pointer",
        "glass-card hover:shadow-lg transition-all duration-300"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-secondary/30">
          <img
            src={product.image}
            alt={product.name}
            className={cn(
              "object-cover w-full h-full transition-transform duration-500 ease-out",
              isHovered ? "scale-105" : "scale-100"
            )}
            loading="lazy"
          />
        </div>
        
        <div className="p-5">
          <div className="mb-2">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          
          <h3 className="font-medium text-lg mb-1 text-foreground/90">{product.name}</h3>
          
          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <span className="font-semibold">${product.price.toFixed(2)}</span>
            
            <button
              onClick={handleAddToCart}
              className={cn(
                "button-hover-effect p-2 rounded-full",
                "bg-primary text-white transition-all duration-300",
                "hover:shadow-md hover:shadow-primary/20"
              )}
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Quick action overlay */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/60 flex items-center justify-center",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )}
        >
          <button
            onClick={handleAddToCart}
            className={cn(
              "button-hover-effect px-6 py-2.5 rounded-md",
              "bg-white text-black font-medium transition-all duration-300",
              "transform translate-y-4 group-hover:translate-y-0"
            )}
          >
            Add to Cart
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
