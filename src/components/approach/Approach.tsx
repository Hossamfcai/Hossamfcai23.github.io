import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { engineeringPillars } from '../../data/engineeringPillars';
import { Layers, ShieldCheck, GitFork, Radio, Smartphone, CheckCircle2, Terminal } from 'lucide-react';

export const Approach: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(engineeringPillars[0].id);

  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-indigo-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
    GitFork: <GitFork className="w-5 h-5 text-amber-400" />,
    Radio: <Radio className="w-5 h-5 text-rose-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-emerald-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-violet-400" />
  };

  const selectedPillar =
    engineeringPillars.find((p) => p.id === selectedPillarId) || engineeringPillars[0];

  return (
    <section id="approach" className="py-20 md:py-28 bg-slate-950/40 border-y border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Engineering Approach"
          title="What I bring to a development team."
          subtitle="Engineering principles grounded in maintainability, predictability, and type-safe front-end architecture."
          badge="Core Principles"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Pillar Selector Cards */}
          <div className="lg:col-span-6 space-y-3">
            {engineeringPillars.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isSelected
                      ? 'bg-slate-900 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 ${
                      isSelected ? 'bg-indigo-600/20 border border-indigo-500/30' : 'bg-slate-800'
                    }`}
                  >
                    {iconMap[pillar.icon]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-sm sm:text-base font-bold tracking-tight truncate ${
                          isSelected ? 'text-white' : 'text-slate-200'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {pillar.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Inspection Pane */}
          <div className="lg:col-span-6">
            <motion.div
              key={selectedPillar.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-slate-800">
                  {iconMap[selectedPillar.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {selectedPillar.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400">
                    {selectedPillar.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mt-4">
                {selectedPillar.description}
              </p>

              {/* Concrete Points */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Applied Implementation:
                </h4>
                <ul className="space-y-2.5">
                  {selectedPillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-indigo-400 font-bold">✔</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Snippet Example */}
              {selectedPillar.codeHighlight && (
                <div className="mt-6 pt-5 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5 text-indigo-400">
                      <Terminal className="w-3.5 h-3.5" />
                      {selectedPillar.codeHighlight.filename}
                    </span>
                    <span className="text-[11px] text-slate-500">Pattern Example</span>
                  </div>
                  <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
                    <code>{selectedPillar.codeHighlight.code}</code>
                  </pre>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
