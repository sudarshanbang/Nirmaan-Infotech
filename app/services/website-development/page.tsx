import React from 'react';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import { Globe, CheckCircle2 } from 'lucide-react';

const service = servicesData.find((s) => s.slug === 'website-development')!;

export const metadata: Metadata = {
  title: `${service.title} | Nirmaan Infotech`,
  description: service.shortDesc,
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F7F9FC] text-slate-900 min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(22,119,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,119,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* HERO HEADER */}
        <ScrollReveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1677FF]/[0.06] border border-[#1677FF]/30 text-[#1677FF] mb-4">
            <Globe className="w-4 h-4" />
            <span>Digital Solution</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#071A36] tracking-tight leading-tight mb-4">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4B607A] leading-relaxed font-medium">
            {service.fullDesc}
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" showArrow>
              Discuss Website Project
            </Button>
            <Button href="/pricing" variant="secondary">
              View Pricing Tiers
            </Button>
          </div>
        </ScrollReveal>

        {/* DETAILED SPECS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard variant="light" className="p-8 bg-[#071A36] text-white border border-slate-800 shadow-xl rounded-2xl">
            <h2 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
              <span>Core Capabilities</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#EAF2FF]">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard variant="light" className="p-8 bg-[#071A36] text-white border border-slate-800 shadow-xl rounded-2xl">
            <h2 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Deliverables & Technology</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-[#B9C7DA] mb-6">
              {service.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-slate-800">
              <p className="text-xs font-mono text-[#DCE8F8]">
                Tech Stack: {service.techStack.join(' • ')}
              </p>
            </div>
          </GlassCard>
        </div>

        <CTASection />
      </div>
    </div>
  );
}
