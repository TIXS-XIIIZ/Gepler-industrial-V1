import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface ThemeSwitcherProps {
  variant?: 'segmented' | 'compact';
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  variant = 'segmented',
  className = '',
}) => {
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  if (variant === 'compact') {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={theme === 'light'}
        aria-label={isDark ? 'สลับเป็นโหมดสว่าง (Light Mode)' : 'สลับเป็นโหมดมืด (Dark Mode)'}
        title={isDark ? 'สลับเป็นโหมดสว่าง' : 'สลับเป็นโหมดมืด'}
        onClick={toggleTheme}
        className={`relative inline-flex items-center justify-center w-9 h-9 transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] ${
          isDark
            ? 'bg-[#151515] hover:bg-[#202020] text-[#D4D4D4] hover:text-white border border-white/15'
            : 'bg-[#ECE8DF] hover:bg-[#E2DDD2] text-[#222222] hover:text-black border border-black/15'
        } ${className}`}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-[#FFC928]" />
          ) : (
            <Sun className="w-4 h-4 text-[#F26A21]" />
          )}
        </motion.div>
      </button>
    );
  }

  // Segmented Industrial Precision Switch
  return (
    <div
      role="group"
      aria-label="ตัวเลือกธีมแสดงผล (Dark / Light Theme)"
      className={`inline-flex items-center p-0.5 transition-colors select-none ${
        isDark
          ? 'bg-[#141414] border border-white/15'
          : 'bg-[#EAE6DD] border border-black/15'
      } ${className}`}
    >
      {/* Dark Mode Button */}
      <button
        type="button"
        role="radio"
        aria-checked={isDark}
        aria-label="เปิดโหมดมืด (Dark Theme)"
        onClick={() => setTheme('dark')}
        className={`relative z-10 flex items-center gap-1.5 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F26A21] ${
          isDark
            ? 'text-white'
            : 'text-[#666666] hover:text-[#111111]'
        }`}
        style={{ fontFamily: 'var(--display)' }}
      >
        {isDark && (
          <motion.div
            layoutId="theme-active-pill"
            className="absolute inset-0 bg-[#252525] border border-white/20 shadow-sm"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1.5">
          <Moon className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-[#FFC928]' : 'text-current'}`} />
          <span className="hidden sm:inline">DARK</span>
        </span>
      </button>

      {/* Light Mode Button */}
      <button
        type="button"
        role="radio"
        aria-checked={!isDark}
        aria-label="เปิดโหมดสว่าง (Light Theme)"
        onClick={() => setTheme('light')}
        className={`relative z-10 flex items-center gap-1.5 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F26A21] ${
          !isDark
            ? 'text-black'
            : 'text-[#888888] hover:text-[#D4D4D4]'
        }`}
        style={{ fontFamily: 'var(--display)' }}
      >
        {!isDark && (
          <motion.div
            layoutId="theme-active-pill"
            className="absolute inset-0 bg-[#FFFFFF] border border-black/15 shadow-sm"
            transition={{ type: 'spring', stiffness: 450, damping: 35 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1.5">
          <Sun className={`w-3.5 h-3.5 transition-colors ${!isDark ? 'text-[#F26A21]' : 'text-current'}`} />
          <span className="hidden sm:inline">LIGHT</span>
        </span>
      </button>
    </div>
  );
};
