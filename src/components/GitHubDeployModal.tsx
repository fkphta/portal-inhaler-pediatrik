import React, { useState } from 'react';
import {
  X,
  Github,
  CheckCircle2,
  Copy,
  ExternalLink,
  Terminal,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Apple,
  Settings,
  FolderLock,
  MousePointerClick,
  FileWarning
} from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'toolarge' | 'desktop_app' | 'mac' | 'actions'>('toolarge');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                Panduan Terbitan ke GitHub &amp; Selesaikan Ralat
              </h3>
              <p className="text-[11px] text-slate-500">
                Penyelesaian ralat 'File too large' / limit 100MB di GitHub Desktop &amp; Mac
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200 transition cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 px-4 sm:px-6 bg-white gap-2 pt-2 text-xs font-bold overflow-x-auto hide-scrollbar">
          <button
            onClick={() => setActiveTab('toolarge')}
            className={`pb-2.5 px-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'toolarge'
                ? 'border-rose-600 text-rose-700 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <FileWarning className="w-3.5 h-3.5 text-rose-600" />
            <span>Ralat 'File Too Large' (Selesaikan di Sini!)</span>
          </button>

          <button
            onClick={() => setActiveTab('desktop_app')}
            className={`pb-2.5 px-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'desktop_app'
                ? 'border-emerald-600 text-emerald-700 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <MousePointerClick className="w-3.5 h-3.5" />
            <span>Cara Guna GitHub Desktop</span>
          </button>

          <button
            onClick={() => setActiveTab('mac')}
            className={`pb-2.5 px-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'mac'
                ? 'border-sky-600 text-sky-700 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Apple className="w-3.5 h-3.5" />
            <span>Arahan Terminal Mac</span>
          </button>

          <button
            onClick={() => setActiveTab('actions')}
            className={`pb-2.5 px-3 border-b-2 transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'actions'
                ? 'border-sky-600 text-sky-700 font-black'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Aktifkan Laman Web (Pages)</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs flex-1">
          {/* TAB 1: FILE TOO LARGE FIX */}
          {activeTab === 'toolarge' && (
            <div className="space-y-4">
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-rose-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-rose-800 text-xs sm:text-sm">
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Mengapa Ralat "File Too Large" Berlaku?</span>
                </div>
                <p className="leading-relaxed text-slate-700">
                  GitHub mempunyai had saiz fail maksimum <strong>100 MB</strong>. Folder{' '}
                  <code className="bg-rose-100 text-rose-900 px-1 py-0.5 rounded font-mono font-bold">
                    node_modules
                  </code>{' '}
                  mengandungi ratusan megabait fail binari luaran (seperti <em>esbuild</em>) dan{' '}
                  <strong>TIDAK SEPATUTNYA</strong> dimuat naik ke GitHub. GitHub hanya perlukan kod sumber anda
                  sahaja!
                </p>
              </div>

              {/* Solution A: In GitHub Desktop directly */}
              <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 space-y-2.5 text-emerald-950">
                <span className="font-bold text-xs sm:text-sm text-emerald-800 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                    A
                  </span>
                  Cara Selesaikan Terus di Dalam GitHub Desktop (1 Minit)
                </span>
                <ol className="list-decimal list-inside space-y-2 text-slate-700 pl-1 leading-relaxed">
                  <li>
                    Di panel sebelah kiri GitHub Desktop (di bawah senarai <strong>Changes</strong>):
                  </li>
                  <li>
                    Cari folder <code className="bg-white px-1 py-0.5 rounded border">node_modules</code>.
                  </li>
                  <li>
                    <strong>Klik kanan (Right-click / Dua jari)</strong> pada nama fail/folder{' '}
                    <code>node_modules</code> tersebut.
                  </li>
                  <li>
                    Pilih pilihan <strong>"Ignore folder"</strong> (atau <em>"Ignore all files in folder"</em>).
                  </li>
                  <li>
                    Semua fail berat akan hilang dari senarai komit serta-merta!
                  </li>
                  <li>
                    Sekarang anda boleh taip ringkasan di kotak <em>Summary</em> dan klik butang{' '}
                    <strong>"Commit to main"</strong> dengan jayanya!
                  </li>
                </ol>
              </div>

              {/* Solution B: Via 2 Terminal Commands */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-sky-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      B
                    </span>
                    Cara Selesaikan Menggunakan Terminal (2 Baris Arahan Sahaja)
                  </span>
                  <button
                    onClick={() =>
                      copyText(
                        'git rm -r --cached node_modules\ngit reset HEAD~1\ngit add -A\ngit commit -m "feat: Portal Inhaler Pediatrik HTA"\ngit push -u origin main',
                        'fix-toolarge'
                      )
                    }
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 bg-white border border-slate-200 px-2.5 py-1 rounded-lg hover:bg-slate-50 cursor-pointer"
                  >
                    {copiedKey === 'fix-toolarge' ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Disalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Salin Arahan</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Jika komit telah dibuat sebelum ini dan tersangkut kerana fail besar, jalankan arahan ini di
                  Terminal untuk membatalkan komit fail besar dan menolak kod sumber sahaja:
                </p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-xl overflow-x-auto font-mono text-[11px] leading-relaxed">
{`git rm -r --cached node_modules
git reset HEAD~1
git add -A
git commit -m "feat: Portal Inhaler Pediatrik HTA"
git push -u origin main`}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: GITHUB DESKTOP */}
          {activeTab === 'desktop_app' && (
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 text-emerald-950 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Paling Senang Tanpa Terminal:</strong> Perisian rasmi{' '}
                  <strong>GitHub Desktop untuk Mac</strong> membolehkan anda memuat naik kod tanpa perlu
                  menaip arahan terminal dan log masuk secara automatik melalui browser!
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">1. Pasang GitHub Desktop</span>
                  <a
                    href="https://desktop.github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-emerald-700 transition"
                  >
                    <span>Muat Turun untuk Mac</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-slate-600">
                  Layari <strong>desktop.github.com</strong> dan pasang pada Mac anda, kemudian log masuk ke akaun GitHub anda.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <span className="font-bold text-slate-900">2. Buka Folder Projek Ini</span>
                <p className="text-slate-600 leading-relaxed">
                  Di dalam GitHub Desktop, klik menu <strong>File &gt; Add Local Repository...</strong> (atau seret folder projek ini terus ke dalam tetingkap aplikasi).
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <span className="font-bold text-slate-900">3. Pastikan node_modules diabaikan &amp; Klik Publish</span>
                <p className="text-slate-600 leading-relaxed">
                  Klik kanan pada <code>node_modules</code> dan pilih <em>"Ignore folder"</em>, kemudian tekan
                  butang biru <strong>Publish repository</strong> di bahagian atas!
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: MAC TERMINAL */}
          {activeTab === 'mac' && (
            <div className="space-y-4">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">Arahan Penuh Terminal MacBook:</span>
                  <button
                    onClick={() =>
                      copyText(
                        'sudo chown -R $(whoami) .\nrm -f .git/index.lock\ngit config --global --add safe.directory "*"\ngit rm -r --cached node_modules 2>/dev/null\ngit add -A\ngit commit -m "feat: Portal Inhaler Pediatrik HTA"\ngit branch -M main\ngit push -u origin main',
                        'full-mac-script'
                      )
                    }
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-700 bg-white border border-slate-200 px-2 py-1 rounded-lg"
                  >
                    {copiedKey === 'full-mac-script' ? 'Disalin!' : 'Salin Semua'}
                  </button>
                </div>
                <p className="text-slate-600">
                  Salin dan tampal arahan ini di Terminal Mac anda untuk membetulkan kebenaran fail dan memuat naik projek:
                </p>
                <pre className="bg-slate-900 text-slate-100 p-3 rounded-xl font-mono text-[11px] leading-relaxed overflow-x-auto">
{`# 1. Betulkan kebenaran fail Mac
sudo chown -R $(whoami) .
rm -f .git/index.lock
git config --global --add safe.directory "*"

# 2. Buang node_modules dari Git & tolak kod
git rm -r --cached node_modules 2>/dev/null
git add -A
git commit -m "feat: Portal Inhaler Pediatrik HTA"
git branch -M main
git push -u origin main`}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 4: GITHUB PAGES */}
          {activeTab === 'actions' && (
            <div className="space-y-4">
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-3.5 text-sky-950">
                Selepas kod berjaya berada di GitHub:
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <span className="font-bold text-slate-900">Aktifkan GitHub Actions di GitHub Pages:</span>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 leading-relaxed pl-1">
                  <li>Buka repositori anda di <strong>github.com</strong>.</li>
                  <li>Klik tab <strong>Settings</strong> di menu atas sebelah kanan.</li>
                  <li>Di menu sebelah kiri, klik <strong>Pages</strong>.</li>
                  <li>Di bawah <strong>Build and deployment &gt; Source</strong>, tukar kepada <strong>GitHub Actions</strong>.</li>
                  <li>Laman web anda akan aktif dalam masa ~1 minit!</li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="text-[11px] text-slate-500">
            Panduan Ralat 100MB &amp; GitHub Desktop
          </div>
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition cursor-pointer"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
