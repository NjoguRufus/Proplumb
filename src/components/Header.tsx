import React from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, activePage, setActivePage }) => {
  return (
    <div className="fixed w-full z-50 px-4 py-4">
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-lg rounded-full mx-auto max-w-6xl"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setActivePage('home')}
          >
            {/* Use the remote image URL directly */}
            <img 
              src="https://i.imgur.com/DXOZOYY.png" // Remote image URL
              alt="ProPlumb Logo" 
              className="h-12 w-auto" // Adjust the height as needed
            />
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'services', 'contact'].map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActivePage(page)}
                className={`text-gray-600 hover:text-blue-600 capitalize ${
                  activePage === page ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {page}
              </motion.button>
            ))}
          </nav>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden md:block"
          >
            <a 
              href="tel:+254-714-748-199"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              +254-714-748-199
            </a>
          </motion.div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </motion.header>
    </div>
  );
};

export default Header;