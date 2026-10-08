import React from 'react';
import { Modal } from '../common/Modal';
import type { Project } from '../../types';
import { Badge } from '../common/Badge';
import { ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.tagline}
      maxWidth="4xl"
    >
      <div className="space-y-8">
        {/* Top Action Bar & Quick Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/80">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="primary">{project.coreTechBadge}</Badge>
            {project.featuredMetric && (
              <Badge variant="emerald" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                {project.featuredMetric}
              </Badge>
            )}
            <Badge variant="outline">{project.role}</Badge>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Live Application</span>
              </a>
            )}

            {project.repoLinks.map((repo) => (
              <a
                key={repo.url}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>{repo.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Detailed Overview */}
        <div>
          <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Project Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.detailedOverview}
          </p>
        </div>

        {/* Hossam's Exact Ownership & Technical Contribution */}
        <div className="p-5 rounded-xl bg-indigo-950/30 border border-indigo-500/30">
          <h4 className="text-sm font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-400" />
            Hossam's Technical Contribution & Ownership
          </h4>
          <ul className="space-y-2.5">
            {project.contribution.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Design & Highlights */}
        <div>
          <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Architecture & State Flow
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
            {project.architecture.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.architecture.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-800/70 border border-slate-700/70 text-xs font-mono text-slate-300"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Decisions & Challenges Solved */}
        {project.challengesSolved.length > 0 && (
          <div>
            <h4 className="text-base font-bold text-white mb-3">
              Engineering Challenges Solved
            </h4>
            <ul className="space-y-2">
              {project.challengesSolved.map((challenge, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <span className="text-indigo-400 font-bold shrink-0">→</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Full Technology Stack */}
        <div>
          <h4 className="text-base font-bold text-white mb-3">
            Technologies & Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
