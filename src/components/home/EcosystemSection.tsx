
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { ArrowUpRight, BookOpen, ShieldCheck, Star, Users, GraduationCap, Code2, Zap } from "lucide-react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

const EcosystemSection = () => {
    const robots = [
        {
            name: "Micro:bit V2.2",
            category: "Edge AI & IoT",
            img: "https://images.unsplash.com/photo-1555617766-c94804975da3?q=80&w=800",
            specs: ["NRF52833", "Bluetooth 5.0", "Speaker/Mic"]
        },
        {
            name: "mBot Neo",
            category: "Cyber-Physical",
            img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800",
            specs: ["CyberPi", "Precision Motors", "RGB Sensors"]
        },
        {
            name: "ESP32-S3 Lab",
            category: "Advanced Robotics",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
            specs: ["Dual Core", "WiFi/BT", "Neural Engine"]
        },
        {
            name: "Arduino GIGA",
            category: "High Performance",
            img: "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=800",
            specs: ["STM32H7", "Dual Core", "76 GPIOs"]
        },
        {
            name: "Raspberry Pi 5",
            category: "Vision Processing",
            img: "https://thepihut.com/cdn/shop/files/raspberry-pi-5-raspberry-pi-40958498898115.jpg?v=1695819922&width=2048",
            specs: ["Quad Core 2.4GHz", "Doris GPU", "8GB RAM"]
        },
        {
            name: "Arduino Uno R3",
            category: "Microcontroller",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/250px-Arduino_Uno_-_R3.jpg",
            specs: ["ATmega328P", "16MHz", "32KB Flash"]
        },
    ];

    const stats = [
        { label: "Active Courses", value: "48+", icon: <BookOpen size={16} /> },
        { label: "STEM Certified", value: "ISO", icon: <ShieldCheck size={16} /> },
        { label: "Documentation", value: "2k+", icon: <Code2 size={16} /> },
        { label: "Global Users", value: "15k+", icon: <Users size={16} /> },
    ];

    return (
        <section className="relative bg-[#020617] py-32 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden text-blue-500 opacity-20">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-20 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="h-[2px] w-8 bg-blue-500 rounded-full"></span>
                            <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">The Unified Ecosystem</span>
                        </motion.div>
                        <h2 className="text-6xl lg:text-[100px] font-black text-white leading-[0.85] tracking-tighter">
                            Code One. <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-600 via-slate-400 to-slate-600">Build Many.</span>
                        </h2>
                    </div>
                    <div className="lg:pt-20">
                        <p className="text-lg text-slate-400 max-w-sm leading-relaxed mb-8">
                            We've eliminated the friction between hardware and software. A professional ecosystem designed for the next generation of engineers.
                        </p>
                        <div className="flex gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="flex flex-col items-start px-4 border-l border-white/10">
                                    <div className="text-white font-bold text-xl">{stat.value}</div>
                                    <div className="text-slate-500 text-[9px] uppercase tracking-widest font-black">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Auto-sliding Robots Carousel */}
            <div className="relative z-10 w-full mb-32">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={40}
                    slidesPerView={"auto"}
                    loop={true}
                    speed={5000}
                    freeMode={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    className="robots-swiper"
                >
                    {robots.map((robot, i) => (
                        <SwiperSlide key={i} style={{ width: '450px' }}>
                            <div className="relative aspect-16/10 overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/5 transition-all duration-500 group-hover:border-blue-500/30 shadow-2xl group">
                                <img 
                                    src={robot.img} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                                    alt={robot.name} 
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-100 group-hover:opacity-80 transition-opacity" />
                                
                                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-bold rounded-full border border-blue-500/30 backdrop-blur-md">
                                                {robot.category}
                                            </span>
                                        </div>
                                        <h3 className="text-4xl font-black text-white tracking-tighter mb-4">{robot.name}</h3>
                                        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                                            {robot.specs.map((spec, j) => (
                                                <span key={j} className="text-[9px] text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-widest font-bold">{spec}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <button className="w-14 h-14 rounded-full bg-white text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 duration-500 hover:bg-blue-500 hover:text-white">
                                        <ArrowUpRight size={24} />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* Duplicate slides for infinite seamless loop if needed, but Swiper loop handles it */}
                </Swiper>
            </div>

            {/* Quick Info Bar */}
            <div className="max-w-7xl mx-auto px-6 mb-32 w-full relative z-10 flex flex-wrap justify-between items-center gap-10">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map(i => (
                        <img key={i} src={`https://i.pravatar.cc/100?u=${i + 15}`} className="w-12 h-12 rounded-full border-4 border-[#020617] object-cover" alt="user" />
                    ))}
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-black border-4 border-[#020617]">+2.5k</div>
                </div>
                
                <div className="flex flex-wrap gap-8 items-center opacity-40 grayscale">
                    <div className="flex items-center gap-2 text-white font-mono text-[10px] tracking-widest uppercase"><Star size={14} className="text-yellow-500 fill-yellow-500" /> Trustpilot Rated 4.9/5</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="flex items-center gap-2 text-white font-mono text-[10px] tracking-widest uppercase"><GraduationCap size={16} /> Professional Certifications</div>
                    <div className="w-px h-6 bg-white/20" />
                    <div className="flex items-center gap-2 text-white font-mono text-[10px] tracking-widest uppercase"><Zap size={16} className="text-blue-400" /> Real-time Execution</div>
                </div>
            </div>

            {/* Pro Service Interface */}
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-3xl">
                    <div className="p-12 bg-slate-950/40 hover:bg-slate-900/40 transition-colors relative group">
                        <BookOpen className="text-blue-500 mb-8" size={32} />
                        <h4 className="text-xl font-medium text-white mb-4 tracking-tight">Technical Wiki</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">Detailed registers, pinouts, and library references for every supported board.</p>
                        <div className="flex flex-wrap gap-2">
                            {['PDF', 'Markdown', 'API'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-400 font-mono uppercase">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="p-12 bg-slate-950/40 hover:bg-slate-900/40 transition-colors border-x border-white/5">
                        <div className="flex -space-x-2 mb-8">
                            {[1, 2, 3].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?u=${i + 20}`} className="w-10 h-10 rounded-full border-2 border-[#020617]" alt="user" />
                            ))}
                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold">+12k</div>
                        </div>
                        <h4 className="text-xl font-medium text-white mb-4 tracking-tight">Active Community</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Join thousands of students and engineers sharing code and mechanical builds daily.</p>
                    </div>

                    <div className="p-12 bg-slate-950/40 hover:bg-slate-900/40 transition-colors">
                        <div className="mb-8 flex items-center gap-2">
                            <ShieldCheck className="text-emerald-500" size={32} />
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <h4 className="text-xl font-medium text-white mb-4 tracking-tight">STEM Certified</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">Our curriculum is recognized by international standards for robotics education.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;

