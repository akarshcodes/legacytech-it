import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Zap, Crown, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const scrollToComparison = () => {
    document.getElementById('plan-comparison')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchase = () => {
    alert("Thanks for purchasing!");
  };

  const colorVariants = {
    blue: {
      border: 'border-gray-600 hover:border-blue-500', 
      shadow: 'hover:shadow-blue-500/20',
      iconBg: 'bg-blue-500/20',
      iconText: 'text-blue-400',
      dot: 'bg-blue-500',
      title: 'text-blue-400',
      btn: 'bg-white text-blue-600 hover:bg-gray-100' // Kept for 'Learn More' buttons
    },
    purple: {
      border: 'border-gray-600 hover:border-purple-500',
      shadow: 'hover:shadow-purple-500/20',
      iconBg: 'bg-purple-500/20',
      iconText: 'text-purple-400',
      dot: 'bg-purple-500',
      title: 'text-purple-400',
      btn: 'bg-white text-purple-600 hover:bg-gray-100'
    },
    yellow: {
      border: 'border-gray-600 hover:border-yellow-500',
      shadow: 'hover:shadow-yellow-500/20',
      iconBg: 'bg-yellow-500/20',
      iconText: 'text-yellow-400',
      dot: 'bg-yellow-500',
      title: 'text-yellow-400',
      btn: 'bg-white text-yellow-600 hover:bg-gray-100'
    }
  };

  const planDetails = [
    {
      name: 'The Sentinel',
      icon: <Shield className="h-12 w-12" />,
      tagline: 'Essential protection for small family businesses',
      description: 'The perfect entry-level solution designed specifically for startups, home offices, and small family-run businesses. The Sentinel provides essential, automated monitoring to keep your basic IT infrastructure safe from common threats without overwhelming you with complex tools. It acts as your silent digital security guard, ensuring your foundational systems remain secure and up-to-date.',
      image:'/images/sentinel.png',
      color: 'blue',
      bestFor: ['1-10 employees', 'Single office location', 'Basic IT infrastructure', 'Limited budget']
    },
    {
      name: 'The Guardian',
      icon: <Zap className="h-12 w-12" />,
      tagline: 'Comprehensive protection for growing SMEs',
      description: 'A robust security suite tailored for expanding businesses that handle customer data and require regulatory compliance. The Guardian steps up protection with real-time vulnerability tracking, advanced dashboard analytics, and specialized PDPA compliance auditing. It bridges the gap between basic safety and enterprise-grade security, ensuring your growth is never compromised by cyber risks.',
      image: '/images/guardian.png',
      color: 'purple',
      bestFor: ['11-50 employees', 'Multiple locations', 'Growing IT needs', 'Compliance requirements']
    },
    {
      name: 'The Fortress',
      icon: <Crown className="h-12 w-12" />,
      tagline: 'Enterprise-grade security for industrial SMEs',
      description: 'The ultimate, all-encompassing security fortress for large-scale industrial operations and established enterprises. This premium tier offers 24/7 dedicated monitoring, priority incident response, and fully customized API integrations. Designed for mission-critical environments, The Fortress ensures maximum resilience, minimizing downtime and protecting your reputation against sophisticated cyber attacks.',
      image: '/images/fortress.png',
      color: 'yellow', 
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
      color: 'yellow',
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
      description: 'Security assessment for official certification',
      features: ['Full System Analysis', 'Compliance Report', 'Remediation Plan', 'Certification Support'],
      color: 'blue'
    },
    {
      name: 'Employee Training',
      price: 1500,
      description: 'Phishing awareness and cybersecurity training',
      features: ['4-Hour Workshop', 'Simulated Attacks', 'Certificates', 'Follow-up Assessment'],
      color: 'purple'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Choose Your Protection Level (Plan Details) */}
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
            {planDetails.map((plan, index) => {
              const styles = colorVariants[plan.color];
              
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 ${styles.border} shadow-2xl ${styles.shadow} transition-all max-w-4xl mx-auto`}
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative h-48 lg:h-auto overflow-hidden">
                    <div className={`absolute inset-0 bg-${plan.color}-900/50 flex items-center justify-center`}>
                        <img 
                        src={plan.image} 
                        alt={plan.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-gray-800');
                            e.target.parentElement.innerHTML = `<div class="text-gray-500 font-bold text-xl">${plan.name} Image</div>`;
                        }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 ${styles.iconBg} backdrop-blur-sm rounded-xl flex items-center justify-center ${styles.iconText} border ${styles.border}`}>
                        {plan.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className={`${styles.title} text-base font-semibold mb-3`}>{plan.tagline}</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{plan.description}</p>
    
                        <div>
                            <h4 className="text-white font-bold mb-2 text-sm">Best For:</h4>
                            <div className="grid grid-cols-2 gap-2 mb-6">
                            {plan.bestFor.map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                <div className={`w-1.5 h-1.5 ${styles.dot} rounded-full`}></div>
                                <span className="text-gray-400 text-xs">{item}</span>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={scrollToComparison}
                        className={`w-full py-3 rounded-lg font-semibold transition-colors shadow-md ${styles.btn} flex items-center justify-center group`}
                    >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </motion.div>

        {/* 2. Comparison Plan */}
        <motion.div
          id="plan-comparison" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-700 mb-20"
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

        {/* 3. Pricing Details */}
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

        {/* Pricing Cards Grid with Buy Now Button */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => {
            //  const styles = colorVariants[plan.color];
             return (
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
                  : 'border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
                  MOST POPULAR
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r from-${plan.color === 'yellow' ? 'yellow' : plan.color}-500 to-${plan.color === 'yellow' ? 'yellow' : plan.color}-700`}></div>

              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col h-full">
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
                <div className="space-y-3 mb-8 flex-grow">
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

                {/* Buy Now Button */}
                <button
                  onClick={handlePurchase}
                  className="w-full py-3 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          )})}
        </div>

        {/* 4. Additional Services */}
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
            {additionalServices.map((service, index) => {
              const styles = colorVariants[service.color];
              
              return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border-2 ${styles.border} ${styles.shadow}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{service.name}</h4>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold ${styles.title}`}>RM {service.price}</div>
                    <div className="text-sm text-gray-500">One-time fee</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-2 h-2 ${styles.dot} rounded-full mr-3`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                {/* Buy Now Button */}
                <button 
                  onClick={handlePurchase}
                  className="w-full py-3 font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl active:scale-95"
                >
                  Buy Now
                </button>
              </motion.div>
            );
            })}
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
              onClick={scrollToContact}
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