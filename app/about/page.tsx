import React from 'react';
import { Metadata } from 'next';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'About Us | Building Digital Technology Around Your Business',
  description: 'Nirmaan Infotech is an Indian digital technology company dedicated to helping small/medium businesses and startups build professional websites, e-commerce, and bespoke software solutions.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 space-y-12">
      <AboutTeaser />
      <WhyChooseUs />
      <ProcessTimeline />
      <CTASection />
    </div>
  );
}
