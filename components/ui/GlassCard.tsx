'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'default' | 'glow' | 'subtle' | 'interactive' | 'light';
  className?: string;
  glowColor?: 'blue' | 'cyan' | 'green';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  className,
  glowColor = 'blue',
  ...props
}) => {
  const baseStyles = "relative rounded-2xl transition-all duration-300 overflow-hidden";
  
  const variantStyles = {
    default: "bg-white/80 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/40 shadow-lg hover:shadow-xl text-slate-800",
    glow: "bg-white/90 backdrop-blur-xl border border-blue-500/40 shadow-xl shadow-blue-500/10 text-slate-800",
    subtle: "bg-slate-100/70 backdrop-blur-md border border-slate-200/60 hover:border-slate-300 text-slate-800",
    interactive: "bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 cursor-pointer group text-slate-800",
    light: "bg-white border border-slate-200/80 shadow-md text-slate-800",
  };

  const glowOverlays = {
    blue: "from-blue-500/10 via-transparent to-transparent",
    cyan: "from-cyan-400/10 via-transparent to-transparent",
    green: "from-emerald-500/10 via-transparent to-transparent",
  };

  return (
    <motion.div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {/* Subtle Ambient Radial Light Flare */}
      <div className={cn(
        "absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br rounded-full blur-2xl opacity-40 pointer-events-none group-hover:opacity-70 transition-opacity duration-500",
        glowOverlays[glowColor]
      )} />
      
      {/* Content wrapper */}
      <div className="relative z-10 p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
};
