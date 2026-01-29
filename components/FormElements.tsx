import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const NumberInput: React.FC<InputProps> = ({ label, error, className = "", ...props }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-700 mb-1">
      {label}
    </label>
    <input
      type="number"
      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all ${
        error ? 'border-red-500 bg-red-50' : 'border-slate-300 bg-slate-50'
      } ${className}`}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export const ActionButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = "", children, ...props }) => (
  <button
    className={`w-full sm:w-auto px-6 py-2.5 rounded-lg font-semibold text-white shadow-md transition-transform active:scale-95 ${className}`}
    {...props}
  >
    {children}
  </button>
);