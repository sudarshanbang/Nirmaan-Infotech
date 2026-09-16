'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Monitor, Smartphone, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-navy-950 z-10 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-electric-500/15 border border-electric-500/30 text-electric-400 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-electric-400" />
            <span>Featured Client Case Study</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WE BUILD WEBSITES <br className="hidden sm:inline" />
            THAT DRIVE REAL GROWTH.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A real-world showcase of custom e-commerce engineering, mobile responsiveness, and high-conversion UX.
          </p>
        </ScrollReveal>

        {/* LARGE FEATURED WORK SHOWCASE CARD */}
        <ScrollReveal>
          <GlassCard variant="glow" className="p-6 sm:p-10 border-electric-500/30 bg-navy-900/90 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* LEFT / TOP PROJECT INFO */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* 1. BADGE & CATEGORY */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                    CONCEPT PROJECT
                  </span>
                  <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                    Retail & E-commerce
                  </span>
                </div>

                {/* 2. MAIN HEADING */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  Shri Krishna Grocery Store
                </h3>

                {/* 3. DESCRIPTION */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  A modern e-commerce experience designed to help a local grocery business showcase products, accept orders and connect with customers digitally.
                </p>

                {/* 4. SERVICES & FEATURES DELIVERED */}
                <div className="space-y-3 pt-1">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-electric-400">
                    SERVICES & FEATURES DELIVERED
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'E-commerce Web App',
                      'Next.js & Vercel',
                      'Dynamic Product Search',
                      'Mobile Cart Drawer',
                      'WhatsApp Orders',
                    ].map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-slate-100 shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. INFORMATION ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="block text-slate-400 font-medium">Live Web Application</span>
                    <a
                      href="https://shri-krishna-grocery-store.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-emerald-400 font-bold font-mono hover:underline truncate mt-0.5"
                    >
                      shri-krishna-grocery-store.vercel.app
                    </a>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-medium">Performance</span>
                    <span className="block text-growthGreen-400 font-bold font-mono mt-0.5">100/100 Core Vitals</span>
                  </div>
                </div>

                {/* 6. CTA BUTTONS */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://shri-krishna-grocery-store.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-growthGreen-500 hover:bg-growthGreen-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-growthGreen-500/20 active:scale-95"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Button href="/portfolio" variant="secondary" size="md" className="border-white/20 hover:bg-white/10 text-white font-bold">
                    Explore Full Portfolio
                  </Button>
                </div>
              </div>

              {/* RIGHT / BOTTOM WEBSITE PREVIEW (FITS IN VIEWPORT) */}
              <div className="lg:col-span-6 relative flex items-center justify-center pt-2 lg:pt-0 w-full overflow-hidden">
                
                {/* DESKTOP BROWSER FRAME */}
                <div className="w-full rounded-2xl bg-navy-950 border border-white/20 shadow-2xl overflow-hidden max-w-full">
                  {/* Browser Header */}
                  <div className="bg-navy-900 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 text-[11px] font-mono text-slate-300 border border-white/10 flex items-center gap-2 max-w-[220px] sm:max-w-none truncate mx-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-growthGreen-400 shrink-0" />
                      <span className="truncate">https://shri-krishna-grocery-store.vercel.app</span>
                    </div>
                    <Monitor className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>

                  {/* Browser Screen Simulation Content */}
                  <div className="p-5 sm:p-6 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-950 text-white space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-emerald-400" />
                        <span className="font-extrabold text-xs sm:text-sm tracking-wider">SHRI KRISHNA GROCERY</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-300">
                        <span className="hidden sm:inline">Categories</span>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-500 text-slate-950 font-bold">Cart (3)</span>
                      </div>
                    </div>

                    <div className="py-4 sm:py-6 space-y-3">
                      <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest">Fresh Groceries Online</span>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-white">Daily Essentials Delivered Fast.</h4>
                      <p className="text-xs text-slate-300 max-w-md leading-relaxed">Browse fresh items, organic staples, and daily provisions with instant search and one-click WhatsApp order confirmation.</p>
                      <div className="flex items-center gap-2 sm:gap-3 pt-2">
                        <span className="px-3.5 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs">Browse Products</span>
                        <span className="px-3.5 py-2 rounded-lg bg-white/10 text-white font-semibold text-xs border border-white/10">WhatsApp Order</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* OVERLAY MOBILE SCREEN MOCKUP */}
                <div className="absolute -bottom-4 -right-2 sm:-right-2 w-40 sm:w-48 rounded-2xl bg-navy-950 border-2 border-emerald-500/60 shadow-2xl p-2 hidden sm:block">
                  <div className="w-10 h-1 bg-white/20 rounded-full mx-auto mb-1.5" />
                  <div className="rounded-xl bg-navy-900 p-2.5 space-y-1.5 text-white border border-white/10">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-emerald-400">Mobile Cart</span>
                      <Smartphone className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div className="space-y-1 text-[9px] text-slate-300">
                      <div className="p-1 rounded bg-white/5 border border-white/10 flex justify-between">
                        <span>Fortune Oil 1L</span>
                        <span className="text-growthGreen-400 font-bold">₹145</span>
                      </div>
                      <div className="p-1 rounded bg-white/5 border border-white/10 flex justify-between">
                        <span>Aashirvaad Atta 5kg</span>
                        <span className="text-growthGreen-400 font-bold">₹260</span>
                      </div>
                    </div>
                    <div className="p-1.5 rounded bg-growthGreen-500 text-slate-950 text-[10px] font-bold text-center">
                      Checkout via WhatsApp
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </GlassCard>
        </ScrollReveal>

      </div>
    </section>
  );
};
