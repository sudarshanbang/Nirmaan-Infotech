'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Award, MessageSquare, Code2, Sparkles } from 'lucide-react';

export const TrustBuildingSection: React.FC = () => {
  const trustPillars = [
    {
      title: "Zero Fake Statistics or Reviews",
      description: "We believe in authentic credibility. Every project showcase and client story reflects genuine digital work.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Transparent Fixed Pricing",
      description: "No hidden charges or unexpected invoices. We agree on project scope upfront before any development starts.",
      icon: <Award className="w-5 h-5 text-amber-400" />,
    },
    {
      title: "Production Code Architecture",
      description: "Built using Next.js 15, TypeScript, and Tailwind CSS. Clean, maintainable code engineered for long-term reliability.",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Direct WhatsApp & Team Access",
      description: "Fast responses directly from the engineering team working on your website.",
      icon: <MessageSquare className="w-5 h-5 text-sky-400" />,
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-navy-950 text-white z-10 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 border border-blue-500/30 text-blue-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Company Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            TRUST IS BUILT <br className="hidden sm:inline" />
            ONE PROJECT AT A TIME.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            As a growing Indian digital technology company, we earn client trust through quality execution, transparent communication, and engineering excellence.
          </p>
        </ScrollReveal>

        {/* 4 TRUST PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustPillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 0.08}>
              <div className="h-full p-6 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-blue-400/40 shadow-xl">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* MODULAR TESTIMONIAL PLACEHOLDER */}
        <ScrollReveal>
          <div className="p-8 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-white/10 text-center max-w-3xl mx-auto shadow-2xl">
            <Sparkles className="w-6 h-6 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">
              Ready to Be Our Next Growth Story?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              We work closely with small businesses, startups, restaurants, and professional firms across India to deliver websites people remember.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
