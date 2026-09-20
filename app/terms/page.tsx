import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { createMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Terms of Service | Nirmaan Infotech',
  description:
    'Terms of service, project agreement details, client code ownership, and service guidelines for Nirmaan Infotech clients and visitors.',
  path: '/terms',
  keywords: ['Nirmaan Infotech Terms of Service', 'Client Agreements', 'Web Project Terms'],
});

export default function TermsOfServicePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Terms of Service', path: '/terms' },
  ]);

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white text-[#071A36]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#64748b] hover:text-[#071A36] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 text-[#1677FF]" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-md p-6 sm:p-10 space-y-8">
          <div className="border-b border-[#e2e8f0] pb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] text-xs font-semibold uppercase tracking-widest mb-3">
              <FileText className="w-4 h-4 text-[#1677FF]" />
              <span>Service Terms</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071A36] tracking-tight font-heading">
              Terms of Service
            </h1>
            <p className="text-xs text-[#64748b] font-mono mt-2">
              Last Updated: March 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#64748b] leading-relaxed font-normal">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#071A36] font-heading">1. Acceptance of Terms</h2>
              <p>
                By accessing Nirmaan Infotech websites or engaging our digital design, development, and maintenance services, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#071A36] font-heading">2. Scope & Project Deliverables</h2>
              <p>
                All digital deliverables, timelines, milestone schedules, and cost estimates are defined in your specific project proposal or agreement. Scope expansions requested during development will be evaluated and quoted separately.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#071A36] font-heading">3. Intellectual Property Rights</h2>
              <p>
                Upon final payment settlement, clients receive full ownership rights to their customized website code, asset designs, and branding deliverables created specifically for their business.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#071A36] font-heading">4. Support & Maintenance</h2>
              <p>
                Post-launch support periods are defined per contract. Ongoing maintenance subscriptions ensure security patches, performance updates, and continuous platform stability.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
