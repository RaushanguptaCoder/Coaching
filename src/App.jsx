import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChooseGoal from './components/ChooseGoal';
import Founder from './components/Founder';
import Faculty from './components/Faculty';
import HallOfFame from './components/HallOfFame';
import LeadForm from './components/LeadForm';
import Portal from './components/Portal';
import Footer from './components/Footer';

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [prefilledClass, setPrefilledClass] = useState('');
  const [prefilledGoal, setPrefilledGoal] = useState('');

  const handleSelectGoal = (classVal, goalVal) => {
    setPrefilledClass(classVal);
    setPrefilledGoal(goalVal);
    setIsDemoModalOpen(true);
  };

  const handleOpenDemoModal = () => {
    setPrefilledClass('');
    setPrefilledGoal('');
    setIsDemoModalOpen(true);
  };

  const handleDownloadProspectus = () => {
    // Generate a mock prospectus file download
    console.log("Triggered Prospectus Download");
    const docText = `
=========================================
      MANOJ PRIVATE TUITIONS PROSPECTUS (2026-27)
=========================================
Target Wings:
1. Junior Wing (Classes 7th - 10th)
   - Foundation & Boards
   - Olympiad & NTSE Mentoring
2. Senior Wing (Classes 11th - 12th)
   - Physics, Chemistry, Math, Biology
3. Target Batches (IIT-JEE & NEET-UG)
   - Rigorous mock exams, detailed analytics

Elite Faculty:
- Dr. Sameer Verma (Head of Physics, IIT Roorkee)
- Prof. Ananya Roy (Head of Mathematics, IIT Kharagpur)
- Dr. Rajeev Sen (Head of Chemistry, IIT Bombay)
- Prof. Priya Sharma (Biology Faculty, AIIMS Delhi)

Connect with us: Dwarka, New Delhi.
Contact: +91 98765 43210
Email: info@manojprivatetutions.edu
=========================================
`;
    const blob = new Blob([docText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Manoj_Private_Tuitions_Prospectus.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-brand-slate-50 antialiased selection:bg-brand-green-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar 
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Main Sections */}
      <main>
        <Hero 
          onOpenDemoModal={handleOpenDemoModal}
          onDownloadProspectus={handleDownloadProspectus}
        />
        
        <ChooseGoal 
          onSelectGoal={handleSelectGoal}
        />

        <Founder />

        <Faculty />

        <HallOfFame />

        {/* Lead Capture form embedded directly as Footer banner section */}
        <LeadForm 
          variant="inline"
          initialClass=""
          initialGoal=""
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPortal={() => setIsPortalOpen(true)}
        onOpenDemoModal={handleOpenDemoModal}
      />

      {/* Floating CTA for easy contact */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={handleOpenDemoModal}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold text-sm shadow-2xl hover:scale-105 transition-all border border-brand-green-500/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span>Book Free Consultation</span>
        </button>
      </div>

      {/* Lead Capture Modal Pop-up */}
      <LeadForm 
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        variant="modal"
        initialClass={prefilledClass}
        initialGoal={prefilledGoal}
      />

      {/* Student/Parent Dashboard Portal Modal */}
      <Portal 
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}

export default App;
