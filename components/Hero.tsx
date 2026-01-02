
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BrainCircuit, Users, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { POSTER_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#020617] pt-32 pb-40 md:pt-44 md:pb-60 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-blue-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 backdrop-blur-md">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Batch Starts: 18 Jan 2026</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
            MASTER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600">AI & CYBER</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium mb-16 max-w-3xl mx-auto">
            Future-proof your career. Hands-on practical training for students in Ambikapur. No coding background required.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
            <Link
              to="/contact"
              className="group bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-xl flex items-center shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:-translate-y-2 hover:bg-blue-500 transition-all"
            >
              Enroll Now <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <a 
              href={`tel:${POSTER_DATA.contact}`}
              className="px-12 py-6 rounded-2xl font-black text-xl border-2 border-white/10 hover:bg-white/5 transition-all"
            >
              Contact Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Calendar, label: "Sunday", val: "Jan 18", color: "text-blue-500" },
              { icon: Users, label: "Students", val: "Class 6+", color: "text-red-500" },
              { icon: BrainCircuit, label: "Training", val: "Practical", color: "text-green-500" },
              { icon: ShieldCheck, label: "Location", val: "Ambikapur", color: "text-indigo-500" }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[40px] backdrop-blur-2xl">
                <item.icon className={`h-8 w-8 ${item.color} mb-4 mx-auto`} />
                <p className="text-white font-black text-xl mb-1">{item.val}</p>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
