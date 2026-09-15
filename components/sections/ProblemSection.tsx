'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { problemCards } from '@/lib/data';
import { Globe, Clock, Smartphone, UserX, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const ProblemSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'problem-1':
        return <Globe className="w-6 h-6 text-red-400" />;
      case 'problem-2':
        return <Clock className="w-6 h-6 text-amber-400" />;
      case 'problem-3':
        return <Smartphone className="w-6 h-6 text-orange-400" />;
      default:
        return <UserX className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-navy-950 text-white z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 border border-red-500/30 text-red-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            <span>Digital Challenges</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            IS YOUR DIGITAL PRESENCE <br className="hidden sm:inline" />
            HOLDING YOU BACK?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A weak website costs your business credibility, inquiries, and customer trust every single day. Here is how we fix it.
          </p>
        </ScrollReveal>

        {/* 4 PROBLEM VS SOLUTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemCards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 0.1} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-blue-400/50 shadow-2xl group transition-all flex flex-col justify-between">
                <div className="flex-1 flex flex-col justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform shrink-0">
                      {getIcon(card.id)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-red-300 font-medium mt-1 leading-relaxed">
                        Problem: {card.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                      Nirmaan Solution
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {card.solution}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* BOTTOM ACTION PROMPT */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>Let&apos;s fix your digital presence together</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
