import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData, softwareDevFAQs } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import {
  Code2,
  Layers,
  Users,
  Zap,
  BarChart3,
  Link2,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import {
  createMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'software-development')!;

export const metadata: Metadata = createMetadata({
  title: 'Custom Software Development Company in Pune | Nirmaan Infotech',
  description:
    'Custom software development in Pune. Purpose-built web applications, admin portals, workflow automation, and business management tools tailored to your exact operations.',
  path: '/services/software-development',
  keywords: [
    'Custom Software Development Pune',
    'Software Development Company Pune',
    'Business Software Development India',
    'Web Application Development Pune',
    'Custom Business Software India',
  ],
});

const problemCards = [
  {
    title: 'Process Compromises',
    desc: 'Off-the-shelf software forces your team to change established processes to fit the tool — reducing efficiency and creating friction.',
  },
  {
    title: 'Excess Licensing Costs',
    desc: 'You pay monthly fees for features your business never needs. Custom software means you only build and pay for what matters.',
  },
  {
    title: 'No Ownership or Control',
    desc: 'When you rely entirely on third-party software, you have no control over future pricing, feature changes, or platform availability.',
  },
];

const softwareTypes = [
  {
    icon: Layers,
    title: 'Business Management Systems',
    desc: 'Centralized tools for managing your operations, team, and resources in one place.',
  },
  {
    icon: Users,
    title: 'Customer Portals & CRM Tools',
    desc: 'Self-service portals and customer management systems that improve service and retention.',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    desc: 'Digitize manual processes — from approvals and notifications to document generation.',
  },
  {
    icon: BarChart3,
    title: 'Admin Dashboards & Reporting',
    desc: 'Role-based dashboards giving your team and management the data they need at a glance.',
  },
  {
    icon: Link2,
    title: 'API & Integration Middleware',
    desc: 'Connect your existing tools, payment systems, and third-party services through custom API integrations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-Ready Web Applications',
    desc: 'All software we build is responsive and accessible from desktop, tablet, and mobile browsers.',
  },
];

const devProcess = [
  {
    step: '01',
    title: 'Requirements Discovery',
    desc: 'We interview your team, map your existing workflow, and document exactly what the software needs to do. This discovery phase prevents scope changes later.',
  },
  {
    step: '02',
    title: 'Architecture & Design',
    desc: 'We design the database structure, application architecture, user interface, and API contracts before writing production code.',
  },
  {
    step: '03',
    title: 'Iterative Development',
    desc: 'We develop in clearly scoped milestones with demonstrations at each checkpoint so you can see and test the software as it progresses.',
  },
  {
    step: '04',
    title: 'Testing & Quality Assurance',
    desc: 'We test the software against your real business scenarios, user roles, and edge cases before delivery.',
  },
  {
    step: '05',
    title: 'Deployment & Handover',
    desc: 'We deploy the application, provide your team with documentation and training, and support you through the initial go-live period.',
  },
];

const relatedServices = [
  { label: 'ERP Development', href: '/services/erp-development' },
  { label: 'Custom Digital Solutions', href: '/services/digital-solutions' },
  { label: 'Website Development', href: '/services/website-development' },
];

export default function SoftwareDevelopmentPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Custom Software Development', path: '/services/software-development' },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.title,
    description:
      'Custom software development in Pune. Purpose-built web applications, admin portals, workflow automation, and business management tools tailored to your exact operations.',
    path: '/services/software-development',
    serviceType: 'Custom Software Development',
  });

  const faqSchema = getFAQSchema(softwareDevFAQs);

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
            <Code2 className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>Bespoke Engineering</span>
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
              Discuss Your Software Project
            </Button>
            <Button
              href="/services"
              variant="secondary"
              className="w-full sm:w-auto text-center justify-center min-h-[44px]"
            >
              View All Services
            </Button>
          </div>
        </ScrollReveal>

        {/* ── SECTION 2: WHEN GENERIC TOOLS ARE NOT ENOUGH ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                When Generic Tools Are Not Enough
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                Every business operates differently. The specific way your team processes orders,
                handles enquiries, tracks inventory, or manages customer relationships is unique to
                you. Generic software is built for the average business — meaning it either forces
                you to adapt your workflow to the software, or you pay for features you&apos;ll
                never use.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {problemCards.map((card, i) => (
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

        {/* ── SECTION 3: TYPES OF SOFTWARE WE DEVELOP ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Types of Software We Develop
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                We build web-based software applications that run in any browser — no installs
                required. Here are the most common categories of software we develop for businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {softwareTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <div key={i} className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1677FF]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#1677FF]" />
                      </div>
                      <h3 className="text-sm font-bold text-[#071A36] leading-snug">
                        {type.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed">{type.desc}</p>
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

        {/* ── SECTION 5: DEVELOPMENT PROCESS ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Our Software Development Process
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                A structured, milestone-driven approach that keeps you informed and in control
                throughout every phase of development.
              </p>
            </div>

            <div className="space-y-4">
              {devProcess.map((step, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-5 sm:p-6 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]"
                >
                  <div className="w-10 h-10 rounded-full bg-[#071A36] text-white flex items-center justify-center text-xs font-black shrink-0">
                    {step.step}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-[#071A36] mb-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ── SECTION 6: SOURCE CODE OWNERSHIP ── */}
        <ScrollReveal>
          <GlassCard
            variant="default"
            className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0"
          >
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-3 flex items-center gap-2 font-heading break-words">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
              <span>You Own the Source Code</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Unlike SaaS platforms that lock you into monthly fees, custom software we develop for
              you becomes your property. Upon final project delivery and payment, you receive the
              complete source code, database architecture, and all project files. There are no
              ongoing licensing fees and no vendor lock-in.
            </p>
          </GlassCard>
        </ScrollReveal>

        {/* ── SECTION 7: WHO WE BUILD SOFTWARE FOR ── */}
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
                Who We Build Software For
              </h2>
              <p className="text-sm sm:text-base text-[#64748b] leading-relaxed max-w-2xl">
                We work with businesses at different stages that have outgrown generic tools or need
                purpose-built solutions to operate more effectively.
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
                Common questions about custom software development, timelines, ownership, and what
                to expect from the process.
              </p>
            </div>

            <div className="space-y-3">
              {softwareDevFAQs.map((faq, i) => (
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
