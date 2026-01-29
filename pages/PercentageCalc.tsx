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
        <ActionButton onClick={calculate} className="bg-teal-600 hover:bg-teal-700">
          Calculate
        </ActionButton>
        <ActionButton onClick={reset} className="bg-slate-400 hover:bg-slate-500">
          Reset
        </ActionButton>
      </div>

      {result !== null && (
        <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg text-center animate-fade-in">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-1">Result</p>
          <p className="text-3xl font-bold text-teal-800">{result.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-xl font-bold text-slate-800 mb-3">How to Calculate Percentage of Marks?</h3>
      <p className="mb-4">
        Calculating the percentage of your marks is a fundamental skill for every student. It helps you understand 
        your academic performance relative to the total possible score.
      </p>
      
      <h4 className="text-lg font-semibold text-slate-800 mb-2">Formula Used</h4>
      <div className="bg-slate-100 p-4 rounded-lg mb-6 font-mono text-sm text-slate-700">
        Percentage = (Obtained Marks / Total Marks) × 100
      </div>

      <h4 className="text-lg font-semibold text-slate-800 mb-2">Worked Example</h4>
      <p className="mb-4">
        Let's say you scored <strong>450</strong> marks out of a total of <strong>500</strong>.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
        <li>Step 1: Divide 450 by 500. Result: 0.9</li>
        <li>Step 2: Multiply 0.9 by 100.</li>
        <li>Final Result: <strong>90%</strong></li>
      </ul>

      <h3 className="text-xl font-bold text-slate-800 mb-3">Why is this important?</h3>
      <p>
        Most colleges and universities use percentage as a primary criterion for admission. Understanding your 
        percentage helps you apply to the right institutions and track your improvement over semesters.
      </p>
    </>
  );

  return (
    <CalculatorLayout 
      title="Percentage Calculator" 
      description="Quickly calculate your exam percentage from your total and obtained marks."
      calculator={calculatorTool}
      content={content}
    />
  );
};