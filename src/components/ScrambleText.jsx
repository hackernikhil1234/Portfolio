import { useState, useEffect, useCallback } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const ScrambleText = ({ text, className = "", duration = 1.5, revealSpeed = 0.1 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(true);

  const scramble = useCallback((targetText) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(interval);
        setIsAnimating(false);
      }

      iteration += 1 / 5; // Reveal roughly 1 char every 5 frames (~200ms)
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cleanup = scramble(text);
    return cleanup;
  }, [text, scramble]);

  return (
    <span className={className}>
      {displayText || text}
    </span>
  );
};

export default ScrambleText;
