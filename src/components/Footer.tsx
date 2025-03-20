import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  setActivePage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-blue-600 text-white mt-16 rounded-t-[3rem]">
      <div className="container mx-auto px-4 py-8"> {/* Reduced padding (py-12 to py-8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">ProPlumb</h3> {/* Reduced margin (mb-4 to mb-2) */}
            <p className="text-blue-100 text-sm">Your trusted plumbing partner since 2010. Available 24/7 for all your plumbing needs.</p> {/* Smaller text (text-sm) */}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact</h3> {/* Reduced margin (mb-4 to mb-2) */}
            <ul className="space-y-1 text-blue-100 text-sm"> {/* Smaller text (text-sm) and reduced spacing (space-y-2 to space-y-1) */}
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
        <div className="mt-6 pt-6 border-t border-blue-400 text-center text-blue-100 text-sm"> {/* Reduced margin (mt-8 to mt-6) and smaller text (text-sm) */}
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
                className="h-5 w-auto" // Smaller logo (h-6 to h-5)
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;