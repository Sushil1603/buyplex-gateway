
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { categories } from '@/lib/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Hero />
      
      <FeaturedProducts />
      
      {/* Categories Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Browse Categories</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Discover products across our specialized categories, each offering a unique selection of premium items.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={`/category/${category.id}`} 
                  className="relative block overflow-hidden rounded-xl group"
                >
                  <div className="aspect-video bg-secondary overflow-hidden">
                    <img 
                      src={category.id === 'electronics' 
                        ? 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1587815073078-f636169821e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
                      }
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-semibold mb-2">{category.name}</h3>
                      <div className="flex items-center text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                        <span>Explore Collection</span>
                        <motion.div
                          className="inline-block ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
              <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter to receive updates on new products, special offers, and exclusive content.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  required
                />
                <button
                  type="submit"
                  className="button-hover-effect px-6 py-3 bg-primary text-white font-medium rounded-md hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-foreground/50 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
