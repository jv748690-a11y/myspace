import React from 'react';
import { FadeIn } from './FadeIn.tsx';
import type { PortfolioConfig } from '../data/portfolioData.ts';

interface ServicesSectionProps {
  services: PortfolioConfig['services'];
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
}) => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 select-none"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
              className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
            >
              Services
            </h2>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-black/60 font-medium">
              Comprehensive Full Stack Capabilities &bull; Inquiries Only
            </p>
          </div>
        </FadeIn>

        {/* Vertical List */}
        <div className="divide-y divide-[rgba(12,12,12,0.15)] border-t border-b border-[rgba(12,12,12,0.15)]">
          {services.map((service, index) => (
            <FadeIn key={service.number} delay={index * 0.08} y={30} duration={0.7}>
              <div
                onClick={() => onSelectService?.(service.name)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectService?.(service.name);
                  }
                }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 gap-4 md:gap-12 cursor-pointer transition-colors duration-200 hover:bg-black/[0.02] px-2 rounded-2xl"
              >
                {/* Number */}
                <div
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                  className="font-black text-[#0C0C0C] leading-none shrink-0 tracking-tighter"
                >
                  {service.number}
                </div>

                {/* Stacked Name & Description */}
                <div className="flex flex-col gap-2 md:gap-3 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                      className="font-medium uppercase text-[#0C0C0C] tracking-tight group-hover:translate-x-1 transition-transform duration-200"
                    >
                      {service.name}
                    </h3>
                    <span className="hidden sm:inline-block text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-black/20 text-black/70 group-hover:bg-black group-hover:text-white transition-colors">
                      Inquire
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                      color: 'rgba(12, 12, 12, 0.65)',
                    }}
                    className="font-light leading-relaxed max-w-2xl"
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
