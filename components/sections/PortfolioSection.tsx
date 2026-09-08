'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { portfolioData, PortfolioItem } from '@/lib/data';
import { ArrowRight, Eye, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Business', 'E-commerce', 'Healthcare', 'Real Estate', 'Restaurants', 'Startups'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((p) => p.category === activeCategory);

  return (
    <section className="relative py-20 lg:py-32 bg-slate-100/70 text-slate-900 z-10 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-blue-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Digital Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            EXPLORE OUR <br className="hidden sm:inline" />
            DESIGN & TECH WORK.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Concept projects designed to demonstrate our visual identity standards, mobile responsiveness, and engineering capabilities across diverse business domains.
          </p>
        </ScrollReveal>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:text-blue-600 border border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PORTFOLIO GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  variant="interactive"
                  onClick={() => setSelectedProject(project)}
                  className="h-full flex flex-col justify-between p-0 overflow-hidden group/card bg-white border-slate-200"
                >
                  {/* VISUAL BANNER / ABSTRACT CONTAINER */}
                  <div className="relative h-52 w-full bg-gradient-to-br from-slate-900 via-navy-900 to-slate-950 p-6 flex flex-col justify-between overflow-hidden border-b border-slate-200">
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {project.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/10 text-white border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* ABSTRACT TECH MOCKUP GRAPHIC */}
                    <div className="relative z-10 my-auto text-center space-y-1">
                      <span className="text-xl font-extrabold tracking-wider text-white group-hover/card:scale-105 transition-transform block">
                        {project.title}
                      </span>
                    </div>

                    <div className="flex items-center justify-between z-10 text-[11px] text-slate-300">
                      <span>{project.statsLabel}</span>
                      <span className="text-sky-400 font-bold font-mono">{project.statsValue}</span>
                    </div>

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center z-20">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-lg">
                        <Eye className="w-4 h-4" />
                        <span>View Project Breakdown</span>
                      </div>
                    </div>
                  </div>

                  {/* DETAILS CARD BODY */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover/card:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>Concept Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CONCEPT PROJECT BREAKDOWN MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-2xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden text-slate-900"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
                      {selectedProject.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-bold">{selectedProject.category}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 text-xs font-bold"
                  >
                    Close ✕
                  </button>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{selectedProject.title}</h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">{selectedProject.overview}</p>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <p className="font-bold text-red-700 mb-1 uppercase tracking-wider text-[10px]">The Challenge</p>
                    <p className="text-slate-700">{selectedProject.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                    <p className="font-bold text-emerald-800 mb-1 uppercase tracking-wider text-[10px]">Nirmaan Tech Solution</p>
                    <p className="text-slate-700">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 mb-2">Key Project Architecture Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Request Similar Project Scope
                  </Link>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-slate-500 font-semibold hover:text-slate-800"
                  >
                    Back to portfolio
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
