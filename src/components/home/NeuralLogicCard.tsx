import { motion } from "framer-motion";
import { Cpu, Zap, Play, Box } from "lucide-react";

const NeuralLogicCard = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="lg:col-span-4 h-[550px] bg-[#050505] rounded-[3.5rem] relative overflow-hidden group border border-white/5 shadow-2xl"
    >
      {/* 1. LAYER: THE VIDEO/GIF BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-700">
        {/* Hna hat l-video dyalk - ana dert placeholder video dyal tech/blocks */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
        >
          <source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4" />
          {/* Ibtidaiyan, had l-gradient kay-khdem ila malkitich video */}
          <div className="w-full h-full bg-linear-to-br from-violet-900/20 via-black to-blue-900/20" />
        </video>
        {/* Overlay bach l-video may-tlaqash m3a l-ktiba */}
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-[#050505]/40" />
      </div>

      {/* 2. LAYER: FLOATING INTERACTIVE BLOCKS (CSS-BASED) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Block A */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              <Box size={16} className="text-white" />
            </div>
            <div className="h-2 w-16 bg-white/20 rounded-full" />
          </div>
        </motion.div>

        {/* Block B - Connected vibe */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 right-10 p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-12 bg-violet-400/40 rounded-full" />
            <div className="w-8 h-8 bg-violet-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <Zap size={16} className="text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. LAYER: TEXT CONTENT */}
      <div className="relative z-20 h-full p-10 flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <Cpu className="text-white" size={24} />
          </div>
          <div className="h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
        </div>

        <div className="space-y-4">
          <h3 className="text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
            Neural <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-violet-400">Logic</span>
          </h3>
          <p className="text-slate-400 font-bold text-sm max-w-[240px]">
            Drag and drop logic nodes to automate your robotic missions.
          </p>
        </div>

        {/* 4. THE ACTION BUTTON (WITH GIF/VIDEO VIBE) */}
        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full group/btn relative overflow-hidden h-16 bg-white rounded-2xl flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
          >
            {/* Inner Glow/Video Background for Button */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />

            <span className="relative z-10 text-slate-950 group-hover:text-white font-black uppercase tracking-widest flex items-center gap-3">
              <Play fill="currentColor" size={18} /> Deploy Logic
            </span>

            {/* Scanning Effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 bottom-0 w-20 bg-white/20 skew-x-30 z-20"
            />
          </motion.button>
        </div>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rounded-[3.5rem] transition-colors duration-700" />
    </motion.div>
  );
};

export default NeuralLogicCard;