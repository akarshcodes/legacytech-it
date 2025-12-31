import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, XCircle, Loader } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    plan: 'sentinel'
  });
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Message sent successfully! We will contact you within 24 hours.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          plan: 'sentinel'
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false, message: '' });
        }, 5000);
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: error.message || 'An error occurred. Please try again.'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8"
    >
      <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Get Your Free Security Audit
      </h3>

      {status.success && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
        >
          <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
          <div>
            <p className="text-green-800 font-semibold">Success!</p>
            <p className="text-green-600 text-sm">{status.message}</p>
          </div>
        </motion.div>
      )}

      {status.error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
        >
          <XCircle className="h-6 w-6 text-red-600 mr-3 flex-shrink-0" />
          <div>
            <p className="text-red-800 font-semibold">Error</p>
            <p className="text-red-600 text-sm">{status.message}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Ahmad Faizal"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="contact@yourcompany.my"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your Sdn Bhd"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="+604-123 4567"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interested Plan
          </label>
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          >
            <option value="sentinel">The Sentinel (RM 99/month)</option>
            <option value="guardian">The Guardian (RM 499/month)</option>
            <option value="fortress">The Fortress (RM 1,200+/month)</option>
            <option value="audit">One-Time Deep Audit Only</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Tell us about your cybersecurity concerns..."
          />
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <input
            type="checkbox"
            id="privacy"
            required
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3"
          />
          <label htmlFor="privacy">
            I agree to the privacy policy and terms of service. I understand that my data will be processed according to PDPA Malaysia.
          </label>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all flex items-center justify-center ${
            status.loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-xl'
          }`}
        >
          {status.loading ? (
            <>
              <Loader className="h-5 w-5 mr-3 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-5 w-5 mr-3" />
              Request Free Audit
            </>
          )}
        </button>

        <p className="text-center text-sm text-gray-500">
          ⏱️ Takes 2 minutes • No credit card required • Results in 24 hours
        </p>
      </form>
    </motion.div>
  );
};

export default ContactForm;