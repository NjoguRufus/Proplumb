import React from 'react';
import { Shield, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About ProPlumb
        </motion.h1>
        
        {/* Company Story */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Since 2010, ProPlumb has been providing exceptional plumbing services to homeowners and businesses. 
            What started as a small family business has grown into one of the most trusted plumbing companies in the region.
          </p>
          <p className="text-gray-600">
            Our commitment to quality workmanship, honest pricing, and customer satisfaction has earned us countless loyal customers 
            and numerous industry accolades.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-center mb-8"
        >
          Meet Our Expert Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "John Smith",
              role: "Master Plumber",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
              experience: "15+ years experience"
            },
            {
              name: "Sarah Johnson",
              role: "Service Manager",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
              experience: "10+ years experience"
            },
            {
              name: "Mike Davis",
              role: "Emergency Specialist",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
              experience: "12+ years experience"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                icon: <Star className="w-8 h-8" />,
                description: "We never compromise on the quality of our work"
              },
              {
                title: "Integrity",
                icon: <Shield className="w-8 h-8" />,
                description: "Honest pricing and transparent communication"
              },
              {
                title: "Reliability",
                icon: <Clock className="w-8 h-8" />,
                description: "Always there when you need us, 24/7"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-600 flex justify-center mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;