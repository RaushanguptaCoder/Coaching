import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LogIn, Calendar, TrendingUp, Clock, User, CheckCircle, AlertTriangle, ShieldCheck, ClipboardList, LogOut } from 'lucide-react';

const Portal = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('student'); // 'student' | 'parent'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState('attendance'); // 'attendance' | 'analytics' | 'schedule'

  // Handling login
  const handleLogin = (e) => {
    e.preventDefault();
    if ((username === 'student' || username === 'parent') && password === 'password') {
      setRole(username);
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg("Use credentials: 'student' or 'parent' and password: 'password'");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setActiveTab('attendance');
  };

  // Mock Data for Attendance (May 2026)
  const attendanceDays = [
    { day: 1, status: 'present' }, { day: 2, status: 'present' }, { day: 3, status: 'holiday' },
    { day: 4, status: 'present' }, { day: 5, status: 'present' }, { day: 6, status: 'present' },
    { day: 7, status: 'absent' }, { day: 8, status: 'present' }, { day: 9, status: 'present' },
    { day: 10, status: 'holiday' }, { day: 11, status: 'present' }, { day: 12, status: 'present' },
    { day: 13, status: 'present' }, { day: 14, status: 'present' }, { day: 15, status: 'present' },
    { day: 16, status: 'present' }, { day: 17, status: 'holiday' }, { day: 18, status: 'absent' },
    { day: 19, status: 'present' }, { day: 20, status: 'present' }, { day: 21, status: 'present' },
    { day: 22, status: 'present' }, { day: 23, status: 'present' }, { day: 24, status: 'holiday' },
    { day: 25, status: 'present' }, { day: 26, status: 'present' }, { day: 27, status: 'present' },
    { day: 28, status: 'present' }, { day: 29, status: 'present' }, { day: 30, status: 'present' },
    { day: 31, status: 'present' }
  ];

  // Schedule Mock Data
  const weeklySchedule = [
    { day: "Monday", slots: [
      { time: "04:00 PM - 05:30 PM", subject: "Physics", topic: "Rotational Dynamics", teacher: "Dr. Sameer Verma" },
      { time: "05:45 PM - 07:15 PM", subject: "Chemistry", topic: "Chemical Bonding", teacher: "Dr. Rajeev Sen" }
    ]},
    { day: "Tuesday", slots: [
      { time: "04:00 PM - 05:30 PM", subject: "Mathematics", topic: "Limits & Continuity", teacher: "Prof. Ananya Roy" },
      { time: "05:45 PM - 07:15 PM", subject: "Biology", topic: "Cell Division", teacher: "Prof. Priya Sharma" }
    ]},
    { day: "Wednesday", slots: [
      { time: "04:00 PM - 05:30 PM", subject: "Physics", topic: "Electrostatics", teacher: "Dr. Sameer Verma" },
      { time: "05:45 PM - 07:15 PM", subject: "Chemistry", topic: "Organic Mechanisms", teacher: "Dr. Rajeev Sen" }
    ]},
    { day: "Thursday", slots: [
      { time: "04:00 PM - 05:30 PM", subject: "Mathematics", topic: "Definite Integrals", teacher: "Prof. Ananya Roy" },
      { time: "05:45 PM - 07:15 PM", subject: "Biology", topic: "Genetics & Inheritance", teacher: "Prof. Priya Sharma" }
    ]},
    { day: "Friday", slots: [
      { time: "04:00 PM - 06:00 PM", subject: "Mock Test Practice", topic: "Weekly Part Test", teacher: "All Faculty" }
    ]},
    { day: "Saturday", slots: [
      { time: "10:00 AM - 01:00 PM", subject: "Doubt Clearing Session", topic: "Open Doubt Session", teacher: "All Faculty" }
    ]}
  ];

  // Analytics score data for custom SVG Line graph
  // X: Tests (1 to 5), Y: Scores out of 100
  const scores = [
    { test: "Mock-1", score: 68 },
    { test: "Mock-2", score: 72 },
    { test: "Mock-3", score: 81 },
    { test: "Mock-4", score: 79 },
    { test: "Mock-5", score: 89 }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Dashboard Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl rounded-3xl bg-brand-slate-900 border border-brand-slate-800 shadow-2xl overflow-hidden text-white z-10 flex flex-col md:flex-row min-h-[500px]"
          >
            {/* Header Banner Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-600 to-brand-green-500 z-20" />
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-brand-slate-800 text-brand-slate-400 hover:text-white hover:bg-brand-slate-700 transition-colors z-20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* IF NOT AUTHENTICATED: LOGIN SCREEN */}
            {!isAuthenticated ? (
              <div className="w-full p-8 sm:p-12 flex flex-col justify-center max-w-lg mx-auto">
                <div className="text-center mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-brand-blue-600/20 text-brand-green-400 flex items-center justify-center mx-auto mb-4 border border-brand-blue-800">
                    <LogIn className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl">Manoj Private Tuitions Portal Login</h3>
                  <p className="text-brand-slate-450 text-xs mt-1.5 font-sans">
                    Access schedules, performance graphs, and attendance records.
                  </p>
                </div>

                {errorMsg && (
                  <div className="mb-6 p-3 rounded-xl bg-red-950/50 border border-red-900 text-red-400 text-xs font-semibold flex items-start gap-2.5">
                    <AlertTriangle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-slate-400 mb-1.5">
                      Username
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-brand-slate-400" />
                      <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="student or parent"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-slate-800 bg-brand-slate-950 text-white placeholder-brand-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-brand-slate-400 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        className="w-full px-4 py-3 rounded-xl border border-brand-slate-800 bg-brand-slate-950 text-white placeholder-brand-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm font-sans"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-brand-green-500 hover:from-brand-blue-700 hover:to-brand-green-600 text-white font-bold text-sm shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Sign In</span>
                  </button>
                </form>

                {/* Helpful Credentials Help Tip */}
                <div className="mt-8 p-3.5 rounded-2xl bg-brand-blue-950/40 border border-brand-blue-900/50 text-brand-blue-300 text-xs font-medium text-left">
                  <span className="font-bold text-brand-green-400 block mb-1">🔑 Demo Credentials:</span>
                  <div className="space-y-0.5 font-sans">
                    <p>• Student view: username <code className="text-white bg-brand-slate-950 px-1 py-0.5 rounded">student</code></p>
                    <p>• Parent view: username <code className="text-white bg-brand-slate-950 px-1 py-0.5 rounded">parent</code></p>
                    <p>• Password: <code className="text-white bg-brand-slate-950 px-1 py-0.5 rounded">password</code></p>
                  </div>
                </div>
              </div>
            ) : (
              /* IF AUTHENTICATED: DASHBOARD FRAME */
              <>
                {/* Sidebar Navigation */}
                <div className="w-full md:w-64 bg-brand-slate-950 border-r border-brand-slate-800/80 p-6 flex flex-col justify-between shrink-0">
                  <div>
                    {/* User Profile Info */}
                    <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-brand-slate-800">
                      <div className="h-11 w-11 rounded-xl bg-brand-blue-600/25 border border-brand-blue-800 text-brand-green-400 flex items-center justify-center font-display font-extrabold text-sm shadow-sm">
                        {role === 'student' ? 'ST' : 'PA'}
                      </div>
                      <div className="text-left">
                        <span className="text-[10px] uppercase font-bold text-brand-green-400 tracking-widest block">
                          {role === 'student' ? 'Student Workspace' : 'Parent Dashboard'}
                        </span>
                        <span className="font-display font-bold text-sm text-white block">
                          {role === 'student' ? 'Rohan Gupta' : 'Mr. Ramesh Gupta'}
                        </span>
                      </div>
                    </div>

                    {/* Tab Navigation Links */}
                    <nav className="space-y-1">
                      <button
                        onClick={() => setActiveTab('attendance')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'attendance' ? 'bg-brand-blue-900 text-white shadow-md' : 'text-brand-slate-400 hover:text-white hover:bg-brand-slate-900/60'}`}
                      >
                        <Calendar className="h-4.5 w-4.5" />
                        <span>Attendance</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('analytics')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'analytics' ? 'bg-brand-blue-900 text-white shadow-md' : 'text-brand-slate-400 hover:text-white hover:bg-brand-slate-900/60'}`}
                      >
                        <TrendingUp className="h-4.5 w-4.5" />
                        <span>Test Analytics</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('schedule')}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'schedule' ? 'bg-brand-blue-900 text-white shadow-md' : 'text-brand-slate-400 hover:text-white hover:bg-brand-slate-900/60'}`}
                      >
                        <Clock className="h-4.5 w-4.5" />
                        <span>Weekly Schedule</span>
                      </button>
                    </nav>
                  </div>

                  {/* Actions / Logout */}
                  <div className="pt-6 border-t border-brand-slate-800/80 mt-6 flex flex-col gap-3">
                    {role === 'student' ? (
                      <button className="w-full py-2.5 rounded-lg bg-brand-green-600 hover:bg-brand-green-700 font-bold text-xs text-white shadow-sm flex items-center justify-center gap-1.5 transition-all">
                        <ClipboardList className="h-3.5 w-3.5" />
                        <span>Take Practice Quiz</span>
                      </button>
                    ) : (
                      <button className="w-full py-2.5 rounded-lg bg-brand-blue-600 hover:bg-brand-blue-700 font-bold text-xs text-white shadow-sm flex items-center justify-center gap-1.5 transition-all">
                        <User className="h-3.5 w-3.5" />
                        <span>Message Mentor</span>
                      </button>
                    )}
                    <button 
                      onClick={handleLogout}
                      className="w-full py-2.5 rounded-lg border border-brand-slate-800 hover:border-red-900 hover:bg-red-950/20 text-brand-slate-400 hover:text-red-400 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
                    >
                      <LogOut className="h-3.5 w-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>

                {/* Dashboard Main Workspace Panel */}
                <div className="flex-grow p-6 sm:p-8 flex flex-col text-left overflow-y-auto max-h-[600px] md:max-h-none">
                  
                  {/* Attendance Tab Content */}
                  {activeTab === 'attendance' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex justify-between items-center pb-4 border-b border-brand-slate-800">
                        <div>
                          <h4 className="font-display font-extrabold text-lg text-white">Attendance Tracker</h4>
                          <p className="text-xs text-brand-slate-450 mt-0.5">Summary for Academic Term (May 2026)</p>
                        </div>
                        <div className="text-right">
                          <span className="font-display font-extrabold text-2xl text-brand-green-400">93.5%</span>
                          <span className="text-[10px] text-brand-slate-400 block font-semibold">Overall Present Rate</span>
                        </div>
                      </div>

                      {/* Mini Stats Banner */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-3 bg-brand-slate-950 border border-brand-slate-800/80 rounded-xl flex items-center gap-2.5">
                          <div className="h-2 w-2 rounded-full bg-brand-green-500 shrink-0" />
                          <div>
                            <span className="text-[10px] text-brand-slate-400 font-bold block uppercase">Present</span>
                            <span className="text-sm font-extrabold text-white">25 Days</span>
                          </div>
                        </div>
                        <div className="p-3 bg-brand-slate-950 border border-brand-slate-800/80 rounded-xl flex items-center gap-2.5">
                          <div className="h-2 w-2 rounded-full bg-red-500 shrink-0" />
                          <div>
                            <span className="text-[10px] text-brand-slate-400 font-bold block uppercase">Absent</span>
                            <span className="text-sm font-extrabold text-white">2 Days</span>
                          </div>
                        </div>
                        <div className="p-3 bg-brand-slate-950 border border-brand-slate-800/80 rounded-xl flex items-center gap-2.5">
                          <div className="h-2 w-2 rounded-full bg-brand-slate-600 shrink-0" />
                          <div>
                            <span className="text-[10px] text-brand-slate-400 font-bold block uppercase">Holidays</span>
                            <span className="text-sm font-extrabold text-white">4 Days</span>
                          </div>
                        </div>
                      </div>

                      {/* Calendar Grid Matrix */}
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-slate-400 block mb-3">May 2026 Matrix</span>
                        <div className="grid grid-cols-7 gap-2 bg-brand-slate-950 p-4 rounded-2xl border border-brand-slate-800">
                          {/* Calendar Days Header */}
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(h => (
                            <span key={h} className="text-[10px] font-bold text-brand-slate-500 text-center uppercase tracking-wide py-1">{h}</span>
                          ))}
                          
                          {/* Padding blocks if needed (Assume May 1st is Friday) */}
                          <div className="py-2" />
                          <div className="py-2" />
                          <div className="py-2" />
                          <div className="py-2" />

                          {attendanceDays.map((item) => {
                            const colors = {
                              present: "bg-brand-green-500/10 border-brand-green-500/30 text-brand-green-400",
                              absent: "bg-red-500/10 border-red-500/30 text-red-400",
                              holiday: "bg-brand-slate-800/40 border-brand-slate-800 text-brand-slate-500"
                            }[item.status];

                            return (
                              <div 
                                key={item.day}
                                className={`py-2 rounded-lg border text-center text-xs font-bold font-sans shadow-sm flex flex-col justify-center items-center h-10 ${colors}`}
                                title={`May ${item.day} - ${item.status}`}
                              >
                                <span>{item.day}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Test Analytics Tab Content */}
                  {activeTab === 'analytics' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="flex justify-between items-center pb-4 border-b border-brand-slate-800">
                        <div>
                          <h4 className="font-display font-extrabold text-lg text-white">Performance Analytics</h4>
                          <p className="text-xs text-brand-slate-450 mt-0.5">Mock Test Improvement Curve (2025-26)</p>
                        </div>
                        <div className="bg-brand-slate-950 px-3 py-1.5 rounded-xl border border-brand-slate-800 flex items-center gap-1.5">
                          <TrendingUp className="h-4.5 w-4.5 text-brand-green-400" />
                          <span className="text-xs font-bold text-brand-green-400">+21% Growth</span>
                        </div>
                      </div>

                      {/* SVG Line / Improvement Chart */}
                      <div className="p-4 bg-brand-slate-950 border border-brand-slate-800/80 rounded-2xl">
                        <div className="flex justify-between items-center text-xs font-semibold text-brand-slate-400 mb-4 px-2">
                          <span>Progress Trajectory (Points out of 100)</span>
                          <span className="text-brand-green-400">Target: 95+</span>
                        </div>

                        <div className="relative w-full aspect-[2.2/1]">
                          <svg className="w-full h-full" viewBox="0 0 500 220" fill="none">
                            {/* Grid Horizontal Guidelines */}
                            <line x1="40" y1="20" x2="480" y2="20" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                            <line x1="40" y1="70" x2="480" y2="70" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                            <line x1="40" y1="120" x2="480" y2="120" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
                            <line x1="40" y1="170" x2="480" y2="170" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />

                            {/* Chart Labels Y-axis */}
                            <text x="15" y="25" fill="#64748b" className="text-[10px] font-bold font-sans">100</text>
                            <text x="15" y="75" fill="#64748b" className="text-[10px] font-bold font-sans">75</text>
                            <text x="15" y="125" fill="#64748b" className="text-[10px] font-bold font-sans">50</text>
                            <text x="15" y="175" fill="#64748b" className="text-[10px] font-bold font-sans">25</text>

                            {/* Connecting Line Path */}
                            {/* Points: 
                                MT-1: X=60, Y=170 - (68%) => 170 - (68 * 1.5) = 170 - 102 = 68  => let's write exact formulas
                                MT-2: X=160, Y=170 - (72%) => 170 - 108 = 62
                                MT-3: X=260, Y=170 - (81%) => 170 - 121.5 = 48.5
                                MT-4: X=360, Y=170 - (79%) => 170 - 118.5 = 51.5
                                MT-5: X=460, Y=170 - (89%) => 170 - 133.5 = 36.5
                            */}
                            <path 
                              d="M 60 135 L 160 120 L 260 85 L 360 92 L 460 55" 
                              stroke="url(#chartGrad)" 
                              strokeWidth="4" 
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />

                            {/* Dot markers with glowing circles */}
                            {[
                              { x: 60, y: 135, val: "68%" },
                              { x: 160, y: 120, val: "72%" },
                              { x: 260, y: 85, val: "81%" },
                              { x: 360, y: 92, val: "79%" },
                              { x: 460, y: 55, val: "89%" }
                            ].map((pt, idx) => (
                              <g key={idx}>
                                <circle cx={pt.x} cy={pt.y} r="8" fill="#10b981" fillOpacity="0.2" />
                                <circle cx={pt.x} cy={pt.y} r="4" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                                <text x={pt.x - 12} y={pt.y - 12} fill="#ffffff" className="text-[9px] font-bold font-sans">{pt.val}</text>
                              </g>
                            ))}

                            {/* Chart Labels X-axis */}
                            <text x="60" y="200" fill="#94a3b8" textAnchor="middle" className="text-[10px] font-bold font-sans">MT-1</text>
                            <text x="160" y="200" fill="#94a3b8" textAnchor="middle" className="text-[10px] font-bold font-sans">MT-2</text>
                            <text x="260" y="200" fill="#94a3b8" textAnchor="middle" className="text-[10px] font-bold font-sans">MT-3</text>
                            <text x="360" y="200" fill="#94a3b8" textAnchor="middle" className="text-[10px] font-bold font-sans">MT-4</text>
                            <text x="460" y="200" fill="#94a3b8" textAnchor="middle" className="text-[10px] font-bold font-sans">MT-5</text>

                            {/* Gradients Definition */}
                            <defs>
                              <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#2563eb" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#10b981" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </div>

                      {/* Analysis comments card */}
                      <div className="p-4 bg-brand-blue-950/40 border border-brand-blue-900 rounded-2xl flex gap-3">
                        <ShieldCheck className="h-5 w-5 text-brand-green-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-xs text-white block mb-0.5">Faculty Evaluation:</span>
                          <p className="text-xs text-brand-slate-300 leading-relaxed font-sans">
                            Rohan has shown strong growth in math integration and physics electrostatics tests. Recommend continuing practice on rotational dynamics mock problems to maintain JEE trajectory.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Weekly Schedule Tab Content */}
                  {activeTab === 'schedule' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-6"
                    >
                      <div className="pb-4 border-b border-brand-slate-800">
                        <h4 className="font-display font-extrabold text-lg text-white">Weekly Batch Schedule</h4>
                        <p className="text-xs text-brand-slate-450 mt-0.5">Target: Integrated IIT-JEE Ranker Batch</p>
                      </div>

                      <div className="space-y-3.5 max-h-[350px] overflow-y-auto pr-1">
                        {weeklySchedule.map((sched, idx) => (
                          <div 
                            key={idx}
                            className="bg-brand-slate-950 border border-brand-slate-800/80 rounded-2xl p-4 md:grid md:grid-cols-12 items-center gap-4 text-left"
                          >
                            {/* Day Header */}
                            <div className="md:col-span-3 mb-3 md:mb-0">
                              <span className="text-xs font-bold text-brand-green-400 uppercase tracking-widest block bg-brand-green-500/10 border border-brand-green-500/20 px-3 py-1 rounded-lg w-fit">
                                {sched.day}
                              </span>
                            </div>

                            {/* Slots Column */}
                            <div className="md:col-span-9 space-y-3.5 divide-y divide-brand-slate-800/40">
                              {sched.slots.map((slot, sIdx) => (
                                <div key={sIdx} className={`pt-2 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5`}>
                                  <div>
                                    <span className="font-bold text-sm text-white block">{slot.subject}</span>
                                    <span className="text-xs text-brand-slate-400 block">{slot.topic}</span>
                                  </div>
                                  <div className="text-left sm:text-right">
                                    <span className="text-xs font-semibold text-brand-blue-300 block">{slot.time}</span>
                                    <span className="text-[10px] text-brand-slate-500 block">{slot.teacher}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </div>
              </>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Portal;
