import React from "react";
import { HOTEL_INFO } from "../data";
import { Hotel, MapPin, Calendar, Clock, Compass, Bell, ShieldCheck, ExternalLink } from "lucide-react";

export default function HotelSection() {
  return (
    <div className="relative w-full py-20 px-4 md:px-8 bg-black overflow-hidden" id="hotel">
      {/* Decorative grid & background spotlight */}
      <div className="absolute left-1/4 top-1/2 w-[600px] h-[300px] -translate-y-1/2 rounded-full bg-orange-600/[0.03] blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-zinc-900 border border-zinc-800 text-orange-500 text-xs font-mono tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" /> Base Camp Coordination
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Deployment & Stays
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            All outbound expeditions for Delhi NCR boot first from our central coordination residence in Gurgaon.
          </p>
        </div>

        {/* Premium Lodging Manifest Card */}
        <div className="relative rounded-3xl glass-card border-zinc-850 bg-gradient-to-b from-zinc-900/40 to-black/60 p-6 md:p-10 shadow-glow-orange/5 overflow-hidden">
          {/* Neon orange accent strip */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500" />

          {/* Glowing Check-in urgency banner */}
          <div className="mb-8 p-4 rounded-2xl glass-card-orange border-orange-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 shrink-0">
                <Bell className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-orange-400 tracking-wider font-semibold uppercase block">REQUIRED MANDATE</span>
                <span className="font-display text-base font-bold text-white leading-tight">
                  {HOTEL_INFO.reminderText}
                </span>
              </div>
            </div>
            <div className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-mono text-[11px] font-bold tracking-wider shadow-md text-center shrink-0 uppercase select-none">
              Live Coordination Hub
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* LHS: Info Grid */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-orange-500 shadow-inner">
                  <Hotel className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">STATION COHORT HOME</span>
                  <h3 className="font-display text-xl md:text-2xl font-black text-white">{HOTEL_INFO.name}</h3>
                </div>
              </div>

              {/* Specs parameters lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 block uppercase">Check-in Date</span>
                    <span className="font-sans text-sm font-semibold text-zinc-200">{HOTEL_INFO.checkInDate}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 block uppercase">Timings</span>
                    <span className="font-sans text-sm font-semibold text-zinc-200">{HOTEL_INFO.checkInTime}</span>
                  </div>
                </div>
              </div>

              {/* Coordination alerts reminders */}
              <div className="pt-2">
                <h4 className="font-mono text-xs text-zinc-400 tracking-wider uppercase mb-3 flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-orange-500" /> Station Reminders & Ground Rules:
                </h4>
                <ul className="space-y-2.5 text-sm">
                  {HOTEL_INFO.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-zinc-300">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      <span className="font-sans leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RHS: Map Coordinate Interface panel */}
            <div className="md:col-span-5 h-full flex flex-col justify-between">
              <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-900/80 aspect-[1/1] flex flex-col justify-between relative overflow-hidden group">
                {/* Simulated digital grid inside visual map */}
                <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />
                <div className="font-mono text-[9px] text-zinc-600 select-none">
                  COORDS_LOC: 28.4595° N, 77.0266° E
                </div>

                {/* Abstract graphic representing radar/target */}
                <div className="my-auto flex flex-col items-center justify-center text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 border-2 border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-105 duration-500 transition-transform relative">
                    <MapPin className="w-7 h-7" />
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full bg-orange-500/15 border border-orange-500/30 animate-ping" />
                  </div>
                  <span className="font-display text-sm font-bold text-white mt-4 uppercase">
                    GURGAON SECTOR CORRIDOR
                  </span>
                  <span className="font-mono text-[10px] text-zinc-500 mt-1 max-w-[160px] mx-auto uppercase">
                    Aldott Executive Suites Campus
                  </span>
                </div>

                <a
                  href={HOTEL_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-orange-500/15 hover:border-orange-500/30 font-mono text-xs uppercase tracking-wider text-center text-zinc-350 hover:text-orange-400 border border-zinc-800 transition-all duration-300 flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" /> Open Navigation Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
