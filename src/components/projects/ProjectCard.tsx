import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types';
import { ExternalLink, ChevronRight, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl bg-slate-900/80 dark:bg-slate-900/90 border border-slate-800/80 hover:border-indigo-500/50 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
    >
      <div className="p-6 sm:p-8">
        {/* Top Header & Metrics */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-mono font-medium text-slate-400">
              {project.category}
            </span>
          </div>

          {project.featuredMetric && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              {project.featuredMetric}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl font-extrabold text-white group-hover:text-indigo-300 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-indigo-400/90">
          {project.tagline}
        </p>

        {/* Core Description */}
        <p className="mt-4 text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Key Contribution Highlights Box */}
        <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
          <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Hossam's Technical Contribution:</span>
          </div>
          <ul className="space-y-2">
            {project.contribution.slice(0, 3).map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Badges */}
        <div className="mt-6">
          <div className="text-xs font-mono text-slate-400 mb-2">Technologies Used:</div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 7).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 7 && (
              <span className="px-2 py-1 rounded-md text-xs font-mono bg-slate-800/40 text-slate-400 border border-slate-800">
                +{project.technologies.length - 7} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Actions */}
      <div className="p-6 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-all cursor-pointer"
        >
          <span>Explore Architecture Details</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live demo for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live App</span>
            </a>
          )}

          {project.repoLinks.map((repo) => (
            <a
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub repository for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>{project.repoLinks.length > 1 ? repo.label.replace(' Repo', '') : 'GitHub'}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
