import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Wind,
  Sun,
  Video,
  Shield,
  Thermometer,
  Volume2,
  Check,
  Users,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  Heart,
  AlertCircle
} from 'lucide-react';

const Classrooms = ({ onBackToHome, onOpenDemoModal }) => {
  const [activeSimTab, setActiveSimTab] = useState('ac');

  const simulatorData = {
    ac: {
      title: "Climate-Controlled AC Classrooms",
      subtitle: "Optimized for Higher Standards (Classes 10th–12th & JEE/NEET Prep)",
      img: "/ac_classroom.png",
      tag: "Peak Focus Environment",
      tagColor: "bg-brand-blue-50 text-brand-blue-600 border-brand-blue-150",
      icon: Wind,
      temp: "22°C (Constant)",
      noise: "32 dB (Ultra Quiet)",
      ventilation: "Fresh Air Infusion",
      desc: "Designed for students tackling high-stakes board exams and rigorous national engineering & medical entrance papers. These classes require long-duration seating (3–4 hours per stretch). The climate-controlled, air-conditioned environment prevents fatigue, dry eyes, and cognitive drop-offs, ensuring students maintain absolute focus during demanding lectures.",
      features: [
        "Sleek ergonomic chairs with high back support for long-hour lectures",
        "Acoustically treated soundproof walls to block external noise and echoes",
        "Advanced smart interactive digital whiteboards with real-time screen sharing",
        "Constant fresh air intake system to prevent CO2 buildup and sleepiness",
        "Anti-glare shadowless LED study lights to reduce optic strain"
      ],
      stats: [
        { label: "Focus Duration", value: "+35%" },
        { label: "Optimal Temp", value: "22°C" },
        { label: "Class Duration", value: "3-4 Hrs" }
      ]
    },
    nonAc: {
      title: "Bright, Well-Ventilated Classrooms",
      subtitle: "Designed for Junior Wings (Classes 1st–8th Foundation)",
      img: "/non_ac_classroom.png",
      tag: "Natural & Active Learning",
      tagColor: "bg-brand-green-50 text-brand-green-600 border-brand-green-150",
      icon: Sun,
      temp: "26°C (Natural Airflow)",
      noise: "44 dB (Conversational)",
      ventilation: "Cross-Ventilated Windows",
      desc: "Junior students thrive in natural, highly interactive, and visually stimulating environments. Since foundation classes are kept shorter (1.5 to 2 hours), we prioritize fresh, natural airflow through large safety-glass windows combined with ceiling fans. This ensures a natural breathing environment, encouraging physical vitality, collaboration, and high energy.",
      features: [
        "Spacious wooden group-seating arrangements to promote interactive group discussions",
        "Abundant natural daylight intake to enhance mood and learning receptivity",
        "High-volume silent ceiling fans delivering comfortable cross-breezes",
        "Theme-based educational murals and pin-up boards displaying student works",
        "Kid-safe rounded edge furniture and spacious aisles for high mobility"
      ],
      stats: [
        { label: "Natural Daylight", value: "100%" },
        { label: "Air Circulation", value: "Active" },
        { label: "Class Duration", value: "1.5-2 Hrs" }
      ]
    },
    cctv: {
      title: "24/7 CCTV Security & Surveillance",
      subtitle: "Comprehensive Campus Monitoring for Total Peace of Mind",
      img: "/cctv_surveillance.png",
      tag: "Live Security Monitored",
      tagColor: "bg-red-50 text-red-600 border-red-150 animate-pulse",
      icon: Video,
      temp: "Admin Room Monitored",
      noise: "Zero Blindspots",
      ventilation: "24/7 Continuous Recording",
      desc: "Safety is our absolute priority. The entire campus, including all classrooms (AC & Non-AC), corridors, study halls, libraries, and entry/exit points, is under strict, uninterrupted high-definition CCTV coverage. Parents can rest assured that their children are studying in a disciplined, safe, and highly secure environment.",
      features: [
        "Full HD 1080p cameras with night vision capability covering every corner",
        "Dedicated centralized security desk with real-time video grid wall monitoring",
        "Strict visitor screening protocol integrated with exit-entry logs",
        "30-day secure cloud recording backup for instant reference if needed",
        "Quick assistance trigger protocols for students and faculty"
      ],
      stats: [
        { label: "Camera Coverage", value: "100%" },
        { label: "Cloud Backup", value: "30 Days" },
        { label: "Response Time", value: "<1 Min" }
      ]
    }
  };

  const activeSim = simulatorData[activeSimTab];
  const ActiveIcon = activeSim.icon;

  const infrastructureFAQ = [
    {
      q: "Why don't you have AC in junior classrooms?",
      a: "Pediatric health experts suggest that young children (grades 1–8) spending extended hours in closed, artificially air-conditioned rooms are more prone to lethargy, dry eyes, and respiratory allergies. Shorter classes (1.5–2 hours) in natural, well-ventilated rooms with active ceiling fans keep their energy levels naturally high and help build better biological resilience."
    },
    {
      q: "Is AC really necessary for higher standards?",
      a: "Yes. Board students and entrance aspirants (JEE/NEET) face intensive, long-duration classes (often 3 to 4 hours consecutively) along with consecutive mock test sessions. Climate control maintains a steady 22°C which significantly offsets cognitive fatigue and heat stress, preserving mental concentration during complex calculations."
    },
    {
      q: "How can parents verify the CCTV security?",
      a: "Our CCTV feeds are monitored live in our central admin lobby. While we maintain privacy policies that prevent sharing open streams on the public internet, parents are welcome to visit our admin office to verify surveillance protocols or request specific reviews under supervision."
    },
    {
      q: "What is the average student-to-teacher ratio in these classrooms?",
      a: "To ensure maximum effectiveness of both the classroom environment and academic mentoring, we cap all our batches at 30 students. This maintains clean breathing space and ensures the tutor can physically reach and review every single student's workbook."
    }
  ];

  return (
    <div className="pt-28 pb-16 bg-brand-slate-50 font-sans min-h-screen text-brand-slate-800">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] left-0 w-96 h-96 rounded-full bg-brand-green-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Navigation & Back Button */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-brand-slate-200 text-brand-slate-600 hover:text-brand-blue-600 hover:border-brand-blue-300 hover:shadow-md transition-all text-sm font-semibold cursor-pointer group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs font-bold text-brand-slate-400 uppercase tracking-widest flex items-center gap-1.5">
            <Layers className="h-4 w-4 text-brand-green-500" />
            <span>Infrastructure Section</span>
          </span>
        </div>

        {/* Hero Banner Section */}
        <div className="text-left mb-16 max-w-4xl">
          <span className="text-xs font-bold text-brand-green-600 uppercase tracking-widest bg-brand-green-50 px-3 py-1.5 rounded-full inline-block mb-3 border border-brand-green-100">
            Smart & Safe Campus
          </span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-brand-slate-900 tracking-tight leading-tight mb-4">
            Classroom Environments Tailored for <span className="gradient-text">Different Learning Needs</span>
          </h1>
          <p className="text-brand-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            We believe that a classroom is more than just four walls and a blackboard. It is a vital asset in a student's learning journey. Our facilities are customized based on age group requirements to balance cognitive comfort, health, safety, and strict focus.
          </p>
        </div>

        {/* Interactive Classroom Environment Simulator */}
        <section className="mb-24">
          <div className="bg-white border border-brand-slate-200 rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-brand-slate-150 mb-8">
              <div>
                <h3 className="font-display font-bold text-xl text-brand-slate-950 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-green-500" />
                  <span>Interactive Environment Simulator</span>
                </h3>
                <p className="text-xs text-brand-slate-500 font-sans mt-0.5">Toggle between facilities to preview their telemetry, features, and custom design logic.</p>
              </div>

              {/* Toggles */}
              <div className="flex flex-wrap gap-2 bg-brand-slate-100 p-1.5 rounded-xl w-full lg:w-auto">
                <button
                  onClick={() => setActiveSimTab('ac')}
                  className={`flex-1 lg:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeSimTab === 'ac' ? 'bg-white text-brand-blue-600 shadow-sm border border-brand-slate-200/50' : 'text-brand-slate-600 hover:text-brand-slate-900'}`}
                >
                  <Wind className="h-4 w-4" />
                  <span>AC Rooms (Class 10-12)</span>
                </button>
                <button
                  onClick={() => setActiveSimTab('nonAc')}
                  className={`flex-1 lg:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeSimTab === 'nonAc' ? 'bg-white text-brand-green-600 shadow-sm border border-brand-slate-200/50' : 'text-brand-slate-600 hover:text-brand-slate-900'}`}
                >
                  <Sun className="h-4 w-4" />
                  <span>Natural-Air (Class 7-10)</span>
                </button>
                <button
                  onClick={() => setActiveSimTab('cctv')}
                  className={`flex-1 lg:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeSimTab === 'cctv' ? 'bg-white text-red-600 shadow-sm border border-brand-slate-200/50' : 'text-brand-slate-600 hover:text-brand-slate-900'}`}
                >
                  <Video className="h-4 w-4" />
                  <span>CCTV Surveillance</span>
                </button>
              </div>
            </div>

            {/* Display Simulator Area */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

              {/* Left Screen: Image Mockup & Telemetry */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border border-brand-slate-200 bg-brand-slate-100 group shadow-md">

                  {/* Active Slide Image */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSimTab}
                      src={activeSim.img}
                      alt={activeSim.title}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </AnimatePresence>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-15">
                    <span className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full border shadow-sm backdrop-blur-md ${activeSim.tagColor}`}>
                      {activeSim.tag}
                    </span>
                  </div>

                  {/* CCTV Blinking HUD Overlay */}
                  {activeSimTab === 'cctv' && (
                    <div className="absolute inset-0 pointer-events-none border-2 border-red-500/20 z-10 flex flex-col justify-between p-4 font-mono text-[9px] sm:text-xs text-red-500 bg-gradient-to-t from-black/20 via-transparent to-black/10">
                      <div className="flex justify-between">
                        <span>CAMERA GRID VIEW [01-16]</span>
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-red-600 animate-ping" />
                          REC 1080P
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>HQ MONITOR: OK</span>
                        <span>{new Date().toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Live Room Telemetry Panel */}
                <div className="grid grid-cols-3 gap-3 mt-4 bg-brand-slate-50 border border-brand-slate-200/80 rounded-xl p-3">
                  <div className="text-left">
                    <span className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest block">Room Temp</span>
                    <span className="text-xs sm:text-sm font-bold text-brand-slate-800 flex items-center gap-1 mt-0.5">
                      <Thermometer className="h-3.5 w-3.5 text-brand-blue-500 shrink-0" />
                      {activeSim.temp}
                    </span>
                  </div>
                  <div className="text-left border-l border-brand-slate-200 pl-3">
                    <span className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest block">Noise Level</span>
                    <span className="text-xs sm:text-sm font-bold text-brand-slate-800 flex items-center gap-1 mt-0.5">
                      <Volume2 className="h-3.5 w-3.5 text-brand-green-500 shrink-0" />
                      {activeSim.noise}
                    </span>
                  </div>
                  <div className="text-left border-l border-brand-slate-200 pl-3">
                    <span className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-widest block">Safety / Air</span>
                    <span className="text-xs sm:text-sm font-bold text-brand-slate-800 flex items-center gap-1 mt-0.5">
                      <Shield className="h-3.5 w-3.5 text-brand-blue-500 shrink-0" />
                      {activeSim.ventilation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content details */}
              <div className="lg:col-span-6 flex flex-col justify-between text-left">
                <div className="space-y-5">
                  <div>
                    <div className="inline-flex p-3 rounded-2xl bg-brand-blue-50 text-brand-blue-600 mb-3 border border-brand-blue-100">
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-slate-900 leading-tight">
                      {activeSim.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-brand-slate-500 mt-1 font-display">
                      {activeSim.subtitle}
                    </p>
                  </div>

                  <p className="text-brand-slate-650 text-sm font-sans leading-relaxed">
                    {activeSim.desc}
                  </p>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate-400 mb-3">Key Structural Highlights</h4>
                    <ul className="space-y-2.5">
                      {activeSim.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-slate-700">
                          <div className="mt-0.5 p-0.5 rounded-full bg-brand-green-50 text-brand-green-600 shrink-0">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          <span className="font-sans leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Quick stats grid */}
                <div className="grid grid-cols-3 gap-4 pt-6 mt-6 border-t border-brand-slate-150">
                  {activeSim.stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="font-display font-extrabold text-lg sm:text-xl text-brand-blue-600">{stat.value}</span>
                      <span className="text-[10px] font-bold text-brand-slate-400 uppercase tracking-wider mt-0.5 leading-none">{stat.label}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Dynamic Detailed Feature Comparison Section */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-blue-600 uppercase tracking-widest bg-brand-blue-50 px-3 py-1.5 rounded-full inline-block mb-3 border border-brand-blue-100">
              Comparative Analysis
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-slate-900">
              Why We Tailor Our Classrooms
            </h3>
            <p className="text-xs sm:text-sm text-brand-slate-500 mt-2 max-w-xl mx-auto">
              Our infrastructure is engineered around the specific pedagogical and physiological needs of students at different growth stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: AC Classrooms */}
            <div className="bg-white border border-brand-slate-200 rounded-2xl p-6 sm:p-8 text-left shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-600 border border-brand-blue-100">
                    <Wind className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-brand-blue-50 text-brand-blue-600 px-3 py-1 rounded-full">
                    Senior Wing Focus
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg sm:text-xl text-brand-slate-950 mb-3">
                  AC Classrooms (Higher Standard)
                </h4>
                <p className="text-xs sm:text-sm text-brand-slate-500 font-sans leading-relaxed mb-6">
                  Recommended for Classes 11th, 12th, and IIT-JEE / NEET Repeaters. Students in these standards undergo heavy cognitive training, continuous mock exams, and long study durations (often 4+ hours).
                </p>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                      <Thermometer className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-slate-800 block">Steady 22°C Climate Control</span>
                      <span className="text-[11px] text-brand-slate-500 block font-sans">Blocks mugginess, moisture, and extreme heat, keeping the mind sharp and fatigue at bay.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-slate-800 block">Exam-Hall Seating Mimicry</span>
                      <span className="text-[11px] text-brand-slate-500 block font-sans">Arranged individually to prepare students for the strict exam-hall conditions of competitive tests.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-slate-100 flex items-center gap-2">
                <Heart className="h-4 w-4 text-brand-blue-600 shrink-0" />
                <span className="text-[11px] font-semibold text-brand-slate-500 font-sans">Prevents exhaustion during demanding 3-to-4-hour back-to-back lectures.</span>
              </div>
            </div>

            {/* Card 2: Non-AC Classrooms */}
            <div className="bg-white border border-brand-slate-200 rounded-2xl p-6 sm:p-8 text-left shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-brand-green-50 text-brand-green-600 border border-brand-green-100">
                    <Sun className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-brand-green-50 text-brand-green-600 px-3 py-1 rounded-full">
                    Junior Wing Focus
                  </span>
                </div>
                <h4 className="font-display font-bold text-lg sm:text-xl text-brand-slate-950 mb-3">
                  Non-AC Classrooms (Lower Standard)
                </h4>
                <p className="text-xs sm:text-sm text-brand-slate-500 font-sans leading-relaxed mb-6">
                  Tailored for Classes 7th through 10th foundation batches. Focuses on active engagement, learning-by-doing, and a natural environment where students remain physically active.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-brand-green-50 text-brand-green-600 flex items-center justify-center shrink-0">
                      <Sun className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-slate-800 block">Cross-Ventilation & Natural Air</span>
                      <span className="text-[11px] text-brand-slate-500 block font-sans">Large glass windows provide constant fresh air, preventing the lethargy and dry eyes common in closed AC setups.</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-lg bg-brand-green-50 text-brand-green-600 flex items-center justify-center shrink-0">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-slate-800 block">Interactive Group Seating</span>
                      <span className="text-[11px] text-brand-slate-500 block font-sans">Desks are configured in modules to encourage teamwork, brainstorming, and hands-on scientific projects.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-slate-100 flex items-center gap-2">
                <Heart className="h-4 w-4 text-brand-green-600 shrink-0" />
                <span className="text-[11px] font-semibold text-brand-slate-500 font-sans">Nurtures health, natural immunity, and active energy for growing children.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Security & CCTV Infrastructure Banner */}
        <section className="mb-24 bg-gradient-to-tr from-brand-slate-900 to-brand-slate-950 text-white rounded-3xl overflow-hidden shadow-2xl relative border border-brand-slate-800">
          <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: "url('/cctv_surveillance.png')" }} />
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-green-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 px-6 py-12 sm:p-12 md:p-16 grid lg:grid-cols-12 gap-8 items-center text-left">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-brand-green-500/20 text-brand-green-400 border border-brand-green-500/30 px-3.5 py-1.5 rounded-full inline-block">
                Campus Security
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight">
                Your Child's Safety is Our <span className="text-brand-green-400">Non-Negotiable Priority</span>
              </h3>
              <p className="text-brand-slate-300 text-sm sm:text-base font-sans leading-relaxed">
                We maintain an advanced, multi-layered security infrastructure. Under strict 24/7 CCTV surveillance, our campus operates as a secure sanctuary where students can focus on learning and parents can have total peace of mind.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-lg bg-brand-slate-800 text-brand-green-400 flex items-center justify-center shrink-0 border border-brand-slate-700">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-brand-slate-200">Classroom & Corridor Coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-lg bg-brand-slate-800 text-brand-green-400 flex items-center justify-center shrink-0 border border-brand-slate-700">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-brand-slate-200">Centralized Monitoring Desk</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-lg bg-brand-slate-800 text-brand-green-400 flex items-center justify-center shrink-0 border border-brand-slate-700">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-brand-slate-200">Secure entry gates & logging</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-lg bg-brand-slate-800 text-brand-green-400 flex items-center justify-center shrink-0 border border-brand-slate-700">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-brand-slate-200">Emergency response protocols</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-brand-slate-800/80 border border-brand-slate-700 p-6 rounded-2xl shadow-xl max-w-sm w-full">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle className="h-5 w-5 text-brand-green-400" />
                  <h4 className="font-display font-bold text-sm text-brand-slate-100">Quick Security Snapshot</h4>
                </div>
                <ul className="space-y-3.5 text-xs text-brand-slate-350">
                  <li className="flex justify-between border-b border-brand-slate-700 pb-2">
                    <span>Active Camera Feeds:</span>
                    <span className="font-bold text-white">48 Channels</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-slate-700 pb-2">
                    <span>Blindspots:</span>
                    <span className="font-bold text-brand-green-400">0% Checked</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-slate-700 pb-2">
                    <span>Archival Log:</span>
                    <span className="font-bold text-white">30 Days Backup</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Emergency Drills:</span>
                    <span className="font-bold text-white">Quarterly Conducted</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure FAQ Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-green-600 uppercase tracking-widest bg-brand-green-50 px-3 py-1.5 rounded-full inline-block mb-3 border border-brand-green-100">
              Common Queries
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-slate-900">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {infrastructureFAQ.map((faq, idx) => (
              <div key={idx} className="bg-white border border-brand-slate-200 rounded-2xl p-5 sm:p-6 text-left shadow-sm">
                <h4 className="font-display font-bold text-sm sm:text-base text-brand-slate-950 mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-brand-slate-600 font-sans leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Center Tour Call-to-Action */}
        <section className="bg-gradient-to-r from-brand-blue-600 to-brand-green-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-white/5 -translate-x-10 -translate-y-10" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/5 translate-x-10 translate-y-10" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="font-display font-extrabold text-2xl sm:text-3.5xl tracking-tight leading-tight">
              Want to see our classroom facility in person?
            </h3>
            <p className="text-brand-blue-100 text-sm font-sans max-w-lg mx-auto">
              We welcome parents and students to visit our Titwala campus. Take a personal tour of our classrooms, verify security systems, and consult with Prof. Manoj.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-brand-slate-50 text-brand-blue-600 hover:text-brand-blue-700 font-bold text-sm shadow-lg hover:scale-103 transition-all cursor-pointer border border-white"
              >
                <Calendar className="h-4.5 w-4.5" />
                <span>Schedule a Center Tour</span>
              </button>
              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-blue-700/50 hover:bg-brand-blue-700/70 text-white font-bold text-sm hover:scale-103 transition-all cursor-pointer border border-brand-blue-500/20"
              >
                <span>Explore Home Page</span>
              </button>
            </div>

            <div className="pt-4 flex justify-center items-center gap-2 text-xs text-brand-blue-100">
              <MapPin className="h-4 w-4 text-brand-green-300" />
              <span>Titwala, Kalyan, Maharashtra 421605</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Classrooms;
