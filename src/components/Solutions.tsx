import React, { useState } from 'react';

export const Solutions: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      title: 'Web Systems',
      desc: 'Portal, Dashboard และระบบบริหารงานภายในองค์กร',
      tag: 'PORTAL · DASHBOARD',
      pos: 'top-left',
    },
    {
      id: 2,
      title: 'Mobile Apps',
      desc: 'แอปสำหรับพนักงาน ลูกค้า และงานภาคสนาม',
      tag: 'IOS · ANDROID · FIELD',
      pos: 'top-right',
    },
    {
      id: 3,
      title: 'IoT Integration',
      desc: 'เชื่อมเซนเซอร์ PLC และข้อมูลเครื่องจักรแบบ Real-time',
      tag: 'PLC · SENSORS · TELEMETRY',
      pos: 'bottom-left',
    },
    {
      id: 4,
      title: 'AI Solutions',
      desc: 'AI Assistant, Automation และระบบวิเคราะห์ข้อมูล',
      tag: 'GENAI · AGENTS · PREDICTION',
      pos: 'bottom-right',
    },
  ];

  return (
    <section id="solutions" className="py-24 md:py-32 bg-[#0E0E0E] text-white">
      <div className="max-w-[1180px] w-[calc(100%-48px)] mx-auto">
        {/* Section Heading */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-10 items-start mb-20">
          <div className="flex items-center gap-4">
            <span className="w-8 h-8 rounded-full border border-[#F26A21] text-[#F26A21] font-bold text-xs flex items-center justify-center font-mono">
              02
            </span>
            <span
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#8E8E8E]"
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
            <p className="max-w-[420px] text-sm md:text-base text-[#888888] leading-relaxed m-0">
              ลูกค้าสามารถเลือกพัฒนาเฉพาะระบบที่ต้องการ หรือผสมผสานเชื่อมโยงเข้าด้วยกันได้ตามโจทย์และงบประมาณของธุรกิจคุณ
            </p>
          </div>
        </div>

        {/* Desktop Connected Interactive Map */}
        <div className="hidden md:block relative min-h-[580px] border-y border-white/10 py-16 px-10">
          {/* Connection Lines (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 560"
            aria-hidden="true"
          >
            {/* Top Left curve */}
            <path
              d="M500 280 C410 210 320 160 190 120"
              fill="none"
              stroke={activeSolution === 1 ? '#FFC928' : 'rgba(242,106,33,0.45)'}
              strokeWidth={activeSolution === 1 ? 2.5 : 1.2}
              strokeDasharray={activeSolution === 1 ? 'none' : '4 5'}
              className="transition-all duration-300"
            />
            {/* Top Right curve */}
            <path
              d="M500 280 C590 210 680 160 810 120"
              fill="none"
              stroke={activeSolution === 2 ? '#FFC928' : 'rgba(242,106,33,0.45)'}
              strokeWidth={activeSolution === 2 ? 2.5 : 1.2}
              strokeDasharray={activeSolution === 2 ? 'none' : '4 5'}
              className="transition-all duration-300"
            />
            {/* Bottom Left curve */}
            <path
              d="M500 280 C410 350 320 400 190 440"
              fill="none"
              stroke={activeSolution === 3 ? '#FFC928' : 'rgba(242,106,33,0.45)'}
              strokeWidth={activeSolution === 3 ? 2.5 : 1.2}
              strokeDasharray={activeSolution === 3 ? 'none' : '4 5'}
              className="transition-all duration-300"
            />
            {/* Bottom Right curve */}
            <path
              d="M500 280 C590 350 680 400 810 440"
              fill="none"
              stroke={activeSolution === 4 ? '#FFC928' : 'rgba(242,106,33,0.45)'}
              strokeWidth={activeSolution === 4 ? 2.5 : 1.2}
              strokeDasharray={activeSolution === 4 ? 'none' : '4 5'}
              className="transition-all duration-300"
            />
          </svg>

          {/* Central Gepler Custom Node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 rounded-full border border-[#F26A21] bg-[#0E0E0E] flex flex-col items-center justify-center shadow-[0_0_50px_rgba(242,106,33,0.18)] px-4 text-center">
            <img
              src="/assets/logo-Gepler-body.png?v=2"
              alt="Gepler Symbol"
              className="w-14 h-auto object-contain drop-shadow mb-0.5"
            />
            <span
              className="text-[0.62rem] font-bold tracking-[0.2em] text-white mt-1 uppercase text-center"
              style={{ fontFamily: 'var(--display)' }}
            >
              GEPLER
            </span>
            <span className="text-[0.68rem] font-medium text-[#FFC928] mt-1 text-center leading-tight">
              เลือกพัฒนาเฉพาะระบบ
              <br />
              หรือเชื่อมต่อร่วมกันได้
            </span>
          </div>

          {/* 4 Cardinal Nodes */}
          <div className="grid grid-cols-2 grid-rows-2 gap-x-64 gap-y-36 relative z-10 h-full">
            {/* 01 Web Systems */}
            <div
              onMouseEnter={() => setActiveSolution(1)}
              onMouseLeave={() => setActiveSolution(null)}
              className="max-w-[280px] p-4 transition-all duration-200 cursor-default"
            >
              <span className="font-mono text-xs font-bold text-[#F26A21] tracking-wider">
                01 / WEB
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-2 text-white" style={{ fontFamily: 'var(--display)' }}>
                Web Systems
              </h3>
              <p className="text-sm text-[#8B8B8B] leading-relaxed">
                Portal, Dashboard และระบบบริหารงานภายในองค์กร
              </p>
            </div>

            {/* 02 Mobile Apps */}
            <div
              onMouseEnter={() => setActiveSolution(2)}
              onMouseLeave={() => setActiveSolution(null)}
              className="max-w-[280px] justify-self-end text-right p-4 transition-all duration-200 cursor-default"
            >
              <span className="font-mono text-xs font-bold text-[#F26A21] tracking-wider">
                02 / APP
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-2 text-white" style={{ fontFamily: 'var(--display)' }}>
                Mobile Apps
              </h3>
              <p className="text-sm text-[#8B8B8B] leading-relaxed">
                แอปสำหรับพนักงาน ลูกค้า และงานภาคสนาม
              </p>
            </div>

            {/* 03 IoT Integration */}
            <div
              onMouseEnter={() => setActiveSolution(3)}
              onMouseLeave={() => setActiveSolution(null)}
              className="max-w-[280px] p-4 transition-all duration-200 cursor-default self-end"
            >
              <span className="font-mono text-xs font-bold text-[#F26A21] tracking-wider">
                03 / IoT
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-2 text-white" style={{ fontFamily: 'var(--display)' }}>
                IoT Integration
              </h3>
              <p className="text-sm text-[#8B8B8B] leading-relaxed">
                เชื่อมเซนเซอร์ PLC และข้อมูลเครื่องจักรแบบ Real-time
              </p>
            </div>

            {/* 04 AI Solutions */}
            <div
              onMouseEnter={() => setActiveSolution(4)}
              onMouseLeave={() => setActiveSolution(null)}
              className="max-w-[280px] justify-self-end text-right p-4 transition-all duration-200 cursor-default self-end"
            >
              <span className="font-mono text-xs font-bold text-[#F26A21] tracking-wider">
                04 / AI
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-2 text-white" style={{ fontFamily: 'var(--display)' }}>
                AI Solutions
              </h3>
              <p className="text-sm text-[#8B8B8B] leading-relaxed">
                AI Assistant, Automation และระบบวิเคราะห์ข้อมูล
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Note */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-8 text-xs text-[#8E8E8E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
          <span>ลูกค้าสามารถเลือกพัฒนาเฉพาะรูปแบบที่ต้องการ หรือเชื่อมโยงทำงานร่วมกันได้ตามโจทย์ธุรกิจ</span>
        </div>

        {/* Mobile View: Stacked Solution Cards */}
        <div className="md:hidden flex flex-col divide-y divide-white/10">
          <div className="py-3 px-3.5 bg-white/5 border border-white/10 rounded-sm mb-4 text-xs text-[#FFC928]">
            ✦ ลูกค้าสามารถเลือกพัฒนาเฉพาะระบบที่ต้องการ หรือเชื่อมโยงทำงานร่วมกันได้
          </div>
          {solutions.map((item) => (
            <div key={item.id} className="py-7">
              <span className="font-mono text-xs font-bold text-[#F26A21]">
                0{item.id} / {item.tag}
              </span>
              <h3 className="text-xl font-bold mt-1.5 mb-2 text-white" style={{ fontFamily: 'var(--display)' }}>
                {item.title}
              </h3>
              <p className="text-sm text-[#8B8B8B] m-0 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
