import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Bot, Zap, Cloud, Layers, Code2, Sparkles, Box } from "lucide-react";
import BentoCard from "./BentoCard";

const FeaturesSection = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    const containerVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <motion.section
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
            style={{
                scale,
                opacity,
                willChange: "transform, opacity"
            }}
            className="relative z-30 bg-white py-32 lg:pb-48 lg:pt-64 rounded-[10rem] -mt-40 overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.05)]"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
                    <div className="flex-1">
                        <motion.div
                            variants={itemVariants}
                            className="inline-block px-4 py-1.5 rounded bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8"
                        >
                            The Learning Platform
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-7xl md:text-9xl font-black text-slate-950 tracking-tighter leading-[0.8] uppercase"
                        >
                            One <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-monia-blue via-slate-400 to-monia-orange">Platform.</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-slate-500 font-bold max-w-sm mb-4 leading-snug"
                    >
                        We've built a unified interface that bridges the gap between physical hardware and cloud-based intelligence.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-6"
                >
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
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mt-24 pt-24 border-t border-slate-100 flex flex-col items-center"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12">Trusted by 2000+ Schools</span>
                    <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-200">
                        <Bot size={40} />
                        <Cpu size={40} />
                        <Zap size={40} />
                        <Box size={40} />
                        <Layers size={40} />
                    </div>
                </motion.div>
            </div>
        </motion.section >
    );
};

export default FeaturesSection;
