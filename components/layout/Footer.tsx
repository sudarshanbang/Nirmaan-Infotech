'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/config';
import { servicesData } from '@/lib/data';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#071A36] border-t border-white/10 pt-20 pb-24 md:pb-12 overflow-hidden z-10 text-white">
      {/* AMBIENT AURORA GLOW BLOBS (DESKTOP ONLY FOR 60FPS MOBILE PERFORMANCE) */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1677FF]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="hidden md:block absolute top-10 left-[-100px] w-[400px] h-[400px] bg-[#005CE6]/10 rounded-full blur-[80px] pointer-events-none" />

      {/* TOP GLOWING BORDER ACCENT LINE */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1677FF] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP CTA CALLOUT CARD INSIDE FOOTER WITH WHITE & TRANSPARENT FROSTED GLASS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 p-8 sm:p-10 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 hover:bg-white/[0.14] shadow-2xl hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] transition-all duration-500 overflow-hidden group"
        >
          {/* Subtle white overlay sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider mb-3 group-hover:scale-105 transition-transform">
                <Sparkles className="w-3.5 h-3.5 text-[#1677FF] animate-pulse" />
                <span>Start Your Digital Journey</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight group-hover:text-white transition-colors">
                Ready to build something extraordinary?
              </h3>
              <p className="text-slate-200 text-sm sm:text-base mt-1 font-normal max-w-xl">
                Let&apos;s engineer a high-performance website or digital product that drives real business growth.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#1677FF] text-white font-bold text-sm hover:bg-white hover:text-[#1677FF] transition-all shadow-lg shadow-[#1677FF]/30 hover:shadow-[0_0_30px_rgba(22,119,255,0.4)] shrink-0 group/btn"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* 5-COLUMN MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* COLUMN 1 & 2: BRAND & STORY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <Link href="/" className="inline-block focus:outline-none group">
              <div className="relative h-11 w-52 sm:h-12 sm:w-60 transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(22,119,255,0.4)]">
                <Image
                  src="/images/logo/logo-light.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-base leading-relaxed max-w-md font-normal">
              {siteConfig.description}
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 hover:border-[#10B981] hover:bg-[#10B981]/10 text-white text-xs font-mono font-medium shadow-inner transition-all duration-300 cursor-pointer group/tag">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse group-hover/tag:scale-125 transition-transform" />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* ANIMATED SOCIAL BUTTONS WITH GLOW HOVER */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { href: siteConfig.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: siteConfig.social.instagram, icon: Instagram, label: 'Instagram' },
                { href: siteConfig.social.facebook, icon: Facebook, label: 'Facebook' },
              ].map((soc) => (
                <motion.a
                  key={soc.label}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={soc.label}
                  whileHover={{ scale: 1.2, rotate: 8, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/5 border border-white/15 hover:border-[#1677FF] hover:bg-[#1677FF] text-slate-300 hover:text-white transition-all shadow-md hover:shadow-[0_0_20px_rgba(22,119,255,0.6)]"
                >
                  <soc.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 3: COMPANY LINKS WITH ARROW SLIDE & UNDERLINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#1677FF]">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio Showcase', href: '/portfolio' },
                { label: 'Pricing Tiers', href: '/pricing' },
                { label: 'Get in Touch', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="relative text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 group py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#1677FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: DIGITAL SOLUTIONS WITH ARROW SLIDE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#1677FF]">
              Digital Solutions
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="relative text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 group py-0.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#1677FF] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 5: DIRECT CONTACT WITH ICON SCALE HOVER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#1677FF]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-slate-300 hover:text-white p-2 -ml-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#1677FF] group-hover:border-[#1677FF] text-[#1677FF] group-hover:text-white transition-all duration-300 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all text-xs sm:text-sm self-center font-medium">{siteConfig.contact.email}</span>
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="flex items-center gap-3 text-slate-300 hover:text-white p-2 -ml-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#1677FF] group-hover:border-[#1677FF] text-[#1677FF] group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{siteConfig.contact.phone}</span>
                </a>
              </li>

              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-[#10B981] p-2 -ml-2 rounded-xl hover:bg-[#10B981]/10 border border-transparent hover:border-[#10B981]/30 transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#10B981] group-hover:border-[#10B981] text-[#10B981] group-hover:text-white transition-all duration-300 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold inline-flex items-center gap-1">
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </li>

              <li className="flex items-start gap-3 text-slate-400 text-xs p-2 -ml-2 leading-relaxed font-mono">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="self-center">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR WITH HOVER HIGHLIGHTS */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <p>© {new Date().getFullYear()} Nirmaan Infotech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#1677FF] hover:underline underline-offset-4 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#1677FF] hover:underline underline-offset-4 transition-colors">
              Terms of Service
            </Link>
            <span className="text-[#1677FF] font-bold px-3 py-1 rounded-full bg-[#1677FF]/10 border border-[#1677FF]/20 hover:bg-[#1677FF] hover:text-white transition-all cursor-pointer">
              Engineering Excellence
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};


