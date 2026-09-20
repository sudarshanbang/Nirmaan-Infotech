import React from 'react';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { siteConfig } from '@/lib/config';
import { 
  Sparkles,
  Zap,
  Code2,
  Rocket,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  MessageSquare
} from 'lucide-react';
import { createMetadata, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Contact Nirmaan Infotech | Start Your Web Project',
  description:
    'Get in touch with Nirmaan Infotech in Pune, India. Contact our web development team for consultations, project estimates, or custom digital solution advice.',
  path: '/contact',
  keywords: [
    'Contact Nirmaan Infotech',
    'Web Development Consultation Pune',
    'Hire Web Developers India',
    'Website Project Quote',
  ],
});

export default function ContactPage() {
  const breadcrumbs = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#E6FAF8] via-[#F4FCFB] to-white text-[#071A36] pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {/* BACKGROUND AMBIENT GRAPHICS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft mint/cyan ambient glow at top */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] rounded-full bg-[#00BFA6]/10 blur-[130px]" />
        <div className="absolute top-20 left-10 w-[500px] h-[400px] rounded-full bg-[#00BFA6]/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* CENTERED HEADER (MATCHING REFERENCE IMAGE "Get In Touch") */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#071A36] tracking-tight font-heading">
            Get In Touch
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            We&apos;ll create high-performance web platforms, e-commerce storefronts, and custom digital systems to accelerate your brand&apos;s growth.
          </p>
        </ScrollReveal>

        {/* UNIFIED CONTACT FORM CARD (LEFT INFO PANEL + RIGHT FORM) */}
        <div className="mb-16 sm:mb-24">
          <ContactForm />
        </div>

        {/* SUPPORTING LIFECYCLE & TRUST CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* IDEA -> BUILD -> GROW LIFECYCLE */}
          <div className="lg:col-span-7">
            <GlassCard variant="default" className="h-full bg-white border border-slate-200 shadow-md rounded-2xl p-6 sm:p-8 space-y-4 text-[#071A36]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00BFA6]">
                <Sparkles className="w-4 h-4" />
                <span>Our Engineering Lifecycle</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00BFA6]/15 text-[#00BFA6] border border-[#00BFA6]/30 flex items-center justify-center mx-auto">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-black text-[#071A36]">IDEA</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Discovery & Strategy</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00BFA6]/15 text-[#00BFA6] border border-[#00BFA6]/30 flex items-center justify-center mx-auto">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-black text-[#071A36]">BUILD</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">Clean Next.js Code</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-black text-[#071A36]">GROW</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">SEO & Conversions</div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* TRUST & NDA BADGE */}
          <div className="lg:col-span-5 flex">
            <div className="w-full p-6 sm:p-8 rounded-2xl bg-[#071A36] text-white border border-white/15 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#00BFA6]/20 text-[#00BFA6] border border-[#00BFA6]/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-white font-heading">
                  Transparent, Reliable & NDA Protected
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Every inquiry receives dedicated engineering attention with fixed milestone scoping, zero hidden charges, and complete data confidentiality.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#00BFA6] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00BFA6] animate-pulse" />
                <span>NDA & Client Privacy Guaranteed</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM IMMEDIATE ASSISTANCE CARD */}
        <ScrollReveal>
          <GlassCard variant="default" className="bg-[#071A36] border border-white/20 rounded-3xl shadow-2xl text-center relative overflow-hidden text-white p-8 sm:p-12">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00BFA6]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#00BFA6]/20 border border-[#00BFA6]/40 text-[#00BFA6]">
                NEED IMMEDIATE ASSISTANCE?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight font-heading">
                Prefer a Direct Call or Quick Chat?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Connect directly with our engineering leadership to discuss your custom project requirements, timelines, and strategy.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00BFA6] hover:bg-[#00A58F] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00BFA6] hover:bg-[#00A58F] text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-md transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

      </div>
    </div>
  );
}
