import React from "react";
import { RESOURCE_CARDS } from "../data";
import { DownloadCloud, FolderOpen, Calendar, Compass, ExternalLink, Bookmark } from "lucide-react";

export default function ResourcesSection() {
  const handleScrollToSchedule = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#schedule");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full py-20 px-4 md:px-8 bg-zinc-950/40 border-b border-zinc-900" id="resources">
      {/* Mesh and layout visual details */}
      <div className="absolute left-10 top-1/4 w-80 h-80 rounded-full bg-orange-600/[0.015] blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono tracking-widest uppercase">
            <Bookmark className="w-3.5 h-3.5" /> Cognitive Resource Center
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Briefing Documents
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            As you prepare to arrive, please ensure you go through the following important documents carefully
          </p>
        </div>

        {/* 3 cards grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Immersion Guides */}
          <div className="relative p-6 rounded-2xl glass-card border-zinc-900 bg-zinc-950/50 flex flex-col justify-between hover:border-orange-500/30 transition-all duration-300 shadow-glow-orange/[0.02]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 mb-5 relative">
                <FolderOpen className="w-6 h-6" />
                <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Immersion Guides</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Immersions 360 - Everything you need to know before stepping into Bharat's most fascinating business ecosystems
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1byqnfM8JT0X7-H5FMISS3agqbfvG8rqV?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold uppercase tracking-wider text-center shadow-glow-orange hover:shadow-orange-500/35 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <DownloadCloud className="w-4 h-4 shrink-0" /> Open Resource Link
            </a>
          </div>

          {/* Card 2: Inclusions & Non-Inclusions */}
          <div className="relative p-6 rounded-2xl glass-card border-zinc-900 bg-zinc-950/50 flex flex-col justify-between hover:border-orange-500/30 transition-all duration-300 shadow-glow-orange/[0.02]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500 mb-5">
                <Bookmark className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Inclusions & Exclusions</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Detailed catalog outlining fully-paid lodgings, intra-city commutes, and shared student dinners.
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1uSvhh8eGHLNKbFbv2csSqxly0j6afKlL?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs font-bold uppercase tracking-wider text-center shadow-glow-orange hover:shadow-orange-500/35 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <DownloadCloud className="w-4 h-4 shrink-0" /> Open Resource Link
            </a>
          </div>

          {/* Card 3: Orientation timetable */}
          <div className="relative p-6 rounded-2xl glass-card border-zinc-900 bg-zinc-900/[0.15] border-dashed border-zinc-800 hover:border-orange-500/30 flex flex-col justify-between transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-850 flex items-center justify-center text-zinc-400 mb-5">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">Orientation Timetable</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Dynamic 4-day timetable containing session names, guest hosts, and venue briefs.
              </p>
            </div>
            <a
              href="#schedule"
              onClick={handleScrollToSchedule}
              className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 shrink-0" /> Jump To Active Timetable
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
