import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ServicesGrid } from '@/components/services/ServicesGrid';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] border border-[#e2e8f0] text-[#071A36] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
            <span>Digital Solutions & Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#071A36] tracking-[-0.035em] leading-none font-heading">
            ENGINEERED FOR <br className="hidden sm:inline" />
            DIGITAL DOMINANCE<span className="text-[#1677FF]">.</span>
          </h2>

          <p className="mt-4 text-[18px] text-[#64748b] leading-[1.61] font-normal">
            Whether establishing a modern brand presence, launching a high-converting e-commerce store, or automating workflows, we build modern tech tailored for growth.
          </p>
        </ScrollReveal>

        {/* INTERACTIVE SERVICES GRID WITH ACTIVE-CARD ANIMATION */}
        <ServicesGrid />

      </div>
    </section>
  );
};
