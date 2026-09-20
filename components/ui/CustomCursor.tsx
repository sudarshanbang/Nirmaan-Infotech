'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const springConfigRing = { damping: 28, stiffness: 320, mass: 0.5 };
  const springConfigDot = { damping: 35, stiffness: 450, mass: 0.15 };

  const ringX = useSpring(rawX, springConfigRing);
  const ringY = useSpring(rawY, springConfigRing);
  const dotX = useSpring(rawX, springConfigDot);
  const dotY = useSpring(rawY, springConfigDot);

  useEffect(() => {
    // Strictly disable on touch screens, tablets, or devices without fine pointer
    if (
      typeof window === 'undefined' ||
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      window.innerWidth < 1024
    ) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    let hasHovered = false;

    const onMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      const hoverCheck = !!(
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.hasAttribute('data-cursor'))
      );

      if (hoverCheck !== hasHovered) {
        hasHovered = hoverCheck;
        setIsHovered(hoverCheck);
      }

      setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [rawX, rawY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden lg:block">
      {/* Precision Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#388EFF]/60 pointer-events-none mix-blend-screen"
        style={{
          x: ringX,
          y: ringY,
          translateX: isHovered ? -24 : -12,
          translateY: isHovered ? -24 : -12,
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          backgroundColor: isHovered ? 'rgba(22, 119, 255, 0.15)' : 'rgba(22, 119, 255, 0)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />

      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#23A9FF] pointer-events-none shadow-[0_0_10px_rgba(35,169,255,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: -4,
          translateY: -4,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      />
    </div>
  );
};
