import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Mail } from 'lucide-react';
import { ContactButton } from './ContactButton.tsx';
import type { PortfolioConfig } from '../data/portfolioData.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  config: PortfolioConfig;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Full Stack Web Architecture',
  config,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [timeline, setTimeline] = useState('Within 2-4 weeks');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-5 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 my-auto max-h-[95vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#D7E2EA]/15">
              <div>
                <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#BBCCD7]">
                  Work With {config.name}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white mt-1">
                  Start an Inquiry
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-full p-2 text-[#D7E2EA] hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-10 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                  Inquiry Sent!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#BBCCD7] max-w-sm mx-auto">
                  Thank you, {name || 'there'}. {config.name} will review your inquiry and reach out at{' '}
                  <span className="text-white font-medium">{email}</span> within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 space-y-3.5 sm:space-y-4">
                {/* Direct Email Badge */}
                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-xs">
                  <div className="flex items-center gap-2 text-[#BBCCD7] truncate pr-2">
                    <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="truncate">Direct: {config.socials.email}</span>
                  </div>
                  <a
                    href={`mailto:${config.socials.email}`}
                    className="text-[11px] sm:text-xs uppercase tracking-wider text-white hover:underline shrink-0"
                  >
                    Open Mail
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl sm:rounded-2xl bg-white/5 border border-[#D7E2EA]/20 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:border-[#BBCCD7] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full rounded-xl sm:rounded-2xl bg-white/5 border border-[#D7E2EA]/20 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:border-[#BBCCD7] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mb-1">
                      Service Inquiry
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-xl sm:rounded-2xl bg-[#141414] border border-[#D7E2EA]/20 px-3 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:border-[#BBCCD7] focus:outline-none transition-colors cursor-pointer"
                    >
                      {config.services.map((s) => (
                        <option key={s.name} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="General Full Stack Project">Full Stack Project Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mb-1">
                      Project Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full rounded-xl sm:rounded-2xl bg-[#141414] border border-[#D7E2EA]/20 px-3 py-2.5 sm:py-3 text-xs sm:text-sm text-white focus:border-[#BBCCD7] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Immediately / ASAP">Immediately / ASAP</option>
                      <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                      <option value="Flexible / Exploration">Flexible / Exploration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs uppercase tracking-wider text-[#BBCCD7] mb-1">
                    Project Brief / Details
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Victoria about your web application, goals, stack requirements, and timeline..."
                    className="w-full rounded-xl sm:rounded-2xl bg-white/5 border border-[#D7E2EA]/20 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm text-white placeholder-white/30 focus:border-[#BBCCD7] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-[#BBCCD7]/70 text-center sm:text-left">
                    Direct reply to {email || 'your email'}
                  </span>
                  <ContactButton label="Send Inquiry" className="w-full sm:w-auto !py-2.5 sm:!py-3 !px-6" />
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
