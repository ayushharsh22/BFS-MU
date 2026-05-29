import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ORIENTATION_SCHEDULE } from "../data";
import { Calendar, MapPin, Clock, User, Sparkles, ChevronRight, BookOpen, Coffee, Award } from "lucide-react";

export default function TimelineSection() {
  const [activeDay, setActiveDay] = useState<number>(1);

  // Simple function to map session titles to representational icons
  const getSessionIcon = (name: string) => {
    const title = name.toLowerCase();
    if (title.includes("breakfast") || title.includes("dinner") || title.includes("tea") || title.includes("lunch")) {
      return <Coffee className="w-4 h-4 text-orange-400" />;
    }
    if (title.includes("photoshoot")) {
      return <Award className="w-4 h-4 text-emerald-400" />;
    }
    if (title.includes("opening") || title.includes("welcome")) {
      return <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />;
    }
    if (title.includes("market") || title.includes("visit") || title.includes("chandni")) {
      return <MapPin className="w-4 h-4 text-cherry-400 text-red-400" />;
    }
    return <BookOpen className="w-4 h-4 text-sky-400" />;
  };

  return (
    <div className="relative w-full py-20 px-4 md:px-8 bg-black overflow-hidden" id="schedule">
      {/* Background visual graphics */}
      <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full bg-orange-600/5 blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] rounded-full bg-zinc-900/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-orange-500 text-xs font-mono uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5" /> Program Timetable
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
            Orientation Schedule
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            The rigorous 4-day launching pad at the <span className="text-white font-medium">Masters' Union Campus</span> designed unit-by-unit 
            to wire your mindset for business-led field discovery.
          </p>
        </div>

        {/* Day selection Accordion Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
          {ORIENTATION_SCHEDULE.map((day) => {
            const isActive = activeDay === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => setActiveDay(day.dayNumber)}
                className={`relative p-4 rounded-xl flex flex-col items-start text-left gap-1 transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "bg-zinc-900 border border-orange-500/80 shadow-glow-orange/10"
                    : "bg-zinc-950 border border-zinc-900 hover:border-zinc-800"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-timeline-indicator"
                    className="absolute inset-0 rounded-xl bg-orange-500/[0.02]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className={`font-mono text-xs tracking-wider uppercase font-semibold ${isActive ? "text-orange-400" : "text-zinc-500"}`}>
                  Day 0{day.dayNumber}
                </span>
                <span className="font-display text-lg font-bold text-white leading-tight">
                  {day.dayName}
                </span>
                <span className="font-mono text-[10px] text-zinc-400 mt-1">
                  {day.date}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Day Itinerary Timeline Content */}
        <div className="relative rounded-2xl glass-card border-zinc-800 p-6 md:p-8">
          {/* Venue Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-zinc-800/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="font-mono text-xs text-zinc-400 tracking-wider uppercase font-semibold">
                ACTIVE FOCUS ITINERARY:
              </span>
              <span className="text-sm font-display font-semibold text-white ml-1">
                Day {activeDay} Schedule ({ORIENTATION_SCHEDULE.find(d => d.dayNumber === activeDay)?.date})
              </span>
            </div>
            {ORIENTATION_SCHEDULE.find(d => d.dayNumber === activeDay)?.venue && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>Venue: {ORIENTATION_SCHEDULE.find(d => d.dayNumber === activeDay)?.venue}</span>
              </div>
            )}
          </div>

          {/* Timeline Node Chain */}
          <div className="relative border-l border-zinc-800 ml-4 md:ml-40 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {ORIENTATION_SCHEDULE.find(d => d.dayNumber === activeDay)?.sessions.map((session, index) => {
                  return (
                    <div key={index} className="relative pl-6 group">
                      {/* Left Dot Axis */}
                      <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center transition-all duration-300 group-hover:border-orange-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-orange-500 transition-colors" />
                      </div>

                      {/* Desktop Placement Timeline Timestamp */}
                      <div className="hidden md:block absolute -left-40 top-1 text-right w-32">
                        <span className="font-mono text-xs font-bold text-orange-400/90 whitespace-nowrap flex items-center justify-end gap-1.5">
                          <Clock className="w-3 h-3 text-zinc-500 shrink-0" />
                          {session.time}
                        </span>
                      </div>

                      {/* Timeline Detail Shell */}
                      <div className="p-4 rounded-xl bg-zinc-950/40 hover:bg-zinc-900/30 border border-zinc-900/60 hover:border-zinc-800/80 transition-all duration-300">
                        {/* Mobile view only timestamp */}
                        <div className="md:hidden flex items-center gap-1 mb-2">
                          <Clock className="w-3.5 h-3.5 text-orange-500/80 shrink-0" />
                          <span className="font-mono text-xs font-semibold text-orange-400">
                            {session.time}
                          </span>
                        </div>

                        {/* Theme and Icon Badge */}
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 text-[10px] font-mono border border-zinc-800">
                            {getSessionIcon(session.name)}
                            <span className="mt-0.5 uppercase tracking-wider font-semibold">
                              {session.theme || "GENERAL SCHEDULE"}
                            </span>
                          </div>
                        </div>

                        {/* Session Title */}
                        <h4 className="font-display text-base md:text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                          {session.name}
                        </h4>

                        {/* Speaker Indicator */}
                        {session.host && (
                          <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 bg-zinc-900/30 py-1 px-2.5 rounded-md border border-zinc-800/40 inline-flex">
                            <User className="w-3 h-3 text-orange-500" />
                            <span>HOSTED BY: <strong className="text-zinc-200">{session.host}</strong></span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick instructions and tip footer inside calendar */}
          <div className="mt-8 pt-6 border-t border-zinc-800 text-center font-mono text-[11px] text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span>STRICT ADHERENCE TO DISCIPLINE TIMINGS ENFORCED</span>
            <span className="text-orange-400/80 flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5 shrink-0" /> PREPARE LAPTOPS AND NOTEPADS DAILY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
