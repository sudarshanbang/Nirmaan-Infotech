import React from 'react';
import { Metadata } from 'next';
import { GlassCard } from '@/components/ui/GlassCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/sections/ContactForm';
import { siteConfig } from '@/lib/config';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free Consultation | Nirmaan Infotech',
  description: 'Discuss your website development, e-commerce, or digital solution project with Nirmaan Infotech. Get a free consultation and project scope estimation.',
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    'Hello Nirmaan Infotech! I would like to schedule a project consultation.'
  )}`;

  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 border border-blue-200/80 text-blue-700 mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>Start a Conversation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            LET&apos;S DISCUSS YOUR <br />
            DIGITAL PROJECT.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are starting from scratch or upgrading an existing platform, our team is ready to analyze your requirements.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT CONTACT INFO & WHATSAPP CARD */}
          <div className="lg:col-span-5 space-y-6">
            
            <GlassCard variant="light" className="p-8 space-y-6 bg-white shadow-xl border-slate-200">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Direct Contact Details
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold">Email Us</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-slate-900 font-bold hover:text-blue-600 transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold">Call Engineering</span>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="text-slate-900 font-bold hover:text-sky-600 transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold">WhatsApp Chat</span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Instant WhatsApp Connection</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold">Office Location</span>
                    <span className="text-slate-700 text-xs font-medium leading-relaxed block">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase font-bold">Working Hours</span>
                    <span className="text-slate-700 text-xs font-medium block">
                      {siteConfig.contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* MAP VISUAL CARD */}
            <GlassCard variant="subtle" className="p-6 text-center space-y-3 bg-white border-slate-200 shadow-md">
              <div className="w-full h-32 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-4">
                <div className="text-center space-y-1">
                  <MapPin className="w-6 h-6 text-blue-400 mx-auto" />
                  <span className="text-xs font-mono text-white font-bold block">Bengaluru • Karnataka • India</span>
                  <span className="text-[10px] text-slate-400 block">Serving Clients Nationwide & Globally</span>
                </div>
              </div>
            </GlassCard>

          </div>

          {/* RIGHT LEAD GENERATION FORM */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
