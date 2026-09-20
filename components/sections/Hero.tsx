'use client';

import React from 'react';
import Link from 'next/link';
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
  Terminal,
  Check,
  Code2,
  ArrowRight,
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 flex flex-col justify-center overflow-hidden z-10 bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-white border-b border-[#e2e8f0] w-full max-w-full">
      {/* Background Soft Sky Flare */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc]/80 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-w-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-w-0">
          
          {/* LEFT COLUMN: DISPLAY HEADLINE, EYEBROW, CTAS */}
          <div className="w-full min-w-0 lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8 text-left">
            
            {/* LIVE SYSTEM STATUS EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-[#e2e8f0] text-[#64748b] text-xs sm:text-sm font-mono shadow-sm max-w-full"
            >
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1677FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1677FF]" />
              </span>
              <span className="text-[#071A36] font-bold truncate">Nirmaan® Digital Solutions</span>
              <span className="hidden sm:inline text-[#e2e8f0]">|</span>
              <span className="hidden sm:flex text-[#64748b] font-medium items-center gap-1 truncate">
                <Zap className="w-3.5 h-3.5 text-[#1677FF] shrink-0" /> High-Performance Engineering
              </span>
            </motion.div>

            {/* MAIN DISPLAY HEADLINE WITH SIGNATURE PERIOD */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-bold tracking-[-0.035em] leading-[1.06] sm:leading-[0.98] text-[#071A36] font-heading break-words max-w-full"
            >
              ENGINEERED <br />
              FOR GROWTH<span className="text-[#1677FF]">.</span>
            </motion.h1>

            {/* SUPPORTING EDITORIAL PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-xl text-[#64748b] max-w-2xl leading-[1.61] font-normal"
            >
              Nirmaan Infotech architects high-conversion business websites, bespoke web applications, e-commerce platforms, and scalable digital systems designed for immediate market authority.
            </motion.p>

            {/* CALL TO ACTION PILL BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#1677FF] text-white font-bold text-sm sm:text-base border border-transparent shadow-md transition-all duration-300 hover:bg-white hover:text-[#1677FF] hover:border-[#1677FF] hover:shadow-[0_0_25px_rgba(22,119,255,0.4)] active:scale-95 group text-center min-h-[44px]"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#071A36] font-bold text-sm sm:text-base border border-[#e2e8f0] shadow-sm transition-all duration-300 hover:bg-[#071A36] hover:text-white hover:border-[#071A36] hover:shadow-[0_0_25px_rgba(7,26,54,0.35)] active:scale-95 text-center min-h-[44px]"
              >
                Explore Portfolio
              </Link>
            </motion.div>

            {/* MONO STATS STRIP WITH HAIRLINE DIVIDER */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-6 border-t border-[#e2e8f0] w-full grid grid-cols-3 gap-2 sm:gap-4 min-w-0"
            >
              <div className="min-w-0">
                <p className="text-xl sm:text-3xl font-bold text-[#071A36] font-mono tracking-tight truncate">150+</p>
                <p className="text-[10px] sm:text-xs text-[#64748b] font-normal mt-0.5 leading-tight truncate">Projects Delivered</p>
              </div>
              <div className="min-w-0">
                <p className="text-xl sm:text-3xl font-bold text-[#071A36] font-mono tracking-tight truncate">99.8%</p>
                <p className="text-[10px] sm:text-xs text-[#64748b] font-normal mt-0.5 leading-tight truncate">Satisfaction</p>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="text-xl sm:text-3xl font-bold text-[#071A36] font-mono tracking-tight">5.0</span>
                  <div className="flex text-amber-500 shrink-0">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-500" />
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-500" />
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-500" />
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-[#64748b] font-normal mt-0.5 leading-tight truncate">Verified Rating</p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: NIRMAAN SHOWCASE PANEL */}
          <div className="w-full min-w-0 lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[500px] pt-4 lg:pt-0">
            
            {/* AMBIENT FLOATING FRAME */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full max-w-full min-w-0 rounded-2xl bg-white border border-[#e2e8f0] shadow-xl p-4 sm:p-7 flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              {/* TOP TERMINAL HEADER */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#e2e8f0] gap-2 min-w-0 max-w-full">
                <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#1677FF]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-[#f1f5f9] text-[11px] sm:text-xs font-mono text-[#071A36] border border-[#e2e8f0] min-w-0 max-w-[160px] sm:max-w-none">
                  <Terminal className="w-3.5 h-3.5 text-[#071A36] shrink-0" />
                  <span className="truncate min-w-0">nirmaan-stack.config.ts</span>
                </div>
                <span className="text-[10px] font-mono text-white bg-[#071A36] px-2 sm:px-2.5 py-0.5 rounded-full font-bold shrink-0">
                  v3.0
                </span>
              </div>

              {/* IDE CODE SNIPPET BODY */}
              <div className="my-4 sm:my-5 font-mono text-[11px] sm:text-xs leading-relaxed space-y-2.5 sm:space-y-3 p-3.5 sm:p-4 rounded-xl bg-[#071A36] text-white shadow-inner overflow-x-auto max-w-full min-w-0">
                <div className="text-slate-400 flex items-center justify-between gap-2 min-w-0">
                  <span className="truncate">{"// Nirmaan Infotech Engine"}</span>
                  <span className="text-[#10B981] text-[10px] font-bold uppercase tracking-wider shrink-0">● Live Output</span>
                </div>

                <div className="truncate">
                  <span className="text-[#1677FF]">export const</span>{' '}
                  <span className="text-white font-bold">digitalProduct</span> = {'{'}
                </div>

                <div className="pl-3 sm:pl-4 truncate">
                  <span className="text-slate-400">architecture:</span>{' '}
                  <span className="text-[#23A9FF]">&apos;Next.js 15 App Router&apos;</span>,
                </div>
                <div className="pl-3 sm:pl-4 truncate">
                  <span className="text-slate-400">performance:</span>{' '}
                  <span className="text-[#f5f28e]">&apos;100/100 Core Web Vitals&apos;</span>,
                </div>
                <div className="pl-3 sm:pl-4 truncate">
                  <span className="text-slate-400">conversion:</span>{' '}
                  <span className="text-[#10B981]">&apos;+240% Lead Generation&apos;</span>,
                </div>
                <div className="pl-3 sm:pl-4 truncate">
                  <span className="text-slate-400">security:</span>{' '}
                  <span className="text-white">&apos;Enterprise Grade&apos;</span>,
                </div>

                <div>{'}'};</div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px]">
                  <span className="text-slate-400 truncate">&gt; status: <span className="text-[#10B981] font-bold">READY_TO_DEPLOY</span></span>
                  <span className="text-[#1677FF] font-bold shrink-0 ml-2">0.4s</span>
                </div>
              </div>

              {/* FEATURED ELECTRIC BLUE CARD STRIP */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#1677FF] text-white space-y-1.5 sm:space-y-2 border-none max-w-full min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white/80">FEATURED OFFERING</span>
                  <span className="text-[10px] sm:text-xs font-bold text-white bg-black/20 px-2 py-0.5 rounded-full">Editorial Choice</span>
                </div>
                <p className="text-xs sm:text-sm font-bold leading-snug break-words">
                  Tailored High-Performance Web & E-Commerce Engineering
                </p>
              </div>

              {/* BOTTOM FOOTER METRIC */}
              <div className="pt-3 mt-3 border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b] font-mono">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1677FF]" />
                  <span>Nirmaan Tech Engine</span>
                </div>
                <span className="text-[#071A36] font-bold">Verified Build</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
