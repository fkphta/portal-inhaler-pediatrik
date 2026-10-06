import React, { useRef, useEffect } from 'react';
import { Calendar, Video, BookOpen, CheckSquare, AlertOctagon, Info } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  isDanger?: boolean;
}

interface SectionNavigatorProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const navItems: NavItem[] = [
  { id: 'sec-tempah', label: 'Kaunseling Maya', icon: '🗓️' },
  { id: 'sec-video', label: 'Video Teknik', icon: '📹' },
  { id: 'sec-panduan', label: 'Risalah & Kesilapan', icon: '📖' },
  { id: 'sec-checklist', label: 'Uji Keyakinan', icon: '✅' },
  { id: 'sec-tanda-bahaya', label: 'Tanda Bahaya', icon: '🚨', isDanger: true },
  { id: 'sec-maklumat', label: 'Maklumat HTA', icon: 'ℹ️' },
];

export const SectionNavigator: React.FC<SectionNavigatorProps> = ({
  activeSection,
  onSelectSection,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeBtn = document.getElementById(`nav-${activeSection}`);
    if (activeBtn && containerRef.current) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [activeSection]);

  return (
    <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-2 px-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div
          ref={containerRef}
          className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar py-0.5 w-full"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => onSelectSection(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? item.isDanger
                      ? 'bg-rose-700 text-white shadow-md shadow-rose-700/25 border-rose-700'
                      : 'bg-[#006194] text-white shadow-md shadow-[#006194]/25 border-[#006194]'
                    : item.isDanger
                    ? 'border border-rose-200 text-rose-700 bg-rose-50/80 hover:bg-rose-100'
                    : 'border border-slate-200 text-slate-700 bg-white hover:bg-slate-50'
                }`}
              >
                <span className="text-sm leading-none">{item.icon}</span>
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
