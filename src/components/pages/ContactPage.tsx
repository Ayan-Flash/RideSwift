import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@neoride.com',
      subDetails: 'We\'ll respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subDetails: 'Mon-Fri, 9 AM - 6 PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Innovation Drive',
      subDetails: 'San Francisco, CA 94102'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            Contact{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-gray-700/30"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white"
                  placeholder="What's this about?"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">
                        {info.details}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {info.subDetails}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-gray-700/30"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Quick Questions?
              </h3>
              <div className="space-y-4">
                {[
                  'How do I cancel my booking?',
                  'What payment methods do you accept?',
                  'How can I become a driver?',
                  'Is my personal information secure?'
                ].map((question, index) => (
                  <div key={index} className="p-3 bg-white/10 dark:bg-gray-800/10 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Check our FAQ section or contact us for detailed answers.
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="h-6 w-6" />
                <h3 className="font-semibold">Response Time</h3>
              </div>
              <p className="text-white/90">
                We typically respond to all inquiries within 2-4 hours during business hours, 
                and within 24 hours on weekends.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;