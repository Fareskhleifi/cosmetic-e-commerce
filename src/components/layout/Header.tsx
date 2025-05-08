import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold text-pink-800 tracking-wide">
            LUXE<span className="text-gold-500">BEAUTY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gold-500 hover:text-pink-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/products" className="text-gold-500 hover:text-pink-600 transition-colors font-medium">
              Shop
            </Link>
            <Link to="/about" className="text-gold-500 hover:text-pink-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gold-500 hover:text-pink-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-800 hover:text-pink-600 transition-colors"
            >
              <Search size={20} />
            </button>
            <Link to="/account" className="text-gray-800 hover:text-pink-600 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-800 hover:text-pink-600 transition-colors relative">
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden text-gray-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setSearchOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col py-4 px-4">
            <Link to="/" className="py-2 px-4 text-gray-800 hover:bg-pink-50 hover:text-pink-600">
              Home
            </Link>
            <Link to="/products" className="py-2 px-4 text-gray-800 hover:bg-pink-50 hover:text-pink-600">
              Shop
            </Link>
            <Link to="/about" className="py-2 px-4 text-gray-800 hover:bg-pink-50 hover:text-pink-600">
              About
            </Link>
            <Link to="/contact" className="py-2 px-4 text-gray-800 hover:bg-pink-50 hover:text-pink-600">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;