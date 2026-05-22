import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, ArrowRight } from 'lucide-react';

const Hero = ({ onOpenDemoModal, onDownloadProspectus }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden gradient-bg text-white">
      {/* Background graphic overlays */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-green-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue-950/80 border border-brand-blue-800 text-brand-green-400 font-semibold text-xs uppercase tracking-wider mb-6 w-fit"
            >
              <Sparkles className="h-4 w-4" />
              <span>Admissions Open for 2026-27</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none mb-6"
            >
              Nurturing Minds from{' '}
              <span className="bg-gradient-to-r from-brand-blue-200 via-brand-slate-100 to-brand-green-400 bg-clip-text text-transparent">
                School to Success.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-brand-slate-300 max-w-xl mb-10 leading-relaxed font-sans"
            >
              Comprehensive coaching for Classes 7th–12th Boards, IIT-JEE, and NEET under one expert faculty. Establish core foundations and scale academic heights.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <a 
                href="#choose-goal"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue-600 to-brand-green-500 hover:from-brand-blue-700 hover:to-brand-green-600 text-white font-bold text-center shadow-lg hover:shadow-brand-green-500/10 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Batches</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button 
                onClick={onDownloadProspectus}
                className="px-8 py-4 rounded-xl border border-brand-slate-700 hover:border-brand-green-500 bg-brand-slate-900/40 hover:bg-brand-slate-800/40 text-brand-slate-200 hover:text-white font-semibold text-center transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Download className="h-5 w-5 text-brand-green-400" />
                <span>Download Prospectus</span>
              </button>
            </motion.div>

            {/* Quick stats banner underneath */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 mt-16 pt-8 border-t border-brand-slate-800 max-w-lg"
            >
              <div>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-green-400 block">15k+</span>
                <span className="text-xs text-brand-slate-400 block mt-0.5">Students Guided</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-blue-300 block">98.2%</span>
                <span className="text-xs text-brand-slate-400 block mt-0.5">Board Pass Rate</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-brand-green-400 block">1,200+</span>
                <span className="text-xs text-brand-slate-400 block mt-0.5">JEE/NEET Selections</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Illustration Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[450px] lg:max-w-none aspect-square bg-gradient-to-tr from-brand-blue-900/50 to-brand-green-950/20 p-2.5 rounded-3xl border border-brand-slate-800 shadow-2xl overflow-hidden group"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-500 to-brand-green-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden w-full h-full bg-brand-slate-950 border border-brand-slate-800/80">
                <img 
                  src="/hero_education.png" 
                  alt="Modern Digital Classroom Illustration" 
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating micro-cards for detail */}
              <div className="absolute -bottom-4 -left-4 dark-glass-card rounded-2xl p-4 shadow-2xl flex items-center gap-3 border border-brand-slate-700/60 hidden sm:flex">
                <div className="h-10 w-10 rounded-xl bg-brand-green-500/20 flex items-center justify-center text-brand-green-400">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs text-brand-slate-400 block font-medium">Hybrid Learning</span>
                  <span className="text-sm font-bold text-white block">Offline + Online Support</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
