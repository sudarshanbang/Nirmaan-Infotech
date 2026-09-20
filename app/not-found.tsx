import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Page Not Found | Nirmaan Infotech',
  description: 'The requested page could not be found on Nirmaan Infotech.',
  path: '/404',
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-4 bg-slate-50 text-slate-900">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-electric-500/10 text-electric-600 border border-electric-500/20 text-3xl font-mono font-black">
          404
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          The page you are looking for might have been removed, renamed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="md" className="w-full sm:w-auto font-bold">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </Button>
          <Button href="/services" variant="secondary" size="md" className="w-full sm:w-auto bg-white border-slate-300 font-bold">
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
}
