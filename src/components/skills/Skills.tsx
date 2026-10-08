import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { skillsCategories } from '../../data/skills';
import { Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    ...skillsCategories.map((c) => ({ id: c.id, label: c.title }))
  ];

  const displayedCategories =
    selectedCategory === 'all'
      ? skillsCategories
      : skillsCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-950/40 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Stack"
          title="Skills organized by architectural layer."
          subtitle="React.js, TypeScript, and modern JavaScript form the core of my daily engineering toolkit."
          badge="Weighted Hierarchy"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 ring-2 ring-indigo-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {cat.title}
                </h3>
                <span className="text-xs text-slate-400 font-mono">
                  — {cat.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => {
                  const isPrimary = skill.level === 'Primary Focus';
                  const isHighlight = skill.isHighlight;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.15 }}
                      className={`p-4 rounded-xl transition-all border relative flex flex-col justify-between ${
                        isHighlight
                          ? 'bg-gradient-to-b from-indigo-950/40 to-slate-900/80 border-indigo-500/40 shadow-sm shadow-indigo-500/10'
                          : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h4 className={`font-bold text-sm tracking-tight ${isHighlight ? 'text-white' : 'text-slate-200'}`}>
                            {skill.name}
                          </h4>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                              isPrimary
                                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                                : skill.level === 'Proficient'
                                ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/20'
                                : 'bg-slate-800 text-slate-400 border border-slate-700'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {skill.description && (
                          <p className="text-xs text-slate-400 leading-relaxed font-normal">
                            {skill.description}
                          </p>
                        )}
                      </div>

                      {isHighlight && (
                        <div className="mt-3 pt-2.5 border-t border-indigo-500/20 flex items-center gap-1.5 text-[11px] text-indigo-300 font-mono">
                          <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />
                          <span>Core Production Tool</span>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
