import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Quote, Sparkles, Star } from 'lucide-react';

const Founder = () => {
  const highlights = [
    {
      icon: Award,
      title: "25+ Years Mentorship",
      desc: "Personally mentored over 10,000+ students for IIT-JEE, NEET, and Boards."
    },
    {
      icon: Star,
      title: "Proprietary Pedagogy",
      desc: "Developed unique problem-solving techniques and targeted assessment modules."
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-slate-50 relative overflow-hidden border-b border-brand-slate-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-green-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-left mb-16 max-w-3xl">
          <span className="text-xs font-bold text-brand-blue-600 uppercase tracking-widest bg-brand-blue-50 px-3 py-1.5 rounded-full inline-block mb-3">
            Founder's Profile
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-slate-900 tracking-tight mb-4">
            The Vision Behind Manoj Private Tuitions
          </h2>
          <p className="text-brand-slate-650 text-sm sm:text-base font-sans leading-relaxed">
            Founded in 2000, Professor Manoj’s coaching institute stands as a beacon of academic excellence and trusted mentorship for students from Class 7 to 12, NEET, IIT, and JEE. Built on the belief that true education nurtures conceptual mastery rather than rote learning, our mission goes beyond standard teaching—we build foundational clarity and critical thinking.
            With 26 years of unwavering commitment, Professor Manoj combines deep passion with proven expertise to turn student potential into extraordinary success. This platform is a grateful tribute to the thousands of families who have trusted his vision, and a continuation of his mission to inspire the leaders of tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image & Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-3xl bg-white border border-brand-slate-200 shadow-xl overflow-hidden group p-3"
            >
              {/* Outer soft gradient border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-500/10 to-brand-green-500/10 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl" />

              <div className="relative rounded-2xl overflow-hidden w-full h-full bg-brand-slate-100 border border-brand-slate-100">
                <img
                  src="/founder.png"
                  alt="Prof. Manoj Gupta"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-103"
                />
              </div>

              {/* Founder Tag */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-slate-950/90 backdrop-blur-md text-white p-4 rounded-2xl border border-brand-slate-800 shadow-2xl flex flex-col items-center text-center">
                <h4 className="font-display font-bold text-base tracking-tight text-brand-green-400">
                  Prof. Manoj
                </h4>
                <p className="text-xs text-brand-slate-300 font-sans mt-0.5 font-semibold">
                  Founder & Managing Director
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Founder Message & Strengths */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Profile Message */}
              <div>
                <h3 className="font-display font-extrabold text-2xl text-brand-slate-900 tracking-tight mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-green-500 shrink-0" />
                  <span>Personal Message from the Founder</span>
                </h3>

                {/* Quote block */}
                <div className="relative bg-white border border-brand-slate-200/80 rounded-2xl p-6 shadow-sm mb-6">
                  <Quote className="absolute -top-3 -left-3 h-8 w-8 text-brand-green-500/10 rotate-180 pointer-events-none" />
                  <p className="font-sans italic text-sm sm:text-base text-brand-slate-700 leading-relaxed relative z-10">
                    "At Manoj Private Tuitions, we believe that education is not about filling a bucket, but lighting a fire. We rejected the commercialized 'assembly line' coaching model. Here, every student is recognized as an individual with unique potentials and challenges. Our target is to build robust core foundations, cultivate logical problem-solving, and hand-hold each aspirant to their dream college."
                  </p>
                </div>

                <p className="text-brand-slate-600 text-sm leading-relaxed font-sans mb-8">
                  Under the direct academic guidance of Prof. Manoj Gupta, our programs are optimized to balance school board curriculum preparation alongside intensive national-level entrance exam training (IIT-JEE / NEET). We maintain strictly restricted batch limits to ensure personalized attention and interactive doubt-clearing sessions.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4 pt-4 border-t border-brand-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-slate-400 mb-2">Core Pillars of Our Academy</h4>
                <div className="grid sm:grid-cols-3 gap-6">
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex flex-col text-left space-y-2">
                        <div className="h-9 w-9 rounded-xl bg-brand-blue-500/10 border border-brand-blue-100 flex items-center justify-center text-brand-blue-600 shrink-0">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <span className="font-display font-bold text-sm text-brand-slate-900 block leading-tight">{item.title}</span>
                          <span className="text-[11px] text-brand-slate-500 block leading-relaxed mt-1 font-sans">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Founder;
