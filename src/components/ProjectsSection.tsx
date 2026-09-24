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
      className="h-[85vh] sticky flex items-start justify-center"
      style={{
        top: `calc(${index * 28}px + 5.5rem)`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl transition-shadow flex flex-col justify-between"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              className="font-black text-[#D7E2EA] leading-none shrink-0"
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-medium">
                {project.category} &bull; {project.tagline}
              </span>
              <h3 className="font-medium uppercase text-lg sm:text-2xl md:text-3xl text-white tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="self-end sm:self-center flex items-center gap-3">
            <LiveProjectButton onClick={() => onOpenProject(project)} />
          </div>
        </div>

        {/* Bottom Row: 2-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-4 sm:pt-6">
          {/* Left Column (40% width): 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Left Top Image */}
            <div
              onClick={() => onOpenProject(project)}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#151515] border border-white/10 cursor-pointer group relative"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
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
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#151515] border border-white/10 cursor-pointer group relative"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
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

          {/* Right Column (60% width): 1 tall image */}
          <div
            onClick={() => onOpenProject(project)}
            className="md:col-span-7 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#151515] border border-white/10 cursor-pointer group relative min-h-[220px] md:min-h-full"
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
      className="relative z-10 w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-40 select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="mb-16 sm:mb-20 md:mb-28 text-center">
          <h2
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            className="hero-heading font-black uppercase leading-none tracking-tight"
          >
            Projects
          </h2>
          <p className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-[#BBCCD7] font-light">
            Selected Full Stack &bull; Web &bull; E-Commerce &bull; Fintech Engineering
          </p>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="relative flex flex-col gap-10">
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
