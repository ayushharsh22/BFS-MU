import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Briefcase, GraduationCap, Linkedin, ArrowLeft, Users, Home, ArrowUpRight, Sparkles, Compass } from "lucide-react";

interface TeamMember {
  name: string;
  titles: string[];
  education?: string;
  pastExperience: string[];
  linkedinUrl?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Shikhar Mahajan",
    titles: ["Program Head, Bharat Immersions", "Associate Director, Masters' Union"],
    education: "IIM Lucknow",
    pastExperience: ["Ex-BCG"],
    linkedinUrl: "https://www.linkedin.com/in/shikhar-mahajan-iiml/"
  },
  {
    name: "Ayush Harsh",
    titles: ["Delivery Head, Bharat Summer Fellowship", "Senior Manager, New Initiatives, Masters' Union"],
    education: "IIM Lucknow",
    pastExperience: ["Ex-Amazon", "WinZO Games"],
    linkedinUrl: "https://www.linkedin.com/in/ayush-harsh/"
  },
  {
    name: "Satyam Anand",
    titles: ["Immersions Head, Bharat Summer Fellowship", "Senior Manager, New Initiatives, Masters' Union"],
    education: "IIM Lucknow",
    pastExperience: ["Ex-Colgate"],
    linkedinUrl: "https://www.linkedin.com/in/satyam-anand-48a319161/"
  },
  {
    name: "Divansh Arora",
    titles: ["Program Manager, New Initiatives, Masters' Union"],
    pastExperience: ["Ex-Inc 42 Media", "Hero-Vired"],
    linkedinUrl: "https://www.linkedin.com/in/divansharora/"
  },
  {
    name: "Pratik Chandel",
    titles: ["Program Manager, New Initiatives, Masters' Union"],
    pastExperience: ["Ex-Coding Ninjas"],
    linkedinUrl: "https://www.linkedin.com/in/pratikkk/"
  },
  {
    name: "Taipy Dandapath",
    titles: ["Program Manager, New Initiatives, Masters' Union"],
    pastExperience: ["Ex-Merrito", "Naukri.com"],
    linkedinUrl: "https://www.linkedin.com/in/taipy-dandapath-04765a22b/"
  }
];

interface MeetTheTeamProps {
  onBack: () => void;
}

export default function MeetTheTeam({ onBack }: MeetTheTeamProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white pt-28 pb-20 px-4 md:px-8 overflow-hidden font-sans selection:bg-orange-500 selection:text-white">
      {/* Background radial highlights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-600/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-zinc-900/[0.1] blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-orange-500/30 transition-all font-mono text-[11px] uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO EXPEDITION HUB</span>
          </button>
        </motion.div>

        {/* Hero Concept Title & Program Overview Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-widest"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Program Mentorship & Leadership</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-tight"
            >
              Mentors & Professionals <br />
              <span className="font-display font-black text-gradient-orange italic drop-shadow-sm">to Guide You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed"
            >
              Spend your next 6 weeks working side-by-side with elite industry specialists, former Tier-1 consultants, builders and operators. This isn't theoretical training-it is active execution guided by builders who have scaled products at standard-setting firms.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-zinc-950 to-zinc-900 border border-zinc-900 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-505/[0.02] rounded-full blur-2xl pointer-events-none" />
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-semibold">The 6-Week Immersive Edge</h4>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                  "Having direct access to experienced leaders who have operated at BCG, Amazon, and Colgate ensures your strategies are validated by real market fundamentals from Day One."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Structured Directory Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group bg-zinc-950 border border-zinc-900 rounded-xl p-6 hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner Index Number */}
              <div className="absolute top-4 right-4 font-mono text-xs font-semibold text-zinc-700 select-none group-hover:text-orange-500/30 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="space-y-4">
                {/* Header Profile Title Details */}
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight group-hover:text-orange-400 transition-colors">
                    {member.name}
                  </h3>
                  
                  <div className="space-y-0.5">
                    {member.titles.map((title, tIdx) => (
                      <div
                        key={tIdx}
                        className={`text-[10px] sm:text-xs font-mono tracking-wider uppercase ${
                          tIdx === 0 ? "text-orange-400 font-medium" : "text-zinc-500"
                        }`}
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-zinc-900 w-full" />

                {/* Professional Qualifications Grid Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Education info */}
                  {member.education && (
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                        <GraduationCap className="w-3.5 h-3.5 text-zinc-600" />
                        <span>Education</span>
                      </div>
                      <div className="text-zinc-200 text-xs font-medium font-sans">
                        {member.education}
                      </div>
                    </div>
                  )}

                  {/* Past Companies background */}
                  {member.pastExperience.length > 0 && (
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                        <Briefcase className="w-3.5 h-3.5 text-zinc-600" />
                        <span>Background</span>
                      </div>
                      <div className="text-zinc-200 text-xs font-medium font-sans">
                        {member.pastExperience.join(", ")}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Explicit Link Connection Button */}
              {member.linkedinUrl && (
                <div className="mt-6 pt-4 border-t border-zinc-900/50">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-[11px] uppercase tracking-wider font-semibold group/link transition-colors cursor-pointer"
                  >
                    <span>Connect via LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Dashboard Return Button inside bottom segment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 border-t border-zinc-900 pt-8 flex justify-center"
        >
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-orange-500/30 text-zinc-400 hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 text-orange-500" /> RETURN TO EXPEDITION HUB
          </button>
        </motion.div>
      </div>
    </div>
  );
}
