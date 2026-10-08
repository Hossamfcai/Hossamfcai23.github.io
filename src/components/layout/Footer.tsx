import React from 'react';
import { personalInfo } from '../../data/personalInfo';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-white text-sm">
              {personalInfo.name}
            </span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="text-slate-400">
              Front-End Developer | React.js · TypeScript · JavaScript
            </span>
          </div>

          {/* Social Links & Back-to-Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors cursor-pointer border border-slate-800"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <p>© {new Date().getFullYear()} Hossam Ibrahim. All rights reserved.</p>
          <p className="font-mono text-[11px] text-slate-400">
            Crafted with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
