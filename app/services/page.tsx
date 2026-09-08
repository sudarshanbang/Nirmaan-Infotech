import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { servicesData } from '@/lib/data';
import { CTASection } from '@/components/sections/CTASection';
import { Globe, ShoppingBag, Sparkles, TrendingUp, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Website Development, E-commerce, SEO & Digital Solutions',
  description: 'Explore Nirmaan Infotech primary technology services: custom web design, e-commerce stores, website redesign, technical SEO, maintenance, and digital solutions.',
};

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-8 h-8 text-electric-400" />,
  ShoppingBag: <ShoppingBag className="w-8 h-8 text-cyanAccent-400" />,
  Sparkles: <Sparkles className="w-8 h-8 text-amber-400" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-growthGreen-400" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-blue-400" />,
  Cpu: <Cpu className="w-8 h-8 text-indigo-400" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO BANNER */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent-400 animate-pulse" />
            <span>Digital Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            ENGINEERED FOR <br />
            GROWTH & PERFORMANCE.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            From modern responsive websites to high-scale e-commerce storefronts and custom business automation, we build digital products tailored to your goals.
          </p>
        </ScrollReveal>

        {/* DETAILED SERVICES LIST */}
        <div className="space-y-12 lg:space-y-16 mb-24">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.05}>
              <GlassCard variant="default" className="p-8 sm:p-10 border-white/10 hover:border-electric-500/40 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-navy-850 border border-white/10">
                        {iconMap[service.iconName]}
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-electric-400 bg-electric-500/10 px-3 py-1 rounded-full border border-electric-500/20">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {service.title}
                    </h2>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="pt-2">
                      <Button href={`/services/${service.slug}`} variant="primary" showArrow>
                        View Full Specs & Scope
                      </Button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-navy-950/60 p-6 rounded-2xl border border-white/10">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-electric-400 mb-3">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-2 text-xs text-gray-300">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-growthGreen-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-cyanAccent-400 mb-3">
                        Deliverables & Tech
                      </h3>
                      <ul className="space-y-2 text-xs text-gray-300 mb-4">
                        {service.deliverables.slice(0, 3).map((del, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent-400 shrink-0 mt-1.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-400 border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <CTASection />
      </div>
    </div>
  );
}
