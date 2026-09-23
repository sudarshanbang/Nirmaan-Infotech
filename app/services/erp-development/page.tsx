import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData, erpFAQs } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import {
  Database,
  ShoppingCart,
  Package,
  Users,
  IndianRupee,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import {
  createMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'erp-development')!;

export const metadata: Metadata = createMetadata({
  title: 'ERP Development Company in Pune | Custom ERP Software | Nirmaan Infotech',
  description:
    'Custom ERP software development in Pune for manufacturing, wholesale, retail, and service businesses. Modular ERP systems covering sales, inventory, HR, finance, and reporting.',
  path: '/services/erp-development',
  keywords: [
    'ERP Development Company Pune',
    'ERP Software Development Pune',
    'Custom ERP Solutions Pune',
    'Business ERP Software India',
    'ERP Development India',
    'Enterprise Resource Planning Pune',
  ],
});

const erpModules = [
  {
    icon: ShoppingCart,
    title: 'Sales & Order Management',
    desc: 'Track customer orders, sales pipelines, quotations, and invoices in one place.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    desc: 'Monitor stock levels, manage warehouses, track product movements, and generate low-stock alerts.',
  },
  {
    icon: Users,
    title: 'HR & Employee Management',
    desc: 'Manage employee records, attendance tracking, leave management, and payroll processing.',
  },
  {
    icon: IndianRupee,
    title: 'Finance & Accounting',
    desc: 'Track income, expenses, accounts payable/receivable, and generate financial reports.',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics Dashboard',
    desc: 'Real-time dashboards showing KPIs, performance metrics, and business trends.',
  },
  {
    icon: ShieldCheck,
    title: 'Role-Based Access Control',
    desc: 'Define which employees can view, edit, or approve data — protecting sensitive business information.',
  },
];

const processSteps = [
  {
    title: 'Discovery & Requirements Mapping',
    desc: 'We document your business processes, data flows, user roles, and reporting needs before any development begins.',
  },
  {
    title: 'System Architecture Design',
    desc: 'We design the database schema, module structure, user interface, and API architecture tailored to your requirements.',
  },
  {
    title: 'Module Development & Integration',
    desc: 'Each ERP module is developed, unit tested, and integrated. You receive progress updates at every milestone.',
  },
  {
    title: 'Testing & User Acceptance',
    desc: 'Your team tests the system with real business scenarios. We refine based on feedback before go-live.',
  },
  {
    title: 'Deployment, Training & Support',
    desc: 'We deploy the ERP to production, train your staff, and provide post-launch support during the transition period.',
  },
];

const relatedServices = [
  { label: 'Software Development', href: '/services/software-development' },
  { label: 'Custom Digital Solutions', href: '/services/digital-solutions' },
  { label: 'Website Development', href: '/services/website-development' },
];

export default function ERPDevelopmentPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'ERP Software Development', path: '/services/erp-development' },
  ]);

  const serviceSchema = getServiceSchema({
    name: 'ERP Software Development',
    description:
      'Custom ERP software development in Pune for manufacturing, wholesale, retail, and service businesses. Modular ERP systems covering sales, inventory, HR, finance, and reporting.',
    path: '/services/erp-development',
    serviceType: 'ERP Software Development',
  });

  const faqSchema = getFAQSchema(erpFAQs);

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
            <Database className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>Enterprise Solutions</span>
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
              Discuss Your ERP Project
            </Button>
            <Button
              href="/services"
              variant="secondary"
              className="w-full sm:w-auto text-center justify-center min-h-[44px]"
            >
              Explore Our Services
            </Button>
          </div>
        </ScrollReveal>

        {/* ── SECTION 2: WHAT IS ERP ── */}
        <ScrollReveal>
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
              What Is ERP Software and When Does Your Business Need It?
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Enterprise Resource Planning (ERP) software connects the different functions of your
              business — sales, inventory, purchasing, HR, and finance — into one integrated system.
              Instead of managing data across multiple spreadsheets, emails, and disconnected tools,
              an ERP gives your team a single source of truth.
            </p>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
              Businesses typically consider an ERP system when manual processes are creating errors,
              when multiple disconnected tools make reporting difficult, or when growth has made
              coordinating between departments harder.
            </p>
          </div>
        </ScrollReveal>

        {/* ── SECTION 3: ERP MODULES GRID ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
              ERP Modules We Develop
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {erpModules.map((mod, i) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <Icon className="w-5 h-5 text-[#1677FF] shrink-0" />
                      <h3 className="text-sm font-bold text-[#071A36]">{mod.title}</h3>
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed">{mod.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 4: CORE CAPABILITIES + DELIVERABLES ── */}
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

        {/* ── SECTION 5: CUSTOM ERP VS OFF-THE-SHELF ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
              Custom ERP vs Off-the-Shelf Software
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Custom ERP */}
              <div className="p-6 rounded-xl border border-[#1677FF]/30 bg-[#f0f7ff]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF] shrink-0" />
                  <h3 className="text-sm font-extrabold text-[#071A36] uppercase tracking-wide">
                    Custom ERP
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Built for your workflows',
                    'Only modules you need',
                    'No licensing fees',
                    'Full source code ownership',
                    'Adapts as your business grows',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#071A36]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Off-the-Shelf */}
              <div className="p-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#94a3b8] shrink-0" />
                  <h3 className="text-sm font-extrabold text-[#64748b] uppercase tracking-wide">
                    Off-the-Shelf Software
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'You adapt to the software',
                    'Pay for unused features',
                    'Ongoing licensing costs',
                    'Limited customization',
                    'Rigid structure',
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full border border-[#cbd5e1] bg-white shrink-0 mt-0.5 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8]" />
                      </span>
                      <span className="text-sm text-[#64748b]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 6: DEVELOPMENT PROCESS ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading">
              How We Build Your ERP System
            </h2>
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1677FF] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071A36] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 7: WHO WE BUILD ERP FOR ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Who We Build ERP Systems For
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                Our ERP solutions are designed for businesses managing real operations — where manual
                processes are creating bottlenecks and growth demands better systems.
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

        {/* ── SECTION 8: FREQUENTLY ASKED QUESTIONS ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                Common questions about ERP development, timelines, and what to expect when building
                a custom ERP system with Nirmaan Infotech.
              </p>
            </div>

            <div className="space-y-3">
              {erpFAQs.map((faq, i) => (
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

        {/* ── SECTION 9: RELATED SERVICES ── */}
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

        {/* ── SECTION 10: CTA ── */}
        <CTASection />
      </div>
    </div>
  );
}
