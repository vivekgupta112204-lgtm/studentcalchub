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
          label="Passing Percentage (%)" 
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
        <div className="mt-6 p-6 bg-teal-50 border border-teal-200 rounded-lg text-center shadow-sm">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-2">Minimum Marks Needed</p>
          <p className="text-4xl font-extrabold text-teal-800">{Math.ceil(result)}</p>
          <p className="text-xs text-slate-500 mt-2">To pass with {passingPercent}%</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">How to Calculate Passing Marks?</h3>
      <p className="mb-6 leading-relaxed">
        Exam anxiety often comes down to one question: "How many marks do I need just to pass?". 
        Whether the threshold is 33%, 40%, or 50%, knowing the exact number helps you plan your study strategy.
        This calculator determines the minimum marks required based on the total weightage of the paper.
      </p>
      
      <h4 className="text-xl font-bold text-slate-800 mb-3">Formula for Passing Marks</h4>
      <div className="bg-slate-100 p-5 rounded-lg mb-8 font-mono text-base text-slate-700 border-l-4 border-teal-500">
        Passing Marks = (Total Marks × Passing Percentage) ÷ 100
      </div>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Common Passing Criteria</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 border border-slate-200 rounded shadow-sm">
            <h5 className="font-bold text-teal-700">33% Rule</h5>
            <p className="text-sm text-slate-600">Common in Indian Boards (CBSE, State Boards).</p>
        </div>
        <div className="bg-white p-4 border border-slate-200 rounded shadow-sm">
            <h5 className="font-bold text-teal-700">40% Rule</h5>
            <p className="text-sm text-slate-600">Used in many Universities and Technical Colleges.</p>
        </div>
        <div className="bg-white p-4 border border-slate-200 rounded shadow-sm">
            <h5 className="font-bold text-teal-700">50% Rule</h5>
            <p className="text-sm text-slate-600">Standard for Professional Certifications.</p>
        </div>
      </div>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Practical Example</h4>
      <p className="mb-4">
        Suppose you are writing a theory paper worth <strong>70 marks</strong> and your university requires a minimum of <strong>40%</strong> to pass.
      </p>
      <ul className="list-disc pl-6 space-y-3 mb-6 text-slate-600">
        <li><strong>Calculation:</strong> (70 × 40) ÷ 100</li>
        <li><strong>Result:</strong> 28 Marks</li>
      </ul>
      <p className="text-slate-700 font-medium">
        You must score at least 28 marks to clear the subject.
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