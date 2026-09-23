import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData, maintenancePlans, maintenanceFAQs } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Wrench,
  TrendingDown,
  Star,
  Users,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import {
  createMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'website-maintenance')!;

export const metadata: Metadata = createMetadata({
  title: 'Website Maintenance Services Pune | Website Care Plans | Nirmaan Infotech',
  description:
    'Professional website maintenance for businesses in Pune. Security updates, daily backups, performance monitoring, content updates, and technical support to keep your website fast and secure.',
  path: '/services/website-maintenance',
  keywords: [
    'Website Maintenance Pune',
    'Website Support Services India',
    'Website Security Updates',
    'Website Care Plans',
    'Website Maintenance Company India',
  ],
});

const riskCards = [
  {
    icon: AlertTriangle,
    title: 'Security Vulnerabilities',
    desc: 'Outdated software frameworks have known security holes. Hackers actively target unpatched websites, which can result in data theft, defacement, or blacklisting by Google.',
  },
  {
    icon: Wrench,
    title: 'Broken Features',
    desc: 'Updates to browsers, operating systems, and third-party services can break existing website functionality. Maintenance catches these issues before your customers notice.',
  },
  {
    icon: TrendingDown,
    title: 'Declining Performance',
    desc: 'Without regular performance tuning, websites gradually slow down. Slower pages rank lower in Google and deliver worse experiences to visitors.',
  },
];

export default function WebsiteMaintenancePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: '/services/website-maintenance' },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.title,
    description:
      'Professional website maintenance for businesses in Pune. Security updates, daily backups, performance monitoring, content updates, and technical support to keep your website fast and secure.',
    path: '/services/website-maintenance',
    serviceType: 'Website Maintenance',
  });

  const faqSchema = getFAQSchema(maintenanceFAQs);

  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-white text-[#071A36] min-h-screen overflow-hidden">
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

      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e6f0f7]/60 blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 min-w-0">

        {/* ── HERO ── */}
        <ScrollReveal className="max-w-3xl min-w-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>Support &amp; Security</span>
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
              Discuss Maintenance Plan
            </Button>
          </div>
        </ScrollReveal>

        {/* ── SCOPE + DELIVERABLES ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-w-0">
          <ScrollReveal>
            <GlassCard
              variant="default"
              className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading break-words">
                <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
                <span>Maintenance &amp; Security Scope</span>
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
          </ScrollReveal>

          <ScrollReveal>
            <GlassCard
              variant="default"
              className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading break-words">
                <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
                <span>Maintenance Deliverables</span>
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
                  Coverage: {service.techStack.join(' • ')}
                </p>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* ── WHAT HAPPENS WITHOUT MAINTENANCE ── */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Risk Without Maintenance</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
                What Happens Without Regular Website Maintenance
              </h2>
              <p className="mt-3 text-[#64748b] text-sm sm:text-base leading-relaxed">
                Websites are not &quot;set and forget&quot; systems. Without consistent upkeep, even a
                well-built website will deteriorate over time — putting your business, reputation,
                and search rankings at risk.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {riskCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] flex flex-col gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#071A36] font-heading">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ── MAINTENANCE PLAN OPTIONS ── */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
                <Star className="w-4 h-4 shrink-0" />
                <span>Care Plans</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
                Maintenance Plan Options
              </h2>
              <p className="mt-3 text-[#64748b] text-sm sm:text-base leading-relaxed">
                Choose the care level that matches your website&apos;s traffic, complexity, and
                support needs. All plans are flexible monthly subscriptions — no long-term
                lock-in.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {maintenancePlans.map((plan) => (
                <GlassCard
                  key={plan.id}
                  variant="default"
                  className={`p-6 sm:p-8 bg-[#071A36] text-white border shadow-xl rounded-2xl w-full min-w-0 flex flex-col gap-5 relative ${
                    plan.isPopular ? 'border-[#1677FF]' : 'border-white/10'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#1677FF] text-white whitespace-nowrap">
                      <Star className="w-3 h-3 shrink-0" />
                      Most Popular
                    </div>
                  )}

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1677FF] mb-1">
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-white">{plan.price}</span>
                      <span className="text-xs text-slate-400">{plan.billing}</span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1677FF] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 break-words">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#1677FF] hover:text-white transition-colors"
                    >
                      Enquire about this plan
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>

            <p className="text-xs text-[#94a3b8] text-center">
              Final pricing is confirmed after reviewing your website&apos;s specific requirements.
              Contact us for a customised quote.
            </p>
          </div>
        </ScrollReveal>

        {/* ── WHO WE SUPPORT ── */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
                <Users className="w-4 h-4 shrink-0" />
                <span>Ideal Clients</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
                Who Our Maintenance Plans Support
              </h2>
              <p className="mt-3 text-[#64748b] text-sm sm:text-base leading-relaxed">
                Our maintenance plans are designed for businesses that want their website to remain
                reliable, fast, and secure — without needing in-house technical expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.idealFor.map((client, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1677FF] shrink-0" />
                  <span className="text-sm font-medium text-[#071A36] break-words">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── FAQ SECTION ── */}
        <ScrollReveal>
          <div className="space-y-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
                <HelpCircle className="w-4 h-4 shrink-0" />
                <span>Common Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4 max-w-3xl">
              {maintenanceFAQs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-xl border border-[#e2e8f0] bg-white shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-bold text-[#071A36] mb-2 font-heading">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── RELATED SERVICES ── */}
        <ScrollReveal>
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8]">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/website-development"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
              >
                Website Development
              </Link>
              <Link
                href="/services/e-commerce"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
              >
                E-commerce Development
              </Link>
              <Link
                href="/services/seo"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
              >
                SEO Services
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <CTASection />
      </div>
    </div>
  );
}
