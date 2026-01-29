import React, { useState } from 'react';
import { CalculatorLayout } from '../components/CalculatorLayout';
import { NumberInput, ActionButton } from '../components/FormElements';

export const AverageCalc: React.FC = () => {
  const [subjects, setSubjects] = useState<string[]>(['', '', '']);
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (index: number, value: string) => {
    const newSubjects = [...subjects];
    newSubjects[index] = value;
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    if (subjects.length < 10) {
      setSubjects([...subjects, '']);
    }
  };

  const calculate = () => {
    let sum = 0;
    let count = 0;
    
    subjects.forEach(sub => {
      const val = parseFloat(sub);
      if (!isNaN(val)) {
        sum += val;
        count++;
      }
    });

    if (count > 0) {
      setResult(sum / count);
    } else {
      setResult(null);
    }
  };

  const reset = () => {
    setSubjects(['', '', '']);
    setResult(null);
  };

  const calculatorTool = (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-64 overflow-y-auto pr-2">
        {subjects.map((sub, index) => (
          <NumberInput 
            key={index}
            label={`Subject ${index + 1}`} 
            placeholder="Marks" 
            value={sub} 
            onChange={(e) => handleInputChange(index, e.target.value)} 
          />
        ))}
      </div>

      <div className="flex justify-center pb-2">
         {subjects.length < 10 && (
          <button 
            onClick={addSubject}
            className="text-sm text-teal-600 hover:text-teal-800 font-medium underline flex items-center"
          >
            <span className="mr-1 text-lg">+</span> Add Another Subject
          </button>
         )}
      </div>
      
      <div className="flex gap-3 pt-2">
        <ActionButton onClick={calculate} className="bg-teal-600 hover:bg-teal-700">
          Calculate Average
        </ActionButton>
        <ActionButton onClick={reset} className="bg-slate-400 hover:bg-slate-500">
          Reset
        </ActionButton>
      </div>

      {result !== null && (
        <div className="mt-6 p-6 bg-teal-50 border border-teal-200 rounded-lg text-center shadow-sm">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-2">Average Score</p>
          <p className="text-4xl font-extrabold text-teal-800">{result.toFixed(2)}</p>
          <p className="text-xs text-slate-500 mt-2">Mean of {subjects.filter(s => s !== '').length} subjects</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Calculate Average Marks</h3>
      <p className="mb-6 leading-relaxed">
        Calculating the average (or mean) of your marks is useful for determining your overall performance 
        across multiple subjects. It smoothes out the variance between your best and worst subjects to give 
        a single performance indicator. This calculator allows you to input up to 10 different subject marks.
      </p>
      
      <h4 className="text-xl font-bold text-slate-800 mb-3">The Average Formula</h4>
      <div className="bg-slate-100 p-5 rounded-lg mb-8 font-mono text-base text-slate-700 border-l-4 border-teal-500">
        Average = (Sum of all Scores) ÷ (Number of Subjects)
      </div>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Example Scenario</h4>
      <p className="mb-4">
        Imagine a student has the following scores in their mid-term exams:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600">
        <li>Mathematics: 85</li>
        <li>English: 72</li>
        <li>Science: 90</li>
        <li>History: 78</li>
      </ul>
      <p className="mb-2"><strong>Step 1 (Sum):</strong> 85 + 72 + 90 + 78 = 325</p>
      <p className="mb-2"><strong>Step 2 (Count):</strong> There are 4 subjects.</p>
      <p className="mb-6"><strong>Step 3 (Divide):</strong> 325 ÷ 4 = <strong>81.25</strong></p>

      <h4 className="text-xl font-bold text-slate-800 mb-3">Usage Tips</h4>
      <p className="text-slate-600">
        Ensure all marks are out of the same total (e.g., all out of 100) for the average to be meaningful. 
        If subjects have different weights, you might need a Weighted Average Calculator instead.
      </p>
    </>
  );

  return (
    <CalculatorLayout 
      title="Average Marks Calculator" 
      description="Calculate the average of marks for multiple subjects easily. Supports up to 10 inputs."
      calculator={calculatorTool}
      content={content}
    />
  );
};