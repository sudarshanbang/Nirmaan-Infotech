'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/config';
import { servicesData } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { ChevronDown, ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; hasDropdown?: boolean }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(false);

  // Lock body scroll when mobile menu is open & listen for ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 top-[56px] sm:top-[64px] z-40 bg-[#071A36] text-white md:hidden flex flex-col justify-between overflow-y-auto px-5 py-6 pb-24 shadow-2xl border-b border-white/20"
        >
          <div className="space-y-5">
            {/* LOGO & TITLE IN MOBILE DRAWER */}
            <div className="pb-4 border-b border-white/15 flex items-center justify-between">
              <div className="relative h-8 w-40">
                <Image
                  src="/images/logo/logo-light.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-xs font-mono font-bold text-white bg-[#1677FF] px-3 py-1 rounded-full">
                Menu
              </span>
            </div>

            {/* NAV LINKS LIST */}
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                        className="flex items-center justify-between w-full py-3.5 px-5 text-base font-bold text-white bg-white/10 hover:bg-white/15 rounded-full transition-colors text-left border border-white/10"
                      >
                        <span className="text-white">{link.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#1677FF] transition-transform duration-200 ${
                            servicesAccordionOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* SERVICES MOBILE ACCORDION */}
                      <AnimatePresence>
                        {servicesAccordionOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden my-2 ml-2 pl-3 space-y-1.5 border-l-2 border-[#1677FF] bg-white/5 p-3 rounded-2xl border border-white/10"
                          >
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                onClick={onClose}
                                className="flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                              >
                                <span>{service.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#1677FF]" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="py-3.5 px-5 text-base font-bold text-white bg-white/10 hover:bg-white/15 rounded-full transition-colors border border-white/10"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* BOTTOM ACTIONS & DIRECT CONTACT */}
          <div className="pt-5 mt-6 border-t border-white/15 space-y-4">
            <Button
              href="/contact"
              variant="ember"
              size="lg"
              showArrow
              className="w-full justify-center text-base py-3.5"
              onClick={onClose}
            >
              Get Started Now
            </Button>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-xs font-bold hover:bg-[#10B981]/30 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#10B981]" />
                <span>WhatsApp</span>
              </a>

              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-center text-xs font-mono text-slate-300 pt-1">
              {siteConfig.tagline}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
