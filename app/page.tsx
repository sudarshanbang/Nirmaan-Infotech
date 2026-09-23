import { Metadata } from 'next';
import { createMetadata, getLocalBusinessSchema, getFAQSchema } from '@/lib/seo';
import { faqsData } from '@/lib/data';
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
  title: 'Web Development Company in Pune | Nirmaan Infotech',
  description:
    'Nirmaan Infotech is a web development company in Pune. We build business websites, e-commerce stores, ERP software, and custom digital solutions for growing businesses across Maharashtra and India.',
  path: '/',
  keywords: [
    'Web Development Company Pune',
    'Website Development Company Pune',
    'Web Design Company Pune',
    'Business Website Development Pune',
    'ERP Development Company Pune',
    'Custom Software Development Pune',
    'Software Development Company Pune',
    'Digital Solutions Company Pune',
    'IT Company Pune',
    'Website Development Company Maharashtra',
    'Web Development Company India',
    'Nirmaan Infotech',
  ],
});

export default function HomePage() {
  const localBusinessSchema = getLocalBusinessSchema();
  const faqSchema = getFAQSchema(faqsData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
