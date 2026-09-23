import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext.tsx';

export const Problems: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`py-24 md:py-32 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#121212] text-white' : 'bg-[#F3F1EC] text-[#151515]'
      }`}
    >
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        {/* Section Heading with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-10 items-start mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-[#F26A21] text-[#F26A21] font-bold text-xs flex items-center justify-center font-mono">
              01
            </span>
            <span
              className={`text-xs font-bold uppercase tracking-[0.18em] ${
                isDark ? 'text-[#9E9E9E]' : 'text-[#5F5F5F]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              Problems we solve
            </span>
          </div>
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-snug sm:leading-tight m-0"
              style={{ fontFamily: 'var(--display)' }}
            >
              <span className="block">ระบบที่ดี เริ่มจากการเข้าใจ</span>
              <span className="block mt-2.5 sm:mt-3.5 text-[#F26A21]">ปัญหาที่เกิดขึ้นจริง</span>
            </h2>
          </div>
        </motion.div>

        {/* 3 Problem Cards Grid with Staggered Entrance */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-px border ${
            isDark ? 'bg-[#2E2E2E] border-[#2E2E2E]' : 'bg-[#CFCAC1] border-[#CFCAC1]'
          }`}
        >
          {/* Card 1: Manual Process */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`relative min-h-[340px] md:min-h-[385px] p-8 md:p-9 flex flex-col justify-between transition-colors group cursor-default ${
              isDark
                ? 'bg-[#181818] hover:bg-[#202020]'
                : 'bg-[#F3F1EC] hover:bg-white'
            }`}
          >
            <div>
              <span
                className={`font-mono text-xs font-bold ${
                  isDark ? 'text-[#888888]' : 'text-[#777777]'
                }`}
              >
                01
              </span>
              {/* Graphic Mark: Disjointed Manual Work with interactive pulse */}
              <div className="h-32 flex items-center justify-center gap-2.5">
                <span
                  className={`w-2.5 h-14 rounded-sm transition-all duration-300 group-hover:scale-y-125 group-hover:bg-[#F26A21] ${
                    isDark ? 'bg-[#E5E5E5]' : 'bg-[#171717]'
                  }`}
                />
                <span
                  className={`w-2.5 h-20 rounded-sm transition-all duration-300 group-hover:scale-y-90 ${
                    isDark ? 'bg-[#E5E5E5]' : 'bg-[#171717]'
                  }`}
                />
                <span
                  className={`w-2.5 h-9 rounded-sm transition-all duration-300 group-hover:scale-y-110 group-hover:bg-[#FFC928] ${
                    isDark ? 'bg-[#E5E5E5]' : 'bg-[#171717]'
                  }`}
                />
              </div>
            </div>
            <div>
              <h3
                className={`text-xl md:text-2xl font-bold mb-2.5 ${
                  isDark ? 'text-white' : 'text-[#151515]'
                }`}
                style={{ fontFamily: 'var(--display)' }}
              >
                Manual Process
              </h3>
              <p
                className={`text-sm md:text-base leading-relaxed m-0 ${
                  isDark ? 'text-[#A0A0A0]' : 'text-[#5E5B57]'
                }`}
              >
                ลดงานเอกสาร Excel และการกรอกข้อมูลซ้ำ ด้วย Workflow ที่ออกแบบตามหน้างานจริง
              </p>
            </div>
          </motion.article>

          {/* Card 2: Disconnected Systems (Featured / Signature Brand Orange) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative min-h-[340px] md:min-h-[385px] bg-[#F26A21] p-8 md:p-9 flex flex-col justify-between shadow-md cursor-default group"
          >
            <div>
              <span className="font-mono text-xs font-bold text-black/60">02</span>
              {/* Graphic Mark: Connected Nodes with Bridge */}
              <div className="h-32 relative flex items-center justify-center">
                <div className="relative w-44 h-16">
                  <span className="absolute left-[20%] top-[40%] w-3 h-3 rounded-full bg-[#111111] transition-transform group-hover:scale-125" />
                  <span className="absolute left-[48%] top-[18%] w-3 h-3 rounded-full bg-[#FFC928] transition-transform group-hover:scale-125" />
                  <span className="absolute right-[20%] top-[55%] w-3 h-3 rounded-full bg-[#111111] transition-transform group-hover:scale-125" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[62%] h-[2px] bg-[#111111] rotate-[12deg] transition-all group-hover:h-[3px]" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2.5 text-[#0E0E0E]" style={{ fontFamily: 'var(--display)' }}>
                Disconnected Systems
              </h3>
              <p className="text-sm md:text-base text-[#2D1609] leading-relaxed m-0">
                เชื่อม Web, ERP, Database, API และเครื่องจักร ให้ข้อมูลไหลผ่านระบบเดียวกัน
              </p>
            </div>
          </motion.article>

          {/* Card 3: Data Without Insight */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className={`relative min-h-[340px] md:min-h-[385px] p-8 md:p-9 flex flex-col justify-between transition-colors group cursor-default ${
              isDark
                ? 'bg-[#181818] hover:bg-[#202020]'
                : 'bg-[#F3F1EC] hover:bg-white'
            }`}
          >
            <div>
              <span
                className={`font-mono text-xs font-bold ${
                  isDark ? 'text-[#888888]' : 'text-[#777777]'
                }`}
              >
                03
              </span>
              {/* Graphic Mark: Growth Chart with animated heights on hover */}
              <div className="h-32 flex items-end justify-center gap-2.5 pb-4">
                <span
                  className={`w-6 h-9 rounded-t transition-all duration-300 group-hover:h-12 ${
                    isDark ? 'bg-[#E5E5E5]' : 'bg-[#171717]'
                  }`}
                />
                <span
                  className={`w-6 h-16 rounded-t transition-all duration-300 group-hover:h-20 group-hover:bg-[#FFC928] ${
                    isDark ? 'bg-[#E5E5E5]' : 'bg-[#171717]'
                  }`}
                />
                <span className="w-6 h-24 bg-[#F26A21] rounded-t transition-all duration-300 group-hover:h-28" />
              </div>
            </div>
            <div>
              <h3
                className={`text-xl md:text-2xl font-bold mb-2.5 ${
                  isDark ? 'text-white' : 'text-[#151515]'
                }`}
                style={{ fontFamily: 'var(--display)' }}
              >
                Data Without Insight
              </h3>
              <p
                className={`text-sm md:text-base leading-relaxed m-0 ${
                  isDark ? 'text-[#A0A0A0]' : 'text-[#5E5B57]'
                }`}
              >
                เปลี่ยนข้อมูลที่กระจัดกระจายเป็น Dashboard และข้อมูลพร้อมใช้สำหรับการตัดสินใจ
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};
