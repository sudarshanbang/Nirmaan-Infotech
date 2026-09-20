import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Award, MessageSquare, Code2, Sparkles } from 'lucide-react';

export const TrustBuildingSection: React.FC = () => {
  const trustPillars = [
    {
      title: "Zero Fake Statistics or Reviews",
      description: "We believe in authentic credibility. Every project showcase and client story reflects genuine digital work.",
      icon: <ShieldCheck className="w-5 h-5 text-[#1677FF]" />,
    },
    {
      title: "Transparent Fixed Pricing",
      description: "No hidden charges or unexpected invoices. We agree on project scope upfront before any development starts.",
      icon: <Award className="w-5 h-5 text-[#1677FF]" />,
    },
    {
      title: "Production Code Architecture",
      description: "Built using Next.js 15, TypeScript, and Tailwind CSS. Clean, maintainable code engineered for long-term reliability.",
      icon: <Code2 className="w-5 h-5 text-[#1677FF]" />,
    },
    {
      title: "Direct WhatsApp & Team Access",
      description: "Fast responses directly from the engineering team working on your website.",
      icon: <MessageSquare className="w-5 h-5 text-[#1677FF]" />,
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#D3F4F1] text-[#071A36] z-10 overflow-hidden border-t border-[#E2E8F0] w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#1677FF]/10 border border-[#1677FF]/20 text-[#1677FF] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-pulse" />
            <span>Company Standard</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#071A36] tracking-tight leading-tight font-heading break-words max-w-full">
            TRUST IS BUILT <br className="hidden sm:inline" />
            ONE PROJECT AT A TIME<span className="text-[#1677FF]">.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
            As a growing Indian digital technology company, we earn client trust through quality execution, transparent communication, and engineering excellence.
          </p>
        </ScrollReveal>

        {/* 4 TRUST PILLARS */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16 min-w-0">
          {trustPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.08} className="w-full min-w-0">
              <div className="relative z-10 h-full p-5 sm:p-6 rounded-xl bg-white border border-slate-200 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_35px_rgba(22,119,255,0.4)] hover:border-[#1677FF]/50 hover:z-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default group w-full max-w-full min-w-0">
                <div className="p-3 rounded-xl bg-[#F1F5F9] border border-slate-200 w-fit mb-4 transition-colors duration-300 group-hover:bg-[#1677FF]/10 group-hover:border-[#1677FF]/30">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#071A36] mb-2 font-heading transition-colors duration-300 group-hover:text-[#1677FF]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CALLOUT: NEXT GROWTH STORY */}
        <ScrollReveal>
          <div className="p-8 rounded-2xl bg-white border border-slate-200 text-center max-w-3xl mx-auto transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(22,119,255,0.12)] hover:border-[#1677FF]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] cursor-default">
            <Sparkles className="w-6 h-6 text-[#1677FF] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#071A36] mb-2 font-heading">
              Ready to Be Our Next Growth Story?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              We work closely with small businesses, startups, restaurants, and professional firms across India to deliver websites people remember.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
