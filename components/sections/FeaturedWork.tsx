import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { Monitor, Smartphone, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';

export const FeaturedWork: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-t border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] border border-[#e2e8f0] text-[#071A36] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
            <span>Featured Client Case Study</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#071A36] tracking-[-0.035em] leading-none font-heading">
            WE BUILD WEBSITES <br className="hidden sm:inline" />
            THAT DRIVE REAL GROWTH<span className="text-[#1677FF]">.</span>
          </h2>

          <p className="mt-4 text-[18px] text-[#64748b] leading-[1.61] font-normal">
            A real-world showcase of custom e-commerce engineering, mobile responsiveness, and high-conversion UX.
          </p>
        </ScrollReveal>

        {/* LARGE FEATURED WORK SHOWCASE CARD */}
        <ScrollReveal>
          <div className="p-7 sm:p-12 border border-[#e2e8f0] bg-white rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* LEFT / TOP PROJECT INFO */}
              <div className="lg:col-span-6 space-y-6">
                
                {/* 1. BADGE & CATEGORY */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#1677FF] text-white">
                    FEATURED PROJECT
                  </span>
                  <span className="text-xs font-mono font-bold text-[#64748b] tracking-wide uppercase">
                    Retail & E-commerce
                  </span>
                </div>

                {/* 2. MAIN HEADING */}
                <h3 className="text-3xl sm:text-4xl font-bold text-[#071A36] leading-tight font-heading">
                  Shri Krishna Grocery Store
                </h3>

                {/* 3. DESCRIPTION */}
                <p className="text-[18px] text-[#64748b] leading-[1.61] font-normal">
                  A modern e-commerce experience designed to help a local grocery business showcase products, accept orders and connect with customers digitally.
                </p>

                {/* 4. SERVICES & FEATURES DELIVERED */}
                <div className="space-y-3 pt-1">
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#071A36]">
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
                        className="px-3 py-1.5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0] text-xs font-mono font-bold text-[#071A36]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 5. INFORMATION ROW */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e2e8f0] text-xs font-mono">
                  <div>
                    <span className="block text-[#64748b] font-medium">Live Web Application</span>
                    <a
                      href="https://shri-krishna-grocery-store.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[#1677FF] font-bold hover:underline truncate mt-0.5"
                    >
                      shri-krishna-grocery-store.vercel.app
                    </a>
                  </div>
                  <div>
                    <span className="block text-[#64748b] font-medium">Performance</span>
                    <span className="block text-[#071A36] font-bold mt-0.5">100/100 Core Vitals</span>
                  </div>
                </div>

                {/* 6. CTA BUTTONS */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://shri-krishna-grocery-store.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#071A36] hover:bg-[#0B2A5B] text-white font-bold text-sm transition-all shadow-md"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <Button href="/portfolio" variant="secondary" size="md">
                    Explore Full Portfolio
                  </Button>
                </div>
              </div>

              {/* RIGHT / BOTTOM WEBSITE PREVIEW */}
              <div className="lg:col-span-6 relative flex items-center justify-center pt-2 lg:pt-0 w-full overflow-hidden">
                
                {/* DESKTOP BROWSER FRAME */}
                <div className="w-full rounded-2xl bg-white border border-[#e2e8f0] shadow-xl overflow-hidden max-w-full">
                  {/* Browser Header */}
                  <div className="bg-[#f1f5f9] px-4 py-3 border-b border-[#e2e8f0] flex items-center justify-between">
                    <div className="flex items-center space-x-2 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-[#1677FF]" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white text-[11px] font-mono text-[#071A36] border border-[#e2e8f0] flex items-center gap-2 max-w-[220px] sm:max-w-none truncate mx-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                      <span className="truncate">https://shri-krishna-grocery-store.vercel.app</span>
                    </div>
                    <Monitor className="w-4 h-4 text-[#64748b] shrink-0" />
                  </div>

                  {/* Browser Screen Simulation Content */}
                  <div className="p-6 sm:p-7 bg-white text-[#071A36] space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0]">
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5 text-[#1677FF]" />
                        <span className="font-bold text-xs sm:text-sm tracking-wider font-mono">SHRI KRISHNA GROCERY</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-[#64748b]">
                        <span className="hidden sm:inline font-mono">Categories</span>
                        <span className="px-3 py-1 rounded-full bg-[#071A36] text-white font-bold">Cart (3)</span>
                      </div>
                    </div>

                    <div className="py-4 sm:py-6 space-y-3">
                      <span className="text-[11px] font-mono text-[#1677FF] uppercase tracking-widest font-bold">Fresh Groceries Online</span>
                      <h4 className="text-xl sm:text-2xl font-bold text-[#071A36] font-heading">Daily Essentials Delivered Fast.</h4>
                      <p className="text-sm text-[#64748b] max-w-md leading-[1.61] font-normal">Browse fresh items, organic staples, and daily provisions with instant search and one-click WhatsApp order confirmation.</p>
                      <div className="flex items-center gap-2 sm:gap-3 pt-2">
                        <span className="px-5 py-2.5 rounded-full bg-[#071A36] text-white font-bold text-xs">Browse Products</span>
                        <span className="px-5 py-2.5 rounded-full bg-[#f1f5f9] text-[#071A36] font-bold text-xs border border-[#e2e8f0]">WhatsApp Order</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
