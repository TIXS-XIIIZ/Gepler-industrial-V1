import React, { useState, useEffect } from 'react';
import { GeplerLogo } from './GeplerLogo.tsx';

interface NavbarProps {
  onOpenBrief: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrief }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          ? 'bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/10 shadow-lg'
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
          <img
            src="/assets/logo-Gepler-full.png?v=2"
            alt="Gepler Industrial"
            className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 hover:scale-[1.02]"
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
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#BDBDBD] hover:text-[#F26A21] transition-colors focus:outline-none focus-visible:text-[#F26A21]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            type="button"
            id="nav-cta-btn"
            onClick={onOpenBrief}
            className="group inline-flex items-center gap-2 border border-[#353535] hover:border-[#F26A21] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.06em] text-white hover:bg-[#151515] transition-all cursor-pointer"
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

        {/* Mobile menu toggle */}
        <button
          type="button"
          id="menu-toggle-btn"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-[#F26A21] cursor-pointer"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#111111] border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-sm font-semibold tracking-wider text-[#CCCCCC] hover:text-[#F26A21] py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
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
