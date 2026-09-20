'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { servicesData } from '@/lib/data';
import { ServiceCard } from './ServiceCard';

const ease = [0.22, 1, 0.36, 1] as const;

export const ServicesGrid: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 767px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMobile = () => setIsMobile(mobile.matches);
    const syncMotion = () => setIsReducedMotion(reducedMotion.matches);
    syncMobile(); syncMotion();
    mobile.addEventListener('change', syncMobile);
    reducedMotion.addEventListener('change', syncMotion);
    return () => { mobile.removeEventListener('change', syncMobile); reducedMotion.removeEventListener('change', syncMotion); };
  }, []);

  useEffect(() => {
    if (isMobile || isReducedMotion || isPaused || !isInView) return;
    const timer = window.setTimeout(() => setActiveIndex((current) => (current + 1) % servicesData.length), 3200);
    return () => window.clearTimeout(timer);
  }, [activeIndex, isInView, isMobile, isPaused, isReducedMotion]);

  useEffect(() => () => { if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current); }, []);

  const activate = useCallback((index: number, pause = false) => {
    if (resumeTimerRef.current) { window.clearTimeout(resumeTimerRef.current); resumeTimerRef.current = null; }
    setActiveIndex(index);
    if (pause) setIsPaused(true);
  }, []);

  const resumeRotation = useCallback(() => {
    if (isMobile || isReducedMotion) return;
    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => setIsPaused(false), 2100);
  }, [isMobile, isReducedMotion]);

  return <div ref={containerRef} onMouseLeave={resumeRotation} className="relative">
    <div className="mb-8 hidden items-center justify-center gap-2 lg:flex" aria-label="Choose a service">
      {servicesData.map((service, index) => <button key={service.id} type="button" onClick={() => activate(index, true)} onMouseEnter={() => activate(index, true)} aria-label={`Go to ${service.title}`} aria-current={activeIndex === index ? 'true' : undefined} className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === index ? 'w-8 bg-[#1677FF]' : 'w-2 bg-[#e2e8f0] hover:bg-[#071A36]'}`} />)}
    </div>
    <div className="w-full grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 min-w-0">
      {servicesData.map((service, index) => <motion.div key={service.id}
        className="w-full min-w-0"
        initial={isReducedMotion ? false : { opacity: 0, y: 26, scale: 0.985 }}
        animate={isInView || isReducedMotion ? { opacity: activeIndex === index ? 1 : 0.96, y: 0, scale: 1 } : { opacity: 0, y: 26, scale: 0.985 }}
        transition={{ duration: isReducedMotion ? 0.01 : 0.65, delay: isInView && !isReducedMotion ? index * 0.09 : 0, ease }}
        onMouseEnter={() => !isMobile && activate(index, true)}
      ><ServiceCard service={service} index={index} isActive={activeIndex === index} onActivate={() => activate(index, isMobile)} isReducedMotion={isReducedMotion} /></motion.div>)}
    </div>
  </div>;
};
