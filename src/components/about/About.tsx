import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { CheckCircle2, Code2, Cpu, GitBranch, Layers, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';

export const About: React.FC = () => {
  const coreCompetencies = [
    {
      title: 'Primary Framework: React.js',
      description: 'Modern component architecture, custom hooks, and predictable state flow with useReducer & Context API.',
      icon: <Code2 className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Type Safety with TypeScript',
      description: '98.7% TypeScript codebases with zero loose typing, generic interfaces, and schema inference via Zod.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'Real-World Production Delivery',
      description: 'Delivered 100+ responsive educational content pages for Selah El Telmeez (live K–12 EdTech platform).',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />
    },
    {
      title: 'Decoupled API Services',
      description: 'Isolating data fetching from UI components using dedicated Axios instances, interceptors, and typed contracts.',
      icon: <Cpu className="w-5 h-5 text-amber-400" />
    },
    {
      title: 'Multi-Framework Experience',
      description: 'Hands-on practical development with Angular (NTI intensive programme) and Vue.js (EdTech templates).',
      icon: <Layers className="w-5 h-5 text-violet-400" />
    },
    {
      title: 'Collaborative Workflows',
      description: 'Version control with Git/GitHub, multi-repo project coordination, and Agile/Scrum team development.',
      icon: <GitBranch className="w-5 h-5 text-pink-400" />
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Background & Overview"
          title="Engineering-first front-end development."
          subtitle="A clear focus on scalable architecture, maintainable components, and reliable production delivery."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative Box */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-8 rounded-2xl bg-slate-900/80 dark:bg-slate-900/90 border border-slate-800 backdrop-blur-sm relative"
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold text-lg">
                HI
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs font-mono text-slate-400">Front-End Developer · Cairo, Egypt</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                I am a <strong className="text-white">Front-End Developer</strong> with a solid academic foundation in Computing and Artificial Intelligence from Helwan University (Grade: Very Good).
              </p>
              <p>
                My primary framework is <strong className="text-white">React.js</strong> with <strong className="text-white">TypeScript</strong>, where I emphasize clean separation of concerns: modular UI components, domain-specific state reducers, and decoupled API service layers.
              </p>
              <p>
                In production, I have shipped <strong className="text-white">100+ responsive educational content pages</strong> for a live EdTech platform (<em className="text-slate-200 not-italic">Selah El Telmeez</em>), adapting HTML5, CSS3, and Vue.js templates across multiple school stages while preserving strict cross-browser compatibility.
              </p>
              <p>
                Beyond React, I completed the intensive MEAN stack programme at the <strong className="text-white">National Telecommunication Institute (NTI)</strong>, architecting the 3-repo full-stack platform <strong className="text-white">ArtHouse</strong> in Angular, Node.js, and MongoDB.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
              <span className="text-xs font-mono text-slate-400 block w-full mb-1">
                Verified Education & Training:
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium">
                Helwan University (Very Good, 2024)
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium">
                NTI MEAN Stack Programme (2024)
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-medium">
                Military Status: Completed
              </span>
            </div>
          </motion.div>

          {/* Right Competency Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-5 rounded-xl bg-slate-900/50 dark:bg-slate-900/60 hover:bg-slate-850/80 border border-slate-800/80 hover:border-slate-700 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  {comp.icon}
                </div>
                <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {comp.title}
                </h4>
                <p className="mt-1.5 text-xs text-slate-400 leading-normal">
                  {comp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
