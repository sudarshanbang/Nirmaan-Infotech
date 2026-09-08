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
  Globe: <Globe className="w-4 h-4 text-electric-500" />,
  ShoppingBag: <ShoppingBag className="w-4 h-4 text-cyanAccent-500" />,
  Sparkles: <Sparkles className="w-4 h-4 text-amber-500" />,
  TrendingUp: <TrendingUp className="w-4 h-4 text-growthGreen-500" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-blue-500" />,
  Cpu: <Cpu className="w-4 h-4 text-indigo-500" />,
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
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 shadow-lg py-3.5 sm:py-4'
            : 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: NIRMAAN LOGO (LARGE PROMINENT BRANDING) */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label={siteConfig.name}
            >
              <div className="relative h-11 w-48 sm:h-14 sm:w-56 lg:h-16 lg:w-64 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo/logo-dark.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* CENTER: DESKTOP NAVIGATION (PROMINENT LARGE TEXT) */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
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
                        className={`inline-flex items-center gap-1.5 px-4 py-2.5 text-[15px] lg:text-base font-bold rounded-xl transition-all ${
                          isActive
                            ? 'text-electric-500 bg-electric-500/10'
                            : 'text-slate-800 hover:text-electric-500 hover:bg-slate-100/90'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesOpen ? 'rotate-180 text-electric-500' : 'text-slate-400'
                          }`}
                        />
                      </Link>

                      {/* SERVICES DESKTOP DROPDOWN (WHITE CARD) */}
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-96 rounded-2xl bg-white/98 backdrop-blur-2xl border border-slate-200/90 shadow-2xl p-3 z-50 grid grid-cols-1 gap-1"
                          >
                            <div className="px-3 py-2 border-b border-slate-100 mb-1">
                              <p className="text-xs font-bold uppercase tracking-wider text-electric-500">
                                Digital Solutions & Services
                              </p>
                            </div>

                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                              >
                                <div className="p-2 rounded-lg bg-slate-100/80 border border-slate-200/60 group-hover/item:border-electric-500/40 group-hover/item:bg-electric-500/10 transition-colors shrink-0">
                                  {iconMap[service.iconName] || <Globe className="w-4 h-4 text-electric-500" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-800 group-hover/item:text-electric-500 transition-colors">
                                      {service.title}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                                  </div>
                                  <p className="text-xs text-slate-500 line-clamp-1 mt-0.5 font-normal">
                                    {service.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            ))}

                            <div className="mt-2 pt-2 border-t border-slate-100 text-center">
                              <Link
                                href="/services"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-electric-500 hover:text-electric-600 transition-colors"
                              >
                                <span>Explore all services</span>
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
                    className={`px-4 py-2.5 text-[15px] lg:text-base font-bold rounded-xl transition-all ${
                      isActive
                        ? 'text-electric-500 bg-electric-500/10'
                        : 'text-slate-800 hover:text-electric-500 hover:bg-slate-100/90'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: PROMINENT CTA BUTTON & MOBILE TOGGLE */}
            <div className="flex items-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                showArrow
                className="hidden sm:inline-flex shadow-lg shadow-blue-500/20 text-base font-bold py-3 px-6 rounded-xl"
              >
                Get a Free Consultation
              </Button>

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors border border-slate-200/80"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7 text-slate-900" />
                ) : (
                  <Menu className="w-7 h-7 text-slate-900" />
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
