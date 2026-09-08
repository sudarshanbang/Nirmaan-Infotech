'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  darkBg?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  darkBg = false,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={cn('flex flex-col max-w-3xl mb-12 md:mb-16', alignmentClasses[align], className)}
    >
      {badge && (
        <div className={cn(
          "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md border",
          darkBg
            ? "bg-electric-500/10 border-electric-500/30 text-electric-400"
            : "bg-blue-50 border-blue-200/80 text-blue-600 font-bold"
        )}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]",
          darkBg ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal max-w-2xl",
            darkBg ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
