import React from 'react';
import { Metadata } from 'next';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'About Nirmaan Infotech | Web Engineering & Growth',
  description:
    'Learn about Nirmaan Infotech, an Indian technology company crafting high-performance websites, digital platforms, and custom tools for growing businesses.',
  path: '/about',
  keywords: [
    'About Nirmaan Infotech',
    'Indian Web Engineering Company',
    'Website Development Agency Pune',
    'Digital Transformation India',
  ],
});

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <AboutTeaser isPageHeader />
      <WhyChooseUs />
      <ProcessTimeline />
      <CTASection />
    </div>
  );
}
