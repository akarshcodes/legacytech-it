import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800'
            : 'bg-gray-900 border-b border-transparent' // Using solid dark bg to ensure visibility on white pages
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Shield className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                LegacyShield
              </span>
              <span className="text-sm font-semibold text-gray-400">IT</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-white font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}

              {/* Contact Info */}
              <div className="flex items-center space-x-4 pl-8 border-l border-gray-700">
                <motion.a
                  href="tel:+6041234567"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400"
                >
                  <Phone className="h-4 w-4" />
                  <span>+604-123 4567</span>
                </motion.a>
                <motion.a
                  href="mailto:info@legacyshield.my"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-blue-400"
                >
                  <Mail className="h-4 w-4" />
                  <span>info@legacyshield.my</span>
                </motion.a>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-300 hover:text-white hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800 space-y-3">
                <a href="tel:+6041234567" className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5" />
                  <span>+604-123 4567</span>
                </a>
                <a href="mailto:info@legacyshield.my" className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5" />
                  <span>info@legacyshield.my</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      <div className="h-16 bg-gray-900"></div>
    </>
  );
};

export default Navbar;