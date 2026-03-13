import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiJavascript, 
  SiPython, 
  SiCplusplus, 
  SiHtml5, 
  SiCss, 
  SiGit, 
  SiExpress,
  SiVite
} from 'react-icons/si';

const ICONS = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiVite, name: 'Vite', color: '#646CFF' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiExpress, name: 'Express', color: '#ffffff' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiCplusplus, name: 'C++', color: '#00599C' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss, name: 'CSS3', color: '#1572B6' },
  { icon: SiGit, name: 'Git', color: '#F05032' }
];

const ToolkitMarquee = () => {
  return (
    <section className="py-12 border-t border-brand-800 bg-brand-900/10 overflow-hidden relative flex items-center">
      {/* Gradient Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex gap-16 whitespace-nowrap pl-16 items-center"
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
      >
        {/* Double the array for seamless infinite scroll effect */}
        {[...ICONS, ...ICONS, ...ICONS].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-3 text-brand-300 transition-all duration-300 group cursor-default">
              <Icon 
                className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-all duration-300" 
                style={{ color: 'inherit' }}
                onMouseEnter={(e) => e.currentTarget.style.color = item.color}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              />
              <span 
                className="font-serif text-lg tracking-wider opacity-40 group-hover:opacity-100 transition-all duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = item.color}
                onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ToolkitMarquee;
