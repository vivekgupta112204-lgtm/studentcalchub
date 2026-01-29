import React from 'react';
import { AdUnit } from './AdUnit';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  calculator: React.ReactNode;
  content: React.ReactNode;
}

export const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({
  title,
  description,
  calculator,
  content,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-3">{title}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">{description}</p>
      </header>

      {/* Top Ad */}
      <AdUnit label="Top Banner Ad" />

      {/* Calculator Section */}
      <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden mb-12">
        <div className="bg-teal-600 px-6 py-4">
          <h2 className="text-white font-semibold text-xl">Calculator Tool</h2>
        </div>
        <div className="p-6 sm:p-8">
          {calculator}
        </div>
      </div>

      {/* Content Section */}
      <div className="prose prose-slate max-w-none bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100">
        {content}
      </div>

      {/* Bottom Ad */}
      <AdUnit label="Bottom Banner Ad" />
    </div>
  );
};