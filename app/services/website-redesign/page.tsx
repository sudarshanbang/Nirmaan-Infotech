import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData, websiteRedesignFAQs } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import { Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import {
  createMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'website-redesign')!;

export const metadata: Metadata = createMetadata({
  title: 'Website Redesign Company in Pune | Nirmaan Infotech',
  description:
    'Transform your outdated website with a modern redesign. Mobile-responsive, fast-loading, and SEO-safe — preserving your Google rankings while modernizing your brand online.',
  path: '/services/website-redesign',
  keywords: [
    'Website Redesign Company Pune',
    'Website Modernization Pune',
    'UI UX Redesign India',
    'Website Redesign Services',
    'Legacy Website Upgrade Pune',
  ],
});

const signCards = [
  {
    title: 'Slow Load Speed',
    desc: 'If your website takes more than 3 seconds to load, visitors leave before seeing your content — and Google ranks faster sites higher.',
  },
  {
    title: 'Not Mobile-Friendly',
    desc: 'Over 80% of web traffic comes from mobile devices. A website that breaks on phones is losing potential customers every day.',
  },
  {
    title: 'Outdated Visual Design',
    desc: 'An old-looking website signals that your business may be behind the times. Modern design builds immediate credibility with new visitors.',
  },
  {
    title: 'Low Enquiries or Conversions',
    desc: 'If your website gets visitors but few enquiries, the design, layout, or call-to-action placement may be the issue.',
  },
];

const seoProtectionPoints = [
  'Existing URL structure is preserved wherever possible',
  '301 redirects implemented for any changed page URLs',
  'All existing metadata, title tags, and descriptions are migrated',
  'Structured data and canonical URLs are reviewed and improved',
];

const relatedServices = [
  { label: 'Website Development', href: '/services/website-development' },
  { label: 'SEO Services', href: '/services/seo' },
  { label: 'Website Maintenance', href: '/services/website-maintenance' },
];

export default function WebsiteRedesignPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: '/services/website-redesign' },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.title,
    description:
      'Transform your outdated website with a modern redesign. Mobile-responsive, fast-loading, and SEO-safe — preserving your Google rankings while modernizing your brand online.',
    path: '/services/website-redesign',
    serviceType: 'Website Redesign',
  });

  const faqSchema = getFAQSchema(websiteRedesignFAQs);

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
            <Sparkles className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>UI/UX Upgrade</span>
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
              Request Redesign Audit
            </Button>
          </div>
        </ScrollReveal>

        {/* ── SECTION 2: FOCUS AREAS + DELIVERABLES ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-w-0">
          <GlassCard
            variant="default"
            className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
          >
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading break-words">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
              <span>Redesign Focus Areas</span>
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
              <span>Redesign Deliverables</span>
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

        {/* ── SECTION 3: SIGNS YOUR WEBSITE NEEDS A REDESIGN ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Signs Your Website Needs a Redesign
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                If any of these apply to your current website, a redesign will directly improve your
                visitor experience, credibility, and enquiry rate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {signCards.map((card, i) => (
                <div key={i} className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
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

        {/* ── SECTION 4: PROTECTING YOUR SEO DURING REDESIGN ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Protecting Your Search Rankings During Redesign
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                A website redesign done poorly can damage years of SEO progress. We use a structured
                approach to preserve and improve your search rankings:
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] max-w-2xl">
              <ul className="space-y-4">
                {seoProtectionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-[#071A36] leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 5: WHO WE REDESIGN WEBSITES FOR ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Who We Redesign Websites For
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                We work with businesses at different stages — from established companies refreshing
                their brand to growing firms that have outgrown their original website.
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

        {/* ── SECTION 6: FREQUENTLY ASKED QUESTIONS ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                Common questions about our website redesign process, timelines, and how we handle
                SEO during the transition.
              </p>
            </div>

            <div className="space-y-3">
              {websiteRedesignFAQs.map((faq, i) => (
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

        {/* ── SECTION 7: RELATED SERVICES ── */}
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

        {/* ── SECTION 8: CTA ── */}
        <CTASection />
      </div>
    </div>
  );
}
