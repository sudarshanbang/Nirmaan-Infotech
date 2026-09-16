'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { problemCards } from '@/lib/data';
import { Globe, Clock, Smartphone, UserX, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ProblemSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'problem-1':
        return <Globe className="w-5 h-5 text-red-400" />;
      case 'problem-2':
        return <Clock className="w-5 h-5 text-amber-400" />;
      case 'problem-3':
        return <Smartphone className="w-5 h-5 text-orange-400" />;
      default:
        return <UserX className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-navy-950 text-white z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 border border-red-500/30 text-red-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>Digital Challenges</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            IS YOUR DIGITAL PRESENCE <br className="hidden sm:inline" />
            HOLDING YOU BACK?
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-slate-300 leading-relaxed font-normal">
            A weak website costs your business credibility, inquiries, and customer trust every single day. Here is how we fix it.
          </p>
        </ScrollReveal>

        {/* 4 PROBLEM VS SOLUTION CARDS WITH CLEAN FULL-WIDTH ALIGNMENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {problemCards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 0.1} className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-blue-400/40 shadow-2xl group transition-all flex flex-col justify-between">
                
                {/* CARD HEADER: ICON & TITLE ALIGNED HORIZONTALLY */}
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getIcon(card.id)}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  {/* PROBLEM / CHALLENGE CONTAINER */}
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-4">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-red-400 mb-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed font-normal">
                      {card.impact}
                    </p>
                  </div>
                </div>

                {/* NIRMAAN SOLUTION CONTAINER */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emerald-400 mb-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Nirmaan Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {card.solution}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* BOTTOM ACTION PROMPT */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors group px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40"
          >
            <span>Let&apos;s fix your digital presence together</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
