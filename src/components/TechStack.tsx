import React from 'react';

export const TechStack: React.FC = () => {
  const stackItems = [
    { category: 'FRONTEND', tech: 'React · Web Application · Next.js' },
    { category: 'BACKEND', tech: '.NET · REST API · Node.js' },
    { category: 'DATA', tech: 'SQL Server · PostgreSQL · Redis' },
    { category: 'CLOUD', tech: 'Vercel · Supabase · Cloud Run' },
    { category: 'INDUSTRIAL', tech: 'PLC · IoT Sensors · Modbus / MQTT' },
    { category: 'INTELLIGENCE', tech: 'AI · Automation · Analytics · OCR' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F3F1EC] text-[#151515]">
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
        {/* Intro */}
        <div>
          <span className="w-8 h-8 rounded-full border border-[#F26A21] text-[#F26A21] font-bold text-xs flex items-center justify-center font-mono mb-8">
            05
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.045em] leading-[1.05] m-0 text-[#151515]"
            style={{ fontFamily: 'var(--display)' }}
          >
            Technology
            <br />
            ที่เหมาะกับ
            <br />
            <em className="not-italic text-[#F26A21]">งานจริง</em>
          </h2>
          <p className="max-w-[340px] text-base text-[#6A6762] leading-relaxed mt-7">
            เลือกเทคโนโลยีตามโจทย์ งบประมาณ และการดูแลระยะยาว ไม่ยึดติดกับเครื่องมือเดียว
          </p>
        </div>

        {/* Stack Grid */}
        <div className="border-t border-[#CFCAC1]">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="py-6 border-b border-[#CFCAC1] grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-6 items-baseline transition-colors hover:bg-white/50 px-2"
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#8A857D]"
                style={{ fontFamily: 'var(--display)' }}
              >
                {item.category}
              </span>
              <strong
                className="text-base sm:text-lg font-semibold text-[#1A1A1A]"
                style={{ fontFamily: 'var(--display)' }}
              >
                {item.tech}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
