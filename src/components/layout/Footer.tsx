import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif mb-2">Join Our Newsletter</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h4 className="font-serif text-xl mb-4">LUXEBEAUTY</h4>
            <p className="text-gray-600 mb-4">
              Discover premium, cruelty-free cosmetics that enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-serif text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-pink-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Rte de l'aéroport, Sfax , Tunisie
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-pink-600 flex-shrink-0" />
                <span className="text-gray-600">+216 12 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-pink-600 flex-shrink-0" />
                <span className="text-gray-600">info@luxebeauty.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} LUXEBEAUTY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;