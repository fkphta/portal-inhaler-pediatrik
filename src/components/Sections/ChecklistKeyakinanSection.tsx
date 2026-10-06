import React, { useState } from 'react';
import { CHECKLIST_STEPS } from '../../data/portalData.ts';
import { CheckCircle2, RotateCcw, CheckSquare, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';

interface ChecklistKeyakinanSectionProps {
  onGoToBooking: () => void;
}

export const ChecklistKeyakinanSection: React.FC<ChecklistKeyakinanSectionProps> = ({
  onGoToBooking,
}) => {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const toggleCheck = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setCheckedIds(CHECKLIST_STEPS.map((s) => s.id));
  };

  const handleReset = () => {
    setCheckedIds([]);
  };

  const score = checkedIds.length;
  const total = CHECKLIST_STEPS.length;

  let statusLabel = 'Belum lengkap';
  let statusBadgeClass = 'bg-slate-100 text-slate-600 border-slate-200';
  let feedbackText = 'Sila tandakan langkah-langkah yang anda amalkan di atas.';
  let feedbackBoxClass = 'bg-slate-50 border-slate-200 text-slate-700';

  if (score === 0) {
    statusLabel = 'Belum lengkap';
    statusBadgeClass = 'bg-slate-100 text-slate-600 border-slate-200';
    feedbackText = 'Sila tandakan langkah yang anda amalkan di atas.';
    feedbackBoxClass = 'bg-slate-50 border-slate-200 text-slate-700';
  } else if (score < 5) {
    statusLabel = 'Perlu Bimbingan';
    statusBadgeClass = 'bg-rose-100 text-rose-700 border-rose-200';
    feedbackText =
      'Perhatian: Beberapa langkah kritikal mungkin tertinggal. Kami amat mengesyorkan anda menempah sesi kaunseling maya percuma bersama Pegawai Farmasi HTA.';
    feedbackBoxClass = 'bg-rose-50 border-rose-200 text-rose-950';
  } else if (score < 8) {
    statusLabel = 'Sederhana Baik';
    statusBadgeClass = 'bg-amber-100 text-amber-800 border-amber-200';
    feedbackText =
      'Baik: Anda hampir menguasai teknik sepenuhnya. Sila pastikan langkah seperti 1 pam sahaja dan rehat 30-60 saat antara dos sentiasa dipatuhi.';
    feedbackBoxClass = 'bg-amber-50 border-amber-200 text-amber-950';
  } else {
    statusLabel = 'Cemerlang!';
    statusBadgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-200';
    feedbackText =
      'Tahniah! Anda menguasai semua 8 teknik kritikal penggunaan inhaler dan spacer. Teruskan amalan terbaik ini demi kesihatan nafas anak anda.';
    feedbackBoxClass = 'bg-emerald-50 border-emerald-200 text-emerald-950';
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-md space-y-5">
        {/* Header with Live Score Box */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              Penilaian Kendiri Ibu Bapa
            </span>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
              Uji Tahap Keyakinan &amp; Teknik Inhaler Anda
            </h2>
            <p className="text-xs text-slate-600">
              Tandakan amalan harian anda untuk mengira skor penguasaan teknik spacer.
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-center shrink-0 min-w-[150px] shadow-xs">
            <div className="text-[11px] font-semibold text-slate-500">Skor Anda</div>
            <div className="text-2xl font-black text-sky-600">
              {score} / {total}
            </div>
            <span
              className={`inline-block text-[10px] font-black px-2 py-0.5 rounded-full border mt-1 ${statusBadgeClass}`}
            >
              {statusLabel}
            </span>
          </div>
        </div>

        {/* Quick Toolbar */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>8 Langkah Berasaskan Protokol Klinikal Farmasi KKM</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleSelectAll}
              className="text-sky-600 hover:text-sky-800 font-bold transition cursor-pointer"
            >
              Tanda Semua
            </button>
            <span>•</span>
            <button
              onClick={handleReset}
              className="text-slate-500 hover:text-slate-700 font-semibold transition cursor-pointer"
            >
              Kosongkan
            </button>
          </div>
        </div>

        {/* 8 Checkbox Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {CHECKLIST_STEPS.map((step) => {
            const isChecked = checkedIds.includes(step.id);
            return (
              <label
                key={step.id}
                className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                  isChecked
                    ? 'border-sky-300 bg-sky-50/60 shadow-xs'
                    : 'border-slate-200 hover:bg-slate-50/80 bg-white'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleCheck(step.id)}
                  className="mt-0.5 w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300 shrink-0 cursor-pointer"
                />
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {step.title}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-[10px] text-sky-700/80 italic pt-0.5">
                    Tujuan: {step.importance}
                  </p>
                </div>
              </label>
            );
          })}
        </div>

        {/* Result & Clinical Feedback Box */}
        <div
          className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs transition-colors ${feedbackBoxClass}`}
        >
          <div className="space-y-0.5">
            <strong>Nasihat Farmasi:</strong>
            <p className="leading-relaxed">{feedbackText}</p>
          </div>

          <button
            onClick={onGoToBooking}
            className="bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold px-4 py-2.5 rounded-xl shrink-0 transition flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span>Daftar Kaunseling Maya</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
