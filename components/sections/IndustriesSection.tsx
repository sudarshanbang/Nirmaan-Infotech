import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { industriesData } from '@/lib/data';
import { Utensils, Activity, Building2, GraduationCap, HardHat, Store, Briefcase, Rocket, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Utensils: <Utensils className="w-5 h-5 text-[#1677FF] group-hover:text-white transition-colors" />,
  Activity: <Activity className="w-5 h-5 text-[#1677FF] group-hover:text-white transition-colors" />,
  Building2: <Building2 className="w-5 h-5 text-[#1677FF] group-hover:text-white transition-colors" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#1677FF] group-hover:text-white transition-colors" />,
  HardHat: <HardHat className="w-5 h-5 text-[#1677FF] group-hover:text-white transition-colors" />,
  Store: <Store className="w-5 h-5 text-[#1677FF] group-hover:text-white transition-colors" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#1677FF] group-hover:text-white transition-colors" />,
  Rocket: <Rocket className="w-5 h-5 text-[#1677FF] group-hover:text-white transition-colors" />,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-b border-[#e2e8f0] w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#1677FF] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-pulse" />
            <span>Tailored Domain Expertise</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#071A36] tracking-tight leading-tight font-heading break-words max-w-full">
            BUILT FOR DIFFERENT <br className="hidden sm:inline" />
            TYPES OF BUSINESSES<span className="text-[#1677FF]">.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#64748b] leading-relaxed font-normal">
            Every industry has unique customer workflows, trust expectations, and lead conversion triggers. We build technology tailored to your domain.
          </p>
        </ScrollReveal>

        {/* 8 INDUSTRY CARDS GRID WITH SVG GLOW BORDER SWEEP */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-w-0">
          {industriesData.map((ind, index) => (
            <ScrollReveal key={ind.id} delay={index * 0.05} className="w-full min-w-0">
              <div className="glow group relative h-full rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#1677FF] transition-all p-5 sm:p-6 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:shadow-[#1677FF]/10 overflow-hidden w-full max-w-full min-w-0">
                {/* SVG GLOW BORDER SWEEP CONTAINER */}
                <svg className="glow-container pointer-events-none absolute -top-5 -left-5 w-[calc(100%+40px)] h-[calc(100%+40px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <rect
                    pathLength={100}
                    strokeLinecap="round"
                    rx="16"
                    className="glow-blur fill-none stroke-[#23A9FF] stroke-[8px] [filter:blur(8px)] [stroke-dasharray:20_30] group-hover:[stroke-dashoffset:-80px] transition-all duration-1000 ease-in-out"
                    x="20"
                    y="20"
                    width="calc(100% - 40px)"
                    height="calc(100% - 40px)"
                  />
                  <rect
                    pathLength={100}
                    strokeLinecap="round"
                    rx="16"
                    className="glow-line fill-none stroke-[#1677FF] stroke-[2.5px] [stroke-dasharray:20_30] group-hover:[stroke-dashoffset:-80px] transition-all duration-1000 ease-in-out"
                    x="20"
                    y="20"
                    width="calc(100% - 40px)"
                    height="calc(100% - 40px)"
                  />
                </svg>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0] group-hover:bg-[#1677FF] group-hover:border-[#1677FF] transition-all duration-300">
                      {iconMap[ind.iconName]}
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1677FF] bg-[#f1f5f9] px-2.5 py-1 rounded-full border border-[#e2e8f0] group-hover:bg-[#1677FF]/10 transition-colors">
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#071A36] mb-2 font-heading group-hover:text-[#1677FF] transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-[#64748b] leading-relaxed mb-4 font-normal">
                    {ind.description}
                  </p>
                </div>

                <div className="relative z-10 pt-3 border-t border-[#e2e8f0]/60 space-y-1.5">
                  {ind.keySolutions.map((sol, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#071A36] font-medium">
                      <Check className="w-3 h-3 text-[#1677FF] shrink-0" />
                      <span className="truncate">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

