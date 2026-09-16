import React from 'react';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { siteConfig } from '@/lib/config';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ArrowUpRight, 
  Sparkles,
  Zap,
  Code2,
  Rocket,
  ShieldCheck,
  ChevronRight,
  PhoneCall
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Consultation | Nirmaan Infotech',
  description: 'Discuss your website development, e-commerce, or digital solution project with Nirmaan Infotech. Get a free consultation and project scope estimation.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#071A36] text-white pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* BACKGROUND AMBIENT GRAPHICS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Faint Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
        
        {/* Glow Radial Orbs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* COMPACT HERO SECTION */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/10 border border-blue-400/30 text-blue-300 mb-5 shadow-lg shadow-blue-900/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#1677FF] -ml-4" />
            <span>LET&apos;S BUILD SOMETHING GREAT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase">
            LET&apos;S BUILD YOUR <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
              DIGITAL FUTURE.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto">
            Transform your vision into a high-converting digital platform. Reach out to our engineering team for a transparent roadmap and free consultation.
          </p>
        </ScrollReveal>

        {/* MAIN TWO-COLUMN CONTAINER (~42% / ~58%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN (~42% -> 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* INTERACTIVE CONTACT DETAILS CARD */}
            <GlassCard variant="glow" className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl rounded-2xl space-y-6 text-white">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                    Direct Engineering Access
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">Connect directly with our tech team</p>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                  Active Now
                </div>
              </div>

              <div className="space-y-4">
                {/* EMAIL */}
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-[#1677FF]/50 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:bg-[#1677FF] group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Email Us</span>
                    <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate block">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 self-center" />
                </a>

                {/* PHONE */}
                <a 
                  href={siteConfig.contact.phoneHref}
                  className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Call Engineering</span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors block">
                      {siteConfig.contact.phone}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 self-center" />
                </a>

                {/* WHATSAPP */}
                <a 
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-700/40 hover:border-emerald-500/60 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] text-emerald-400 uppercase font-bold tracking-wider">Instant WhatsApp</span>
                    <span className="text-sm font-bold text-emerald-200 group-hover:text-emerald-100 transition-colors block">
                      Chat with Tech Lead
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 self-center" />
                </a>

                {/* ADDRESS */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/20 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Location</span>
                    <span className="text-xs font-semibold text-slate-200 leading-relaxed block mt-0.5">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>

                {/* WORKING HOURS */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-800/20 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Working Hours</span>
                    <span className="text-xs font-semibold text-slate-200 block mt-0.5">
                      {siteConfig.contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* IDEA -> BUILD -> GROW ARCHITECTURAL TECH VISUAL */}
            <GlassCard variant="subtle" className="bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-xl rounded-2xl space-y-4 text-white">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>Our Engineering Lifecycle</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                {/* STEP 1 */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-black text-white">IDEA</div>
                  <div className="text-[10px] text-slate-400 font-medium leading-tight">Discovery & Strategy</div>
                </div>

                {/* STEP 2 */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-black text-white">BUILD</div>
                  <div className="text-[10px] text-slate-400 font-medium leading-tight">Clean Next.js Code</div>
                </div>

                {/* STEP 3 */}
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-black text-white">GROW</div>
                  <div className="text-[10px] text-slate-400 font-medium leading-tight">SEO & Conversions</div>
                </div>
              </div>
            </GlassCard>

            {/* TRUST STATEMENT */}
            <div className="p-5 rounded-2xl bg-blue-950/40 border border-blue-800/40 flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
                  Transparent & Reliable
                </h4>
                <p className="text-xs text-slate-300 leading-normal">
                  Fast responses • Clear scope estimation • Zero hidden costs • NDA protected.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (~58% -> 7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* BOTTOM CTA SECTION */}
        <ScrollReveal className="mt-16 lg:mt-24">
          <GlassCard variant="glow" className="bg-gradient-to-br from-slate-900 via-[#071A36] to-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl text-center relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                NEED IMMEDIATE ASSISTANCE?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                READY TO ELEVATE YOUR DIGITAL PRESENCE?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Connect directly with our engineering leadership to discuss your custom project requirements, timelines, and strategy.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={siteConfig.contact.phoneHref}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-[14px] bg-[#1677FF] hover:bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/30 transition-all duration-300"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call {siteConfig.contact.phone}</span>
                </a>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-[14px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-600/30 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

      </div>
    </div>
  );
}
