import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, History, MapPin, Award, Users, AlertTriangle, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reality of the Threat Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-red-900/30 border border-red-500/50 text-red-400 px-6 py-3 rounded-full mb-6"
            >
              <AlertTriangle className="h-5 w-5" />
              <span className="font-bold">CRITICAL ALERT</span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                The Reality of the Threat
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the cybersecurity landscape facing Malaysian SMEs today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                stat: '43%',
                title: 'of Attacks',
                description: 'Small and medium enterprises are now the primary targets for nearly half of all global cyber incidents.',
                icon: <AlertTriangle className="h-8 w-8" />,
                color: 'red'
              },
              {
                stat: 'RM 300K',
                title: 'Liability',
                description: 'Penalties for digital negligence and PDPA violations can result in significant legal fines and reputation loss.',
                icon: <TrendingUp className="h-8 w-8" />,
                color: 'orange'
              },
              {
                stat: '300%',
                title: 'Higher Risk',
                description: 'Unpatched systems are three times more likely to be exploited by automated ransomware compared to modern, secured infrastructure.',
                icon: <Shield className="h-8 w-8" />,
                color: 'yellow'
              },
              {
                stat: '90%',
                title: 'Prevention',
                description: 'Proactive patch management and basic digital hygiene stop the vast majority of common security breaches.',
                icon: <CheckCircle className="h-8 w-8" />,
                color: 'green'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-${item.color}-500/30 shadow-xl hover:shadow-${item.color}-500/20 transition-all`}
              >
                <div className={`w-16 h-16 bg-${item.color}-500/20 rounded-xl flex items-center justify-center mb-4 text-${item.color}-400`}>
                  {item.icon}
                </div>
                <div className={`text-5xl font-bold mb-2 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 bg-clip-text text-transparent`}>
                  {item.stat}
                </div>
                <div className="text-xl font-bold text-white mb-3">{item.title}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose LegacyShield IT
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Born in Penang, built for Malaysian SMEs. We understand your unique challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-blue-500/30 shadow-2xl">
                <img 
                  src="/images/penang-map.png" 
                  alt="Penang Map" 
                  className="w-full h-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </motion.div>

            {/* Right - Features */}
            <div className="space-y-6">
              {[
                {
                  title: 'Localized Command',
                  description: 'We navigate the unique operational landscape of Penang\'s industries. We deliver high-level protection that integrates seamlessly with your business, ensuring that robust security never comes at the cost of productivity.',
                  icon: <MapPin className="h-6 w-6" />,
                  color: 'blue'
                },
                {
                  title: 'Specialized Expertise',
                  description: 'As Computer Science specialists, we provide more than just software. We leverage automated intelligence to proactively identify and eliminate vulnerabilities that traditional, reactive tools overlook.',
                  icon: <Target className="h-6 w-6" />,
                  color: 'purple'
                },
                {
                  title: 'Legacy Protection',
                  description: 'We treat your professional reputation as our own. Our focus is to provide a secure digital foundation that preserves your life\'s work, setting a new standard for integrity across the Northern Corridor.',
                  icon: <Shield className="h-6 w-6" />,
                  color: 'green'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-${feature.color}-500/30 shadow-lg hover:shadow-${feature.color}-500/20 transition-all`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-${feature.color}-500/20 rounded-lg flex items-center justify-center text-${feature.color}-400`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Original Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Story & Vision
            </span>
          </h2>
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
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <History className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Our Beginning</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                As three Computer Science graduates from Universiti Sains Malaysia, we noticed 
                a critical gap in Penang's thriving SME sector. Family-run factories, law firms, 
                and clinics were running on outdated Windows versions, completely unaware of 
                the phishing risks lurking in their "still working" systems.
              </p>
              <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <p className="text-blue-300 font-semibold">
                  "An old OS is like a house with a broken lock—eventually, a phisher will walk right in."
                </p>
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
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-blue-500/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 text-lg">
                    To empower local businesses with automated intelligence that eliminates 
                    the risks of aging software. We bridge the gap between legacy systems 
                    and modern cybersecurity requirements.
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {['Automation', 'Accessibility', 'Affordability', 'Awareness'].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="font-medium text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-purple-500/30"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 text-lg">
                    To be the standard-bearer for cybersecurity integrity in the 
                    Northern Corridor of Malaysia by 2030. We aim to protect 10,000+ 
                    SMEs from digital threats while fostering a culture of security awareness.
                  </p>
                  <div className="mt-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-4 rounded-lg border border-purple-500/30">
                    <h4 className="font-bold text-white mb-2">2030 Milestones</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: '10K+', label: 'SMEs Protected' },
                        { value: '50+', label: 'Local Jobs Created' },
                        { value: '5', label: 'Branch Offices' },
                        { value: '99.9%', label: 'Satisfaction Rate' },
                      ].map((item) => (
                        <div key={item.label} className="text-center">
                          <div className="text-xl font-bold text-purple-400">{item.value}</div>
                          <div className="text-sm text-gray-400">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;