import React from 'react';
import { GeplerLogo } from './GeplerLogo.tsx';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 md:gap-12 items-center pb-12 border-b border-white/10">
          <div>
            <GeplerLogo size="md" />
          </div>

          <div>
            <p className="text-sm text-[#898989] leading-relaxed m-0">
              Web · App · IoT · AI
              <br />
              <span className="text-[#555555] text-xs font-semibold tracking-wider">
                Connected Industrial Intelligence
              </span>
            </p>
          </div>

          <div className="md:ml-auto">
            <button
              type="button"
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#AAAAAA] hover:text-[#F26A21] transition-colors cursor-pointer"
              style={{ fontFamily: 'var(--display)' }}
            >
              <span>BACK TO TOP</span>
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-[0.65rem] font-semibold tracking-[0.16em] text-[#555555]">
          <span>© 2026 GEPLER INDUSTRIAL</span>
          <span>CHIANG MAI · THAILAND</span>
        </div>
      </div>
    </footer>
  );
};
