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
import { SEO } from './components/SEO';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(RoutePath.HOME);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple Hash Router Implementation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const path = Object.values(RoutePath).find(p => p === hash) || RoutePath.HOME;
      setCurrentPath(path as RoutePath);
      window.scrollTo(0, 0);
      setIsMenuOpen(false); // Close menu on navigation
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

  const NavLink = ({ path, label }: { path: RoutePath; label: string }) => (
    <button
      onClick={() => navigate(path)}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left ${
        currentPath === path
          ? 'bg-teal-50 text-teal-700'
          : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group"
              onClick={() => navigate(RoutePath.HOME)}
            >
              <div className="h-9 w-9 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center mr-2 shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">+</span>
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">StudentCalcHub</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              <button onClick={() => navigate(RoutePath.HOME)} className="px-4 py-2 text-slate-600 hover:text-teal-600 font-medium rounded-lg hover:bg-slate-50 transition-all">Home</button>
              <button onClick={() => navigate(RoutePath.ABOUT)} className="px-4 py-2 text-slate-600 hover:text-teal-600 font-medium rounded-lg hover:bg-slate-50 transition-all">About</button>
              <button onClick={() => navigate(RoutePath.CONTACT)} className="px-4 py-2 text-slate-600 hover:text-teal-600 font-medium rounded-lg hover:bg-slate-50 transition-all">Contact</button>
              <button onClick={() => navigate(RoutePath.PRIVACY)} className="px-4 py-2 text-slate-600 hover:text-teal-600 font-medium rounded-lg hover:bg-slate-50 transition-all">Privacy</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-teal-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              <NavLink path={RoutePath.HOME} label="Home" />
              <NavLink path={RoutePath.ABOUT} label="About Us" />
              <NavLink path={RoutePath.CONTACT} label="Contact Support" />
              <NavLink path={RoutePath.PRIVACY} label="Privacy Policy" />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h5 className="text-white font-bold text-xl mb-4 flex items-center">
                 <span className="text-teal-400 mr-2">+</span> Student Calculator Hub
              </h5>
              <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                Your go-to educational companion. We provide free, fast, and secure calculators for students, teachers, and parents to compute marks, CGPA, and grades instantly.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold text-lg mb-4">Calculators</h5>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate(RoutePath.PERCENTAGE)} className="hover:text-teal-400 transition-colors">Percentage Calculator</button></li>
                <li><button onClick={() => navigate(RoutePath.CGPA_TO_PERCENTAGE)} className="hover:text-teal-400 transition-colors">CGPA to Percentage</button></li>
                <li><button onClick={() => navigate(RoutePath.GRADE)} className="hover:text-teal-400 transition-colors">Grade Finder</button></li>
              </ul>
            </div>
            <div>
               <h5 className="text-white font-bold text-lg mb-4">Company</h5>
               <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigate(RoutePath.ABOUT)} className="hover:text-teal-400 transition-colors">About Us</button></li>
                <li><button onClick={() => navigate(RoutePath.PRIVACY)} className="hover:text-teal-400 transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => navigate(RoutePath.CONTACT)} className="hover:text-teal-400 transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-500 mb-2 md:mb-0">
              © {new Date().getFullYear()} Student Calculator Hub. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Disclaimer: Results are for reference only. No data is stored.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;