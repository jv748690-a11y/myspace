import React, { useEffect, useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'translate3d(0px, 0px, 0px)',
    transition: inactiveTransition,
    willChange: 'transform',
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const leftBound = rect.left - padding;
      const rightBound = rect.right + padding;
      const topBound = rect.top - padding;
      const bottomBound = rect.bottom + padding;

      const isInside =
        e.clientX >= leftBound &&
        e.clientX <= rightBound &&
        e.clientY >= topBound &&
        e.clientY <= bottomBound;

      if (isInside) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / strength;
        const deltaY = (e.clientY - centerY) / strength;

        setStyle({
          transform: `translate3d(${deltaX}px, ${deltaY}px, 0px)`,
          transition: activeTransition,
          willChange: 'transform',
        });
      } else {
        setStyle({
          transform: 'translate3d(0px, 0px, 0px)',
          transition: inactiveTransition,
          willChange: 'transform',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={containerRef} style={style} className={`inline-block ${className}`}>
      {children}
    </div>
  );
};
