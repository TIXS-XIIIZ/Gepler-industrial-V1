import React from 'react';
import { GeplerLogo } from './GeplerLogo.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`pt-16 pb-8 border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[#080808] text-white border-white/10'
          : 'bg-[#EAE6DE] text-[#141414] border-black/10'
      }`}
    >
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        {/* Main Footer Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-12 items-center pb-12 border-b ${
            isDark ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div>
            <GeplerLogo size="md" />
          </div>

          <div>
            <p
              className={`text-sm leading-relaxed m-0 ${
                isDark ? 'text-[#898989]' : 'text-[#555555]'
              }`}
            >
              Web · App · IoT · AI
              <br />
              <span
                className={`text-xs font-semibold tracking-wider ${
                  isDark ? 'text-[#555555]' : 'text-[#777777]'
                }`}
              >
                Connected Industrial Intelligence
              </span>
            </p>
          </div>

          <div className="md:ml-auto">
            <button
              type="button"
              onClick={scrollToTop}
              id="back-to-top-btn"
              className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] hover:text-[#F26A21] transition-colors cursor-pointer ${
                isDark ? 'text-[#AAAAAA]' : 'text-[#444444]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              <span>BACK TO TOP</span>
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[0.65rem] font-semibold tracking-[0.16em] ${
            isDark ? 'text-[#555555]' : 'text-[#777777]'
          }`}
        >
          <span>© 2026 GEPLER INDUSTRIAL</span>
          <span>CHIANG MAI · THAILAND</span>
        </div>
      </div>
    </footer>
  );
};
