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
  Globe: <Globe className="w-7 h-7 text-[#1677FF]" />,
  ShoppingBag: <ShoppingBag className="w-7 h-7 text-cyan-500" />,
  Sparkles: <Sparkles className="w-7 h-7 text-amber-500" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-emerald-500" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-blue-600" />,
  Cpu: <Cpu className="w-7 h-7 text-indigo-500" />,
};

export default function ServicesPage() {
  return (
    <div className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-[#F7F9FC] text-slate-900 min-h-screen overflow-hidden">
      {/* Subtle Blue-Gray Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(22,119,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,119,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />

      {/* Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* HERO BANNER */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1677FF]/[0.06] border border-[#1677FF]/30 text-[#1677FF] mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
            <span>Digital Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#071A36] tracking-tight leading-[1.1] uppercase">
            ENGINEERED FOR <br />
            <span className="bg-gradient-to-r from-[#071A36] via-[#1677FF] to-cyan-600 bg-clip-text text-transparent">
              GROWTH & PERFORMANCE.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#4B607A] leading-relaxed font-medium max-w-2xl mx-auto">
            From modern responsive websites to high-scale e-commerce storefronts and custom business automation, we build digital products tailored to your goals.
          </p>
        </ScrollReveal>

        {/* DETAILED SERVICES LIST */}
        <div className="space-y-12 lg:space-y-16 mb-24">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.05}>
              <GlassCard variant="light" className="p-6 sm:p-10 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  
                  {/* LEFT COLUMN: SERVICE INFO (LIGHT BACKGROUND, DARK TEXT) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100/80 shadow-sm shrink-0">
                        {iconMap[service.iconName] || <Globe className="w-7 h-7 text-[#1677FF]" />}
                      </div>
                      <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-[#1677FF] bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-sm">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#071A36] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#4B607A] leading-relaxed font-normal">
                      {service.fullDesc}
                    </p>

                    <div className="pt-2">
                      <Button href={`/services/${service.slug}`} variant="primary" showArrow className="px-5 py-2.5 text-xs font-bold rounded-xl shadow-md shadow-blue-500/15">
                        View Full Specs & Scope
                      </Button>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: KEY CAPABILITIES PANEL (DARK NAVY BACKGROUND) */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#071A36] p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl text-white">
                    {/* CAPABILITIES */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#1677FF] mb-3 flex items-center gap-1.5">
                        <span>KEY CAPABILITIES</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs text-[#EAF2FF]">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-snug font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DELIVERABLES & TECH */}
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
                        <span>DELIVERABLES & TECH</span>
                      </h3>
                      <ul className="space-y-2.5 text-xs text-[#B9C7DA] mb-4">
                        {service.deliverables.slice(0, 3).map((del, i) => (
                          <li key={i} className="flex items-start gap-2.5 leading-snug font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>

                      {/* TECH TAGS */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {service.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[#DCE8F8] border border-white/[0.12] text-[10px] font-mono hover:bg-white/[0.14] hover:border-white/[0.25] transition-colors"
                          >
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
