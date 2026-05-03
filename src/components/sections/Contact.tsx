import { Code2, ExternalLink, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SectionHeading } from '../ui/SectionHeading';
import { socialLinks } from '../../data/social';

const ICON_MAP = {
  github: Code2,
  linkedin: ExternalLink,
  mail: Mail,
  'external-link': ExternalLink,
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const emailLink = socialLinks.find((l) => l.icon === 'mail');
  const email = emailLink?.url.replace('mailto:', '') ?? '';

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/50">
      <div className="mx-auto max-w-2xl text-center">
        <FadeIn>
          <SectionHeading title="Let's Work Together" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-slate-400 leading-relaxed mb-10">
            I'm always open to interesting conversations, collaboration opportunities, or just saying hi.
            Reach out through any of the channels below.
          </p>
        </FadeIn>

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {socialLinks.map((link, i) => {
            const Icon = ICON_MAP[link.icon] ?? Mail;
            return (
              <FadeIn key={link.label} delay={0.15 + i * 0.08}>
                <a
                  href={link.url}
                  target={link.icon !== 'mail' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-slate-700 bg-slate-800/50 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              </FadeIn>
            );
          })}
        </div>

        {/* Copy email */}
        {email && (
          <FadeIn delay={0.4}>
            <div className="inline-flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/50 px-5 py-3">
              <span className="font-mono text-sm text-slate-400">{email}</span>
              <button
                onClick={copyEmail}
                className="text-slate-500 hover:text-accent transition-colors"
                aria-label="Copy email"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
