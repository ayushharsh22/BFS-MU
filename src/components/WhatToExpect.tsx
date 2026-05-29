import React from "react";
import { Milestone } from "lucide-react";

export default function WhatToExpect() {
  const outcomes = [
    { stat: "10+ Cities", text: "Visited during intensive, cross-country travel cohorts" },
    { stat: "20+ Immersions", text: "Hands-on business site audits completed" },
    { stat: "6 Challenges", text: "One Day Challenges (ODC) solved under tight pressure" },
    { stat: "Boundless Bonds", text: "Forged life-long networks of elite startup minds" },
    { stat: "Content Portfolio", text: "Built personal leverage and documented your learning" },
    { stat: "Career Alignment", text: "Discovered your professional direction through direct exposure" }
  ];

  return (
    <div className="relative w-full py-20 px-4 md:px-8 bg-black overflow-hidden border-t border-zinc-900" id="expect">
      {/* Visual coordinates and ambient glow maps */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-orange-600/[0.01] blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-10 w-96 h-96 rounded-full bg-amber-500/[0.008] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LHS Heading/Summary */}
          <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono uppercase tracking-widest">
              <Milestone className="w-3.5 h-3.5" /> MID_CAMP GOALS
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              By the End of <span className="text-orange-500">6 Weeks</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
              You will emerge from this expedition with high context and practical business knowledge. You will not just understand general market statistics - you'll have audit experience across multiple industries.
            </p>
          </div>

          {/* RHS Output metrics list */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((itm, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900 text-left flex flex-col justify-between hover:border-zinc-800 transition-colors"
              >
                <span className="font-mono text-[10px] text-zinc-600 block">TACTICAL_OUTCOME.0{idx + 1}</span>
                <div className="mt-4">
                  <span className="font-display text-lg md:text-xl font-bold text-orange-400 block tracking-tight">
                    {itm.stat}
                  </span>
                  <span className="text-xs text-zinc-400 tracking-wide mt-1 block font-sans leading-relaxed">
                    {itm.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
