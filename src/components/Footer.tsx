import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  setActivePage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-blue-600 text-white mt-16 rounded-t-[3rem]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ProPlumb</h3>
            <p className="text-blue-100">Your trusted plumbing partner since 2010. Available 24/7 for all your plumbing needs.</p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +254-714-748-199
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
        </div>

        {/* Developer Credit Section */}
        <div className="mt-8 pt-8 border-t border-blue-400 text-center text-blue-100">
          <p className="flex items-center justify-center space-x-2">
            <span>Developed and Maintained by</span>
            <a
              href="https://astraronix.vercel.app" // Updated URL
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <img
                src="https://i.imgur.com/T7mH4Ly.png" // Astraronix logo
                alt="Astraronix Solutions Logo"
                className="h-6 w-auto" // Adjust the size as needed
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;