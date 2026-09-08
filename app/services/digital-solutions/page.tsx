import React from 'react';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import { Cpu, CheckCircle2 } from 'lucide-react';

const service = servicesData.find((s) => s.slug === 'digital-solutions')!;

export const metadata: Metadata = {
  title: `${service.title} | Nirmaan Infotech`,
  description: service.shortDesc,
};

export default function DigitalSolutionsPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <ScrollReveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            <Cpu className="w-4 h-4" />
            <span>Custom Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {service.title}
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed font-normal">
            {service.fullDesc}
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" showArrow>
              Schedule Architecture Consultation
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard variant="default" className="p-8">
            <h2 className="text-xl font-bold text-white mb-4">Automation & Software Scope</h2>
            <ul className="space-y-3 text-sm text-gray-300">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-growthGreen-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard variant="default" className="p-8">
            <h2 className="text-xl font-bold text-white mb-4">Bespoke Deliverables</h2>
            <ul className="space-y-3 text-sm text-gray-300 mb-6">
              {service.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0 mt-2" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs font-mono text-gray-400">
              Tech Stack: {service.techStack.join(' • ')}
            </p>
          </GlassCard>
        </div>

        <CTASection />
      </div>
    </div>
  );
}
