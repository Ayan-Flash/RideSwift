import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, DollarSign, Star, Users, Car, Plane, Hotel } from 'lucide-react';

interface Package {
  id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  features: string[];
}

interface PricingTier {
  name: string;
  price: number;
  perks: string[];
  color: string;
}

const HomePage: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('medium');

  const packages: Package[] = [
    {
      id: '1',
      title: 'Mountain Adventure',
      destination: 'Swiss Alps',
      price: 1299,
      duration: '7 days',
      image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
      rating: 4.8,
      features: ['Guided Tours', 'Mountain Climbing', 'Luxury Hotels']
    },
    {
      id: '2',
      title: 'Beach Paradise',
      destination: 'Maldives',
      price: 2199,
      duration: '5 days',
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg',
      rating: 4.9,
      features: ['Water Sports', 'Spa Treatment', 'Private Beach']
    },
    {
      id: '3',
      title: 'City Explorer',
      destination: 'Tokyo',
      price: 899,
      duration: '6 days',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
      rating: 4.7,
      features: ['Cultural Tours', 'Food Experience', 'Modern Hotels']
    }
  ];

  const pricingTiers: PricingTier[] = [
    {
      name: 'Standard',
      price: 299,
      perks: ['Basic transportation', 'Standard accommodation', '24/7 support', 'Travel insurance'],
      color: 'bg-green-500'
    },
    {
      name: 'Medium',
      price: 599,
      perks: ['Premium transportation', 'Comfort accommodation', 'Priority support', 'Travel insurance', 'Meal inclusion', 'Local guide'],
      color: 'bg-blue-500'
    },
    {
      name: 'Luxury',
      price: 999,
      perks: ['Luxury transportation', 'Premium accommodation', 'VIP support', 'Comprehensive insurance', 'All meals included', 'Personal guide', 'Spa access', 'Priority booking'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6"
          >
            Discover Amazing{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Travel Experiences
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Book your perfect travel package with Neoride and create unforgettable memories
          </motion.p>
        </div>
      </motion.section>

      {/* Booking Form */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Plan Your Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Destination and Date */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Destination
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white"
                    placeholder="Where do you want to go?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-800 dark:text-white"
                  />
                </div>
              </div>

              {/* Map Area Placeholder */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">
                    {destination ? `Route to ${destination}` : 'Enter destination to view route'}
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                Choose Your Experience
              </label>
              <div className="space-y-3">
                {pricingTiers.map((tier) => (
                  <motion.div
                    key={tier.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTier(tier.name.toLowerCase())}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedTier === tier.name.toLowerCase()
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${tier.color}`} />
                        <h3 className="font-semibold text-gray-800 dark:text-white">{tier.name}</h3>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                        <span className="font-bold text-gray-800 dark:text-white">{tier.price}</span>
                      </div>
                    </div>
                    {selectedTier === tier.name.toLowerCase() && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2"
                      >
                        {tier.perks.map((perk, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{perk}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Packages */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Featured Travel Packages
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/30 dark:border-gray-700/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">{pkg.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{pkg.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pkg.destination}</p>
                
                <div className="space-y-2 mb-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Star className="h-3 w-3 text-blue-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-800 dark:text-white">${pkg.price}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">/ {pkg.duration}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, number: '50K+', label: 'Happy Travelers' },
            { icon: Car, number: '200+', label: 'Destinations' },
            { icon: Plane, number: '1000+', label: 'Flights Booked' },
            { icon: Hotel, number: '500+', label: 'Hotel Partners' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-gray-700/30"
            >
              <stat.icon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;