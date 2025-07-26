import React from 'react';
import { motion } from 'framer-motion';
import { Car, Users, Clock, Star } from 'lucide-react';

const RidesPage: React.FC = () => {
  const rideTypes = [
    {
      id: 1,
      name: 'Economy',
      description: 'Affordable rides for everyday travel',
      price: '$0.85',
      features: ['4 seats', 'Basic comfort', 'Reliable drivers'],
      icon: '🚗',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 2,
      name: 'Comfort',
      description: 'Premium vehicles with extra space',
      price: '$1.25',
      features: ['4 seats', 'Premium comfort', 'Top-rated drivers'],
      icon: '🚙',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 3,
      name: 'Luxury',
      description: 'High-end vehicles for special occasions',
      price: '$2.50',
      features: ['4 seats', 'Luxury interior', 'Professional chauffeurs'],
      icon: '🚘',
      color: 'from-purple-400 to-purple-600'
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
            Ride{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose from our variety of ride options for your comfort and budget
          </p>
        </div>
      </motion.section>

      {/* Ride Types */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 pb-16"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {rideTypes.map((ride, index) => (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-gray-700/30 text-center"
            >
              <div className="text-6xl mb-4">{ride.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {ride.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {ride.description}
              </p>
              
              <div className={`text-3xl font-bold bg-gradient-to-r ${ride.color} bg-clip-text text-transparent mb-6`}>
                {ride.price}<span className="text-lg">/km</span>
              </div>
              
              <div className="space-y-3 mb-8">
                {ride.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${ride.color} text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                Book {ride.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How it Works */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 pb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Users, title: 'Request', desc: 'Enter your destination and choose ride type' },
            { icon: Car, title: 'Match', desc: 'Get matched with nearby drivers' },
            { icon: Clock, title: 'Track', desc: 'Track your driver in real-time' },
            { icon: Star, title: 'Rate', desc: 'Rate your experience after the ride' }
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default RidesPage;