import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { personalInfo } from '../../data/personalInfo';
import { Mail, Phone, Copy, Check, Send, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formName, setFormName] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formSubject || `Front-End Engineering Opportunity / Inquiry from ${formName || 'Recruiter'}`
  )}&body=${encodeURIComponent(
    `Hello Hossam,\n\n${formMessage || 'I reviewed your portfolio and would like to discuss an opportunity with you.'}\n\nBest regards,\n${formName || 'Sender'}`
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact & Collaboration"
          title="Let's build something well-engineered."
          subtitle="Open to Front-End Developer and React.js opportunities. Reach out via email, phone, or LinkedIn."
          badge="Direct Channels"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct Email</h4>
                    <span className="text-[11px] font-mono text-slate-400">Preferred contact</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-mono text-indigo-400 hover:text-indigo-300 font-semibold break-all inline-block mt-1"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Phone & Location */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Phone & WhatsApp</h4>
                    <span className="text-[11px] font-mono text-slate-400">Direct voice & chat</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  aria-label="Copy phone number"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm sm:text-base font-mono text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  {personalInfo.phone}
                </a>
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {personalInfo.location} (GMT+2)
                </span>
              </div>
            </div>

            {/* Social & Profiles */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-5 h-5 text-slate-300" />
                  <div>
                    <span className="text-xs font-bold text-white block">GitHub</span>
                    <span className="text-[10px] font-mono text-slate-400">@{personalInfo.githubUsername}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-5 h-5 text-indigo-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">LinkedIn</span>
                    <span className="text-[10px] font-mono text-slate-400">Profile</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Email Launcher Box */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              <h3 className="text-lg font-bold text-white">Start a Conversation</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Compose a message below. Clicking send will open your default email client formatted and addressed directly to Hossam.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailtoLink;
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Hiring Manager at Tech Company"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="Front-End Developer Role / React Project Discussion"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Hi Hossam, we came across your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="text-[11px] font-mono text-slate-500">
                  Sends directly via secure mailto: protocol
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
