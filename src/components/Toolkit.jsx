import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ParticleHeading from './ParticleHeading';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'C++', level: 90, color: '#00599C', desc: 'High-performance compiled language used for competitive programming.' },
      { name: 'Java', level: 80, color: '#007396', desc: 'Object-oriented language used for enterprise applications and DSA.' },
      { name: 'JavaScript', level: 95, color: '#F7DF1E', desc: 'Core language of the web, used for dynamic and interactive frontends.' },
      { name: 'PHP', level: 70, color: '#777BB4', desc: 'Server-side scripting language for web development.' },
      { name: 'HTML5', level: 95, color: '#E34F26', desc: 'Standard markup language for creating web pages.' },
      { name: 'CSS3', level: 90, color: '#1572B6', desc: 'Style sheet language used for designing web page layouts.' },
      { name: 'SQL', level: 85, color: '#4479A1', desc: 'Domain-specific language used for managing databases.' },
      { name: 'Python', level: 80, color: '#3776AB', desc: 'Versatile language known for its readability and extensive libraries.' }
    ]
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React.js', level: 90, color: '#61DAFB', desc: 'Library for building user interfaces with dynamic responsive components.' },
      { name: 'Node.js', level: 85, color: '#339933', desc: 'JavaScript runtime built on V8 engine for scalable server-side code.' },
      { name: 'Express.js', level: 80, color: '#ffffff', desc: 'Minimal and flexible Node.js web application framework.' },
      { name: 'Tailwind CSS', level: 95, color: '#06B6D4', desc: 'Utility-first CSS framework for rapid and highly customizable UI development.' },
      { name: 'STL', level: 85, color: '#00599C', desc: 'Standard Template Library containing algorithms and data structures.' }
    ]
  },
  {
    category: 'Tools / Platforms',
    items: [
      { name: 'Git', level: 90, color: '#F05032', desc: 'Distributed version control system for tracking source code changes.' },
      { name: 'GitHub', level: 90, color: '#ffffff', desc: 'Platform for version control and collaborative software development.' },
      { name: 'VS Code', level: 95, color: '#007ACC', desc: 'Streamlined, feature-rich code editor with debugging and extensions.' },
      { name: 'Linux', level: 80, color: '#FCC624', desc: 'Open-source kernel and operating system used in server environments.' }
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Adaptive Learner', level: 95, color: '#A855F7', desc: 'Ability to quickly grasp new concepts and adapt to new technologies.' },
      { name: 'Team Collaboration', level: 90, color: '#3B82F6', desc: 'Working effectively with others to achieve shared team goals.' },
      { name: 'Creativity', level: 90, color: '#EC4899', desc: 'Generating innovative ideas and problem-solving approaches.' }
    ]
  }
];

const SkillItem = ({ item, index }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div 
      className="flex flex-col gap-2 relative group cursor-help p-4 -mx-4 rounded-xl transition-all hover:bg-brand-800/30"
      style={{
        boxShadow: isHovered ? `0 0 40px ${item.color}0D` : 'none'
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Metallic Shine Mask */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.08) 0%, transparent 60%)`
        }}
      />
      
      <div className="flex justify-between text-sm relative z-10 transition-colors duration-300" style={{ color: isHovered ? item.color : '' }}>
        <span className="text-brand-300 font-medium group-hover:text-inherit">{item.name}</span>
        <span className="text-brand-500 font-medium group-hover:text-inherit/80">{item.level}%</span>
      </div>
      <div className="w-full h-2 bg-brand-900/50 rounded-full overflow-hidden border border-brand-800/50 relative z-10">
        <motion.div 
          className="h-full rounded-full transition-all duration-500 bg-brand-700/30"
          style={{
            backgroundColor: isHovered ? item.color : '',
            boxShadow: isHovered ? `0 0 15px ${item.color}4D` : 'none'
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${item.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 + (index * 0.1), ease: "easeOut" }}
        />
      </div>
      
      {/* Tooltip */}
      <div 
        className={`absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+0.5rem)] w-48 sm:w-64 p-3 bg-brand-800/95 backdrop-blur-md border border-brand-700/50 rounded-lg shadow-xl z-20 text-xs text-brand-100 leading-relaxed pointer-events-none transition-all duration-300 ${isHovered ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'} text-center`}
      >
        <span className="block font-bold text-white mb-1">{item.name}</span>
        {item.desc}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-800 border-b border-r border-brand-700/50 transform rotate-45"></div>
      </div>
    </motion.div>
  );
};

const Toolkit = () => {
  return (
    <section id="toolkit" className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-800">
      <div className="max-w-6xl mx-auto w-full">
        <ParticleHeading
          text="My Toolkit"
          as="h3"
          className="text-sm font-bold mb-14 tracking-wide uppercase text-brand-300"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-brand-50 font-serif font-bold text-2xl mb-8">{skillGroup.category}</h4>
              <div className="flex flex-col gap-6">
                {skillGroup.items.map((item, i) => (
                  <SkillItem key={i} item={item} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
