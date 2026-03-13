import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['About', 'Toolkit', 'Work', 'Certifications', 'Experience', 'Education', 'Contact'];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-brand-900/60 backdrop-blur-xl border-b border-brand-800/50 py-3' : 'bg-transparent py-6'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center text-brand-50 font-serif text-xl border border-brand-700">
          N
        </div>
        <div>
          <h2 className="text-sm font-medium text-brand-50">Nikhil Kumar Yadav</h2>
          <p className="text-xs text-brand-400 font-medium">Software Engineer</p>
        </div>
      </div>

      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 px-6 py-2 rounded-full border border-brand-800/50 bg-brand-900/40 backdrop-blur-md">
        {menuItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-brand-300 hover:text-brand-50 transition-colors">
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a 
          href="/Nikhil_Kumar_Yadav_Resume.pdf" 
          target="_blank" 
          rel="noreferrer"
          className="hidden lg:flex text-sm font-medium text-brand-300 hover:text-brand-50 transition-colors items-center gap-2"
        >
          View Resume
        </a>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-800 bg-brand-900/40 backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
          <span className="text-[10px] uppercase tracking-wider font-bold text-brand-300">Available</span>
        </div>
        
        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-50 hover:bg-brand-800 rounded-full transition-colors z-[60]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-[100%] left-0 right-0 bg-brand-900/95 backdrop-blur-2xl border-b border-brand-800/50 py-8 px-6"
          >
            <nav className="flex flex-col gap-6 items-center">
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-brand-300 hover:text-brand-50 transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="w-full h-px bg-brand-800 my-2" />
              <a 
                href="/Nikhil_Kumar_Yadav_Resume.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-medium text-brand-300 flex items-center gap-2"
              >
                View Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
