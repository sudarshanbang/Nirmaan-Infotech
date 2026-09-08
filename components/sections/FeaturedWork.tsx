'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Monitor, Smartphone, Utensils, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-navy-950/90 z-10 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-electric-500/10 border border-electric-500/20 text-electric-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-growthGreen-400 animate-pulse" />
            <span>Featured Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WE BUILD WEBSITES <br className="hidden sm:inline" />
            PEOPLE REMEMBER.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            A glimpse into how we structure user interfaces, mobile responsiveness, and high-conversion layouts.
          </p>
        </ScrollReveal>

        {/* LARGE FEATURED WORK SHOWCASE CARD */}
        <ScrollReveal>
          <GlassCard variant="glow" className="p-6 sm:p-10 border-electric-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT PROJECT INFO */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 border border-amber-500/40 text-amber-300">
                    CONCEPT PROJECT
                  </span>
                  <span className="text-xs font-medium text-gray-400">
                    Hospitality & Dining
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Spice & Wood Culinary Experience
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  An immersive modern culinary website built for fine-dining venues featuring an instant interactive menu, online table reservation, and one-tap WhatsApp booking triggers.
                </p>

                {/* SERVICES TAGS */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-electric-400">
                    Services Delivered
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['UI/UX Design', 'Next.js Frontend', 'Mobile Optimization', 'WhatsApp Triggers', 'SEO Ready'].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* HIGHLIGHT SPECS */}
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
                  <div>
                    <span className="block text-gray-400 font-medium">Target Screen</span>
                    <span className="block text-white font-bold font-mono">320px - 1920px+</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 font-medium">Load Performance</span>
                    <span className="block text-growthGreen-400 font-bold font-mono">100/100 Core Vitals</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button href="/portfolio" variant="primary" showArrow>
                    Explore Full Portfolio
                  </Button>
                </div>
              </div>

              {/* RIGHT VISUAL BROWSER & MOBILE FRAME MOCKUP */}
              <div className="lg:col-span-7 relative flex items-center justify-center pt-4 lg:pt-0">
                
                {/* DESKTOP BROWSER FRAME */}
                <div className="w-full rounded-2xl bg-navy-950 border border-white/20 shadow-2xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-navy-900 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="px-4 py-1 rounded-full bg-white/5 text-[11px] font-mono text-gray-400 border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-growthGreen-400" />
                      <span>https://spiceandwood-concept.nirmaan.digital</span>
                    </div>
                    <Monitor className="w-4 h-4 text-gray-500" />
                  </div>

                  {/* Browser Screen Simulation Content */}
                  <div className="p-6 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-950 text-white space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-amber-400" />
                        <span className="font-extrabold text-sm tracking-wider">SPICE & WOOD</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-300">
                        <span>Menu</span>
                        <span>Reservations</span>
                        <span className="px-3 py-1 rounded-md bg-electric-500 text-white font-bold">Book Table</span>
                      </div>
                    </div>

                    <div className="py-6 space-y-3">
                      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">Fine Dining Redefined</span>
                      <h4 className="text-2xl sm:text-3xl font-extrabold text-white">Authentic Flavors, Modern Ambience.</h4>
                      <p className="text-xs text-gray-300 max-w-md">Experience handcrafted culinary excellence with online table reservations and instant WhatsApp menu delivery.</p>
                      <div className="flex items-center gap-3 pt-2">
                        <span className="px-4 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs">Explore Menu</span>
                        <span className="px-4 py-2 rounded-lg bg-white/10 text-white font-semibold text-xs border border-white/10">Reserve Table</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* OVERLAY MOBILE SCREEN MOCKUP */}
                <div className="absolute -bottom-6 -right-2 sm:-right-4 w-44 sm:w-52 rounded-2xl bg-navy-950 border-2 border-electric-500/60 shadow-glow-electric p-2.5 hidden sm:block">
                  <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-2" />
                  <div className="rounded-xl bg-navy-900 p-3 space-y-2 text-white border border-white/10">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold text-amber-400">Mobile Menu</span>
                      <Smartphone className="w-3 h-3 text-electric-400" />
                    </div>
                    <div className="space-y-1 text-[9px] text-gray-300">
                      <div className="p-1.5 rounded bg-white/5 border border-white/10 flex justify-between">
                        <span>Chef Special</span>
                        <span className="text-growthGreen-400 font-bold">₹599</span>
                      </div>
                      <div className="p-1.5 rounded bg-white/5 border border-white/10 flex justify-between">
                        <span>Tandoori Platter</span>
                        <span className="text-growthGreen-400 font-bold">₹749</span>
                      </div>
                    </div>
                    <div className="p-1.5 rounded bg-growthGreen-500 text-slate-950 text-[10px] font-bold text-center">
                      1-Tap WhatsApp Booking
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
