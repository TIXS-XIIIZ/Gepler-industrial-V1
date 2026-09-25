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
  // - Full logo:
  //   Light theme: /assets/gis_no_bk_full.png (black text)
  //   Dark theme: /assets/gis_no_bk_full.png with white text rendering
  // - Icon logo:
  //   /assets/gis_no_bk_body.png (works for all themes)
  const fullLogoSrc = '/assets/gis_no_bk_full.png';
  const iconLogoSrc = '/assets/gis_no_bk_body.png';

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

  // In dark theme, gis_no_bk_full.png has black letters.
  // We provide the crisp white letters version for Theme dark.
  // The emblem on the left has orange/yellow branding which stays intact,
  // and the text turns crisp white via SVG filter or dual rendering.
  return (
    <div className={`relative inline-flex items-center ${fullSizes[size]} ${className}`}>
      {isDark ? (
        <div className="relative inline-flex items-center h-full w-auto">
          {/* Emblem portion (left ~38%) - keeps original orange & yellow tone */}
          <div className="h-full w-auto overflow-hidden flex items-center">
            <img
              src={fullLogoSrc}
              alt={alt}
              className="h-full w-auto max-w-none select-none object-contain pointer-events-none"
              style={{
                clipPath: 'polygon(0 0, 39% 0, 39% 100%, 0 100%)',
              }}
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Text portion (right ~61%) - inverted to crisp pure white */}
          <div className="absolute inset-0 h-full w-full flex items-center">
            <img
              src={fullLogoSrc}
              alt=""
              aria-hidden="true"
              className="h-full w-auto max-w-none select-none object-contain pointer-events-none"
              style={{
                clipPath: 'polygon(39% 0, 100% 0, 100% 100%, 39% 100%)',
                filter: 'brightness(0) invert(1)',
              }}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      ) : (
        <img
          src={fullLogoSrc}
          alt={alt}
          className="h-full w-auto object-contain select-none transition-opacity duration-200"
          loading="eager"
          decoding="async"
        />
      )}
    </div>
  );
};
