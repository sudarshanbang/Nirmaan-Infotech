import React from 'react';
import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/PricingSection';
import { MaintenanceSection } from '@/components/sections/MaintenanceSection';
import { CTASection } from '@/components/sections/CTASection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { faqsData } from '@/lib/data';
import { GlassCard } from '@/components/ui/GlassCard';
import { HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing Plans & Website Maintenance Care | Nirmaan Infotech',
  description: 'Transparent investment tiers for web design, e-commerce stores, and website maintenance plans. Starter (₹9,999-₹14,999), Business (₹19,999-₹34,999), Premium (₹39,999+).',
};

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 space-y-12">
      <PricingSection />
      <MaintenanceSection />

      {/* FAQ SECTION */}
      <section className="relative py-16 bg-navy-950/90 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <ScrollReveal className="text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Frequently Asked Questions</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <GlassCard variant="default" className="p-6">
                  <h3 className="text-base font-bold text-white mb-2 flex items-start gap-2">
                    <span className="text-electric-400 font-mono">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
}
