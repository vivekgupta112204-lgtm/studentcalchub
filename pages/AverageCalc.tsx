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
            className="text-sm text-teal-600 hover:text-teal-800 font-medium underline"
          >
            + Add Another Subject
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
        <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg text-center">
          <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mb-1">Average Score</p>
          <p className="text-3xl font-bold text-teal-800">{result.toFixed(2)}</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-xl font-bold text-slate-800 mb-3">Average Marks Calculator</h3>
      <p className="mb-4">
        Finding the mean or average of your scores helps in understanding your overall performance across
        different subjects. This calculator supports up to 10 subjects.
      </p>
      
      <h4 className="text-lg font-semibold text-slate-800 mb-2">Formula Used</h4>
      <div className="bg-slate-100 p-4 rounded-lg mb-6 font-mono text-sm text-slate-700">
        Average = Sum of all items / Number of items
      </div>

      <h4 className="text-lg font-semibold text-slate-800 mb-2">Example</h4>
      <p className="mb-4">
        Math: 80, English: 70, Science: 90.
      </p>
      <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600">
        <li>Sum: 80 + 70 + 90 = 240</li>
        <li>Count: 3 subjects</li>
        <li>Average: 240 / 3 = <strong>80</strong></li>
      </ul>
    </>
  );

  return (
    <CalculatorLayout 
      title="Average Marks Calculator" 
      description="Calculate the average of multiple subjects or data points."
      calculator={calculatorTool}
      content={content}
    />
  );
};