import React, { useState } from 'react';
import { CalculatorLayout } from '../components/CalculatorLayout';
import { NumberInput, ActionButton } from '../components/FormElements';

export const CgpaToPercentage: React.FC = () => {
  const [cgpa, setCgpa] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const val = parseFloat(cgpa);
    if (!isNaN(val) && val >= 0 && val <= 10) {
      setResult(val * 9.5);
    } else {
      setResult(null);
    }
  };

  const reset = () => {
    setCgpa('');
    setResult(null);
  };

  const calculatorTool = (
    <div className="space-y-4">
      <div className="max-w-md">
        <NumberInput 
          label="Enter CGPA (Scale of 10)" 
          placeholder="e.g. 8.2" 
          value={cgpa} 
          onChange={(e) => setCgpa(e.target.value)}
          min={0}
          max={10}
          step={0.01}
        />
      </div>
      
      <div className="flex gap-3 pt-2">
        <ActionButton onClick={calculate} className="bg-teal-600 hover:bg-teal-700">
          Convert to Percentage
        </ActionButton>
        <ActionButton onClick={reset} className="bg-slate-400 hover:bg-slate-500">
          Reset
        </ActionButton>
      </div>

      {result !== null && (
        <div className="mt-6 p-6 bg-teal-50 border border-teal-200 rounded-lg text-center shadow-sm">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-2">Equivalent Percentage</p>
          <p className="text-4xl font-extrabold text-teal-800">{result.toFixed(2)}%</p>
          <p className="text-xs text-slate-500 mt-2">Based on 9.5 multiplier rule</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Understanding CGPA to Percentage Conversion</h3>
      <p className="mb-6 leading-relaxed">
        The Cumulative Grade Point Average (CGPA) is a popular grading system used by CBSE and many universities 
        globally. While CGPA (usually out of 10) is great for grading, many institutes and companies ask for 
        percentage scores during applications. This <strong>CGPA to Percentage Calculator</strong> helps you perform 
        this conversion instantly using the standard formula.
      </p>
      
      <h4 className="text-xl font-bold text-slate-800 mb-3">The Conversion Formula (CBSE Standard)</h4>
      <p className="mb-3">To convert CGPA into percentage, multiply your CGPA by 9.5:</p>
      <div className="bg-slate-100 p-5 rounded-lg mb-8 font-mono text-base text-slate-700 border-l-4 border-teal-500">
        Percentage = CGPA × 9.5
      </div>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Quick Reference Table</h4>
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full text-sm text-left text-slate-600 border border-slate-200">
            <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                <tr>
                    <th className="px-6 py-3">CGPA</th>
                    <th className="px-6 py-3">Percentage (%)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium">10.0</td>
                    <td className="px-6 py-4">95.00%</td>
                </tr>
                 <tr className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium">9.0</td>
                    <td className="px-6 py-4">85.50%</td>
                </tr>
                 <tr className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium">8.0</td>
                    <td className="px-6 py-4">76.00%</td>
                </tr>
                 <tr className="bg-white border-b hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium">7.0</td>
                    <td className="px-6 py-4">66.50%</td>
                </tr>
            </tbody>
        </table>
      </div>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Why Multiply by 9.5?</h4>
      <p className="mb-6">
        The number 9.5 is derived from the average score of marks in the highest grade band. For example, 
        students scoring between 91-100 are given an A1 grade (10 Grade Points). The average of 91 and 100 
        is approximately 95. Dividing 95 by 10 gives 9.5. This factor is widely accepted for conversion.
      </p>

      <p className="text-sm text-slate-500 italic p-4 bg-slate-50 rounded border border-slate-200">
        <strong>Note:</strong> While 9.5 is the standard for CBSE (India), some universities might use a 
        direct multiplication by 10. Always refer to your institution's specific guidelines before converting.
      </p>
    </>
  );

  return (
    <CalculatorLayout 
      title="CGPA to Percentage Calculator" 
      description="Convert your 10-point scale CGPA into percentage instantly. Uses the standard 9.5 multiplier for accurate results."
      calculator={calculatorTool}
      content={content}
    />
  );
};