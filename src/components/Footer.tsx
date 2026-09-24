import React from 'react';
import { ArrowUp, Instagram, Github, Mail, Twitter } from 'lucide-react';
import type { PortfolioConfig } from '../data/portfolioData.ts';

interface FooterProps {
  config: PortfolioConfig;
  onNavClick: (section: 'about' | 'projects' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-12 text-[#D7E2EA] select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand mark */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold uppercase tracking-wider text-white">
            {config.name}
          </span>
          <span className="text-xs text-[#BBCCD7] font-light uppercase tracking-wider">
            {config.role} &bull; Web & Product Engineering
          </span>
        </div>

        {/* Quick Nav & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs uppercase tracking-widest text-[#BBCCD7]">
          <button
            type="button"
            onClick={() => onNavClick('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => onNavClick('projects')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => onNavClick('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>

          <span className="text-white/20">|</span>

          {/* Socials */}
          <a
            href={config.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="X (Twitter)"
          >
            <Twitter className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">X</span>
          </a>

          <a
            href={config.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">IG</span>
          </a>

          <a
            href={config.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href={`mailto:${config.socials.email}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#BBCCD7]/60">
            &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-full border border-white/20 text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
