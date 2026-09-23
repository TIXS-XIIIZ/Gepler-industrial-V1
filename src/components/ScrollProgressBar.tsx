import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useTheme } from '../context/ThemeContext.tsx';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { isDark } = useTheme();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none transition-colors ${
        isDark ? 'bg-black/40' : 'bg-black/10'
      }`}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#F26A21] via-[#FFC928] to-[#F26A21] origin-left shadow-[0_0_12px_rgba(242,106,33,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
};
