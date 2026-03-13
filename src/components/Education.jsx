import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleHeading from './ParticleHeading';

const education = [
  {
    degree: 'B.Tech - Computer Science',
    institution: 'Lovely Professional University',
    date: 'Aug 2023 - Present',
    score: 'CGPA: 7.6'
  },
  {
    degree: 'Intermediate',
    institution: 'Kendriya Vidyalaya (KV) AMC',
    date: 'Apr 2021 - May 2022',
    score: '80%'
  },
  {
    degree: 'Matriculation',
    institution: 'Kendriya Vidyalaya (KV) AMC',
    date: 'Apr 2019 - May 2020',
    score: '76%'
  }
];

const EducationItem = ({ item, index }) => {
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
      className="flex flex-col sm:flex-row sm:items-center justify-between py-8 px-6 -mx-6 rounded-2xl border-b border-brand-800/50 group transition-all hover:bg-brand-800/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.05)] hover:border-brand-700/50 overflow-hidden relative"
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
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.06) 0%, transparent 60%)`
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2 sm:mb-0 relative z-10">
        <span className="text-brand-400 text-sm w-32 shrink-0">{item.date}</span>
        <span className="text-brand-50 text-base md:text-lg group-hover:text-white transition-colors">
          {item.degree}
        </span>
        <span className="text-brand-500 text-xs px-2 py-1 rounded-md border border-brand-800 mt-1 sm:mt-0 w-fit">
          {item.score}
        </span>
      </div>
      <span className="text-brand-300 text-sm italic font-serif group-hover:text-brand-100 transition-colors relative z-10">
        {item.institution}
      </span>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-800">
      <div className="max-w-6xl mx-auto w-full">
        <ParticleHeading
          text="Education"
          as="h3"
          className="text-sm font-bold mb-14 tracking-wide uppercase text-brand-300"
        />

        <div className="space-y-6">
          {education.map((item, index) => (
            <EducationItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
