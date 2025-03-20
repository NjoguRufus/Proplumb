import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white"> {/* Light blue gradient background */}
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-blue-600"
        >
          Contact Us
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Get in Touch</h2>
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4"
              >
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-blue-600">Address</h3>
                  <p className="text-gray-700">123 Plumbing Street<br />City, State 12345</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4"
              >
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-blue-600">Phone</h3>
                  <p className="text-gray-700">+254-714-748-199</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4"
              >
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-blue-600">Email</h3>
                  <p className="text-gray-700">info@proplumb.com</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4"
              >
                <Clock className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-blue-600">Hours</h3>
                  <p className="text-gray-700">24/7 Emergency Service<br />Mon-Fri: 8am-6pm (Regular Hours)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  rows={4}
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formStatus === 'submitting'}
                className={`w-full px-6 py-3 rounded-full transition flex items-center justify-center ${
                  formStatus === 'submitting' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : formStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {formStatus === 'submitting' ? (
                  'Sending...'
                ) : formStatus === 'success' ? (
                  'Message Sent!'
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;