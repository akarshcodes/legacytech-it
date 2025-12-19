import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle, TrendingUp, Shield, Zap, Globe } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(1);

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
      color: 'red',
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
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Designed for Penang's market with competitive rates in Ringgit Malaysia.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-800 shadow'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-white text-gray-800 shadow'
                  : 'text-gray-600'
              }`}
            >
              Yearly <span className="text-green-500 text-sm">(Save 20%)</span>
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
              onClick={() => setSelectedPlan(index)}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                selectedPlan === index
                  ? `border-${plan.color}-500 shadow-2xl scale-105`
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              } ${plan.popular ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r from-${plan.color}-500 to-${plan.color}-700`}></div>

              <div className="p-8 bg-white">
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    {plan.target}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-800">RM</span>
                    <span className="text-6xl font-bold text-gray-800 ml-2">
                      {plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-500 ml-2 mb-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-green-600 text-sm font-semibold">
                      Save RM {plan.price.monthly * 12 - plan.price.yearly} annually!
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={`${!feature.included ? 'text-gray-400' : 'text-gray-700'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 font-bold rounded-lg transition-all ${
                    selectedPlan === index
                      ? `bg-gradient-to-r from-${plan.color}-600 to-${plan.color}-700 text-white hover:shadow-xl`
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === index ? '✓ Selected Plan' : 'Select Plan'}
                </button>
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
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-blue-100"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{service.name}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">RM {service.price}</div>
                    <div className="text-sm text-gray-500">One-time fee</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Plan Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 font-semibold text-gray-700">Feature</th>
                    {plans.map((plan, index) => (
                      <th key={index} className="text-center py-4 font-semibold text-gray-700">
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
                    <tr key={rowIndex} className="border-b hover:bg-gray-50">
                      <td className="py-4 text-gray-700">{feature}</td>
                      {plans.map((plan, colIndex) => (
                        <td key={colIndex} className="text-center py-4">
                          {(() => {
                            const planFeatures = [
                              ['✓', '✓', '✓'],
                              ['✓', '✓', '✓'],
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
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
              Request Enterprise Quote
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;