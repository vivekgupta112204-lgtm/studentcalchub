import React from 'react';
import { RoutePath } from '../types';

interface HomeProps {
  navigate: (path: RoutePath) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  const calculators = [
    {
      title: "Percentage Calculator",
      desc: "Calculate percentage from your total and obtained marks.",
      path: RoutePath.PERCENTAGE,
      icon: "fa-percent"
    },
    {
      title: "CGPA to Percentage",
      desc: "Convert your CGPA (9.5 scale) to Percentage easily.",
      path: RoutePath.CGPA_TO_PERCENTAGE,
      icon: "fa-graduation-cap"
    },
    {
      title: "Percentage to CGPA",
      desc: "Convert your scored Percentage back to CGPA.",
      path: RoutePath.PERCENTAGE_TO_CGPA,
      icon: "fa-exchange-alt"
    },
    {
      title: "Passing Marks",
      desc: "Find out exactly how many marks you need to pass.",
      path: RoutePath.PASSING_MARKS,
      icon: "fa-check-circle"
    },
    {
      title: "Grade Calculator",
      desc: "Determine your Grade (A+, A, B...) based on marks.",
      path: RoutePath.GRADE,
      icon: "fa-star"
    },
    {
      title: "Average Calculator",
      desc: "Calculate the average marks of up to 10 subjects.",
      path: RoutePath.AVERAGE,
      icon: "fa-calculator"
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-700 to-emerald-600 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Simple Calculators for Students
        </h1>
        <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
          Fast, free, and accurate tools to help you calculate your academic results, grades, and percentages instantly.
        </p>
      </section>

      {/* Grid Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => (
            <div 
              key={calc.path}
              onClick={() => navigate(calc.path)}
              className="bg-white rounded-xl shadow-md border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                {/* Simple SVG Icons based on intent */}
                <span className="text-2xl font-bold text-teal-600">
                    {calc.path === RoutePath.PERCENTAGE ? '%' : 
                     calc.path === RoutePath.CGPA_TO_PERCENTAGE ? '9.5' :
                     calc.path === RoutePath.PERCENTAGE_TO_CGPA ? 'CG' :
                     calc.path === RoutePath.PASSING_MARKS ? '✓' :
                     calc.path === RoutePath.GRADE ? 'A+' : 'Avg'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-700">
                {calc.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {calc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Why use Student Calculator Hub?</h2>
          <p className="text-slate-600 mb-8">
            We provide a mobile-friendly experience with no login required. Whether you are in school or college, 
            our tools are designed to be ad-friendly, fast, and accurate for your daily academic calculations.
          </p>
        </div>
      </section>
    </div>
  );
};