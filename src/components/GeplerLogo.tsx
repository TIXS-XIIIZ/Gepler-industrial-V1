import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

interface GeplerLogoProps {
  className?: string;
  variant?: 'full' | 'body';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  alt?: string;
}

export const GeplerLogo: React.FC<GeplerLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  alt = 'Gepler Industrial',
}) => {
  const { isDark } = useTheme();

  // Full logo asset selection based on theme:
  // - Light theme: /assets/logo-Gepler-full-1-dark.png (dark text/elements on light background)
  // - Dark theme: /assets/logo-Gepler-full-1.png (light text/elements on dark background)
  // Icon logo asset:
  // - /assets/logo-Gepler-body-1.png (works for all themes)
  const fullLogoSrc = isDark
    ? '/assets/logo-Gepler-full-1.png'
    : '/assets/logo-Gepler-full-1-dark.png';

  const iconLogoSrc = '/assets/logo-Gepler-body-1.png';

  const fullSizes = {
    sm: 'h-7 sm:h-8 w-auto',
    md: 'h-8 sm:h-9 md:h-10 w-auto',
    lg: 'h-11 sm:h-12 md:h-14 w-auto',
    hero: 'h-14 sm:h-16 md:h-20 w-auto',
  };

  const bodySizes = {
    sm: 'h-7 sm:h-8 w-auto',
    md: 'h-9 sm:h-10 md:h-11 w-auto',
    lg: 'h-12 sm:h-14 md:h-16 w-auto',
    hero: 'w-44 sm:w-56 md:w-64 h-auto max-h-[260px]',
  };

  if (variant === 'body') {
    return (
      <img
        src={iconLogoSrc}
        alt={alt}
        className={`object-contain select-none transition-transform duration-200 ${bodySizes[size]} ${className}`}
        loading="eager"
        decoding="async"
      />
    );
  }

  return (
    <img
      src={fullLogoSrc}
      alt={alt}
      className={`object-contain select-none transition-opacity duration-200 ${fullSizes[size]} ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
