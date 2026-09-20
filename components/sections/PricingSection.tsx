'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { pricingPlans } from '@/lib/data';
import { Check, Sparkles, HelpCircle } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] border border-[#e2e8f0] text-[#071A36] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#071A36] tracking-[-0.035em] leading-none font-heading">
            TRANSPARENT PACKAGES FOR <br className="hidden sm:inline" />
            EVERY STAGE OF GROWTH<span className="text-[#1677FF]">.</span>
          </h2>

          <p className="mt-4 text-[18px] text-[#64748b] leading-[1.61] font-normal">
            No hidden costs or complicated tech jargon. Clear deliverables engineered to maximize your business ROI.
          </p>
        </ScrollReveal>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.1} className="flex">
              <div
                className={`flex-1 flex flex-col justify-between p-7 sm:p-8 relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[#1677FF] text-white rounded-none border-none shadow-xl z-20'
                    : 'bg-white text-[#071A36] border border-[#e2e8f0] rounded-xl shadow-sm hover:border-[#071A36]'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#071A36] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-2xl font-bold tracking-tight font-heading ${plan.isPopular ? 'text-white' : 'text-[#071A36]'}`}>
                      {plan.name}
                    </h3>
                    <span className={`text-xs font-mono font-bold ${plan.isPopular ? 'text-white/80' : 'text-[#64748b]'}`}>
                      Tier 0{index + 1}
                    </span>
                  </div>

                  <p className={`text-sm min-h-[36px] mb-6 leading-[1.61] font-normal ${plan.isPopular ? 'text-white/90' : 'text-[#64748b]'}`}>
                    {plan.tagline}
                  </p>

                  {/* PRICE RANGE */}
                  <div className={`mb-6 pb-6 border-b ${plan.isPopular ? 'border-white/20' : 'border-[#e2e8f0]'}`}>
                    <div className={`text-3xl sm:text-4xl font-bold font-heading tracking-tight ${plan.isPopular ? 'text-white' : 'text-[#071A36]'}`}>
                      {plan.priceRange}
                    </div>
                    <span className={`text-xs font-mono font-bold block mt-1 ${plan.isPopular ? 'text-white' : 'text-[#1677FF]'}`}>
                      {plan.highlight}
                    </span>
                  </div>

                  {/* FEATURES LIST */}
                  <div className="space-y-3.5 mb-8">
                    <p className={`text-xs font-mono font-bold uppercase tracking-wider ${plan.isPopular ? 'text-white/80' : 'text-[#64748b]'}`}>
                      What&apos;s Included:
                    </p>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm font-normal">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-white' : 'text-[#1677FF]'}`} />
                        <span className={plan.isPopular ? 'text-white' : 'text-[#071A36]'}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    href="/contact"
                    variant={plan.isPopular ? 'primary' : 'ember'}
                    size="md"
                    showArrow
                    className="w-full justify-center text-sm py-3.5"
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* IMPORTANT SCOPE NOTICE */}
        <div className="p-4 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] shadow-sm max-w-2xl mx-auto text-center flex items-center justify-center gap-2 text-xs text-[#64748b] font-mono font-medium">
          <HelpCircle className="w-4 h-4 text-[#071A36] shrink-0" />
          <span>
            <strong className="text-[#071A36] font-bold">Scope Note:</strong> Final pricing depends on project scope, custom feature requirements, and page count. We provide a transparent written quote prior to project kickoff.
          </span>
        </div>

      </div>
    </section>
  );
};
