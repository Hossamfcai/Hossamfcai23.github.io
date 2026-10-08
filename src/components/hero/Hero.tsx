import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileText, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import { CodePreviewCard } from './CodePreviewCard';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const techBadges = [
    'React.js',
    'TypeScript',
    'JavaScript ES6+',
    'REST APIs',
    'useReducer / Context',
    'Tailwind CSS',
    'Zod Validation',
    'Responsive UI'
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden tech-grid-bg"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Positioning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status & Eyebrow Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-0.5" />
                {personalInfo.eyebrow}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              I build modern web experiences with{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                React & TypeScript.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Front-End Developer focused on building responsive, scalable web applications with{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">React</strong>,{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">TypeScript</strong>, and modern JavaScript.
              Experienced in modular state management (<code className="text-indigo-400 bg-indigo-950/40 px-1 py-0.5 rounded text-sm">useReducer + useContext</code>),
              robust REST API integration, and type-safe forms with 100+ production pages shipped.
            </p>

            {/* Tech pills stream */}
            <div className="mt-6 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-indigo-400" /> Core Stack:
              </span>
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/60 dark:bg-slate-900/80 text-slate-300 border border-slate-700/60"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs & Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-slate-150 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Social Links & Real Profile Verification */}
            <div className="mt-8 pt-6 border-t border-slate-200/40 dark:border-slate-800/80 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/{personalInfo.githubUsername}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Code & Architecture Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative">
              {/* Glow backdrop behind preview card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-70" />
              <CodePreviewCard />
            </div>

            {/* Key Verified Stats Bar */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.keyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800/80 backdrop-blur-sm flex flex-col"
                >
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-mono flex items-center gap-1">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400 mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
