'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { problemCards } from '@/lib/data';
import { motion } from 'framer-motion';
import { Globe, Clock, Smartphone, UserX, CheckCircle, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const ProblemSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'problem-1':
        return <Globe className="w-5 h-5 text-white transition-colors duration-300" />;
      case 'problem-2':
        return <Clock className="w-5 h-5 text-white transition-colors duration-300" />;
      case 'problem-3':
        return <Smartphone className="w-5 h-5 text-white transition-colors duration-300" />;
      default:
        return <UserX className="w-5 h-5 text-white transition-colors duration-300" />;
    }
  };

  return (
    <section className="relative py-20 sm:py-28 bg-white text-black z-10 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black text-white border border-black mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>Digital Challenges</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black tracking-[-0.035em] leading-none font-heading">
            IS YOUR DIGITAL PRESENCE <br className="hidden sm:inline" />
            HOLDING YOU BACK<span className="text-black">?</span>
          </h2>

          <p className="mt-4 text-[18px] text-slate-600 leading-[1.61] font-normal">
            A weak website costs your business credibility, inquiries, and customer trust every single day. Here is how we engineer the solution.
          </p>
        </ScrollReveal>

        {/* 4 PROBLEM VS SOLUTION CARDS WITH THEME HOVER ANIMATION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {problemCards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 0.1} className="h-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="holographic-card group relative h-full p-5 sm:p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#1677FF] shadow-sm hover:shadow-[0_0_25px_rgba(22,119,255,0.35),0_0_50px_rgba(22,119,255,0.18)] transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* BRAND LIGHT SWEEP OVERLAY */}
                <div className="absolute -top-[150%] -left-[50%] w-[200%] h-[200%] bg-[linear-gradient(135deg,transparent_0%,rgba(22,119,255,0.15)_40%,rgba(22,119,255,0.3)_50%,rgba(22,119,255,0.15)_60%,transparent_100%)] rotate-12 opacity-0 group-hover:opacity-100 group-hover:translate-y-[130%] transition-all duration-700 ease-in-out pointer-events-none z-20" />

                {/* SOLID TOP ACCENT BAR */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#071A36] via-[#1677FF] to-[#071A36] group-hover:from-[#1677FF] group-hover:via-[#388EFF] group-hover:to-[#1677FF] transition-all duration-500" />
                
                {/* CARD HEADER: ICON, TITLE & SOLVED BADGE */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-slate-200 group-hover:border-[#1677FF]/30 transition-colors duration-300">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* ICON BADGE */}
                      <div className="w-10 h-10 rounded-xl bg-[#071A36] border border-[#071A36] group-hover:bg-[#1677FF] group-hover:border-[#1677FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 shadow-md">
                        {getIcon(card.id)}
                      </div>

                      <h3 className="text-lg sm:text-2xl font-extrabold text-black tracking-tight font-heading group-hover:text-[#1677FF] transition-colors duration-300 break-words">
                        {card.title}
                      </h3>
                    </div>

                    {/* FILLED BADGE ON HOVER */}
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-black group-hover:bg-[#1677FF] group-hover:border-[#1677FF] group-hover:text-white text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-sm">
                      <Sparkles className="w-3 h-3 text-black group-hover:text-white transition-colors" />
                      <span>Engineered Fix</span>
                    </div>
                  </div>

                  {/* PROBLEM / CHALLENGE CONTAINER (WHITE BACKGROUND) */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 group-hover:border-[#1677FF]/30 mb-4 transition-all duration-300 shadow-sm">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 group-hover:text-[#1677FF] mb-1.5 transition-colors">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-[1.61] font-normal transition-colors duration-300">
                      {card.impact}
                    </p>
                  </div>
                </div>

                {/* NIRMAAN SOLUTION CONTAINER (SAME WHITE BACKGROUND) */}
                <div className="relative z-10 p-4 sm:p-5 rounded-xl bg-white text-slate-800 border border-slate-200 border-l-[5px] border-l-[#1677FF] group-hover:border-l-[#1677FF] group-hover:border-[#1677FF]/40 shadow-sm transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#071A36] group-hover:text-[#1677FF] transition-colors">
                      <CheckCircle className="w-4 h-4 text-[#1677FF] group-hover:text-[#1677FF] shrink-0 transition-colors" />
                      <span>Nirmaan Solution</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#1677FF] bg-[#1677FF]/10 px-2.5 py-0.5 rounded-full border border-[#1677FF]/20 uppercase font-bold">
                      Guaranteed Scope
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 leading-[1.61] font-normal">
                    {card.solution}
                  </p>
                </div>

              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* BOTTOM ACTION PROMPT WITH THEME HOVER COLOR CHANGE */}
        <div className="mt-12 sm:mt-14 text-center px-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold text-white bg-[#071A36] border border-[#071A36] hover:bg-white hover:text-[#1677FF] hover:border-[#1677FF] hover:shadow-[0_0_30px_rgba(22,119,255,0.4)] transition-all duration-300 group px-5 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-md active:scale-95 max-w-full text-center"
          >
            <span>Let&apos;s fix your digital presence together</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-all duration-300 group-hover:translate-x-1 text-white group-hover:text-[#1677FF]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

