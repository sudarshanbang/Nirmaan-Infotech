'use client';

import React from 'react';
import { siteConfig } from '@/lib/config';
import { MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* DESKTOP FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-5 py-3 rounded-full bg-[#10B981] text-white font-bold shadow-xl border border-[#10B981]/50 group hover:bg-[#059669] transition-colors"
      >
        <MessageSquare className="w-5 h-5 fill-white text-white" />
        <span className="text-sm">Chat on WhatsApp</span>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      </motion.a>

      {/* MOBILE STICKY BOTTOM ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071A36] border-t border-white/15 p-2.5 px-4 flex items-center gap-3 shadow-2xl">
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#10B981] text-white text-xs font-bold shadow-md active:scale-[0.98] transition-transform uppercase tracking-wider font-mono"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href={siteConfig.contact.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-white text-[#071A36] text-xs font-bold shadow-md active:scale-[0.98] transition-transform uppercase tracking-wider font-mono"
        >
          <Phone className="w-4 h-4" />
          <span>Call Us</span>
        </a>
      </div>
    </>
  );
};
