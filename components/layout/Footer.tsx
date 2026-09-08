'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { servicesData } from '@/lib/data';
import { Mail, Phone, MapPin, MessageSquare, Linkedin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-navy-950 border-t border-white/10 pt-16 pb-12 overflow-hidden z-10">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-cyanAccent-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* COLUMN 1 & 2: BRAND & STORY */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="relative h-12 w-56 sm:h-15 sm:w-64">
                <Image
                  src="/images/logo/logo-light.png"
                  alt={siteConfig.name}
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md font-normal">
              {siteConfig.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-growthGreen-500 animate-pulse" />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-electric-500/20 hover:border-electric-400 hover:text-electric-400 text-gray-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-electric-500/20 hover:border-electric-400 hover:text-electric-400 text-gray-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-electric-500/20 hover:border-electric-400 hover:text-electric-400 text-gray-300 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 3: QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio Showcase
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: SERVICES LINKS */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Digital Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: DIRECT CONTACT */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-gray-300">
                <Mail className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-4 h-4 text-electric-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <MessageSquare className="w-4 h-4 text-growthGreen-400 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-growthGreen-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400 text-xs pt-1 leading-relaxed">
                <MapPin className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Nirmaan Infotech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-400">Crafted with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
