'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { portfolioData, PortfolioItem } from '@/lib/data';
import { ArrowRight, Eye, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioSectionProps {
  isPageHeader?: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ isPageHeader = false }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Business', 'E-commerce', 'Healthcare', 'Real Estate', 'Restaurants', 'Startups'];

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((p) => p.category === activeCategory);

  const HeadingTag = isPageHeader ? 'h1' : 'h2';

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-b border-[#e2e8f0] w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#f1f5f9] border border-[#e2e8f0] text-[#071A36] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse" />
            <span>Digital Portfolio</span>
          </div>

          <HeadingTag className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#071A36] tracking-[-0.035em] leading-tight sm:leading-none font-heading break-words max-w-full">
            EXPLORE OUR <br className="hidden sm:inline" />
            DESIGN & TECH WORK<span className="text-[#1677FF]">.</span>
          </HeadingTag>

          <p className="mt-4 text-sm sm:text-base md:text-[18px] text-[#64748b] leading-[1.61] font-normal">
            Showcasing live client deployments and high-impact technology concept builds across diverse business domains.
          </p>
        </ScrollReveal>

        {/* CATEGORY FILTER TABS (PILL BUTTONS) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#071A36] text-white shadow-md'
                  : 'bg-[#f1f5f9] text-[#64748b] hover:text-[#071A36] hover:bg-[#e2e8f0]/40 border border-[#e2e8f0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PORTFOLIO GRID */}
        <motion.div layout className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-w-0">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <GlassCard
                  variant="interactive"
                  glowColor="blue"
                  onClick={() => setSelectedProject(project)}
                  className="h-full flex flex-col justify-between p-0 overflow-hidden group/card bg-white border-2 border-slate-200 hover:border-[#1677FF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_0_30px_rgba(22,119,255,0.35),0_16px_40px_rgba(22,119,255,0.15)] transition-all duration-300 transform hover:-translate-y-1.5 hover:scale-[1.015] rounded-2xl cursor-pointer"
                >
                  {/* TOP ACCENT GLOW STRIP */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#071A36] via-[#1677FF] to-[#071A36] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-30" />

                  {/* VISUAL BANNER / ABSTRACT CONTAINER */}
                  <div className="relative h-48 w-full bg-[#f1f5f9] group-hover/card:bg-[#1677FF]/5 p-5 flex flex-col justify-between overflow-hidden border-b border-[#e2e8f0] group-hover/card:border-b-[#1677FF]/30 transition-colors duration-300">
                    <div className="flex items-center justify-between z-10">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                        project.liveUrl
                          ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40'
                          : 'bg-[#1677FF] text-white font-bold'
                      }`}>
                        {project.badge}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white text-[#64748b] border border-[#e2e8f0]">
                        {project.category}
                      </span>
                    </div>

                    {/* ABSTRACT TECH MOCKUP GRAPHIC */}
                    <div className="relative z-10 my-auto text-center space-y-1">
                      <span className="text-xl font-bold tracking-tight text-[#071A36] font-heading group-hover/card:scale-105 group-hover/card:text-[#1677FF] transition-all duration-300 block">
                        {project.title}
                      </span>
                    </div>

                    <div className="flex items-center justify-between z-10 text-[11px] text-[#64748b] font-mono font-bold">
                      <span>{project.statsLabel}</span>
                      <span className="text-[#071A36]">{project.statsValue}</span>
                    </div>

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-[#071A36]/85 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#071A36] font-bold text-xs shadow-md">
                        <Eye className="w-4 h-4" />
                        <span>View Project Specs</span>
                      </div>
                    </div>
                  </div>

                  {/* DETAILS CARD BODY */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#071A36] font-heading group-hover/card:text-[#1677FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#64748b] mt-2 leading-[1.61] font-normal">
                        {project.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#e2e8f0] group-hover/card:border-t-[#1677FF]/30 flex items-center justify-between text-xs font-bold text-[#071A36] group-hover/card:text-[#1677FF] transition-colors">
                      <span>{project.liveUrl ? 'Live Application Details' : 'Concept Architecture'}</span>
                      <ArrowRight className="w-4 h-4 text-[#071A36] group-hover/card:text-[#1677FF] group-hover/card:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CONCEPT / LIVE PROJECT BREAKDOWN MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A36]/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-white border border-[#e2e8f0] rounded-2xl p-5 sm:p-8 shadow-2xl text-[#071A36]"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0] mb-6">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                      selectedProject.liveUrl
                        ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40'
                        : 'bg-[#1677FF] text-white font-bold'
                    }`}>
                      {selectedProject.badge}
                    </span>
                    <span className="text-xs text-[#64748b] font-mono font-bold">{selectedProject.category}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-3.5 py-1.5 rounded-full bg-[#f1f5f9] text-[#071A36] hover:bg-[#071A36] hover:text-white text-xs font-mono font-bold border border-[#e2e8f0] transition-colors"
                  >
                    Close ✕
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#071A36] mb-2 font-heading">{selectedProject.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748b] mb-6 leading-[1.61] font-normal">{selectedProject.overview}</p>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0]">
                    <p className="font-mono font-bold text-[#1677FF] mb-1 uppercase tracking-wider text-[10px]">The Challenge</p>
                    <p className="text-[#64748b] font-normal leading-[1.61]">{selectedProject.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#071A36] text-white">
                    <p className="font-mono font-bold text-[#10B981] mb-1 uppercase tracking-wider text-[10px]">Nirmaan Tech Solution</p>
                    <p className="text-white/90 font-normal leading-[1.61]">{selectedProject.solution}</p>
                  </div>

                  <div>
                    <p className="font-mono font-bold text-[#071A36] mb-2 text-xs">Key Architecture Features:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.keyFeatures.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#64748b] font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1677FF] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e2e8f0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                    {selectedProject.liveUrl ? (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#071A36] hover:bg-[#0B2A5B] text-white font-bold text-xs transition-colors shadow-md text-center"
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : null}
                    <Link
                      href="/contact"
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 rounded-full bg-[#1677FF] hover:bg-[#005CE6] text-white font-bold text-xs transition-colors shadow-md text-center"
                    >
                      Request Similar Project
                    </Link>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs text-[#64748b] font-mono font-bold hover:text-[#071A36] text-center sm:text-right py-2"
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
