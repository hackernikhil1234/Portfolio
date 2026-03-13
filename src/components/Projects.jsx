import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ParticleHeading from './ParticleHeading';

const projects = [
  {
    title: 'The Quality Pulse',
    date: 'Dec 2025',
    description: 'Real-time construction quality assurance system built with React, Node.js, and MongoDB.',
    metrics: ['40% data throughput', '99.9% reliability', '30% reduced delays'],
    link: 'https://github.com/hackernikhil1234/The-Quality-Pulse',
    image: '/images/project1.png'
  },
  {
    title: 'Music Streaming Website',
    date: 'Jun 2025',
    description: 'Personalized mood-based streaming platform with recommendation algorithm.',
    metrics: ['35% session increase', '25% reduced latency'],
    link: 'https://github.com/hackernikhil1234/Music-Recommendation-System-',
    image: '/images/project2.png'
  },
  {
    title: 'Frequency Counter',
    date: 'Apr 2025',
    description: 'High-speed algorithmic solution in C++ to compute maximum-frequency elements.',
    metrics: ['O(n) performance', '45% runtime improvement'],
    link: 'https://github.com/hackernikhil1234/Frequency-counter',
    image: '/images/project3.png'
  },
  {
    title: 'ZipZap',
    date: 'Recent',
    description: 'A fun visual web tool demonstrating data compression (RLE & Base64) with animations.',
    metrics: ['HTML/Tailwind/JS', 'Run-Length Encoding', 'Visual AI Assistant'],
    link: 'https://github.com/hackernikhil1234/Data-Compression-and-Decompression',
    image: '/images/project4.png'
  },
  {
    title: 'Smart Task Manager',
    date: 'Recent',
    description: 'Dynamic load balancer extension for multiprocessor real-time task distribution and profiling.',
    metrics: ['Python 3.7+', 'Predictive Balancing', 'psutil'],
    link: 'https://github.com/hackernikhil1234/Real-time-Process-Monitoring-Dashboard-',
    image: '/images/project5.png'
  },
  {
    title: 'Home Energy Saver ChatBot',
    date: 'Recent',
    description: 'Intelligent AI-powered chatbot to monitor, analyze, and reduce home electricity consumption.',
    metrics: ['Rule-Based AI', 'IoT Ready', 'Tailwind CSS'],
    link: 'https://github.com/hackernikhil1234/Home-energy-saver-ChatBot',
    image: '/images/project6.png'
  }
];

const ProjectCard = ({ project, index }) => {
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
      className="group relative flex flex-col p-6 rounded-3xl border border-brand-800/50 bg-brand-900/20 backdrop-blur-sm transition-all hover:bg-brand-800/40 hover:border-brand-700 hover:shadow-[0_20px_60px_rgba(6,182,212,0.1)] cursor-pointer overflow-hidden"
      whileHover={{ 
        scale: 1.03,
        y: -10,
        rotateX: 2, 
        rotateY: -2,
        z: 20
      }}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.15 + Math.floor(index / 3) * 0.2 }}
      onMouseMove={handleMouseMove}
    >
      {/* Metallic Shine Mask */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(255,255,255,0.1) 0%, transparent 60%)`
        }}
      />

      <div className="w-full aspect-[4/3] rounded-xl bg-brand-800/50 mb-5 overflow-hidden relative z-10">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90" />
      </div>

      <div className="flex-grow flex flex-col relative z-10">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xl font-serif text-brand-50 mb-2 group-hover:text-white transition-colors">
          {project.title}
          <ArrowUpRight size={18} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
        </a>
        
        <p className="text-brand-300 mb-6 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.metrics.map((metric, i) => (
            <span key={i} className="px-2.5 py-1 rounded-md border border-brand-800 bg-brand-900/50 text-[10px] uppercase tracking-wider text-brand-400 font-medium">
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="relative py-32 px-6 md:px-12 lg:px-24 border-t border-brand-800 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <ParticleHeading
          text="Selected Work"
          className="text-3xl md:text-5xl font-bold mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
