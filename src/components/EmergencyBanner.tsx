import React from 'react';
import { AlertTriangle, PhoneCall, ArrowRight } from 'lucide-react';

interface EmergencyBannerProps {
  onGoToEmergency: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onGoToEmergency }) => {
  return (
    <aside
      aria-label="Notis Kecemasan Akut"
      className="bg-rose-700 text-white text-xs px-3.5 py-2 font-medium shadow-sm sticky top-0 z-50 border-b border-rose-800"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center justify-center bg-rose-800 text-rose-100 rounded-full w-5 h-5 text-[11px] font-black shrink-0">
            !
          </span>
          <p className="text-[11px] sm:text-xs leading-tight truncate sm:overflow-visible">
            <strong className="tracking-wide">KECEMASAN:</strong> Sesak nafas teruk? Bawa segera ke{' '}
            <strong className="underline underline-offset-2">Jabatan Kecemasan HTA!</strong>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:999"
            className="hidden sm:inline-flex items-center gap-1 bg-rose-800 hover:bg-rose-900 text-white px-2.5 py-1 rounded-md text-[11px] font-bold transition border border-rose-600"
            title="Hubungi 999"
          >
            <PhoneCall className="w-3 h-3" />
            <span>999</span>
          </a>

          <button
            onClick={onGoToEmergency}
            className="inline-flex items-center gap-1 underline text-rose-100 hover:text-white text-[11px] font-bold whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-white rounded cursor-pointer"
          >
            <span>Tanda Bahaya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
