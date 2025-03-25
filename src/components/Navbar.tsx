
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { categories } from '@/lib/products';
import { cn } from '@/lib/utils';
import SearchDialog from './SearchDialog';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  return (
    <>
      <header className={cn(
        'fixed w-full top-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="text-2xl font-semibold tracking-tight transition-colors"
              >
                ShopElite
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/" className={cn(
                "nav-link",
                location.pathname === '/' && "active"
              )}>
                Home
              </Link>
              
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className={cn(
                    "nav-link",
                    location.pathname === `/category/${category.id}` && "active"
                  )}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="w-5 h-5" />
                <span className="sr-only">Search</span>
              </button>
              <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="sr-only">Shopping Cart</span>
              </button>
              <button 
                className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden',
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        )}>
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <Link 
              to="/" 
              className={cn(
                "nav-link px-4 py-3",
                location.pathname === '/' && "active"
              )}
            >
              Home
            </Link>
            
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className={cn(
                  "nav-link px-4 py-3",
                  location.pathname === `/category/${category.id}` && "active"
                )}
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

export default Navbar;
