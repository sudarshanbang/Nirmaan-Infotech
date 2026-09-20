'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Home,
  Phone,
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from 'lucide-react';

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submissionError, setSubmissionError] = useState<string>('');

  const servicesList = [
    'Website Development',
    'E-commerce Store',
    'Website Redesign',
    'SEO & Digital Marketing',
    'Website Maintenance',
    'Branding & UI/UX',
    'Custom Digital Solution',
    'Other',
  ];

  // Field Validation Logic
  const validateField = (name: string, value: string): string | undefined => {
    if (name === 'name') {
      if (!value.trim()) return 'Please enter your name.';
      if (value.trim().length < 2) return 'Please enter your name (min 2 characters).';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Please enter your email address.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
    }
    if (name === 'phone') {
      if (!value.trim()) return 'Please enter your phone number.';
      const cleaned = value.replace(/[\s\-\+\(\)]/g, '');
      if (cleaned.length < 10 || !/^\d+$/.test(cleaned)) {
        return 'Please enter a valid 10-digit phone number.';
      }
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Character limit for project details (max 1000)
    if (name === 'message' && value.length > 1000) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const validateAll = (): boolean => {
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const phoneErr = validateField('phone', formData.phone);

    setErrors({
      name: nameErr,
      email: emailErr,
      phone: phoneErr,
    });

    setTouched({ name: true, email: true, phone: true });

    return !nameErr && !emailErr && !phoneErr;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) {
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 1100);
  };

  const isFieldValid = (name: keyof FormData) => {
    if (!touched[name]) return false;
    return !validateField(name, formData[name]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-6xl mx-auto"
    >
      {/* UNIFIED WHITE CARD CONTAINER (MATCHING REFERENCE IMAGE) */}
      <div className="rounded-[32px] bg-white border border-slate-100 shadow-[0_25px_70px_rgba(0,0,0,0.07)] p-4 sm:p-6 lg:p-8">
        
        {/* SUCCESS SCREEN */}
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="py-16 px-4 text-center space-y-6 max-w-xl mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-[#00BFA6]/10 text-[#00BFA6] border border-[#00BFA6]/30 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <span className="inline-block px-4 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00BFA6]/10 text-[#00BFA6] border border-[#00BFA6]/30">
                REQUEST RECEIVED
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#071A36] tracking-tight font-heading">
                Thank You, {formData.name || 'Friend'}!
              </h3>
              <p className="text-base text-slate-600 font-normal leading-relaxed">
                Your project inquiry has been received by our engineering team. We&apos;ll review your requirements and get back to you with a roadmap within 24 hours.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071A36] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#00BFA6] hover:bg-[#00A58F] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#00BFA6]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    name: '',
                    businessName: '',
                    email: '',
                    phone: '',
                    service: 'Website Development',
                    message: '',
                  });
                  setErrors({});
                  setTouched({});
                }}
                className="text-xs text-slate-400 underline hover:text-[#00BFA6] font-mono transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
            </div>
          </motion.div>
        ) : status === 'error' ? (
          /* ERROR SCREEN */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-16 text-center space-y-6 max-w-md mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 border border-red-200 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#071A36] font-heading">Submission Error</h3>
              <p className="text-xs text-slate-500 font-mono">
                {submissionError || "Please try again or connect directly on WhatsApp."}
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setStatus('idle')}
                className="px-6 py-3 rounded-xl bg-[#00BFA6] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#00A58F] transition-colors"
              >
                Try Again
              </button>
            </div>
          </motion.div>
        ) : (
          /* TWO-COLUMN LAYOUT: LEFT CONTACT INFO + RIGHT FORM */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* ─── LEFT COLUMN: VIBRANT TEAL CONTACT INFORMATION PANEL ────────── */}
            <div className="lg:col-span-5 rounded-[24px] bg-[#00BFA6] text-white p-7 sm:p-10 relative overflow-hidden flex flex-col justify-between shadow-lg shadow-[#00BFA6]/20">
              
              {/* DECORATIVE 3D TRANSLUCENT SPHERES (FROM REFERENCE IMAGE) */}
              <div className="absolute -bottom-14 -right-14 w-52 h-52 rounded-full bg-gradient-to-tl from-white/35 via-white/15 to-transparent pointer-events-none backdrop-blur-[2px]" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading">
                    Contact Information
                  </h3>
                  <p className="text-white/85 text-xs sm:text-sm mt-2 font-normal leading-relaxed max-w-sm">
                    Have a project in mind or looking for technical guidance? Reach out directly to our engineering leadership.
                  </p>
                </div>

                {/* CONTACT DETAILS LIST */}
                <div className="space-y-6 pt-2">
                  {/* PHONE */}
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="flex items-center gap-4 text-white/90 hover:text-white group transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#00BFA6] transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-medium">Direct Line</p>
                      <p className="text-sm sm:text-base font-bold tracking-wide">{siteConfig.contact.phone}</p>
                    </div>
                  </a>

                  {/* EMAIL */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-4 text-white/90 hover:text-white group transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#00BFA6] transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-white/70 font-medium">Email Support</p>
                      <p className="text-sm sm:text-base font-bold truncate">{siteConfig.contact.email}</p>
                    </div>
                  </a>

                  {/* LOCATION */}
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70 font-medium">Headquarters</p>
                      <p className="text-sm sm:text-base font-bold">{siteConfig.contact.address}</p>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <a
                    href={siteConfig.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white/90 hover:text-white group transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#10B981]/30 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#10B981] transition-all">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div>
                        <p className="text-xs text-white/70 font-medium">Instant Chat</p>
                        <p className="text-sm sm:text-base font-bold">Chat on WhatsApp</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>

              {/* BOTTOM FOOTER BADGE ON LEFT PANEL */}
              <div className="relative z-10 pt-10 text-[11px] font-mono text-white/70 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                <span>Replies typically under 2 hours</span>
              </div>
            </div>

            {/* ─── RIGHT COLUMN: CLEAN MINIMALIST FORM (UNDERLINE STYLE) ────────── */}
            <div className="lg:col-span-7 p-2 sm:p-4 lg:p-6 flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                
                {/* ROW 1: YOUR NAME & YOUR EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* YOUR NAME */}
                  <div className="relative">
                    <label 
                      htmlFor="name" 
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1 transition-colors ${
                        errors.name ? 'text-red-500' : 'text-slate-500'
                      }`}
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Full Name"
                      aria-invalid={!!errors.name}
                      className={`w-full bg-transparent border-b-2 py-2.5 px-0 text-slate-800 text-sm sm:text-base font-medium placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 focus:border-[#00BFA6]'
                      }`}
                    />
                    {isFieldValid('name') && (
                      <span className="absolute right-0 bottom-3 text-emerald-600">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* YOUR EMAIL */}
                  <div className="relative">
                    <label 
                      htmlFor="email" 
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1 transition-colors ${
                        errors.email ? 'text-red-500' : 'text-slate-500'
                      }`}
                    >
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="name@company.com"
                      aria-invalid={!!errors.email}
                      className={`w-full bg-transparent border-b-2 py-2.5 px-0 text-slate-800 text-sm sm:text-base font-medium placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 focus:border-[#00BFA6]'
                      }`}
                    />
                    {isFieldValid('email') && (
                      <span className="absolute right-0 bottom-3 text-emerald-600">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* ROW 2: YOUR PHONE & BUSINESS NAME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* YOUR PHONE */}
                  <div className="relative">
                    <label 
                      htmlFor="phone" 
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1 transition-colors ${
                        errors.phone ? 'text-red-500' : 'text-slate-500'
                      }`}
                    >
                      Your Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 82082 16317"
                      aria-invalid={!!errors.phone}
                      className={`w-full bg-transparent border-b-2 py-2.5 px-0 text-slate-800 text-sm sm:text-base font-medium placeholder:text-slate-400 focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-slate-200 focus:border-[#00BFA6]'
                      }`}
                    />
                    {isFieldValid('phone') && (
                      <span className="absolute right-0 bottom-3 text-emerald-600">
                        <Check className="w-4 h-4" />
                      </span>
                    )}
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* BUSINESS NAME */}
                  <div>
                    <label 
                      htmlFor="businessName" 
                      className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1"
                    >
                      Business Name <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Enterprises"
                      className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#00BFA6] py-2.5 px-0 text-slate-800 text-sm sm:text-base font-medium placeholder:text-slate-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* ROW 3: PRIMARY SERVICE NEEDED (SELECT DROPDOWN) */}
                <div>
                  <label 
                    htmlFor="service" 
                    className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1"
                  >
                    Your Subject / Primary Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#00BFA6] py-2.5 px-0 text-slate-800 text-sm sm:text-base font-medium focus:outline-none transition-colors cursor-pointer"
                  >
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc} className="text-slate-800 bg-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ROW 4: MESSAGE (WITH TEAL ACTIVE HIGHLIGHT AS IN REFERENCE IMAGE) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label 
                      htmlFor="message" 
                      className="block text-xs font-bold text-[#00BFA6] uppercase tracking-wider"
                    >
                      Message
                    </label>
                    <span className="text-[11px] font-mono text-slate-400">
                      {formData.message.length} / 1000
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write here your message..."
                    className="w-full bg-transparent border-b-2 border-[#00BFA6] py-2 px-0 text-slate-800 text-sm sm:text-base font-medium placeholder:text-slate-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* ROW 5: SEND MESSAGE BUTTON */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#00BFA6] hover:bg-[#00A58F] disabled:opacity-60 text-white font-bold text-sm sm:text-base shadow-lg shadow-[#00BFA6]/25 hover:shadow-[#00BFA6]/40 transition-all duration-300 flex items-center justify-center gap-2.5 tracking-wide cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>

              </form>
            </div>

          </div>
        )}

      </div>
    </motion.div>
  );
};
