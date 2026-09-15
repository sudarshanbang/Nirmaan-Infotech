'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { whyNirmaanFeatures } from '@/lib/data';
import { Target, Layers, Zap, Headphones } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-blue-400" />;
      case 'LayoutTheme':
        return <Layers className="w-6 h-6 text-sky-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      default:
        return <Headphones className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-navy-950 text-white z-10 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 border border-blue-500/30 text-blue-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>The Nirmaan Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WHY BUSINESSES CHOOSE <br className="hidden sm:inline" />
            NIRMAAN INFOTECH.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We bridge the gap between creative design, modern web engineering, and real business results.
          </p>
        </ScrollReveal>

        {/* 4 FEATURE BLOCKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyNirmaanFeatures.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1} className="h-full">
              <div className="h-full p-8 rounded-2xl bg-navy-900/90 border border-white/10 hover:border-blue-400/50 shadow-2xl group transition-all">
                <div className="flex items-start gap-5">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all shrink-0">
                    {getIcon(feature.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
