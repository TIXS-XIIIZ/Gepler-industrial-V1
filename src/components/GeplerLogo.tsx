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

  // Logo asset specifications:
  // - Icon logo: /assets/New-logo-gepler-final.jpeg (rendered via /assets/New-logo-gepler-final.png with clean transparency)
  // - Label: /assets/logo-Gepler-label.png (dark mode white text) / /assets/logo-Gepler-label-dark.png (light mode dark text)
  const iconLogoSrc = '/assets/New-logo-gepler-final.png';
  const labelLogoSrc = isDark
    ? '/assets/logo-Gepler-label.png'
    : '/assets/logo-Gepler-label-dark.png';

  const fullSizes = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9 md:h-10',
    lg: 'h-11 sm:h-12 md:h-14',
    hero: 'h-14 sm:h-16 md:h-20',
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
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${fullSizes[size]} ${className}`}>
      <img
        src={iconLogoSrc}
        alt=""
        aria-hidden="true"
        className="h-full w-auto object-contain select-none shrink-0"
        loading="eager"
        decoding="async"
      />
      <img
        src={labelLogoSrc}
        alt={alt}
        className="h-[56%] sm:h-[58%] w-auto object-contain select-none shrink-0 transition-opacity duration-200"
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
