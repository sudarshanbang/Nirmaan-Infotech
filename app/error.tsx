'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely to internal logging service if configured
    console.error('Unhandled App Error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 bg-slate-50 text-slate-900">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Something went wrong
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          An unexpected error occurred while rendering this page. Our technical team has been notified.
        </p>
        <div className="pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-bold text-sm shadow-md transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
        </div>
      </div>
    </div>
  );
}
