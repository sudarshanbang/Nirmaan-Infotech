import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { processSteps } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-b border-[#e2e8f0] w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] border border-[#e2e8f0] text-[#071A36] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
            <span>Structured Process</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#071A36] tracking-[-0.035em] leading-tight sm:leading-none font-heading break-words max-w-full">
            FROM IDEA <br className="hidden sm:inline" />
            TO DIGITAL REALITY<span className="text-[#1677FF]">.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-[18px] text-[#64748b] leading-[1.61] font-normal">
            A transparent, 7-step engineering workflow built to keep your project on schedule, within budget, and aligned with your growth vision.
          </p>
        </ScrollReveal>

        {/* 7-STEP TIMELINE */}
        <div className="relative">
          {/* Vertical Connecting Hairline (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-[#e2e8f0] -translate-x-1/2 rounded-full" />

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
                      <GlassCard variant="default" className="p-5 sm:p-8 hover:border-[#071A36] hover:bg-[#f1f5f9]/50 transition-all bg-white border-[#e2e8f0] rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl sm:text-4xl font-bold text-[#1677FF] font-mono tracking-tight">
                            {step.step}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] text-[#071A36] border border-[#e2e8f0]">
                            Phase 0{index + 1}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-[#071A36] mb-2 font-heading">
                          {step.title}
                        </h3>

                        <p className="text-sm sm:text-[15px] text-[#64748b] leading-[1.61] mb-4 font-normal">
                          {step.shortDesc}
                        </p>

                        <div className="pt-3 border-t border-[#e2e8f0] space-y-2">
                          <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#071A36]">
                            Deliverables
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((item, i) => (
                              <span key={i} className="inline-flex items-center gap-1.5 text-xs text-[#071A36] font-mono bg-[#f1f5f9] px-3 py-1 rounded-full border border-[#e2e8f0] font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0" />
                                <span>{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </GlassCard>
                    </div>

                    {/* CENTER TIMELINE NODE */}
                    <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-2 border-[#071A36] text-[#071A36] font-mono font-bold text-sm items-center justify-center shadow-md shrink-0 z-20">
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
