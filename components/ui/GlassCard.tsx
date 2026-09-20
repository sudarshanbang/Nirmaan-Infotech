'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'default' | 'glow' | 'subtle' | 'interactive' | 'cobalt' | 'ember' | 'light';
  className?: string;
  glowColor?: 'blue' | 'purple' | 'ember';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'default',
  className,
  glowColor = 'blue',
  ...props
}) => {
  const baseStyles = "relative transition-all duration-300 overflow-hidden";
  
  const variantStyles = {
    default: "bg-white border border-[#e2e8f0] text-[#071A36] rounded-xl shadow-sm",
    glow: "bg-white border border-[#e2e8f0] shadow-md text-[#071A36] rounded-xl",
    subtle: "bg-[#f1f5f9] border border-[#e2e8f0] text-[#64748b] rounded-xl",
    interactive: "bg-white border border-[#e2e8f0] hover:border-[#071A36] hover:bg-[#f1f5f9]/50 shadow-sm hover:shadow-md cursor-pointer group text-[#071A36] rounded-xl",
    cobalt: "bg-[#0B2A5B] border border-white/10 text-white rounded-xl shadow-xl",
    ember: "bg-[#1677FF] border-none text-white rounded-none shadow-none", // Featured Electric Blue Hard Card (0px radius)
    light: "bg-white border border-[#e2e8f0] text-[#071A36] rounded-xl shadow-sm",
  };

  const glowOverlays = {
    blue: "from-[#1677FF]/10 via-transparent to-transparent",
    purple: "from-[#23A9FF]/15 via-transparent to-transparent",
    ember: "from-[#1677FF]/25 via-transparent to-transparent",
  };

  return (
    <motion.div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {/* Hairline Ambient Light Accent */}
      {variant !== 'ember' && (
        <div className={cn(
          "hidden sm:block absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br rounded-full blur-2xl opacity-30 pointer-events-none group-hover:opacity-60 transition-opacity duration-500",
          glowOverlays[glowColor]
        )} />
      )}
      
      {/* Content Container */}
      <div className="relative z-10 p-5 sm:p-6 md:p-7">
        {children}
      </div>
    </motion.div>
  );
};
