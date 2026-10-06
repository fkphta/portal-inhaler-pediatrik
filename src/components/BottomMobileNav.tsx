import React from 'react';
import { Calendar, PlayCircle, BookOpen, CheckSquare, AlertTriangle } from 'lucide-react';

interface BottomMobileNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const BottomMobileNav: React.FC<BottomMobileNavProps> = ({
  activeSection,
  onSelectSection,
}) => {
  const items = [
    { id: 'sec-tempah', label: 'Kaunseling', icon: Calendar },
    { id: 'sec-video', label: 'Video', icon: PlayCircle },
    { id: 'sec-panduan', label: 'Risalah', icon: BookOpen },
    { id: 'sec-checklist', label: 'Keyakinan', icon: CheckSquare },
    { id: 'sec-tanda-bahaya', label: 'Bahaya!', icon: AlertTriangle, isDanger: true },
  ];

  return (
    <nav
      aria-label="Menu Pantas Bawah"
      className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 z-50 py-1 px-2 shadow-2xl md:hidden"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 gap-1 text-center">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSection(item.id)}
              className={`flex flex-col items-center justify-center py-1 transition-all cursor-pointer ${
                isActive
                  ? item.isDanger
                    ? 'text-rose-600 font-bold'
                    : 'text-[#006194] font-bold'
                  : item.isDanger
                  ? 'text-rose-500'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <div
                className={`p-1 rounded-full transition-all ${
                  isActive
                    ? item.isDanger
                      ? 'bg-rose-100 text-rose-700'
                      : 'bg-sky-100 text-[#006194]'
                    : ''
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-0.5 leading-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
