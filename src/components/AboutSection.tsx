import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import { AnimatedText } from './AnimatedText.tsx';
import { ContactButton } from './ContactButton.tsx';
import type { PortfolioConfig } from '../data/portfolioData.ts';

interface AboutSectionProps {
  config: PortfolioConfig;
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ config, onContactClick }) => {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-16 sm:py-20 overflow-hidden bg-[#0C0C0C]"
    >
      {/* 4 Decorative 3D Images - smoothly scaled and hidden or softened on small screens */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[2%] sm:top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none opacity-40 sm:opacity-80 md:opacity-100">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Decorative Element"
            referrerPolicy="no-referrer"
            className="w-[80px] sm:w-[130px] md:w-[210px] h-auto object-contain select-none drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D object */}
      <div className="absolute bottom-[4%] sm:bottom-[8%] left-[2%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none opacity-40 sm:opacity-80 md:opacity-100">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Sculptural Element"
            referrerPolicy="no-referrer"
            className="w-[70px] sm:w-[110px] md:w-[180px] h-auto object-contain select-none drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[2%] sm:top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none opacity-40 sm:opacity-80 md:opacity-100">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Element"
            referrerPolicy="no-referrer"
            className="w-[80px] sm:w-[130px] md:w-[210px] h-auto object-contain select-none drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D group */}
      <div className="absolute bottom-[4%] sm:bottom-[8%] right-[2%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none opacity-40 sm:opacity-80 md:opacity-100">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Dynamic Group Element"
            referrerPolicy="no-referrer"
            className="w-[85px] sm:w-[130px] md:w-[220px] h-auto object-contain select-none drop-shadow-xl"
          />
        </FadeIn>
      </div>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl text-center px-2">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            style={{ fontSize: 'clamp(2.75rem, 11vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            {config.aboutHeading}
          </h2>
        </FadeIn>

        {/* Gap between heading and text */}
        <div className="h-8 sm:h-12 md:h-16" />

        {/* Animated paragraph */}
        <div className="max-w-[580px] px-2 sm:px-4">
          <AnimatedText
            key={config.aboutText}
            text={config.aboutText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed text-[clamp(0.95rem,1.8vw,1.35rem)]"
          />
        </div>

        {/* Gap between text block and button */}
        <div className="h-10 sm:h-16 md:h-20" />

        {/* Contact button */}
        <FadeIn delay={0.3} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
