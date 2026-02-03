import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface BentoCardProps {
    title: string;
    desc: string;
    icon: LucideIcon;
    className?: string;
    children?: ReactNode;
    delay?: number;
}

const BentoCard = ({ title, desc, icon: Icon, className, children, delay = 0 }: BentoCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`relative overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] transition-all duration-700 group ${className}`}
    >
        <div className="relative z-10 flex flex-col h-full">
            {title && (
                <>
                    <div className="mb-8 w-14 h-14 rounded-[1.25rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-monia-blue group-hover:scale-110 group-hover:bg-monia-blue group-hover:text-white transition-all duration-500 shadow-sm">
                        <Icon size={28} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight leading-none">{title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">{desc}</p>
                </>
            )}

            <div className={`mt-auto ${title ? 'pt-10' : ''} flex items-center justify-center h-full`}>
                {children}
            </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-linear-to-br from-monia-blue/5 to-monia-orange/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
);

export default BentoCard;
