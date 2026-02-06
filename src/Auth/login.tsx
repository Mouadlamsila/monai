import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/home/Navbar";

const Login = () => {
  return (
    <div className="h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center justify-center">
      <Navbar />
      <div className="flex h-full w-full">

        {/* Left Side: The Form */}
        <div className="w-full lg:w-1/2  mt-12 flex flex-col justify-center px-8 lg:px-24 bg-slate-950 z-10">
          <div className="max-w-md w-full mx-auto lg:mx-0">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>

              <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                Back to <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-monia-blue to-white">Base.</span>
              </h1>

              <form className="space-y-5">
                <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-monia-blue transition-all font-bold" placeholder="IDENTITY / EMAIL" />
                <input type="password" className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 outline-none focus:border-monia-blue transition-all font-bold" placeholder="SECRET KEY" />

                <button className="w-full py-6 bg-monia-blue text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_20px_40px_-10px_rgba(59,130,246,0.3)]">
                  Unlock System
                </button>
              </form>

              <div className="mt-12 flex items-center gap-6">
                <Link to="/signup" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Register New Profile</Link>
                <div className="w-1 h-1 bg-slate-800 rounded-full" />
                <Link to="#" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Reset Access</Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side: High-Energy Action Photo */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden">
          {/* صورة فيها روبوت كايتحرك أو ضواو مجهدين */}
          <img
            src="/assets/images/robotique.jpg"
            className="w-full h-full object-cover object-center"
            alt="Action Tech"
          />
          {/* Vibrant Gradients */}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-monia-blue/10 mix-blend-color" />

          {/* Floating High-Energy Badge */}

        </div>

      </div>
    </div>
  );
};


export default Login;