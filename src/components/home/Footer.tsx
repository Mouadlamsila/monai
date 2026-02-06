import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] text-white px-6 md:px-20 pt-24 pb-12 overflow-hidden border-t border-white/5">

      {/* --- 1. Background Visual Detail (The Giant Majestic Logo) --- */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-[50%] pointer-events-none select-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.2, x: 50 }}
          whileInView={{ opacity: 0.3, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          {/* Central Glow Aura */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-monia-blue/20 blur-[120px] rounded-full" />

          {/* Huge Watermark Logo */}
          <img
            src="/logo/logo.png"
            alt="Monia Watermark"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-[600px] h-auto object-contain brightness-125 grayscale"
            style={{
              maskImage: 'radial-gradient(circle, black 40%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 90%)'
            }}
          />

          {/* Subtle Cyberpunk Grid/Scanline Layer */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] opacity-20" />
        </motion.div>
      </div>

      <div className="container mx-auto relative z-10">

        {/* Top Section: The Big Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.85] select-none">
              Let's <br /> <span className="text-monia-orange drop-shadow-[0_0_15px_rgba(255,100,0,0.3)]">Evolve.</span>
            </h2>
            <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed italic border-l-2 border-monia-blue/40 pl-6">
              "The next generation of hardware engineers starts here. Join the ecosystem."
            </p>

            <div className="flex items-center gap-6">
              <button className="px-10 py-5 bg-white text-black font-black uppercase text-[11px] tracking-[0.3em] rounded-full hover:bg-monia-blue hover:text-white transition-all duration-500 shadow-xl">
                Contact Lab
              </button>
              <motion.div
                whileHover={{ rotate: 45, scale: 1.1 }}
                className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group cursor-pointer hover:border-monia-orange transition-all duration-500"
              >
                <ArrowUpRight size={24} className="text-white group-hover:text-monia-orange transition-colors" />
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mr-10  pt-10">
            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-monia-blue/80">Navigation</h3>
              <ul className="space-y-5 text-sm font-bold text-slate-500">
                {['Home', 'Curriculum', 'Hardwares', 'Community'].map((item) => (
                  <li key={item} className="hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-3 group">
                    <span className="w-0 h-px bg-monia-orange group-hover:w-5 transition-all duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-monia-blue/80">Resources</h3>
              <ul className="space-y-5 text-sm font-bold text-slate-500">
                {['Documentation', 'API Access', 'Support', 'Privacy'].map((item) => (
                  <li key={item} className="hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-3 group">
                    <span className="w-0 h-px bg-monia-orange group-hover:w-5 transition-all duration-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 md:col-span-1  col-span-2">
              <h3 className="text-[10px] font-black  uppercase tracking-[0.5em] text-monia-blue/80">Connect</h3>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="p-4 bg-white/5 rounded-2xl   border border-white/5 cursor-pointer backdrop-blur-sm transition-all"
                  >
                    <Icon size={20} className="text-slate-300 hover:text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Branding & Legal */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
            <img src="/logo/logo.png" alt="Logo" className="h-10 w-auto " />
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            <span className="text-[9px] font-black tracking-[0.4em] text-slate-500">MONIA PROTOCOL © 2026</span>
          </div>

          <div className="flex flex-wrap justify-center gap-10 text-[9px] font-black text-slate-600 uppercase tracking-widest">
            <span className="hover:text-white cursor-default transition-colors">LOCATED IN CASABLANCA // MOROCCO</span>

          </div>

          {/* Animated Bottom Line */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-monia-blue/40 to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;