import React from 'react';
import { Metadata } from 'next';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio Showcase | Concept Projects & Technology UI',
  description: 'Explore Nirmaan Infotech digital portfolio featuring modern web engineering and UI/UX design across business, e-commerce, healthcare, real estate, restaurants, and startups.',
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <PortfolioSection />
      <CTASection />
    </div>
  );
}
