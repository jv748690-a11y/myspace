import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharSpanProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharSpan: React.FC<CharSpanProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ opacity }} className="absolute inset-0 select-none">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  const words = text.split(' ');
  let charCounter = 0;

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const charElements = wordChars.map((char) => {
          const currentIndex = charCounter;
          charCounter += 1;
          const start = currentIndex / totalChars;
          const end = Math.min(1, (currentIndex + 1) / totalChars);

          return (
            <CharSpan
              key={currentIndex}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        });

        // Add space tracking if not last word
        let spaceElement = null;
        if (wordIdx < words.length - 1) {
          const spaceIndex = charCounter;
          charCounter += 1;
          const start = spaceIndex / totalChars;
          const end = Math.min(1, (spaceIndex + 1) / totalChars);
          spaceElement = (
            <span key={`space-${spaceIndex}`} className="inline-block">
              &nbsp;
            </span>
          );
        }

        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {charElements}
            {spaceElement}
          </span>
        );
      })}
    </p>
  );
};
