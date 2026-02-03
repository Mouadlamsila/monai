import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Bot, Zap, Cloud, Repeat, Layers, CheckCircle, Code2, Sparkles, Box } from "lucide-react";
import BentoCard from "./BentoCard";

const FeaturesSection = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.95, 1]);

    return (
        <motion.section
            style={{ scale }}
            className="relative z-30 bg-white py-32 lg:py-64 rounded-t-[10rem] -mt-40 overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.2)]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-block px-4 py-1.5 rounded bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8"
                        >
                            The Learning Platform
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8] uppercase"
                        >
                            One <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-monia-blue via-slate-400 to-monia-orange">Ecosystem.</span>
                        </motion.h2>
                    </div>

                    <p className="text-xl text-slate-500 font-bold max-w-sm mb-4 leading-snug">
                        We've built a unified interface that bridges the gap between physical hardware and cloud-based intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <BentoCard
                        title="One Tool, All Robots"
                        desc="The ultimate interface that connects every robot instantly. No complex setup, just pure coding."
                        icon={Layers}
                        className="lg:col-span-2 shadow-2xl shadow-blue-500/5 min-h-[500px]"
                        delay={0.1}
                    >
                        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-50 rounded-[3rem] border border-slate-100 mt-8">
                            <div className="relative group/core">
                                <div className="absolute inset-0 bg-monia-blue/20 blur-3xl group-hover/core:bg-monia-blue/40 transition-colors duration-700" />
                                <Box size={120} className="text-slate-950 relative z-10 transition-transform duration-1000 group-hover/core:rotate-12" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-8 border-2 border-dashed border-monia-blue/30 rounded-full"
                                />
                            </div>
                        </div>
                    </BentoCard>

                    <BentoCard
                        title="Cloud Learning"
                        desc="Your projects are always with you. Start at school, finish at home on any device."
                        icon={Cloud}
                        className="lg:col-span-1 bg-slate-950 text-white border-none min-h-[500px]"
                        delay={0.2}
                    >
                        <div className="flex flex-col items-center mt-12 space-y-8">
                            <div className="flex items-center gap-4">
                                {[1, 2, 3].map(i => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [20, 60, 20] }}
                                        transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
                                        className="w-1.5 bg-monia-orange rounded-full"
                                    />
                                ))}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-white/30">Latency: 0.04ms</div>
                        </div>
                    </BentoCard>

                    <BentoCard
                        title="Intelligent Buddy"
                        desc="Our built-in AI assistant helps you fix bugs and learn Python code step-by-step."
                        icon={Sparkles}
                        className="lg:col-span-1 min-h-[500px]"
                        delay={0.3}
                    >
                        <div className="mt-12 p-6 bg-monia-orange/10 rounded-[2.5rem] border border-monia-orange/20 relative overflow-hidden">
                            <Code2 size={40} className="text-monia-orange mb-4" />
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-monia-orange/20 rounded-full" />
                                <div className="h-1.5 w-2/3 bg-monia-orange/20 rounded-full" />
                            </div>
                            <motion.div
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent skew-x-12"
                            />
                        </div>
                    </BentoCard>
                </div>

                <div className="mt-24 pt-24 border-t border-slate-100 flex flex-col items-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12">Trusted by 2000+ Schools</span>
                    <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-200">
                        <Bot size={40} />
                        <Cpu size={40} />
                        <Zap size={40} />
                        <Box size={40} />
                        <Layers size={40} />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default FeaturesSection;
