import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Medal, Percent, MapPin, Zap } from 'lucide-react';

const HallOfFame = () => {
  const [activeTab, setActiveTab] = useState('board'); // 'board' or 'competitive'

  const boardToppers = [
    {
      name: "Tushar Singhal",
      score: "99.4%",
      exam: "CBSE Class 12th",
      year: "2025",
      school: "Bal Bharti Public School",
      rankBadge: "State Rank 3",
      avatar: "TS",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Meera Nair",
      score: "98.8%",
      exam: "CBSE Class 10th",
      year: "2025",
      school: "Delhi Public School",
      rankBadge: "District Topper",
      avatar: "MN",
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "Rohan Gupta",
      score: "98.2%",
      exam: "ICSE Class 12th",
      year: "2025",
      school: "St. Xavier's School",
      rankBadge: "School Rank 1",
      avatar: "RG",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Ananya Patel",
      score: "97.8%",
      exam: "CBSE Class 12th",
      year: "2025",
      school: "DAV Public School",
      rankBadge: "Top 0.1% Merit",
      avatar: "AP",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const competitiveQualifiers = [
    {
      name: "Aarav Sharma",
      score: "AIR 45",
      exam: "JEE Advanced",
      year: "2025",
      school: "Target Integrated Batch",
      rankBadge: "IIT Bombay CSE",
      avatar: "AS",
      color: "from-brand-blue-700 to-brand-blue-900"
    },
    {
      name: "Drishya Nair",
      score: "AIR 72",
      exam: "NEET-UG",
      year: "2025",
      school: "Two-Year Classroom Batch",
      rankBadge: "AIIMS New Delhi",
      avatar: "DN",
      color: "from-emerald-600 to-teal-800"
    },
    {
      name: "Vatsal Joshi",
      score: "AIR 104",
      exam: "JEE Advanced",
      year: "2025",
      school: "Dropper Ranker Batch",
      rankBadge: "IIT Delhi EE",
      avatar: "VJ",
      color: "from-indigo-600 to-violet-850"
    },
    {
      name: "Riya Sen",
      score: "AIR 158",
      exam: "NEET-UG",
      year: "2025",
      school: "Target Medical Wing",
      rankBadge: "MAMC New Delhi",
      avatar: "RS",
      color: "from-pink-600 to-rose-800"
    }
  ];

  const currentStudents = activeTab === 'board' ? boardToppers : competitiveQualifiers;

  return (
    <section id="results" className="py-24 bg-brand-slate-50 relative overflow-hidden border-t border-b border-brand-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-blue-600 uppercase tracking-widest bg-brand-blue-50 px-3 py-1.5 rounded-full inline-block mb-3">
            Legacy of Excellence
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-slate-900 tracking-tight mb-4">
            Hall of Fame
          </h2>
          <p className="text-brand-slate-600 text-sm sm:text-base font-sans">
            Our results speak louder than words. Year after year, Manoj Private Tuitions students secure top ranks in state boards and national competitive entrance examinations.
          </p>
        </div>

        {/* Tab Toggle Controls */}
        <div className="flex justify-center mb-16">
          <div className="bg-brand-slate-100 p-1.5 rounded-2xl flex items-center border border-brand-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('board')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'board' ? 'bg-white text-brand-blue-900 shadow-md' : 'text-brand-slate-500 hover:text-brand-slate-900'}`}
            >
              <Award className="h-4 w-4" />
              <span>Board Toppers (95%+)</span>
            </button>
            <button
              onClick={() => setActiveTab('competitive')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'competitive' ? 'bg-white text-brand-blue-900 shadow-md' : 'text-brand-slate-500 hover:text-brand-slate-900'}`}
            >
              <Trophy className="h-4 w-4" />
              <span>JEE/NEET Qualifiers</span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {currentStudents.map((student, index) => (
              <motion.div
                key={student.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-brand-slate-50 border border-brand-slate-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:border-brand-green-500/30 hover:bg-white hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Decorative background flash */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green-500/5 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
                
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-slate-400 bg-brand-slate-200/50 px-2.5 py-1 rounded-md border border-brand-slate-250">
                      {student.year}
                    </span>
                    <div className="h-10 w-10 rounded-full bg-brand-green-500/10 flex items-center justify-center text-brand-green-600">
                      <Medal className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Student Initials / Visual element */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${student.color} text-white font-display font-extrabold flex items-center justify-center text-sm shadow-md`}>
                      {student.avatar}
                    </div>
                    <div className="text-left">
                      <h3 className="font-display font-extrabold text-brand-slate-900 group-hover:text-brand-blue-900 transition-colors">
                        {student.name}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-brand-slate-400 font-semibold mt-0.5">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate max-w-[130px]">{student.school}</span>
                      </div>
                    </div>
                  </div>

                  {/* Main score details */}
                  <div className="py-4 border-t border-b border-brand-slate-200/60 my-6 bg-brand-slate-100/50 rounded-xl px-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-brand-slate-400 uppercase tracking-widest font-bold block">Result</span>
                      <span className="font-display font-extrabold text-xl text-brand-slate-900 block group-hover:text-brand-green-600 transition-colors">
                        {student.score}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-brand-slate-400 uppercase tracking-widest font-bold block">Exam</span>
                      <span className="font-sans font-bold text-xs text-brand-blue-900 bg-brand-blue-50 border border-brand-blue-100 px-2 py-0.5 rounded-md mt-0.5 inline-block">
                        {student.exam}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rank / College placement allocation badge */}
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-slate-700 bg-white border border-brand-slate-200/80 px-3 py-2 rounded-xl group-hover:border-brand-green-500/20 group-hover:shadow-sm transition-all">
                  <Zap className="h-3.5 w-3.5 text-brand-green-500" />
                  <span className="truncate">{student.rankBadge}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default HallOfFame;
