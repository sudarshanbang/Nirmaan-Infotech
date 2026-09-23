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
  Database,
  Code2,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-3.5 h-3.5 text-[#1677FF]" />,
  ShoppingBag: <ShoppingBag className="w-3.5 h-3.5 text-[#1677FF]" />,
  Sparkles: <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />,
  TrendingUp: <TrendingUp className="w-3.5 h-3.5 text-[#1677FF]" />,
  ShieldCheck: <ShieldCheck className="w-3.5 h-3.5 text-[#1677FF]" />,
  Cpu: <Cpu className="w-3.5 h-3.5 text-[#1677FF]" />,
  Database: <Database className="w-3.5 h-3.5 text-[#1677FF]" />,
  Code2: <Code2 className="w-3.5 h-3.5 text-[#1677FF]" />,
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
    window.addEventListener('scroll', handleScroll, { passive: true });
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
          isScrolled || mobileMenuOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm py-2.5 sm:py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#e2e8f0]/50 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LEFT: NIRMAAN LOGO */}
            <Link
              href="/"
              className="flex items-center gap-2 group focus:outline-none shrink-0"
              aria-label={siteConfig.name}
            >
              <div className="relative h-8 w-36 sm:h-9 sm:w-44 lg:h-9 lg:w-48 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo/logo-dark.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* CENTER: DESKTOP NAVIGATION */}
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
                        className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm lg:text-[15px] font-medium rounded-full transition-all ${
                          isActive
                            ? 'text-white bg-[#071A36] font-bold shadow-sm'
                            : 'text-[#64748b] hover:text-[#071A36] hover:bg-[#f1f5f9]'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesOpen ? 'rotate-180 text-[#1677FF]' : 'text-[#64748b]'
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
                            className="absolute top-full -left-4 mt-2 w-80 md:w-[380px] max-w-[calc(100vw-2rem)] rounded-xl bg-white border border-[#e2e8f0] shadow-xl p-2.5 z-50 grid grid-cols-1 gap-1 overflow-hidden"
                          >
                            <div className="px-3 py-1.5 bg-[#f1f5f9] rounded-lg border border-[#e2e8f0] mb-1 flex items-center justify-between">
                              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#071A36]">
                                Digital Solutions & Services
                              </p>
                              <span className="text-[10px] font-mono font-bold text-white bg-[#1677FF] px-2 py-0.5 rounded-full">
                                Nirmaan Tech
                              </span>
                            </div>

                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors group/item border border-transparent hover:border-[#e2e8f0]"
                              >
                                <div className="p-1.5 rounded-lg bg-white border border-[#e2e8f0] group-hover/item:border-[#071A36] group-hover/item:bg-white transition-colors shrink-0 mt-0.5">
                                  {iconMap[service.iconName] || <Globe className="w-3.5 h-3.5 text-[#071A36]" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-[#071A36] group-hover/item:text-[#1677FF] transition-colors">
                                      {service.title}
                                    </span>
                                    <ArrowRight className="w-3 h-3 text-[#64748b] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                                  </div>
                                  <p className="text-[11px] text-[#64748b] line-clamp-1 mt-0.5 font-normal">
                                    {service.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            ))}

                            <div className="mt-1 pt-1.5 border-t border-[#e2e8f0] text-center">
                              <Link
                                href="/services"
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#071A36] hover:text-[#1677FF] transition-colors py-0.5"
                              >
                                <span>Explore all capabilities</span>
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
                    className={`px-4 py-2 text-sm lg:text-[15px] font-medium rounded-full transition-all ${
                      isActive
                        ? 'text-white bg-[#071A36] font-bold shadow-sm'
                        : 'text-[#64748b] hover:text-[#071A36] hover:bg-[#f1f5f9]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT: ACTION BUTTON & MOBILE TOGGLE */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                showArrow
                className="hidden sm:inline-flex text-xs lg:text-sm"
              >
                Get Started
              </Button>

              {/* MOBILE HAMBURGER BUTTON */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2.5 rounded-xl transition-all border flex items-center justify-center ${
                  mobileMenuOpen
                    ? 'bg-[#071A36] text-white border-[#071A36] shadow-sm'
                    : 'text-[#071A36] bg-[#f1f5f9] hover:bg-[#071A36] hover:text-white border-[#e2e8f0]'
                }`}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
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
