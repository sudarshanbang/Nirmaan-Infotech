'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'ember' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  external = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full group focus:outline-none focus:ring-2 focus:ring-[#1677FF]/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    // Nirmaan Primary: Deep Navy Filled Pill (#071A36)
    primary: "bg-[#071A36] hover:bg-[#0B2A5B] text-white font-bold rounded-full tracking-tight transition-all duration-300 shadow-sm",
    
    // Nirmaan Electric Blue Action Pill (#1677FF)
    ember: "bg-[#1677FF] hover:bg-[#005CE6] text-white font-bold rounded-full tracking-tight transition-all duration-300 shadow-sm",
    
    // Nirmaan Secondary: White Card Pill with Hairline Slate Border (#e2e8f0)
    secondary: "bg-white hover:bg-[#f1f5f9] text-[#071A36] border border-[#e2e8f0] font-semibold rounded-full shadow-sm",
    
    // Hairline Border Pill
    outline: "bg-transparent text-[#071A36] border border-[#e2e8f0] hover:border-[#071A36] hover:bg-[#071A36]/5 rounded-full",
    
    // Ghost Pill
    ghost: "bg-transparent text-[#64748b] hover:text-[#071A36] hover:bg-[#071A36]/5 rounded-full",

    // Accent Pill
    accent: "bg-[#071A36] hover:bg-[#1677FF] text-white font-bold rounded-full transition-colors duration-300",

    // Direct WhatsApp Pill
    whatsapp: "bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-full shadow-md border border-[#10B981]/40",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 space-x-1.5",
    md: "text-sm px-5 py-2.5 space-x-2",
    lg: "text-sm sm:text-base px-6 py-3.5 space-x-2.5 font-semibold",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};
