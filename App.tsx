import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Home } from './pages/Home';
import { PercentageCalc } from './pages/PercentageCalc';
import { CgpaToPercentage } from './pages/CgpaToPercentage';
import { PercentageToCgpa } from './pages/PercentageToCgpa';
import { PassingMarks } from './pages/PassingMarks';
import { GradeCalc } from './pages/GradeCalc';
import { AverageCalc } from './pages/AverageCalc';
import { About, Privacy, Contact } from './pages/StaticPages';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(RoutePath.HOME);

  // Simple Hash Router Implementation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const path = Object.values(RoutePath).find(p => p === hash) || RoutePath.HOME;
      setCurrentPath(path as RoutePath);
      window.scrollTo(0, 0);
    };

    // Set initial path
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path: RoutePath) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (currentPath) {
      case RoutePath.HOME: return <Home navigate={navigate} />;
      case RoutePath.PERCENTAGE: return <PercentageCalc />;
      case RoutePath.CGPA_TO_PERCENTAGE: return <CgpaToPercentage />;
      case RoutePath.PERCENTAGE_TO_CGPA: return <PercentageToCgpa />;
      case RoutePath.PASSING_MARKS: return <PassingMarks />;
      case RoutePath.GRADE: return <GradeCalc />;
      case RoutePath.AVERAGE: return <AverageCalc />;
      case RoutePath.ABOUT: return <About />;
      case RoutePath.PRIVACY: return <Privacy />;
      case RoutePath.CONTACT: return <Contact />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => navigate(RoutePath.HOME)}
            >
              <div className="h-8 w-8 bg-teal-600 rounded flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">+</span>
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">StudentCalcHub</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => navigate(RoutePath.HOME)} className="text-slate-600 hover:text-teal-600 font-medium">Home</button>
              <button onClick={() => navigate(RoutePath.ABOUT)} className="text-slate-600 hover:text-teal-600 font-medium">About</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h5 className="text-white font-bold text-lg mb-4">Student Calculator Hub</h5>
              <p className="text-sm leading-relaxed text-slate-400">
                A collection of free, fast, and simple educational calculators designed to help students succeed.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold text-lg mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate(RoutePath.HOME)} className="hover:text-teal-400">All Calculators</button></li>
                <li><button onClick={() => navigate(RoutePath.PERCENTAGE)} className="hover:text-teal-400">Percentage Calc</button></li>
                <li><button onClick={() => navigate(RoutePath.CGPA_TO_PERCENTAGE)} className="hover:text-teal-400">CGPA to %</button></li>
              </ul>
            </div>
            <div>
               <h5 className="text-white font-bold text-lg mb-4">Legal</h5>
               <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate(RoutePath.ABOUT)} className="hover:text-teal-400">About Us</button></li>
                <li><button onClick={() => navigate(RoutePath.PRIVACY)} className="hover:text-teal-400">Privacy Policy</button></li>
                <li><button onClick={() => navigate(RoutePath.CONTACT)} className="hover:text-teal-400">Contact Us</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-500 mb-2 md:mb-0">
              © {new Date().getFullYear()} Student Calculator Hub. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Disclaimer: Results are for reference only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;