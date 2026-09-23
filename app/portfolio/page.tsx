import React from 'react';
import { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Web Development Projects & Portfolio | Nirmaan Infotech Pune',
  description:
    'Explore web development projects and digital design concepts by Nirmaan Infotech in Pune. Production-grade websites, e-commerce storefronts, and custom software architectures.',
  path: '/portfolio',
  keywords: [
    'Web Development Portfolio Pune',
    'Website Development Projects',
    'Pune Web Development Projects',
    'Next.js Portfolio India',
    'Custom Website Case Studies',
    'Nirmaan Infotech Portfolio',
  ],
});

export default function PortfolioPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
  ]);

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 w-full max-w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <PortfolioSection isPageHeader />
      <CTASection />
    </div>
  );
}
