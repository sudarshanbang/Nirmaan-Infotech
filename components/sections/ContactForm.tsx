'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassCard';
import { siteConfig } from '@/lib/config';
import { 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowRight, 
  Sparkles, 
  Check, 
  MessageSquare, 
  Home,
  User,
  Building2,
  Mail,
  Phone,
  Layers,
  FileText
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
      if (value.trim().length < 2) return 'Please enter your name (minimum 2 characters).';
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    }, 1200);
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
    >
      <GlassCard variant="glow" className="p-6 sm:p-10 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl rounded-2xl relative overflow-hidden text-slate-900 w-full">
        {/* Thin Electric Blue Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#1677FF]" />

        {/* SUCCESS SCREEN */}
        {status === 'success' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="py-10 text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest bg-emerald-100 text-emerald-800">
                REQUEST RECEIVED
              </span>
              <h3 className="text-3xl font-black text-[#071A36] tracking-tight">
                THANK YOU!
              </h3>
              <p className="text-base font-bold text-slate-800 max-w-md mx-auto">
                Your project enquiry has been received.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed font-normal">
                We&apos;ll review your requirements and get back to you with a tailored plan as soon as possible.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[14px] bg-slate-100 hover:bg-slate-200 text-[#071A36] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                <span>Back to Website</span>
              </Link>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-[14px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
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
                className="text-xs text-slate-400 underline hover:text-[#1677FF] font-medium transition-colors"
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
            className="py-10 text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#071A36]">We couldn&apos;t submit your request</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                {submissionError || "Please try again or contact us directly on WhatsApp."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setStatus('idle')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1677FF] text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-600 transition-colors"
              >
                Try Again
              </button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        ) : (
          /* SINGLE-PAGE COMPLETE FORM */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* FORM HEADER */}
            <div className="border-b border-slate-100 pb-5">
              <div className="flex items-center gap-2 text-[#1677FF] text-xs font-extrabold uppercase tracking-widest mb-1">
                <Sparkles className="w-4 h-4" />
                <span>FREE PROJECT EVALUATION</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#071A36] tracking-tight">
                Get a Free Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-relaxed">
                Tell us about your business and project needs. We&apos;ll craft a tailored plan for you.
              </p>
            </div>

            {/* 2-COLUMN GRID (DESKTOP) / 1-COLUMN (MOBILE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* ROW 1: YOUR NAME */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="name" 
                    className={`block text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                      errors.name ? 'text-red-600' : 'text-slate-700'
                    }`}
                  >
                    Your Name <span className="text-[#1677FF]">*</span>
                  </label>
                  {isFieldValid('name') && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full"
                    >
                      <Check className="w-3 h-3" /> Valid
                    </motion.span>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1677FF] transition-colors">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Rahul Sharma"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full pl-10 pr-4 py-3.5 rounded-[14px] bg-[#F8FAFC] border text-slate-900 text-sm font-medium transition-all focus:outline-none placeholder:text-slate-400 ${
                      errors.name
                        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10'
                        : 'border-[#D8E0EC] hover:border-slate-300 focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/10 shadow-sm'
                    }`}
                  />
                </div>
                {errors.name && (
                  <motion.p
                    id="name-error"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </motion.p>
                )}
              </div>

              {/* ROW 1: BUSINESS NAME */}
              <div>
                <label 
                  htmlFor="businessName" 
                  className="block text-[11px] font-extrabold text-slate-700 mb-1.5 uppercase tracking-wider"
                >
                  Business Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1677FF] transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    id="businessName"
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Enterprises"
                    className="w-full pl-10 pr-4 py-3.5 rounded-[14px] bg-[#F8FAFC] border border-[#D8E0EC] hover:border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/10 transition-all placeholder:text-slate-400 shadow-sm"
                  />
                </div>
              </div>

              {/* ROW 2: EMAIL ADDRESS */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="email" 
                    className={`block text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                      errors.email ? 'text-red-600' : 'text-slate-700'
                    }`}
                  >
                    Email Address <span className="text-[#1677FF]">*</span>
                  </label>
                  {isFieldValid('email') && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full"
                    >
                      <Check className="w-3 h-3" /> Valid
                    </motion.span>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1677FF] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full pl-10 pr-4 py-3.5 rounded-[14px] bg-[#F8FAFC] border text-slate-900 text-sm font-medium transition-all focus:outline-none placeholder:text-slate-400 ${
                      errors.email
                        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10'
                        : 'border-[#D8E0EC] hover:border-slate-300 focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/10 shadow-sm'
                    }`}
                  />
                </div>
                {errors.email && (
                  <motion.p
                    id="email-error"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </motion.p>
                )}
              </div>

              {/* ROW 2: PHONE NUMBER */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label 
                    htmlFor="phone" 
                    className={`block text-[11px] font-extrabold uppercase tracking-wider transition-colors ${
                      errors.phone ? 'text-red-600' : 'text-slate-700'
                    }`}
                  >
                    Phone Number <span className="text-[#1677FF]">*</span>
                  </label>
                  {isFieldValid('phone') && (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full"
                    >
                      <Check className="w-3 h-3" /> Valid
                    </motion.span>
                  )}
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1677FF] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+91 82082 16317"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`w-full pl-10 pr-4 py-3.5 rounded-[14px] bg-[#F8FAFC] border text-slate-900 text-sm font-medium transition-all focus:outline-none placeholder:text-slate-400 ${
                      errors.phone
                        ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/10'
                        : 'border-[#D8E0EC] hover:border-slate-300 focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/10 shadow-sm'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <motion.p
                    id="phone-error"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-xs text-red-600 font-semibold flex items-center gap-1"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.phone}</span>
                  </motion.p>
                )}
              </div>

              {/* ROW 3: PRIMARY SERVICE NEEDED (FULL WIDTH) */}
              <div className="sm:col-span-2">
                <label 
                  htmlFor="service" 
                  className="block text-[11px] font-extrabold text-slate-700 mb-1.5 uppercase tracking-wider"
                >
                  Primary Service Needed
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#1677FF] transition-colors">
                    <Layers className="w-4 h-4" />
                  </div>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3.5 rounded-[14px] bg-[#F8FAFC] border border-[#D8E0EC] hover:border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/10 transition-all cursor-pointer shadow-sm"
                  >
                    {servicesList.map((svc) => (
                      <option key={svc} value={svc} className="bg-white text-slate-900">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

            </div>

            {/* ROW 4: PROJECT DETAILS & REQUIREMENTS (FULL WIDTH) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label 
                  htmlFor="message" 
                  className="block text-[11px] font-extrabold text-slate-700 uppercase tracking-wider"
                >
                  Project Details & Requirements
                </label>
                <span className="text-[11px] font-bold text-slate-400">
                  {formData.message.length} / 1000
                </span>
              </div>
              <div className="relative group">
                <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400 group-focus-within:text-[#1677FF] transition-colors">
                  <FileText className="w-4 h-4" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your business, what you want to build, or what you want to improve..."
                  className="w-full pl-10 pr-4 py-3.5 rounded-[14px] bg-[#F8FAFC] border border-[#D8E0EC] hover:border-slate-300 text-slate-900 text-sm font-medium focus:outline-none focus:border-[#1677FF] focus:ring-2 focus:ring-[#1677FF]/10 transition-all placeholder:text-slate-400 resize-none shadow-sm"
                />
              </div>
            </div>

            {/* ROW 5: SUBMIT BUTTON (FULL WIDTH / ELEVATED CTA) */}
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full py-4 px-6 rounded-[14px] bg-[#1677FF] hover:bg-blue-600 disabled:opacity-50 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-3 tracking-wider uppercase cursor-pointer"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>GET MY FREE CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </>
              )}
            </motion.button>

          </form>
        )}
      </GlassCard>
    </motion.div>
  );
};
