'use client';

import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    'Website Development',
    'E-commerce',
    'Website Redesign',
    'SEO',
    'Maintenance',
    'Branding',
    'Custom Digital Solution',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  return (
    <GlassCard variant="light" className="p-6 sm:p-10 bg-white border-slate-200 shadow-xl">
      {status === 'success' ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900">Consultation Request Received!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-slate-900 font-bold">{formData.name}</span>. Our technical team at Nirmaan Infotech will review your requirements and reach out via Email / WhatsApp within 24 hours.
          </p>
          <div className="pt-4">
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
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 text-slate-900">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-2xl font-extrabold text-slate-900">Get a Free Consultation</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Tell us about your business goals and we will respond with a tailored plan.
            </p>
          </div>

          {status === 'error' && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 font-medium">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* NAME */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Your Name <span className="text-blue-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* BUSINESS NAME */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                placeholder="e.g. Apex Enterprises"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Email Address <span className="text-blue-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Phone Number <span className="text-blue-600">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 82082 16317"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* SERVICE DROPDOWN */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Primary Service Needed
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors font-medium"
              >
                {servicesList.map((svc) => (
                  <option key={svc} value={svc} className="bg-white text-slate-900">
                    {svc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              Project Details & Requirements
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business, current website (if any), key goals, and timeline..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors placeholder:text-slate-400 font-medium resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-extrabold text-base shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <span>GET MY FREE CONSULTATION</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </GlassCard>
  );
};
