import React from 'react';
import { FileText, Info, Github, Download } from 'lucide-react';

interface HeaderProps {
  onOpenInfo: () => void;
  onOpenDeployModal: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenInfo,
  onOpenDeployModal,
  onGoHome,
}) => {
  return (
    <header className="bg-white/95 border-b border-slate-200 sticky top-9 z-40 shadow-xs backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-3">
          {/* Logo & Clinical Facility Title */}
          <div
            className="flex items-center gap-2.5 cursor-pointer group"
            onClick={onGoHome}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onGoHome()}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-teal-500 flex items-center justify-center text-white font-black text-xs shadow-md shadow-sky-500/25 shrink-0 group-hover:scale-105 transition-transform">
              HTA
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-100">
                  ED &amp; Farmasi
                </span>
                <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                  KKM
                </span>
              </div>
              <h1 className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-tight mt-0.5 group-hover:text-sky-700 transition-colors">
                Inhaler Pediatrik HTA
              </h1>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            {/* Direct Clean ZIP Download Button */}
            <a
              href="./portal-inhaler-pediatrik.zip"
              download="portal-inhaler-pediatrik.zip"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm shadow-emerald-600/25 transition"
              title="Muat Turun Fail Projek Lengkap (ZIP Bersih Tanpa node_modules)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Muat Turun ZIP</span>
              <span className="sm:hidden">ZIP</span>
            </a>

            {/* GitHub Deploy helper button */}
            <button
              onClick={onOpenDeployModal}
              className="hidden md:inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold px-2.5 py-1.5 rounded-lg border border-slate-200 transition cursor-pointer"
              title="Panduan Terbitan GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Panduan GitHub</span>
            </button>

            {/* Official Registration Form Link */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdbc_V0vNJGwOBjQc99oGPHtiqCZVSrxpMwy13WyE7a8-4Cvw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm shadow-sky-600/20 flex items-center gap-1.5 transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Daftar</span>
            </a>

            {/* Info Trigger */}
            <button
              onClick={onOpenInfo}
              aria-label="Buka Maklumat Inisiatif HTA"
              className="p-1.5 text-slate-700 hover:text-slate-900 rounded-lg bg-slate-100 hover:bg-slate-200 active:bg-slate-300 transition cursor-pointer"
              title="Maklumat Inisiatif HTA"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

