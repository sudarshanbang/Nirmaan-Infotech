'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device is touch or mobile (<768px)
    const touchCheck = 
      window.matchMedia('(pointer: coarse)').matches ||
      window.innerWidth < 768 ||
      'ontouchstart' in window;

    if (touchCheck) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    let lastX = -100;
    let lastY = -100;
    let hoverState = false;

    const onMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      const target = e.target as HTMLElement | null;
      hoverState = !!(
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.hasAttribute('data-cursor'))
      );

      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          setMousePosition({ x: lastX, y: lastY });
          setIsHovered(hoverState);
          if (!isVisible) setIsVisible(true);
          rafRef.current = null;
        });
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Precision Outer Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-electric-400/60 pointer-events-none mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 12),
          y: mousePosition.y - (isHovered ? 24 : 12),
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          backgroundColor: isHovered ? 'rgba(22, 119, 255, 0.15)' : 'rgba(22, 119, 255, 0)',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      {/* Center Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyanAccent-400 pointer-events-none shadow-glow-cyan"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 400,
          mass: 0.2,
        }}
      />
    </div>
  );
};
