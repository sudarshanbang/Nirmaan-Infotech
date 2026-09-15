import { Hero } from '@/components/sections/Hero';
import { TrustSection } from '@/components/sections/TrustSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { FeaturedWork } from '@/components/sections/FeaturedWork';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { TrustBuildingSection } from '@/components/sections/TrustBuildingSection';
import { CTASection } from '@/components/sections/CTASection';

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
      <ProcessTimeline />
      <IndustriesSection />
      <AboutTeaser />
      <TrustBuildingSection />
      <CTASection />
    </>
  );
}
