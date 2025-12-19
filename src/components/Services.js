import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, Shield, BarChart, Zap, 
  FileCheck, AlertTriangle, Cpu, Globe
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "SentryNode OS Monitor",
      description: "Automated scanning tool that detects outdated operating systems and unpatched vulnerabilities across your network.",
      features: [
        "Real-time system age detection",
        "Automated vulnerability scanning",
        "Custom risk scoring",
        "Monthly compliance reports"
      ],
      color: "blue"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Phish-Risk Indexing",
      description: "Advanced algorithm that calculates phishing vulnerability scores based on email patterns and user behavior.",
      features: [
        "Email pattern analysis",
        "User behavior tracking",
        "Risk score calculation",
        "Automated alert system"
      ],
      color: "red"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Compliance Auditing",
      description: "Full compliance services for PDPA (Malaysia) and international digital security standards.",
      features: [
        "PDPA compliance checks",
        "ISO 27001 preparation",
        "Audit trail generation",
        "Documentation support"
      ],
      color: "green"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Vulnerability Dashboard",
      description: "Real-time React-based interface showing live security status and threat intelligence.",
      features: [
        "Live threat monitoring",
        "Interactive charts",
        "Custom alert system",
        "Mobile responsive"
      ],
      color: "purple"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
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
              Products & Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions designed specifically for Penang's SME landscape.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {services.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeService === index
                    ? `bg-${service.color}-600 text-white shadow-lg`
                    : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {service.icon}
                  <span>{service.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Active Service Detail */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className={`h-2 bg-gradient-to-r from-${services[activeService].color}-500 to-${services[activeService].color}-700`}></div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {services[activeService].description}
                  </p>
                </div>
                <div className={`p-4 rounded-xl bg-${services[activeService].color}-100`}>
                  {React.cloneElement(services[activeService].icon, {
                    className: `h-12 w-12 text-${services[activeService].color}-600`
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${services[activeService].color}-500`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Demo Preview */}
                <div className={`bg-gradient-to-br from-${services[activeService].color}-50 to-white p-6 rounded-xl border border-${services[activeService].color}-100`}>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Live Preview</h4>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Active Monitoring</span>
                      </div>
                      <div className="text-xs text-green-400">● LIVE</div>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="w-24 text-xs text-gray-400">System {i}</div>
                          <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.random() * 100}%` }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              className={`h-full rounded-full bg-${services[activeService].color}-500`}
                            />
                          </div>
                          <div className="w-12 text-right text-xs text-gray-400">
                            {Math.floor(Math.random() * 100)}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Accuracy', value: '99.7%' },
                  { label: 'Response Time', value: '<2s' },
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Clients', value: '500+' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Powered By Modern Technology
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: '⚛️', name: 'React.js', desc: 'Real-time Dashboard' },
              { icon: '🟢', name: 'Node.js', desc: 'Backend API' },
              { icon: '🔷', name: 'MongoDB', desc: 'Data Storage' },
              { icon: '🔐', name: 'AWS', desc: 'Cloud Security' },
              { icon: '📊', name: 'D3.js', desc: 'Data Visualization' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <div className="font-bold text-gray-800">{tech.name}</div>
                <div className="text-sm text-gray-500 mt-1">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;