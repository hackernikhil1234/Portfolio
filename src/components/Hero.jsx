import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Smartphone } from 'lucide-react';
import ScrambleText from './ScrambleText';

const Hero = () => {
  const [isMoved, setIsMoved] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsMoved(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative min-h-[110vh] px-6 md:px-12 lg:px-24 overflow-hidden pt-32 pb-20">
      
      <div className={`max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start transition-all duration-1000 ${isMoved ? 'justify-between' : 'justify-center min-h-[60vh] md:min-h-[80vh] items-center text-center'}`}>
        
        {/* Left Column: Text Content */}
        <motion.div 
          layout
          className={`relative z-10 transition-all duration-1000 ${isMoved ? 'w-full lg:w-[50%] text-left' : 'w-full max-w-4xl'}`}
        >
          <motion.h1 
            layout="position"
            className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-8 text-brand-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Elevating Digital{' '}
            {!isMoved && (
              <motion.span 
                layoutId="portrait-circle"
                className="inline-block align-middle mx-3 md:mx-5 w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-brand-400/50 p-1 bg-brand-800/30 backdrop-blur-md z-40 transition-shadow duration-1000"
                initial={{ scale: 0, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src="/images/portrait.png" 
                  alt="Nikhil Kumar Yadav" 
                  loading="eager"
                  className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000" 
                />
              </motion.span>
            )}
            <br className="md:hidden" />
            <span className="text-brand-400 block md:inline">
              THROUGH{' '}
              <ScrambleText 
                text="CODE" 
                className="inline" 
              />
            </span>
          </motion.h1>

          <motion.div 
            className={`flex flex-wrap gap-4 mb-12 ${!isMoved ? 'justify-center' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Social Links */}
            <a href="https://www.linkedin.com/in/nikhilkryadav/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-800 bg-brand-900/50 hover:bg-brand-800 transition-colors text-sm text-brand-300 hover:text-brand-50">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/hackernikhil1234/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-800 bg-brand-900/50 hover:bg-brand-800 transition-colors text-sm text-brand-300 hover:text-brand-50">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="mailto:ny186871@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-800 bg-brand-900/50 hover:bg-brand-800 transition-colors text-sm text-brand-300 hover:text-brand-50">
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a href="tel:+919236864106" className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-800 bg-brand-900/50 hover:bg-brand-800 transition-colors text-sm text-brand-300 hover:text-brand-50">
              <Smartphone size={16} />
              <span>Mobile</span>
            </a>
            <a 
              href="/Nikhil_Kumar_Yadav_Resume.pdf" 
              download="Nikhil_Kumar_Yadav_Resume.pdf"
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-brand-50 bg-brand-50 text-brand-900 hover:bg-white transition-colors text-sm font-medium"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Description */}
          <motion.div 
            className={`space-y-6 text-brand-300 text-lg md:text-xl leading-relaxed ${!isMoved ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              Adaptable software engineer with expertise in frontend technologies like React and Tailwind CSS, along with robust backend skills passing data with Node, Express and MongoDB.
            </p>
            <p>
               I focus on creating high-performance, accessible, and visually striking applications tailored for optimal user experience and digital efficiency.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Floating Portrait (only when moved) */}
        <div className={`transition-all duration-1000 ${isMoved ? 'w-full lg:w-[40%] flex justify-center lg:justify-end' : 'w-0 h-0 overflow-hidden opacity-0'}`}>
          {isMoved && (
            <motion.div 
              layoutId="portrait-circle"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-2 border-brand-400/30 p-2 bg-brand-800/20 backdrop-blur-xl shadow-[0_0_100px_rgba(34,211,238,0.15)] z-40 sticky top-32"
              transition={{ type: 'spring', stiffness: 40, damping: 15 }}
            >
              <img src="/images/portrait.png" alt="Nikhil Kumar Yadav" className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-1000" />
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;
