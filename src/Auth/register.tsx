import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Zap, ChevronLeft, User, GraduationCap,
  School, ArrowRight, Eye, EyeOff, CheckCircle2, XCircle
} from "lucide-react";

const Register = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string | null>(null);
  const [showPass, setShowPass] = useState(false);

  // State l-jam3 l-data
  const [formData, setFormData] = useState({
    fullName: "", phone: "", birthDate: "", city: "",
    email: "", password: "", confirmPassword: "",
    // Specs kat-3mmer 3la hssab l-role
    specs: {}
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  // Logic dyal Password Strength
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { label: "Empty", color: "bg-slate-800", width: "0%" };
    if (pass.length < 6) return { label: "Weak", color: "bg-red-500", width: "30%" };
    if (pass.length < 10) return { label: "Medium", color: "bg-yellow-500", width: "60%" };
    return { label: "Strong", color: "bg-green-500", width: "100%" };
  };

  const strength = getPasswordStrength(formData.password);

  const roles = [
    { id: 'student', label: 'Student', icon: <User size={20} />, desc: 'Access Learning' },
    { id: 'teacher', label: 'Teacher', icon: <GraduationCap size={20} />, desc: 'Manage Classes' },
    { id: 'school', label: 'School', icon: <School size={20} />, desc: 'Admin Control' },
  ];

  return (
    <div className="h-screen w-full bg-slate-950 text-white overflow-hidden flex items-center justify-center font-sans">
      <div className="flex h-full w-full">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 lg:px-24 bg-slate-950 z-10 relative">

          {/* TOP STEPPER - Clickable to go back */}
          <div className="absolute top-10 left-8 lg:left-24 right-8 lg:right-24 flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                onClick={() => s < step && setStep(s)}
                className={`h-1 flex-1 rounded-full cursor-pointer transition-all duration-700 
                ${step >= s ? 'bg-orange-500 shadow-[0_0_15px_#FF6B00]' : 'bg-white/5'}`}
              />
            ))}
          </div>

          <div className="max-w-md w-full mx-auto lg:mx-0">
            <AnimatePresence mode="wait">

              {/* STEP 1: IDENTITY */}
              {step === 1 && (
                <motion.div key="st1" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>

                  <h1 className="text-6xl font-black mt-12 uppercase tracking-tighter leading-[0.85] mb-6">
                    Select <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-white">
                      Protocol.
                    </span>
                  </h1>
                  <div className="space-y-3">
                    {roles.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => { setRole(r.id); nextStep(); }}
                        className="w-full flex items-center cursor-pointer justify-between bg-white/3 border border-white/10 rounded-2xl p-6 hover:bg-orange-600/10 hover:border-orange-500 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/5 rounded-xl group-hover:bg-orange-600 transition-colors">{r.icon}</div>
                          <div className="text-left"><p className="font-black text-sm uppercase tracking-widest">{r.label}</p></div>
                        </div>
                        <ArrowRight size={18} className="text-slate-700 group-hover:text-orange-500" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* STEP 2: CORE PROFILE */}
              {step === 2 && (
                <motion.div key="st2" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
                  <button onClick={prevStep} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-500 mb-6">
                    <ChevronLeft size={14} /> Back
                  </button>
                  <h1 className="text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-10">
                    Core <br /> <span className="text-orange-500">Profile.</span>
                  </h1>
                  <div className="space-y-4">
                    <input className="login-input" placeholder="FULL NAME" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} value={formData.fullName} />
                    <input className="login-input" placeholder="PHONE NUMBER" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} value={formData.phone} />
                    <button onClick={nextStep} className="action-btn">Continue</button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: TECHNICAL SPECS (Role Dependent) */}
              {step === 3 && (
                <motion.div key="st3" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }}>
                  <button onClick={prevStep} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-orange-500 mb-6">
                    <ChevronLeft size={14} /> Back
                  </button>
                  <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-10">
                    Technical <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Specs.</span>
                  </h1>
                  <div className="space-y-4">
                    {role === 'student' ? (
                      <select className="login-input"><option>Choose Grade</option><option>1st BAC</option><option>2nd BAC</option></select>
                    ) : role === 'teacher' ? (
                      <input className="login-input" placeholder="SUBJECT SPECIALTY" />
                    ) : (
                      <input className="login-input" placeholder="MINISTRY LICENSE" />
                    )}
                    <button onClick={nextStep} className="action-btn">Analyze Data</button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: SECURITY GATEWAY */}
              {step === 4 && (
                <motion.div key="st4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                  <h1 className="text-5xl mt-10 font-black uppercase tracking-tighter leading-none mb-8 text-center">Security <br /> <span className="text-orange-500">Node.</span></h1>
                  <div className="space-y-4">
                    <input className="login-input" placeholder="EMAIL ADDRESS" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

                    {/* Password Field */}
                    <div className="relative">
                      <input className="login-input" placeholder="PASSWORD" type={showPass ? "text" : "password"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                      <button onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-orange-500">
                        {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    {/* Strength Bar */}
                    <div className="px-2 space-y-1">
                      <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-widest text-slate-500">
                        <span>Security Strength</span>
                        <span className={strength.label !== "Empty" ? "text-orange-500" : ""}>{strength.label}</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div animate={{ width: strength.width }} className={`h-full ${strength.color} transition-all duration-500`} />
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                      <input className={`login-input ${formData.confirmPassword && formData.password !== formData.confirmPassword ? 'border-red-500/50' : ''}`}
                        placeholder="CONFIRM PASSWORD" type="password"
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                      {formData.confirmPassword && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          {formData.password === formData.confirmPassword ? <CheckCircle2 size={16} className="text-green-500" /> : <XCircle size={16} className="text-red-500" />}
                        </div>
                      )}
                    </div>

                    <button className="action-btn py-6 flex items-center justify-center gap-3 mt-4" disabled={formData.password !== formData.confirmPassword || !formData.password}>
                      <Zap size={18} /> Deploy Identity
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            {/* LOGIN REDIRECT */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Already part of the network?</p>
              <a href="/login" className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Return to Base (Login)
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:block w-1/2 relative overflow-hidden border-l border-white/5">
          <img src="/assets/images/robot.jpg" className="w-full h-full object-cover brightness-50" alt="Cyber" />
          <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 p-8 backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl max-w-sm">
            <div className="flex items-center gap-2 mb-2 font-black text-orange-500 uppercase tracking-widest text-[10px] italic">
              <ShieldCheck size={14} /> Encrypted Session
            </div>
            <p className="text-sm text-slate-300 font-medium leading-relaxed">Ensure your password is complex. Monia protocols require high-entropy keys for node deployment.</p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .login-input {
          width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1.25rem; padding: 1.1rem 1.5rem; outline: none; font-weight: 700; font-size: 0.8rem;
          text-transform: uppercase; transition: all 0.3s;
        }
        .login-input:focus { border-color: #FF6B00; background: rgba(255,107,0,0.02); }
        .action-btn {
          width: 100%; padding: 1.2rem; background: #EA580C; color: white; border-radius: 1.25rem;
          font-weight: 900; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em;
          box-shadow: 0 10px 30px -10px rgba(234,88,12,0.4); transition: all 0.3s;
        }
        .action-btn:hover:not(:disabled) { background: #FF6B00; transform: translateY(-2px); }
        .action-btn:disabled { opacity: 0.5; cursor: not-allowed; filter: grayscale(1); }
      `}} />
    </div>
  );
};

export default Register;