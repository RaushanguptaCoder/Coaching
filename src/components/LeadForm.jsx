import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, User, CheckCircle, GraduationCap, Award, Calendar } from 'lucide-react';

const LeadForm = ({ 
  isOpen, 
  onClose, 
  variant = "modal", // "modal" | "inline" | "floating"
  initialClass = "",
  initialGoal = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    currentClass: '',
    targetGoal: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initial values when form opens or goal changes
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      currentClass: initialClass || prev.currentClass,
      targetGoal: initialGoal || prev.targetGoal
    }));
  }, [initialClass, initialGoal, isOpen]);

  const classes = [
    { label: "Class 7th", value: "7th" },
    { label: "Class 8th", value: "8th" },
    { label: "Class 9th", value: "9th" },
    { label: "Class 10th", value: "10th" },
    { label: "Class 11th", value: "11th" },
    { label: "Class 12th", value: "12th" },
    { label: "Dropper / Integrated", value: "12th-Pass" }
  ];

  const goals = [
    { label: "Foundation & School Boards", value: "Foundation / Olympiad" },
    { label: "CBSE / State Board Prep", value: "CBSE / State Boards" },
    { label: "IIT-JEE Engineering Prep", value: "IIT-JEE" },
    { label: "NEET-UG Medical Prep", value: "NEET-UG" }
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Student Name is required";
    
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone) {
      tempErrors.phone = "Parent's Phone is required";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Phone must be a valid 10-digit number";
    }
    
    if (!formData.currentClass) tempErrors.currentClass = "Please select current class";
    if (!formData.targetGoal) tempErrors.targetGoal = "Please select target goal";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Route submission to local console logs as specified
      console.log("=== Lead Submitted Successfully ===");
      console.log("Student Name :", formData.name);
      console.log("Parent Phone :", formData.phone);
      console.log("Current Class:", formData.currentClass);
      console.log("Target Goal  :", formData.targetGoal);
      console.log("Timestamp    :", new Date().toISOString());
      console.log("===================================");
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', currentClass: '', targetGoal: '' });
        if (onClose) onClose();
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const formFields = (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${variant === 'modal' ? 'text-brand-slate-300' : 'text-brand-slate-650'}`}>
          Student Name
        </label>
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-brand-slate-400" />
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Student's Full Name"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-slate-200 bg-white text-brand-slate-900 placeholder-brand-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm font-sans"
          />
        </div>
        {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${variant === 'modal' ? 'text-brand-slate-300' : 'text-brand-slate-650'}`}>
          Parent's Phone Number
        </label>
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-brand-slate-400" />
          <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="10-Digit Mobile Number"
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-slate-200 bg-white text-brand-slate-900 placeholder-brand-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm font-sans"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>}
      </div>

      {/* Class & Goal grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Class Dropdown */}
        <div>
          <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${variant === 'modal' ? 'text-brand-slate-300' : 'text-brand-slate-650'}`}>
            Current Class
          </label>
          <div className="relative">
            <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-brand-slate-400 pointer-events-none" />
            <select
              name="currentClass"
              value={formData.currentClass}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-slate-200 bg-white text-brand-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm font-sans appearance-none cursor-pointer"
            >
              <option value="">Select Class</option>
              {classes.map((cls, idx) => (
                <option key={idx} value={cls.value}>{cls.label}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-slate-450">
              ▼
            </div>
          </div>
          {errors.currentClass && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.currentClass}</p>}
        </div>

        {/* Goal Dropdown */}
        <div>
          <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${variant === 'modal' ? 'text-brand-slate-300' : 'text-brand-slate-650'}`}>
            Target Goal
          </label>
          <div className="relative">
            <Award className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-brand-slate-400 pointer-events-none" />
            <select
              name="targetGoal"
              value={formData.targetGoal}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-brand-slate-200 bg-white text-brand-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-sm font-sans appearance-none cursor-pointer"
            >
              <option value="">Select Goal</option>
              {goals.map((g, idx) => (
                <option key={idx} value={g.value}>{g.label}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-brand-slate-450">
              ▼
            </div>
          </div>
          {errors.targetGoal && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.targetGoal}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        disabled={isSubmitted}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-brand-green-500 hover:from-brand-blue-700 hover:to-brand-green-600 text-white font-bold text-sm shadow-md hover:shadow-brand-green-500/10 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
      >
        <Send className="h-4.5 w-4.5" />
        <span>{isSubmitted ? "Sending details..." : "Book Free Demo Session"}</span>
      </button>
    </form>
  );

  // Rendering Inline Footer Banner
  if (variant === "inline") {
    return (
      <section id="resources" className="py-20 bg-brand-slate-100 border-t border-brand-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-blue-500/5 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl border border-brand-slate-250/80 shadow-2xl p-8 sm:p-12 md:grid md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-5 mb-8 md:mb-0">
              <span className="text-xs font-bold text-brand-green-600 uppercase tracking-widest bg-brand-green-50 px-3 py-1.5 rounded-full inline-block mb-4 border border-brand-green-150">
                Register Today
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-slate-900 tracking-tight leading-tight mb-4">
                Unlock 1-on-1 Free Counseling & Demo Session
              </h2>
              <p className="text-brand-slate-650 text-sm leading-relaxed mb-6 font-sans">
                Enter your details to schedule a diagnostics test and get a personal review session with our IITian mentors.
              </p>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-brand-slate-500 bg-brand-slate-100 p-3 rounded-xl border border-brand-slate-200 w-fit">
                <Calendar className="h-4.5 w-4.5 text-brand-blue-600" />
                <span>Next slot: Tomorrow, 4:00 PM</span>
              </div>
            </div>

            <div className="md:col-span-7 relative">
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-brand-green-500/20 shadow-sm"
                  >
                    <CheckCircle className="h-16 w-16 text-brand-green-500 mb-4" />
                    <h3 className="font-display font-extrabold text-xl text-brand-slate-900 mb-2">Slot Reserved!</h3>
                    <p className="text-brand-slate-600 text-sm font-sans">
                      We have logged your selection to the console. Our counselor will contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
              
              <div className="bg-brand-slate-50 border border-brand-slate-200/80 rounded-2xl p-6 shadow-inner">
                {formFields}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Rendering Modal Popup
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

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg rounded-3xl bg-brand-slate-900 border border-brand-slate-800 shadow-2xl p-6 sm:p-8 text-white z-10"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue-600 to-brand-green-500" />
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-brand-slate-800 text-brand-slate-400 hover:text-white hover:bg-brand-slate-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <CheckCircle className="h-16 w-16 text-brand-green-500 mb-6" />
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">Registration Successful</h3>
                <p className="text-brand-slate-400 text-sm max-w-xs font-sans leading-relaxed">
                  Your seat details have been compiled and printed to the local developer console logs. We'll be in touch!
                </p>
              </div>
            ) : (
              <div>
                <h3 className="font-display font-extrabold text-2xl mb-1.5 bg-gradient-to-r from-white to-brand-slate-300 bg-clip-text text-transparent">
                  Book Free Demo Batch
                </h3>
                <p className="text-brand-slate-400 text-xs sm:text-sm font-sans mb-6">
                  Fill in this 4-field form to secure a seat in our classroom batch and schedule a counseling session.
                </p>
                {formFields}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LeadForm;
