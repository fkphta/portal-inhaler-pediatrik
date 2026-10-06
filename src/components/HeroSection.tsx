import React from 'react';
import { ExternalLink, Calendar, Video, BookOpen, FileCheck } from 'lucide-react';

interface HeroSectionProps {
  onNavigateSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateSection }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#026398] via-[#007bb9] to-[#0369a1] text-white pt-6 pb-7 shadow-sm">
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="space-y-4 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-sky-100 text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Projek Jabatan Kecemasan &amp; Farmasi HTA
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight">
            Nafas yang Lega, <span className="text-amber-300">Langkah yang Ceria</span> untuk Si Kecil.
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Baru dibekalkan ubat sedut di Jabatan Kecemasan Hospital Tunku Azizah selepas waktu pejabat? Pastikan ubat disedut dengan teknik yang betul agar sampai ke paru-paru anda dengan berkesan.
          </p>

          {/* Trust Stats Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/15 max-w-md mx-auto lg:mx-0 text-center">
            <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition">
              <div className="text-base sm:text-lg font-black text-white">1-ke-1</div>
              <div className="text-[10px] text-sky-100 leading-tight">Sesi Maya Farmasi</div>
            </div>
            <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition">
              <div className="text-base sm:text-lg font-black text-amber-300">5-6 Nafas</div>
              <div className="text-[10px] text-sky-100 leading-tight">Teknik Tidal</div>
            </div>
            <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition">
              <div className="text-base sm:text-lg font-black text-emerald-300">80%</div>
              <div className="text-[10px] text-sky-100 leading-tight">Lebih Berkesan</div>
            </div>
          </div>

          {/* 4 Langkah Pantas Mini Hub */}
          <div className="pt-2">
            <div className="bg-white/95 text-slate-800 rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/30 text-left">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                  4 Tindakan Pantas Pesakit
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Panduan Pesakit Luar HTA
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {/* 1. Borang Daftar */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdbc_V0vNJGwOBjQc99oGPHtiqCZVSrxpMwy13WyE7a8-4Cvw/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/50 transition text-left group"
                >
                  <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                    1
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-indigo-600 leading-tight block truncate">
                      Borang Daftar
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                      Borang Google <ExternalLink className="w-2.5 h-2.5 inline" />
                    </span>
                  </div>
                </a>

                {/* 2. Slot Temu Janji */}
                <button
                  onClick={() => onNavigateSection('sec-tempah')}
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-amber-200 bg-amber-50/60 hover:bg-amber-100/70 transition text-left group cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-md bg-amber-500 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                    2
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-amber-800 leading-tight block truncate">
                      Slot Temu Janji
                    </span>
                    <span className="text-[10px] text-amber-700/80">Pilih Tarikh/Masa</span>
                  </div>
                </button>

                {/* 3. Video Teknik */}
                <button
                  onClick={() => onNavigateSection('sec-video')}
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:border-sky-400 hover:bg-sky-50/60 transition text-left group cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-md bg-sky-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                    3
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-sky-700 leading-tight block truncate">
                      Video Teknik
                    </span>
                    <span className="text-[10px] text-slate-400">Tonton Tutorial KKM</span>
                  </div>
                </button>

                {/* 4. Risalah Interaktif */}
                <button
                  onClick={() => onNavigateSection('sec-panduan')}
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 hover:border-teal-400 hover:bg-teal-50/60 transition text-left group cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-md bg-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                    4
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-800 group-hover:text-teal-700 leading-tight block truncate">
                      Risalah Interaktif
                    </span>
                    <span className="text-[10px] text-slate-400">Kesilapan &amp; Cara Basuh</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
