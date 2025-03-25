
import { motion } from 'framer-motion';
import { getFeaturedProducts } from '@/lib/products';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Featured Products</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Discover our handpicked selection of exceptional products that combine innovation, design, and quality craftsmanship.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
