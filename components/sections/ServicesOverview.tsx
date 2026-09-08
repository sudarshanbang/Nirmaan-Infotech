'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { servicesData } from '@/lib/data';
import { Globe, ShoppingBag, Sparkles, TrendingUp, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-6 h-6 text-electric-500" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-cyanAccent-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-growthGreen-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-500" />,
  Cpu: <Cpu className="w-6 h-6 text-indigo-500" />,
};

const techTagsMap: Record<string, string[]> = {
  'website-development': ['Next.js 15', 'Tailwind CSS', 'Mobile First', 'High Speed'],
  'e-commerce': ['Razorpay/UPI', 'Inventory Sync', 'Custom Cart', 'Fast Checkout'],
  'website-redesign': ['UX Audit', 'Mobile Refresh', 'Conversion Boost', '0 Downtime'],
  'seo': ['Technical SEO', 'Schema Markup', 'Google Search', 'Rank #1'],
  'website-maintenance': ['24/7 Uptime', 'Security Patch', 'Daily Backup', 'Core Updates'],
  'digital-solutions': ['Business Automation', 'Internal Tools', 'AI Workflows', 'Custom Portals'],
};

export const ServicesOverview: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-36 bg-slate-50 text-slate-900 z-10 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-electric-500/10 border border-electric-500/20 text-electric-600 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-electric-500 animate-pulse" />
            <span>Primary Digital Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 tracking-tight leading-none">
            ENGINEERED FOR <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-electric-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              DIGITAL DOMINANCE.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are establishing a premium brand presence, launching an online store, or automating business workflows, we build modern technology tailored for growth.
          </p>
        </ScrollReveal>

        {/* BENTO GRID OF SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const tags = techTagsMap[service.slug] || ['Custom Tech', 'Scalable', 'High Speed'];

            return (
              <ScrollReveal key={service.id} delay={index * 0.08}>
                <Link href={`/services/${service.slug}`} className="block h-full group focus:outline-none">
                  <GlassCard
                    variant="interactive"
                    className="h-full flex flex-col justify-between p-8 border-slate-200/90 group-hover:border-electric-500/50 bg-white/95 shadow-lg shadow-slate-900/5 group-hover:shadow-xl group-hover:shadow-electric-500/10 transition-all rounded-3xl"
                  >
                    <div>
                      {/* TOP BAR: ICON & CAPABILITY TAG */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 group-hover:bg-electric-500/10 group-hover:border-electric-500/30 transition-colors">
                          {iconMap[service.iconName] || <Globe className="w-6 h-6 text-electric-500" />}
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                          Solution 0{index + 1}
                        </span>
                      </div>

                      {/* TITLE */}
                      <h3 className="text-2xl font-extrabold text-slate-950 mb-3 group-hover:text-electric-600 transition-colors">
                        {service.title}
                      </h3>

                      {/* SHORT DESCRIPTION */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                        {service.shortDesc}
                      </p>

                      {/* KEY DELIVERABLES */}
                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-electric-500 shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* TECH TAGS */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-6">
                        {tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-mono font-bold border border-slate-200/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM ACTION */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-electric-600 group-hover:text-electric-700 transition-colors">
                      <span>View Specifications & Pricing</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
