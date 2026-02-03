import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trophy, Cpu, Gamepad2, Blocks, Rocket } from "lucide-react";

const EcosystemSection = () => {
    const sectionRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 0.4], [200, 0]);
    const rotateX = useTransform(scrollYProgress, [0, 0.4], [15, 0]);

    return (
        <motion.section
            ref={sectionRef}
            style={{
                y,
                rotateX,
                perspective: "1000px",
                willChange: "transform"
            }}
            className="relative z-40 py-48 px-6 lg:px-12 bg-slate-950 overflow-hidden -mt-32 rounded-t-[10rem] lg:rounded-t-[15rem] border-t border-white/10 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]"
        >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 pt-20">
                <div className="text-center mb-24 text-white">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-6xl lg:text-8xl font-black uppercase tracking-tighter"
                    >
                        Total <span className="text-blue-500">Compatibility</span>
                    </motion.h2>
                    <p className="text-slate-400 text-xl mt-6 max-w-xl mx-auto">One interface to rule them all. From Micro:bit to custom Arduino builds.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-[350px]">
                    <div className="lg:col-span-3 bg-slate-900/40 backdrop-blur-md rounded-[4rem] border border-white/5 p-12 text-white flex flex-col justify-between group hover:bg-slate-900/60 transition-colors">
                        <div className="flex justify-between items-start">
                            <Cpu size={40} className="text-blue-500" />
                            <Rocket size={24} className="text-slate-700 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-transparent bg-clip-text bg-linear-to-r from-white to-slate-500">The Unified Standard.</h3>
                            <p className="text-slate-400 text-lg font-bold max-w-lg">We provide a bridge for every popular micro-controller, making high-level robotics accessible.</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[4rem] p-12 text-white flex flex-col justify-center items-center shadow-2xl shadow-blue-500/20">
                        <Blocks size={100} className="drop-shadow-2xl animate-pulse" />
                    </div>

                    <div className="bg-slate-900/40 backdrop-blur-md rounded-[4rem] border border-white/5 p-12 text-white flex flex-col justify-center items-center">
                        <div className="text-6xl font-black text-blue-500 mb-2">50+</div>
                        <div className="text-xs font-black uppercase tracking-widest text-slate-500">Modules</div>
                    </div>

                    <div className="lg:col-span-2 bg-linear-to-br from-monia-orange to-orange-600 rounded-[4rem] p-12 text-white flex flex-col justify-between">
                        <Gamepad2 size={40} className="text-white/80" />
                        <h3 className="text-4xl font-black uppercase tracking-tight text-left">Learn through Play.</h3>
                    </div>

                    <div className="bg-slate-900/40 backdrop-blur-md rounded-[4rem] border border-white/5 p-12 text-white flex flex-col justify-center items-center text-center">
                        <Trophy size={60} className="text-amber-500 mb-4" />
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">STEM Standard</div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default EcosystemSection;