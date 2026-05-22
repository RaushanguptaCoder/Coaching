import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, GraduationCap, User, BookOpen, Award, FileText, School } from 'lucide-react';

const Navbar = ({ activePage, setActivePage, onOpenPortal, onOpenDemoModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      if (targetId === 'classrooms') {
        setActivePage('classrooms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActivePage('home');
        // Let React re-render the home components first
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      setIsOpen(false);
    }
  };

  const programs = {
    title: "Programs",
    wings: [
      {
        name: "Junior Wing",
        desc: "Foundation & School Boards",
        subtitle: "Classes 7th to 10th",
        color: "from-blue-500 to-indigo-500",
        href: "#choose-goal"
      },
      {
        name: "Senior Wing",
        desc: "Science/Commerce/Arts Boards",
        subtitle: "Classes 11th & 12th",
        color: "from-purple-500 to-pink-500",
        href: "#choose-goal"
      },
      {
        name: "Target Batches",
        desc: "Dropper / Integrated Programs",
        subtitle: "IIT-JEE & NEET",
        color: "from-emerald-500 to-teal-500",
        href: "#choose-goal"
      }
    ]
  };

  const navLinks = [
    { name: "About Us", href: "#about", icon: GraduationCap },
    { name: "Classrooms", href: "#classrooms", icon: School },
    { name: "Results", href: "#results", icon: Award },
    { name: "Resources", href: "#resources", icon: FileText, subItems: ["Free Study Material", "Test Series", "Syllabus"] }
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-slate-900/90 backdrop-blur-md border-b border-brand-slate-800 shadow-lg text-white' : 'bg-transparent text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-brand-blue-600 to-brand-green-500 text-white shadow-md">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-brand-slate-100 to-brand-green-400 bg-clip-text text-transparent">
                Manoj
              </span>
              <span className="font-display font-medium text-xs block text-brand-slate-400 uppercase tracking-widest -mt-1">
                Private Tutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Programs Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('programs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 font-medium hover:text-brand-green-400 transition-colors py-2 text-sm">
                Programs <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === 'programs' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-80 rounded-2xl bg-brand-slate-900 border border-brand-slate-800 shadow-2xl p-4 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-600 to-brand-green-500" />
                    <h4 className="text-xs font-semibold text-brand-slate-500 uppercase tracking-wider mb-2">Our Academic Wings</h4>
                    <div className="space-y-1">
                      {programs.wings.map((wing, i) => (
                        <a
                          key={i}
                          href={wing.href}
                          onClick={(e) => {
                            setActiveDropdown(null);
                            handleLinkClick(e, wing.href);
                          }}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-slate-800/60 transition-colors group"
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${wing.color} text-white group-hover:scale-105 transition-transform`}>
                            <BookOpen className="h-4 w-4" />
                          </div>
                          <div>
                            <span className="font-semibold text-sm block group-hover:text-brand-green-400 transition-colors">{wing.name}</span>
                            <span className="text-xs text-brand-slate-400 block">{wing.subtitle}</span>
                            <span className="text-[10px] text-brand-slate-500 block mt-0.5">{wing.desc}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Links */}
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => link.subItems ? setActiveDropdown(link.name) : null}
                onMouseLeave={() => link.subItems ? setActiveDropdown(null) : null}
              >
                <a 
                  href={link.href}
                  onClick={(e) => !link.subItems && handleLinkClick(e, link.href)}
                  className={`font-medium hover:text-brand-green-400 transition-colors text-sm flex items-center gap-1 ${activePage === 'classrooms' && link.name === 'Classrooms' ? 'text-brand-green-400' : ''}`}
                >
                  {link.name} {link.subItems && <ChevronDown className="h-4 w-4" />}
                </a>

                {link.subItems && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-52 rounded-xl bg-brand-slate-900 border border-brand-slate-800 shadow-xl p-2"
                  >
                    {link.subItems.map((item, itemIdx) => (
                      <a
                        key={itemIdx}
                        href="#resources"
                        onClick={(e) => {
                          setActiveDropdown(null);
                          handleLinkClick(e, '#resources');
                        }}
                        className="block px-4 py-2 text-sm text-brand-slate-300 hover:text-brand-green-400 hover:bg-brand-slate-800 rounded-lg transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Student/Parent Portal Button */}
            <button
              id="nav-portal-btn"
              onClick={onOpenPortal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-brand-slate-700 hover:border-brand-green-500 hover:bg-brand-slate-800/40 text-brand-slate-300 hover:text-white transition-all text-sm font-medium"
            >
              <User className="h-4 w-4 text-brand-green-400" />
              <span>Portal Login</span>
            </button>

            {/* Book Demo Button */}
            <button
              id="nav-demo-btn"
              onClick={onOpenDemoModal}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue-600 to-brand-green-500 hover:from-brand-blue-700 hover:to-brand-green-600 text-white font-semibold text-sm shadow-lg hover:shadow-brand-green-500/10 hover:scale-[1.02] transition-all"
            >
              Book Free Demo
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onOpenPortal}
              className="p-2 rounded-lg bg-brand-slate-800 text-brand-green-400 hover:text-white"
              title="Portal Login"
            >
              <User className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-brand-slate-800 text-brand-slate-300 hover:text-white hover:bg-brand-slate-700 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-slate-900 border-b border-brand-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div>
                <span className="text-xs font-semibold text-brand-slate-500 uppercase tracking-wider block px-3 mb-2">Programs</span>
                <div className="space-y-1 pl-2">
                  {programs.wings.map((wing, i) => (
                    <a
                      key={i}
                      href={wing.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleLinkClick(e, wing.href);
                      }}
                      className="block px-3 py-2 rounded-lg text-brand-slate-300 hover:bg-brand-slate-800 hover:text-white transition-colors"
                    >
                      <span className="font-medium text-sm block">{wing.name}</span>
                      <span className="text-xs text-brand-slate-500">{wing.subtitle}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-brand-slate-500 uppercase tracking-wider block px-3 mb-2">Links</span>
                <div className="space-y-1 pl-2">
                  {navLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      onClick={(e) => {
                        setIsOpen(false);
                        handleLinkClick(e, link.href);
                      }}
                      className="block px-3 py-2 rounded-lg text-sm text-brand-slate-300 hover:bg-brand-slate-800 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brand-slate-800 px-3 flex flex-col gap-3">
                <button
                  onClick={() => { setIsOpen(false); onOpenPortal(); }}
                  className="w-full py-2.5 rounded-lg border border-brand-slate-700 hover:bg-brand-slate-800 flex items-center justify-center gap-2 text-sm text-brand-slate-300"
                >
                  <User className="h-4 w-4 text-brand-green-400" />
                  <span>Portal Login</span>
                </button>
                <button
                  onClick={() => { setIsOpen(false); onOpenDemoModal(); }}
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-brand-blue-600 to-brand-green-500 text-white font-semibold text-sm shadow-md text-center"
                >
                  Book Free Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
