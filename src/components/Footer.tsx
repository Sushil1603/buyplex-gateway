
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { categories } from '@/lib/products';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">ShopElite</h3>
            <p className="text-foreground/70 mb-4">
              Discover excellence in every product. Our carefully curated collection brings you the best in design, quality, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/category/${category.id}`}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-foreground/70">
              <li>123 Commerce Street</li>
              <li>New York, NY 10001</li>
              <li>contact@shopelite.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 text-sm mb-4 md:mb-0">
              © {currentYear} ShopElite. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                Shipping Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
