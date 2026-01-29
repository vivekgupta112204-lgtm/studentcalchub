import React, { useState } from 'react';
import { CalculatorLayout } from '../components/CalculatorLayout';
import { NumberInput, ActionButton } from '../components/FormElements';

export const PercentageToCgpa: React.FC = () => {
  const [percentage, setPercentage] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const val = parseFloat(percentage);
    if (!isNaN(val) && val >= 0 && val <= 100) {
      setResult(val / 9.5);
    } else {
      setResult(null);
    }
  };

  const reset = () => {
    setPercentage('');
    setResult(null);
  };

  const calculatorTool = (
    <div className="space-y-4">
      <div className="max-w-md">
        <NumberInput 
          label="Enter Percentage (%)" 
          placeholder="e.g. 85" 
          value={percentage} 
          onChange={(e) => setPercentage(e.target.value)}
          min={0}
          max={100}
        />
      </div>
      
      <div className="flex gap-3 pt-2">
        <ActionButton onClick={calculate} className="bg-teal-600 hover:bg-teal-700">
          Convert to CGPA
        </ActionButton>
        <ActionButton onClick={reset} className="bg-slate-400 hover:bg-slate-500">
          Reset
        </ActionButton>
      </div>

      {result !== null && (
        <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg text-center">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-1">Equivalent CGPA</p>
          <p className="text-3xl font-bold text-teal-800">{result.toFixed(2)}</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-xl font-bold text-slate-800 mb-3">Converting Percentage to CGPA</h3>
      <p className="mb-4">
        Often applications for higher studies abroad or specific job roles require you to mention your score in CGPA 
        (Cumulative Grade Point Average). This tool reverses the standard CBSE conversion.
      </p>
      
      <h4 className="text-lg font-semibold text-slate-800 mb-2">Formula Used</h4>
      <div className="bg-slate-100 p-4 rounded-lg mb-6 font-mono text-sm text-slate-700">
        CGPA = Percentage / 9.5
      </div>

      <h4 className="text-lg font-semibold text-slate-800 mb-2">Example Case</h4>
      <p className="mb-4">
        You achieved <strong>85.5%</strong> in your final exams.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
        <li>Calculation: 85.5 ÷ 9.5</li>
        <li>Result: <strong>9.0 CGPA</strong></li>
      </ul>
    </>
  );

  return (
    <CalculatorLayout 
      title="Percentage to CGPA Calculator" 
      description="Convert your percentage marks back to a 10-point CGPA scale."
      calculator={calculatorTool}
      content={content}
    />
  );
};