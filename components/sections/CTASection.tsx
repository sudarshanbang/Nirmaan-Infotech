import React from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { siteConfig } from '@/lib/config';
import { MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-white text-[#071A36] z-10 overflow-hidden border-b border-[#e2e8f0] w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        
        <ScrollReveal className="w-full min-w-0">
          <div className="relative rounded-3xl bg-[#071A36] border border-white/10 p-5 sm:p-12 lg:p-20 overflow-hidden shadow-2xl text-center text-white w-full max-w-full min-w-0">
            
            {/* Background ambient royal blue glow */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#1677FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6 min-w-0">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 border border-white/20 text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#1677FF]" />
                <span>Let&apos;s Build Together</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] leading-tight font-heading break-words max-w-full">
                READY TO BUILD <br />
                SOMETHING BETTER<span className="text-[#1677FF]">.</span>
              </h2>

              <p className="text-sm sm:text-[18px] text-slate-300 leading-[1.61] font-normal max-w-2xl mx-auto">
                Tell us about your business and let&apos;s create a digital experience that moves it forward.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1677FF] text-white font-bold text-base shadow-lg transition-all duration-300 hover:bg-white hover:text-[#1677FF] hover:shadow-[0_0_30px_rgba(22,119,255,0.4)] active:scale-95 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#10B981] text-white font-bold text-base shadow-lg transition-all duration-300 hover:bg-white hover:text-[#10B981] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] active:scale-95 group"
                >
                  <MessageSquare className="w-5 h-5 fill-white text-white group-hover:fill-[#10B981] group-hover:text-[#10B981] transition-colors duration-300" />
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
