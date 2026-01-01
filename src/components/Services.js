import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, BarChart, Zap, 
  FileCheck, AlertTriangle
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const colorVariants = {
    blue: {
      btn: 'from-blue-600 to-blue-450',
      line: 'from-blue-600 to-blue-450',
      box: 'bg-blue-500/20 border-blue-500/30',
      txt: 'text-blue-400',
      dot: 'bg-blue-500',
      demoFrom: 'from-blue-900/20',
      demoBorder: 'border-blue-500/30'
    },
    red: {
      btn: 'from-red-600 to-red-450',
      line: 'from-red-600 to-red-450',
      box: 'bg-red-500/20 border-red-500/30',
      txt: 'text-red-400',
      dot: 'bg-red-500',
      demoFrom: 'from-red-900/20',
      demoBorder: 'border-red-500/30'
    },
    green: {
      btn: 'from-green-600 to-green-450',
      line: 'from-green-600 to-green-450',
      box: 'bg-green-500/20 border-green-500/30',
      txt: 'text-green-400',
      dot: 'bg-green-500',
      demoFrom: 'from-green-900/20',
      demoBorder: 'border-green-500/30'
    },
    purple: {
      btn: 'from-purple-600 to-purple-450',
      line: 'from-purple-600 to-purple-450',
      box: 'bg-purple-500/20 border-purple-500/30',
      txt: 'text-purple-400',
      dot: 'bg-purple-500',
      demoFrom: 'from-purple-900/20',
      demoBorder: 'border-purple-500/30'
    }
  };

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
        "Identifies suspicious email patterns and phishing attempts",
        "Tracks employee click-through rates on malicious links",
        "Generates vulnerability scores for each user",
        "Real-time alerts when high-risk emails are detected",
        "Monthly risk assessment reports with recommendations",
        "Integration with email gateways for automatic filtering"
      ],
      color: "red"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Compliance Auditing",
      description: "Full compliance services for PDPA (Malaysia) and international digital security standards.",
      features: [
        "Complete PDPA Malaysia compliance assessment and reporting",
        "ISO 27001 certification preparation and gap analysis",
        "Automated audit trail generation for all security events",
        "Legal documentation support and compliance templates",
        "Regular compliance status updates and recommendations",
        "Regulatory change monitoring and impact assessment"
      ],
      color: "green"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Vulnerability Dashboard",
      description: "Real-time React-based interface showing live security status and threat intelligence.",
      features: [
        "Real-time threat intelligence from global security networks",
        "Interactive charts showing system vulnerabilities over time",
        "Customizable alert thresholds and notification preferences",
        "Mobile-responsive design for monitoring on the go",
        "Executive summary dashboards for management reporting",
        "Integration with existing security tools and SIEM systems"
      ],
      color: "purple"
    }
  ];

  const activeColors = colorVariants[services[activeService].color];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Products & Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                // Use the 'btn' variant from our lookup
                className={`px-6 py-3 rounded-full font-semibold transition-all shadow-lg ${
                  activeService === index
                    ? `bg-gradient-to-r ${colorVariants[service.color].btn} text-white`
                    : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
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
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700"
          >
            {/* Top Divider Line */}
            <div className={`h-2 bg-gradient-to-r ${activeColors.line}`}></div>
            
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-gray-400">
                    {services[activeService].description}
                  </p>
                </div>
                {/* Icon Container */}
                <div className={`p-4 rounded-xl border ${activeColors.box}`}>
                  {React.cloneElement(services[activeService].icon, {
                    className: `h-12 w-12 ${activeColors.txt}`
                  })}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {services[activeService].features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        {/* Feature Bullet */}
                        <div className={`w-2 h-2 rounded-full ${activeColors.dot}`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Demo Preview */}
                <div className={`bg-gradient-to-br ${activeColors.demoFrom} to-gray-900/50 p-6 rounded-xl border ${activeColors.demoBorder}`}>
                  <h4 className="text-xl font-bold text-white mb-4">Live Preview</h4>
                  <div className="bg-gray-950 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">Active Monitoring</span>
                      </div>
                      <div className="text-xs text-green-400 flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                        LIVE
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="w-24 text-xs text-gray-500">System {i}</div>
                          <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden mx-3">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.random() * 100}%` }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              // Progress Bar Color
                              className={`h-full rounded-full ${activeColors.dot}`}
                            />
                          </div>
                          <div className="w-12 text-right text-xs text-gray-500">
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
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
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
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
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
                className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-700 hover:border-gray-600"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <div className="font-bold text-white">{tech.name}</div>
                <div className="text-sm text-gray-400 mt-1">{tech.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;