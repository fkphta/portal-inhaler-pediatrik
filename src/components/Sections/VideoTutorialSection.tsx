import React from 'react';
import { ExternalLink, CheckCircle2, AlertCircle, Sparkles, Video as VideoIcon } from 'lucide-react';
import { TidalBreathingPacer } from '../TidalBreathingPacer.tsx';

export const VideoTutorialSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-1 pb-1">
        <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
          Panduan Visual Rasmi
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900">
          Cara Guna Inhaler bersama Spacer dengan Corong Muka
        </h2>
        <p className="text-xs text-slate-600">
          Disediakan oleh Program Perkhidmatan Farmasi, Kementerian Kesihatan Malaysia (KKM).
        </p>
      </div>

      {/* Main Grid: Video Player + Steps Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Video Box */}
        <div className="lg:col-span-8 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800">
          <div className="relative w-full aspect-video bg-black">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/CeXpwhD1-eU?rel=0"
              title="Cara Guna Spacer dengan Corong Muka (Face Mask) yang Betul | Teknik Penggunaan Inhaler"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="p-3.5 sm:p-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
            <div>
              <div className="font-bold flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span>Teknik Penggunaan Spacer dengan Corong Muka</span>
              </div>
              <div className="text-[11px] text-slate-400">
                Bahagian Amalan &amp; Perkembangan Farmasi KKM
              </div>
            </div>
            <a
              href="https://youtu.be/CeXpwhD1-eU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 underline font-semibold text-xs inline-flex items-center gap-1 shrink-0"
            >
              <span>Buka di YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 5 Steps Card */}
        <div className="lg:col-span-4 space-y-3.5">
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200 shadow-sm space-y-2.5">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className="w-5 h-5 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">
                ✓
              </span>
              Ringkasan Langkah Utama
            </h3>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition">
                <strong className="text-slate-900 block font-bold">1. Sedia &amp; Goncang:</strong>
                Tanggalkan penutup inhaler, goncang kanister secara menegak selama 5 saat.
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition">
                <strong className="text-slate-900 block font-bold">2. Sambung ke Spacer:</strong>
                Masukkan corong inhaler ke soket getah spacer dalam kedudukan tegak.
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition">
                <strong className="text-slate-900 block font-bold">3. Rapatkan Corong Muka:</strong>
                Pastikan tekupan kedap udara melitupi hidung dan mulut anak tanpa celah.
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                <strong className="block font-bold">4. Tekan SATU Pam Sahaja:</strong>
                Tekan 1 pam semburan. Biarkan anak bernafas tenang 5 hingga 6 nafas.
              </div>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition">
                <strong className="text-slate-900 block font-bold">5. Jarak Masa Pam Kedua:</strong>
                Tunggu 30–60 saat sebelum mengulangi langkah sekiranya doktor arahkan dos kedua.
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-4 border border-teal-200 text-teal-900 text-xs space-y-1.5 shadow-xs">
            <div className="font-bold flex items-center gap-1.5 text-teal-800">
              <AlertCircle className="w-4 h-4 text-teal-700" />
              <span>Peringatan Klinikal Farmasi</span>
            </div>
            <p className="leading-relaxed">
              <strong>Jangan beri ubat semasa anak menangis teresak-esak!</strong> Tangisan menyebabkan
              hembusan kuat dan tarikan nafas pendek sehingga ubat tidak sampai ke paru-paru. Tenangkan
              anak terlebih dahulu sebelum menekup corong muka.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Tidal Breathing Trainer for Children */}
      <div className="max-w-2xl mx-auto">
        <TidalBreathingPacer />
      </div>
    </div>
  );
};
