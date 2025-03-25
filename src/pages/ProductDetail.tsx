
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById } from '@/lib/products';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const product = getProductById(productId || '');
  
  useEffect(() => {
    // Scroll to top when navigating to this page
    window.scrollTo(0, 0);
    
    if (product) {
      setActiveImage(product.image);
    }
  }, [productId, product]);
  
  const handleAddToCart = () => {
    if (product) {
      toast.success(`${product.name} added to cart!`);
    }
  };
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Return to home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-20">
      <Link to="/" className="inline-flex items-center text-foreground/70 hover:text-foreground mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="aspect-square overflow-hidden rounded-xl bg-secondary/20">
            <img
              src={activeImage || product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* More images would go here in a real app */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveImage(product.image)}
              className={cn(
                "w-20 h-20 rounded-md overflow-hidden border-2",
                activeImage === product.image ? "border-primary" : "border-transparent"
              )}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </button>
            
            {/* Placeholder images for demo */}
            {Array.from({ length: 2 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(product.image)}
                className="w-20 h-20 rounded-md overflow-hidden border-2 border-transparent"
              >
                <img
                  src={product.image}
                  alt={`${product.name} view ${i + 2}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-2">
            <span className="text-sm font-medium uppercase tracking-wider text-primary">
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          
          <div className="text-2xl font-semibold mb-6">${product.price.toFixed(2)}</div>
          
          <p className="text-foreground/70 mb-8">{product.description}</p>
          
          <div className="space-y-6">
            {/* Quantity selector would go here in a real app */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="button-hover-effect flex-1 bg-primary text-white py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              
              <button
                className="button-hover-effect flex-1 bg-secondary/40 text-foreground py-3 px-6 rounded-md font-medium hover:bg-secondary/60 transition-all duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
          
          <div className="border-t border-border mt-10 pt-8">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <ul className="space-y-2">
              <li className="flex">
                <span className="w-24 text-foreground/60">Category:</span>
                <span>{product.category}</span>
              </li>
              <li className="flex">
                <span className="w-24 text-foreground/60">ID:</span>
                <span>{product.id}</span>
              </li>
              {/* More details would go here in a real app */}
            </ul>
          </div>
        </motion.div>
      </div>
      
      {/* Related products section would go here in a real app */}
    </div>
  );
};

export default ProductDetail;
