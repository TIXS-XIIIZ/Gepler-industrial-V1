import React from 'react';
import { NetworkCanvas } from './NetworkCanvas.tsx';

interface HeroProps {
  onOpenBrief: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBrief }) => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0B0B0B]"
      style={{
        backgroundImage: 'radial-gradient(circle at 75% 38%, #261209 0%, transparent 34%)',
      }}
    >
      {/* Animated network particles canvas */}
      <NetworkCanvas />

      {/* Grid line texture overlay */}
      <div className="hero-grid-pattern absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-[1180px] w-[calc(100%-48px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-[#C5C5C5] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            <span className="w-8 h-[2px] bg-[#F26A21]" aria-hidden="true" />
            <span>WEB · APP · IoT · AI</span>
          </div>

          {/* Heading */}
          <h1
            className="text-white font-extrabold text-[2.9rem] sm:text-[3.8rem] md:text-[5rem] lg:text-[5.4rem] leading-[0.96] tracking-[-0.055em] mb-7"
            style={{ fontFamily: 'var(--display)' }}
          >
            เชื่อมซอฟต์แวร์
            <br />
            เครื่องจักร และ
            <br />
            <em className="not-italic text-[#F26A21]">ความฉลาด</em>
          </h1>

          {/* Description */}
          <p className="max-w-[610px] text-base md:text-lg text-[#B8B8B8] leading-relaxed mb-8">
            เราออกแบบและพัฒนาระบบดิจิทัลที่ทำให้ข้อมูล ผู้ใช้งาน และกระบวนการจริงของธุรกิจทำงานร่วมกันได้อย่างลื่นไหล
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3.5 mb-12">
            <button
              type="button"
              id="hero-brief-btn"
              onClick={onOpenBrief}
              className="inline-flex items-center justify-between gap-6 px-6 py-4 bg-[#F26A21] hover:bg-[#FFC928] text-[#0A0A0A] font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-[#F26A21]/20"
            >
              <span>ปรึกษาโปรเจกต์</span>
              <span className="text-lg leading-none" aria-hidden="true">→</span>
            </button>
            <a
              href="#projects"
              id="hero-projects-link"
              className="inline-flex items-center justify-between gap-6 px-6 py-4 border border-[#3D3D3D] hover:border-white text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>ดูผลงาน</span>
              <span className="text-lg leading-none text-[#F26A21]" aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Proof points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <strong className="text-sm font-bold text-[#F26A21] tracking-wider font-mono">01</strong>
              <span className="text-xs text-[#8F8F8F]">เริ่มจากปัญหาจริง</span>
            </div>
            <div className="flex items-center gap-3">
              <strong className="text-sm font-bold text-[#F26A21] tracking-wider font-mono">02</strong>
              <span className="text-xs text-[#8F8F8F]">สร้างให้ใช้งานได้จริง</span>
            </div>
            <div className="flex items-center gap-3">
              <strong className="text-sm font-bold text-[#F26A21] tracking-wider font-mono">03</strong>
              <span className="text-xs text-[#8F8F8F]">พร้อมขยายในอนาคต</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Stage with Orbits & Connected Signal Nodes */}
        <div
          className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] flex items-center justify-center select-none"
          aria-label="ระบบเทคโนโลยีที่เชื่อมต่อกัน"
        >
          {/* Signal Label: WEB */}
          <div
            className="absolute left-[4%] top-[14%] z-20 px-3 py-1.5 bg-[#111111]/90 backdrop-blur border border-[#3A3A3A] text-xs font-bold tracking-[0.14em] text-[#D5D5D5] flex items-center gap-2 shadow-xl"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] animate-pulse" />
            <span>WEB</span>
          </div>

          {/* Signal Label: AI */}
          <div
            className="absolute right-[4%] top-[20%] z-20 px-3 py-1.5 bg-[#111111]/90 backdrop-blur border border-[#3A3A3A] text-xs font-bold tracking-[0.14em] text-[#D5D5D5] flex items-center gap-2 shadow-xl"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26A21] animate-pulse" />
            <span>AI</span>
          </div>

          {/* Signal Label: IoT */}
          <div
            className="absolute right-[6%] bottom-[22%] z-20 px-3 py-1.5 bg-[#111111]/90 backdrop-blur border border-[#3A3A3A] text-xs font-bold tracking-[0.14em] text-[#D5D5D5] flex items-center gap-2 shadow-xl"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] animate-pulse" />
            <span>IoT</span>
          </div>

          {/* Signal Label: APP */}
          <div
            className="absolute left-[8%] bottom-[16%] z-20 px-3 py-1.5 bg-[#111111]/90 backdrop-blur border border-[#3A3A3A] text-xs font-bold tracking-[0.14em] text-[#D5D5D5] flex items-center gap-2 shadow-xl"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26A21] animate-pulse" />
            <span>APP</span>
          </div>

          {/* Central Logo Stage */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center">
            {/* Outer Orbit A */}
            <div
              className="absolute inset-[-10%] border border-[#F26A21]/25 rounded-full animate-orbit pointer-events-none"
              style={{ transform: 'rotate(-13deg)' }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F26A21]" />
            </div>

            {/* Inner Orbit B */}
            <div
              className="absolute inset-[4%] border border-[#FFC928]/20 rounded-full animate-orbit-rev pointer-events-none"
              style={{ transform: 'rotate(19deg)' }}
            >
              <span className="absolute bottom-0 right-1/4 w-2 h-2 rounded-full bg-[#FFC928]" />
            </div>

            {/* Ambient Glow */}
            <div className="absolute w-48 h-48 rounded-full bg-[#F26A21]/15 blur-3xl -z-10 pointer-events-none" />

            {/* Emblem Symbol Presentation */}
            <div className="relative z-10 p-4 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] flex items-center justify-center">
              <img
                src="/assets/logo-Gepler-body.png?v=2"
                alt="Gepler Industrial Symbol"
                className="w-48 sm:w-60 h-auto max-h-[260px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Visual bottom caption */}
          <div className="absolute right-2 bottom-0 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-[#787878]">
            <span>CONNECTED SYSTEM</span>
            <b className="bg-[#FFC928] text-black px-2 py-0.5 text-[0.65rem] font-extrabold tracking-widest">
              LIVE
            </b>
          </div>
        </div>
      </div>

      {/* Vertical scroll cue on right */}
      <div className="hidden xl:flex absolute right-8 bottom-12 items-center gap-3 rotate-90 origin-right text-[#757575] text-[0.65rem] font-semibold tracking-[0.2em]">
        <span>SCROLL TO EXPLORE</span>
        <span className="w-12 h-[1px] bg-[#555555]" aria-hidden="true" />
      </div>
    </section>
  );
};
