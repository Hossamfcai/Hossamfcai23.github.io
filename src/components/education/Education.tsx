import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { educationData, trainingData } from '../../data/education';
import { GraduationCap, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Education & Training"
          title="Strong computer science foundations."
          subtitle="Formally trained in algorithmic problem solving, software engineering, and full-stack development."
          badge="Helwan University & NTI"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Degree Card */}
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  {edu.grade && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      Grade: {edu.grade}
                    </span>
                  )}
                </div>

                <span className="text-xs font-mono text-slate-400">{edu.period}</span>
                <h3 className="text-xl font-bold text-white mt-1 tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                  {edu.institution}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {edu.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Core Coursework & Areas:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.highlights.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified status note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Four-Year Bachelor's Degree</span>
              </div>
            </motion.div>
          ))}

          {/* Intensive Training Card */}
          {trainingData.map((prog) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Intensive Track
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400">{prog.period}</span>
                <h3 className="text-xl font-bold text-white mt-1 tracking-tight">
                  {prog.program}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {prog.institution}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {prog.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                    Technologies Mastered:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Graduation Project Callout */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  NTI Track Graduation Project:
                </span>
                <span className="text-xs font-semibold text-white">
                  {prog.graduationProject}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status bar: Military readiness & availability */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 font-semibold">Military Status:</span>
            <span>Completed (15/04/2025 – 01/06/2026) — 100% available for immediate start</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-300 font-semibold">Language Proficiency:</span>
            <span>Arabic (Native) · English (Intermediate B1)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
