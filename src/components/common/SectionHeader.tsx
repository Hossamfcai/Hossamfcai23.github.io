import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  badge
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'
      }`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border transition-colors ${
          align === 'center' ? 'justify-center' : ''
        } bg-indigo-500/10 text-indigo-400 border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
        {eyebrow}
        {badge && (
          <span className="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300">
            {badge}
          </span>
        )}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
