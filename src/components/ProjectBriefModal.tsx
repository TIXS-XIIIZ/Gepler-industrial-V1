import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface ProjectBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectBriefModal: React.FC<ProjectBriefModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    solutions: [] as string[],
    budget: '',
    timeline: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const { isDark } = useTheme();

  const solutionOptions = [
    { id: 'web', label: 'Web Systems / Portal' },
    { id: 'app', label: 'Mobile Apps (iOS / Android)' },
    { id: 'iot', label: 'IoT & Machine Integration' },
    { id: 'ai', label: 'AI Solutions & Automation' },
  ];

  const handleSolutionToggle = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      solutions: prev.solutions.includes(id)
        ? prev.solutions.filter((s) => s !== id)
        : [...prev.solutions, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Allow user to read confirmation
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      contact: '',
      solutions: [],
      budget: '',
      timeline: '',
      description: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`relative w-full max-w-2xl my-8 p-6 sm:p-10 border shadow-2xl rounded-sm z-10 transition-colors ${
              isDark
                ? 'bg-[#161616] border-white/10 text-white'
                : 'bg-[#F8F7F4] border-[#D4CEBF] text-[#111111]'
            }`}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className={`absolute top-6 right-6 p-2 rounded transition-colors cursor-pointer ${
                isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'
              }`}
              aria-label="ปิดหน้าต่าง"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#72CC91]/20 border border-[#72CC91] flex items-center justify-center text-[#72CC91] mb-6">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-3 ${
                    isDark ? 'text-white' : 'text-[#111111]'
                  }`}
                  style={{ fontFamily: 'var(--display)' }}
                >
                  ได้รับข้อมูลเรียบร้อยแล้ว
                </h3>
                <p
                  className={`max-w-md text-sm sm:text-base leading-relaxed mb-8 ${
                    isDark ? 'text-neutral-400' : 'text-[#5F5B54]'
                  }`}
                >
                  ทีมวิศวกรของ Gepler จะศึกษาความต้องการเบื้องต้นและติดต่อกลับคุณ {formData.name || ''} ภายใน 1 วันทำการครับ
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#F26A21] hover:bg-[#FFC928] text-black font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                >
                  ตกลง / ปิดหน้าต่าง
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#F26A21] animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F26A21] font-mono">
                    PROJECT INQUIRY
                  </span>
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                    isDark ? 'text-white' : 'text-[#111111]'
                  }`}
                  style={{ fontFamily: 'var(--display)' }}
                >
                  เริ่มต้นพูดคุยโปรเจกต์ของคุณ
                </h3>
                <p
                  className={`text-xs sm:text-sm mb-8 ${
                    isDark ? 'text-neutral-400' : 'text-[#5F5B54]'
                  }`}
                >
                  บอกโจทย์ ความต้องการ หรือปัญหาที่คุณต้องการแก้ไข ทีมงานพร้อมให้คำแนะนำเชิงสถาปัตยกรรมระบบ
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                          isDark ? 'text-neutral-300' : 'text-[#333333]'
                        }`}
                      >
                        ชื่อ - นามสกุล *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="คุณสมชาย มุ่งมั่น"
                        className={`w-full px-4 py-3 rounded-none border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#F26A21] focus:border-[#F26A21] ${
                          isDark
                            ? 'bg-[#111111] border-[#333333] text-white placeholder-neutral-600'
                            : 'bg-white border-[#D0CBC2] text-[#111111] placeholder-neutral-400'
                        }`}
                      />
                    </div>
                    <div>
                      <label
                        className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                          isDark ? 'text-neutral-300' : 'text-[#333333]'
                        }`}
                      >
                        บริษัท / องค์กร
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="ชื่อบริษัทหรือโรงงาน"
                        className={`w-full px-4 py-3 rounded-none border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#F26A21] focus:border-[#F26A21] ${
                          isDark
                            ? 'bg-[#111111] border-[#333333] text-white placeholder-neutral-600'
                            : 'bg-white border-[#D0CBC2] text-[#111111] placeholder-neutral-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                        isDark ? 'text-neutral-300' : 'text-[#333333]'
                      }`}
                    >
                      เบอร์โทรศัพท์ / LINE ID / อีเมล *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="081-234-5678 หรือ line: contact หรือ email@company.com"
                      className={`w-full px-4 py-3 rounded-none border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#F26A21] focus:border-[#F26A21] ${
                        isDark
                          ? 'bg-[#111111] border-[#333333] text-white placeholder-neutral-600'
                          : 'bg-white border-[#D0CBC2] text-[#111111] placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  {/* Solutions Interests */}
                  <div>
                    <label
                      className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                        isDark ? 'text-neutral-300' : 'text-[#333333]'
                      }`}
                    >
                      รูปแบบระบบที่สนใจ (เลือกได้มากกว่า 1 ข้อ)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {solutionOptions.map((opt) => {
                        const isSelected = formData.solutions.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleSolutionToggle(opt.id)}
                            className={`px-3.5 py-2.5 text-xs text-left border rounded-none transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? isDark
                                  ? 'border-[#F26A21] bg-[#F26A21]/15 text-white font-semibold'
                                  : 'border-[#F26A21] bg-[#F26A21]/10 text-[#111111] font-semibold'
                                : isDark
                                ? 'border-[#333333] hover:border-neutral-500 text-neutral-400'
                                : 'border-[#D0CBC2] hover:border-[#111111] text-[#555048]'
                            }`}
                          >
                            <span>{opt.label}</span>
                            <span
                              className={`w-4 h-4 rounded-sm border flex items-center justify-center text-[10px] ${
                                isSelected
                                  ? 'border-[#F26A21] bg-[#F26A21] text-black font-bold'
                                  : isDark
                                  ? 'border-neutral-600'
                                  : 'border-neutral-400'
                              }`}
                            >
                              {isSelected ? '✓' : ''}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                        isDark ? 'text-neutral-300' : 'text-[#333333]'
                      }`}
                    >
                      รายละเอียดปัญหา หรือเป้าหมายของระบบ
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="เช่น ต้องการระบบบันทึกผลตรวจสอบชิ้นงานที่เชื่อมกับ PLC และดูรายงานผ่านมือถือได้..."
                      className={`w-full px-4 py-3 rounded-none border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#F26A21] focus:border-[#F26A21] resize-none ${
                        isDark
                          ? 'bg-[#111111] border-[#333333] text-white placeholder-neutral-600'
                          : 'bg-white border-[#D0CBC2] text-[#111111] placeholder-neutral-400'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 py-4 bg-[#F26A21] hover:bg-[#FFC928] text-black font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#F26A21]/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>ส่งข้อมูลเพื่อปรึกษาทีมวิศวกร</span>
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className={`px-6 py-4 border text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer ${
                        isDark
                          ? 'border-[#333333] hover:border-white text-neutral-400 hover:text-white'
                          : 'border-[#D0CBC2] hover:border-[#111111] text-[#555048] hover:text-[#111111]'
                      }`}
                    >
                      ยกเลิก
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
