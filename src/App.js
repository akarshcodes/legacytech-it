import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';
import './styles/Animations.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Smaller Cursor Follow Effect */}
      <motion.div
        className="fixed w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 pointer-events-none z-0 blur-xl"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />

      <ScrollEffects />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Team />
      <Footer />
    </div>
  );
}

export default App;