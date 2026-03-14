import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolkitMarquee from './components/ToolkitMarquee';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Toolkit from './components/Toolkit';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import NikhilSignatureLoader from './components/NikhilSignatureLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-brand-900 min-h-screen text-brand-50 font-sans selection:bg-brand-50 selection:text-brand-900">
      <AnimatePresence mode="wait">
        {isLoading && <NikhilSignatureLoader key="loader" />}
      </AnimatePresence>

      <Header />
      
      <main className="pt-24 md:pt-32">
        <Hero />
        <ToolkitMarquee />
        <Toolkit />
        <Projects />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
