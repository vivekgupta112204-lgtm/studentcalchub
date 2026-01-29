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
    } else if (val >= 40) {
      setGrade('D (Pass)');
      setColor('text-orange-500');
    } else {
      setGrade('F (Fail)');
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
        <div className="mt-6 p-6 bg-slate-50 border border-slate-200 rounded-lg text-center shadow-sm">
          <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-2">Your Calculated Grade</p>
          <p className={`text-4xl font-extrabold ${color}`}>{grade}</p>
        </div>
      )}
    </div>
  );

  const content = (
    <>
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Student Grading System</h3>
      <p className="mb-6 leading-relaxed">
        Academic grades are a qualitative way to represent your performance. Instead of raw numbers, 
        grades (like A, B, C) give a quick overview of how well a student understands the subject matter.
        This calculator uses a standard grading scale common in many international schools and colleges.
      </p>
      
      <h4 className="text-xl font-bold text-slate-800 mb-3">Grading Scale Reference</h4>
      <div className="overflow-x-auto mb-8 shadow-sm rounded-lg">
        <table className="min-w-full bg-white border border-slate-200">
          <thead className="bg-slate-100 text-slate-700 text-sm uppercase">
            <tr>
              <th className="py-3 px-6 text-left">Marks Range</th>
              <th className="py-3 px-6 text-left">Grade</th>
              <th className="py-3 px-6 text-left">Performance</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            <tr className="border-b">
              <td className="py-3 px-6">90 – 100</td>
              <td className="py-3 px-6 font-bold text-green-600">A+</td>
              <td className="py-3 px-6">Outstanding</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-6">80 – 89</td>
              <td className="py-3 px-6 font-bold text-teal-600">A</td>
              <td className="py-3 px-6">Very Good</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-6">70 – 79</td>
              <td className="py-3 px-6 font-bold text-blue-600">B</td>
              <td className="py-3 px-6">Good</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-6">60 – 69</td>
              <td className="py-3 px-6 font-bold text-yellow-600">C</td>
              <td className="py-3 px-6">Average</td>
            </tr>
             <tr className="border-b">
              <td className="py-3 px-6">40 – 59</td>
              <td className="py-3 px-6 font-bold text-orange-500">D</td>
              <td className="py-3 px-6">Below Average</td>
            </tr>
             <tr>
              <td className="py-3 px-6">Below 40</td>
              <td className="py-3 px-6 font-bold text-red-600">F</td>
              <td className="py-3 px-6">Fail</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className="text-sm text-slate-500 italic">
        <strong>Disclaimer:</strong> Grading systems vary significantly by country and institution (e.g., GPA vs Letter Grades). 
        The scale above is a generalized representation. Please consult your school's handbook for official grading criteria.
      </p>
    </>
  );

  return (
    <CalculatorLayout 
      title="Student Grade Calculator" 
      description="Enter your marks to see your corresponding Letter Grade (A+, A, B, etc.) instantly."
      calculator={calculatorTool}
      content={content}
    />
  );
};