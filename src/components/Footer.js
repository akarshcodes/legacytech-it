import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Mail, Phone, MapPin, 
  Facebook, Linkedin, Instagram,
  Send, ChevronUp
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message! We'll contact you soon.`);
    setEmail('');
    setMessage('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">LegacyShield</span>
              <span className="text-sm font-semibold text-blue-400">IT</span>
            </div>
            <p className="text-gray-300 mb-6">
              Securing Penang's legacy through proactive cybersecurity solutions for SMEs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">
                  Level 23, Hunza Towers,<br />
                  Bayan Lepas, 11000 Penang
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+604-123 4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">info@legacyshield.my</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Pricing', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'SentryNode OS Monitor',
                'Phish-Risk Indexing',
                'Compliance Auditing',
                'Vulnerability Dashboard',
                '24/7 Monitoring',
                'Employee Training'
              ].map((service) => (
                <li key={service} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows="3"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-6 mb-8">
            {/* Social Media */}
            <div className="flex space-x-6">
              {[
                { icon: Facebook, label: 'Facebook', color: 'blue-600',  url: 'https://facebook.com'},
                { icon: Linkedin, label: 'LinkedIn', color: 'blue-700', url: 'https://linkedin.com' },
                { icon: Instagram, label: 'Instagram', color: 'pink-600', url: 'https://instagram.com' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`bg-gray-800 p-2 rounded-lg hover:bg-${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Certifications & Operating Hours */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-3">
                <span className="text-sm text-gray-400">Certified By:</span>
                <div className="flex items-center space-x-2">
                  <div className="px-3 py-1 bg-gray-800 rounded text-xs">MCMC</div>
                  <div className="px-3 py-1 bg-gray-800 rounded text-xs">ISO 27001</div>
                  <div className="px-3 py-1 bg-gray-800 rounded text-xs">PDPA</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-700"></div>
              <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-2">
                <span className="text-sm text-gray-400">Operating Hours:</span>
                <span className="text-sm">Mon-Fri: 9AM-6PM • Sat: 9AM-1PM</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ChevronUp className="h-5 w-5" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-center text-sm border-t border-gray-800 pt-8">
            <p>© 2026 LegacyShield IT Sdn Bhd. All rights reserved.</p>
            <p className="mt-1">Company Registration: 20260123456-X</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;