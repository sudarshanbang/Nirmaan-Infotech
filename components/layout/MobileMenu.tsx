'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/config';
import { servicesData } from '@/lib/data';
import {
  ChevronDown,
  ArrowRight,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Globe,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; hasDropdown?: boolean }[];
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-4 h-4 text-[#1677FF]" />,
  ShoppingBag: <ShoppingBag className="w-4 h-4 text-[#1677FF]" />,
  Sparkles: <Sparkles className="w-4 h-4 text-[#1677FF]" />,
  TrendingUp: <TrendingUp className="w-4 h-4 text-[#1677FF]" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-[#1677FF]" />,
  Cpu: <Cpu className="w-4 h-4 text-[#1677FF]" />,
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const pathname = usePathname();
  const [servicesAccordionOpen, setServicesAccordionOpen] = useState(
    pathname.startsWith('/services')
  );

  // Auto-expand services accordion if currently on a services page
  useEffect(() => {
    if (pathname.startsWith('/services')) {
      setServicesAccordionOpen(true);
    }
  }, [pathname]);

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
        <>
          {/* SEMI-TRANSPARENT BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 top-[56px] sm:top-[64px] z-40 bg-[#071A36]/40 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* MOBILE SLIDE-DOWN DRAWER */}
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 z-50 bg-white/98 backdrop-blur-2xl text-[#071A36] md:hidden flex flex-col justify-between overflow-y-auto overscroll-contain shadow-2xl border-t border-[#e2e8f0]"
            style={{
              height: 'calc(100dvh - 56px)',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="px-5 py-5 space-y-4">
              
              {/* STATUS INDICATOR BAR */}
              <div className="flex items-center justify-between py-2 px-3.5 rounded-xl bg-[#f1f5f9] border border-[#e2e8f0]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#071A36]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Nirmaan Digital Suite</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#1677FF] bg-[#1677FF]/10 px-2.5 py-0.5 rounded-full border border-[#1677FF]/20">
                  v3.0 Live
                </span>
              </div>

              {/* NAVIGATION LINKS */}
              <nav className="flex flex-col space-y-1.5 pt-1">
                {navLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href));

                  if (link.hasDropdown) {
                    return (
                      <div key={link.name} className="flex flex-col">
                        {/* SERVICES ACCORDION BUTTON */}
                        <button
                          type="button"
                          onClick={() => setServicesAccordionOpen(!servicesAccordionOpen)}
                          className={`flex items-center justify-between w-full py-3.5 px-4 rounded-xl text-base font-bold transition-all text-left border ${
                            isActive
                              ? 'bg-[#f1f5f9] text-[#1677FF] border-[#1677FF]/30'
                              : 'bg-white hover:bg-[#f8fafc] text-[#071A36] border-[#e2e8f0]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
                            <span>{link.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-semibold text-[#64748b] bg-[#f1f5f9] px-2 py-0.5 rounded">
                              6 Solutions
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#1677FF] transition-transform duration-200 ${
                                servicesAccordionOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>

                        {/* SERVICES ACCORDION EXPANSION */}
                        <AnimatePresence initial={false}>
                          {servicesAccordionOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: 'easeOut' }}
                              className="overflow-hidden my-2 pl-2 space-y-1 border-l-2 border-[#1677FF]/30 bg-[#f8fafc] p-2.5 rounded-xl border border-[#e2e8f0]"
                            >
                              {/* OVERVIEW LINK */}
                              <Link
                                href="/services"
                                onClick={onClose}
                                className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs font-bold font-mono transition-colors ${
                                  pathname === '/services'
                                    ? 'bg-[#1677FF] text-white'
                                    : 'text-[#1677FF] hover:bg-[#1677FF]/10'
                                }`}
                              >
                                <span>All Services & Capabilities Overview</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>

                              {/* INDIVIDUAL SERVICES */}
                              {servicesData.map((service) => {
                                const isServiceActive = pathname === `/services/${service.slug}`;

                                return (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.slug}`}
                                    onClick={onClose}
                                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
                                      isServiceActive
                                        ? 'bg-[#1677FF] text-white shadow-sm font-bold'
                                        : 'text-[#071A36] hover:bg-white hover:text-[#1677FF]'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5">
                                      <span className="p-1 rounded-md bg-white border border-[#e2e8f0] shrink-0">
                                        {serviceIconMap[service.iconName] || <Globe className="w-3.5 h-3.5 text-[#1677FF]" />}
                                      </span>
                                      <span>{service.title}</span>
                                    </div>
                                    <ArrowRight className={`w-3.5 h-3.5 ${isServiceActive ? 'text-white' : 'text-[#64748b]'}`} />
                                  </Link>
                                );
                              })}
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
                      className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-bold transition-all border ${
                        isActive
                          ? 'bg-[#1677FF] text-white border-[#1677FF] shadow-sm'
                          : 'bg-white hover:bg-[#f8fafc] text-[#071A36] border-[#e2e8f0]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#64748b]'}`} />
                    </Link>
                  );
                })}
              </nav>

              {/* ACTION BUTTON & QUICK CONTACTS */}
              <div className="pt-3 border-t border-[#e2e8f0] space-y-3">
                {/* PRIMARY CTA */}
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#1677FF] hover:bg-[#005CE6] text-white font-bold text-base shadow-md shadow-[#1677FF]/25 active:scale-[0.98] transition-all text-center"
                >
                  <span>Start Your Web Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* QUICK CONNECT: WHATSAPP & PHONE */}
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#10B981] text-white text-xs font-bold hover:bg-[#059669] shadow-sm active:scale-[0.98] transition-transform font-mono"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={siteConfig.contact.phoneHref}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#071A36] text-white text-xs font-bold hover:bg-[#0B2A5B] shadow-sm active:scale-[0.98] transition-transform font-mono"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Direct Call</span>
                  </a>
                </div>

                {/* VERIFIED COMPANY FOOTER INFO */}
                <div className="pt-2 text-center text-xs text-[#64748b] space-y-1 font-mono">
                  <p className="font-semibold text-[#071A36]">{siteConfig.contact.address}</p>
                  <p>{siteConfig.contact.email} • {siteConfig.contact.phone}</p>
                  <p className="text-[11px] text-slate-400 pt-1">{siteConfig.tagline}</p>
                </div>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
