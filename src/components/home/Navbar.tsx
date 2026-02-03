import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
                <Link to="/" className="text-3xl font-black tracking-tighter flex items-center gap-1 group">
                    <span className="text-monia-blue transition-colors duration-300">MON</span>
                    <span className="text-monia-orange">I</span>
                    <span className="text-monia-blue transition-colors duration-300">A</span>
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-monia-orange ml-1"
                    />
                </Link>

                <div className="hidden md:flex items-center space-x-10">
                    <Link to="/programmes" className="text-sm font-bold uppercase tracking-widest hover:text-monia-orange transition-colors">Programmes</Link>
                    <Link to="/communaute" className="text-sm font-bold uppercase tracking-widest hover:text-monia-orange transition-colors">Communauté</Link>
                    <Link to="/login" className="text-sm font-bold uppercase tracking-widest hover:text-monia-blue transition-colors">Connexion</Link>
                    <Link to="/signup" className="btn-orange-gradient">
                        S'inscrire
                    </Link>
                </div>

                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            <Link to="/programmes" className="text-lg font-bold">Programmes</Link>
                            <Link to="/communaute" className="text-lg font-bold">Communauté</Link>
                            <Link to="/login" className="text-lg font-bold">Connexion</Link>
                            <Link to="/signup" className="btn-orange-gradient text-center">S'inscrire</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
