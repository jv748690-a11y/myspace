import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { ContactButton } from './ContactButton.tsx';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: (tierName: string) => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({
  isOpen,
  onClose,
  onSelectTier,
}) => {
  const tiers = [
    {
      name: 'Asset / Modeling Sprint',
      price: '$2,500',
      period: 'per asset / sprint',
      desc: 'Ideal for games, product mockups, and individual hero visual elements.',
      features: [
        'High-poly or game-ready mesh topology',
        'Custom 4K PBR textures & UV unwrapping',
        '3 revisions included',
        'Deliverables in FBX, OBJ, GLTF & Blender file',
      ],
    },
    {
      name: 'Motion & Key Visuals',
      price: '$5,000',
      period: 'per project',
      popular: true,
      desc: 'Complete high-impact 3D visual package with animated motion loops.',
      features: [
        'Complete scene direction & lighting design',
        'Photorealistic 4K still renders (up to 5)',
        '10-15s animated loop / product showcase',
        'Cinema 4D / Octane or Blender source files',
        'Sound design synchronization',
      ],
    },
    {
      name: 'Complete 3D Brand Experience',
      price: '$9,000',
      period: 'comprehensive',
      desc: 'Full-spectrum 3D brand identity, WebGL assets, and art direction.',
      features: [
        'Full brand 3D design system & guidelines',
        'Interactive WebGL/Three.js web-ready models',
        'Multi-angle hero renders and motion suite',
        'Direct collaborative art direction with Jack',
        'Priority delivery within 3-4 weeks',
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl overflow-hidden rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/30 bg-[#0C0C0C] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 my-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#D7E2EA]/15">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7]">
                  Transparent engagement models
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-white mt-1">
                  Pricing & Services
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

            {/* Tiers Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all border ${
                    tier.popular
                      ? 'border-[#BBCCD7] bg-white/[0.07] ring-1 ring-[#BBCCD7]/50'
                      : 'border-white/10 bg-white/[0.03]'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-[#B600A8] to-[#7621B0] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Most Requested
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold uppercase text-white tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#BBCCD7] leading-relaxed min-h-[36px]">
                      {tier.desc}
                    </p>

                    <div className="mt-5 pb-5 border-b border-white/10">
                      <span className="text-3xl font-black text-white">{tier.price}</span>
                      <span className="text-xs text-[#BBCCD7] block mt-0.5">
                        {tier.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5 text-xs text-[#D7E2EA]">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#BBCCD7] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => onSelectTier(tier.name)}
                      className="w-full py-2.5 px-4 rounded-full border border-[#D7E2EA]/40 text-xs uppercase tracking-widest font-medium text-white hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
                    >
                      Inquire Tier
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#BBCCD7] text-center sm:text-left">
                Need a bespoke scope or ongoing retainer? Custom scopes available on request.
              </p>
              <ContactButton
                label="Custom Quote"
                onClick={() => onSelectTier('Custom Quote')}
                className="!text-xs !py-2.5 !px-6"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
