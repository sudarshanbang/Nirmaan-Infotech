'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 20,
  duration = 0.5,
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // On mobile screens, use lightweight instant animations to maximize performance & responsiveness
  const activeDistance = isMobile ? Math.min(distance, 10) : distance;
  const activeDuration = isMobile ? Math.min(duration, 0.3) : duration;
  const activeDelay = isMobile ? Math.min(delay, 0.1) : delay;

  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: activeDistance, x: 0 };
      case 'down':
        return { y: -activeDistance, x: 0 };
      case 'left':
        return { x: activeDistance, y: 0 };
      case 'right':
        return { x: -activeDistance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: isMobile ? '0px' : '-30px' }}
      transition={{
        duration: activeDuration,
        delay: activeDelay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
