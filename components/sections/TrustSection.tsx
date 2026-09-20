'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Smartphone, Zap, Search, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const valueIndicators = [
    {
      number: '01',
      title: 'Responsive',
      description: 'Flawless layout adaptation across smartphones, tablets, laptops, and ultra-wide displays.',
      icon: <Smartphone className="w-6 h-6" />,
      tag: 'Multi-Screen',
      gradient: 'from-[#6885b0] via-[#1677FF] to-[#071A36]',
    },
    {
      number: '02',
      title: 'SEO-Ready',
      description: 'Clean semantic markup, meta structures, and fast code foundation built for Google ranking.',
      icon: <Search className="w-6 h-6" />,
      tag: 'Google Rank',
      gradient: 'from-[#071A36] via-[#6885b0] to-[#1677FF]',
    },
    {
      number: '03',
      title: 'Performance-Focused',
      description: 'Sub-second load speeds powered by Next.js component rendering and asset compression.',
      icon: <Zap className="w-6 h-6" />,
      tag: 'Sub-Second',
      gradient: 'from-[#1677FF] via-[#6885b0] to-[#0B2A5B]',
    },
    {
      number: '04',
      title: 'Mobile-First',
      description: 'Designed from the ground up for touch interactions, comfortable buttons, and zero overflow.',
      icon: <ShieldCheck className="w-6 h-6" />,
      tag: 'Touch Native',
      gradient: 'from-[#0B2A5B] via-[#071A36] to-[#6885b0]',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white border-b border-[#e2e8f0] z-10 overflow-hidden text-[#071A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6885b0] animate-pulse" />
            <span>Digital Credibility</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071A36] tracking-tight leading-tight font-heading">
            YOUR BUSINESS DESERVES <br className="hidden sm:inline" />
            A STRONG DIGITAL PRESENCE<span className="text-[#1677FF]">.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748b] leading-relaxed font-normal">
            From your first website to your next digital product, we create technology that helps your business look professional, connect with customers, and grow online.
          </p>
        </ScrollReveal>

        {/* 4 VALUE INDICATOR CARDS WITH HOVER REVEAL COVER COLLAPSE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueIndicators.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <div
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setOpenIndex(isOpen ? null : index);
                    }
                  }}
                  className={`card group relative min-h-[350px] bg-white rounded-2xl border border-[#e2e8f0] shadow-md hover:shadow-2xl hover:border-[#6885b0] transition-all duration-300 overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6885b0] focus:ring-offset-2 ${
                    isOpen ? 'is-open' : ''
                  }`}
                >
                  {/* FACE 1: UNDERNEATH CONTENT LAYER */}
                  <div className="face1 absolute inset-0 p-6 sm:p-7 flex flex-col justify-between z-0 pb-16">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] shadow-sm">
                          {item.icon}
                        </div>
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] text-[#1677FF] border border-[#e2e8f0]">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#071A36] mb-2 font-heading">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between text-xs font-bold text-[#1677FF]">
                      <span>Explore Capability</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* FACE 2: COVER LAYER (COLLAPSES ON HOVER/OPEN) */}
                  <div
                    className={`face2 absolute bottom-0 left-0 right-0 w-full bg-gradient-to-br ${item.gradient} text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden z-10 flex flex-col items-center justify-center p-6 rounded-2xl group-hover:h-[56px] group-hover:rounded-b-2xl group-hover:rounded-t-none group-focus-within:h-[56px] group-focus-within:rounded-b-2xl group-focus-within:rounded-t-none ${
                      isOpen ? '!h-[56px] !rounded-b-2xl !rounded-t-none' : 'h-full'
                    }`}
                  >
                    {/* Glossy Overlay (Left 50%) */}
                    <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-white/10 rounded-l-2xl pointer-events-none" />

                    {/* Default State Content: Large Number & Cover Title */}
                    <div className="relative z-10 text-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 group-hover:pointer-events-none group-focus-within:opacity-0 group-focus-within:scale-95 group-focus-within:pointer-events-none flex flex-col items-center justify-center h-full">
                      <span className="text-6xl sm:text-7xl font-black font-mono tracking-tighter drop-shadow-md mb-2 text-white">
                        {item.number}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-wider text-white font-heading">
                        {item.title}
                      </h3>
                      <span className="mt-3 text-[10px] font-mono text-white/80 uppercase tracking-widest bg-white/15 px-3 py-1 rounded-full border border-white/20">
                        Hover / Tap to Reveal
                      </span>
                    </div>

                    {/* Collapsed State Bar Content: Number + Title Indicator */}
                    <div className="absolute inset-0 px-4 flex items-center justify-between opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        {item.number} • {item.title}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

