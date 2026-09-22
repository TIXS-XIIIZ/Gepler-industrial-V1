import React, { useState, useEffect } from 'react';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({ isOpen, onClose }) => {
  const [systemType, setSystemType] = useState('Web System');
  const [problem, setProblem] = useState('');
  const [goal, setGoal] = useState('');
  const [copied, setCopied] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setCopied(false);
      setCopyStatus('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    const pText = problem.trim() || '[กรอกปัญหาที่ต้องการแก้]';
    const gText = goal.trim() || '[กรอกผลลัพธ์ที่ต้องการ]';

    const textToCopy = `GEPLER INDUSTRIAL — PROJECT BRIEF\n\nประเภทระบบ: ${systemType}\nปัญหาปัจจุบัน: ${pText}\nผลลัพธ์ที่ต้องการ: ${gText}`;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setCopyStatus('คัดลอก Project Brief แล้ว พร้อมส่งผ่านช่องทางที่คุณสะดวก');
      } else {
        // Fallback for clipboard
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
        setCopyStatus('คัดลอก Project Brief แล้ว พร้อมส่งผ่านช่องทางที่คุณสะดวก');
      }
    } catch {
      setCopyStatus('ไม่สามารถคัดลอกอัตโนมัติได้ กรุณาคัดลอกข้อความด้วยตนเอง');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="brief-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[620px] bg-[#F4F1EA] text-[#111111] p-8 sm:p-10 shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-black/10">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <span
              className="text-xs font-bold tracking-[0.16em] uppercase text-[#F26A21] block mb-1"
              style={{ fontFamily: 'var(--display)' }}
            >
              PROJECT BRIEF
            </span>
            <h2
              id="brief-modal-title"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] m-0"
              style={{ fontFamily: 'var(--display)' }}
            >
              เล่าโจทย์ของคุณ
            </h2>
          </div>
          <button
            type="button"
            id="close-brief-modal"
            aria-label="ปิดหน้าต่าง"
            onClick={onClose}
            className="text-2xl text-[#666666] hover:text-black font-light leading-none p-1 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCopy();
          }}
          className="flex flex-col gap-4"
        >
          {/* System type selector */}
          <label className="block text-sm font-semibold text-[#222222]">
            <span>ระบบที่สนใจ</span>
            <select
              id="brief-type"
              value={systemType}
              onChange={(e) => setSystemType(e.target.value)}
              className="mt-1.5 block w-full bg-white border border-[#C8C1B6] focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21] px-3.5 py-3 text-sm text-[#111111] outline-none transition-all cursor-pointer"
            >
              <option value="Web System">Web System</option>
              <option value="Mobile App">Mobile App</option>
              <option value="IoT Integration">IoT Integration</option>
              <option value="AI & Automation">AI & Automation</option>
              <option value="ระบบที่เชื่อมหลายส่วน">ระบบที่เชื่อมหลายส่วน</option>
            </select>
          </label>

          {/* Current problem */}
          <label className="block text-sm font-semibold text-[#222222]">
            <span>ปัญหาที่ต้องการแก้</span>
            <textarea
              id="brief-problem"
              rows={3}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              placeholder="เช่น ปัจจุบันบันทึกข้อมูลด้วย Excel หลายไฟล์ ข้อมูลไม่ตรงกัน..."
              className="mt-1.5 block w-full bg-white border border-[#C8C1B6] focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21] px-3.5 py-3 text-sm text-[#111111] outline-none transition-all resize-none"
            />
          </label>

          {/* Desired result */}
          <label className="block text-sm font-semibold text-[#222222]">
            <span>ผลลัพธ์ที่ต้องการ</span>
            <textarea
              id="brief-goal"
              rows={3}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="เช่น ต้องการดูยอดแบบ Real-time ผ่าน Dashboard และลดการกรอกซ้ำ..."
              className="mt-1.5 block w-full bg-white border border-[#C8C1B6] focus:border-[#F26A21] focus:ring-1 focus:ring-[#F26A21] px-3.5 py-3 text-sm text-[#111111] outline-none transition-all resize-none"
            />
          </label>

          {/* Action button */}
          <button
            type="submit"
            id="brief-copy-btn"
            className="mt-3 w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#F26A21] hover:bg-[#FFC928] text-black font-bold text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md"
          >
            <span>{copied ? 'คัดลอกแล้ว ✓' : 'คัดลอก Project Brief'}</span>
            <span aria-hidden="true">→</span>
          </button>

          {/* Feedback status */}
          {copyStatus && (
            <p
              id="copy-status"
              role="status"
              className="text-center text-xs font-semibold text-[#2D7A4D] mt-2 mb-0"
            >
              {copyStatus}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
