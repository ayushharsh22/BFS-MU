import React from "react";
import { motion } from "motion/react";
import { Compass, Calendar, MapPin, Sparkles, Navigation2, Network, Scroll, HelpCircle } from "lucide-react";

// Sub-components
import Navbar from "./components/Navbar";
import WhatToExpect from "./components/WhatToExpect";
import TimelineSection from "./components/TimelineSection";
import ResourcesSection from "./components/ResourcesSection";
import HotelSection from "./components/HotelSection";
import CountdownTimer from "./components/CountdownTimer";
import WhyThisIsDifferent from "./components/WhyThisIsDifferent";
import MeetTheTeam from "./components/MeetTheTeam";

export default function App() {
  const [currentView, setCurrentView] = React.useState<"home" | "team">("home");
  
  const handleScrollToCountdown = () => {
    const element = document.querySelector("#countdown");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToBaseCamp = () => {
    const element = document.querySelector("#hotel");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Floating Header & Navigation progress bar */}
      <Navbar currentView={currentView} onViewChange={setCurrentView} />

      {currentView === "team" ? (
        <MeetTheTeam onBack={() => setCurrentView("home")} />
      ) : (
        <>
          {/* SECTION 1: HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-black">
        {/* Animated grid matrix & glowing background spotlights */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
        
        {/* Abstract Floating Constellations (resembling an India network pathway) */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Soft grid coordinates */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.015)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Constant connecting paths mimicking an active flight line */}
            <line x1="20%" y1="15%" x2="45%" y2="28%" stroke="rgba(249, 115, 22, 0.08)" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="45%" y1="28%" x2="35%" y2="45%" stroke="rgba(249, 115, 22, 0.08)" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="35%" y1="45%" x2="55%" y2="65%" stroke="rgba(249, 115, 22, 0.08)" strokeWidth="1.5" strokeDasharray="5 5" />
            <line x1="55%" y1="65%" x2="70%" y2="82%" stroke="rgba(249, 115, 22, 0.12)" strokeWidth="1.5" strokeDasharray="5 5" />

            {/* Glowing nodes */}
            <circle cx="20%" cy="15%" r="4" fill="#f97316" className="animate-pulse" />
            <circle cx="45%" cy="28%" r="6" fill="#f97316" className="animate-pulse" />
            <circle cx="35%" cy="45%" r="4" fill="#f97316" />
            <circle cx="55%" cy="65%" r="5" fill="#f97316" className="animate-pulse animate-duration-1000" />
            <circle cx="70%" cy="82%" r="6" fill="#f97316" />
          </svg>
        </div>

        {/* Dynamic spotlight lens flare on background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-orange-600/[0.045] blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center text-center z-10">
          
          {/* Subheading Badge - Masters' Union */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full glass-card border-orange-500/10 text-orange-400 font-mono text-xs uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span>Masters' Union Orientation Hub</span>
          </motion.div>

          {/* Headline Display Typography (National Geographic style serif size pairing) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-serif text-4xl sm:text-6xl md:text-7.5xl font-semibold tracking-tight text-white leading-[1.05]"
          >
            Welcome to <br className="hidden sm:inline" />
            <span className="font-display font-black text-gradient-orange italic drop-shadow-md">
              Bharat Summer Fellowship 2026
            </span>
          </motion.h1>

          {/* Subheadline (Apple styled layout with rich descriptive prose) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-zinc-400 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed font-sans"
          >
            An immersive 6-week journey across India where you'll learn business by experiencing it firsthand.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={handleScrollToCountdown}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs uppercase tracking-widest font-extrabold shadow-glow-orange hover:shadow-orange-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Compass className="w-4 h-4 shrink-0 transition-transform group-hover:rotate-12" /> Start Your Journey
            </button>
            <button
              onClick={handleScrollToBaseCamp}
              className="w-full sm:w-auto px-7 py-4 rounded-xl glass-card text-zinc-300 hover:text-white border-zinc-800 hover:border-orange-500/30 font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300"
            >
              LOCATE BASE CAMP
            </button>
          </motion.div>

          {/* Interactive Stats Block (4 parts: 20+ Immersions | 10+ Cities | 12+ Industries | 6 Weeks) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 w-full max-w-4xl border-t border-zinc-900 pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-4.5xl font-black text-white hover:text-orange-500 transition-colors duration-300">
                  20+
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                  Immersions
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-4.5xl font-black text-white hover:text-orange-500 transition-colors duration-300">
                  10+
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                  Cities
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-4.5xl font-black text-white hover:text-orange-500 transition-colors duration-300">
                  12+
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                  Industries
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-display text-2xl md:text-4.5xl font-black text-white hover:text-orange-500 transition-colors duration-300">
                  6 Weeks
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                  Duration
                </span>
              </div>
            </div>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="mt-14 flex flex-col items-center gap-1.5 cursor-pointer select-none"
            onClick={handleScrollToCountdown}
          >
            <span className="font-mono text-[9px] text-zinc-600 tracking-widest uppercase">SCROLL</span>
            <div className="w-[18px] h-[30px] rounded-full border border-zinc-800 flex justify-center items-start p-1 bg-zinc-950/40">
              <div className="w-[3px] h-[5px] rounded-full bg-orange-500" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 9: BASE TIMER COUNTDOWN */}
      <CountdownTimer />

      {/* SECTION 4: COLLAPSIBLE SCHEDULE TIMELINE */}
      <TimelineSection />

      {/* SECTION 6: DOWNLOAD RESOURCES CENTER */}
      <ResourcesSection />

      {/* SECTION 7: LODGING BASE CAMP INFO */}
      <HotelSection />

      {/* SECTION 3: WHY THIS IS DIFFERENT */}
      <WhyThisIsDifferent />

      {/* SECTION 8: WHAT TO EXPECT */}
      <WhatToExpect />

      {/* SECTION 10: FINAL CALL TRANSITION */}
      <section className="relative py-28 px-4 md:px-8 bg-black overflow-hidden border-t border-zinc-900 text-center">
        {/* Abstract rotating expedition concentric circle radar background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-zinc-900/40 rounded-full pointer-events-none select-none opacity-40">
          <div className="w-full h-full border border-zinc-900/20 rounded-full scale-75 animate-reverse-spin-slow flex items-center justify-center">
            <div className="w-1/2 h-1/2 border border-orange-500/5 rounded-full scale-110" />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto z-10 space-y-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono tracking-widest uppercase">
            <Network className="w-3.5 h-3.5" /> THE ULTIMATE CALL
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            You are not joining a summer program. <br />
            <span className="font-display font-black text-gradient-orange italic">
              You are joining an expedition
            </span> <br className="hidden sm:inline" />
            across the world's most fascinating economy.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto pt-4">
            <div className="p-3 bg-zinc-950 border border-zinc-900/80 rounded-xl text-center w-full">
              <span className="font-mono text-[9px] text-zinc-500 block uppercase">Mandate</span>
              <span className="font-display text-sm font-bold text-white">PACK LIGHT.</span>
            </div>
            <div className="p-3 bg-zinc-950 border border-zinc-900/80 rounded-xl text-center w-full">
              <span className="font-mono text-[9px] text-zinc-500 block uppercase">Mandate</span>
              <span className="font-display text-sm font-bold text-white">STAY CURIOUS.</span>
            </div>
            <div className="p-3 bg-zinc-950 border border-zinc-900/80 rounded-xl text-center w-full">
              <span className="font-mono text-[9px] text-zinc-500 block uppercase">Mandate</span>
              <span className="font-display text-sm font-bold text-white">BUILD BOLDLY.</span>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleScrollToBaseCamp}
              className="px-10 py-4.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-mono text-xs uppercase tracking-widest font-extrabold shadow-glow-orange hover:shadow-orange-500/40 transition-all duration-300"
            >
              Begin the Journey
            </button>
          </div>
        </div>
      </section>
        </>
      )}

      {/* METRIC FOOTER BRANDING */}
      <footer className="py-12 px-4 md:px-8 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center">
                <Navigation2 className="w-3.5 h-3.5 text-white rotate-45" />
              </div>
              <span className="font-display font-black text-sm tracking-widest text-white uppercase">
                BHARAT SUMMER FELLOWSHIP | DISCOVER YOURSELF
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2">
            <div className="flex gap-4 font-mono text-[10px] text-zinc-400">
              <a href="#home" className="hover:text-orange-500 transition-colors">BACK TO TOP ➔</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
