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
          Convert to %
        </ActionButton>
        <ActionButton onClick={reset} className="bg-slate-400 hover:bg-slate-500">
          Reset
        </ActionButton>
      </div>

      {result !== null && (
        <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg text-center">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-1">Equivalent Percentage</p>
          <p className="text-3xl font-bold text-teal-800">{result.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-xl font-bold text-slate-800 mb-3">Understanding CGPA to Percentage</h3>
      <p className="mb-4">
        The Cumulative Grade Point Average (CGPA) is a widely used grading system. In India (CBSE) and many other 
        regions, a standard multiplier is used to convert this 10-point scale grade into a percentage.
      </p>
      
      <h4 className="text-lg font-semibold text-slate-800 mb-2">Formula Used</h4>
      <div className="bg-slate-100 p-4 rounded-lg mb-6 font-mono text-sm text-slate-700">
        Percentage = CGPA × 9.5
      </div>

      <h4 className="text-lg font-semibold text-slate-800 mb-2">Example Calculation</h4>
      <p className="mb-4">
        If a student secures a CGPA of <strong>8.2</strong>:
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
        <li>Calculation: 8.2 × 9.5</li>
        <li>Result: <strong>77.9%</strong></li>
      </ul>

      <p className="text-sm text-slate-500 italic">
        Note: The 9.5 multiplier is the standard for CBSE. Some universities may use a score of 10. 
        Always check your institution's specific guidelines.
      </p>
    </>
  );

  return (
    <CalculatorLayout 
      title="CGPA to Percentage Calculator" 
      description="Convert your 10-point scale CGPA into percentage instantly."
      calculator={calculatorTool}
      content={content}
    />
  );
};