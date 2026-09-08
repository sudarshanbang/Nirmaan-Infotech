'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
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
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg group focus:outline-none focus:ring-2 focus:ring-electric-500/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
  
  const variants = {
    primary: "bg-electric-500 hover:bg-electric-600 text-white shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40 border border-electric-400/30",
    secondary: "bg-navy-850 hover:bg-navy-800 text-white border border-white/10 hover:border-electric-500/40 backdrop-blur-md shadow-md",
    outline: "bg-transparent text-white border border-white/20 hover:border-electric-400 hover:bg-electric-500/10",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
    whatsapp: "bg-growthGreen-500 hover:bg-growthGreen-400 text-slate-950 font-semibold shadow-lg shadow-growthGreen-500/20 border border-growthGreen-400/40",
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 space-x-1.5",
    md: "text-sm px-5 py-2.5 space-x-2",
    lg: "text-base px-6 py-3.5 space-x-2.5 font-semibold",
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
