import React, { useState } from 'react';
import {
  Pill,
  HelpCircle,
  AlertTriangle,
  Sparkles,
  Droplets,
  Printer,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export const InhalerPamphletSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kenali' | 'langkah' | 'kesilapan' | 'penjagaan'>('kenali');

  const printPamphlet = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Risalah Interaktif
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            Panduan Penggunaan Inhaler &amp; Spacer
          </h2>
          <p className="text-xs text-slate-600">
            Pilih subtopik di bawah untuk membaca keterangan klinikal terperinci.
          </p>
        </div>

        <button
          onClick={printPamphlet}
          className="self-center sm:self-auto inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold px-3.5 py-2 rounded-xl border border-slate-300 shadow-xs transition hover:border-slate-400 no-print cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5 text-slate-600" />
          <span>Cetak Risalah (PDF)</span>
        </button>
      </div>

      {/* Tab Navigation Pill Bar */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/80 rounded-2xl max-w-2xl mx-auto text-xs font-bold no-print">
        <button
          onClick={() => setActiveTab('kenali')}
          className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
            activeTab === 'kenali'
              ? 'bg-[#006194] text-white shadow-sm'
              : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          Kenali Ubat &amp; Spacer
        </button>
        <button
          onClick={() => setActiveTab('langkah')}
          className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
            activeTab === 'langkah'
              ? 'bg-[#006194] text-white shadow-sm'
              : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          Langkah Penggunaan
        </button>
        <button
          onClick={() => setActiveTab('kesilapan')}
          className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
            activeTab === 'kesilapan'
              ? 'bg-[#006194] text-white shadow-sm'
              : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          Kesilapan Lazim
        </button>
        <button
          onClick={() => setActiveTab('penjagaan')}
          className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
            activeTab === 'penjagaan'
              ? 'bg-[#006194] text-white shadow-sm'
              : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          Pembersihan Spacer
        </button>
      </div>

      {/* TAB CONTENT 1: KENALI UBAT & SPACER */}
      {activeTab === 'kenali' && (
        <div className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Salbutamol Blue */}
            <div className="bg-white rounded-2xl p-5 border-2 border-sky-200 shadow-sm space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-sky-600 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg">
                Dibekalkan di ED HTA
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm">
                  MDI
                </div>
                <div>
                  <span className="text-[10px] font-bold text-sky-600 uppercase">
                    Inhaler Pelega (Reliever)
                  </span>
                  <h3 className="text-base font-bold text-slate-900">Salbutamol (Warna Biru)</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bertindak pantas dalam 5 minit untuk merehatkan otot dinding saluran pernafasan yang mengecut
                semasa serangan asma akut.
              </p>
              <div className="bg-sky-50 rounded-xl p-3 text-xs text-sky-900 border border-sky-100">
                <strong>Cara Guna:</strong> Gunakan semasa sesak nafas mengikut arahan doktor (biasanya 2
                pam, sedut satu demi satu dengan spacer).
              </div>
            </div>

            {/* Inhaler Preventer Brown/Orange */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-sm">
                  ICS
                </div>
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase">
                    Inhaler Pencegah (Preventer)
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    Kortikosteroid (Warna Coklat / Jingga)
                  </h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Merawat bengkak dan keradangan dalam paru-paru secara berterusan bagi mengelakkan serangan
                berulang pada masa hadapan.
              </p>
              <div className="bg-amber-50 rounded-xl p-3 text-xs text-amber-900 border border-amber-100">
                <strong>Penting:</strong> Perlu digunakan <strong>setiap hari secara konsisten</strong> walaupun
                tiada batuk atau sesak. Lap muka dan basuh mulut selepas guna.
              </div>
            </div>
          </div>

          {/* Spacer Anatomy Callout */}
          <div className="bg-gradient-to-r from-teal-900 via-sky-900 to-slate-900 text-white rounded-2xl p-5 sm:p-6 shadow-md">
            <div className="space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-800/80 px-2 py-0.5 rounded">
                Aksesori Wajib Pediatrik
              </span>
              <h3 className="text-base sm:text-lg font-bold">
                Mengapa Kanak-Kanak Wajib Menggunakan Spacer?
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                Kanak-kanak belum mempunyai koordinasi untuk menekan ubat dan menyedut pada saat yang sama.
                Tanpa spacer, <strong>sehingga 80% dos ubat hanya terperangkap di tekak dan lidah</strong>,
                lalu tertelan ke dalam perut tanpa sempat sampai ke paru-paru. Spacer menampung semburan aerosol
                supaya anak boleh menyedutnya dengan perlahan dan tenang melalui 5–6 nafas.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: LANGKAH LENGKAP */}
      {activeTab === 'langkah' && (
        <div className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
              <span className="text-xs font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                Langkah 01
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Buka &amp; Periksa</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Buka penutup inhaler dan spacer. Periksa tiada sebarang habuk atau objek asing di dalamnya.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
              <span className="text-xs font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                Langkah 02
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Goncang 5 Saat</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Goncang inhaler secara menegak selama sekurang-kurangnya 5 saat agar ubat bercampur serata.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
              <span className="text-xs font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                Langkah 03
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Pasang ke Spacer</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Masukkan corong inhaler ke bukaan getah belakang spacer dengan kedudukan botol ubat menegak.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
              <span className="text-xs font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                Langkah 04
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Tekup Corong Muka</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Tekup corong muka menutupi hidung &amp; mulut anak secara kemas tanpa ada sebarang celah udara.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border-2 border-amber-300 bg-amber-50/50 shadow-xs space-y-1.5">
              <span className="text-xs font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Langkah 05 (Kritikal)
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Tekan 1 Kali Sahaja</h4>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                Tekan inhaler <strong>1 PAM SAHAJA</strong> ke dalam spacer. Jangan sesekali menekan 2 atau 3 pam serentak.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1.5">
              <span className="text-xs font-black text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                Langkah 06
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Sedut 5–6 Nafas</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Biarkan anak bernafas santai 5 hingga 6 nafas perlahan melalui corong muka sambil memerhatikan pergerakan injap.
              </p>
            </div>
          </div>

          <div className="p-3.5 bg-sky-50 border border-sky-200 rounded-2xl text-xs text-sky-950 flex items-center gap-2">
            <span className="text-lg">⏱️</span>
            <div>
              <strong>Perlu dos pam kedua?</strong> Tunggu antara <strong>30 hingga 60 saat</strong>, kemudian goncang
              semula kanister inhaler dan ulangi langkah dari awal untuk semburan kedua.
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: KESILAPAN LAZIM */}
      {activeTab === 'kesilapan' && (
        <div className="space-y-4 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-4 space-y-2 text-rose-950">
              <div className="flex items-center gap-2 font-bold text-rose-700 text-xs sm:text-sm">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Menekan Beberapa Pam Sekaligus (Multi-Puffing)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Menekan 2 atau 3 pam serentak menyebabkan titisan ubat berlanggar antara satu sama lain dan
                melekat pada dinding plastik spacer. Akibatnya, anak hanya menerima dos yang sangat sedikit.
              </p>
            </div>

            <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-4 space-y-2 text-rose-950">
              <div className="flex items-center gap-2 font-bold text-rose-700 text-xs sm:text-sm">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Memberi Semasa Anak Menangis Teresak-esak</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Semasa menangis, saluran udara mengecut dan tarikan nafas terlalu cetek. Hampir 0% ubat
                mampu masuk melepasi pita suara ke bronkus paru-paru bawah.
              </p>
            </div>

            <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-4 space-y-2 text-rose-950">
              <div className="flex items-center gap-2 font-bold text-rose-700 text-xs sm:text-sm">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Menyedut Terlalu Laju (Bunyi Wisel Spacer)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Jika spacer berbunyi wisel, itu tanda sedutan terlalu laju. Zarah ubat akan terhempas pada
                tekak dan lelangit mulut bukannya turun ke dalam paru-paru.
              </p>
            </div>

            <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-4 space-y-2 text-rose-950">
              <div className="flex items-center gap-2 font-bold text-rose-700 text-xs sm:text-sm">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Mengelap Kering Bahagian Dalam Spacer</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Mengelap plastik dengan kain atau tisu menghasilkan cas elektrostatik tinggi yang akan menarik
                dan memerangkap titisan ubat pada dinding spacer selama berhari-hari.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2 text-amber-950">
            <h4 className="text-xs sm:text-sm font-bold text-amber-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Akibat Penggunaan Inhaler &amp; Spacer yang Salah:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
              <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-xs">
                <strong className="text-slate-900 block mb-0.5">Simptom Sukar Kawal:</strong>
                Asma lambat reda, batuk malam berulang, dan sesak nafas kerap datang semula.
              </div>
              <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-xs">
                <strong className="text-slate-900 block mb-0.5">Kemasukan Semula ED:</strong>
                Risiko tinggi serangan asma berulang dan terpaksa berulang-alik ke Jabatan Kecemasan HTA.
              </div>
              <div className="bg-white p-3 rounded-xl border border-amber-100 shadow-xs">
                <strong className="text-slate-900 block mb-0.5">Kualiti Hidup Terjejas:</strong>
                Gangguan tidur si manja, kerap ponteng sekolah, dan kebimbangan berterusan bagi ibu bapa.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: PEMBERSIHAN SPACER */}
      {activeTab === 'penjagaan' && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-3.5">
            <div className="border-b border-slate-100 pb-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                Seminggu Sekali
              </span>
              <h4 className="text-base font-bold text-slate-900 mt-1">
                Cara Membersihkan Spacer dengan Betul di Rumah
              </h4>
              <p className="text-xs text-slate-500">
                Pembersihan berkala mengurangkan pengumpulan habuk dan mengekalkan keberkesanan ubat.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-slate-700">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-xs font-black text-sky-600 block">01. Leraikan</span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Tanggalkan penutup corong, gelang getah belakang dan corong muka (face mask).
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-xs font-black text-sky-600 block">02. Rendam Sabun</span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Rendam bahagian selama 15 minit dalam air suam dengan beberapa titis cecair pencuci pinggan lembut.
                </p>
              </div>

              <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-950 space-y-1">
                <span className="text-xs font-black text-amber-700 block">03. Jangan Bilas Bersih!</span>
                <p className="text-[11px] text-amber-900 leading-relaxed">
                  <strong>Penting:</strong> Biarkan lapisan buih sabun tipis kekal pada plastik untuk mencegah cas elektrostatik.
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="text-xs font-black text-sky-600 block">04. Kering Udara Sahaja</span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Letakkan di atas para bersih dan biarkan kering sendiri. <strong>JANGAN LAP</strong> dengan kain tuala atau tisu.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
