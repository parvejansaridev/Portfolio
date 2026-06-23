// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { navLinks, personal } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20 px-5 py-2.5' : 'px-4 py-2'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2 font-display font-semibold text-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 text-[#06140F] font-mono font-bold">
            PA
          </span>
          <span className="hidden sm:inline">
            Parvej<span className="text-teal-400">.</span>dev
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 font-medium text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`relative px-3.5 py-2 rounded-full transition-colors ${
                active === link.href ? 'text-teal-400' : 'text-muted hover:text-ink'
              }`}
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-teal-400/10 border border-teal-400/20"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted hover:text-teal-400 hover:border-teal-400/40 transition-colors"
          >
            {theme === 'dark' ? <HiOutlineSun size={17} /> : <HiOutlineMoon size={17} />}
          </button>

          <a href={`mailto:${personal.email}`} className="btn-primary hidden md:inline-flex !px-5 !py-2 text-sm">
            Hire Me
          </a>

          <button
            className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-white/10 text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={18} /> : <HiMenu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 glass rounded-2xl p-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                  active === link.href ? 'bg-teal-400/10 text-teal-400' : 'text-muted'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
