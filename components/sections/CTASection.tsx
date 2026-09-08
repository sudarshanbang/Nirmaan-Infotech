'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteConfig } from '@/lib/config';
import { MessageSquare, Sparkles } from 'lucide-react';

export const CTASection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Nirmaan Infotech! I want to start a new website project.'
  )}`;

  return (
    <section className="relative py-20 lg:py-32 bg-slate-50 text-slate-900 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal>
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-navy-950 border border-blue-500/40 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl text-center text-white">
            
            {/* Background ambient flares */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-sky-200 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Let&apos;s Build Together</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                READY TO BUILD <br />
                SOMETHING BETTER?
              </h2>

              <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal max-w-2xl mx-auto">
                Tell us about your business and let&apos;s create a digital experience that moves it forward.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="lg" showArrow className="w-full sm:w-auto bg-white hover:bg-slate-100 text-blue-800 border-none font-extrabold shadow-xl">
                  Start Your Project
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-growthGreen-500 hover:bg-growthGreen-400 text-slate-950 font-extrabold text-base shadow-xl transition-all duration-300 active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 fill-slate-950" />
                  <span>Talk on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
