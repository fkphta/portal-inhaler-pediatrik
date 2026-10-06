import React from 'react';
import { Github } from 'lucide-react';

interface FooterProps {
  onSelectSection: (sectionId: string) => void;
  onOpenDeployModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection, onOpenDeployModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 text-white flex items-center justify-center font-black text-xs shadow-xs">
              HTA
            </div>
            <div>
              <div className="text-white font-bold text-xs sm:text-sm">
                Hospital Tunku Azizah (HTA)
              </div>
              <div className="text-slate-500 text-[10px]">
                Kementerian Kesihatan Malaysia (KKM) • Kuala Lumpur
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-[11px] font-semibold text-slate-400">
            <button
              onClick={() => onSelectSection('sec-tempah')}
              className="hover:text-white transition cursor-pointer"
            >
              Kaunseling Maya
            </button>
            <button
              onClick={() => onSelectSection('sec-video')}
              className="hover:text-white transition cursor-pointer"
            >
              Video Tutorial
            </button>
            <button
              onClick={() => onSelectSection('sec-panduan')}
              className="hover:text-white transition cursor-pointer"
            >
              Risalah Inhaler
            </button>
            <button
              onClick={() => onSelectSection('sec-checklist')}
              className="hover:text-white transition cursor-pointer"
            >
              Checklist Keyakinan
            </button>
            <button
              onClick={() => onSelectSection('sec-tanda-bahaya')}
              className="text-rose-400 hover:text-rose-300 transition cursor-pointer"
            >
              Tanda Bahaya
            </button>
            <button
              onClick={onOpenDeployModal}
              className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Panduan GitHub</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            Hak Cipta © 2026 Jabatan Farmasi &amp; Jabatan Kecemasan Hospital Tunku Azizah.
          </div>
          <div className="text-slate-500 text-center sm:text-right">
            Pendidikan kesihatan pesakit; bukan pengganti diagnosis kecemasan doktor.
          </div>
        </div>
      </div>
    </footer>
  );
};
