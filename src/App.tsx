import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

// Import the local video file
import backgroundVideo from './assets/Seniors Plumbing - Background Video (No Sound) - Seniors Plumbing (720p, h264).mp4';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const pages = {
    home: <HomePage setActivePage={setActivePage} setSelectedService={setSelectedService} />,
    about: <AboutPage />,
    services: <ServicesPage selectedService={selectedService} setSelectedService={setSelectedService} />,
    contact: <ContactPage />,
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen} 
          activePage={activePage} 
          setActivePage={setActivePage} 
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-white md:hidden pt-20"
            >
              <nav className="container mx-auto px-4 py-6">
                {Object.keys(pages).map((page) => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.05, x: 10 }}
                    onClick={() => {
                      setActivePage(page);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left py-3 px-4 text-gray-600 hover:bg-gray-50 capitalize"
                  >
                    {page}
                  </motion.button>
                ))}
                <a
                  href="tel:5551234567"
                  className="w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {pages[activePage as keyof typeof pages]}
          </motion.div>
        </AnimatePresence>

        <Footer setActivePage={setActivePage} />
      </div>
    </div>
  );
}

export default App;