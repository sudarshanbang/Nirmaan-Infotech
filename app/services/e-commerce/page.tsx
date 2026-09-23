import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData, ecommerceFAQs } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import { ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';
import {
  createMetadata,
  getBreadcrumbSchema,
  getServiceSchema,
  getFAQSchema,
} from '@/lib/seo';

const service = servicesData.find((s) => s.slug === 'e-commerce')!;

export const metadata: Metadata = createMetadata({
  title: 'E-commerce Website Development in Pune | Nirmaan Infotech',
  description:
    'Custom e-commerce stores built for Indian businesses. Razorpay and UPI payment integration, mobile-first checkout, dynamic product catalogs, and admin dashboards.',
  path: '/services/e-commerce',
  keywords: [
    'E-commerce Website Development Pune',
    'Online Store Development India',
    'Razorpay Integration',
    'E-commerce Development Company Pune',
    'Custom Online Store India',
  ],
});

const paymentMethods = [
  'Razorpay — cards, UPI, wallets, and net banking in one integration',
  'UPI (Google Pay, PhonePe, Paytm, BHIM)',
  'Credit and Debit Cards (Visa, Mastercard, RuPay)',
  'Net Banking — all major Indian banks supported',
  'Digital Wallets — Paytm, Amazon Pay, and others',
];

const opportunityCards = [
  {
    title: 'Limited Geographic Reach',
    desc: 'A physical store limits your customers to those nearby. An online store lets you sell across Pune, Maharashtra, and all of India.',
  },
  {
    title: 'Customer Convenience',
    desc: 'Modern customers prefer browsing and buying online. Without an online store, you miss sales happening outside your business hours.',
  },
  {
    title: 'Streamlined Operations',
    desc: 'Online stores with inventory management and order tracking reduce manual work and give you a clearer picture of your business performance.',
  },
];

export default function EcommercePage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: '/services/e-commerce' },
  ]);

  const serviceSchema = getServiceSchema({
    name: service.title,
    description:
      'Custom e-commerce stores built for Indian businesses. Razorpay and UPI payment integration, mobile-first checkout, dynamic product catalogs, and admin dashboards.',
    path: '/services/e-commerce',
    serviceType: 'E-commerce Development',
  });

  const faqSchema = getFAQSchema(ecommerceFAQs);

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

        {/* ── Hero ── */}
        <ScrollReveal className="max-w-3xl min-w-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
            <ShoppingBag className="w-4 h-4 text-[#1677FF] shrink-0" />
            <span>Digital Solution</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#071A36] tracking-[-0.035em] leading-tight mb-4 font-heading break-words max-w-full">
            {service.title}
          </h1>

          <p className="text-base sm:text-lg text-[#64748b] leading-relaxed font-normal break-words">
            {service.fullDesc}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button href="/contact" variant="primary" showArrow className="w-full sm:w-auto text-center justify-center min-h-[44px]">
              Start E-commerce Project
            </Button>
            <Button href="/services" variant="secondary" className="w-full sm:w-auto text-center justify-center min-h-[44px]">
              Explore All Services
            </Button>
          </div>
        </ScrollReveal>

        {/* ── 2-Card Grid: Features & Deliverables ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-w-0">
          <GlassCard variant="default" className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0">
            <h2 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center gap-2 font-heading break-words">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] shrink-0" />
              <span>Store Features &amp; Integrations</span>
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

          <GlassCard variant="default" className="p-6 sm:p-8 bg-[#071A36] text-white border border-white/10 shadow-xl rounded-2xl w-full min-w-0">
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

        {/* ── Why Indian Businesses Are Moving Online ── */}
        <ScrollReveal>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
            Selling Online: What It Means for Your Business
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-8 max-w-2xl">
            Indian consumers are increasingly shopping online — and businesses that do not have an
            online store are already missing orders. Here is what e-commerce addresses for
            businesses at every stage.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {opportunityCards.map((card, i) => (
              <div key={i} className="p-5 rounded-xl border border-[#e2e8f0] bg-[#f8fafc]">
                <div className="w-8 h-8 rounded-lg bg-[#1677FF]/10 flex items-center justify-center mb-3 shrink-0">
                  <ShoppingBag className="w-4 h-4 text-[#1677FF]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#071A36] mb-2 font-heading">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Payment Integration ── */}
        <ScrollReveal>
          <div className="p-6 sm:p-10 rounded-2xl border border-[#e2e8f0] bg-[#f8fafc]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-3">
              Payment Integration for Indian Customers
            </h2>
            <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6 max-w-2xl">
              We integrate the payment methods Indian customers actually use: Razorpay, UPI, credit
              and debit cards, net banking, and digital wallets. Every integration is tested for
              smooth checkout on mobile devices.
            </p>
            <ul className="space-y-3">
              {paymentMethods.map((method, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#071A36] font-medium break-words">{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* ── Who We Build Online Stores For ── */}
        <ScrollReveal>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-2">
            Who We Build Online Stores For
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] leading-relaxed mb-6 max-w-2xl">
            Our e-commerce solutions are well-suited for businesses that sell physical or digital
            products and want a reliable, maintainable online store — without platform lock-in.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.idealFor.map((item, i) => (
              <div key={i} className="p-5 rounded-xl border border-[#e2e8f0] bg-white shadow-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base font-semibold text-[#071A36] break-words">{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── FAQ ── */}
        <ScrollReveal>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {ecommerceFAQs.map((faq, i) => (
              <div key={i} className="p-5 sm:p-6 rounded-xl border border-[#e2e8f0] bg-white shadow-sm">
                <h3 className="text-sm sm:text-base font-bold text-[#071A36] mb-2 font-heading">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Related Services ── */}
        <ScrollReveal>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#071A36] tracking-tight font-heading mb-4">
            Related Services
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/website-development"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
            >
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              Website Development
            </Link>
            <Link
              href="/services/website-maintenance"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
            >
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              Website Maintenance
            </Link>
            <Link
              href="/services/digital-solutions"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e2e8f0] bg-white text-sm font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors min-h-[40px]"
            >
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              Digital Solutions
            </Link>
          </div>
        </ScrollReveal>

        <CTASection />
      </div>
    </div>
  );
}
