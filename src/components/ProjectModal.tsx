import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { LiveProjectButton } from './LiveProjectButton.tsx';
import type { PortfolioConfig } from '../data/portfolioData.ts';

export type ProjectData = PortfolioConfig['projects'][number];

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactClick,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
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
          className="relative w-full max-w-5xl overflow-hidden rounded-[32px] sm:rounded-[48px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 shadow-2xl text-[#D7E2EA] z-10 my-auto max-h-[92vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D7E2EA]/20">
            <div className="flex items-center gap-4">
              <span className="text-3xl sm:text-4xl font-black text-[#D7E2EA]">
                {project.number}
              </span>
              <div>
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7]">
                  {project.category} Project &bull; {project.tagline}
                </span>
                <h2 className="text-xl sm:text-3xl font-black uppercase text-white">
                  {project.name}
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer rounded-full p-2.5 text-[#D7E2EA] hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto mt-6 pr-2 space-y-8">
            {/* Image Preview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white/5 border border-white/10">
                  <img
                    src={project.images.col1Top}
                    alt={`${project.name} preview 1`}
                    referrerPolicy="no-referrer"
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white/5 border border-white/10">
                  <img
                    src={project.images.col1Bottom}
                    alt={`${project.name} preview 2`}
                    referrerPolicy="no-referrer"
                    className="w-full h-[260px] object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-7">
                <div className="rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white/5 border border-white/10 h-full min-h-[300px]">
                  <img
                    src={project.images.col2}
                    alt={`${project.name} showcase`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full min-h-[476px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Details & Specs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
              <div className="md:col-span-2">
                <h3 className="text-sm uppercase tracking-widest text-[#BBCCD7] mb-2 font-medium">
                  Architecture & Product Solution
                </h3>
                <p className="text-sm sm:text-base text-[#D7E2EA]/90 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/15 text-xs text-[#BBCCD7] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#BBCCD7] mb-2 font-medium">
                    Key Deliverables
                  </h4>
                  <ul className="text-xs space-y-1.5 text-[#D7E2EA]">
                    {project.scope.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-col gap-2.5">
                  {project.liveUrl && (
                    <LiveProjectButton
                      label="View Project"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="w-full text-center"
                    />
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#BBCCD7] hover:text-white py-2 rounded-full border border-white/15 hover:border-white/40 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub Repo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onContactClick();
                    }}
                    className="text-xs uppercase tracking-widest text-[#BBCCD7] hover:text-white py-1 text-center underline cursor-pointer"
                  >
                    Inquire Similar Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
