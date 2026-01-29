import React, { useState } from 'react';
import { CalculatorLayout } from '../components/CalculatorLayout';
import { NumberInput, ActionButton } from '../components/FormElements';

export const PassingMarks: React.FC = () => {
  const [total, setTotal] = useState<string>('');
  const [passingPercent, setPassingPercent] = useState<string>('33'); // Default to standard 33%
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const t = parseFloat(total);
    const p = parseFloat(passingPercent);
    if (!isNaN(t) && !isNaN(p) && t > 0) {
      setResult((t * p) / 100);
    } else {
      setResult(null);
    }
  };

  const reset = () => {
    setTotal('');
    setPassingPercent('33');
    setResult(null);
  };

  const calculatorTool = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NumberInput 
          label="Total Marks" 
          placeholder="e.g. 70" 
          value={total} 
          onChange={(e) => setTotal(e.target.value)} 
        />
        <NumberInput 
          label="Passing Percentage Requirement (%)" 
          placeholder="e.g. 33, 40, or 50" 
          value={passingPercent} 
          onChange={(e) => setPassingPercent(e.target.value)} 
        />
      </div>
      
      <div className="flex gap-3 pt-2">
        <ActionButton onClick={calculate} className="bg-teal-600 hover:bg-teal-700">
          Check Requirements
        </ActionButton>
        <ActionButton onClick={reset} className="bg-slate-400 hover:bg-slate-500">
          Reset
        </ActionButton>
      </div>

      {result !== null && (
        <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg text-center">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-1">Minimum Marks Needed</p>
          <p className="text-3xl font-bold text-teal-800">{Math.ceil(result)}</p>
          <p className="text-xs text-slate-500 mt-2">(Rounded up to nearest whole number)</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-xl font-bold text-slate-800 mb-3">How to Calculate Passing Marks?</h3>
      <p className="mb-4">
        Every exam has a threshold. Whether it is 33%, 40%, or 50%, knowing exactly how many marks you need 
        to avoid failing is crucial for exam preparation strategy.
      </p>
      
      <h4 className="text-lg font-semibold text-slate-800 mb-2">Formula Used</h4>
      <div className="bg-slate-100 p-4 rounded-lg mb-6 font-mono text-sm text-slate-700">
        Passing Marks = (Total Marks × Passing %) ÷ 100
      </div>

      <h4 className="text-lg font-semibold text-slate-800 mb-2">Practical Example</h4>
      <p className="mb-4">
        Suppose an exam has <strong>70</strong> total marks and the university requires <strong>40%</strong> to pass.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
        <li>Calculation: (70 × 40) ÷ 100</li>
        <li>Result: <strong>28 Marks</strong></li>
      </ul>
      <p>
        You would need exactly 28 marks to pass that specific subject.
      </p>
    </>
  );

  return (
    <CalculatorLayout 
      title="Passing Marks Calculator" 
      description="Find out the exact marks required to pass an exam based on total marks and percentage thresholds."
      calculator={calculatorTool}
      content={content}
    />
  );
};