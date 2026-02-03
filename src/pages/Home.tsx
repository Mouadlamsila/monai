import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Lenis from "lenis";

// Components
import Navbar from "../components/home/Navbar";
import RetroGrid from "../components/home/RetroGrid";
import TiltCard from "../components/home/TiltCard";
import FeaturesSection from "../components/home/FeaturesSection";
import EcosystemSection from "../components/home/EcosystemSection";
import { Zap, Sparkles } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // --- Hero Animations (Original Style) ---
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  // --- Hardware Landing Logic (New Fixed Timing) ---
  const [landed1, setLanded1] = useState(false);
  const [landed2, setLanded2] = useState(false);
  const [landed3, setLanded3] = useState(false);
  const [landed4, setLanded4] = useState(false);

  const landPoint = 700; // توقيت الهبوط السريع
  const flyDistY = -1100;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setLanded1(latest >= landPoint - 150);
    setLanded2(latest >= landPoint - 100);
    setLanded3(latest >= landPoint - 50);
    setLanded4(latest >= landPoint);
  });

  // الإحداثيات اللي جاوك "Top" فالتجربة اللي قبل
  const xMicrobit = useTransform(scrollY, [0, landPoint], [-450, 0]); //
  const yMicrobit = useTransform(scrollY, [0, landPoint], [flyDistY + 300, 0]);
  const rotateMicrobit = useTransform(scrollY, [0, landPoint], [-12, 0]);

  const xMBot = useTransform(scrollY, [0, landPoint], [250, 0]); //
  const yMBot = useTransform(scrollY, [0, landPoint], [flyDistY + 200, 0]);
  const rotateMBot = useTransform(scrollY, [0, landPoint], [8, 0]);

  const xThymio = useTransform(scrollY, [0, landPoint], [-350, 0]); //
  const yThymio = useTransform(scrollY, [0, landPoint], [flyDistY + 650, 0]);
  const rotateThymio = useTransform(scrollY, [0, landPoint], [-20, 0]);

  const xDadabit = useTransform(scrollY, [0, landPoint], [300, 0]); //
  const yDadabit = useTransform(scrollY, [0, landPoint], [flyDistY + 750, 0]);
  const rotateDadabit = useTransform(scrollY, [0, landPoint], [15, 0]);

  const hardwareOpacity = useTransform(scrollY, [0, 600], [0, 1]);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-monia-orange selection:text-white overflow-x-hidden font-sans">
      <Navbar />

      {/* HERO SECTION (Back to your original clean style) */}
      <div className="relative min-h-[90vh] lg:min-h-screen flex flex-col items-center justify-center pt-20 lg:pt-24 px-6 lg:px-12 overflow-hidden">
        <RetroGrid />

        <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Side */}
          <motion.div style={{ y: yText, opacity: opacityText }} className="lg:col-span-7 text-left">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-monia-blue/10 border border-monia-blue/20 text-monia-blue text-[11px] font-black uppercase tracking-[0.3em] backdrop-blur-md mb-8">
              <Sparkles size={14} className="animate-pulse" />
              Empowering the Next Generation
            </motion.div>

            <h1 className="text-5xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.85] mb-6 uppercase">
              <span className="block text-white">Coding &</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-monia-blue via-white to-monia-orange">Robotics</span>
              <span className="block text-white/50">For Kids.</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed font-bold mb-8">
              Transform your child's screen time into a <span className="text-white"> future-ready skill</span>.
              The leading platform to learn programming through <span className="text-monia-orange"> tactile </span> robotics.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
              <button onClick={() => navigate('/signup')} className="group cursor-pointer relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xl hover:scale-105 transition-all duration-500 shadow-2xl flex items-center gap-6 overflow-hidden">
                START ENGINE <Zap size={24} className="fill-monia-orange text-monia-orange" />
              </button>
            </div>
          </motion.div>

          {/* Right Side (Central Visual) */}
          <motion.div style={{ opacity: opacityText }} className="lg:col-span-5 relative h-[500px] lg:h-[650px] flex items-center justify-center pt-20 lg:pt-0">
            <div className="relative z-20 w-[85%] aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-slate-900 shadow-2xl rotate-2">
              <img src="https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?auto=format&fit=crop&q=80&w=2070" alt="Learning" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            {/* Graphic Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-radial-gradient from-white/5 to-transparent blur-[120px]" />
          </motion.div>
        </div>

        {/* PINNED HARDWARE SECTION (With Top Logic) */}
        <div className="relative h-[130vh] w-full mt-24">
          <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl px-6 lg:px-12 relative z-20">
              <motion.div style={{ opacity: hardwareOpacity }} className="flex flex-col items-center mb-16">
                <h3 className="text-white/30 text-xs font-black uppercase tracking-[0.5em] mb-4">Compatible hardware</h3>
                <div className="w-24 h-px bg-white/10" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 1. Microbit */}
                <div className="relative group min-h-[350px]">
                  <motion.div style={{ opacity: hardwareOpacity }}>
                    <TiltCard delay={0} title="Micro:bit" subtitle="The classic entry point." image="/assets/images/microbit_pro_photo_1770116696059.png" color="rgba(59, 130, 246, 0.4)" landed={landed1} />
                  </motion.div>
                  {!landed1 && (
                    <motion.div style={{ x: xMicrobit, y: yMicrobit, rotate: rotateMicrobit, zIndex: 50 }} className="absolute inset-0 pointer-events-none rounded-[3rem] overflow-hidden border-2 border-monia-blue/20 bg-slate-900 shadow-2xl">
                      <img src="/assets/images/microbit_pro_photo_1770116696059.png" className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </div>

                {/* 2. mBot */}
                <div className="relative group min-h-[350px]">
                  <motion.div style={{ opacity: hardwareOpacity }}>
                    <TiltCard delay={0} title="mBot" subtitle="Mechanical robotics." image="/assets/images/mbot_pro_photo_1770116709819.png" color="rgba(6, 182, 212, 0.4)" landed={landed2} />
                  </motion.div>
                  {!landed2 && (
                    <motion.div style={{ x: xMBot, y: yMBot, rotate: rotateMBot, zIndex: 50 }} className="absolute inset-0 pointer-events-none rounded-[3rem] overflow-hidden border-2 border-monia-blue/20 bg-slate-900 shadow-2xl">
                      <img src="/assets/images/mbot_pro_photo_1770116709819.png" className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </div>

                {/* 3. Thymio */}
                <div className="relative group min-h-[350px]">
                  <motion.div style={{ opacity: hardwareOpacity }}>
                    <TiltCard delay={0} title="Thymio" subtitle="Sensors & Light." image="/assets/images/thymio_pro_photo_1770116722459.png" color="rgba(249, 115, 22, 0.4)" landed={landed3} />
                  </motion.div>
                  {!landed3 && (
                    <motion.div style={{ x: xThymio, y: yThymio, rotate: rotateThymio, zIndex: 50 }} className="absolute inset-0 pointer-events-none rounded-[3rem] overflow-hidden border-2 border-monia-blue/20 bg-slate-900 shadow-2xl">
                      <img src="/assets/images/thymio_pro_photo_1770116722459.png" className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </div>

                {/* 4. Dadabit */}
                <div className="relative group min-h-[350px]">
                  <motion.div style={{ opacity: hardwareOpacity }}>
                    <TiltCard delay={0} title="Dadabit" subtitle="Python Power." image="/assets/images/python.png" color="rgba(168, 85, 247, 0.4)" landed={landed4} />
                  </motion.div>
                  {!landed4 && (
                    <motion.div style={{ x: xDadabit, y: yDadabit, rotate: rotateDadabit, zIndex: 50 }} className="absolute inset-0 pointer-events-none rounded-[3rem] overflow-hidden border-2 border-monia-blue/20 bg-slate-900 shadow-2xl">
                      <img src="/assets/images/python.png" className="w-full h-full object-cover" />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div animate={{ opacity: [0.2, 0.5, 0.2], y: [0, 15, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-16 border border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-1.5 bg-monia-orange rounded-full" />
        </motion.div>
      </div>

      <FeaturesSection />
      <EcosystemSection />

      <footer className="bg-white py-32 text-center relative z-20 border-t border-slate-100">
        <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Monia.ma
        </div>
      </footer>
    </div>
  );
};

export default Home;