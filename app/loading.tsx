import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 bg-slate-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 border-4 border-electric-500/20 border-t-electric-500 rounded-full animate-spin" />
        <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
          Loading Nirmaan Infotech...
        </span>
      </div>
    </div>
  );
}
