import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { AboutTeaser } from '@/components/sections/AboutTeaser';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { CTASection } from '@/components/sections/CTASection';
import { createMetadata, getBreadcrumbSchema } from '@/lib/seo';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = createMetadata({
  title: 'About Nirmaan Infotech | Web Development Company in Pune',
  description:
    'Nirmaan Infotech is a Pune-based web development and software company. We build business websites, e-commerce stores, ERP systems, and custom digital solutions for businesses across Maharashtra and India.',
  path: '/about',
  keywords: [
    'About Nirmaan Infotech',
    'Web Development Company Pune',
    'IT Company Pune',
    'Website Development Agency Pune',
    'Software Company Pune',
    'Digital Solutions Pune',
  ],
});

export default function AboutPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ]);

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 space-y-12 w-full max-w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* ABOUT PAGE INTRO — unique content beyond the reused components */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse shrink-0" />
            <span>Pune, Maharashtra, India</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#071A36] tracking-[-0.035em] leading-tight mb-5 font-heading break-words max-w-full">
            About Nirmaan Infotech
          </h1>

          <p className="text-base sm:text-lg text-[#64748b] leading-relaxed font-normal mb-6 break-words">
            Nirmaan Infotech is a web development and software company based in Anandnagar, Pune.
            We work with businesses across Maharashtra and India to build professional websites,
            e-commerce stores, ERP software, and custom digital solutions that help them grow and
            operate more effectively online.
          </p>

          <p className="text-base text-[#64748b] leading-relaxed font-normal mb-8 break-words">
            Our work starts with understanding your business — your customers, your goals, and
            the problems you need solved. From there, we design and build technology that serves
            your actual needs rather than presenting generic solutions.
          </p>

          {/* QUICK CONTACT INFO */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#1677FF] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#1677FF] shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#1677FF] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1677FF] shrink-0" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-[#64748b]">
              <MapPin className="w-4 h-4 text-[#1677FF] shrink-0" />
              <span>{siteConfig.contact.address}</span>
            </span>
          </div>

          {/* SERVICES QUICK LINKS */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-[#071A36] mb-3">Our Services</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Website Development', href: '/services/website-development' },
                { label: 'E-commerce Development', href: '/services/e-commerce' },
                { label: 'ERP Software Development', href: '/services/erp-development' },
                { label: 'Custom Software', href: '/services/software-development' },
                { label: 'Website Redesign', href: '/services/website-redesign' },
                { label: 'SEO Services', href: '/services/seo' },
              ].map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#e2e8f0] bg-white text-xs font-medium text-[#071A36] hover:border-[#1677FF] hover:text-[#1677FF] transition-colors"
                >
                  {s.label}
                  <ArrowRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AboutTeaser isPageHeader={false} />
      <WhyChooseUs />
      <ProcessTimeline />
      <CTASection />
    </div>
  );
}
