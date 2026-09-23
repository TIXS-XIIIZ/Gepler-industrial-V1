import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext.tsx';

export const Solutions: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<number | null>(null);
  const { isDark } = useTheme();

  const solutions = [
    {
      id: 1,
      tag: 'WEB',
      title: 'Web Systems & Dashboards',
      desc: 'ระบบ Web Application, Portal สำหรับองค์กร และ Dashboard จัดการข้อมูลแบบรวมศูนย์ ออกแบบให้รองรับการทำงานของพนักงานและผู้บริหาร',
      metrics: 'Zero Downtime Architecture',
    },
    {
      id: 2,
      tag: 'APP',
      title: 'Industrial & Mobile Apps',
      desc: 'แอปพลิเคชันสำหรับใช้งานในโรงงาน หน้างาน หรือการติดต่อกับลูกค้า รองรับทั้ง iOS, Android ใช้งานสะดวก รวดเร็ว และแม่นยำ',
      metrics: 'Cross-Platform Native Experience',
    },
    {
      id: 3,
      tag: 'IoT',
      title: 'IoT & Hardware Integration',
      desc: 'เชื่อมต่อเซนเซอร์ PLC และเครื่องจักรในสายการผลิต เพื่อเก็บข้อมูล สั่งการ และแสดงผลแบบ Real-time ลดความผิดพลาดของมนุษย์',
      metrics: 'Modbus / MQTT / OPC-UA Ready',
    },
    {
      id: 4,
      tag: 'AI',
      title: 'AI & Operational Intelligence',
      desc: 'นำ AI เข้ามาช่วยวิเคราะห์แนวโน้ม ตรวจจับความผิดปกติของเครื่องจักร และช่วยในการตัดสินใจทางธุรกิจให้รวดเร็วยิ่งขึ้น',
      metrics: 'Predictive & Automated Analytics',
    },
  ];

  return (
    <section
      id="solutions"
      className={`py-24 md:py-32 transition-colors duration-300 overflow-hidden ${
        isDark ? 'bg-[#0E0E0E] text-white' : 'bg-[#FFFFFF] text-[#141414]'
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
              02
            </span>
            <span
              className={`text-xs font-bold uppercase tracking-[0.18em] ${
                isDark ? 'text-[#8E8E8E]' : 'text-[#666666]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              Services & Solutions
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-snug sm:leading-tight m-0"
              style={{ fontFamily: 'var(--display)' }}
            >
              <span className="block">รับพัฒนาระบบตามโจทย์</span>
              <span className="block mt-2.5 sm:mt-3.5 text-[#F26A21]">ครอบคลุมทั้ง 4 รูปแบบ</span>
            </h2>
            <p
              className={`max-w-[420px] text-sm md:text-base leading-relaxed m-0 ${
                isDark ? 'text-[#888888]' : 'text-[#555555]'
              }`}
            >
              ลูกค้าสามารถเลือกพัฒนาเฉพาะระบบที่ต้องการ หรือผสมผสานเชื่อมโยงเข้าด้วยกันได้ตามโจทย์และงบประมาณของธุรกิจคุณ
            </p>
          </div>
        </motion.div>

        {/* Interactive Diagram / Grid View */}
        <div className="hidden md:block relative min-h-[580px] my-10 select-none">
          {/* Connecting Circuit / Background Rings */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border pointer-events-none transition-colors ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
          />
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] rounded-full border pointer-events-none transition-colors ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
          />

          {/* Central Logo Hub */}
          <div
            tabIndex={0}
            role="button"
            aria-label="Gepler Industrial Core: คลิกเพื่อดูข้อมูลทั้งหมด"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveSolution(null);
              }
            }}
            onClick={() => setActiveSolution(null)}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 rounded-full border border-[#F26A21] flex flex-col items-center justify-center shadow-[0_0_50px_rgba(242,106,33,0.22)] px-4 text-center group cursor-pointer transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F26A21]/30 ${
              isDark ? 'bg-[#0E0E0E]' : 'bg-[#FAF8F5]'
            }`}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-4px] rounded-full border border-dashed border-[#F26A21]/30 pointer-events-none"
            />
            <img
              src="/assets/logo-Gepler-body-1.png?v=3"
              alt="Gepler Symbol"
              className="w-14 h-auto object-contain drop-shadow mb-0.5 transition-transform group-hover:scale-110"
            />
            <span
              className={`text-[0.62rem] font-bold tracking-[0.2em] mt-1 uppercase text-center ${
                isDark ? 'text-white' : 'text-[#141414]'
              }`}
              style={{ fontFamily: 'var(--display)' }}
            >
              GEPLER
            </span>
            <span className="text-[0.68rem] font-medium text-[#FFC928] mt-1 text-center leading-tight">
              CORE SYSTEM
            </span>
          </div>

          {/* Four Quadrants */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 p-8">
            {/* 01 Web Systems */}
            <motion.div
              initial={{ opacity: 0, x: -25, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              onMouseEnter={() => setActiveSolution(1)}
              onMouseLeave={() => setActiveSolution(null)}
              className={`max-w-[280px] p-4 transition-all duration-300 cursor-pointer rounded border ${
                activeSolution === 1
                  ? isDark
                    ? 'bg-white/5 border-[#FFC928] -translate-y-1 shadow-lg'
                    : 'bg-[#F5F2EB] border-[#FFC928] -translate-y-1 shadow-md'
                  : isDark
                  ? 'border-transparent hover:bg-white/[0.03]'
                  : 'border-black/5 bg-[#FAFAF8] hover:bg-[#F2EFE8]'
              }`}
            >
              <span className="font-mono text-xs font-bold text-[#F26A21] tracking-wider">
                01 / WEB
              </span>
              <h3
                className={`text-2xl font-bold mt-2 mb-2 ${isDark ? 'text-white' : 'text-[#141414]'}`}
                style={{ fontFamily: 'var(--display)' }}
              >
                Web Systems
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-[#8B8B8B]' : 'text-[#555555]'}`}>
                Portal, Dashboard และระบบบริหารงานภายในองค์กร
              </p>
            </motion.div>

            {/* 02 Mobile Apps */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              onMouseEnter={() => setActiveSolution(2)}
              onMouseLeave={() => setActiveSolution(null)}
              className={`max-w-[280px] justify-self-end text-right p-4 transition-all duration-300 cursor-pointer rounded border ${
                activeSolution === 2
                  ? isDark
                    ? 'bg-white/5 border-[#FFC928] -translate-y-1 shadow-lg'
                    : 'bg-[#F5F2EB] border-[#FFC928] -translate-y-1 shadow-md'
                  : isDark
                  ? 'border-transparent hover:bg-white/[0.03]'
                  : 'border-black/5 bg-[#FAFAF8] hover:bg-[#F2EFE8]'
              }`}
            >
              <span className="font-mono text-xs font-bold text-[#F26A21] tracking-wider">
                02 / APP
              </span>
              <h3
                className={`text-2xl font-bold mt-2 mb-2 ${isDark ? 'text-white' : 'text-[#141414]'}`}
                style={{ fontFamily: 'var(--display)' }}
              >
                Mobile Apps
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-[#8B8B8B]' : 'text-[#555555]'}`}>
                แอปสำหรับพนักงาน ลูกค้า และงานภาคสนาม
              </p>
            </motion.div>

            {/* 03 IoT Integration */}
            <motion.div
              initial={{ opacity: 0, x: -25, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              onMouseEnter={() => setActiveSolution(3)}
              onMouseLeave={() => setActiveSolution(null)}
              className={`max-w-[280px] p-4 transition-all duration-300 cursor-pointer rounded border self-end ${
                activeSolution === 3
                  ? isDark
                    ? 'bg-white/5 border-[#FFC928] -translate-y-1 shadow-lg'
                    : 'bg-[#F5F2EB] border-[#FFC928] -translate-y-1 shadow-md'
                  : isDark
                  ? 'border-transparent hover:bg-white/[0.03]'
                  : 'border-black/5 bg-[#FAFAF8] hover:bg-[#F2EFE8]'
              }`}
            >
              <span className="font-mono text-xs font-bold text-[#F26A21] tracking-wider">
                03 / IoT
              </span>
              <h3
                className={`text-2xl font-bold mt-2 mb-2 ${isDark ? 'text-white' : 'text-[#141414]'}`}
                style={{ fontFamily: 'var(--display)' }}
              >
                IoT Integration
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-[#8B8B8B]' : 'text-[#555555]'}`}>
                เชื่อมเซนเซอร์ PLC และข้อมูลเครื่องจักรแบบ Real-time
              </p>
            </motion.div>

            {/* 04 AI Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 25, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
              onMouseEnter={() => setActiveSolution(4)}
              onMouseLeave={() => setActiveSolution(null)}
              className={`max-w-[280px] justify-self-end text-right p-4 transition-all duration-300 cursor-pointer rounded border self-end ${
                activeSolution === 4
                  ? isDark
                    ? 'bg-white/5 border-[#FFC928] -translate-y-1 shadow-lg'
                    : 'bg-[#F5F2EB] border-[#FFC928] -translate-y-1 shadow-md'
                  : isDark
                  ? 'border-transparent hover:bg-white/[0.03]'
                  : 'border-black/5 bg-[#FAFAF8] hover:bg-[#F2EFE8]'
              }`}
            >
              <span className="font-mono text-xs font-bold text-[#F26A21] tracking-wider">
                04 / AI
              </span>
              <h3
                className={`text-2xl font-bold mt-2 mb-2 ${isDark ? 'text-white' : 'text-[#141414]'}`}
                style={{ fontFamily: 'var(--display)' }}
              >
                AI Solutions
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-[#8B8B8B]' : 'text-[#555555]'}`}>
                AI Assistant, Automation และระบบวิเคราะห์ข้อมูล
              </p>
            </motion.div>
          </div>
        </div>

        {/* Desktop Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`hidden md:flex items-center justify-center gap-2 mt-8 text-xs ${
            isDark ? 'text-[#8E8E8E]' : 'text-[#666666]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] animate-ping" />
          <span>ลูกค้าสามารถเลือกพัฒนาเฉพาะรูปแบบที่ต้องการ หรือเชื่อมโยงทำงานร่วมกันได้ตามโจทย์ธุรกิจ</span>
        </motion.div>

        {/* Mobile View: Stacked Solution Cards */}
        <div
          className={`md:hidden flex flex-col divide-y ${
            isDark ? 'divide-white/10' : 'divide-black/10'
          }`}
        >
          <div
            className={`py-3 px-3.5 border rounded-sm mb-4 text-xs font-medium ${
              isDark
                ? 'bg-white/5 border-white/10 text-[#FFC928]'
                : 'bg-[#F5F2EA] border-black/10 text-[#C67D00]'
            }`}
          >
            ✦ ลูกค้าสามารถเลือกพัฒนาเฉพาะระบบที่ต้องการ หรือเชื่อมโยงทำงานร่วมกันได้
          </div>
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="py-7"
            >
              <span className="font-mono text-xs font-bold text-[#F26A21]">
                0{item.id} / {item.tag}
              </span>
              <h3
                className={`text-xl font-bold mt-1.5 mb-2 ${isDark ? 'text-white' : 'text-[#141414]'}`}
                style={{ fontFamily: 'var(--display)' }}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm m-0 leading-relaxed ${
                  isDark ? 'text-[#8B8B8B]' : 'text-[#555555]'
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
