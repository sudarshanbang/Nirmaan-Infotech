'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { whyNirmaanFeatures } from '@/lib/data';
import { Target, Layers, Zap, Headphones } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [pulsingIndex, setPulsingIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setPulsingIndex(index);
    setTimeout(() => {
      setPulsingIndex(null);
    }, 500);
  };

  const getAccentConfig = (index: number) => {
    switch (index) {
      case 0:
        return {
          gradient: 'from-[#022c43]/10 to-[#06b6d4]/10',
          hoverBorder: 'hover:border-[#06b6d4]',
          iconBg: 'bg-[#06b6d4]/10 text-[#06b6d4] group-hover:bg-[#06b6d4] group-hover:text-white',
          iconColor: '#06b6d4',
          shadowGlow: 'hover:shadow-[0_15px_30px_rgba(6,182,212,0.25)]',
        };
      case 1:
        return {
          gradient: 'from-[#24104f]/10 to-[#7c3aed]/10',
          hoverBorder: 'hover:border-[#7c3aed]',
          iconBg: 'bg-[#7c3aed]/10 text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white',
          iconColor: '#7c3aed',
          shadowGlow: 'hover:shadow-[0_15px_30px_rgba(124,58,237,0.25)]',
        };
      case 2:
        return {
          gradient: 'from-[#5a3d00]/10 to-[#f59e0b]/10',
          hoverBorder: 'hover:border-[#f59e0b]',
          iconBg: 'bg-[#f59e0b]/10 text-[#f59e0b] group-hover:bg-[#f59e0b] group-hover:text-white',
          iconColor: '#f59e0b',
          shadowGlow: 'hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)]',
        };
      default:
        return {
          gradient: 'from-[#004d40]/10 to-[#10b981]/10',
          hoverBorder: 'hover:border-[#10b981]',
          iconBg: 'bg-[#10b981]/10 text-[#10b981] group-hover:bg-[#10b981] group-hover:text-white',
          iconColor: '#10b981',
          shadowGlow: 'hover:shadow-[0_15px_30px_rgba(16,185,129,0.25)]',
        };
    }
  };

  const getIcon = (iconName: string, isPulsing: boolean) => {
    const pulseClass = isPulsing ? 'animate-[pulse_0.5s_ease-in-out_infinite]' : '';

    switch (iconName) {
      case 'Target':
        return <Target className={`w-6 h-6 transition-all duration-500 ease-out ${pulseClass}`} />;
      case 'LayoutTheme':
        return <Layers className={`w-6 h-6 transition-all duration-500 ease-out ${pulseClass}`} />;
      case 'Zap':
        return <Zap className={`w-6 h-6 transition-all duration-500 ease-out ${pulseClass}`} />;
      default:
        return <Headphones className={`w-6 h-6 transition-all duration-500 ease-out ${pulseClass}`} />;
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] border border-[#e2e8f0] text-[#071A36] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
            <span>The Nirmaan Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#071A36] tracking-[-0.035em] leading-none font-heading">
            WHY BUSINESSES CHOOSE <br className="hidden sm:inline" />
            NIRMAAN INFOTECH<span className="text-[#1677FF]">.</span>
          </h2>

          <p className="mt-4 text-[18px] text-[#64748b] leading-[1.61] font-normal">
            We bridge the gap between creative design, modern web engineering, and real business results.
          </p>
        </ScrollReveal>

        {/* 4 FEATURE BLOCKS WITH 3D PERSPECTIVE TILT & PULSE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {whyNirmaanFeatures.map((feature, index) => {
            const config = getAccentConfig(index);
            const isPulsing = pulsingIndex === index;

            return (
              <ScrollReveal key={feature.title} delay={index * 0.1} className="h-full">
                {/* 3D PERSPECTIVE CONTAINER */}
                <div
                  className="btn-3d group h-full relative cursor-pointer [perspective:1000px]"
                  onClick={() => handleCardClick(index)}
                >
                  {/* INNER TILT CONTAINER */}
                  <div
                    className={`inner h-full p-5 sm:p-8 rounded-2xl bg-white border border-[#e2e8f0] ${config.hoverBorder} ${config.shadowGlow} shadow-md transition-all duration-400 ease-[cubic-bezier(0.18,0.9,0.32,1)] group-hover:[transform:rotateX(8deg)_rotateY(-8deg)_translateY(-6px)] active:[transform:translateY(2px)_scale(0.97)] flex flex-col sm:flex-row items-start gap-4 sm:gap-5 relative overflow-hidden`}
                  >
                    {/* ACCENT BACKGROUND GRADIENT ON HOVER */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                    {/* ICON CONTAINER */}
                    <div
                      className={`p-3.5 rounded-xl border border-[#e2e8f0] ${config.iconBg} transition-all duration-300 shrink-0 shadow-sm group-hover:scale-125 group-hover:rotate-12`}
                      style={{
                        filter: isPulsing ? `drop-shadow(0 0 12px ${config.iconColor})` : undefined,
                      }}
                    >
                      {getIcon(feature.iconName, isPulsing)}
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#071A36] mb-2 font-heading transition-colors group-hover:text-[#071A36]">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-[#64748b] leading-[1.61] font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

