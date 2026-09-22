import React from 'react';
import { motion } from 'motion/react';
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
        {/* Left Column: Typography & CTAs with Staggered Motion */}
        <motion.div
          className="flex flex-col"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="inline-flex items-center gap-3 text-[#C5C5C5] text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            <span className="w-8 h-[2px] bg-[#F26A21]" aria-hidden="true" />
            <span>WEB · APP · IoT · AI</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-white font-extrabold text-[2.8rem] sm:text-[3.7rem] md:text-[4.8rem] lg:text-[5.2rem] tracking-[-0.035em] mb-8 flex flex-col gap-3 sm:gap-4 md:gap-5 leading-[1.12] sm:leading-[1.14]"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="block">เชื่อมซอฟต์แวร์</span>
            <span className="block">เครื่องจักร และ</span>
            <span className="block text-[#F26A21]">ความฉลาด</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="max-w-[610px] text-base md:text-lg text-[#B8B8B8] leading-relaxed mb-8"
          >
            เราออกแบบและพัฒนาระบบดิจิทัลที่ทำให้ข้อมูล ผู้ใช้งาน และกระบวนการจริงของธุรกิจทำงานร่วมกันได้อย่างลื่นไหล
          </motion.p>

          {/* Action buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="flex flex-col sm:flex-row gap-3.5 mb-12"
          >
            <button
              type="button"
              id="hero-brief-btn"
              onClick={onOpenBrief}
              className="inline-flex items-center justify-between gap-6 px-6 py-4 bg-[#F26A21] hover:bg-[#FFC928] text-[#0A0A0A] font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-[#F26A21]/20 group"
            >
              <span>ปรึกษาโปรเจกต์</span>
              <span className="text-lg leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </button>
            <a
              href="#projects"
              id="hero-projects-link"
              className="inline-flex items-center justify-between gap-6 px-6 py-4 border border-[#3D3D3D] hover:border-white text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <span>ดูผลงาน</span>
              <span className="text-lg leading-none text-[#F26A21] transition-transform group-hover:translate-y-0.5" aria-hidden="true">↓</span>
            </a>
          </motion.div>

          {/* Proof points */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10"
          >
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
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual Stage with Orbits & Connected Signal Nodes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[540px] flex items-center justify-center select-none"
          aria-label="ระบบเทคโนโลยีที่เชื่อมต่อกัน"
        >
          {/* Signal Label: WEB */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[4%] top-[14%] z-20 px-3 py-1.5 bg-[#111111]/90 backdrop-blur border border-[#3A3A3A] text-xs font-bold tracking-[0.14em] text-[#D5D5D5] flex items-center gap-2 shadow-xl"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] animate-pulse" />
            <span>WEB</span>
          </motion.div>

          {/* Signal Label: AI */}
          <motion.div
            animate={{ y: [3, -3, 3] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[4%] top-[20%] z-20 px-3 py-1.5 bg-[#111111]/90 backdrop-blur border border-[#3A3A3A] text-xs font-bold tracking-[0.14em] text-[#D5D5D5] flex items-center gap-2 shadow-xl"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26A21] animate-pulse" />
            <span>AI</span>
          </motion.div>

          {/* Signal Label: IoT */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[6%] bottom-[22%] z-20 px-3 py-1.5 bg-[#111111]/90 backdrop-blur border border-[#3A3A3A] text-xs font-bold tracking-[0.14em] text-[#D5D5D5] flex items-center gap-2 shadow-xl"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] animate-pulse" />
            <span>IoT</span>
          </motion.div>

          {/* Signal Label: APP */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[8%] bottom-[16%] z-20 px-3 py-1.5 bg-[#111111]/90 backdrop-blur border border-[#3A3A3A] text-xs font-bold tracking-[0.14em] text-[#D5D5D5] flex items-center gap-2 shadow-xl"
            style={{ fontFamily: 'var(--display)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26A21] animate-pulse" />
            <span>APP</span>
          </motion.div>

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
            <motion.div
              animate={{ opacity: [0.15, 0.28, 0.15], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-48 h-48 rounded-full bg-[#F26A21]/20 blur-3xl -z-10 pointer-events-none"
            />

            {/* Emblem Symbol Presentation with floating animation */}
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 p-4 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)] flex items-center justify-center"
            >
              <img
                src="/assets/logo-Gepler-body.png?v=2"
                alt="Gepler Industrial Symbol"
                className="w-48 sm:w-60 h-auto max-h-[260px] object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Visual bottom caption */}
          <div className="absolute right-2 bottom-0 flex items-center gap-3 text-xs font-bold tracking-[0.16em] text-[#787878]">
            <span>CONNECTED SYSTEM</span>
            <b className="bg-[#FFC928] text-black px-2 py-0.5 text-[0.65rem] font-extrabold tracking-widest">
              LIVE
            </b>
          </div>
        </motion.div>
      </div>

      {/* Interactive Scroll Down Cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden md:flex flex-col items-center gap-2 text-white/40 hover:text-[#F26A21] transition-colors group cursor-pointer"
        aria-label="เลื่อนลงเพื่อดูเนื้อหาเพิ่มเติม"
      >
        <span className="text-[0.68rem] tracking-[0.24em] uppercase font-bold text-white/50 group-hover:text-[#F26A21] transition-colors">
          SCROLL
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#F26A21]/60 flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#F26A21]"
          />
        </div>
      </motion.a>

      {/* Vertical scroll cue on right */}
      <div className="hidden xl:flex absolute right-8 bottom-12 items-center gap-3 rotate-90 origin-right text-[#757575] text-[0.65rem] font-semibold tracking-[0.2em]">
        <span>SCROLL TO EXPLORE</span>
        <span className="w-12 h-[1px] bg-[#555555]" aria-hidden="true" />
      </div>
    </section>
  );
};
