import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  setActivePage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-blue-600 text-white mt-16 rounded-t-[3rem]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ProPlumb</h3>
            <p className="text-blue-100">Your trusted plumbing partner since 2010. Available 24/7 for all your plumbing needs.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'contact'].map((page) => (
                <li key={page}>
                  <button 
                    onClick={() => setActivePage(page)}
                    className="text-blue-100 hover:text-white capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@proplumb.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                123 Plumbing Street
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-blue-200"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-blue-200"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-blue-200"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-400 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} ProPlumb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;