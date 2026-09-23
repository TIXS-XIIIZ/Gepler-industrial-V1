import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
import { Problems } from './components/Problems.tsx';
import { Solutions } from './components/Solutions.tsx';
import { Projects } from './components/Projects.tsx';
import { Process } from './components/Process.tsx';
import { TechStack } from './components/TechStack.tsx';
import { ContactCta } from './components/ContactCta.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectBriefModal } from './components/ProjectBriefModal.tsx';
import { ScrollProgressBar } from './components/ScrollProgressBar.tsx';
import { ScrollToTop } from './components/ScrollToTop.tsx';

function AppContent() {
  const [briefOpen, setBriefOpen] = useState(false);
  const { isDark } = useTheme();

  const handleOpenBrief = () => setBriefOpen(true);
  const handleCloseBrief = () => setBriefOpen(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 selection:bg-[#F26A21] selection:text-black relative ${
        isDark ? 'bg-[#0B0B0B] text-white' : 'bg-[#F8F6F1] text-[#141414]'
      }`}
    >
      {/* Global Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Accessibility skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFC928] focus:text-black focus:font-bold focus:shadow-xl"
      >
        ข้ามไปยังเนื้อหา
      </a>

      {/* Fixed Navigation Header with Theme Switcher */}
      <Navbar onOpenBrief={handleOpenBrief} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenBrief={handleOpenBrief} />
        <TrustStrip />
        <Problems />
        <Solutions />
        <Projects />
        <Process />
        <TechStack />
        <ContactCta onOpenBrief={handleOpenBrief} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top with Circular Progress */}
      <ScrollToTop />

      {/* Interactive Project Brief Modal */}
      <ProjectBriefModal isOpen={briefOpen} onClose={handleCloseBrief} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
