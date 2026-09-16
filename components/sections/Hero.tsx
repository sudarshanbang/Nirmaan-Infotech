'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  Globe,
  ShoppingBag,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Sparkles,
  Zap,
  Star,
  Activity,
  Code2,
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden z-10 bg-gradient-to-b from-slate-50 via-white to-blue-50/40 border-b border-slate-200/80">
      {/* Background ambient light flares & subtle grid */}
      <div className="absolute top-10 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyanAccent-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HEADLINE, BADGES, CTAS */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 md:space-y-7 text-left">
            
            {/* LIVE STATUS BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-md shadow-slate-900/5 text-slate-800 text-xs sm:text-sm font-bold"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric-500" />
              </span>
              <span className="text-slate-900">Build. Grow. Go Digital.</span>
              <span className="text-slate-300">|</span>
              <span className="text-electric-600 font-extrabold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 fill-electric-500" /> Premium Tech Agency
              </span>
            </motion.div>

            {/* MAIN EDITORIAL HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] sm:leading-[1.05] text-slate-950"
            >
              ENGINEERING <br />
              <span className="bg-gradient-to-r from-electric-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                HIGH-GROWTH
              </span>{' '}
              <br />
              DIGITAL PRODUCTS.
            </motion.h1>

            {/* SUPPORTING PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal"
            >
              Nirmaan Infotech builds high-performance business websites, online e-commerce stores, custom digital software, and AI automation tailored to accelerate your online business growth.
            </motion.p>

            {/* CALL TO ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-1"
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                showArrow
                className="w-full sm:w-auto shadow-xl shadow-blue-500/25 text-sm sm:text-base font-bold py-3.5 sm:py-4 px-7 rounded-xl"
              >
                Get a Free Consultation
              </Button>
              <Button
                href="/portfolio"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 border-slate-300 font-bold py-3.5 sm:py-4 px-7 rounded-xl shadow-sm"
              >
                Explore Portfolio
              </Button>
            </motion.div>

            {/* TRUST PROOF STATS BAR */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-5 border-t border-slate-200/80 w-full grid grid-cols-3 gap-3"
            >
              <div>
                <p className="text-xl sm:text-3xl font-black text-slate-950 font-mono">150+</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <p className="text-xl sm:text-3xl font-black text-slate-950 font-mono">99.8%</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Client Satisfaction</p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xl sm:text-3xl font-black text-slate-950 font-mono">5.0</span>
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Client Rating</p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: FUTURISTIC INTERACTIVE DASHBOARD CARD SHOWCASE */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
            
            {/* AMBIENT GLOW BACKDROP */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-500/20 via-cyanAccent-400/20 to-indigo-500/10 rounded-3xl blur-2xl opacity-70" />

            {/* ARCHITECTURAL CONTAINER (WHITE CARD) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full rounded-3xl bg-white border border-slate-200 shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden group"
            >
              {/* TOP BROWSER CHROME */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-xs font-mono font-bold text-slate-700 border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-growthGreen-500 animate-pulse" />
                  <span>nirmaaninfotech.com</span>
                </div>
                <Code2 className="w-4 h-4 text-slate-400" />
              </div>

              {/* DASHBOARD CONTENT PREVIEW */}
              <div className="my-4 space-y-3.5">
                
                {/* METRIC GRAPH BANNER */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-xl space-y-3 relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-electric-500/20 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-electric-400 uppercase tracking-wider">
                      Digital Growth Engine
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-growthGreen-500/20 text-growthGreen-400 text-[10px] font-bold font-mono">
                      +240% Conversion
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Monthly Traffic & Leads</p>
                      <p className="text-2xl font-black font-mono text-white">48,920 <span className="text-xs text-growthGreen-400 font-normal">↑ 34.2%</span></p>
                    </div>
                    <Activity className="w-8 h-8 text-electric-400 opacity-80" />
                  </div>

                  {/* MINI GRAPH BARS */}
                  <div className="flex items-end gap-1.5 h-10 pt-2">
                    {[40, 55, 35, 65, 80, 70, 95, 85, 100].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 bg-gradient-to-t from-electric-600 to-cyanAccent-400 rounded-t-sm transition-all"
                      />
                    ))}
                  </div>
                </div>

                {/* TECH STACK CHIPS */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-electric-500/10 text-electric-600">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">0.4s Load Time</p>
                      <p className="text-[10px] text-slate-500 font-mono">Lighthouse 99/100</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-growthGreen-500/10 text-growthGreen-600">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">UPI & Security</p>
                      <p className="text-[10px] text-slate-500 font-mono">Instant Payments</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM FOOTER METRIC */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-electric-500" />
                  <span>Next.js 15 & Cloud SEO Architecture</span>
                </div>
                <span className="text-electric-600 font-bold">Verified Capable</span>
              </div>

              {/* FLOATING CARD 1: WEBSITE DEVELOPMENT (DESKTOP ONLY) */}
              <div
                className="hidden sm:flex absolute top-8 -left-5 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl items-center gap-3 text-xs text-slate-900"
              >
                <div className="p-2 rounded-xl bg-electric-50 text-electric-600 font-bold">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold leading-tight text-slate-900">Custom Websites</p>
                  <p className="text-[10px] text-slate-500 font-medium">Fast & High Converting</p>
                </div>
              </div>

              {/* FLOATING CARD 2: SEO GROWTH (DESKTOP ONLY) */}
              <div
                className="hidden sm:flex absolute top-12 -right-5 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl items-center gap-3 text-xs text-slate-900"
              >
                <div className="p-2 rounded-xl bg-growthGreen-50 text-growthGreen-600 font-bold">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold leading-tight text-slate-900">Google SEO Rank</p>
                  <p className="text-[10px] text-slate-500 font-medium">Page #1 Traffic</p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
