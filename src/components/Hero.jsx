// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMapPin } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';
import { personal } from '../data/portfolioData';

const RESPONSE_LINES = [
  '{',
  '  "developer": "Mohammad Parvej Ansari",',
  '  "stack": ["Python", "FastAPI", "PostgreSQL", "React"],',
  '  "status": 200,',
  '  "available_for_hire": true',
  '}',
];

/**
 * ApiTerminal
 * The page's signature element: a mock terminal that "calls" the developer's
 * own API and streams back a typed JSON response — a visual built from the
 * subject's real domain (REST APIs) rather than a generic decorative card.
 */
function ApiTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [requestDone, setRequestDone] = useState(false);

  useEffect(() => {
    const reqTimer = setTimeout(() => setRequestDone(true), 900);
    return () => clearTimeout(reqTimer);
  }, []);

  useEffect(() => {
    if (!requestDone) return;
    if (visibleLines < RESPONSE_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 220);
      return () => clearTimeout(t);
    }
    // loop after a pause
    const reset = setTimeout(() => {
      setVisibleLines(0);
      setRequestDone(false);
      setTimeout(() => setRequestDone(true), 900);
    }, 4200);
    return () => clearTimeout(reset);
  }, [visibleLines, requestDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-md mx-auto lg:mx-0"
    >
      {/* Floating decorative chips */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 -right-4 glass rounded-xl px-3 py-1.5 text-xs font-mono text-teal-400 shadow-lg z-10"
      >
        200 OK
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-5 -left-5 glass rounded-xl px-3 py-1.5 text-xs font-mono text-amber-400 shadow-lg z-10"
      >
        JWT ✓
      </motion.div>

      <div className="rounded-2xl border border-white/10 bg-surface shadow-2xl shadow-teal-500/5 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-muted">api.parvej.dev — zsh</span>
        </div>
        <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[230px]">
          <p className="text-muted">
            <span className="text-teal-400">$</span> curl -X GET /api/v1/developer
          </p>
          {requestDone && (
            <p className="text-muted mt-1">
              <span className="text-amber-400">→</span> connecting to FastAPI server... <span className="text-teal-400">done</span>
            </p>
          )}
          <div className="mt-2">
            {RESPONSE_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={line + i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-ink/90"
              >
                <span className="text-teal-400">{line}</span>
              </motion.p>
            ))}
            {requestDone && visibleLines < RESPONSE_LINES.length && (
              <span className="inline-block w-2 h-3.5 bg-teal-400 animate-blink align-middle" />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-grid"
    >
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <ParticleBackground className="opacity-60" />

      <div className="section relative z-10 grid lg:grid-cols-2 gap-14 items-center !py-0">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow inline-flex items-center gap-2 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            Open to opportunities
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] tracking-tight">
            Hi, I'm {personal.name.split(' ')[0]}{' '}
            <span className="hidden sm:inline">{personal.name.split(' ').slice(1).join(' ')}</span>
            <br />
            <span className="text-gradient">
              <TypeAnimation
                sequence={personal.roles.flatMap((r) => [r, 2200])}
                wrapper="span"
                speed={45}
                deletionSpeed={65}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </h1>

          <p className="mt-6 text-muted text-[16px] sm:text-lg max-w-xl">{personal.tagline}</p>

          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <FiMapPin className="text-teal-400" /> {personal.location}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={personal.resume} download className="btn-primary">
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Hire Me <FiArrowRight />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {[
              { icon: <FiGithub />, href: personal.github, label: 'GitHub' },
              { icon: <FiLinkedin />, href: personal.linkedin, label: 'LinkedIn' },
              { icon: <FiMail />, href: `mailto:${personal.email}`, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted hover:text-teal-400 hover:border-teal-400/50 hover:-translate-y-1 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: signature terminal */}
        <ApiTerminal />
      </div>
    </section>
  );
}
