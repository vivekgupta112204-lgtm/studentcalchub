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
        <div className="mt-6 p-6 bg-teal-50 border border-teal-200 rounded-lg text-center shadow-sm">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-2">Equivalent CGPA</p>
          <p className="text-4xl font-extrabold text-teal-800">{result.toFixed(2)}</p>
          <p className="text-xs text-slate-500 mt-2">On a 10-point scale</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Convert Percentage to CGPA</h3>
      <p className="mb-6 leading-relaxed">
        While most students start with grades and convert to percentage, there are times when you need to do the reverse.
        If you are applying for foreign universities or specific corporate jobs, you might be required to state 
        your score in CGPA (Cumulative Grade Point Average) out of 10. This tool helps you reverse the standard conversion.
      </p>
      
      <h4 className="text-xl font-bold text-slate-800 mb-3">Formula Used</h4>
      <div className="bg-slate-100 p-5 rounded-lg mb-8 font-mono text-base text-slate-700 border-l-4 border-teal-500">
        CGPA = Percentage ÷ 9.5
      </div>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Example Calculation</h4>
      <p className="mb-4">
        Let's say you achieved <strong>85.5%</strong> in your final board exams. To find your CGPA:
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-600">
        <li><strong>Input:</strong> 85.5%</li>
        <li><strong>Calculation:</strong> 85.5 ÷ 9.5</li>
        <li><strong>Result:</strong> 9.0 CGPA</li>
      </ul>

      <h4 className="text-xl font-bold text-slate-800 mb-3">When should I use this?</h4>
      <p className="mb-6">
        Use this calculator if your marksheet only shows Percentage but your college application form 
        requests a CGPA score. This is common for international applications where the 10-point scale (or 4-point scale) 
        is more recognizable than raw percentages.
      </p>
    </>
  );

  return (
    <CalculatorLayout 
      title="Percentage to CGPA Calculator" 
      description="Easily convert your marks percentage back to a 10-point scale CGPA."
      calculator={calculatorTool}
      content={content}
    />
  );
};