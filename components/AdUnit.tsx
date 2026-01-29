import React from 'react';

interface AdUnitProps {
  label?: string;
  className?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ label = "Advertisement", className = "" }) => {
  return (
    <div className={`w-full my-8 bg-slate-200 border border-slate-300 rounded-lg flex flex-col items-center justify-center min-h-[100px] sm:min-h-[250px] ${className}`}>
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{label}</span>
      <div className="text-slate-400 text-sm">Ad Space</div>
    </div>
  );
};