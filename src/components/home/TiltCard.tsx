import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface TiltCardProps {
    title: string;
    subtitle: string;
    image: string;
    color: string;
    delay: number;
    landed?: boolean;
}

const TiltCard = ({ title, subtitle, image, color, delay, landed = true }: TiltCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            className="group relative h-[500px] w-full rounded-[4rem] bg-slate-900 border border-white/5 overflow-hidden flex flex-col justify-end p-12 hover:border-monia-orange/50 transition-all duration-700 shadow-2xl"
        >
            {/* Background Image with Layered Transition */}
            <div
                className={`absolute inset-0 z-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-2000 grayscale-[0.8] group-hover:grayscale-0 ${landed ? 'opacity-40 group-hover:opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Deep Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Dynamic Glow Layer */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-20 opacity-0 transition duration-1000 group-hover:opacity-60"
                style={{
                    background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 80%)`,
                }}
            />

            <div className="relative z-30">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.2 }}
                    className="mb-4 w-12 h-1.5 bg-monia-orange rounded-full"
                />
                <h3 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase leading-none">{title}</h3>
                <p className="text-white/40 text-sm font-medium leading-relaxed max-w-[240px] group-hover:text-white transition-colors duration-500">{subtitle}</p>
                <div className="mt-8 flex items-center text-monia-orange text-[10px] font-black uppercase tracking-[0.4em] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    Explorer le portail <ChevronRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
            </div>
        </motion.div>
    );
};

export default TiltCard;
