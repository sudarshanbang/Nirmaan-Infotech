'use client';

import React, { useState } from 'react';
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="fixed inset-0 top-[56px] sm:top-[64px] z-40 bg-white md:hidden flex flex-col justify-between overflow-y-auto px-5 py-6 shadow-2xl"
        >
          <div className="space-y-5">
            {/* LOGO & TITLE IN MOBILE DRAWER */}
            <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
              <div className="relative h-8 w-40">
                <Image
                  src="/images/logo/logo-dark.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Navigation
              </span>
            </div>

            {/* NAV LINKS LIST */}
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                        className="flex items-center justify-between w-full py-3 px-3.5 text-base font-bold text-slate-900 bg-slate-50/80 hover:bg-slate-100 rounded-xl transition-colors text-left border border-slate-100"
                      >
                        <span className="text-slate-900">{link.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-electric-600 transition-transform duration-200 ${
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
                            className="overflow-hidden my-2 ml-2 pl-3 space-y-1.5 border-l-2 border-electric-500 bg-slate-50/50 p-2.5 rounded-r-xl border border-slate-100"
                          >
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                onClick={onClose}
                                className="flex items-center justify-between py-2.5 px-3 text-sm font-semibold text-slate-800 hover:text-electric-600 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-slate-200/80 shadow-xs"
                              >
                                <span className="text-slate-900">{service.title}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-electric-500" />
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
                    className="py-3 px-3.5 text-base font-bold text-slate-900 bg-slate-50/80 hover:bg-slate-100 hover:text-electric-600 rounded-xl transition-colors border border-slate-100"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* BOTTOM ACTIONS & DIRECT CONTACT */}
          <div className="pt-5 mt-6 border-t border-slate-100 space-y-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              showArrow
              className="w-full justify-center shadow-lg shadow-blue-500/15 font-bold text-base py-3"
              onClick={onClose}
            >
              Get a Free Consultation
            </Button>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold hover:bg-blue-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-center text-xs font-semibold text-slate-500 pt-1">
              {siteConfig.tagline}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
