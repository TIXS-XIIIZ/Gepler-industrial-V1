import React from 'react';

export const TrustStrip: React.FC = () => {
  const items = [
    'BUILT FOR REAL OPERATIONS',
    'INDUSTRIAL EXPERIENCE',
    'CUSTOM DEVELOPMENT',
    'SCALABLE ARCHITECTURE',
  ];

  return (
    <section
      className="overflow-hidden bg-[#F26A21] text-[#090909] py-3.5 select-none border-y border-black/10"
      aria-label="จุดเด่นของบริการ"
    >
      <div className="flex w-max animate-marquee font-extrabold text-xs tracking-[0.16em] uppercase">
        {/* Double track to enable smooth infinite loop */}
        {[...items, ...items, ...items, ...items].map((text, i) => (
          <div key={i} className="inline-flex items-center gap-6 mr-6">
            <span>{text}</span>
            <span
              className="w-2 h-2 rounded-full bg-[#FFC928] border border-black/40 shrink-0"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
