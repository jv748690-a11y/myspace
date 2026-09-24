import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn.tsx';
import { LiveProjectButton } from './LiveProjectButton.tsx';
import type { PortfolioConfig } from '../data/portfolioData.ts';

type ProjectItem = PortfolioConfig['projects'][number];

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  totalCards,
  onOpenProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="min-h-[auto] md:h-[85vh] md:sticky flex items-start justify-center"
      style={{
        top: `calc(${index * 24}px + 5rem)`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-[28px] sm:rounded-[40px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl transition-shadow flex flex-col justify-between"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-3 sm:gap-6">
            <span
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
              className="font-black text-[#D7E2EA] leading-none shrink-0"
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-[#BBCCD7] font-medium">
                {project.category} &bull; {project.tagline}
              </span>
              <h3 className="font-medium uppercase text-base sm:text-2xl md:text-3xl text-white tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="self-start sm:self-center flex items-center gap-3">
            <LiveProjectButton
              onClick={() => onOpenProject(project)}
              className="!text-xs sm:!text-sm !px-5 !py-2 sm:!px-8 sm:!py-3"
            />
          </div>
        </div>

        {/* Bottom Row: 2-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5 md:gap-6 pt-3 sm:pt-6">
          {/* Left Column: 2 stacked images */}
          <div className="md:col-span-5 grid grid-cols-2 md:flex md:flex-col gap-3 sm:gap-5 md:gap-6">
            {/* Left Top Image */}
            <div
              onClick={() => onOpenProject(project)}
              className="rounded-[20px] sm:rounded-[36px] md:rounded-[50px] overflow-hidden bg-[#151515] border border-white/10 cursor-pointer group relative h-[120px] sm:h-[180px] md:h-[clamp(130px,16vw,230px)]"
            >
              <img
                src={project.images.col1Top}
                alt={`${project.name} overview`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Left Bottom Image */}
            <div
              onClick={() => onOpenProject(project)}
              className="rounded-[20px] sm:rounded-[36px] md:rounded-[50px] overflow-hidden bg-[#151515] border border-white/10 cursor-pointer group relative h-[120px] sm:h-[180px] md:h-[clamp(160px,22vw,340px)]"
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} features`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          </div>

          {/* Right Column: 1 tall image */}
          <div
            onClick={() => onOpenProject(project)}
            className="md:col-span-7 rounded-[24px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-[#151515] border border-white/10 cursor-pointer group relative h-[180px] sm:h-[260px] md:h-full md:min-h-[300px]"
          >
            <img
              src={project.images.col2}
              alt={`${project.name} hero showcase`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  projects: PortfolioConfig['projects'];
  onOpenProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onOpenProject,
}) => {
  return (
    <section
      id="projects"
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-8 sm:-mt-12 md:-mt-14 px-3 sm:px-6 md:px-10 pt-16 sm:pt-24 md:pt-32 pb-24 sm:pb-36 md:pb-40 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="mb-10 sm:mb-16 md:mb-24 text-center px-2">
          <h2
            style={{ fontSize: 'clamp(2.75rem, 11vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            Projects
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm uppercase tracking-widest text-[#BBCCD7] font-light max-w-lg mx-auto">
            Selected Full Stack &bull; Web &bull; E-Commerce &bull; Fintech Engineering
          </p>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="relative flex flex-col gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projects.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
