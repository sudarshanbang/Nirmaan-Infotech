'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { maintenancePlans } from '@/lib/data';
import { ShieldCheck, Check } from 'lucide-react';

export const MaintenanceSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-100/60 text-slate-900 z-10 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 border border-emerald-200 text-emerald-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Continuous Support</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            YOUR WEBSITE SHOULD <br className="hidden sm:inline" />
            KEEP WORKING AFTER LAUNCH.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Nirmaan Infotech provides ongoing support, security audits, backups, and speed tuning to keep your website fast and reliable 24/7.
          </p>
        </ScrollReveal>

        {/* 3 MAINTENANCE CARE PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {maintenancePlans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={index * 0.1} className="flex">
              <GlassCard
                variant="light"
                className={`flex-1 flex flex-col justify-between p-8 bg-white ${
                  plan.isPopular ? 'border-2 border-emerald-500 shadow-xl' : 'border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-wider">
                      {plan.name}
                    </h3>
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>

                  <div className="mb-4">
                    <span className="text-3xl font-extrabold text-slate-900 font-mono">{plan.price}</span>
                    <span className="text-xs text-slate-500 font-bold">{plan.billing}</span>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed font-medium">
                    {plan.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <Button href="/contact" variant="secondary" size="sm" showArrow className="w-full justify-center bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200">
                    Select Care Plan
                  </Button>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
