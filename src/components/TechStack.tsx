import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext.tsx';

export const TechStack: React.FC = () => {
  const { isDark } = useTheme();

  const stackItems = [
    { category: 'FRONTEND', tech: 'React · Web Application · Next.js' },
    { category: 'BACKEND', tech: '.NET · REST API · Node.js' },
    { category: 'DATA', tech: 'SQL Server · PostgreSQL · Redis' },
    { category: 'CLOUD', tech: 'Vercel · Supabase · Cloud Run' },
    { category: 'INDUSTRIAL', tech: 'PLC · IoT Sensors · Modbus / MQTT' },
    { category: 'INTELLIGENCE', tech: 'AI · Automation · Analytics · OCR' },
  ];

  return (
    <section
      className={`py-24 md:py-32 overflow-hidden transition-colors duration-300 ${
        isDark ? 'bg-[#121212] text-white' : 'bg-[#F3F1EC] text-[#151515]'
      }`}
    >
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="w-8 h-8 rounded-full border border-[#F26A21] text-[#F26A21] font-bold text-xs flex items-center justify-center font-mono mb-8">
            05
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.045em] leading-[1.05] m-0 ${
              isDark ? 'text-white' : 'text-[#151515]'
            }`}
            style={{ fontFamily: 'var(--display)' }}
          >
            Technology
            <br />
            ที่เหมาะกับ
            <br />
            <em className="not-italic text-[#F26A21]">งานจริง</em>
          </h2>
          <p
            className={`max-w-[340px] text-base leading-relaxed mt-7 ${
              isDark ? 'text-[#A0A0A0]' : 'text-[#6A6762]'
            }`}
          >
            เลือกเทคโนโลยีตามโจทย์ งบประมาณ และการดูแลระยะยาว ไม่ยึดติดกับเครื่องมือเดียว
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div
          className={`border-t ${
            isDark ? 'border-[#2D2D2D]' : 'border-[#CFCAC1]'
          }`}
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className={`py-6 border-b grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-baseline transition-all duration-200 hover:pl-4 px-2 cursor-default ${
                isDark
                  ? 'border-[#2D2D2D] hover:bg-white/5'
                  : 'border-[#CFCAC1] hover:bg-white/60'
              }`}
            >
              <span
                className={`text-xs font-bold uppercase tracking-[0.14em] ${
                  isDark ? 'text-[#888888]' : 'text-[#8A857D]'
                }`}
                style={{ fontFamily: 'var(--display)' }}
              >
                {item.category}
              </span>
              <strong
                className={`text-base sm:text-lg font-semibold ${
                  isDark ? 'text-[#E8E8E8]' : 'text-[#1A1A1A]'
                }`}
                style={{ fontFamily: 'var(--display)' }}
              >
                {item.tech}
              </strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
