import React, { useState } from 'react';
import { CalculatorLayout } from '../components/CalculatorLayout';
import { NumberInput, ActionButton } from '../components/FormElements';

export const PercentageCalc: React.FC = () => {
  const [obtained, setObtained] = useState<string>('');
  const [total, setTotal] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const ob = parseFloat(obtained);
    const tot = parseFloat(total);
    if (!isNaN(ob) && !isNaN(tot) && tot > 0) {
      setResult((ob / tot) * 100);
    } else {
      setResult(null);
    }
  };

  const reset = () => {
    setObtained('');
    setTotal('');
    setResult(null);
  };

  const calculatorTool = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NumberInput 
          label="Obtained Marks" 
          placeholder="e.g. 450" 
          value={obtained} 
          onChange={(e) => setObtained(e.target.value)} 
        />
        <NumberInput 
          label="Total Marks" 
          placeholder="e.g. 500" 
          value={total} 
          onChange={(e) => setTotal(e.target.value)} 
        />
      </div>
      
      <div className="flex gap-3 pt-2">
        <ActionButton onClick={calculate} className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
          Calculate Percentage
        </ActionButton>
        <ActionButton onClick={reset} className="bg-slate-400 hover:bg-slate-500 w-full sm:w-auto">
          Reset
        </ActionButton>
      </div>

      {result !== null && (
        <div className="mt-6 p-6 bg-teal-50 border border-teal-200 rounded-lg text-center animate-fade-in shadow-sm">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-2">Your Percentage</p>
          <p className="text-4xl font-extrabold text-teal-800">{result.toFixed(2)}%</p>
          <p className="text-xs text-slate-500 mt-2">Calculated from {obtained} / {total}</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">How to Calculate Percentage of Marks?</h3>
      <p className="mb-6 leading-relaxed">
        Calculating the percentage of your marks is one of the most fundamental skills for any student. 
        Whether you are in school, college, or preparing for competitive exams, knowing your exact percentage 
        helps you evaluate your performance relative to the total possible score. This free online percentage calculator 
        makes the process instant and error-free.
      </p>
      
      <h4 className="text-xl font-bold text-slate-800 mb-3">The Percentage Formula Explained</h4>
      <p className="mb-3">The formula to calculate marks percentage is simple and universal:</p>
      <div className="bg-slate-100 p-5 rounded-lg mb-8 font-mono text-base text-slate-700 border-l-4 border-teal-500">
        Percentage = (Obtained Marks ÷ Total Marks) × 100
      </div>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Step-by-Step Worked Example</h4>
      <p className="mb-4">
        Let's understand this with a practical example. Suppose you have appeared for your final exams 
        and the result card shows the following:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-600">
        <li><strong>Obtained Marks:</strong> You scored 450.</li>
        <li><strong>Total Marks:</strong> The exam was out of 500.</li>
        <li><strong>Step 1:</strong> Divide your score by the total (450 ÷ 500 = 0.9).</li>
        <li><strong>Step 2:</strong> Multiply the result by 100 (0.9 × 100 = 90).</li>
        <li><strong>Final Result:</strong> You have scored <strong>90%</strong>.</li>
      </ul>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Why is Percentage Important?</h4>
      <p className="mb-6">
        Percentage is the standard unit for comparing academic performance across different schools and boards.
        Universities often have a minimum percentage cut-off for admissions. Employers may use it as a 
        filtering criterion for entry-level jobs. By using our <strong>Percentage Calculator</strong>, 
        you can quickly check if you meet these eligibility criteria.
      </p>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Frequently Asked Questions (FAQ)</h4>
      <div className="space-y-4">
        <div>
            <h5 className="font-semibold text-slate-800">1. How do I calculate percentage for 6 subjects?</h5>
            <p className="text-slate-600 text-sm">Simply add up the marks obtained in all 6 subjects to get your "Obtained Marks". Then add up the maximum marks of all 6 subjects to get "Total Marks". Enter these into the calculator.</p>
        </div>
        <div>
            <h5 className="font-semibold text-slate-800">2. Is this calculator free?</h5>
            <p className="text-slate-600 text-sm">Yes, Student Calculator Hub is 100% free and works on mobile devices without any login.</p>
        </div>
      </div>
    </>
  );

  return (
    <CalculatorLayout 
      title="Percentage Calculator" 
      description="Quickly calculate your exam percentage from your total and obtained marks. Free, accurate, and mobile-friendly tool for students."
      calculator={calculatorTool}
      content={content}
    />
  );
};