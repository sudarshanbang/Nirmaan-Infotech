import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Nirmaan Infotech',
  description: 'Privacy policy and data protection commitments for Nirmaan Infotech clients and visitors.',
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-4 h-4 text-electric-600" />
              <span>Data Security & Trust</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 font-mono mt-2">
              Last Updated: March 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-700 leading-relaxed font-normal">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
              <p>
                Nirmaan Infotech collects personal information that you voluntarily provide when inquiring about our digital services or submitting contact forms. This includes your name, business name, email address, phone number, and project requirement details.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">2. How We Use Your Information</h2>
              <p>
                We use the information collected exclusively to communicate with you regarding your website project, deliver consultations, provide technical support, and fulfill service agreements. We do not sell or trade your data to third-party advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">3. Data Security & Storage</h2>
              <p>
                We implement industry-standard security protocols to protect your personal information against unauthorized access, alteration, or disclosure. Contact requests are securely transmitted over HTTPS/SSL encrypted channels.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-slate-900">4. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy or your personal data, please contact us at <span className="font-bold text-slate-900">info@nirmaaninfotech.com</span> or via WhatsApp.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
