import React from 'react';
import { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Our Work & Digital Portfolio | Nirmaan Infotech',
  description:
    'Explore real-world web engineering and digital project concepts delivered across e-commerce, healthcare, real estate, professional services, and startups.',
  path: '/portfolio',
  keywords: [
    'Web Development Portfolio',
    'Website Design Case Studies',
    'Next.js Project Showcase',
    'Digital Solutions Portfolio India',
    'Nirmaan Infotech Work',
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
