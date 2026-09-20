import React from 'react';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { createMetadata, getBreadcrumbSchema, getServiceSchema } from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'digital-solutions')!;

export const metadata: Metadata = createMetadata({
  title: 'Custom Digital Solutions & Automation | Nirmaan Infotech',
  description:
    'Bespoke digital tools, business automation, customer portals, and cloud integrations engineered to streamline operations and scale your business revenue.',
  path: '/services/digital-solutions',
  keywords: [
    'Custom Digital Solutions',
    'Business Process Automation',
    'Custom Portal Development India',
    'API Integration Services',
    'Nirmaan Infotech Digital Solutions',
  ],
});

export default function DigitalSolutionsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: '/services/digital-solutions' },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.title,
    description:
      'Bespoke digital tools, business automation, customer portals, and cloud integrations engineered to streamline operations and scale your business revenue.',
    path: '/services/digital-solutions',
    serviceType: 'Digital Solutions & Software Engineering',
  });

  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white text-[#071A36] min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e6f0f7]/60 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        <ScrollReveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
            <Cpu className="w-4 h-4 text-[#1677FF]" />
            <span>Custom Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#071A36] tracking-[-0.035em] leading-tight mb-4 font-heading">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#64748b] leading-relaxed font-normal">
            {service.fullDesc}
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <Button href="/contact" variant="primary" showArrow>
              Discuss Custom Architecture
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard variant="default" className="p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl">
            <h2 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading">
              <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
              <span>Custom Solution Scope</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-white">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard variant="default" className="p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl">
            <h2 className="text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading">
              <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
              <span>Deliverables & Technology</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-6">
              {service.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] shrink-0 mt-2" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-mono text-slate-300">
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
