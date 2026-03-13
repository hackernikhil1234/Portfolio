import React from 'react';
import { motion } from 'framer-motion';

const ParticleHeading = ({ text, className, as: Component = 'h2' }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: (i) => ({
      opacity: 0,
      x: Math.sin(i * 1234.5) * 200,
      y: -150,
      scale: 0,
      filter: "blur(10px)",
    }),
  };

  // Safe way to create motion component from string or component
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={`font-serif flex flex-wrap text-brand-50 ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default ParticleHeading;
