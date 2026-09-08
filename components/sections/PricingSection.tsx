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
    <section className="relative py-20 lg:py-32 bg-slate-50 text-slate-900 z-10 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-blue-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            TRANSPARENT PACKAGES FOR <br className="hidden sm:inline" />
            EVERY STAGE OF GROWTH.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No hidden costs or complicated tech jargon. Clear deliverables engineered to maximize ROI.
          </p>
        </ScrollReveal>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.1} className="flex">
              <div
                className={`flex-1 flex flex-col justify-between p-8 rounded-3xl relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-blue-600 to-indigo-700 text-white border-2 border-blue-500 shadow-2xl shadow-blue-500/25 scale-102 z-20'
                    : 'bg-white text-slate-800 border border-slate-200/90 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-extrabold tracking-wider ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <span className={`text-xs font-mono font-bold ${plan.isPopular ? 'text-blue-200' : 'text-slate-400'}`}>
                      Tier 0{index + 1}
                    </span>
                  </div>

                  <p className={`text-xs min-h-[36px] mb-6 font-medium ${plan.isPopular ? 'text-blue-100' : 'text-slate-500'}`}>
                    {plan.tagline}
                  </p>

                  {/* PRICE RANGE */}
                  <div className={`mb-6 pb-6 border-b ${plan.isPopular ? 'border-blue-400/40' : 'border-slate-100'}`}>
                    <div className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${plan.isPopular ? 'text-white' : 'text-slate-900'}`}>
                      {plan.priceRange}
                    </div>
                    <span className={`text-xs font-bold block mt-1 ${plan.isPopular ? 'text-amber-300' : 'text-blue-600'}`}>
                      {plan.highlight}
                    </span>
                  </div>

                  {/* FEATURES LIST */}
                  <div className="space-y-3 mb-8">
                    <p className={`text-xs font-bold uppercase tracking-wider ${plan.isPopular ? 'text-blue-100' : 'text-slate-500'}`}>
                      What&apos;s Included:
                    </p>
                    {plan.features.map((feat, i) => (
                      <div key={i} className={`flex items-start gap-2.5 text-xs font-medium ${plan.isPopular ? 'text-blue-50' : 'text-slate-700'}`}>
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-amber-300' : 'text-emerald-600'}`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    href="/contact"
                    variant={plan.isPopular ? 'whatsapp' : 'primary'}
                    size="md"
                    showArrow
                    className={`w-full justify-center ${plan.isPopular ? 'bg-white hover:bg-slate-100 text-blue-700 border-none font-extrabold shadow-lg' : ''}`}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* IMPORTANT SCOPE NOTICE */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm max-w-2xl mx-auto text-center flex items-center justify-center gap-2 text-xs text-slate-600">
          <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong className="text-slate-900 font-bold">Scope Note:</strong> Final pricing depends on project scope, custom feature requirements, and page count. We provide a transparent written quote prior to project kickoff.
          </span>
        </div>

      </div>
    </section>
  );
};
