import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Nirmaan Infotech',
  description: 'Terms of service and client project agreements for Nirmaan Infotech digital engineering.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-electric-600 hover:text-electric-700 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-3">
              <FileText className="w-4 h-4 text-electric-600" />
              <span>Service Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 font-mono mt-2">
              Last Updated: March 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-normal">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
              <p>
                By accessing Nirmaan Infotech websites or engaging our digital design, development, and maintenance services, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. Scope & Project Deliverables</h2>
              <p>
                All digital deliverables, timelines, milestone schedules, and cost estimates are defined in your specific project proposal or agreement. Scope expansions requested during development will be evaluated and quoted separately.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Intellectual Property Rights</h2>
              <p>
                Upon final payment settlement, clients receive full ownership rights to their customized website code, asset designs, and branding deliverables created specifically for their business.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Support & Maintenance</h2>
              <p>
                Post-launch technical maintenance and security updates are provided in accordance with your selected Care Plan. For assistance, contact our technical desk at <span className="font-bold text-slate-900">info@nirmaaninfotech.com</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
