import React from 'react';
import { ArrowUp, Instagram, Twitter, Linkedin, Dribbble, Github } from 'lucide-react';

interface FooterProps {
  onNavClick: (section: 'about' | 'price' | 'projects' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-white/10 px-6 md:px-10 py-12 text-[#D7E2EA] select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand mark */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold uppercase tracking-wider text-white">
            JACK
          </span>
          <span className="text-xs text-[#BBCCD7] font-light uppercase tracking-wider">
            3D Creator & Visual Designer
          </span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-[#BBCCD7]">
          <button
            type="button"
            onClick={() => onNavClick('about')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => onNavClick('price')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Price
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
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#BBCCD7]/60">
            &copy; {new Date().getFullYear()} Jack. All rights reserved.
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
