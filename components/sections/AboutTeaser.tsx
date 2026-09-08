'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Lightbulb, Hammer, TrendingUp, ArrowRight } from 'lucide-react';

export const AboutTeaser: React.FC = () => {
  const nodeSteps = [
    {
      title: "IDEA",
      description: "Understanding your vision, business domain, and target customer needs.",
      icon: <Lightbulb className="w-6 h-6 text-amber-500" />,
      badge: "Concept & Strategy",
    },
    {
      title: "BUILD",
      description: "Engineering clean Next.js React code, modern component UI, and mobile UX.",
      icon: <Hammer className="w-6 h-6 text-blue-600" />,
      badge: "Design & Technology",
    },
    {
      title: "GROW",
      description: "Deploying for search visibility, lead capture, performance, and scaling.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      badge: "Market & Expansion",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-slate-50 text-slate-900 z-10 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT STORY COPY */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-blue-700 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span>About Nirmaan Infotech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              WE BUILD TECHNOLOGY <br className="hidden sm:inline" />
              AROUND YOUR BUSINESS.
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Nirmaan Infotech is a digital technology company focused on helping businesses build a stronger presence online.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              We create professional websites and digital solutions designed around real business needs—not just attractive designs, but digital experiences that are easy to use, mobile-friendly, fast, and built with growth in mind.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              From a new business launching its first website to an established company looking to modernize its digital presence, we work to make technology simple, practical and valuable.
            </p>

            <div className="pt-4">
              <Button href="/about" variant="primary" showArrow className="shadow-lg shadow-blue-500/20">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* RIGHT ANIMATED CONNECTED NODES GRAPHIC */}
          <div className="lg:col-span-6">
            <GlassCard variant="light" className="p-8 border-slate-200 shadow-xl bg-white">
              <div className="text-center mb-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
                  Brand Philosophy Architecture
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">The Nirmaan Growth Engine</h3>
              </div>

              <div className="relative space-y-6">
                {/* Vertical connecting beam */}
                <div className="absolute left-7 top-6 bottom-6 w-1 bg-gradient-to-b from-amber-400 via-blue-500 to-emerald-500 rounded-full opacity-40" />

                {nodeSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative flex items-start gap-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-blue-500/40 transition-all z-10"
                  >
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shrink-0 shadow-md">
                      {step.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-extrabold text-slate-900 tracking-widest font-mono">
                          {step.title}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-600 px-2 py-0.5 rounded bg-white border border-slate-200">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
