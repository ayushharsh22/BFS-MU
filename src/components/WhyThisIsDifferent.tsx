import React from "react";
import { motion } from "motion/react";
import { Navigation, Hammer, Rocket, Users2, Sparkles } from "lucide-react";

export default function WhyThisIsDifferent() {
  const differences = [
    {
      title: "Travel Across Bharat",
      desc: "Visit wholesale markets, massive automated manufacturing factories, complex port facilities, deep tech labs, and consumer startups.",
      icon: <Navigation className="w-6 h-6 text-orange-500" />,
      tag: "THE CORRIDORS"
    },
    {
      title: "Learn by Doing",
      desc: "No dull PowerPoint lectures. Every week, break into groups and solve live, high-pressure business tasks through One Day Challenges.",
      icon: <Hammer className="w-6 h-6 text-amber-500" />,
      tag: "THE DRILLS"
    },
    {
      title: "Build Your Personal Brand",
      desc: "Master the leverage of visual content. Capture high-fidelity footage and document your journey live across global platforms.",
      icon: <Rocket className="w-6 h-6 text-rose-500" />,
      tag: "THE LEVERAGE"
    },
    {
      title: "Meet Builders Firsthand",
      desc: "Sit across the table from tier-1 startup founders, industrial commanders, logistics operators, and venture investors.",
      icon: <Users2 className="w-6 h-6 text-emerald-500" />,
      tag: "THE BRAIN TRUST"
    }
  ];

  return (
    <div className="relative w-full py-24 px-4 md:px-8 bg-black overflow-hidden border-t border-zinc-900" id="vibe">
      {/* Visual coordinates and ambient glow maps */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-orange-600/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 bottom-10 w-96 h-96 rounded-full bg-amber-500/[0.015] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-zinc-900 border border-zinc-800 text-orange-500 text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> THE FELLOWSHIP EDGE
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why This Is Different
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We threw away standard syllabus models. The Bharat Summer Fellowship has no conventional tests - only real-world skin in the game.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((diff, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group p-6 rounded-2xl glass-card border-zinc-900 bg-zinc-950/40 hover:border-orange-500/30 flex flex-col justify-between min-h-[260px] relative shadow-glow-orange/[0.01] transition-all duration-300"
            >
              {/* Visual anchor label */}
              <div className="flex items-center justify-between font-mono text-[9px] text-zinc-600 font-bold mb-4">
                <span>{diff.tag}</span>
                <span className="text-orange-500/80">0{idx + 1} // CODE</span>
              </div>

              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                  {diff.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed mt-2.5">
                  {diff.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
