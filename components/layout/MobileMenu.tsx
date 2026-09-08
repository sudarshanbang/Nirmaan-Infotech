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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 top-[76px] sm:top-[88px] z-40 bg-white/98 backdrop-blur-2xl border-b border-slate-200 md:hidden flex flex-col justify-between overflow-y-auto px-5 py-6 shadow-2xl"
        >
          <div className="space-y-6">
            {/* LOGO IN MOBILE DRAWER */}
            <div className="pb-4 border-b border-slate-100 flex items-center justify-between">
              <div className="relative h-10 w-48">
                <Image
                  src="/images/logo/logo-dark.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
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
                        className="flex items-center justify-between w-full py-3 px-3 text-lg font-bold text-slate-800 hover:bg-slate-100/80 rounded-xl transition-colors text-left"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-electric-500 transition-transform duration-200 ${
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
                            className="overflow-hidden pl-4 py-1 space-y-1.5 border-l-2 border-electric-500/40 my-1 ml-3"
                          >
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                onClick={onClose}
                                className="flex items-center justify-between py-2 px-3 text-sm font-medium text-slate-700 hover:text-electric-600 hover:bg-slate-50 rounded-lg transition-colors"
                              >
                                <span>{service.title}</span>
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
                    className="py-3 px-3 text-lg font-bold text-slate-800 hover:bg-slate-100/80 rounded-xl transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* BOTTOM ACTIONS & DIRECT CONTACT */}
          <div className="pt-6 mt-6 border-t border-slate-100 space-y-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              showArrow
              className="w-full justify-center"
              onClick={onClose}
            >
              Get a Free Consultation
            </Button>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-growthGreen-500/10 border border-growthGreen-500/30 text-growthGreen-600 text-xs font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-electric-500/10 border border-electric-500/30 text-electric-600 text-xs font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
            </div>

            <p className="text-center text-xs font-medium text-slate-500 pt-2">
              {siteConfig.tagline}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
