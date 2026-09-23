import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext.tsx';

export const Process: React.FC = () => {
  const { isDark } = useTheme();

  const steps = [
    {
      num: '01',
      title: 'เข้าใจโจทย์และกระบวนการทำงานจริง',
      desc: 'ลงลึกปัญหา ข้อจำกัด และเป้าหมายของธุรกิจ พร้อมสำรวจหน้างานจริง',
    },
    {
      num: '02',
      title: 'ออกแบบสถาปัตยกรรมระบบ (System Architecture)',
      desc: 'กำหนดโครงสร้าง การเชื่อมต่อข้อมูล ความปลอดภัย และ UI/UX ที่เรียบง่าย',
    },
    {
      num: '03',
      title: 'พัฒนาและทดสอบร่วมกับผู้ใช้งาน',
      desc: 'ส่งมอบงานเป็นรอบ (Milestone) เพื่อให้เห็นความคืบหน้าและปรับแก้ได้ทันที',
    },
    {
      num: '04',
      title: 'ติดตั้ง ใช้งานจริง และดูแลต่อเนื่อง',
      desc: 'พร้อมคู่มือการใช้งาน การฝึกอบรมทีมงาน และการ Support ระบบระยะยาว',
    },
  ];

  return (
    <section
      id="process"
      className={`py-24 md:py-32 transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-[#0E0E0E] text-white' : 'bg-[#F8F6F1] text-[#141414]'
      }`}
    >
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-10 items-start mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-[#F26A21] text-[#F26A21] font-bold text-xs flex items-center justify-center font-mono">
              04
            </span>
            <span
              className={`text-xs font-bold uppercase tracking-[0.18em] ${
                isDark ? 'text-[#8E8E8E]' : 'text-[#666666]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              How we work
            </span>
          </div>
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-snug sm:leading-tight m-0 ${
                isDark ? 'text-white' : 'text-[#141414]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              <span className="block">ชัดเจนทุกขั้นตอน</span>
              <span className="block mt-2.5 sm:mt-3.5">
                ตั้งแต่ <em className="not-italic text-[#F26A21]">โจทย์ถึงการใช้งาน</em>
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Process List with Staggered Scroll Reveal */}
        <ol
          className={`list-none p-0 m-0 border-t ${
            isDark ? 'border-white/15' : 'border-black/15'
          }`}
        >
          {steps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className={`group grid grid-cols-[50px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-center py-7 px-3 sm:px-4 border-b transition-all duration-300 hover:bg-[#F26A21] hover:text-[#101010] hover:pl-6 cursor-pointer ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <span className="font-mono text-xs sm:text-sm font-bold text-[#F26A21] group-hover:text-black transition-colors">
                {step.num}
              </span>
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-1 group-hover:text-black transition-colors ${
                    isDark ? 'text-white' : 'text-[#141414]'
                  }`}
                  style={{ fontFamily: 'var(--display)' }}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm sm:text-base group-hover:text-[#3A1D0D] m-0 transition-colors ${
                    isDark ? 'text-[#888888]' : 'text-[#555555]'
                  }`}
                >
                  {step.desc}
                </p>
              </div>
              <span
                className={`text-lg sm:text-xl font-mono group-hover:text-black group-hover:translate-x-1 transition-all ${
                  isDark ? 'text-[#666666]' : 'text-[#999999]'
                }`}
              >
                ↗
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
