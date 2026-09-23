import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

interface GeplerLogoProps {
  className?: string;
  variant?: 'full' | 'body';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  alt?: string;
  themeOverride?: 'dark' | 'light';
}

export const GeplerLogo: React.FC<GeplerLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  alt = 'Gepler Industrial',
  themeOverride,
}) => {
  // Try to read theme from context safely
  let currentTheme: 'dark' | 'light' = 'light';
  try {
    const themeContext = useTheme();
    currentTheme = themeOverride || themeContext.theme;
  } catch {
    currentTheme = themeOverride || 'light';
  }

  const fullSizes = {
    sm: 'h-8 md:h-9 w-auto',
    md: 'h-10 md:h-12 w-auto',
    lg: 'h-14 md:h-16 w-auto',
    hero: 'h-16 md:h-20 w-auto',
  };

  const bodySizes = {
    sm: 'h-8 w-auto',
    md: 'h-11 w-auto',
    lg: 'h-16 w-auto',
    hero: 'w-48 sm:w-60 h-auto',
  };

  // Select image based on variant and active theme
  const src =
    variant === 'body'
      ? '/assets/logo-Gepler-body-1.png?v=3'
      : currentTheme === 'light'
      ? '/assets/logo-Gepler-full-1-dark.png'
      : '/assets/logo-Gepler-full-1.png?v=3';

  const sizeClass = variant === 'body' ? bodySizes[size] : fullSizes[size];

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain transition-all duration-200 select-none ${sizeClass} ${className}`}
      loading="eager"
    />
  );
};
