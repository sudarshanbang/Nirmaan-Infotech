import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-white" aria-hidden="true">
      {/* 1. Base Pale Canvas */}
      <div className="absolute inset-0 bg-white" />

      {/* 2. ATMOSPHERIC PALE SKY GRADIENT SYSTEM */}
      {/* Mobile: Static Lightweight Sky Glow */}
      <div className="md:hidden absolute -top-32 left-0 right-0 h-[400px] bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc]/60 to-transparent" />

      {/* Desktop: Smooth Atmospheric Sky Gradient & Ambient Aura */}
      <div className="hidden md:block absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc]/70 to-transparent" />
      <div className="hidden md:block absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(22,119,255,0.05)_0%,rgba(255,255,255,0)_70%)] blur-3xl pointer-events-none" />

      {/* 3. Hairline Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_80%,transparent_100%)] opacity-40" 
      />
    </div>
  );
};
