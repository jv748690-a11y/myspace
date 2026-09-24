/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { MarqueeSection } from './components/MarqueeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { PricingModal } from './components/PricingModal.tsx';
import { ProjectModal, type ProjectData } from './components/ProjectModal.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('3D Modeling');
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  const handleNavClick = (section: 'about' | 'price' | 'projects' | 'contact') => {
    if (section === 'about') {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'price') {
      setIsPricingOpen(true);
    } else if (section === 'projects') {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (section === 'contact') {
      setIsContactOpen(true);
    }
  };

  const handleOpenContactWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsContactOpen(true);
  };

  const handleSelectPricingTier = (tierName: string) => {
    setIsPricingOpen(false);
    setSelectedService(tierName);
    setIsContactOpen(true);
  };

  return (
    <div
      style={{ overflowX: 'clip' }}
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#BBCCD7] selection:text-[#0C0C0C]"
    >
      {/* 1. HERO SECTION */}
      <HeroSection
        onNavClick={handleNavClick}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. SERVICES SECTION */}
      <ServicesSection onSelectService={handleOpenContactWithService} />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection onOpenProject={(proj) => setActiveProject(proj)} />

      {/* FOOTER */}
      <Footer onNavClick={handleNavClick} />

      {/* INTERACTIVE MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedService}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onSelectTier={handleSelectPricingTier}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onContactClick={() => setIsContactOpen(true)}
      />
    </div>
  );
}
