import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide seamless, reliable, and memorable travel experiences that connect people with the world around them.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Every decision we make is centered around creating the best possible experience for our customers and partners.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from technology to customer support.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting travelers with destinations worldwide through our extensive network of partners.'
    }
  ];

  const team = [
    {
      name: 'Avik Modak',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg'
    },
    {
      name: 'Ayan Ghosh',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg'
    },
    {
      name: 'Alver Vanchesko',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg'
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
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Neoride
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Revolutionizing travel experiences through innovation, reliability, and exceptional service
          </p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 dark:border-gray-700/30">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2020, Neoride began with a simple vision: to make travel accessible, 
                enjoyable, and stress-free for everyone. What started as a small team with big 
                dreams has grown into a trusted platform serving thousands of travelers worldwide.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We believe that travel has the power to transform lives, create memories, and 
                build connections. That's why we're committed to providing not just transportation 
                and accommodation, but complete travel experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we continue to innovate and expand our services, always keeping our 
                customers at the heart of everything we do.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                alt="Team collaboration"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Our Values
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-gray-700/30"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <value.icon className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Meet Our Team
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 dark:border-gray-700/30 text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 pb-16"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Neoride by Numbers</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Happy Customers' },
              { number: '200+', label: 'Destinations' },
              { number: '1000+', label: 'Successful Trips' },
              { number: '4.9', label: 'Average Rating' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;