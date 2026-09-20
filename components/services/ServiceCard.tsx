'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ServiceItem } from '@/lib/data';
import { Globe, ShoppingBag, Sparkles, TrendingUp, ShieldCheck, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-5 h-5" />, ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />, TrendingUp: <TrendingUp className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />, Cpu: <Cpu className="w-5 h-5" />,
};
const techTagsMap: Record<string, string[]> = {
  'website-development': ['Next.js 15', 'Tailwind CSS', 'Mobile First', 'High Speed'],
  'e-commerce': ['Razorpay/UPI', 'Inventory Sync', 'Custom Cart', 'Fast Checkout'],
  'website-redesign': ['UX Audit', 'Mobile Refresh', 'Conversion Boost', '0 Downtime'],
  seo: ['Technical SEO', 'Schema Markup', 'Google Search', 'Rank #1'],
  'website-maintenance': ['24/7 Uptime', 'Security Patch', 'Daily Backup', 'Core Updates'],
  'digital-solutions': ['Business Automation', 'Internal Tools', 'AI Workflows', 'Custom Portals'],
};
interface ServiceCardProps { service: ServiceItem; index: number; isActive: boolean; onActivate: () => void; isReducedMotion?: boolean; }
const ease = [0.22, 1, 0.36, 1] as const;

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isActive, onActivate, isReducedMotion = false }) => {
  const tags = techTagsMap[service.slug] || ['Custom Tech', 'Scalable', 'High Speed'];
  const icon = iconMap[service.iconName] || <Globe className="w-5 h-5" />;
  const reveal = (delay = 0) => ({ duration: isReducedMotion ? 0.01 : 0.42, delay: isActive && !isReducedMotion ? delay : 0, ease });

  return <motion.article
    layout={!isReducedMotion}
    onClick={onActivate}
    onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onActivate(); } }}
    tabIndex={0} role="button" aria-expanded={isActive}
    aria-label={`${service.title} — ${isActive ? 'active' : 'select service'}`}
    initial={false}
    animate={{ y: isActive ? -5 : 0, scale: isActive ? 1.008 : 1, backgroundColor: isActive ? 'rgba(22, 119, 255, 0.07)' : '#ffffff', borderColor: isActive ? '#1677FF' : '#e2e8f0', boxShadow: isActive ? '0 20px 45px rgba(22, 119, 255, 0.16), 0 0 25px rgba(22, 119, 255, 0.10)' : '0 2px 8px rgba(7, 26, 54, 0.04)' }}
    transition={{ duration: isReducedMotion ? 0.01 : 0.72, ease }}
    className="relative flex min-h-[256px] w-full max-w-full min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border-2 p-5 sm:p-8 text-[#071A36] outline-none focus-visible:ring-2 focus-visible:ring-[#1677FF] focus-visible:ring-offset-4 md:h-[620px] md:min-h-0"
  >
    {/* AMBIENT TRANSLUCENT BLUE GLOW ACCENT */}
    <motion.div animate={{ opacity: isActive ? 1 : 0 }} transition={{ duration: isReducedMotion ? 0.01 : 0.5 }} className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#1677FF]/10 blur-3xl" />

    <div className="relative z-10 flex items-center justify-between">
      <motion.div animate={{ scale: isActive ? 1.05 : 1, rotate: isActive ? 2 : 0, backgroundColor: isActive ? '#1677FF' : '#f1f5f9', borderColor: isActive ? '#1677FF' : '#e2e8f0', color: isActive ? '#ffffff' : '#1677FF' }} transition={{ duration: isReducedMotion ? 0.01 : 0.45, ease }} className="flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm">{icon}</motion.div>
      <motion.span animate={{ backgroundColor: isActive ? 'rgba(22, 119, 255, 0.12)' : '#f1f5f9', borderColor: isActive ? 'rgba(22, 119, 255, 0.3)' : '#e2e8f0', color: isActive ? '#1677FF' : '#64748b' }} transition={{ duration: isReducedMotion ? 0.01 : 0.45, ease }} className="rounded-full border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider">Solution {String(index + 1).padStart(2, '0')}</motion.span>
    </div>
    <div className="relative z-10 mt-5">
      <motion.h3 animate={{ color: '#071A36', y: isActive ? 0 : 2 }} transition={reveal(0.06)} className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight break-words max-w-full">{service.title}</motion.h3>
      <motion.p animate={{ color: isActive ? '#475569' : '#64748b', y: isActive ? 0 : 2 }} transition={reveal(0.12)} className="mt-3 max-w-full text-xs sm:text-sm md:text-base leading-[1.55] break-words">{isActive ? service.fullDesc : service.shortDesc}</motion.p>
    </div>
    <motion.div initial={false} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : -10, clipPath: isActive ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)', marginTop: isActive ? 18 : 0 }} transition={{ duration: isReducedMotion ? 0.01 : 0.48, delay: isActive && !isReducedMotion ? 0.18 : 0, ease }} aria-hidden={!isActive} className="relative z-10 pointer-events-none hidden md:block">
      <ul className="space-y-2.5">{service.features.slice(0, 4).map((feature, featureIndex) => <motion.li key={feature} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 7 }} transition={reveal(0.25 + featureIndex * 0.06)} className="flex items-start gap-2.5 text-sm font-semibold text-[#071A36]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1677FF]" /><span className="leading-tight">{feature}</span></motion.li>)}</ul>
      <div className="mt-5 flex flex-wrap gap-1.5">{tags.map((tag, tagIndex) => <motion.span key={tag} animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 5 }} transition={reveal(0.38 + tagIndex * 0.04)} className="rounded-full border border-[#1677FF]/25 bg-[#1677FF]/10 px-3 py-1 font-mono text-[11px] font-bold text-[#1677FF]">{tag}</motion.span>)}</div>
    </motion.div>
    <AnimatePresence initial={false}>
      {isActive && <motion.div key="mobile-details" initial={{ opacity: 0, height: 0, y: -8 }} animate={{ opacity: 1, height: 'auto', y: 0 }} exit={{ opacity: 0, height: 0, y: -8 }} transition={{ duration: isReducedMotion ? 0.01 : 0.42, delay: isReducedMotion ? 0 : 0.16, ease }} className="relative z-10 overflow-hidden md:hidden">
        <ul className="mt-5 space-y-2.5">{service.features.slice(0, 4).map((feature, featureIndex) => <motion.li key={feature} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={reveal(0.22 + featureIndex * 0.06)} className="flex items-start gap-2.5 text-sm font-semibold text-[#071A36]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1677FF]" /><span className="leading-tight">{feature}</span></motion.li>)}</ul>
        <div className="mt-5 flex flex-wrap gap-1.5">{tags.map((tag, tagIndex) => <motion.span key={tag} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={reveal(0.36 + tagIndex * 0.04)} className="rounded-full border border-[#1677FF]/25 bg-[#1677FF]/10 px-3 py-1 font-mono text-[11px] font-bold text-[#1677FF]">{tag}</motion.span>)}</div>
      </motion.div>}
    </AnimatePresence>
    <div className="relative z-10 mt-auto pt-5">
      <motion.div animate={{ scaleX: isActive ? 1 : 0.38, backgroundColor: isActive ? 'rgba(22, 119, 255, 0.25)' : '#e2e8f0' }} transition={{ duration: isReducedMotion ? 0.01 : 0.46, delay: isActive && !isReducedMotion ? 0.42 : 0, ease }} className="mb-4 h-px origin-left" />
      <motion.div animate={{ opacity: 1, y: isActive ? 0 : 2, color: isActive ? '#1677FF' : '#071A36' }} transition={reveal(0.48)} className="flex items-center justify-between text-sm font-bold">
        <Link href={`/services/${service.slug}`} onClick={(event) => event.stopPropagation()} className="group/link inline-flex items-center gap-2 text-[#071A36] hover:text-[#1677FF] transition-colors"><span>{isActive ? 'Explore Premium Scope' : 'View Scope'}</span><ArrowRight className="h-4 w-4 text-[#1677FF] transition-transform duration-300 group-hover/link:translate-x-1" /></Link>
        <motion.span animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 6 }} transition={reveal(0.5)} className="hidden rounded-full border border-[#1677FF]/30 bg-[#1677FF]/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#1677FF] lg:block">Active</motion.span>
      </motion.div>
    </div>
  </motion.article>;
};
