import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleAuditRequest = (e) => {
    e.preventDefault();
    // In production, connect to backend API
    alert(`Free audit requested for: ${email}\nWe'll contact you within 24 hours!`);
    setEmail('');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6"
            >
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-semibold">🚨 PENANG BUSINESS ALERT</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Securing Penang's Legacy
              </span>
              <br />
              <span className="text-gray-800">
                Against Aging Technology
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              We identify outdated systems and phishing vulnerabilities before hackers exploit them. 
              Serving Penang's SMEs with proactive cybersecurity since 2024.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {[
                { value: '99%', label: 'Threat Detection' },
                { value: '500+', label: 'SMEs Protected' },
                { value: '24/7', label: 'Monitoring' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              onSubmit={handleAuditRequest}
              className="space-y-4 max-w-xl"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="flex-grow px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  required
                />
                <button
                  type="submit"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Get Free Security Audit
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
              <p className="text-sm text-gray-500">
                ⏱️ Takes 2 minutes • No credit card required • Results in 24 hours
              </p>
            </motion.form>
          </motion.div>

          {/* Right Column - Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Dashboard Preview */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 mb-6 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-green-400" />
                    <span className="text-white font-semibold">SentryNode Dashboard</span>
                  </div>
                  <div className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">LIVE</div>
                </div>
                
                {/* Simulated Graph */}
                <div className="space-y-3">
                  {[70, 40, 60, 30, 80, 50].map((height, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-24 text-xs text-gray-400">System {i + 1}</div>
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${height}%` }}
                          transition={{ delay: i * 0.1 + 1 }}
                          className={`h-full rounded-full ${
                            height > 60 ? 'bg-red-500' : height > 40 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}
                        />
                      </div>
                      <div className="w-12 text-right text-xs text-gray-400">{height}% risk</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Score */}
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">Your Security Score</div>
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
                    <motion.circle
                      cx="50" cy="50" r="45" fill="none"
                      stroke="url(#gradient)" strokeWidth="8" strokeLinecap="round"
                      initial={{ strokeDasharray: "283", strokeDashoffset: "283" }}
                      animate={{ strokeDashoffset: "85" }}
                      transition={{ duration: 2, delay: 1 }}
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-gray-800">70</div>
                    <div className="text-sm text-gray-500">HIGH RISK</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              🔴 3 Critical Alerts
            </motion.div>
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              📅 Patch Required
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-gray-400 text-sm">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto mt-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;