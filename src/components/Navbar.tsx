import React, { useState, useEffect } from 'react';
import { GeplerLogo } from './GeplerLogo.tsx';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

interface NavbarProps {
  onOpenBrief: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrief }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-black/10 shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 h-[80px] md:h-[86px] flex items-center justify-between gap-6">
        {/* Brand */}
        <a
          href="#top"
          id="brand-link"
          aria-label="Gepler Industrial หน้าแรก"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A21] rounded inline-flex items-center"
        >
          <GeplerLogo
            variant="full"
            size="md"
            className="transition-transform duration-200 hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          id="main-nav"
          aria-label="เมนูหลัก"
          className="hidden md:flex items-center gap-8 ml-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className={`text-xs font-semibold uppercase tracking-[0.14em] transition-colors focus:outline-none focus-visible:text-[#F26A21] ${
                isDark
                  ? 'text-[#BDBDBD] hover:text-[#F26A21]'
                  : 'text-[#4A4A4A] hover:text-[#F26A21]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls: Theme Switcher & Project CTA */}
        <div className="hidden sm:flex items-center gap-3.5">
          {/* Theme Switcher Component */}
          <ThemeSwitcher variant="segmented" />

          {/* Start Project CTA Button */}
          <button
            type="button"
            id="nav-cta-btn"
            onClick={onOpenBrief}
            className={`group inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.06em] transition-all cursor-pointer ${
              isDark
                ? 'border border-[#353535] hover:border-[#F26A21] text-white hover:bg-[#151515]'
                : 'border border-black/20 hover:border-[#F26A21] text-[#141414] hover:bg-black/5'
            }`}
          >
            <span>เริ่มคุยโปรเจกต์</span>
            <span
              className="text-[#F26A21] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              aria-hidden="true"
            >
              ↗
            </span>
          </button>
        </div>

        {/* Mobile menu toggle & quick theme toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher variant="compact" />

          <button
            type="button"
            id="menu-toggle-btn"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-[#F26A21] cursor-pointer"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDark ? 'bg-white' : 'bg-[#141414]'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-opacity duration-300 ${
                isDark ? 'bg-white' : 'bg-[#141414]'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isDark ? 'bg-white' : 'bg-[#141414]'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className={`md:hidden px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 ${
            isDark
              ? 'bg-[#111111] border-b border-white/10 text-white'
              : 'bg-[#FAF8F5] border-b border-black/10 text-[#141414]'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-sm font-semibold tracking-wider py-2 border-b transition-colors ${
                isDark
                  ? 'text-[#CCCCCC] hover:text-[#F26A21] border-white/5'
                  : 'text-[#444444] hover:text-[#F26A21] border-black/5'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Selector in Mobile Menu */}
          <div
            className={`flex items-center justify-between py-3 border-b ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#888888]">
              ธีมแสดงผล
            </span>
            <ThemeSwitcher variant="segmented" />
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBrief();
            }}
            className="mt-2 w-full text-center bg-[#F26A21] text-black font-bold py-3 text-xs tracking-wider uppercase hover:bg-[#FFC928] transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>เริ่มคุยโปรเจกต์</span>
            <span>↗</span>
          </button>
        </div>
      )}
    </header>
  );
};
