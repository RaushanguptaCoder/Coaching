import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = ({ setActivePage, onOpenPortal, onOpenDemoModal }) => {
  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      if (targetId === 'classrooms') {
        setActivePage('classrooms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActivePage('home');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };
  return (
    <footer className="bg-brand-slate-900 border-t border-brand-slate-800 text-white font-sans pt-16 pb-8 relative overflow-hidden">
      {/* Subtle styling ambient gradients */}
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-green-500/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-slate-800">

          {/* Logo and Pitch */}
          <div className="lg:col-span-4 text-left">
            <div 
              className="flex items-center gap-2 cursor-pointer mb-5" 
              onClick={() => {
                setActivePage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="p-2 rounded-xl bg-gradient-to-tr from-brand-blue-600 to-brand-green-500 text-white shadow-md">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white to-brand-green-400 bg-clip-text text-transparent">
                  Manoj
                </span>
                <span className="font-display font-medium text-xs block text-brand-slate-400 uppercase tracking-widest -mt-1">
                  Private Tutions
                </span>
              </div>
            </div>
            <p className="text-brand-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Empowering students to achieve their academic dreams. Through structured methodologies, elite faculty mentoring, and individual analysis, we make success a habit.
            </p>
            <div className="flex items-center gap-4">
              {/* Portal link */}
              <button
                onClick={onOpenPortal}
                className="text-xs font-semibold text-brand-green-400 hover:text-white transition-colors flex items-center gap-1 bg-brand-slate-800/80 px-3 py-1.5 rounded-lg border border-brand-slate-750"
              >
                <span>Student/Parent Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Academic Wings Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate-300 mb-5">Programs</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#choose-goal" onClick={(e) => handleLinkClick(e, '#choose-goal')} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors">
                  Junior Wing (7th-10th)
                </a>
              </li>
              <li>
                <a href="#choose-goal" onClick={(e) => handleLinkClick(e, '#choose-goal')} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors">
                  Senior Wing (11th-12th)
                </a>
              </li>
              <li>
                <a href="#choose-goal" onClick={(e) => handleLinkClick(e, '#choose-goal')} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors">
                  IIT-JEE Integrated
                </a>
              </li>
              <li>
                <a href="#choose-goal" onClick={(e) => handleLinkClick(e, '#choose-goal')} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors">
                  NEET-UG Dropper Batch
                </a>
              </li>
            </ul>
          </div>

          {/* Student Resources Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate-300 mb-5">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#classrooms" onClick={(e) => handleLinkClick(e, '#classrooms')} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors font-semibold">
                  Classroom Facilities
                </a>
              </li>
              <li>
                <a href="#resources" onClick={(e) => handleLinkClick(e, '#resources')} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors">
                  Free Study Material
                </a>
              </li>
              <li>
                <a href="#resources" onClick={(e) => handleLinkClick(e, '#resources')} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors">
                  Mock Test Series
                </a>
              </li>
              <li>
                <a href="#resources" onClick={(e) => handleLinkClick(e, '#resources')} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors">
                  Syllabus Breakdown
                </a>
              </li>
              <li>
                <button onClick={onOpenDemoModal} className="text-brand-slate-400 hover:text-brand-green-400 transition-colors text-left focus:outline-none cursor-pointer">
                  Book Counseling Session
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-slate-300 mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm text-brand-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-green-400 shrink-0 mt-0.5" />
                <span>
                  TITWALA, SHOP NO.1TO3, RAVINDRA GALAXY, NEAR RAVINDRA VIDYALAYA, Manda, Kalyan, Maharashtra 421605
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-blue-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-blue-400 shrink-0" />
                <a href="mailto:info@manojprivatetutions.edu" className="hover:text-white transition-colors">info@manojprivatetutions.edu </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs text-brand-slate-500 font-sans">
          <p>© {new Date().getFullYear()} Manoj Private Tutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-green-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
