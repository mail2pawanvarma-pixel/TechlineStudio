
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, BrainCircuit, Users, Calendar, ArrowRight, MousePointer2 } from 'lucide-react';
import { POSTER_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1d] pt-20 pb-28 md:pt-32 md:pb-40">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Next Gen Tech Academy</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
              Future-Proof Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-400">Education with AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium mb-12 max-w-xl">
              Become a Smart Student. Master <span className="text-white border-b-2 border-blue-500">Cybersecurity</span> & <span className="text-white border-b-2 border-red-500">Artificial Intelligence</span> in just 30 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Link
                to="/contact"
                className="group relative bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:-translate-y-1"
              >
                Enroll Your Child <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-5 rounded-2xl font-bold text-lg flex items-center justify-center transition-all backdrop-blur-sm"
              >
                View Syllabus
              </Link>
            </div>

            <div className="flex items-center space-x-4 text-slate-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-[#0a0f1d]" alt="student" />
                ))}
                <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-[#0a0f1d] flex items-center justify-center text-[10px] text-white font-bold">+20</div>
              </div>
              <p className="text-sm font-bold uppercase tracking-wider">Students Joined Recently</p>
            </div>
          </div>

          {/* Right Visuals */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-gradient-to-br from-blue-500/10 to-transparent p-8 rounded-[40px] border border-white/10 backdrop-blur-xl">
               <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
                className="rounded-[30px] shadow-2xl grayscale-[30%] hover:grayscale-0 transition-all duration-700" 
                alt="Cybertech" 
              />
              {/* Floating Badge */}
              <div className="absolute -top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 animate-bounce delay-1000">
                <ShieldCheck className="h-10 w-10 text-green-500 mx-auto mb-2" />
                <p className="text-gray-900 font-black text-center text-sm leading-tight">Fraud <br/>Protection</p>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-red-600 p-6 rounded-3xl shadow-2xl text-white">
                <BrainCircuit className="h-10 w-10 mx-auto mb-2" />
                <p className="font-black text-center text-sm leading-tight">AI Skills <br/>2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Calendar className="h-8 w-8 text-blue-500 mb-4" />
            <h4 className="text-white font-black text-lg mb-1">Starts</h4>
            <p className="text-slate-400 text-sm">{POSTER_DATA.startDate}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
            <Users className="h-8 w-8 text-red-500 mb-4" />
            <h4 className="text-white font-black text-lg mb-1">Eligibility</h4>
            <p className="text-slate-400 text-sm">Class 6th to College</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
            <MousePointer2 className="h-8 w-8 text-green-500 mb-4" />
            <h4 className="text-white font-black text-lg mb-1">Prerequisite</h4>
            <p className="text-slate-400 text-sm">No Technical Background</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
            <ShieldCheck className="h-8 w-8 text-indigo-500 mb-4" />
            <h4 className="text-white font-black text-lg mb-1">Location</h4>
            <p className="text-slate-400 text-sm">Ambikapur HQ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
