'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Smartphone, Zap, Search, ShieldCheck } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const valueIndicators = [
    {
      title: "Responsive",
      description: "Flawless layout adaptation across smartphones, tablets, laptops, and ultra-wide displays.",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
    },
    {
      title: "SEO-Ready",
      description: "Clean semantic markup, meta structures, and fast code foundation built for Google ranking.",
      icon: <Search className="w-5 h-5 text-sky-600" />,
    },
    {
      title: "Performance-Focused",
      description: "Sub-second load speeds powered by Next.js component rendering and asset compression.",
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      title: "Mobile-First",
      description: "Designed from the ground up for touch interactions, comfortable buttons, and zero overflow.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-slate-100/60 border-b border-slate-200/80 z-10 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-blue-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Digital Credibility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            YOUR BUSINESS DESERVES <br className="hidden sm:inline" />
            A STRONG DIGITAL PRESENCE.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From your first website to your next digital product, we create technology that helps your business look professional, connect with customers, and grow online.
          </p>
        </ScrollReveal>

        {/* 4 VALUE INDICATOR CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueIndicators.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.1}>
              <GlassCard variant="light" className="h-full hover:border-blue-500/40 hover:shadow-lg transition-all duration-300">
                <div className="p-2.5 w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
