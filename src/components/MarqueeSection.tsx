import React, { useEffect, useRef, useState } from 'react';

const row1Gifs = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
];

const row2Gifs = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const row1Images = [...row1Gifs, ...row1Gifs, ...row1Gifs];
const row2Images = [...row2Gifs, ...row2Gifs, ...row2Gifs];

interface MarqueeTileProps {
  src: string;
  index: number;
}

const MarqueeTile: React.FC<MarqueeTileProps> = ({ src, index }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#151515] border border-white/10 relative">
      {!hasError ? (
        <img
          src={src}
          alt={`3D Motion Showcase ${index + 1}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover rounded-2xl select-none pointer-events-none"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-4 text-center">
          <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
            Jack 3D Motion
          </span>
          <span className="text-[11px] text-white/50 mt-1">Render #{index + 1}</span>
        </div>
      )}
    </div>
  );
};

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(calculatedOffset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#0C0C0C] pt-16 sm:pt-28 md:pt-40 pb-8 sm:pb-10"
    >
      <div className="flex flex-col gap-2.5 sm:gap-3">
        {/* Row 1: Moves right on scroll */}
        <div
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
          className="flex gap-2.5 sm:gap-3 transition-transform duration-75 ease-out"
        >
          {row1Images.map((src, i) => (
            <MarqueeTile key={`row1-${i}-${src.slice(-12)}`} src={src} index={i} />
          ))}
        </div>

        {/* Row 2: Moves left on scroll */}
        <div
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
          className="flex gap-2.5 sm:gap-3 transition-transform duration-75 ease-out"
        >
          {row2Images.map((src, i) => (
            <MarqueeTile key={`row2-${i}-${src.slice(-12)}`} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
