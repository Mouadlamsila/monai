import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Trophy, ChevronRight, Crown, Zap, ShieldCheck, Cpu,
    Play, Pause, Volume2, VolumeX, Maximize, SkipForward, SkipBack,
    Target, Activity
} from "lucide-react";

// --- 1. CUSTOM VIDEO PLAYER COMPONENT ---
const VideoSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const containerRef = useRef(null);
    const iframeRef = useRef(null);

    const videoUrls = ["oJR77TttbrQ", "uMIQR_y00Jc", "668nO6H-y_E"];

    const handleCommand = (func, args = []) => {
        iframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func, args }),
            "*"
        );
    };

    useEffect(() => {
        handleCommand(isPlaying ? "playVideo" : "pauseVideo");
    }, [isPlaying, currentIndex]);

    useEffect(() => {
        handleCommand(isMuted ? "mute" : "unMute");
    }, [isMuted, currentIndex]);

    const togglePlay = () => setIsPlaying(!isPlaying);
    const toggleMute = () => setIsMuted(!isMuted);
    const nextSlide = () => { setCurrentIndex((prev) => (prev + 1) % videoUrls.length); setIsPlaying(true); };
    const prevSlide = () => { setCurrentIndex((prev) => (prev - 1 + videoUrls.length) % videoUrls.length); setIsPlaying(true); };

    const handleFullscreen = () => {
        if (containerRef.current?.requestFullscreen) containerRef.current.requestFullscreen();
    };

    return (
        <div ref={containerRef} className="relative w-full h-full bg-black group overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <iframe
                        ref={iframeRef}
                        className="w-[110%] h-[110%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110"
                        src={`https://www.youtube.com/embed/${videoUrls[currentIndex]}?enablejsapi=1&autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=${videoUrls[currentIndex]}&version=3`}
                        allow="autoplay; encrypted-media"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-transparent to-black/60">
                <div className="flex justify-between items-start">
                    <div className="bg-blue-600 px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                        <Activity size={14} className="text-white animate-pulse" />
                        <span className="text-[10px] text-white font-black uppercase tracking-widest">Mission Active</span>
                    </div>
                    <button onClick={handleFullscreen} className="p-2 hover:bg-white/20 rounded-full text-white transition-colors border-none bg-transparent cursor-pointer">
                        <Maximize size={18} />
                    </button>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.button
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        onClick={togglePlay}
                        className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] cursor-pointer border-none"
                    >
                        {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                    </motion.button>
                </div>

                <div className="space-y-4">
                    <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer group/progress relative">
                        <motion.div initial={{ width: "0%" }} animate={{ width: "45%" }} className="h-full bg-blue-500 relative">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full scale-0 group-hover/progress:scale-100 transition-transform shadow-xl flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4">
                                <button onClick={prevSlide} className="text-white hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"><SkipBack size={22} fill="currentColor" /></button>
                                <button onClick={nextSlide} className="text-white hover:text-blue-400 transition-colors bg-transparent border-none cursor-pointer"><SkipForward size={22} fill="currentColor" /></button>
                            </div>
                            <div className="flex items-center gap-3">
                                <button onClick={toggleMute} className="text-white bg-transparent border-none cursor-pointer">{isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}</button>
                                <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden"><div className={`h-full bg-blue-500 transition-all ${isMuted ? 'w-0' : 'w-1/2'}`} /></div>
                            </div>
                        </div>
                        <div className="text-white font-mono text-xs font-black tracking-tighter bg-black/40 px-3 py-1 rounded-lg backdrop-blur-md">00:45 / 03:20</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 2. MAIN FEATURES SECTION ---
const FeaturesSection = () => {
    return (
        <section className="py-24 bg-[#F8FAFC] rounded-[4rem] lg:rounded-[8rem] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter uppercase leading-none">
                        LEVEL UP <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 italic">YOUR BRAIN.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-[550px]">
                    {/* VIDEO PLAYER */}
                    <div className="lg:col-span-8 rounded-[3.5rem] overflow-hidden bg-black shadow-2xl border-8 border-white">
                        <VideoSlider />
                    </div>

                    {/* SIDEBAR STATS - ELECTRIC BLUE & YELLOW TICKET */}
                    <div className="lg:col-span-4 flex flex-col gap-6">

                        {/* Main Profile Card: Solid Blue 600 */}
                        <div className="flex-1 bg-blue-600 rounded-[3.5rem] p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl border border-blue-500">

                            {/* Subtle Glow Effect */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                {/* Header: Avatar & Status */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-[2.5rem] bg-white/20 backdrop-blur-md p-1 border border-white/30 shadow-2xl">
                                            <div className="w-full h-full rounded-[2.2rem] bg-blue-700 overflow-hidden">
                                                <img
                                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                                    alt="User"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        {/* Level Badge in Yellow to match Reward */}
                                        <div className="absolute -bottom-1 -right-1 bg-yellow-400 text-yellow-950 text-[10px] font-black px-2.5 py-1 rounded-full border-2 border-blue-600 shadow-lg">
                                            LVL 24
                                        </div>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="text-[9px] text-white font-black uppercase tracking-widest">Active</span>
                                    </div>
                                </div>

                                {/* User Title */}
                                <div className="mb-8 text-white">
                                    <h4 className="font-black text-3xl uppercase tracking-tighter italic leading-none">Neo_Explorer</h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Crown size={14} className="text-yellow-400" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100">Elite Commander</span>
                                    </div>
                                </div>

                                {/* Squad Section - Glass Style over Blue */}
                                <div className="bg-black/10 border border-white/10 rounded-[2.5rem] p-5 backdrop-blur-sm">
                                    <div className="text-[9px] font-black text-blue-100/60 uppercase tracking-widest mb-4 ml-1">Active Squad</div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-3">
                                            {['Aria', 'Cyborg', 'Nova', 'Rex'].map((seed, i) => (
                                                <div key={i} className="w-11 h-11 rounded-2xl border-2 border-blue-600 bg-blue-700 overflow-hidden shadow-lg hover:-translate-y-1 transition-transform cursor-pointer">
                                                    <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`} alt="Bot" className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-[10px] font-black">+2</div>
                                    </div>
                                </div>
                            </div>

                            {/* XP System - Yellow Bar for high contrast */}
                            <div className="mt-8 relative z-10">
                                <div className="flex justify-between items-end mb-3 px-1">
                                    <span className="text-[10px] font-black text-blue-100 uppercase tracking-widest">Mission Sync</span>
                                    <span className="text-white font-black text-xs italic">62%</span>
                                </div>
                                <div className="h-3 w-full bg-black/20 rounded-full p-[2px] border border-white/10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "62%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* REWARD POOL - THE TICKET (KEEPING IT ORIGINAL AS REQUESTED) */}
                        <motion.div whileHover={{ y: -5 }} className="h-32 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 rounded-[2.5rem] p-6 flex items-center justify-between shadow-[0_20px_60px_rgba(245,158,11,0.3)] relative overflow-hidden cursor-pointer">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F8FAFC] rounded-full shadow-inner border border-yellow-500/20" />
                            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#F8FAFC] rounded-full shadow-inner border border-yellow-500/20" />
                            <motion.div animate={{ x: [-500, 500] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-40 skew-x-12" />

                            <div className="relative z-10 pl-4">
                                <div className="text-yellow-950/60 text-[10px] font-black uppercase mb-1 tracking-widest">Reward Pool</div>
                                <div className="text-yellow-950 text-5xl font-black italic tracking-tighter leading-none">$5,000</div>
                            </div>

                            <div className="bg-yellow-950/10 p-4 rounded-3xl backdrop-blur-md mr-2">
                                <Trophy size={40} className="text-yellow-950" />
                            </div>
                        </motion.div>
                    </div>

                    {/* LOWER GRID: NEURAL LOGIC */}
                    <div className="lg:col-span-4 bg-violet-600 rounded-[3.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl">
                        <div className="absolute -right-10 -bottom-10 opacity-20 rotate-12"><Cpu size={250} /></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-4">Neural <br /> Logic</h3>
                            <p className="font-bold text-violet-100/70">Build nodes, deploy AI systems instantly.</p>
                        </div>
                        <div className="flex gap-2 relative z-10 mt-6">
                            <div className="px-4 py-2 bg-white/10 rounded-xl text-[10px] font-black uppercase border border-white/20">Blocks</div>
                            <div className="px-4 py-2 bg-yellow-400 rounded-xl text-[10px] font-black uppercase text-yellow-900 shadow-lg">Python SDK</div>
                        </div>
                    </div>

                    {/* MISSION CONTROL */}
                    <div className="lg:col-span-8 bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl p-10 flex flex-col md:flex-row gap-10">
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <ShieldCheck className="text-emerald-500" />
                                <span className="text-emerald-500 font-black uppercase tracking-widest text-xs">Mission Control</span>
                            </div>
                            <h3 className="text-5xl font-black text-slate-950 uppercase tracking-tighter mb-4 leading-none">50+ Campaigns</h3>
                            <p className="text-slate-500 font-bold mb-8 italic text-lg">"Unlock Master Roboticist by finishing hardware missions."</p>
                            <div className="flex gap-8">
                                <div><div className="text-3xl font-black text-slate-900">12/50</div><div className="text-[10px] font-black text-slate-400 uppercase">Complete</div></div>
                                <div className="w-[2px] h-12 bg-slate-100" />
                                <div><div className="text-3xl font-black text-slate-900">48</div><div className="text-[10px] font-black text-slate-400 uppercase">Badges</div></div>
                            </div>
                        </div>

                        {/* RECENT UNLOCKS WITH AVATARS */}
                        <div className="flex-1 rounded-[2.5rem] bg-slate-50 border border-slate-100 p-6 flex flex-col justify-center relative overflow-hidden">
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">New Unlocks</div>
                            <div className="grid grid-cols-4 gap-3 relative z-10">
                                {[
                                    { s: 'Zane', t: 'adventurer' }, { s: 'Milo', t: 'bottts' },
                                    { s: 'Luna', t: 'croodles' }, { s: 'Rex', t: 'pixel-art' },
                                    { s: 'Kira', t: 'micah' }, { s: 'Nova', t: 'avataaars' },
                                    { s: 'Giga', t: 'bottts-neutral' }, { s: 'Vera', t: 'big-smile' }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i} whileHover={{ scale: 1.15, rotate: 5 }}
                                        className="aspect-square rounded-2xl bg-white border border-slate-200 p-1 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-help shadow-sm group/item relative"
                                    >
                                        <img src={`https://api.dicebear.com/7.x/${item.t}/svg?seed=${item.s}`} alt="Unlock" className="w-full h-full rounded-xl object-cover" />
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover/item:opacity-100 transition-opacity z-20 font-bold uppercase">{item.s} Done</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-16 py-7 bg-slate-950 text-white rounded-[2.5rem] font-black text-2xl uppercase tracking-[0.2em] shadow-2xl flex items-center gap-6 group cursor-pointer border-none">
                        Start Mission <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;