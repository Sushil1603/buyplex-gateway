
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[85vh] md:h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2"
          >
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium">
              New Collection
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight"
          >
            Discover Products That Define Excellence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg mb-8 max-w-xl"
          >
            Explore our curated collection of high-quality products designed to elevate your everyday experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/category/electronics"
              className="button-hover-effect bg-white text-black font-medium px-6 py-3 rounded-md transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              Explore Electronics
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link
              to="/category/stationery"
              className="button-hover-effect bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md transition-all duration-300 hover:bg-white/10"
            >
              View Stationery
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ 
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
