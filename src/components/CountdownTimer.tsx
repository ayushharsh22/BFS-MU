import React, { useState, useEffect } from "react";
import { Clock, Calendar, ShieldAlert } from "lucide-react";

export default function CountdownTimer() {
  const targetDate = new Date("2026-06-01T09:15:00+05:30");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="relative w-full py-16 px-4 md:px-8 bg-zinc-950 border-t border-b border-zinc-900 flex flex-col items-center justify-center text-center overflow-hidden" id="countdown">
      {/* Background Matrix mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#f9731604_1.5px,transparent_1.5px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono tracking-widest uppercase">
          <Clock className="w-3.5 h-3.5 animate-pulse" /> EXPEDITION CLOCK METRICS
        </div>

        <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
          T-Minus Until Bharat Begins
        </h3>
        <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-wider mb-8">
          TARGET_LAUNCH: 01_JUNE_2026 @ 09:15 AM // TIMEZONE: IST (GMT+5:30)
        </p>

        {timeLeft.isOver ? (
          <div className="p-6 md:p-8 rounded-2xl glass-card-orange border-orange-500/30 flex flex-col items-center max-w-lg mx-auto">
            <ShieldAlert className="w-10 h-10 text-orange-500 mb-3 animate-bounce" />
            <span className="font-display text-xl font-bold text-white tracking-tight uppercase">
              Expedition Commenced
            </span>
            <p className="mt-2 text-sm text-zinc-300 font-sans leading-relaxed">
              The Bharat Summer Fellowship 2026 is officially live! Access active coordination channels on Slack or check the live bulletin boards.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 justify-center">
            {timeBlocks.map((block) => (
              <div
                key={block.label}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-900/80 shadow-inner flex flex-col items-center justify-center min-w-[110px] md:min-w-[140px] relative overflow-hidden group hover:border-orange-500/30 transition-colors"
              >
                {/* Visual grid segment decoration */}
                <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

                <span className="font-mono text-4xl md:text-5xl font-black text-white tracking-widest select-none leading-none">
                  {block.value.toString().padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] text-zinc-500 tracking-wider font-semibold uppercase mt-3">
                  {block.label}
                </span>
              </div>
            ))}
          </div>
        )}


      </div>
    </div>
  );
}
