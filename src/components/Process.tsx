import React from 'react';
import { motion } from 'motion/react';

export const Process: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'เข้าใจปัญหา ผู้ใช้งาน และ Workflow หน้างาน',
    },
    {
      num: '02',
      title: 'Design',
      desc: 'ออกแบบประสบการณ์ โครงสร้างระบบ และ Prototype',
    },
    {
      num: '03',
      title: 'Develop',
      desc: 'พัฒนา เชื่อมต่อ และส่งมอบเป็นรอบที่ตรวจสอบได้',
    },
    {
      num: '04',
      title: 'Test',
      desc: 'ทดสอบกับข้อมูลและสถานการณ์ใช้งานจริง',
    },
    {
      num: '05',
      title: 'Deploy & Support',
      desc: 'เปิดใช้งาน อบรม และดูแลการทำงานของระบบ',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0E0E0E] text-white overflow-hidden">
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
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E8E8E]"
              style={{ fontFamily: 'var(--display)' }}
            >
              How we work
            </span>
          </div>
          <div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.035em] leading-snug sm:leading-tight m-0"
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
        <ol className="list-none p-0 m-0 border-t border-white/15">
          {steps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="group grid grid-cols-[50px_1fr_auto] sm:grid-cols-[80px_1fr_auto] items-center py-7 px-3 sm:px-4 border-b border-white/10 transition-all duration-300 hover:bg-[#F26A21] hover:text-[#101010] hover:pl-6 cursor-pointer"
            >
              <span className="font-mono text-xs sm:text-sm font-bold text-[#F26A21] group-hover:text-black transition-colors">
                {step.num}
              </span>
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-1 text-white group-hover:text-black transition-colors"
                  style={{ fontFamily: 'var(--display)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#888888] group-hover:text-[#3A1D0D] m-0 transition-colors">
                  {step.desc}
                </p>
              </div>
              <span className="text-lg sm:text-xl font-mono text-[#666666] group-hover:text-black group-hover:translate-x-1 transition-all">
                ↗
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
