import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Shield, Volume2, VolumeX } from 'lucide-react';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const scrollToServices = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      // Toggle the muted property on the DOM element
      videoRef.current.muted = !isMuted;
      // Update React state to reflect the change
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image - Restored */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: 'url(/images/hero-bg.jpg)',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/80 to-purple-900/90"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo/Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Securing Penang's Legacy
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto font-light"
            >
              Proactive Protection Against Aging Technology
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
            >
              {[
                { value: '99%', label: 'Threat Detection' },
                { value: '500+', label: 'SMEs Protected' },
                { value: '24/7', label: 'Monitoring' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToServices}
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Shield className="mr-3 h-6 w-6" />
                  Secure My Network
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Certified by MCMC</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">PDPA Protected</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 right-20 z-10"
        >
          <div className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full ml-auto mr-0">
            <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Promotion Video Section */}
      <section className="relative w-full bg-gray-900 border-t border-gray-800 group">
        <video 
          ref={videoRef}
          className="w-full h-auto block"
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
        >
          <source src="/images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Mute/Unmute Button Overlay */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-8 right-8 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-sm transition-all z-10 flex items-center space-x-2"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          <span className="text-sm font-medium pr-2">{isMuted ? "Unmute" : "Mute"}</span>
        </button>
      </section>
    </>
  );
};

export default Hero;