import React from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    Cloud,
    Zap,
    Layout,
    Cpu,
    Bot,
    Star,
    Award,
    ChevronRight,
    Save,
    Rocket,
    ArrowRight
} from "lucide-react";

const EcosystemSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const achievements = [
        { name: "Ahmed", xp: 5500, rank: 1 },
        { name: "Sarah", xp: 5200, rank: 2 },
        { name: "Youssef", xp: 4800, rank: 3 }
    ];

    return (
        <section className="relative py-32 px-6 lg:px-12 bg-slate-950 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f97316_1px,transparent_1px),linear-gradient(to_bottom,#f97316_1px,transparent_1px)] bg-[size:200px_200px] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6">
                        The Fun <span className="text-monia-blue">Ecosystem</span>
                    </h2>
                    <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">
                        A platform designed to transform learning robotics into a thrilling adventure for Every Maker.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
                >
                    {/* CARD 1: The Unified Brain (Wide) */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 flex flex-col justify-between group overflow-hidden"
                    >
                        <div className="relative z-10 max-w-md">
                            <div className="w-12 h-12 rounded-xl bg-monia-blue/20 flex items-center justify-center text-monia-blue mb-6">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">One Tool, Any Robot.</h3>
                            <p className="text-slate-400 font-medium">Forget complexity. Switch from Micro:bit to mBot or Thymio without changing tabs. Everything is centralized in one easy-to-use home.</p>
                        </div>

                        {/* Visual for Card 1 */}
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:flex items-center justify-center">
                            <div className="relative">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-64 h-64 border-2 border-dashed border-monia-blue/20 rounded-full flex items-center justify-center"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-monia-blue rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                        <Bot size={32} className="text-white" />
                                    </div>
                                </div>
                                {/* Satellite Icons */}
                                {[
                                    { icon: Cpu, angle: 0 },
                                    { icon: Zap, angle: 90 },
                                    { icon: Layout, angle: 180 },
                                    { icon: Rocket, angle: 270 }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="absolute w-10 h-10 bg-slate-800 border border-white/10 rounded-lg flex items-center justify-center text-slate-400"
                                        style={{
                                            top: `calc(50% + ${Math.sin(item.angle * Math.PI / 180) * 110}px - 20px)`,
                                            left: `calc(50% + ${Math.cos(item.angle * Math.PI / 180) * 110}px - 20px)`
                                        }}
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            borderColor: ["rgba(255,255,255,0.1)", "rgba(59,130,246,0.3)", "rgba(255,255,255,0.1)"]
                                        }}
                                        transition={{ duration: 3, delay: idx * 0.5, repeat: Infinity }}
                                    >
                                        <item.icon size={18} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: Gamification Center (Tall) */}
                    <motion.div
                        variants={cardVariants}
                        className="md:row-span-2 bg-linear-to-b from-monia-orange/20 to-slate-900 backdrop-blur-3xl rounded-[3rem] border border-monia-orange/20 p-10 flex flex-col justify-between group"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-monia-orange/20 flex items-center justify-center text-monia-orange mb-6">
                                <Award size={24} />
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Learning is a Game.</h3>
                            <p className="text-slate-400 font-medium">Earn XP, unlock 'Master Coder' badges, and collect amazing trophies as you learn to code.</p>
                        </div>

                        {/* Visual for Card 2 */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-10">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-40 h-40 bg-linear-to-br from-monia-orange to-amber-400 rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(249,115,22,0.4)] relative"
                            >
                                <Trophy size={80} className="text-white" />
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full border-4 border-white/30"
                                />
                            </motion.div>
                            <div className="w-full space-y-4">
                                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-monia-orange">
                                    <span>Level 12</span>
                                    <span>2450 / 3000 XP</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "75%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-linear-to-r from-monia-orange to-amber-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3: Cloud Power (Small) */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 flex flex-col justify-center group relative overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-monia-blue/20 flex items-center justify-center text-monia-blue">
                                <Cloud size={20} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">Smart Sync.</h3>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Your projects are always safe and accessible from anywhere.</p>

                        <div className="absolute bottom-6 right-6">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-monia-blue animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Live Save</span>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <Save size={40} className="text-monia-blue/20 group-hover:text-monia-blue transition-colors duration-500" />
                        </div>
                    </motion.div>

                    {/* CARD 5: Pro Mode (Small) */}
                    <motion.div
                        variants={cardVariants}
                        className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 flex flex-col justify-center group overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-monia-orange/20 flex items-center justify-center text-monia-orange">
                                <Star size={20} />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight">Blocks to Python.</h3>
                        </div>
                        <p className="text-slate-400 text-sm font-medium">Master real-world coding power with our visual-to-logic conversion.</p>

                        <div className="mt-10 flex items-center gap-8 justify-center">
                            <Layout size={32} className="text-slate-600" />
                            <ArrowRight size={20} className="text-monia-orange" />
                            <Cpu size={32} className="text-white" />
                        </div>
                    </motion.div>

                    {/* CARD 4: Live Challenges (Wide) */}
                    <motion.div
                        variants={cardVariants}
                        className="md:col-span-2 lg:col-span-3 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 flex flex-col md:flex-row gap-12 group"
                    >
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-xl bg-monia-blue/20 flex items-center justify-center text-monia-blue mb-6">
                                <Trophy size={24} />
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Challenges & Wins.</h3>
                            <p className="text-slate-400 font-medium">Join weekly tournaments and climb the National Leaderboard to show your skills.</p>
                        </div>

                        <div className="flex-1 bg-slate-900/50 rounded-2xl border border-white/5 p-6 space-y-4">
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4">Leaderboard National</div>
                            {achievements.map((user, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 group/row hover:bg-monia-blue/10 transition-colors">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black ${idx === 0 ? "bg-monia-orange text-white" : "bg-white/10 text-slate-400"}`}>
                                        {user.rank}
                                    </div>
                                    <div className="flex-1 font-bold text-sm tracking-tight">{user.name}</div>
                                    <div className="text-monia-blue font-black text-sm">{user.xp} XP</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex justify-center"
                >
                    <button className="px-10 py-5 rounded-2xl border-2 border-monia-blue text-monia-blue font-black tracking-widest uppercase hover:bg-monia-blue hover:text-white transition-all duration-500 flex items-center gap-4 group">
                        Discover the Full Vision
                        <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default EcosystemSection;
