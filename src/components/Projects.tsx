import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext.tsx';

export const Projects: React.FC = () => {
  const [activeBib, setActiveBib] = useState('0261');
  const { isDark } = useTheme();

  const bibRecords = [
    { bib: '0261', status: 'FINISH', time: '05:42:18', category: '42K Open' },
    { bib: '0184', status: 'CP3', time: '04:19:02', category: '42K Master' },
    { bib: '0092', status: 'FINISH', time: '03:58:45', category: '42K Elite' },
  ];

  const chartBars = [
    { hour: '05:00', height: '45%' },
    { hour: '06:00', height: '62%' },
    { hour: '07:00', height: '54%' },
    { hour: '08:00', height: '82%' },
    { hour: '09:00', height: '70%' },
    { hour: '10:00', height: '92%' },
    { hour: '11:00', height: '78%' },
  ];

  const currentRecord = bibRecords.find((b) => b.bib === activeBib) || bibRecords[0];

  return (
    <section
      id="projects"
      className={`py-24 md:py-32 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#121212] text-white' : 'bg-[#F3F1EC] text-[#151515]'
      }`}
    >
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-10 items-start mb-20"
        >
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-[#F26A21] text-[#F26A21] font-bold text-xs flex items-center justify-center font-mono">
              03
            </span>
            <span
              className={`text-xs font-bold uppercase tracking-[0.18em] ${
                isDark ? 'text-[#9E9E9E]' : 'text-[#5F5F5F]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              Selected work
            </span>
          </div>
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-snug sm:leading-tight m-0"
              style={{ fontFamily: 'var(--display)' }}
            >
              <span className="block">จากปัญหาหน้างาน</span>
              <span className="block mt-2.5 sm:mt-3.5">
                สู่ระบบที่ <em className="not-italic text-[#F26A21]">ใช้งานได้จริง</em>
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Project 1: Race Check-in & Timing Platform */}
        <article
          className={`grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center py-16 border-t ${
            isDark ? 'border-[#2D2D2D]' : 'border-[#CCC6BC]'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col"
          >
            <span
              className="text-xs font-bold tracking-[0.18em] uppercase text-[#F26A21] mb-4"
              style={{ fontFamily: 'var(--display)' }}
            >
              EVENT TECHNOLOGY · 2026
            </span>
            <h3
              className={`text-3xl sm:text-4xl md:text-[2.6rem] font-bold tracking-[-0.035em] leading-[1.08] mb-5 ${
                isDark ? 'text-white' : 'text-[#151515]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              Race Check-in
              <br />& Timing Platform
            </h3>
            <p
              className={`text-base leading-relaxed mb-6 ${
                isDark ? 'text-[#A5A5A5]' : 'text-[#625F5A]'
              }`}
            >
              ระบบสแกน Barcode สำหรับ Check-in, Checkpoint และ Finish พร้อม Dashboard ติดตามผลแบบเรียลไทม์
            </p>

            <dl
              className={`mt-4 divide-y border-t ${
                isDark
                  ? 'divide-[#2D2D2D] border-[#2D2D2D]'
                  : 'divide-[#D3CEC4] border-[#D3CEC4]'
              }`}
            >
              <div className="grid grid-cols-[100px_1fr] py-3 text-sm">
                <dt
                  className={`font-bold text-xs uppercase tracking-[0.1em] ${
                    isDark ? 'text-[#888888]' : 'text-[#89847B]'
                  }`}
                >
                  Problem
                </dt>
                <dd className={`m-0 ${isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'}`}>
                  ขั้นตอนเช็กอินและรวมผลล่าช้า
                </dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] py-3 text-sm">
                <dt
                  className={`font-bold text-xs uppercase tracking-[0.1em] ${
                    isDark ? 'text-[#888888]' : 'text-[#89847B]'
                  }`}
                >
                  Solution
                </dt>
                <dd className={`m-0 ${isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'}`}>
                  Mobile Scanner + Live Dashboard
                </dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] py-3 text-sm">
                <dt
                  className={`font-bold text-xs uppercase tracking-[0.1em] ${
                    isDark ? 'text-[#888888]' : 'text-[#89847B]'
                  }`}
                >
                  Impact
                </dt>
                <dd className={`m-0 ${isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'}`}>
                  ติดตามสถานะผู้แข่งขันได้จากจุดเดียว
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* Race UI Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="relative min-h-[420px] bg-[#171717] border-[6px] md:border-8 border-[#222222] shadow-[0_32px_65px_rgba(0,0,0,0.25)] p-6 md:p-8 text-white overflow-hidden rounded-sm"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-[#F26A21]/15 blur-3xl pointer-events-none" />

            {/* Mock Top Bar */}
            <div className="flex justify-between items-center pb-4 border-b border-[#393939] text-xs font-bold tracking-[0.12em] text-[#A0A0A0]">
              <span>LIVE RACE CONTROL</span>
              <span className="text-[#F26A21] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F26A21] animate-ping" />
                <span>● LIVE</span>
              </span>
            </div>

            {/* Metric Grid */}
            <div className="grid grid-cols-3 gap-2.5 mt-5">
              <div className="bg-[#222222] p-3.5">
                <small className="block text-[#888888] text-[0.62rem] font-semibold tracking-wider uppercase mb-1">
                  PARTICIPANTS
                </small>
                <strong className="text-xl md:text-2xl font-bold font-mono">959</strong>
              </div>
              <div className="bg-[#222222] p-3.5">
                <small className="block text-[#888888] text-[0.62rem] font-semibold tracking-wider uppercase mb-1">
                  FINISHERS
                </small>
                <strong className="text-xl md:text-2xl font-bold font-mono text-[#72CC91]">764</strong>
              </div>
              <div className="bg-[#222222] p-3.5">
                <small className="block text-[#888888] text-[0.62rem] font-semibold tracking-wider uppercase mb-1">
                  FINISH RATE
                </small>
                <strong className="text-xl md:text-2xl font-bold font-mono text-[#FFC928]">79.7%</strong>
              </div>
            </div>

            {/* Race Velocity Chart with Animated Bars on Scroll */}
            <div className="h-36 mt-6 border-l border-b border-[#444444] flex items-end gap-2 sm:gap-3 px-4 pt-4">
              {chartBars.map((bar, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center group cursor-pointer"
                  style={{ height: '100%' }}
                >
                  <div className="w-full h-full flex items-end">
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full bg-gradient-to-t from-[#5B2B14] to-[#F26A21] rounded-t-sm origin-bottom transition-all duration-300 group-hover:brightness-125"
                      style={{ height: bar.height }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive BIB Quick Record Table */}
            <div className="mt-5 bg-[#222222] p-3.5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[#A0A0A0]">BIB</span>
                <div className="flex gap-1.5">
                  {bibRecords.map((r) => (
                    <button
                      key={r.bib}
                      onClick={() => setActiveBib(r.bib)}
                      className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                        activeBib === r.bib
                          ? 'bg-[#F26A21] text-white shadow-sm'
                          : 'bg-black/40 text-neutral-400 hover:text-white'
                      }`}
                    >
                      {r.bib}
                    </button>
                  ))}
                </div>
                <span className="text-[#72CC91] font-semibold">{currentRecord.status}</span>
              </div>
              <b className="text-[#FFC928]">{currentRecord.time}</b>
            </div>
          </motion.div>
        </article>

        {/* Project 2: Smart Stock Management (Reverse layout) */}
        <article
          className={`grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center py-16 border-t ${
            isDark ? 'border-[#2D2D2D]' : 'border-[#CCC6BC]'
          }`}
        >
          {/* Stock UI Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="order-2 lg:order-1 relative min-h-[420px] bg-[#171717] border-[6px] md:border-8 border-[#222222] shadow-[0_32px_65px_rgba(0,0,0,0.25)] flex text-white overflow-hidden rounded-sm"
          >
            {/* Sidebar rail */}
            <div className="w-14 sm:w-16 bg-[#111111] border-r border-[#262626] flex flex-col items-center gap-5 py-6 shrink-0">
              <span className="font-extrabold text-2xl text-[#F26A21]" style={{ fontFamily: 'var(--display)' }}>
                G
              </span>
              <span className="w-6 h-0.5 bg-[#3F3F3F]" />
              <span className="w-6 h-0.5 bg-[#F26A21]" />
              <span className="w-6 h-0.5 bg-[#3F3F3F]" />
              <span className="w-6 h-0.5 bg-[#3F3F3F]" />
            </div>

            {/* Main Stock Dashboard */}
            <div className="flex-1 p-6 md:p-7">
              {/* Top Bar */}
              <div className="flex justify-between items-center pb-4 border-b border-[#333333] text-xs font-bold tracking-[0.12em] text-[#A0A0A0]">
                <span>STOCK OVERVIEW</span>
                <span className="text-[#C5C5C5] font-mono">SEPTEMBER 2026</span>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-3 gap-2.5 mt-5">
                <div className="bg-[#222222] p-3.5">
                  <small className="block text-[#888888] text-[0.62rem] font-semibold tracking-wider uppercase mb-1">
                    IN
                  </small>
                  <strong className="text-xl md:text-2xl font-bold font-mono text-[#72CC91]">1,284</strong>
                </div>
                <div className="bg-[#222222] p-3.5">
                  <small className="block text-[#888888] text-[0.62rem] font-semibold tracking-wider uppercase mb-1">
                    OUT
                  </small>
                  <strong className="text-xl md:text-2xl font-bold font-mono text-[#F26A21]">948</strong>
                </div>
                <div className="bg-[#222222] p-3.5">
                  <small className="block text-[#888888] text-[0.62rem] font-semibold tracking-wider uppercase mb-1">
                    REMAIN
                  </small>
                  <strong className="text-xl md:text-2xl font-bold font-mono text-white">336</strong>
                </div>
              </div>

              {/* Transactions List */}
              <div className="mt-6 flex flex-col divide-y divide-[#2B2B2B]">
                <div className="flex justify-between items-center py-2.5 px-1 text-xs font-mono transition-colors hover:bg-white/5">
                  <span className="text-[#B5B5B5]">PO-260914 (Bearing Unit)</span>
                  <b className="text-[#72CC91]">+120</b>
                </div>
                <div className="flex justify-between items-center py-2.5 px-1 text-xs font-mono transition-colors hover:bg-white/5">
                  <span className="text-[#B5B5B5]">PO-260913 (Sensor Cable)</span>
                  <b className="text-[#F26A21]">−48</b>
                </div>
                <div className="flex justify-between items-center py-2.5 px-1 text-xs font-mono transition-colors hover:bg-white/5">
                  <span className="text-[#B5B5B5]">PO-260912 (Hydraulic Valve)</span>
                  <b className="text-[#72CC91]">+76</b>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Copy (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex flex-col"
          >
            <span
              className="text-xs font-bold tracking-[0.18em] uppercase text-[#F26A21] mb-4"
              style={{ fontFamily: 'var(--display)' }}
            >
              INDUSTRIAL SYSTEM · 2026
            </span>
            <h3
              className={`text-3xl sm:text-4xl md:text-[2.6rem] font-bold tracking-[-0.035em] leading-[1.08] mb-5 ${
                isDark ? 'text-white' : 'text-[#151515]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              Smart Stock
              <br />Management
            </h3>
            <p
              className={`text-base leading-relaxed mb-6 ${
                isDark ? 'text-[#A5A5A5]' : 'text-[#625F5A]'
              }`}
            >
              ระบบบริหารรับเข้า–จ่ายออก เชื่อม Plan และเก็บประวัติการเคลื่อนไหว เพื่อให้ตรวจสอบยอดคงเหลือได้ชัดเจน
            </p>

            <dl
              className={`mt-4 divide-y border-t ${
                isDark
                  ? 'divide-[#2D2D2D] border-[#2D2D2D]'
                  : 'divide-[#D3CEC4] border-[#D3CEC4]'
              }`}
            >
              <div className="grid grid-cols-[100px_1fr] py-3 text-sm">
                <dt
                  className={`font-bold text-xs uppercase tracking-[0.1em] ${
                    isDark ? 'text-[#888888]' : 'text-[#89847B]'
                  }`}
                >
                  Problem
                </dt>
                <dd className={`m-0 ${isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'}`}>
                  ข้อมูล Stock แยกหลายแหล่ง
                </dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] py-3 text-sm">
                <dt
                  className={`font-bold text-xs uppercase tracking-[0.1em] ${
                    isDark ? 'text-[#888888]' : 'text-[#89847B]'
                  }`}
                >
                  Solution
                </dt>
                <dd className={`m-0 ${isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'}`}>
                  Transaction History + Plan Integration
                </dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] py-3 text-sm">
                <dt
                  className={`font-bold text-xs uppercase tracking-[0.1em] ${
                    isDark ? 'text-[#888888]' : 'text-[#89847B]'
                  }`}
                >
                  Impact
                </dt>
                <dd className={`m-0 ${isDark ? 'text-[#E0E0E0]' : 'text-[#222222]'}`}>
                  ตรวจสอบย้อนกลับได้ในระบบเดียว
                </dd>
              </div>
            </dl>
          </motion.div>
        </article>
      </div>
    </section>
  );
};
