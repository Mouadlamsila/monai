import { motion, useScroll, useTransform } from "framer-motion";

const RetroGrid = () => {
    const { scrollY } = useScroll();

    // Parallax layers
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
    const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Base Grid Layer */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-size-[80px_80px] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

            {/* Floating Robotics Image Layer 1 */}
            <motion.div
                style={{ y: y1, rotate: 10, scale }}
                className="absolute -top-20 -right-20 w-[800px] h-[800px] opacity-[0.07] grayscale contrast-150"
            >
                <img
                    src="/assets/images/hero_robotics_layer_1770116751240.png"
                    alt="Robotics Layer"
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Floating Robotics Image Layer 2 */}
            <motion.div
                style={{ y: y2, rotate: -15, scale: 0.8 }}
                className="absolute bottom-40 -left-20 w-[600px] h-[600px] opacity-[0.05] grayscale contrast-125"
            >
                <img
                    src="/assets/images/hero_robotics_layer_1770116751240.png"
                    alt="Robotics Layer"
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Cinematic Fog & Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-monia-blue/20 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-monia-orange/15 rounded-full blur-[120px] animate-pulse delay-1000" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-slate-950" />
        </div>
    );
};

export default RetroGrid;
