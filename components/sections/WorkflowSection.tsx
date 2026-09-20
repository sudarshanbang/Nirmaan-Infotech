'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, useMotionTemplate } from 'framer-motion';
import {
  Search,
  LayoutDashboard,
  CheckSquare,
  Rocket,
  ArrowRight,
  Target,
  ChevronRight,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────
const workflowSteps = [
  {
    number: '01',
    title: 'Discover & Plan',
    goal: 'Turn your business requirements into a clear digital roadmap.',
    points: [
      'Business & audience discovery',
      'Requirement and feature mapping',
      'UX structure and content planning',
      'Technical architecture planning',
    ],
    deliverables: 'Project roadmap, sitemap, feature specification and technical direction.',
    visual: 'discovery' as const,
    accent: '#1677FF',
  },
  {
    number: '02',
    title: 'Design & Build',
    goal: 'Turn the approved strategy into a polished, high-performance experience.',
    points: [
      'Premium responsive UI design',
      'Mobile-first development',
      'Modern React / Next.js implementation',
      'CMS, API and business integrations',
    ],
    deliverables: 'Responsive website, reusable components and integrated functionality.',
    visual: 'design' as const,
    accent: '#1677FF',
  },
  {
    number: '03',
    title: 'Test & Optimize',
    goal: 'Make the digital product reliable, fast and ready for real users.',
    points: [
      'Cross-device quality testing',
      'Performance optimization',
      'SEO and accessibility checks',
      'Security and functionality validation',
    ],
    deliverables: 'Optimized production-ready website with tested user journeys.',
    visual: 'test' as const,
    accent: '#1677FF',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    goal: 'Launch confidently and continuously improve your digital presence.',
    points: [
      'Production deployment',
      'Analytics and tracking setup',
      'Ongoing maintenance and improvements',
      'Conversion and growth optimization',
    ],
    deliverables: 'Live website, analytics foundation and ongoing growth roadmap.',
    visual: 'launch' as const,
    accent: '#1677FF',
  },
];

type VisualType = 'discovery' | 'design' | 'test' | 'launch';

// ─── Visual Illustrations ─────────────────────────────────────────────────────
const WorkflowVisual: React.FC<{ type: VisualType; isActive: boolean }> = ({ type, isActive }) => {
  const baseClass = 'relative w-full h-56 sm:h-64 lg:h-full min-h-[220px] lg:min-h-[280px] rounded-xl bg-[#071A36] border border-white/10 overflow-hidden flex items-center justify-center';

  if (type === 'discovery') {
    return (
      <div className={baseClass}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(22,119,255,0.15)_0%,transparent_60%)]" />
        <div className="relative flex flex-col items-center gap-4">
          {/* Search frame */}
          <motion.div
            animate={isActive ? { x: [0, 8, 0] } : { x: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut', repeat: isActive ? Infinity : 0, repeatDelay: 1 }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-[#1677FF]/30 flex items-center justify-center">
              <Search className="w-8 h-8 text-[#1677FF]" strokeWidth={1.5} />
            </div>
          </motion.div>
          {/* Document lines */}
          <div className="flex flex-col gap-1.5 w-32">
            {[100, 75, 90, 60].map((w, i) => (
              <motion.div
                key={i}
                animate={isActive ? { opacity: [0.3, 0.7, 0.3] } : { opacity: 0.3 }}
                transition={{ duration: 2, delay: i * 0.2, repeat: isActive ? Infinity : 0 }}
                className="h-1.5 rounded-full bg-[#1677FF]/40"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Discovery</div>
        </div>
      </div>
    );
  }

  if (type === 'design') {
    return (
      <div className={baseClass}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(22,119,255,0.12)_0%,transparent_60%)]" />
        <div className="relative flex flex-col items-center gap-3 w-full px-6">
          {/* Connected components diagram */}
          <div className="flex items-center gap-3">
            {[LayoutDashboard, Target, ArrowRight].map((Icon, i) => (
              <div key={i} className="flex items-center gap-2">
                <motion.div
                  animate={isActive ? { opacity: [0.6, 1, 0.6] } : { opacity: 0.6 }}
                  transition={{ duration: 1.8, delay: i * 0.3, repeat: isActive ? Infinity : 0 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-[#1677FF]/20 flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-[#1677FF]" strokeWidth={1.5} />
                </motion.div>
                {i < 2 && (
                  <motion.div
                    animate={isActive ? { scaleX: [0, 1] } : { scaleX: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.4 + 0.5 }}
                    className="w-6 h-[1px] bg-[#1677FF]/40 origin-left"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            {['React', 'Next.js', 'Tailwind'].map((label) => (
              <span key={label} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#1677FF]/10 text-[#1677FF] border border-[#1677FF]/20">
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Design & Build</div>
        </div>
      </div>
    );
  }

  if (type === 'test') {
    return (
      <div className={baseClass}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(22,119,255,0.12)_0%,transparent_60%)]" />
        <div className="relative flex flex-col items-center gap-4">
          <div className="w-24 h-16 rounded-xl bg-white/5 border border-[#1677FF]/20 flex items-center justify-center relative overflow-hidden">
            <CheckSquare className="w-7 h-7 text-[#1677FF]" strokeWidth={1.5} />
          </div>
          {/* PASS / FAIL indicators */}
          <div className="flex gap-3">
            <motion.span
              animate={isActive ? { opacity: [0, 1], y: [6, 0] } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              PASS
            </motion.span>
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-red-500/10 text-red-400/60 border border-red-500/10 line-through">
              FAIL
            </span>
          </div>
          {/* Performance bars */}
          <div className="flex flex-col gap-1 w-28">
            {[95, 88, 100].map((pct, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={isActive ? { width: `${pct}%` } : { width: `${pct}%` }}
                    initial={{ width: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.15 + 0.5 }}
                    className="h-full bg-[#1677FF] rounded-full"
                  />
                </div>
                <span className="text-[9px] font-mono text-white/40">{pct}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Test & Optimize</div>
        </div>
      </div>
    );
  }

  // launch
  return (
    <div className={baseClass}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(22,119,255,0.18)_0%,transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-3">
        <motion.div
          animate={isActive ? { y: [0, -10, 0] } : { y: 0 }}
          transition={{ duration: 2.5, ease: 'easeInOut', repeat: isActive ? Infinity : 0, repeatDelay: 0.5 }}
        >
          <Rocket className="w-12 h-12 text-[#1677FF]" strokeWidth={1.5} />
        </motion.div>
        {/* Growth line */}
        <div className="w-32 h-16 relative">
          <svg viewBox="0 0 128 64" className="w-full h-full" fill="none">
            <motion.path
              d="M 4 56 C 20 56, 30 40, 50 32 S 80 12, 124 8"
              stroke="#1677FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="160"
              animate={isActive ? { strokeDashoffset: [160, 0] } : { strokeDashoffset: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            />
            <circle cx="124" cy="8" r="3" fill="#1677FF" />
          </svg>
        </div>
        <div className="flex gap-2">
          {['Live', 'Analytics', 'Growth'].map((tag) => (
            <span key={tag} className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-[#1677FF]/10 text-[#1677FF] border border-[#1677FF]/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4">
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Launch & Grow</div>
      </div>
    </div>
  );
};

// ─── Individual Stacking Card ─────────────────────────────────────────────────
interface WorkflowCardProps {
  step: (typeof workflowSteps)[0];
  index: number;
  totalCards: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const NAVBAR_H = 72; // px — header height (fixed, py-3 + logo ~64-72px)
const CARD_OFFSET = 20; // px — visual stacking offset per card
const SCROLL_PER_CARD = 0.85; // fraction of container height for each card's active window

const WorkflowCard: React.FC<WorkflowCardProps> = ({ step, index, totalCards, containerRef }) => {
  const shouldReduceMotion = useReducedMotion();
  const isOdd = index % 2 !== 0;

  // Scroll progress over the entire stacking container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Make animation span organically across container scroll
  const start = index / totalCards;
  const end = 1;

  const scale = useTransform(
    scrollYProgress,
    [start, end],
    shouldReduceMotion ? [1, 1] : [1, 0.94]
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    shouldReduceMotion ? [1, 1] : [1, 0.78]
  );
  const brightness = useTransform(
    scrollYProgress,
    [start, end],
    [1, shouldReduceMotion ? 1 : 0.88]
  );
  
  const filter = useMotionTemplate`brightness(${brightness})`;

  const stickyTop = NAVBAR_H + 24 + index * CARD_OFFSET;

  return (
    <motion.div
      style={{
        top: stickyTop,
        zIndex: 10 + index,
        scale,
        opacity,
        filter: shouldReduceMotion ? 'none' : filter,
        transformOrigin: 'top center',
        willChange: 'transform, opacity',
      }}
      className={`sticky w-full ${shouldReduceMotion ? '' : ''}`}
    >
      {/* Card shell — Nirmaan design tokens */}
      <div className="relative bg-white border border-[#e2e8f0] rounded-2xl shadow-[rgba(0,0,0,0.06)_0px_4px_24px_0px] overflow-hidden group hover:shadow-[rgba(0,0,0,0.1)_0px_8px_32px_0px] transition-shadow duration-300">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1677FF] via-[#388EFF] to-[#005CE6]" />

        <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[340px] lg:min-h-[360px]`}>
          {/* Content column — alternates side */}
          <div className={`flex flex-col justify-between p-7 sm:p-9 lg:p-10 ${isOdd ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Top: badge + number */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#f1f5f9] border-2 border-[#e2e8f0] text-[#1677FF] font-mono font-black text-lg tracking-tight shrink-0">
                  {step.number}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full border border-[#e2e8f0]">
                  Step {step.number}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071A36] tracking-[-0.03em] font-heading mb-3 leading-tight">
                {step.title}
              </h3>

              {/* Goal line */}
              <div className="flex items-start gap-2 mb-5">
                <Target className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1677FF] font-semibold leading-snug">{step.goal}</p>
              </div>

              {/* Arrow bullet points */}
              <ul className="space-y-2.5 mb-6">
                {step.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#071A36] font-medium">
                    <ChevronRight className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5 flex-none" />
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider + Deliverables */}
            <div className="border-t border-[#e2e8f0] pt-5">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#071A36] mb-1.5">
                Deliverables
              </p>
              <p className="text-sm text-[#64748b] leading-relaxed font-normal">{step.deliverables}</p>
            </div>
          </div>

          {/* Visual column */}
          <div className={`p-4 sm:p-6 flex items-center ${isOdd ? 'lg:order-1' : 'lg:order-2'}`}>
            <WorkflowVisual type={step.visual} isActive={true} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
export const WorkflowSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative bg-white text-[#071A36] border-b border-[#e2e8f0] z-10 overflow-visible"
      aria-label="How we work"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-32 left-1/4 w-[600px] h-[400px] rounded-full bg-[#1677FF]/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center pt-20 lg:pt-28 pb-14 lg:pb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#f1f5f9] border border-[#e2e8f0] text-[#071A36] mb-5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] animate-pulse" />
            <span>How We Work</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#071A36] tracking-[-0.04em] leading-[1.08] font-heading mb-5">
            One Workflow.{' '}
            <span className="text-[#1677FF]">Four Steps.</span>
            <br className="hidden sm:block" />
            {' '}Measurable Outcomes.
          </h2>

          <p className="text-[17px] sm:text-lg text-[#64748b] leading-[1.65] font-normal max-w-2xl mx-auto">
            Every Nirmaan project follows a structured, transparent workflow — from the first discovery call to post-launch growth. No surprises. No delays. Just results.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div
          ref={containerRef}
          className={`relative pb-12 lg:pb-16`}
        >
          <div className="space-y-12 md:space-y-24">
            {workflowSteps.map((step, index) =>
              shouldReduceMotion ? (
                // Reduced motion: plain vertical layout
                <div key={step.number} className="relative bg-white border border-[#e2e8f0] rounded-2xl shadow-sm overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#1677FF] via-[#388EFF] to-[#005CE6]" />
                  <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[340px]`}>
                    <div className={`flex flex-col justify-between p-7 sm:p-9 lg:p-10 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#f1f5f9] border-2 border-[#e2e8f0] text-[#1677FF] font-mono font-black text-lg">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A36] font-heading mb-3">{step.title}</h3>
                        <div className="flex items-start gap-2 mb-5">
                          <Target className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                          <p className="text-sm text-[#1677FF] font-semibold">{step.goal}</p>
                        </div>
                        <ul className="space-y-2.5 mb-6">
                          {step.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-[#071A36]">
                              <ChevronRight className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t border-[#e2e8f0] pt-5">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#071A36] mb-1.5">Deliverables</p>
                        <p className="text-sm text-[#64748b]">{step.deliverables}</p>
                      </div>
                    </div>
                    <div className={`p-4 sm:p-6 flex items-center ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <WorkflowVisual type={step.visual} isActive={false} />
                    </div>
                  </div>
                </div>
              ) : (
                <WorkflowCard
                  key={step.number}
                  step={step}
                  index={index}
                  totalCards={workflowSteps.length}
                  containerRef={containerRef as React.RefObject<HTMLDivElement>}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
