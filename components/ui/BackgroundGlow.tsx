'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Base Porcelain Overlay */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* 2. Primary Glowing Orb - Top Right */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-400/20 via-sky-300/10 to-transparent blur-[120px] opacity-70"
      />

      {/* 3. Secondary Growth Orb - Left Center */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-400/15 via-blue-500/10 to-transparent blur-[140px] opacity-60"
      />

      {/* 4. Deep Accent Glow - Bottom Right */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-t from-indigo-300/20 via-blue-400/10 to-transparent blur-[150px]"
      />

      {/* 5. Minimal Tech Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0284c712_1px,transparent_1px),linear-gradient(to_bottom,#0284c712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />
    </div>
  );
};
