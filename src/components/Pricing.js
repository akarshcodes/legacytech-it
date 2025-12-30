import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Zap, Crown, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const planDetails = [
    {
      name: 'The Sentinel',
      icon: <Shield className="h-12 w-12" />,
      tagline: 'Essential protection for small family businesses',
      description: 'Perfect for startups and small offices that need basic but reliable cybersecurity monitoring. Get automated scanning and monthly reports to stay ahead of common threats.',
      image:'/images/sentinel.png',
      color: 'blue',
      bestFor: ['1-10 employees', 'Single office location', 'Basic IT infrastructure', 'Limited budget']
    },
    {
      name: 'The Guardian',
      icon: <Zap className="h-12 w-12" />,
      tagline: 'Comprehensive protection for growing SMEs',
      description: 'Ideal for growing businesses that need real-time monitoring and compliance support. Includes everything in Sentinel plus advanced dashboard, vulnerability tracking, and PDPA compliance auditing.',
      image: '/images/guardian.png',
      color: 'purple',
      bestFor: ['11-50 employees', 'Multiple locations', 'Growing IT needs', 'Compliance requirements']
    },
    {
      name: 'The Fortress',
      icon: <Crown className="h-12 w-12" />,
      tagline: 'Enterprise-grade security for industrial SMEs',
      description: 'Complete enterprise solution with 24/7 monitoring, dedicated support, and custom integration. Perfect for large SMEs and industrial operations that require maximum security and priority response.',
      image: '/images/fortress.png',
      color: 'amber',
      bestFor: ['50+ employees', 'Multiple sites', 'Complex infrastructure', 'Mission-critical operations']
    }
  ];

  const plans = [
    {
      name: 'The Sentinel',
      price: { monthly: 99, yearly: 950 },
      description: 'Essential protection for small family businesses',
      color: 'blue',
      features: [
        { included: true, text: 'Automated OS Age Scanning' },
        { included: true, text: 'Monthly Phish-Risk Reports' },
        { included: true, text: 'Email Alerts' },
        { included: true, text: 'Basic Dashboard Access' },
        { included: true, text: 'Up to 10 PCs' },
        { included: false, text: '24/7 Monitoring' },
        { included: false, text: 'Priority Support' },
        { included: false, text: 'Compliance Audit' },
      ],
      target: 'Small Offices (1-10 PCs)',
      popular: false
    },
    {
      name: 'The Guardian',
      price: { monthly: 499, yearly: 4790 },
      description: 'Comprehensive protection for growing SMEs',
      color: 'purple',
      features: [
        { included: true, text: 'Everything in Sentinel' },
        { included: true, text: 'Real-time Dashboard' },
        { included: true, text: 'Vulnerability Patch Tracking' },
        { included: true, text: 'PDPA Compliance Audit' },
        { included: true, text: 'Up to 50 PCs' },
        { included: true, text: 'Weekly Reports' },
        { included: false, text: '24/7 Monitoring' },
        { included: false, text: 'Custom API Integration' },
      ],
      target: 'Growing SMEs (11-50 PCs)',
      popular: true
    },
    {
      name: 'The Fortress',
      price: { monthly: 1200, yearly: 11500 },
      description: 'Enterprise-grade security for industrial SMEs',
      color: 'amber',
      features: [
        { included: true, text: 'Everything in Guardian' },
        { included: true, text: '24/7 Security Monitoring' },
        { included: true, text: 'Priority Response Team' },
        { included: true, text: 'Custom API Integration' },
        { included: true, text: 'Unlimited PCs' },
        { included: true, text: 'Daily Executive Reports' },
        { included: true, text: 'Dedicated Account Manager' },
        { included: true, text: 'On-site Support Available' },
      ],
      target: 'Large SME/Industrial (50+ PCs)',
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: 'One-Time Deep Audit',
      price: 5000,
      description: 'Comprehensive security assessment for official certification',
      features: ['Full System Analysis', 'Compliance Report', 'Remediation Plan', 'Certification Support']
    },
    {
      name: 'Employee Training',
      price: 1500,
      description: 'Phishing awareness and cybersecurity training',
      features: ['4-Hour Workshop', 'Simulated Attacks', 'Certificates', 'Follow-up Assessment']
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Plan Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Protection Level
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three tiers designed to match your business size and security needs
            </p>
          </div>

          <div className="space-y-12">
            {planDetails.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-${plan.color}-500/30 shadow-2xl hover:shadow-${plan.color}-500/20 transition-all max-w-4xl mx-auto`}
>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-48 lg:h-auto overflow-hidden">
                    <img 
                      src={plan.image} 
                      alt={plan.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-${plan.color}-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-${plan.color}-400 border border-${plan.color}-500/30`}>
                        {plan.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className={`text-${plan.color}-400 text-base font-semibold mb-3`}>{plan.tagline}</p>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{plan.description}</p>
  
                      <div>
                        <h4 className="text-white font-bold mb-2 text-sm">Best For:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {plan.bestFor.map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className={`w-1.5 h-1.5 bg-${plan.color}-500 rounded-full`}></div>
                              <span className="text-gray-400 text-xs">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Tables Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Designed for Penang's market with competitive rates in Ringgit Malaysia
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-800 rounded-full p-1 mb-8 border border-gray-700">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly <span className="text-green-400 text-sm ml-2">(Save 20%)</span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all shadow-xl hover:shadow-2xl ${
                plan.popular 
                  ? 'border-purple-500 ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900' 
                  : 'border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                  MOST POPULAR
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700`}></div>

              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm border border-gray-600">
                    {plan.target}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-white">RM</span>
                    <span className="text-5xl font-bold text-white ml-2">
                      {plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-400 ml-2 mb-1">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-green-400 text-sm font-semibold mt-2">
                      💰 Save RM {plan.price.monthly * 12 - plan.price.yearly} annually!
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-600 mr-3 flex-shrink-0" />
                      )}
                      <span className={`${!feature.included ? 'text-gray-600' : 'text-gray-300'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-blue-500/30"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-400">RM {service.price}</div>
                    <div className="text-sm text-gray-500">One-time fee</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Plan Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-4 font-semibold text-gray-300">Feature</th>
                    {plans.map((plan, index) => (
                      <th key={index} className="text-center py-4 font-semibold text-gray-300">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Automated Scanning',
                    'Real-time Dashboard',
                    'Compliance Audit',
                    '24/7 Monitoring',
                    'Priority Support',
                    'Custom API',
                    'Maximum PCs',
                    'Monthly Reports',
                  ].map((feature, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-gray-700/50 hover:bg-gray-800/50">
                      <td className="py-4 text-gray-300">{feature}</td>
                      {plans.map((plan, colIndex) => (
                        <td key={colIndex} className="text-center py-4 text-gray-400">
                          {(() => {
                            const planFeatures = [
                              ['✓', '✓', '✓'],
                              ['✗', '✓', '✓'],
                              ['✗', '✓', '✓'],
                              ['✗', '✗', '✓'],
                              ['✗', '✗', '✓'],
                              ['✗', '✗', '✓'],
                              ['10', '50', 'Unlimited'],
                              ['Basic', 'Detailed', 'Executive'],
                            ];
                            return planFeatures[rowIndex][colIndex];
                          })()}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Need Custom Enterprise Solution?</h3>
            <p className="text-xl mb-6 opacity-90">
              Contact us for tailored security packages for large organizations.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Enterprise Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;