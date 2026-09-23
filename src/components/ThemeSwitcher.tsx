import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext.tsx';

interface ThemeSwitcherProps {
  className?: string;
  variant?: 'button' | 'segmented';
  showLabel?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  className = '',
  variant = 'button',
  showLabel = false,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'segmented') {
    return (
      <div
        role="group"
        aria-label="เลือกธีมการแสดงผล"
        className={`inline-flex items-center p-1 rounded-sm border transition-colors ${
          isDark
            ? 'bg-[#151515] border-[#2E2E2E]'
            : 'bg-[#EDE9E0] border-[#D6D0C4]'
        } ${className}`}
      >
        <button
          type="button"
          onClick={() => isDark && toggleTheme()}
          aria-pressed={!isDark}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold transition-all rounded-[2px] cursor-pointer ${
            !isDark
              ? 'bg-[#FFFFFF] text-[#111111] shadow-sm'
              : 'text-[#888888] hover:text-white'
          }`}
        >
          <Sun className="w-3.5 h-3.5 text-[#F26A21]" />
          <span>Light</span>
        </button>
        <button
          type="button"
          onClick={() => !isDark && toggleTheme()}
          aria-pressed={isDark}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold transition-all rounded-[2px] cursor-pointer ${
            isDark
              ? 'bg-[#262626] text-white shadow-sm'
              : 'text-[#666666] hover:text-[#111111]'
          }`}
        >
          <Moon className="w-3.5 h-3.5 text-[#FFC928]" />
          <span>Dark</span>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'สลับเป็นโหมดสว่าง (Light mode)' : 'สลับเป็นโหมดมืด (Dark mode)'}
      title={isDark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด'}
      onClick={toggleTheme}
      className={`group relative inline-flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] border transition-all duration-200 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] ${
        isDark
          ? 'border-[#353535] bg-[#141414]/90 text-[#D5D5D5] hover:border-[#F26A21] hover:text-white hover:bg-[#1A1A1A]'
          : 'border-[#D4CEBF] bg-[#FFFFFF]/90 text-[#2B2823] hover:border-[#F26A21] hover:text-[#111111] hover:bg-[#F4F1EA]'
      } ${className}`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="text-[#FFC928]"
            >
              <Moon className="w-4 h-4" />
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="text-[#F26A21]"
            >
              <Sun className="w-4 h-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="whitespace-nowrap">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}

      {/* Subtle indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isDark ? 'bg-[#FFC928]' : 'bg-[#F26A21]'
        }`}
        aria-hidden="true"
      />
    </button>
  );
};
