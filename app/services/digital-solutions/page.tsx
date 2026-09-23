import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData, digitalSolutionsFAQs } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import {
  Cpu,
  CheckCircle2,
  AlertTriangle,
  LayoutDashboard,
  UserCircle2,
  Package,
  Users,
  Workflow,
  Plug,
  ChevronRight,
} from 'lucide-react';
import {
  createMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'digital-solutions')!;

export const metadata: Metadata = createMetadata({
  title: 'Custom Digital Solutions & Business Software Pune | Nirmaan Infotech',
  description:
    'Bespoke digital tools, workflow automation, customer portals, and cloud integrations built for Pune businesses. Purpose-built software that fits your exact operations.',
  path: '/services/digital-solutions',
  keywords: [
    'Custom Digital Solutions Pune',
    'Business Software Development Pune',
    'Workflow Automation India',
    'Custom Portal Development',
    'Business Process Automation Pune',
  ],
});

const problemCards = [
  {
    title: 'Forced Process Changes',
    desc: 'Generic software forces your team to change how they work to fit the tool. Custom solutions are built around your existing workflows.',
  },
  {
    title: 'Paying for Unused Features',
    desc: "Standard software comes loaded with features you'll never need while missing the specific tools that matter most to your operations.",
  },
  {
    title: 'No Competitive Differentiation',
    desc: 'When every competitor uses the same off-the-shelf software, custom tools give your team an operational advantage that others cannot simply purchase.',
  },
];

const solutionTypes = [
  {
    icon: LayoutDashboard,
    label: 'Internal Business Dashboards',
    desc: 'Real-time visibility into your operations, KPIs, and team performance — all in one place.',
  },
  {
    icon: UserCircle2,
    label: 'Customer Self-Service Portals',
    desc: 'Let clients track orders, raise requests, download documents, and manage their accounts independently.',
  },
  {
    icon: Package,
    label: 'Inventory & Order Management Tools',
    desc: 'Track stock, manage purchase orders, and streamline fulfilment across your business.',
  },
  {
    icon: Users,
    label: 'Lead & CRM Management Systems',
    desc: 'Capture, assign, follow up, and convert leads with a system designed around your sales process.',
  },
  {
    icon: Workflow,
    label: 'Workflow Automation Platforms',
    desc: 'Replace repetitive manual steps with automated triggers, notifications, and approvals.',
  },
  {
    icon: Plug,
    label: 'API & Third-Party System Integrations',
    desc: 'Connect your existing tools — WhatsApp, CRMs, payment gateways, accounting software — into one coherent workflow.',
  },
];

export default function DigitalSolutionsPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: '/services/digital-solutions' },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.title,
    description:
      'Bespoke digital tools, workflow automation, customer portals, and cloud integrations built for Pune businesses. Purpose-built software that fits your exact operations.',
    path: '/services/digital-solutions',
    serviceType: 'Digital Solutions & Software Engineering',
  });

  const faqSchema = getFAQSchema(digitalSolutionsFAQs);

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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#e6f0f7]/60 blur-[130px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 min-w-0">

        {/* ── HERO ── */}
        <ScrollReveal className="max-w-3xl min-w-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
            <Cpu className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>Custom Engineering</span>
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
              Discuss Custom Architecture
            </Button>
          </div>
        </ScrollReveal>

        {/* ── SCOPE & DELIVERABLES GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-w-0">
          <GlassCard
            variant="default"
            className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
          >
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading break-words">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
              <span>Custom Solution Scope</span>
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

        {/* ── WHEN OFF-THE-SHELF SOFTWARE HOLDS YOU BACK ── */}
        <ScrollReveal>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
              <AlertTriangle className="w-4 h-4 text-[#1677FF] shrink-0" />
              <span>The Problem</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
              When Off-the-Shelf Software Holds Your Business Back
            </h2>
            <p className="mt-3 text-[#64748b] text-base leading-relaxed max-w-2xl">
              Most businesses start with generic software — until it starts limiting them. Here are the friction points that signal it&apos;s time for a purpose-built solution.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {problemCards.map((card, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] flex flex-col gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#1677FF]/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-[#1677FF]" />
                </div>
                <h3 className="text-base font-bold text-[#071A36] font-heading leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── TYPES OF SOLUTIONS ── */}
        <ScrollReveal>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
              <Cpu className="w-4 h-4 text-[#1677FF] shrink-0" />
              <span>What We Build</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
              Types of Digital Solutions We Develop
            </h2>
            <p className="mt-3 text-[#64748b] text-base leading-relaxed max-w-2xl">
              Every engagement starts with understanding your operations. We then design and build the right tool — not an over-engineered platform, not an under-built workaround.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutionTypes.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] flex flex-col gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1677FF]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#1677FF]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#071A36] font-heading leading-snug">
                    {sol.label}
                  </h3>
                  <p className="text-xs text-[#64748b] leading-relaxed">{sol.desc}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── WHO WE BUILD FOR ── */}
        <ScrollReveal>
          <GlassCard
            variant="default"
            className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
          >
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-2 flex items-center gap-2 font-heading break-words">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
              <span>Who We Build Custom Solutions For</span>
            </h2>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Our custom digital solutions are designed for businesses at growth inflection points — where generic tools are no longer sufficient.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.idealFor.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ChevronRight className="w-4 h-4 text-[#1677FF] shrink-0" />
                  <span className="text-sm text-slate-200 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>

        {/* ── FAQ ── */}
        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-[#64748b] text-base leading-relaxed">
              Common questions about our custom digital solution development process.
            </p>
          </div>
          <div className="space-y-4">
            {digitalSolutionsFAQs.map((faq, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-xl border border-[#e2e8f0] bg-white shadow-sm"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#071A36] mb-2 font-heading leading-snug">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── RELATED SERVICES ── */}
        <ScrollReveal>
          <div className="p-5 sm:p-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#94a3b8] mb-4">
              Related Services
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/erp-development"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
              >
                ERP Development
              </Link>
              <Link
                href="/services/software-development"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
              >
                Software Development
              </Link>
              <Link
                href="/services/website-development"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
              >
                Website Development
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <CTASection />
      </div>
    </div>
  );
}
