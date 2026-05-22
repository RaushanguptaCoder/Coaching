import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ShieldAlert, Cpu, Activity, ArrowUpRight } from 'lucide-react';

const ChooseGoal = ({ onSelectGoal }) => {
  const goals = [
    {
      id: "foundation",
      title: "Foundation Program",
      target: "Classes 7th, 8th, 9th & 10th",
      focus: "Strong basics, NTSE, Olympiads, and School Exams.",
      cta: "View Foundation Batches",
      classVal: "7th-10th",
      goalVal: "Foundation / Olympiad",
      icon: BookOpen,
      themeColor: "text-blue-600 border-blue-100 hover:border-blue-500 hover:shadow-blue-500/10",
      bgColor: "bg-blue-50/50",
      accentBg: "bg-blue-500",
      lightAccent: "bg-blue-50"
    },
    {
      id: "boards",
      title: "Board Excellence",
      target: "Classes 11th & 12th",
      focus: "Complete syllabus coverage for CBSE/State Boards.",
      cta: "View Board Programs",
      classVal: "11th",
      goalVal: "CBSE / State Boards",
      icon: Award,
      themeColor: "text-purple-600 border-purple-100 hover:border-purple-500 hover:shadow-purple-500/10",
      bgColor: "bg-purple-50/50",
      accentBg: "bg-purple-500",
      lightAccent: "bg-purple-50"
    },
    {
      id: "jee",
      title: "Engineering Wing",
      target: "JEE Main + Advanced Aspirants",
      focus: "Rigorous practice, Mock Tests, and Rank Boosting.",
      cta: "Explore JEE Prep",
      classVal: "12th-Pass",
      goalVal: "IIT-JEE",
      icon: Cpu,
      themeColor: "text-emerald-600 border-emerald-100 hover:border-emerald-500 hover:shadow-emerald-500/10",
      bgColor: "bg-emerald-50/50",
      accentBg: "bg-emerald-500",
      lightAccent: "bg-emerald-50"
    },
    {
      id: "neet",
      title: "Medical Wing",
      target: "NEET-UG Aspirants",
      focus: "Deep-dive Biology, Conceptual Physics & Chemistry.",
      cta: "Explore NEET Prep",
      classVal: "12th-Pass",
      goalVal: "NEET-UG",
      icon: Activity,
      themeColor: "text-teal-600 border-teal-100 hover:border-teal-500 hover:shadow-teal-500/10",
      bgColor: "bg-teal-50/50",
      accentBg: "bg-teal-500",
      lightAccent: "bg-teal-50"
    }
  ];

  return (
    <section id="choose-goal" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-blue-600 uppercase tracking-widest bg-brand-blue-50 px-3 py-1.5 rounded-full inline-block mb-3">
            Target Batches 2026-27
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-slate-900 tracking-tight mb-4">
            Choose Your Goal & Start Learning
          </h2>
          <p className="text-brand-slate-600 font-sans text-sm sm:text-base">
            Select your academic level below. Our tailored programs are designed to guide you step-by-step from foundational school concepts to cracking India's toughest competitive exams.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 group ${goal.themeColor}`}
              >
                {/* Icon & Accent */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3.5 rounded-2xl ${goal.lightAccent} transition-colors group-hover:scale-105 duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold text-brand-slate-400 bg-brand-slate-50 px-2 py-1 rounded-md border border-brand-slate-100">
                    Active
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="font-display font-extrabold text-lg text-brand-slate-900 mb-1.5 group-hover:text-brand-blue-900 transition-colors">
                    {goal.title}
                  </h3>
                  <span className="font-sans font-semibold text-xs text-brand-slate-500 uppercase tracking-wide block mb-4">
                    {goal.target}
                  </span>
                  <p className="font-sans text-brand-slate-600 text-sm leading-relaxed mb-6">
                    {goal.focus}
                  </p>
                </div>

                {/* Action button */}
                <button
                  onClick={() => onSelectGoal(goal.classVal, goal.goalVal)}
                  className={`w-full py-3 rounded-xl border text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 hover:text-white hover:bg-gradient-to-r hover:from-brand-blue-900 hover:to-brand-blue-800`}
                  style={{ borderColor: 'currentColor' }}
                >
                  <span>{goal.cta}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ChooseGoal;
