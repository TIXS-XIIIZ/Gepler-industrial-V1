import React from 'react';
import { motion } from 'motion/react';

interface ContactCtaProps {
  onOpenBrief: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onOpenBrief }) => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F26A21] text-[#111111] py-24 md:py-32 select-none"
    >
      {/* Mesh decorative overlay */}
      <div
        className="contact-network-pattern absolute inset-[-30%_-10%_0%_35%] opacity-35 rotate-[-15deg] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1180px] w-[calc(100%-48px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-end">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span
            className="block text-xs font-bold tracking-[0.2em] uppercase text-black/80 mb-5"
            style={{ fontFamily: 'var(--display)' }}
          >
            START A PROJECT
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.045em] leading-[1.04] m-0"
            style={{ fontFamily: 'var(--display)' }}
          >
            มีปัญหาที่อยาก
            <br />
            เปลี่ยนให้เป็น{' '}
            <em className="not-italic underline decoration-4 underline-offset-8">ระบบ?</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="max-w-[500px]"
        >
          <p className="text-base sm:text-lg text-[#3E1A07] leading-relaxed mb-8">
            เริ่มจากเล่าปัญหาและสิ่งที่อยากให้ดีขึ้น เราจะช่วยแปลงเป็นขอบเขตงานที่ชัดเจน
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            id="brief-open-btn"
            onClick={onOpenBrief}
            className="w-full sm:w-auto inline-flex items-center justify-between gap-8 px-8 py-4.5 bg-[#111111] hover:bg-[#252525] text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xl"
          >
            <span>เตรียม Project Brief</span>
            <span className="text-lg leading-none text-[#F26A21]" aria-hidden="true">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
