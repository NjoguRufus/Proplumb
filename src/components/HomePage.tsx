import React from 'react';
import { Phone, ArrowRight, Clock, Shield, CheckCircle2, Star, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
  setActivePage: (page: string) => void;
  setSelectedService: (service: string | null) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage, setSelectedService }) => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white"> {/* Light blue gradient background */}
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center px-4" // Full screen height (h-screen) and centered content
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto text-center text-white">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Reliable & Affordable Plumbing Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-xl md:text-2xl mb-8"
          >
            Available 24/7 for All Your Plumbing Needs
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePage('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePage('services')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center justify-center"
            >
              Our Services
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-600"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Emergency Plumbing',
                icon: <Clock className="w-12 h-12 text-blue-600" />,
                image: "https://tse1.mm.bing.net/th?id=OIP.WphG8jNwA5eLBLwkKwFyXwHaE8&pid=Api", // Emergency plumbing image
                description: '24/7 emergency plumbing services for urgent repairs'
              },
              {
                title: 'Leak Detection',
                icon: <Shield className="w-12 h-12 text-blue-600" />,
                image: "https://tse2.mm.bing.net/th?id=OIP.ccaArjRL-H9-CkmD_Gj1KgHaE8&pid=Api", // Leak detection image
                description: 'Advanced leak detection and repair services'
              },
              {
                title: 'Drain Cleaning',
                icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />,
                image: "https://tse4.mm.bing.net/th?id=OIP.byRhUoZh0MYvpn97fMemDwHaE8&pid=Api", // Drain cleaning image
                description: 'Professional drain cleaning and maintenance'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer"
                onClick={() => {
                  setSelectedService(service.title);
                  setActivePage('services');
                }}
              >
                {/* Service Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-blue-600"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { text: 'Licensed & Insured', icon: <Shield className="w-6 h-6 text-blue-600" /> },
              { text: '10+ Years Experience', icon: <Star className="w-6 h-6 text-blue-600" /> },
              { text: '24/7 Service', icon: <Clock className="w-6 h-6 text-blue-600" /> },
              { text: 'Free Estimates', icon: <MessageSquare className="w-6 h-6 text-blue-600" /> }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center space-x-3 bg-blue-50 p-4 rounded-lg"
              >
                <div className="text-blue-600">{item.icon}</div>
                <span className="font-medium text-gray-700">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8"
          >
            Need Emergency Plumbing Service?
          </motion.h2>
          <motion.a
            href="tel:5551234567"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center mx-auto inline-flex"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Us Now: +254-714-748-199
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;