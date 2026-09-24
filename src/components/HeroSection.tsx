import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ContactButton } from './ContactButton.tsx';
import { Magnet } from './Magnet.tsx';
import type { PortfolioConfig } from '../data/portfolioData.ts';

interface HeroSectionProps {
  config: PortfolioConfig;
  onNavClick: (section: 'about' | 'projects' | 'contact') => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  onNavClick,
  onContactClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = (section: 'about' | 'projects' | 'contact') => {
    setMobileMenuOpen(false);
    onNavClick(section);
  };

  return (
    <section className="relative min-h-[100svh] h-[100svh] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex items-center justify-between px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8 z-30"
      >
        {/* Brand indicator for mobile */}
        <span className="sm:hidden text-xs font-bold uppercase tracking-widest text-[#BBCCD7]">
          {config.name}
        </span>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center justify-between w-full">
          <button
            type="button"
            onClick={() => onNavClick('about')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            About
          </button>

          <button
            type="button"
            onClick={() => onNavClick('projects')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => onNavClick('contact')}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="sm:hidden p-2 rounded-xl text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden fixed inset-x-4 top-16 z-50 rounded-2xl bg-[#141414]/95 backdrop-blur-xl border border-white/15 p-6 shadow-2xl flex flex-col gap-4 text-center"
          >
            <button
              type="button"
              onClick={() => handleMobileNav('about')}
              className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-base py-2 hover:text-white"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => handleMobileNav('projects')}
              className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-base py-2 hover:text-white"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => handleMobileNav('contact')}
              className="text-[#D7E2EA] font-semibold uppercase tracking-wider text-base py-2 hover:text-white"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Heading */}
      <div className="overflow-hidden w-full text-center mt-3 sm:mt-4 md:-mt-5 z-0 pointer-events-none select-none px-2">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[14vw] md:text-[15.5vw] lg:text-[17vw]"
        >
          {config.heroHeadline}
        </motion.h1>
      </div>

      {/* 3. Hero Portrait with Magnet */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] xs:w-[280px] sm:w-[350px] md:w-[420px] lg:w-[490px] top-[48%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={120}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center"
        >
          <img
            src={config.avatarUrl}
            alt={`${config.name} - ${config.role} portrait`}
            referrerPolicy="no-referrer"
            className="w-full max-h-[50vh] sm:max-h-[62vh] md:max-h-[68vh] object-contain pointer-events-none drop-shadow-2xl rounded-3xl"
          />
        </Magnet>
      </motion.div>

      {/* 4. Bottom bar */}
      <div className="w-full flex flex-row justify-between items-end pb-5 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-10 z-20 gap-3">
        {/* Left paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ fontSize: 'clamp(0.65rem, 1.3vw, 1.5rem)' }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[140px] xs:max-w-[170px] sm:max-w-[240px] md:max-w-[280px]"
        >
          {config.heroBio}
        </motion.p>

        {/* Right Contact button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="shrink-0"
        >
          <ContactButton onClick={onContactClick} />
        </motion.div>
      </div>
    </section>
  );
};
