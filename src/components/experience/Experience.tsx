import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { experienceData } from '../../data/experience';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-950/40 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Work Experience"
          title="Proven delivery in live EdTech production."
          subtitle="Real-world front-end engineering under strict brand consistency and cross-browser requirements."
          badge="Production Delivery"
        />

        <div className="max-w-3xl mx-auto">
          {experienceData.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 pb-4"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl">
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
                      {exp.employmentType}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300 mt-0.5">
                      {exp.company}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {exp.companyDescription}
                    </p>
                  </div>

                  <div className="flex flex-col items-start sm:items-end text-xs font-mono text-slate-400 gap-1.5">
                    <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Deliverables Bullet Points */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Key Deliverables & Responsibilities:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
