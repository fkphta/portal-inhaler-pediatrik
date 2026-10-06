import React from 'react';
import { AlertOctagon, PhoneCall, ShieldAlert, HeartPulse, Hospital, Clock } from 'lucide-react';

export const EmergencyRedFlagsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* High Alert Hero Box */}
      <div className="bg-gradient-to-br from-rose-900 via-rose-800 to-red-950 text-white rounded-3xl p-5 sm:p-8 shadow-xl relative overflow-hidden space-y-4 border border-rose-700/60">
        {/* Pulsing Alert Badge */}
        <div className="inline-flex items-center gap-2 bg-rose-700/80 text-rose-100 text-xs font-bold px-3 py-1 rounded-full border border-rose-600">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300 animate-ping" />
          Kecemasan Akut Pediatrik
        </div>

        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Bila Perlu Bawa Anak ke Kecemasan Serta-Merta?
          </h2>
          <p className="text-xs sm:text-sm text-rose-100 leading-relaxed max-w-3xl">
            Inhaler di rumah adalah untuk kelegaan serangan biasa. Jika anak anda menunjukkan sebarang
            tanda amaran bahaya di bawah,{' '}
            <strong>JANGAN TUNGGU SESI KAUNSELING MAYA</strong>. Berikan 2–4 semburan Salbutamol segera
            bersama spacer dan terus bawa ke Jabatan Kecemasan HTA.
          </p>
        </div>

        {/* 4 Emergency Signs Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-start gap-3 hover:bg-white/15 transition">
            <div className="w-7 h-7 rounded-lg bg-rose-600 text-white font-black flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xs">
              !
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">
                Nafas Laju &amp; Berombak
              </h3>
              <p className="text-[11px] text-rose-100 leading-snug">
                Hidung kembang-kempis atau dinding dada/tulang rusuk tertarik ke dalam secara ketara (chest
                indrawing).
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-start gap-3 hover:bg-white/15 transition">
            <div className="w-7 h-7 rounded-lg bg-rose-600 text-white font-black flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xs">
              !
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">
                Bibir / Kuku Kebiruan
              </h3>
              <p className="text-[11px] text-rose-100 leading-snug">
                Tanda kekurangan oksigen kritikal (sianosis). Anak pucat atau kawasan mulut bertukar kebiruan.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-start gap-3 hover:bg-white/15 transition">
            <div className="w-7 h-7 rounded-lg bg-rose-600 text-white font-black flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xs">
              !
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">
                Sukar Bercakap / Menyusu
              </h3>
              <p className="text-[11px] text-rose-100 leading-snug">
                Anak tidak mampu bercakap sepatah ayat penuh tanpa tercungap-cungap atau bayi enggan menyusu.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-start gap-3 hover:bg-white/15 transition">
            <div className="w-7 h-7 rounded-lg bg-rose-600 text-white font-black flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xs">
              !
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-white leading-tight">
                Lesu &amp; Tiada Respon
              </h3>
              <p className="text-[11px] text-rose-100 leading-snug">
                Anak kelihatan amat mengantuk, keliru, lemah longlai, atau ubat Salbutamol langsung tidak
                memberikan kelegaan.
              </p>
            </div>
          </div>
        </div>

        {/* Hotline & ED Emergency Banner */}
        <div className="p-4 bg-rose-950/80 rounded-2xl border border-rose-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-rose-200">
            <PhoneCall className="w-4 h-4 text-rose-400 shrink-0" />
            <span>
              <strong>Talian Kecemasan Malaysia:</strong> Hubungi <strong>999</strong> jika anda memerlukan
              bantuan ambulans segera.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="tel:999"
              className="bg-rose-600 hover:bg-rose-500 text-white font-black px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Dail 999</span>
            </a>
            <span className="text-white font-bold bg-rose-900/90 px-3.5 py-2 rounded-xl border border-rose-700 text-center">
              ED HTA Buka 24 Jam
            </span>
          </div>
        </div>
      </div>

      {/* Immediate First-Aid Action Flow */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-3.5">
        <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
          <HeartPulse className="w-4 h-4 text-rose-600" />
          <span>Tindakan Pantas Semasa Menunggu Bantuan</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <strong className="text-slate-900 block font-bold">1. Dudukkan Anak Tegak</strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Jangan baringkan anak. Posisi tegak sedikit condong ke hadapan membantu rongga paru-paru
              mengembang lebih luas.
            </p>
          </div>

          <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200 text-rose-950 space-y-1">
            <strong className="block font-bold">2. Beri Salbutamol Pantas</strong>
            <p className="text-[11px] text-rose-900 leading-relaxed">
              Beri 2 hingga 4 pam Salbutamol secara berasingan melalui spacer (1 pam, 5-6 nafas, tunggu 30
              saat, ulangi pam seterusnya).
            </p>
          </div>

          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
            <strong className="text-slate-900 block font-bold">3. Bergerak ke Hospital Segera</strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Terus bawa ke Jabatan Kecemasan HTA. Sekiranya perjalanan memakan masa dan anak masih sesak,
              Salbutamol boleh diulang setiap beberapa minit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
