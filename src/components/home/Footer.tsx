import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Youtube, ArrowUpRight, Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900/8 text-white px-20 pt-24 pb-12 overflow-hidden border-t border-white/5">

      {/* 1. Background Visual Detail (Macro Shot) */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none grayscale">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000"
          alt="Circuit Board Detail"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">

        {/* Top Section: The Big Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            <h2 className="text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
              Let's <br /> <span className="text-monia-orange">Evolve.</span>
            </h2>
            <p className="text-slate-500 max-w-sm text-lg font-medium leading-relaxed italic">
              "The next generation of hardware engineers starts here. Join the ecosystem."
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-monia-blue hover:text-white transition-all duration-500">
                Contact Lab
              </button>
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group cursor-pointer hover:border-white transition-all">
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-monia-blue">Navigation</h3>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                {['Home', 'Curriculum', 'Hardwares', 'Community'].map((item) => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                    <div className="w-0 h-px bg-monia-orange group-hover:w-4 transition-all" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-monia-blue">Resources</h3>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                {['Documentation', 'API Access', 'Support', 'Privacy'].map((item) => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer group flex items-center gap-2">
                    <div className="w-0 h-px bg-monia-orange group-hover:w-4 transition-all" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 md:col-span-1 col-span-2">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-monia-blue">Connect</h3>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <div key={i} className="p-3 bg-white/5 rounded-xl hover:bg-white/10 hover:-translate-y-1 transition-all cursor-pointer border border-white/5">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Branding & Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo/logo.png" alt="Logo" className="h-14 sm:block hidden w-auto object-contain transform group-hover:scale-105 transition-transform ease-in-out duration-200" />
          </div>

          <div className="flex gap-12 text-[10px] font-black text-slate-600 uppercase tracking-widest">
            <span>© 2026 MONIA PROTOCOL</span>
            <span className="hidden md:block">LOCATED IN CASABLANCA, MOROCCO</span>
            <span>SYSTEM STATUS: OPTIMAL</span>
          </div>

          {/* Animated Glow Line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-linear-to-r from-transparent via-monia-blue to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;