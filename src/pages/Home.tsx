import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

// Components
import Navbar from "../components/home/Navbar";
import RetroGrid from "../components/home/RetroGrid";
import TiltCard from "../components/home/TiltCard";
import FeaturesSection from "../components/home/FeaturesSection";
import { Zap } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const yHeroImages = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-monia-orange selection:text-white overflow-x-hidden font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative min-h-[140vh] flex flex-col items-center justify-start pt-32 lg:pt-48 px-6 lg:px-8 overflow-hidden">
        <RetroGrid />

        <div className="max-w-7xl mx-auto relative z-10 w-full text-center">
          <motion.div style={{ y: yText, opacity }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md mb-12"
            >
              <span className="w-2 h-2 rounded-full bg-monia-orange shadow-[0_0_10px_rgba(249,115,22,1)]" />
              Monia Enterprise v3.0
            </motion.div>

            <h1 className="text-8xl lg:text-[14rem] font-black tracking-tighter leading-[0.75] mb-16 uppercase pointer-events-none">
              <span className="block opacity-20">Master</span>
              <span className="block text-white">Robotics</span>
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-monia-blue via-white to-monia-orange">Future.</span>
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-24">
              <p className="text-2xl text-slate-400 max-w-sm leading-tight font-bold text-left border-l-2 border-monia-blue pl-6">
                Experience the most advanced <br />
                <span className="text-white">AI-Driven robotics</span> platform in the market.
              </p>

              <button
                onClick={() => navigate('/signup')}
                className="px-12 py-6 bg-white text-slate-950 rounded-full font-black text-xl hover:bg-monia-orange hover:text-white hover:scale-110 transition-all duration-500 shadow-[0_20px_60px_rgba(255,255,255,0.1)] flex items-center gap-6"
              >
                START ENGINE
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Zap size={24} fill="currentColor" />
                </motion.div>
              </button>
            </div>
          </motion.div>

          {/* Flying Layers / Card Grid */}
          <motion.div
            style={{ y: yHeroImages }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mt-20"
          >
            <TiltCard
              title="Micro:bit"
              subtitle="Powerful arm-based computer for coders."
              image="/assets/images/microbit_pro_photo_1770116696059.png"
              color="rgba(59, 130, 246, 0.4)"
              delay={0.4}
            />
            <TiltCard
              title="mBot"
              subtitle="Mechanical exploration with endless possibilities."
              image="/assets/images/mbot_pro_photo_1770116709819.png"
              color="rgba(6, 182, 212, 0.4)"
              delay={0.5}
            />
            <TiltCard
              title="Thymio"
              subtitle="Educational robotics with light and sensor interaction."
              image="/assets/images/thymio_pro_photo_1770116722459.png"
              color="rgba(249, 115, 22, 0.4)"
              delay={0.6}
            />
            <TiltCard
              title="Dadabit"
              subtitle="Industrial grade Python architecture for experts."
              image="/assets/images/dadabit_pro_photo_1770116736778.png"
              color="rgba(168, 85, 247, 0.4)"
              delay={0.7}
            />
          </motion.div>
        </div>

        {/* Scroll Indicator - Redesigned to be cooler */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, 15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-16 border border-white/20 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-monia-orange rounded-full shadow-[0_0_10px_#f97316]"
          />
        </motion.div>
      </div>

      <FeaturesSection />

      <footer className="bg-white py-32 text-center relative z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-12">
          <div className="text-5xl font-black tracking-tighter text-slate-950 flex items-center gap-2">
            MON<span className="text-monia-orange">I</span>A
            <span className="text-[10px] px-2 py-0.5 border border-slate-200 rounded text-slate-400">MA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-slate-950 font-black text-xs uppercase tracking-[0.3em]">
            <Link to="/about" className="hover:text-monia-blue transition-colors">Solutions</Link>
            <Link to="/contact" className="hover:text-monia-blue transition-colors">Documentation</Link>
            <Link to="/legal" className="hover:text-monia-blue transition-colors">Company</Link>
          </div>
          <div className="w-20 h-px bg-slate-200" />
          <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Monia.ma — Engineered by AI
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;