import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Cpu, Gamepad2, Blocks, Rocket, Link2, ShieldCheck, Zap } from "lucide-react";

const EcosystemSection = () => {
    const sectionRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 0.4], [150, 0]);
    const rotateX = useTransform(scrollYProgress, [0, 0.4], [10, 0]);

    const hardwareItems = [
        { name: "Micro:bit", type: "V1 & V2", color: "from-blue-500/20 to-blue-600/20", border: "border-blue-500/30" },
        { name: "mBot", type: "Ranger & Neo", color: "from-cyan-500/20 to-cyan-600/20", border: "border-cyan-500/30" },
        { name: "Arduino", type: "Uno & Nano", color: "from-teal-500/20 to-teal-600/20", border: "border-teal-500/30" },
        { name: "ESP32", type: "WiFi & BT", color: "from-purple-500/20 to-purple-600/20", border: "border-purple-500/30" }
    ];

    return (
        <motion.section
            ref={sectionRef}
            style={{
                y,
                rotateX,
                perspective: "1200px",
                willChange: "transform"
            }}
            className="relative z-30 py-48 px-6 lg:px-12 bg-slate-950 overflow-hidden -mt-40"
        >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient from-blue-500/20 to-transparent blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
                    <div className="text-left max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-[0.3em] mb-6"
                        >
                            <Link2 size={14} /> Unified Ecosystem
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter"
                        >
                            One Code. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-slate-500 italic">Every Robot.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] max-w-sm text-slate-400 font-medium text-lg leading-relaxed"
                    >
                        We built a bridge between high-quality software and affordable hardware. Switch between robots without ever changing your workflow.
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 auto-rows-[350px]">
                    {/* Compatibility Grid */}
                    <div className="lg:col-span-8 grid grid-cols-2 gap-4">
                        {hardwareItems.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className={`bg-gradient-to-br ${item.color} ${item.border} border p-8 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 group`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-md">
                                        <Cpu size={24} />
                                    </div>
                                    <div className="text-white/20 group-hover:text-white/50 transition-colors">
                                        <ShieldCheck size={20} />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-white">{item.name}</div>
                                    <div className="text-xs font-bold text-white/40 uppercase tracking-widest">{item.type}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Feature Highlight */}
                    <div className="lg:col-span-4 bg-blue-600 rounded-[3rem] p-10 flex flex-col justify-between text-white shadow-2xl shadow-blue-500/30 group overflow-hidden relative">
                        <div className="relative z-10 flex justify-between items-start">
                            <Blocks size={48} className="text-white/90 drop-shadow-xl group-hover:rotate-12 transition-transform duration-500" />
                            <Zap size={24} className="text-blue-200 animate-pulse" />
                        </div>
                        <div className="relative z-10">
                            <div className="text-6xl font-black mb-2 tracking-tighter">50+</div>
                            <div className="text-sm font-black uppercase tracking-widest text-blue-200 mb-4">DRIVERS & MODULES</div>
                            <p className="text-blue-100 font-bold leading-relaxed">Continuous updates for the latest sensors and mechanical kits.</p>
                        </div>
                        {/* Decoration decoration */}
                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                    </div>

                    {/* Bottom row items */}
                    <div className="lg:col-span-3 bg-slate-900 border border-white/5 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center group cursor-pointer hover:border-blue-500/50 transition-colors">
                        <Trophy size={64} className="text-amber-500 mb-6 drop-shadow-2xl group-hover:scale-110 transition-transform" />
                        <div className="text-sm font-black uppercase tracking-[0.3em] text-white">STEM Standard</div>
                        <div className="text-[10px] font-bold text-slate-500 mt-2">Certified for Schools</div>
                    </div>

                    <div className="lg:col-span-6 bg-gradient-to-r from-monia-orange to-orange-600 rounded-[3rem] p-10 flex flex-col justify-between text-white relative overflow-hidden group">
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                                <Gamepad2 size={24} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-white/70 italic">Interactive Dashboard</span>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-5xl font-black tracking-tight leading-none mb-4">Launch Your Lab.</h3>
                            <button className="flex items-center gap-2 px-6 py-3 bg-white text-orange-600 rounded-xl font-black text-xs hover:scale-105 transition-all">
                                ACCESS REPOSITORY <Rocket size={14} />
                            </button>
                        </div>
                        {/* Interactive dots visual */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center p-8 pointer-events-none">
                            <div className="grid grid-cols-4 gap-2 opacity-20 group-hover:opacity-40 transition-opacity">
                                {[...Array(16)].map((_, i) => (
                                    <div key={i} className="w-2 h-2 bg-white rounded-full" />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-slate-900 border border-white/5 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center">
                        <div className="flex gap-1 mb-6">
                            {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />)}
                        </div>
                        <div className="text-2xl font-black text-white">UP-TIME</div>
                        <div className="text-4xl font-black text-blue-500 tracking-tighter">99.9%</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Cloud Synced</div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default EcosystemSection;
