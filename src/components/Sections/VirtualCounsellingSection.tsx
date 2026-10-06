import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Video,
  ExternalLink,
  CheckCircle2,
  Send,
  Sparkles,
  ShieldAlert,
  ClipboardList,
  PhoneCall,
  UserCheck
} from 'lucide-react';

export const VirtualCounsellingSection: React.FC = () => {
  const [childName, setChildName] = useState('');
  const [age, setAge] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [preferredSlot, setPreferredSlot] = useState('Pagi (8:30 AM - 10:00 AM)');
  const [medicationType, setMedicationType] = useState('Salbutamol (Biru) + Spacer');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!childName.trim() || !parentPhone.trim()) return;
    setBookingSuccess(true);
  };

  const getWhatsAppMessage = () => {
    const text = `Salam Farmasi HTA, saya ingin mendaftar sesi Kaunseling Maya Inhaler Pediatrik:
- Nama Pesakit: ${childName}
- Umur: ${age || '-'} tahun
- No. Waris: ${parentPhone}
- Sesi Dipilih: ${preferredSlot}
- Ubat: ${medicationType}
Mohon pengesahan slot temujanji. Terima kasih!`;
    return encodeURIComponent(text);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Card */}
      <div className="relative bg-gradient-to-br from-white via-sky-50/60 to-teal-50/40 rounded-3xl p-5 sm:p-8 border border-sky-100 shadow-md">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 text-xs font-bold px-3 py-1 rounded-full border border-sky-200">
            <Video className="w-3.5 h-3.5 text-sky-700" />
            Perkhidmatan Kaunseling Maya Farmasi HTA
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
            Perlukan Bantuan Menggunakan Inhaler? <br />
            <span className="text-sky-600">Jumpa Pegawai Farmasi Secara Maya!</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            Ibu bapa kini tidak perlu hadir semula ke hospital semata-mata untuk demonstrasi ubat.
            Pegawai Farmasi Hospital Tunku Azizah sedia membimbing anda secara{' '}
            <strong>1-ke-1 dari rumah</strong> mengikut keselesaan masa anda bagi memastikan anak anda
            mendapat dos ubat yang betul.
          </p>

          {/* Schedule Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-sky-700 font-bold text-xs sm:text-sm mb-2">
                <Calendar className="w-4 h-4" />
                <span>Waktu Kaunseling Maya</span>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <p>
                  <strong>Hari:</strong> Isnin hingga Jumaat (Kecuali Cuti Umum)
                </p>
                <p>
                  <strong>Sesi Pagi:</strong> 8:30 AM – 10:00 AM
                </p>
                <p>
                  <strong>Sesi Petang:</strong> 3:00 PM – 4:30 PM
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-xs sm:text-sm mb-2">
                <Clock className="w-4 h-4" />
                <span>Format &amp; Platform</span>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <p>
                  <strong>Durasi:</strong> 20 – 30 Minit setiap sesi
                </p>
                <p>
                  <strong>Platform:</strong> Google Meet / Panggilan Video WhatsApp
                </p>
                <p className="text-emerald-700 font-bold">
                  <strong>Yuran:</strong> 100% PERCUMA untuk pesakit HTA
                </p>
              </div>
            </div>
          </div>

          {/* Direct External Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdbc_V0vNJGwOBjQc99oGPHtiqCZVSrxpMwy13WyE7a8-4Cvw/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 transition"
            >
              <ClipboardList className="w-4 h-4" />
              <span>1. Isi Borang Pendaftaran Rasmi</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href="https://calendar.app.google/gtarUVDkAM463Yxk8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-300 shadow-xs flex items-center justify-center gap-2 transition hover:border-slate-400"
            >
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>2. Pilih Slot Temujanji Maya (Kalendar)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          <p className="text-[11px] text-slate-500 italic">
            * Nota: Pegawai Farmasi akan menghantar pautan panggilan dan peringatan temujanji menerusi
            WhatsApp sebelum sesi maya bermula.
          </p>
        </div>
      </div>

      {/* Two Column Layout: Quick Booking Form + Preparation Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Interactive Booking Form Card */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                Langkah Pantas
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                Borang Pra-Pendaftaran Sesi Kaunseling
              </h3>
            </div>
            <span className="text-xs text-slate-400">HTA Farmasi</span>
          </div>

          {bookingSuccess ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-3 animate-fade-in text-emerald-950">
              <div className="flex items-center gap-2 text-emerald-700 font-black text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Maklumat Pra-Pendaftaran Diterima!</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Terima kasih <strong>{childName}</strong> ({age} tahun). Anda boleh terus menghantar mesej
                pengesahan segera ke nombor WhatsApp Farmasi HTA atau membuka pautan Google Form rasmi.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`https://wa.me/60326003000?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-1.5 transition"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Hantar WhatsApp ke Pegawai Farmasi</span>
                </a>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 transition"
                >
                  Daftar Pesakit Lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Nama Anak / Pesakit <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Muhammad Adam"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-sky-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Umur Kanak-kanak <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 4 Tahun"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-sky-600 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Nombor Telefon / WhatsApp Waris <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 012-3456789"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-sky-600 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Pilihan Sesi</label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-sky-600 bg-white"
                  >
                    <option value="Pagi (8:30 AM - 10:00 AM)">Sesi Pagi (8:30 – 10:00 AM)</option>
                    <option value="Petang (3:00 PM - 4:30 PM)">Sesi Petang (3:00 – 4:30 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Jenis Inhaler Dibekalkan</label>
                  <select
                    value={medicationType}
                    onChange={(e) => setMedicationType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/25 focus:border-sky-600 bg-white"
                  >
                    <option value="Salbutamol (Biru) + Spacer">Salbutamol (Biru Pelega) + Spacer</option>
                    <option value="Kortikosteroid (Coklat/Jingga) + Spacer">
                      Inhaler Pencegah (Coklat/Jingga) + Spacer
                    </option>
                    <option value="Kedua-dua jenis (Biru & Coklat)">Kedua-dua jenis (Biru &amp; Coklat)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-black py-3 rounded-xl shadow-md shadow-sky-600/20 transition flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>Simpan Pra-Pendaftaran</span>
              </button>
            </form>
          )}
        </div>

        {/* 4 Things to Prepare Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 text-white rounded-3xl p-5 sm:p-6 shadow-md space-y-3.5">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-sky-500 text-white flex items-center justify-center text-xs font-black">
                ✓
              </span>
              Persediaan Sesi Kaunseling Maya
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bagi memastikan sesi kaunseling berjalan lancar dan berkesan, sila pastikan anda telah
              menyediakan:
            </p>

            <ul className="space-y-2.5 text-xs text-slate-200">
              <li className="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                <span className="text-sky-400 font-bold shrink-0">1.</span>
                <span>
                  <strong>Kanister Ubat Inhaler (MDI):</strong> Pastikan kanister ubat yang dibekalkan di
                  Kecemasan ada bersama.
                </span>
              </li>
              <li className="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                <span className="text-sky-400 font-bold shrink-0">2.</span>
                <span>
                  <strong>Spacer &amp; Corong Muka:</strong> Peranti AeroChamber / OptiChamber yang dipreskripsikan.
                </span>
              </li>
              <li className="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                <span className="text-sky-400 font-bold shrink-0">3.</span>
                <span>
                  <strong>Kehadiran Si Kecil:</strong> Anak berada di sisi ibu bapa supaya pegawai farmasi
                  dapat melihat demonstrasi sebenar.
                </span>
              </li>
              <li className="flex items-start gap-2 bg-slate-800/80 p-2.5 rounded-xl border border-slate-700/60">
                <span className="text-sky-400 font-bold shrink-0">4.</span>
                <span>
                  <strong>Capaian Internet &amp; Kamera:</strong> Sambungan kamera yang jelas untuk semakan
                  teknik tekupan corong muka.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
