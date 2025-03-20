import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  return (
    <footer className="bg-blue-600 text-white mt-16 rounded-t-[2rem]"> {/* Reduced rounded corners (3rem to 2rem) */}
      <div className="container mx-auto px-4 py-6"> {/* Further reduced padding (py-8 to py-6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Reduced gap (gap-8 to gap-6) */}
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-1">ProPlumb</h3> {/* Smaller heading (text-xl to text-lg) and reduced margin (mb-2 to mb-1) */}
            <p className="text-blue-100 text-xs">Your trusted plumbing partner since 2010. Available 24/7 for all your plumbing needs.</p> {/* Smaller text (text-sm to text-xs) */}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-1">Contact</h3> {/* Smaller heading (text-xl to text-lg) and reduced margin (mb-2 to mb-1) */}
            <ul className="space-y-1 text-blue-100 text-xs"> {/* Smaller text (text-sm to text-xs) */}
              <li className="flex items-center">
                <Phone className="w-3 h-3 mr-2" /> {/* Smaller icon (w-4 to w-3) */}
                +254-714-748-199
              </li>
              <li className="flex items-center">
                <Mail className="w-3 h-3 mr-2" /> {/* Smaller icon (w-4 to w-3) */}
                info@proplumb.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-3 h-3 mr-2" /> {/* Smaller icon (w-4 to w-3) */}
                123 Plumbing Street
              </li>
            </ul>
          </div>
        </div>

        {/* Developer Credit Section */}
        <div className="mt-4 pt-4 border-t border-blue-400 text-center text-blue-100 text-xs"> {/* Reduced margin (mt-6 to mt-4) and smaller text (text-sm to text-xs) */}
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
                className="h-4 w-auto" // Smaller logo (h-5 to h-4)
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;