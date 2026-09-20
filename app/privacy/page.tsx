import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { createMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Privacy Policy | Nirmaan Infotech',
  description:
    'Read the privacy policy of Nirmaan Infotech detailing our data protection commitments, confidentiality standards, and contact information.',
  path: '/privacy',
  keywords: ['Nirmaan Infotech Privacy Policy', 'Data Protection', 'Client Confidentiality'],
});

export default function PrivacyPolicyPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
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
              <ShieldCheck className="w-4 h-4 text-[#1677FF]" />
              <span>Data Security & Trust</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#071A36] tracking-tight font-heading">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#64748b] font-mono mt-2">
              Last Updated: March 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#64748b] leading-relaxed font-normal">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#071A36] font-heading">1. Information We Collect</h2>
              <p>
                Nirmaan Infotech collects personal information that you voluntarily provide when inquiring about our digital services or submitting contact forms. This includes your name, business name, email address, phone number, and project requirement details.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#071A36] font-heading">2. How We Use Your Information</h2>
              <p>
                We use the information collected exclusively to communicate with you regarding your website project, deliver consultations, provide technical support, and fulfill service agreements. We do not sell or trade your data to third-party advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#071A36] font-heading">3. Data Security & Storage</h2>
              <p>
                We implement industry-standard security protocols to protect your personal information against unauthorized access, alteration, or disclosure. Contact requests are securely transmitted over HTTPS/SSL encrypted channels.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#071A36] font-heading">4. Contact Us</h2>
              <p>
                If you have any questions regarding our Privacy Policy or data handling practices, please contact us at info@nirmaaninfotech.in.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
