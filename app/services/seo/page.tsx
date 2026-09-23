import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData, seoFAQs } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import {
  TrendingUp,
  CheckCircle2,
  Gauge,
  CodeXml,
  MapPin,
  FileSearch,
  ArrowRight,
} from 'lucide-react';
import {
  createMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'seo')!;

export const metadata: Metadata = createMetadata({
  title: 'SEO Services in Pune | Technical SEO & Local SEO | Nirmaan Infotech',
  description:
    'Technical SEO and local SEO services for Pune businesses. Improve your Google visibility with clean architecture, structured data, Core Web Vitals optimization, and keyword-aligned content.',
  path: '/services/seo',
  keywords: [
    'SEO Services Pune',
    'Technical SEO India',
    'Local SEO Pune',
    'Search Engine Optimization Pune',
    'Google Rankings Pune',
    'SEO Company Pune',
  ],
});

// ─── Static data ──────────────────────────────────────────────────────────────

const problemCards = [
  {
    id: 'slow-loading',
    title: 'Slow Page Loading',
    desc: "Google's Core Web Vitals are a ranking factor. Slow websites rank lower and frustrate the users who do find them.",
    Icon: Gauge,
  },
  {
    id: 'poor-structure',
    title: 'Poor Technical Structure',
    desc: 'Missing title tags, duplicate content, incorrect canonicals, and broken links actively prevent your site from ranking.',
    Icon: CodeXml,
  },
  {
    id: 'no-local-seo',
    title: 'No Local Search Optimization',
    desc: 'Many local Pune businesses miss searches like "service near me" because their website and business profile lack proper local signals.',
    Icon: MapPin,
  },
  {
    id: 'intent-mismatch',
    title: 'Content Not Matching Search Intent',
    desc: 'Ranking requires content that genuinely answers what your target customers are searching for — not keyword-stuffed paragraphs.',
    Icon: FileSearch,
  },
];

const technicalItems = [
  'Correct canonical URL structure',
  'Clean semantic HTML heading hierarchy',
  'XML sitemap and robots.txt configuration',
  'Schema.org structured data implementation',
  'Core Web Vitals and page speed optimization',
  'Mobile responsiveness and usability',
];

const localSeoPoints = [
  'Local keyword integration that accurately reflects where you operate',
  'Google Business Profile alignment with website information',
  'Structured data signaling your Pune location to search engines',
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function SEOPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: '/services/seo' },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.title,
    description:
      'Technical SEO and local SEO services for Pune businesses. Improve your Google visibility with clean architecture, structured data, Core Web Vitals optimization, and keyword-aligned content.',
    path: '/services/seo',
    serviceType: 'Search Engine Optimization',
  });

  const faqSchema = getFAQSchema(seoFAQs);

  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white text-[#071A36] min-h-screen overflow-hidden">
      {/* ── Structured Data ── */}
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

      {/* Decorative background blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e6f0f7]/60 blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 min-w-0">

        {/* ── 1. HERO ── */}
        <ScrollReveal className="max-w-3xl min-w-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
            <TrendingUp className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>Search Growth</span>
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
              Get SEO Strategy Proposal
            </Button>
          </div>
        </ScrollReveal>

        {/* ── 2. TECHNICAL SEO FOCUS + SEO DELIVERABLES ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-w-0">
          <GlassCard
            variant="default"
            className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
          >
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading break-words">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
              <span>Technical SEO Focus</span>
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
              <span>SEO Deliverables</span>
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
                Tools: {service.techStack.join(' • ')}
              </p>
            </div>
          </GlassCard>
        </div>

        {/* ── 3. WHY PUNE BUSINESSES STRUGGLE ── */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-5">
            <span>Common Challenges</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-3">
            Why Pune Businesses Struggle with Google Visibility
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl mb-8">
            Most businesses in Pune have websites — but many of those websites have underlying technical
            issues that quietly prevent them from appearing in relevant Google searches.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {problemCards.map(({ id, title, desc, Icon }) => (
              <div
                key={id}
                className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] flex gap-4 items-start"
              >
                <div className="w-9 h-9 rounded-lg bg-[#e6f0ff] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#1677FF]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#071A36] mb-1 font-heading">{title}</h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── 4. OUR APPROACH TO TECHNICAL SEO ── */}
        <ScrollReveal>
          <GlassCard
            variant="default"
            className="p-6 sm:p-10 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 border border-white/20 text-[#93c5fd] mb-5">
              <span>Methodology</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight font-heading mb-3">
              Our Approach to Technical SEO
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We focus on the technical foundations that give your website the best possible chance of
              ranking for relevant searches. Our SEO work starts with what Google can actually measure
              and verify:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technicalItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] shrink-0" />
                  <span className="text-sm font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* ── 5. LOCAL SEO FOR PUNE ── */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-5">
            <MapPin className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>Local Presence</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-3">
            Local SEO for Pune-Based Businesses
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl mb-6">
            If you serve customers in Pune, Pune district, or Maharashtra, local SEO is particularly
            important. We optimize your website for location-relevant searches — ensuring that people
            in Pune searching for your services find your business in Google results.
          </p>

          <div className="p-6 sm:p-8 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] space-y-4">
            {localSeoPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-[#071A36] font-medium leading-snug">{point}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── 6. FAQ ── */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-5">
            <span>FAQ</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {seoFAQs.map((faq, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-xl border border-[#e2e8f0] bg-white shadow-sm"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#071A36] mb-2 font-heading">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── 7. RELATED SERVICES ── */}
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#64748b] mb-4">
            Related Services
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/website-development"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
            >
              Website Development
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
            <Link
              href="/services/website-redesign"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
            >
              Website Redesign
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
            <Link
              href="/services/website-maintenance"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
            >
              Website Maintenance
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>
        </ScrollReveal>

        {/* ── 8. CTA ── */}
        <CTASection />
      </div>
    </div>
  );
}
