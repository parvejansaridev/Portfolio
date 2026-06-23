// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { navLinks, personal } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="section !py-12 grid sm:grid-cols-3 gap-10">
        <div>
          <a href="#home" className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-[#06140F] font-mono font-bold text-sm">
              PA
            </span>
            Parvej<span className="text-teal-400">.</span>dev
          </a>
          <p className="text-muted text-sm mt-3 max-w-xs leading-relaxed">{personal.tagline}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">Quick links</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-muted hover:text-teal-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted mb-3">Connect</p>
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted hover:text-teal-400 hover:border-teal-400/50 transition-colors"
            >
              <FiGithub />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted hover:text-teal-400 hover:border-teal-400/50 transition-colors"
            >
              <FiLinkedin />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted hover:text-teal-400 hover:border-teal-400/50 transition-colors"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-muted font-mono">
        © {year} {personal.name} — Built with React, Vite &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
