/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection.tsx';
import { MarqueeSection } from './components/MarqueeSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { ProjectModal, type ProjectData } from './components/ProjectModal.tsx';
import { Footer } from './components/Footer.tsx';
import { defaultPortfolioConfig } from './data/portfolioData.ts';

export default function App() {
  const config = defaultPortfolioConfig;
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Full Stack Web Architecture');
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  const handleNavClick = (section: 'about' | 'projects' | 'contact') => {
    if (section === 'about') {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
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

  return (
    <div
      style={{ overflowX: 'clip' }}
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#BBCCD7] selection:text-[#0C0C0C]"
    >
      {/* 1. HERO SECTION */}
      <HeroSection
        config={config}
        onNavClick={handleNavClick}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection
        config={config}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* 4. SERVICES SECTION (Only Contact Inquiry) */}
      <ServicesSection
        services={config.services}
        onSelectService={handleOpenContactWithService}
      />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection
        projects={config.projects}
        onOpenProject={(proj) => setActiveProject(proj)}
      />

      {/* FOOTER */}
      <Footer
        config={config}
        onNavClick={handleNavClick}
      />

      {/* INTERACTIVE MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedService}
        config={config}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onContactClick={() => setIsContactOpen(true)}
      />
    </div>
  );
}
