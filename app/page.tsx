import { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { TrustSection } from '@/components/sections/TrustSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { WorkflowSection } from '@/components/sections/WorkflowSection';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { TrustBuildingSection } from '@/components/sections/TrustBuildingSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = createMetadata({
  title: 'Website Development Company in India | Nirmaan Infotech',
  description:
    'Nirmaan Infotech builds high-performance business websites, e-commerce platforms, and digital solutions engineered for speed, search visibility, and conversion.',
  path: '/',
  keywords: [
    'Website Development Company India',
    'Custom Website Development Pune',
    'E-commerce Website Development',
    'Website Redesign Company',
    'Technical SEO Services',
    'Nirmaan Infotech',
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ProblemSection />
      <ServicesOverview />
      <FeaturedWork />
      <PortfolioSection />
      <WhyChooseUs />
      <WorkflowSection />
      <ProcessTimeline />
      <IndustriesSection />
      <AboutTeaser />
      <TrustBuildingSection />
      <CTASection />
    </>
  );
}

