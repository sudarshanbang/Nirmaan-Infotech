'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/config';
import { servicesData } from '@/lib/data';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import {
  ChevronDown,
  Menu,
  X,
  Globe,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Cpu,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-3.5 h-3.5 text-electric-500" />,
  ShoppingBag: <ShoppingBag className="w-3.5 h-3.5 text-cyanAccent-500" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5 text-amber-500" />,
  TrendingUp: <TrendingUp className="w-3.5 h-3.5 text-growthGreen-500" />,
  ShieldCheck: <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />,
  Cpu: <Cpu className="w-3.5 h-3.5 text-indigo-500" />,
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 shadow-sm py-2 sm:py-2.5'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-2.5 sm:py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: NIRMAAN LOGO (COMPACT ELEGANT BRANDING) */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none shrink-0"
              aria-label={siteConfig.name}
            >
              <div className="relative h-8 w-36 sm:h-9 sm:w-44 lg:h-10 lg:w-48 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo/logo-dark.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* CENTER: DESKTOP NAVIGATION (COMPACT & ELEGANT) */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <Link
                        href="/services"
                        className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs lg:text-sm font-semibold rounded-lg transition-all ${
                          isActive
                            ? 'text-electric-500 bg-electric-500/10 font-bold'
                            : 'text-slate-800 hover:text-electric-500 hover:bg-slate-100/80'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesOpen ? 'rotate-180 text-electric-500' : 'text-slate-400'
                          }`}
                        />
                      </Link>

                      {/* SERVICES DESKTOP DROPDOWN */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 4, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute top-full -left-4 mt-2 w-[380px] rounded-xl bg-white border border-slate-200 shadow-xl p-2.5 z-50 grid grid-cols-1 gap-1 overflow-hidden"
                          >
                            <div className="px-3 py-1.5 bg-slate-50 rounded-lg border border-slate-100 mb-1 flex items-center justify-between">
                              <p className="text-[11px] font-bold uppercase tracking-wider text-electric-600">
                                Digital Solutions & Services
                              </p>
                              <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200/80">
                                Nirmaan Tech
                              </span>
                            </div>

                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors group/item border border-transparent hover:border-slate-200/60"
                              >
                                <div className="p-1.5 rounded-lg bg-slate-100/90 border border-slate-200/80 group-hover/item:border-electric-500/40 group-hover/item:bg-electric-500/10 transition-colors shrink-0 mt-0.5">
                                  {iconMap[service.iconName] || <Globe className="w-3.5 h-3.5 text-electric-500" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-900 group-hover/item:text-electric-600 transition-colors">
                                      {service.title}
                                    </span>
                                    <ArrowRight className="w-3 h-3 text-slate-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                                  </div>
                                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                                    {service.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            ))}

                            <div className="mt-1 pt-1.5 border-t border-slate-100 text-center">
                              <Link
                                href="/services"
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-electric-600 hover:text-electric-700 transition-colors py-0.5"
                              >
                                <span>Explore all services & capabilities</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
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
                    className={`px-3 py-1.5 text-xs lg:text-sm font-semibold rounded-lg transition-all ${
                      isActive
                        ? 'text-electric-500 bg-electric-500/10 font-bold'
                        : 'text-slate-800 hover:text-electric-500 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: COMPACT CTA BUTTON & MOBILE TOGGLE */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                showArrow
                className="hidden sm:inline-flex shadow-md shadow-blue-500/15 text-xs lg:text-sm font-bold py-2 px-4 rounded-lg"
              >
                Get a Free Consultation
              </Button>

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200/80"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FULLSCREEN MENU DRAWER */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
