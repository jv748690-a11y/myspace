import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton.tsx';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = '3D Modeling',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [budget, setBudget] = useState('$5k - $10k');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback for 3 seconds then close
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#D7E2EA]/15">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7]">
                  Let&apos;s collaborate
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                  Start a Project
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-full p-2.5 text-[#D7E2EA] hover:bg-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  Message Sent!
                </h3>
                <p className="mt-2 text-sm text-[#BBCCD7] max-w-sm mx-auto">
                  Thank you, {name || 'friend'}. Jack will review your project brief and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#BBCCD7] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full rounded-2xl bg-white/5 border border-[#D7E2EA]/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#BBCCD7] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#BBCCD7] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full rounded-2xl bg-white/5 border border-[#D7E2EA]/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#BBCCD7] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#BBCCD7] mb-1.5">
                      Service Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-2xl bg-[#141414] border border-[#D7E2EA]/20 px-4 py-3 text-sm text-white focus:border-[#BBCCD7] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="3D Modeling">3D Modeling</option>
                      <option value="Rendering">Photorealistic Rendering</option>
                      <option value="Motion Design">Motion Design</option>
                      <option value="Branding">Brand Identity & 3D</option>
                      <option value="Web Design">3D Web Experience</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#BBCCD7] mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-2xl bg-[#141414] border border-[#D7E2EA]/20 px-4 py-3 text-sm text-white focus:border-[#BBCCD7] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="$2.5k - $5k">$2,500 – $5,000</option>
                      <option value="$5k - $10k">$5,000 – $10,000</option>
                      <option value="$10k+">$10,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#BBCCD7] mb-1.5">
                    Project Brief
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Jack about your vision, timeline, and key deliverables..."
                    className="w-full rounded-2xl bg-white/5 border border-[#D7E2EA]/20 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#BBCCD7] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <span className="text-[11px] text-[#BBCCD7]/60 hidden sm:inline">
                    Direct reply in &le; 24h
                  </span>
                  <ContactButton label="Send Message" className="w-full sm:w-auto" />
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
