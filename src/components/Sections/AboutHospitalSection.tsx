import React, { useState } from 'react';
import { FREQUENT_QUESTIONS } from '../../data/portalData.ts';
import {
  Hospital,
  Clock,
  Phone,
  MapPin,
  ExternalLink,
  ChevronDown,
  HelpCircle,
  Building2,
  ShieldCheck,
  Share2
} from 'lucide-react';

export const AboutHospitalSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-6">
      {/* Initiative Overview Card */}
      <div className="bg-slate-100/90 rounded-3xl p-5 sm:p-8 border border-slate-200 text-slate-700 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Inisiatif Kualiti Perkhidmatan Kesihatan Hospital Tunku Azizah</span>
            </div>

            <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
              Penambahbaikan Akses kepada Kaunseling Inhaler bagi Pesakit Pediatrik di Jabatan Kecemasan HTA
              Selepas Waktu Pejabat melalui Kaunseling Maya
            </h2>

            <p className="text-xs text-slate-600 leading-relaxed">
              Inisiatif ini diterajui secara kolaboratif oleh{' '}
              <strong>Jabatan Farmasi bersama Jabatan Kecemasan &amp; Trauma Hospital Tunku Azizah (HTA)</strong>.
              Matlamat utama inisiatif ini adalah untuk merapatkan jurang bimbingan kaunseling ubat bagi pesakit
              yang dibekalkan inhaler selepas waktu pejabat atau pada hari minggu.
            </p>

            <p className="text-xs text-slate-600 leading-relaxed">
              Melalui kaunseling maya secara video 1-ke-1, ibu bapa dapat menguasai teknik penggunaan spacer dan
              inhaler dengan tepat, mengurangkan risiko kesilapan dos, dan seterusnya mencegah serangan asma berulang
              serta kemasukan semula ke Jabatan Kecemasan.
            </p>

            <div className="flex flex-wrap gap-2 pt-2 text-xs">
              <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-200 font-semibold text-slate-800 shadow-2xs">
                Kaunseling Maya Pediatrik
              </span>

              <a
                href="https://linktr.ee/kaunseling.hta"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-xl font-semibold hover:bg-emerald-100 transition flex items-center gap-1.5 shadow-2xs"
              >
                <span>Linktree: @kaunseling.hta</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Details Widget */}
          <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-1.5">
              <Hospital className="w-4 h-4 text-sky-600" />
              <span>Hubungi Farmasi HTA</span>
            </h3>

            <div className="text-xs space-y-2.5 text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                <p>
                  <strong>Lokasi:</strong> Farmasi Klinik Pakar, Hospital Tunku Azizah (Hospital Wanita &amp;
                  Kanak-kanak Kuala Lumpur), Jalan Raja Muda Abdul Aziz, 50300 Kuala Lumpur.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                <p>
                  <strong>Waktu Operasi Kaunter:</strong> 8:00 PG – 5:00 PTG (Hari Bekerja)
                </p>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                <p>
                  <strong>Telefon:</strong>{' '}
                  <a href="tel:0326003000" className="text-sky-600 underline font-semibold">
                    03-2600 3000
                  </a>{' '}
                  (samb. 1622 / 1617)
                </p>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                <p>
                  <strong>Kaunseling Maya:</strong> Isnin – Jumaat (Slot 8:30-10:00 PG &amp; 3:00-4:30 PTG)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <HelpCircle className="w-5 h-5 text-sky-600" />
          <h3 className="text-sm sm:text-base font-black text-slate-900">
            Soalan Lazim Mengenai Inhaler &amp; Spacer (FAQ)
          </h3>
        </div>

        <div className="space-y-2.5">
          {FREQUENT_QUESTIONS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-3.5 sm:p-4 text-left font-bold text-xs sm:text-sm text-slate-800 bg-slate-50/60 hover:bg-slate-100/70 transition flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-3.5 sm:p-4 text-xs text-slate-600 bg-white border-t border-slate-100 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
