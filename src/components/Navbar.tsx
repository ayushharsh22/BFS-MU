import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Compass, Menu, X, Landmark, Navigation2 } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Schedules", href: "#schedule" },
  { label: "Resources", href: "#resources" },
  { label: "Base Camp", href: "#hotel" },
  { label: "Vibe", href: "#vibe" },
  { label: "Expectation", href: "#expect" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress Hook
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Header */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/75 backdrop-blur-md border-b border-zinc-900"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo Brand Group */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection("#home")}>
            {/* Custom abstract compass branding */}
            <div className="relative w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center glow-orange overflow-hidden">
              <Navigation2 className="w-4 h-4 text-white rotate-45 transform" />
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-tight text-white uppercase leading-none">
                BHARAT SUMMER FELLOWSHIP
              </div>
              <div className="font-mono text-[9px] text-zinc-400 font-medium uppercase tracking-widest mt-1">
                MASTERS' UNION
              </div>
            </div>
          </div>

          {/* Desktop Links Group */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 hover:text-orange-500 transition-colors focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-zinc-800 text-zinc-300 hover:bg-zinc-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Scroll Progress Bar Marker along base of navbar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-600 to-orange-400 origin-left"
          style={{ scaleX }}
        />
      </motion.header>

      {/* Mobile Menu Panel */}
      <motion.div
        animate={mobileMenuOpen ? { x: 0 } : { x: "100%" }}
        initial={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-zinc-950 border-l border-zinc-900 z-40 flex flex-col justify-between shadow-2xl p-6 pt-24"
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-[10px] text-zinc-500 tracking-wider uppercase border-b border-zinc-900 pb-2">
            BASE_CAMP CONTROL CONSOLE
          </span>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-left font-display text-2xl font-bold text-zinc-200 hover:text-orange-500 transition-colors py-1.5 border-b border-zinc-900/50"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-zinc-900">
          <button
            onClick={() => scrollToSection("#hotel")}
            className="w-full py-2 rounded-xl bg-zinc-900 text-zinc-300 font-mono text-xs uppercase tracking-wider text-center border border-zinc-800"
          >
            ALDOTT HOTEL COORDINATES
          </button>
          <button
            onClick={() => scrollToSection("#schedule")}
            className="w-full py-2 rounded-xl bg-orange-500 text-white font-mono text-xs uppercase tracking-wider font-bold text-center shadow-glow-orange"
          >
            LIVE TIMETABLE
          </button>
          <div className="text-center font-mono text-[9px] text-zinc-600">
            © MASTERS' UNION COHORT 2026
          </div>
        </div>
      </motion.div>
    </>
  );
}
