'use client';

import React from 'react';
import { siteConfig } from '@/lib/config';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Nirmaan Infotech! I would like to discuss a website / digital project for my business.'
  )}`;

  return (
    <>
      {/* DESKTOP FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-growthGreen-500 text-slate-950 font-semibold shadow-xl shadow-growthGreen-500/30 border border-growthGreen-400/50 backdrop-blur-md group hover:bg-growthGreen-400 transition-colors"
      >
        <MessageSquare className="w-5 h-5 fill-slate-950" />
        <span className="text-sm">Chat on WhatsApp</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-900 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
        </span>
      </motion.a>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-xl border-t border-white/10 p-3 px-4 flex items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-growthGreen-500 text-slate-950 text-sm font-bold shadow-lg shadow-growthGreen-500/20 active:scale-[0.98] transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950" />
          <span>WhatsApp Us</span>
        </a>

        <a
          href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-electric-500 text-white text-sm font-bold shadow-lg shadow-electric-500/20 active:scale-[0.98] transition-transform"
        >
          <span>Call Now</span>
        </a>
      </div>
    </>
  );
};
