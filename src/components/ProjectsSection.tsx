import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn.tsx';
import { LiveProjectButton } from './LiveProjectButton.tsx';
import type { ProjectData } from './ProjectModal.tsx';

export const projectsList: ProjectData[] = [
  {
    id: 'nextlevel-studio',
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    description:
      'A comprehensive 3D brand refresh and motion asset suite for an avant-garde creative studio. Included procedural materials, dynamic typography animation, and interactive WebGL assets.',
    scope: [
      'Art direction & concept design',
      'Hero 3D scenes & lighting',
      'High-poly procedural assets',
      'Social cutdowns & looping motion graphics',
    ],
    tools: ['Blender', 'Octane Render', 'Cinema 4D', 'After Effects'],
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
    liveUrl: 'https://nextlevelstudio.design',
  },
  {
    id: 'aura-brand-identity',
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    description:
      'An exploratory personal study investigating sculptural chrome typography, refractive glass shaders, and surreal spatial aesthetics designed for modern sensory brands.',
    scope: [
      'Custom 3D lettering & typographic geometry',
      'Caustic lighting simulations',
      '4K editorial showcase stills',
      'Interactive WebGL packaging concept',
    ],
    tools: ['Cinema 4D', 'Redshift', 'Three.js', 'Substance Painter'],
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
    liveUrl: 'https://auraidentity.art',
  },
  {
    id: 'solaris-digital',
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    description:
      'Futuristic industrial 3D visualization and kinetic product showcase for Solaris Digital. Developed hyper-detailed mechanical parts, animated assemblies, and conversion-oriented landing page visuals.',
    scope: [
      'Hard-surface CAD modeling & retopology',
      'Mechanical exploded view animations',
      'Studio environment lighting setup',
      'Web-ready GLTF pipeline',
    ],
    tools: ['Blender', 'Houdini', 'Octane', 'Figma'],
    images: {
      col1Top:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      col1Bottom:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      col2:
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
    liveUrl: 'https://solarisdigital.io',
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onOpenProject: (project: ProjectData) => void;
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
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-lg sm:text-2xl md:text-3xl text-white tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="self-end sm:self-center">
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
                alt={`${project.name} preview 1`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              onClick={() => onOpenProject(project)}
              className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#151515] border border-white/10 cursor-pointer group relative"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% width): 1 tall image */}
          <div
            onClick={() => onOpenProject(project)}
            className="md:col-span-7 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#151515] border border-white/10 cursor-pointer group relative min-h-[220px] md:min-h-full"
          >
            <img
              src={project.images.col2}
              alt={`${project.name} preview 3`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
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
            Project
          </h2>
        </FadeIn>

        {/* 3 Stacking Cards */}
        <div className="relative flex flex-col gap-10">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projectsList.length}
              onOpenProject={onOpenProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
