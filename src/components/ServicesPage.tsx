import React from 'react';
import { Clock, Shield, Wrench, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesPageProps {
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ selectedService, setSelectedService }) => {
  const services = [
    {
      title: "Emergency Plumbing",
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      image: "https://tse1.mm.bing.net/th?id=OIP.WphG8jNwA5eLBLwkKwFyXwHaE8&pid=Api", // Emergency plumbing image
      description: "24/7 emergency services for urgent plumbing issues",
      features: ["Available 24/7", "Quick Response", "Emergency Repairs"],
      details: "Our emergency plumbing service is available 24/7 to handle any urgent plumbing issues. We understand that plumbing emergencies can't wait, which is why our team of experienced plumbers is always ready to respond quickly to your call."
    },
    {
      title: "Leak Detection",
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      image: "https://tse2.mm.bing.net/th?id=OIP.ccaArjRL-H9-CkmD_Gj1KgHaE8&pid=Api", // Leak detection image
      description: "Advanced technology to detect and fix leaks",
      features: ["Non-invasive Detection", "Accurate Diagnosis", "Efficient Repairs"],
      details: "Using state-of-the-art leak detection equipment, we can locate even the most hidden leaks without causing damage to your property. Our advanced technology allows us to pinpoint the exact location of the leak and fix it efficiently."
    },
    {
      title: "Drain Cleaning",
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      image: "https://tse4.mm.bing.net/th?id=OIP.byRhUoZh0MYvpn97fMemDwHaE8&pid=Api", // Drain cleaning image
      description: "Professional drain cleaning and maintenance",
      features: ["High-pressure Cleaning", "Camera Inspection", "Preventive Maintenance"],
      details: "Our professional drain cleaning service uses high-pressure water jetting and advanced camera inspection to thoroughly clean your drains and prevent future clogs. We also provide preventive maintenance to keep your drains flowing smoothly."
    },
    {
      title: "Water Heater Services",
      icon: <CheckCircle2 className="w-12 h-12 text-blue-600" />,
      image: "https://tse1.mm.bing.net/th?id=OIP.sQKnvXJwEL4RywLD60Ev0wHaDp&pid=Api", // Water heater image
      description: "Installation, repair, and maintenance of water heaters",
      features: ["Installation", "Repairs", "Maintenance"],
      details: "From installation to repairs and regular maintenance, we provide comprehensive water heater services. Our team is experienced with all types of water heaters and can help you choose the right solution for your needs."
    }
  ];

  if (selectedService) {
    const service = services.find(s => s.title === selectedService);
    if (service) {
      return (
        <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white"> {/* Light blue gradient background */}
          <div className="container mx-auto px-4">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedService(null)}
              className="mb-8 text-blue-600 flex items-center"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Services
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Service Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h1 className="text-3xl font-bold mb-4 text-blue-600">{service.title}</h1>
                <p className="text-gray-700 mb-6">{service.details}</p>
                
                <h2 className="text-xl font-semibold mb-4 text-blue-600">Features</h2>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.a
                  href="tel:5551234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Service
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white"> {/* Light blue gradient background */}
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600"
        >
          Our Services
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service.title)}
            >
              {/* Service Image */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;