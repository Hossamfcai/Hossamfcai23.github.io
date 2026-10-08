import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'emerald';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'secondary',
  size = 'md',
  className = '',
  icon
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs sm:text-sm';

  const variantClasses = {
    primary:
      'bg-indigo-600 text-white font-medium border border-indigo-500 shadow-sm shadow-indigo-500/20',
    secondary:
      'bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-medium',
    accent:
      'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-medium',
    emerald:
      'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium',
    outline:
      'bg-transparent text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg transition-colors duration-150 ${sizeClasses} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
