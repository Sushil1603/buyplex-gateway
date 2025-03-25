
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductsByCategory, categories } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const products = getProductsByCategory(categoryId || '');
  const category = categories.find(c => c.id === categoryId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <div className="bg-gradient-to-b from-secondary/50 to-background py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {category?.name || 'Products'}
              </h1>
              <p className="text-foreground/70">
                Explore our collection of premium {category?.name.toLowerCase() || 'products'} designed with precision and care.
              </p>
            </motion.div>
          </div>
        </div>
        
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-foreground/60">
                  We couldn't find any products in this category. Please check back later.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
