'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Lightbulb, Hammer, TrendingUp, ArrowRight } from 'lucide-react';

interface AboutTeaserProps {
  isPageHeader?: boolean;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ isPageHeader = false }) => {
  const HeadingTag = isPageHeader ? 'h1' : 'h2';

  const nodeSteps = [
    {
      title: "IDEA",
      description: "Understanding your vision, business domain, and target customer needs.",
      icon: <Lightbulb className="w-6 h-6 text-[#1677FF]" />,
      badge: "Concept & Strategy",
    },
    {
      title: "BUILD",
      description: "Engineering clean Next.js React code, modern component UI, and mobile UX.",
      icon: <Hammer className="w-6 h-6 text-[#1677FF]" />,
      badge: "Design & Technology",
    },
    {
      title: "GROW",
      description: "Deploying for search visibility, lead capture, performance, and scaling.",
      icon: <TrendingUp className="w-6 h-6 text-[#1677FF]" />,
      badge: "Market & Expansion",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT STORY COPY */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] border border-[#e2e8f0] text-[#071A36] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
              <span>About Nirmaan Infotech</span>
            </div>

            <HeadingTag className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#071A36] tracking-[-0.035em] leading-none font-heading">
              WE BUILD TECHNOLOGY <br className="hidden sm:inline" />
              AROUND YOUR BUSINESS<span className="text-[#1677FF]">.</span>
            </HeadingTag>

            <p className="text-[18px] text-[#64748b] leading-[1.61] font-normal">
              Nirmaan Infotech is a digital technology company focused on helping businesses build a stronger presence online.
            </p>

            <p className="text-[18px] text-[#64748b] leading-[1.61] font-normal">
              We create professional websites and digital solutions designed around real business needs—not just attractive designs, but digital experiences that are easy to use, mobile-friendly, fast, and built with growth in mind.
            </p>

            <p className="text-[18px] text-[#64748b] leading-[1.61] font-normal">
              From a new business launching its first website to an established company looking to modernize its digital presence, we work to make technology simple, practical and valuable.
            </p>

            <div className="pt-4">
              <Button href="/about" variant="primary" showArrow className="w-full sm:w-auto px-8 py-4 text-base justify-center">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* RIGHT ANIMATED CONNECTED NODES GRAPHIC */}
          <div className="lg:col-span-6">
            <div className="p-5 sm:p-8 border border-[#e2e8f0] shadow-lg rounded-2xl bg-white">
              <div className="text-center mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#1677FF] block mb-1">
                  Brand Philosophy Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#071A36]">The Nirmaan Growth Engine</h3>
              </div>

              <div className="relative space-y-6">
                {/* Vertical connecting beam */}
                <div className="absolute left-7 top-6 bottom-6 w-1 bg-[#e2e8f0] rounded-full" />

                {nodeSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0] hover:border-[#071A36] transition-all z-10"
                  >
                    <div className="p-2.5 sm:p-3 rounded-full bg-white border border-[#e2e8f0] shrink-0 shadow-sm">
                      {step.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <span className="text-lg sm:text-xl font-bold text-[#071A36] tracking-widest font-mono">
                          {step.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-[#64748b] px-3 py-1 rounded-full bg-white border border-[#e2e8f0]">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#64748b] mt-1.5 leading-[1.61] font-normal">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
