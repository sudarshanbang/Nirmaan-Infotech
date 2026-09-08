'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { industriesData } from '@/lib/data';
import { Utensils, Activity, Building2, GraduationCap, HardHat, Store, Briefcase, Rocket, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-5 h-5 text-amber-500" />,
  Activity: <Activity className="w-5 h-5 text-red-500" />,
  Building2: <Building2 className="w-5 h-5 text-blue-600" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-indigo-600" />,
  HardHat: <HardHat className="w-5 h-5 text-orange-500" />,
  Store: <Store className="w-5 h-5 text-emerald-600" />,
  Briefcase: <Briefcase className="w-5 h-5 text-cyan-600" />,
  Rocket: <Rocket className="w-5 h-5 text-purple-600" />,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-slate-100/70 text-slate-900 z-10 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-blue-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tailored Domain Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            BUILT FOR DIFFERENT <br className="hidden sm:inline" />
            TYPES OF BUSINESSES.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Every industry has unique customer workflows, trust expectations, and lead conversion triggers. We build technology tailored to your domain.
          </p>
        </ScrollReveal>

        {/* 8 INDUSTRY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind, index) => (
            <ScrollReveal key={ind.id} delay={index * 0.05}>
              <GlassCard variant="light" className="h-full flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl p-6 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 border border-slate-200">
                      {iconMap[ind.iconName]}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1">
                  {ind.keySolutions.map((sol, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600 font-medium">
                      <Check className="w-3 h-3 text-blue-600 shrink-0" />
                      <span className="truncate">{sol}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
