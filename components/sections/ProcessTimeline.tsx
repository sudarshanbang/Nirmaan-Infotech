'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { processSteps } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-50 text-slate-900 z-10 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-blue-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Structured Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            FROM IDEA <br className="hidden sm:inline" />
            TO DIGITAL REALITY.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A transparent, 7-step engineering workflow built to keep your project on schedule, within budget, and aligned with your growth vision.
          </p>
        </ScrollReveal>

        {/* 7-STEP TIMELINE */}
        <div className="relative">
          {/* Vertical Connecting Glow Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600 via-sky-500 to-emerald-500 -translate-x-1/2 rounded-full opacity-40" />

          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={step.step}
                  direction={isEven ? 'right' : 'left'}
                  delay={index * 0.05}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* STEP CARD */}
                    <div className="w-full lg:w-[calc(50%-2.5rem)]">
                      <GlassCard variant="light" className="p-6 sm:p-8 hover:border-blue-500/50 hover:shadow-xl transition-all bg-white">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono">
                            {step.step}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 border border-slate-200 text-slate-700">
                            Phase 0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {step.title}
                        </h3>

                        <p className="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                          {step.shortDesc}
                        </p>

                        <div className="pt-3 border-t border-slate-100 space-y-1.5">
                          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                            Deliverables
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((item, i) => (
                              <span key={i} className="inline-flex items-center gap-1 text-xs text-slate-700 font-medium bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    </div>

                    {/* CENTER TIMELINE NODE */}
                    <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 font-bold font-mono text-sm items-center justify-center shadow-lg shrink-0 z-20">
                      {step.step}
                    </div>

                    {/* EMPTY BALANCING SPACE */}
                    <div className="hidden lg:block w-[calc(50%-2.5rem)]" />

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
