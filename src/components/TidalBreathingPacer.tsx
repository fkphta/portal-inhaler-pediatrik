import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Volume2, VolumeX, CheckCircle2, Sparkles, Wind } from 'lucide-react';

export const TidalBreathingPacer: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentBreath, setCurrentBreath] = useState(1);
  const [phase, setPhase] = useState<'inhale' | 'exhale'>('inhale'); // inhale (3s), exhale (3s)
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);

  // Play a soft pleasant tone using Web Audio API
  const playTone = (frequency: number) => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // Audio not permitted or supported, fail silently
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && !isCompleted) {
      if (phase === 'inhale') {
        playTone(523.25); // C5
        timer = setTimeout(() => {
          setPhase('exhale');
        }, 2500);
      } else {
        playTone(392.00); // G4
        timer = setTimeout(() => {
          if (currentBreath < 6) {
            setCurrentBreath((prev) => prev + 1);
            setPhase('inhale');
          } else {
            setIsRunning(false);
            setIsCompleted(true);
            playTone(659.25); // E5 triumph
          }
        }, 2500);
      }
    }
    return () => clearTimeout(timer);
  }, [isRunning, phase, currentBreath, isCompleted, soundEnabled]);

  const startPacer = () => {
    setCurrentBreath(1);
    setPhase('inhale');
    setIsCompleted(false);
    setIsRunning(true);
  };

  const resetPacer = () => {
    setIsRunning(false);
    setCurrentBreath(1);
    setPhase('inhale');
    setIsCompleted(false);
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 via-teal-50/60 to-white rounded-3xl p-4 sm:p-5 border border-sky-200/80 shadow-md space-y-3.5">
      <div className="flex items-center justify-between gap-2 border-b border-sky-100 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            <Wind className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-black text-slate-900 leading-tight">
              Pemasa Nafas Si Kecil (Latihan 5-6 Nafas Tidal)
            </h4>
            <p className="text-[11px] text-slate-500">
              Gunakan pemasa ini bersama anak semasa corong muka ditekap
            </p>
          </div>
        </div>

        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition ${
            soundEnabled
              ? 'bg-sky-100 border-sky-300 text-sky-800'
              : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
          }`}
          title={soundEnabled ? 'Bunyi diaktifkan' : 'Bunyi disenyapkan'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>
      </div>

      {/* Visual Breathing Bubble */}
      <div className="relative flex flex-col items-center justify-center py-4">
        {/* Animated Circle Container */}
        <div
          className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center text-center transition-all duration-[2500ms] ease-in-out border-4 shadow-lg ${
            !isRunning && !isCompleted
              ? 'scale-100 bg-sky-100/70 border-sky-300 text-sky-900'
              : phase === 'inhale'
              ? 'scale-115 bg-teal-500 text-white border-teal-300 shadow-teal-500/30'
              : 'scale-90 bg-sky-600 text-white border-sky-400 shadow-sky-600/30'
          }`}
        >
          {isCompleted ? (
            <div className="space-y-1 animate-bounce">
              <Sparkles className="w-8 h-8 mx-auto text-amber-300" />
              <div className="font-black text-xs">Siap! Sempurna</div>
            </div>
          ) : !isRunning ? (
            <div className="space-y-1 px-2">
              <div className="text-xl font-black">6 Nafas</div>
              <div className="text-[10px] font-semibold text-slate-600">Tekan Mula</div>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-[11px] uppercase tracking-wider font-extrabold opacity-90">
                {phase === 'inhale' ? 'Tarik Nafas' : 'Hembus Perlahan'}
              </div>
              <div className="text-2xl font-black">{currentBreath} / 6</div>
              <div className="text-[10px] opacity-80">Nafas</div>
            </div>
          )}
        </div>

        {/* Breath Indicators Dots */}
        <div className="flex items-center gap-1.5 mt-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all ${
                num < currentBreath || (num === 6 && isCompleted)
                  ? 'bg-emerald-500 text-white'
                  : num === currentBreath && isRunning
                  ? 'bg-sky-600 text-white scale-110 ring-2 ring-sky-300'
                  : 'bg-slate-200 text-slate-500'
              }`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {!isRunning ? (
          <button
            onClick={startPacer}
            className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-teal-600/25 flex items-center gap-2 transition cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isCompleted ? 'Ulang Latihan' : 'Mula Pemasa 6 Nafas'}</span>
          </button>
        ) : (
          <button
            onClick={resetPacer}
            className="bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Berhenti / Reset</span>
          </button>
        )}
      </div>

      <p className="text-[11px] text-slate-500 text-center italic">
        * Tip: Ajak anak memerhatikan pergerakan injap getah pada spacer semasa bernafas.
      </p>
    </div>
  );
};
