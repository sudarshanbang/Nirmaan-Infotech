'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const BackgroundGlow: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Base Porcelain Background */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* 2. MOBILE / REDUCED MOTION STATIC GRADIENT OVERLAYS (ZERO GPU LAG) */}
      {isMobile ? (
        <>
          <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full bg-blue-400/15 blur-3xl" />
          <div className="absolute top-1/3 -left-20 w-[280px] h-[280px] rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-20 right-10 w-[350px] h-[350px] rounded-full bg-indigo-300/15 blur-3xl" />
        </>
      ) : (
        /* DESKTOP AMBIENT GLOWS */
        <>
          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-32 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-blue-400/20 via-sky-300/10 to-transparent blur-[100px] opacity-70"
          />

          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/3 -left-48 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-cyan-400/15 via-blue-500/10 to-transparent blur-[120px] opacity-60"
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-indigo-300/20 via-blue-400/10 to-transparent blur-[120px]"
          />
        </>
      )}

      {/* 3. Tech Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0284c712_1px,transparent_1px),linear-gradient(to_bottom,#0284c712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />
    </div>
  );
};
