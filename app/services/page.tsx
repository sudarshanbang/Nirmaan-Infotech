import React from 'react';
import { Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { servicesData } from '@/lib/data';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { CTASection } from '@/components/sections/CTASection';
import { ServicesStack } from '@/components/sections/ServicesStack';
import { createMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Web Development & Digital Services | Nirmaan Infotech',
  description:
    'Explore our end-to-end digital services: custom website development, e-commerce stores, modern redesigns, technical SEO, and dedicated website maintenance.',
  path: '/services',
  keywords: [
    'Web Development Services',
    'Custom Website Design',
    'E-commerce Development India',
    'Website Maintenance Packages',
    'SEO Optimization Services',
    'Nirmaan Infotech Services',
  ],
});

export default function ServicesPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
  ]);

  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white text-[#071A36] min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {/* Atmosphere Pale Sky */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#e6f0f7]/60 blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 min-w-0">
        
        {/* HERO BANNER */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 min-w-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse shrink-0" />
            <span>Digital Capabilities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#071A36] tracking-[-0.035em] leading-[1.1] font-heading break-words max-w-full">
            ENGINEERED FOR <br />
            <span className="text-[#1677FF]">
              GROWTH & PERFORMANCE.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#64748b] leading-relaxed font-normal max-w-2xl mx-auto break-words">
            From modern responsive websites to high-scale e-commerce storefronts and custom business automation, we build digital products tailored to your goals.
          </p>
        </ScrollReveal>

        {/* DETAILED SERVICES LIST (STICKY STACKED SCROLL REVEAL) */}
        <ServicesStack services={servicesData} />

        {/* WORKFLOW STACKING CARDS SECTION */}
        <WorkflowSection />

        <CTASection />
      </div>
    </div>
  );
}
