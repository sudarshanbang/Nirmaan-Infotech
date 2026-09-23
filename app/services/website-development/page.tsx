import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData, websiteDevFAQs } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import { Globe, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import {
  createMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'website-development')!;

export const metadata: Metadata = createMetadata({
  title: 'Website Development Company in Pune | Nirmaan Infotech',
  description:
    'Custom website development in Pune built on Next.js and React. Mobile-responsive, fast-loading business websites designed to generate enquiries and grow your online presence.',
  path: '/services/website-development',
  keywords: [
    'Website Development Company Pune',
    'Business Website Development Pune',
    'Custom Website Development Pune',
    'Web Design Company Pune',
    'Responsive Website Development India',
    'Next.js Website Developers India',
  ],
});

const problemCards = [
  {
    title: 'No Online Presence',
    desc: "If your business isn't searchable online, you're invisible to potential customers actively searching for your services.",
  },
  {
    title: 'Losing to Competitors',
    desc: 'Competitors with professional websites earn more credibility and capture leads that should be reaching you.',
  },
  {
    title: 'Outdated Digital Identity',
    desc: 'An old or slow website signals poor professionalism. Modern customers judge credibility by website quality.',
  },
];

const relatedServices = [
  { label: 'E-commerce Development', href: '/services/e-commerce' },
  { label: 'Website Redesign', href: '/services/website-redesign' },
  { label: 'SEO Services', href: '/services/seo' },
  { label: 'Website Maintenance', href: '/services/website-maintenance' },
];

export default function WebsiteDevelopmentPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: '/services/website-development' },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.title,
    description:
      'Custom website development in Pune built on Next.js and React. Mobile-responsive, fast-loading business websites designed to generate enquiries and grow your online presence.',
    path: '/services/website-development',
    serviceType: 'Website Development',
  });

  const faqSchema = getFAQSchema(websiteDevFAQs);

  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white text-[#071A36] min-h-screen overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e6f0f7]/60 blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 min-w-0">

        {/* ── SECTION 1: HERO HEADER ── */}
        <ScrollReveal className="max-w-3xl min-w-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
            <Globe className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>Digital Solution</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#071A36] tracking-[-0.035em] leading-tight mb-4 font-heading break-words max-w-full">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#64748b] leading-relaxed font-normal break-words">
            {service.fullDesc}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              href="/contact"
              variant="primary"
              showArrow
              className="w-full sm:w-auto text-center justify-center min-h-[44px]"
            >
              Discuss Website Project
            </Button>
            <Button
              href="/services"
              variant="secondary"
              className="w-full sm:w-auto text-center justify-center min-h-[44px]"
            >
              Explore All Services
            </Button>
          </div>
        </ScrollReveal>

        {/* ── SECTION 2: CORE CAPABILITIES + DELIVERABLES ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-w-0">
          <GlassCard
            variant="default"
            className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
          >
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading break-words">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
              <span>Core Capabilities</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-white">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span className="break-words">{feat}</span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard
            variant="default"
            className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
          >
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading break-words">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
              <span>Deliverables &amp; Technology</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-6">
              {service.deliverables.map((del, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] shrink-0 mt-2" />
                  <span className="break-words">{del}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs font-mono text-slate-300 break-words">
                Tech Stack: {service.techStack.join(' • ')}
              </p>
            </div>
          </GlassCard>
        </div>

        {/* ── SECTION 3: WHY YOUR BUSINESS NEEDS A PROFESSIONAL WEBSITE ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Why Your Business Needs a Professional Website
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                Your website is often the first impression a potential customer gets of your business.
                Without a credible online presence, you risk being overlooked — no matter how good
                your product or service is.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {problemCards.map((card, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-4 h-4 text-[#1677FF] shrink-0" />
                    <h3 className="text-sm font-bold text-[#071A36]">{card.title}</h3>
                  </div>
                  <p className="text-sm text-[#64748b] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 4: WHO WE BUILD WEBSITES FOR ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Who We Build Websites For
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                We work with a range of businesses across industries that want a dependable,
                high-quality web presence to represent their brand.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {service.idealFor.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1677FF] shrink-0" />
                  <span className="text-sm font-medium text-[#071A36]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 5: FREQUENTLY ASKED QUESTIONS ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                Common questions about our website development process, timelines, and what to expect.
              </p>
            </div>

            <div className="space-y-3">
              {websiteDevFAQs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-xl border border-[#e2e8f0] bg-white shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#071A36] mb-2 leading-snug">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 6: RELATED SERVICES ── */}
        <ScrollReveal>
          <div className="space-y-5">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
              Related Services
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
                >
                  {svc.label}
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 7: CTA ── */}
        <CTASection />
      </div>
    </div>
  );
}
