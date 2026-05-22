import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, Users } from 'lucide-react';

const Faculty = () => {
  const teachers = [
    {
      name: "Dr. Sameer Verma",
      role: "Head of Physics",
      credentials: "B.Tech, IIT Roorkee | Ph.D., IISc",
      experience: "15+ Years Experience",
      avatar: "/teacher_male.png",
      tag: "JEE Specialist",
      rating: "4.9/5",
      badgeColor: "bg-emerald-500"
    },
    {
      name: "Prof. Ananya Roy",
      role: "Head of Mathematics",
      credentials: "M.Sc., IIT Kharagpur",
      experience: "12+ Years Experience",
      avatar: "/teacher_female.png",
      tag: "Olympiad Coach",
      rating: "4.9/5",
      badgeColor: "bg-blue-500"
    },
    {
      name: "Dr. Rajeev Sen",
      role: "Head of Chemistry",
      credentials: "Ph.D., IIT Bombay | Ex-HOD Kota",
      experience: "14+ Years Experience",
      avatar: "/teacher_male.png", // Reuse or style
      tag: "NEET Expert",
      rating: "4.8/5",
      badgeColor: "bg-purple-500"
    },
    {
      name: "Prof. Priya Sharma",
      role: "Senior Biology Faculty",
      credentials: "M.S., AIIMS Delhi | Olympiad Mentor",
      experience: "10+ Years Experience",
      avatar: "/teacher_female.png", // Reuse or style
      tag: "AIIMS Top Ranker",
      rating: "4.9/5",
      badgeColor: "bg-teal-500"
    }
  ];

  return (
    <section id="faculty" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-green-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold text-brand-blue-600 uppercase tracking-widest bg-brand-blue-50 px-3 py-1.5 rounded-full inline-block mb-3">
              Elite Mentorship
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-slate-900 tracking-tight mb-2">
              Learn from India's Finest Educators
            </h2>
            <p className="text-brand-slate-600 text-sm sm:text-base font-sans">
              Our core faculty is composed of former IITians, AIIMS alumni, and veteran teachers with a proven track record of securing Top 100 ranks.
            </p>
          </div>
          <div className="flex items-center gap-2 text-brand-slate-600 font-semibold bg-white p-3 rounded-xl border border-brand-slate-200/80 shadow-sm w-fit shrink-0">
            <Users className="h-5 w-5 text-brand-green-500" />
            <span className="text-sm">Ratio: 1:20 Student-Teacher</span>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-slate-50/40 hover:bg-white rounded-2xl border border-brand-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/5] bg-brand-slate-100 overflow-hidden">
                <img 
                  src={teacher.avatar} 
                  alt={teacher.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                />
                {/* Overlay Badge */}
                <div className={`absolute top-4 left-4 text-[10px] font-bold text-white uppercase tracking-widest py-1.5 px-3 rounded-lg shadow-md ${teacher.badgeColor}`}>
                  {teacher.tag}
                </div>
                {/* Rating Badge */}
                <div className="absolute bottom-4 right-4 bg-brand-slate-950/80 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-md border border-brand-slate-800">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span>{teacher.rating}</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-slate-900 group-hover:text-brand-blue-600 transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="font-sans font-semibold text-xs text-brand-green-600 uppercase tracking-wider mb-2">
                    {teacher.role}
                  </p>
                  <p className="font-sans text-brand-slate-500 text-xs font-medium leading-relaxed mb-4">
                    {teacher.credentials}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-brand-slate-100 flex items-center justify-between text-brand-slate-400 text-xs">
                  <span className="font-medium">{teacher.experience}</span>
                  <ShieldCheck className="h-4 w-4 text-brand-blue-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faculty;
