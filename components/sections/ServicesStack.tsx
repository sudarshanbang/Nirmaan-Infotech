'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, MotionValue } from 'framer-motion';
import { Globe, ShoppingBag, Sparkles, TrendingUp, ShieldCheck, Cpu, ChevronRight } from 'lucide-react';
import type { ServiceItem } from '@/lib/data';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-16 h-16 sm:w-20 sm:h-20 text-[#1677FF]" />,
  ShoppingBag: <ShoppingBag className="w-16 h-16 sm:w-20 sm:h-20 text-[#1677FF]" />,
  Sparkles: <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-[#1677FF]" />,
  TrendingUp: <TrendingUp className="w-16 h-16 sm:w-20 sm:h-20 text-[#1677FF]" />,
  ShieldCheck: <ShieldCheck className="w-16 h-16 sm:w-20 sm:h-20 text-[#1677FF]" />,
  Cpu: <Cpu className="w-16 h-16 sm:w-20 sm:h-20 text-[#1677FF]" />,
};

interface ServicesStackProps {
  services: ServiceItem[];
}

export function ServicesStack({ services }: ServicesStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative mb-32" style={{ minHeight: '90vh' }}>
      <div className="space-y-12 md:space-y-16">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            index={index} 
            total={services.length} 
            progress={smoothProgress} 
          />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  total,
  progress,
}: {
  service: ServiceItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const prefersReducedMotion = useReducedMotion();
  const isEven = index % 2 !== 0;
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1024);
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  const start = index / total;
  const end = 1;

  const scale = useTransform(progress, [start, end], [1, 0.94]);
  const opacity = useTransform(progress, [start, end], [1, 0.7]);
  const blur = useTransform(progress, [start, end], [0, 3]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  const topOffset = `${96 + index * 16}px`;
  const filterStyle = prefersReducedMotion || isMobile ? 'none' : filter;

  return (
    <motion.div
      className="relative lg:sticky w-full max-w-[1100px] mx-auto overflow-hidden bg-white/95 backdrop-blur-md rounded-[20px] sm:rounded-[24px] shadow-[0_20px_60px_rgba(15,23,42,0.10)] border border-slate-200 mb-6 sm:mb-8 lg:mb-0"
      style={{
        top: isMobile ? undefined : topOffset,
        zIndex: isMobile ? 1 : index + 10,
        scale: prefersReducedMotion || isMobile ? 1 : scale,
        opacity: prefersReducedMotion || isMobile ? 1 : opacity,
        filter: filterStyle,
        transformOrigin: 'top center',
      }}
    >
      <div className={`flex flex-col-reverse ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} p-2`}>
        {/* TEXT SIDE */}
        <div className="w-full lg:w-[55%] p-6 sm:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1677FF] text-white text-xs font-bold font-mono shadow-md">
              0{index + 1}
            </span>
            <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#071A36] bg-[#f1f5f9] px-3.5 py-1.5 rounded-full border border-slate-200">
              SERVICE 0{index + 1}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#071A36] tracking-tight font-heading mb-4">
            {service.title}
          </h2>

          <div className="flex items-start gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#1677FF] mt-2 shrink-0 shadow-[0_0_8px_rgba(22,119,255,0.6)]" />
            <p className="text-[#1677FF] font-semibold text-sm sm:text-base leading-relaxed">
              Goal: {service.shortDesc}
            </p>
          </div>

          <ul className="space-y-3 mb-8">
            {service.features.slice(0, 4).map((feat, i) => (
              <li key={i} className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#64748b] shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#475569]">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="h-[1px] w-full bg-slate-200 mb-6" />

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748b] font-mono block mb-2">
              DELIVERABLES
            </span>
            <p className="text-xs font-medium text-[#94a3b8] leading-relaxed mb-6">
              {service.deliverables.join(' • ')}
            </p>
            <Link 
              href={`/services/${service.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#1677FF] rounded-full hover:bg-[#005CE6] transition-colors shadow-[0_4px_14px_rgba(22,119,255,0.4)] text-center"
            >
              View Full Specs & Scope
            </Link>
          </div>
        </div>

        {/* IMAGE/ILLUSTRATION SIDE */}
        <div className="w-full lg:w-[45%] bg-[#071A36] rounded-[20px] p-6 sm:p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-inner min-h-[220px] sm:min-h-[280px] lg:min-h-full my-2 lg:m-2">
          {/* Subtle grid background for tech feel */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 flex flex-col items-center justify-center flex-1">
            <div className="relative">
              <div className="absolute inset-0 blur-[40px] rounded-full scale-150 bg-[#1677FF]/40" />
              <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                {iconMap[service.iconName] || <Globe className="w-16 h-16 sm:w-20 sm:h-20 text-[#1677FF]" />}
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full mt-8">
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/5 text-center">
              <span className="text-[10px] font-mono text-[#1677FF] uppercase tracking-wider block mb-2">
                Tech Stack
              </span>
              <div className="flex flex-wrap justify-center gap-1.5">
                {service.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="text-[10px] font-mono font-medium text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
