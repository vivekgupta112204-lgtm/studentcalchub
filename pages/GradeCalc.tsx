import React, { useState } from 'react';
import { CalculatorLayout } from '../components/CalculatorLayout';
import { NumberInput, ActionButton } from '../components/FormElements';

export const GradeCalc: React.FC = () => {
  const [marks, setMarks] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [color, setColor] = useState<string>('');

  const calculate = () => {
    const val = parseFloat(marks);
    if (isNaN(val) || val < 0 || val > 100) {
      setGrade('Invalid Input');
      setColor('text-red-500');
      return;
    }

    if (val >= 90) {
      setGrade('A+ (Excellent)');
      setColor('text-green-600');
    } else if (val >= 80) {
      setGrade('A (Very Good)');
      setColor('text-teal-600');
    } else if (val >= 70) {
      setGrade('B (Good)');
      setColor('text-blue-600');
    } else if (val >= 60) {
      setGrade('C (Average)');
      setColor('text-yellow-600');
    } else {
      setGrade('D (Needs Improvement)');
      setColor('text-red-600');
    }
  };

  const reset = () => {
    setMarks('');
    setGrade('');
  };

  const calculatorTool = (
    <div className="space-y-4">
      <div className="max-w-md">
        <NumberInput 
          label="Enter Your Marks (0-100)" 
          placeholder="e.g. 78" 
          value={marks} 
          onChange={(e) => setMarks(e.target.value)}
          min={0}
          max={100}
        />
      </div>
      
      <div className="flex gap-3 pt-2">
        <ActionButton onClick={calculate} className="bg-teal-600 hover:bg-teal-700">
          Get Grade
        </ActionButton>
        <ActionButton onClick={reset} className="bg-slate-400 hover:bg-slate-500">
          Reset
        </ActionButton>
      </div>

      {grade && (
        <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg text-center">
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Your Grade</p>
          <p className={`text-3xl font-bold ${color}`}>{grade}</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-xl font-bold text-slate-800 mb-3">Understanding Grades</h3>
      <p className="mb-4">
        Grades categorize marks into qualitative levels. While systems vary by country and institution, 
        this calculator uses a standard academic distribution common in many schools.
      </p>
      
      <h4 className="text-lg font-semibold text-slate-800 mb-2">Grading System Used</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-slate-200 mb-6">
          <thead>
            <tr className="bg-slate-100">
              <th className="py-2 px-4 border-b text-left">Marks Range</th>
              <th className="py-2 px-4 border-b text-left">Grade</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">90 – 100</td>
              <td className="py-2 px-4 border-b font-bold text-green-600">A+</td>
              <td className="py-2 px-4 border-b">Excellent</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">80 – 89</td>
              <td className="py-2 px-4 border-b font-bold text-teal-600">A</td>
              <td className="py-2 px-4 border-b">Very Good</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">70 – 79</td>
              <td className="py-2 px-4 border-b font-bold text-blue-600">B</td>
              <td className="py-2 px-4 border-b">Good</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">60 – 69</td>
              <td className="py-2 px-4 border-b font-bold text-yellow-600">C</td>
              <td className="py-2 px-4 border-b">Average</td>
            </tr>
             <tr>
              <td className="py-2 px-4 border-b">Below 60</td>
              <td className="py-2 px-4 border-b font-bold text-red-600">D</td>
              <td className="py-2 px-4 border-b">Fail / Low</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

  return (
    <CalculatorLayout 
      title="Student Grade Calculator" 
      description="Enter your marks to see your corresponding Letter Grade."
      calculator={calculatorTool}
      content={content}
    />
  );
};