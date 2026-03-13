import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ParticleHeading from './ParticleHeading';

const experience = [
  {
    role: 'Creative Graphic Designer',
    company: 'STEPS Management Services',
    date: 'Jul 2024 - Jan 2025',
    description: 'Designed and contributed creative graphical assets, enhancing visual communication and marketing efforts.',
    link: 'https://drive.google.com/drive/folders/1hKNuho9KFhvCWGKwLoUexlo-1Jd-cnjC'
  }
];

const ExperienceItem = ({ item, index }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div 
      className="flex flex-col py-10 px-8 -mx-8 rounded-3xl border-b border-brand-800/50 group transition-all hover:bg-brand-800/30 hover:shadow-[0_0_60px_rgba(6,182,212,0.05)] hover:border-brand-700/50 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
    >
      {/* Metallic Shine Mask */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.07) 0%, transparent 60%)`
        }}
      />

      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2 sm:mb-0">
          <span className="text-brand-400 text-sm w-32 shrink-0">{item.date}</span>
          <span className="text-brand-50 text-base md:text-lg font-medium group-hover:text-white transition-colors">
            {item.role}
          </span>
        </div>
        <span className="text-brand-300 text-sm italic font-serif group-hover:text-brand-100 transition-colors">
          {item.company}
        </span>
      </div>
      
      {item.description && (
        <p className="text-brand-300 text-sm leading-relaxed mb-4 sm:ml-[9.5rem] max-w-2xl relative z-10">
          {item.description}
        </p>
      )}
      
      {item.link && (
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="sm:ml-[9.5rem] w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-800 bg-brand-900/50 text-sm text-brand-300 hover:text-brand-50 hover:border-brand-600 transition-all font-medium relative z-10"
        >
          View Certificate
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      )}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-800">
      <div className="max-w-6xl mx-auto w-full">
        <ParticleHeading
          text="Work Experience"
          as="h3"
          className="text-sm font-bold mb-14 tracking-wide uppercase text-brand-300"
        />

        <div className="space-y-6">
          {experience.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
