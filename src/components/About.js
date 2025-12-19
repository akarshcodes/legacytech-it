import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History, MapPin, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Story & Vision
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born in Penang, built for Malaysian SMEs. We understand the unique cybersecurity 
            challenges facing local businesses.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Story Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <History className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-800">Our Beginning</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                As three Computer Science graduates from Universiti Sains Malaysia, we noticed 
                a critical gap in Penang's thriving SME sector. Family-run factories, law firms, 
                and clinics were running on outdated Windows versions, completely unaware of 
                the phishing risks lurking in their "still working" systems.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-blue-800 font-semibold">
                  "An old OS is like a house with a broken lock—eventually, a phisher will walk right in."
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6" />
                <h3 className="text-xl font-bold">Penang-Based & Proud</h3>
              </div>
              <p className="opacity-90">
                Headquarters: Bayan Lepas Free Industrial Zone<br />
                Serving: Entire Northern Corridor of Malaysia
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <Award className="h-5 w-5" />
                <span>Certified Cybersecurity Provider (MCMC)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Mission Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-blue-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg">
                    To empower local businesses with automated intelligence that eliminates 
                    the risks of aging software. We bridge the gap between legacy systems 
                    and modern cybersecurity requirements.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {['Automation', 'Accessibility', 'Affordability', 'Awareness'].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 shadow-xl border border-purple-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg">
                    To be the standard-bearer for cybersecurity integrity in the 
                    Northern Corridor of Malaysia by 2030. We aim to protect 10,000+ 
                    SMEs from digital threats while fostering a culture of security awareness.
                  </p>
                  <div className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-700 mb-2">2030 Milestones</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: '10K+', label: 'SMEs Protected' },
                        { value: '50+', label: 'Local Jobs Created' },
                        { value: '5', label: 'Branch Offices' },
                        { value: '99.9%', label: 'Satisfaction Rate' },
                      ].map((item) => (
                        <div key={item.label} className="text-center">
                          <div className="text-xl font-bold text-purple-600">{item.value}</div>
                          <div className="text-sm text-gray-500">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-800 mb-4 text-center">Our Core Values</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: '🛡️', label: 'Integrity', color: 'blue' },
                  { icon: '💡', label: 'Innovation', color: 'purple' },
                  { icon: '🤝', label: 'Partnership', color: 'green' },
                ].map((value) => (
                  <div key={value.label} className="text-center">
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <div className={`font-semibold text-${value.color}-600`}>{value.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;