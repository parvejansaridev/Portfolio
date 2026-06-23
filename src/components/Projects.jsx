// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-2xl border border-border glass overflow-hidden flex flex-col ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Visual header — mock browser frame standing in for a project screenshot */}
      <div className="relative h-44 sm:h-52 bg-gradient-to-br from-surface2 to-surface overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-x-6 top-6 bottom-6 rounded-xl border border-border bg-base/60 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b border-border">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            </div>
            {project.featured && (
              <span className="font-mono text-[9px] tracking-wider uppercase bg-teal-400/15 text-teal-400 border border-teal-400/35 rounded px-2 py-0.5">
                Featured · Production
              </span>
            )}
          </div>
          <div className="flex-1 grid place-items-center">
            <span className="font-display text-2xl sm:text-3xl font-semibold text-ink/20 dark:text-ink/10 select-none">
              {project.title.split(' ')[0]}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg sm:text-xl">{project.title}</h3>
        <p className="text-muted text-sm mt-2 leading-relaxed">{project.description}</p>

        <ul className="grid grid-cols-2 gap-1.5 mt-4 mb-1">
          {project.features.slice(0, 6).map((f) => (
            <li key={f} className="flex items-start gap-1.5 text-xs text-muted">
              <FiCheck className="text-teal-400 mt-0.5 shrink-0" size={13} />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-teal-600 dark:text-teal-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary !px-4 !py-2 text-sm"
            >
              Live Demo <FiExternalLink size={14} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !px-4 !py-2 text-sm"
          >
            <FiGithub size={14} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="eyebrow">Projects</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          Things I've shipped
        </h2>
        <p className="text-muted mt-3 max-w-xl mx-auto">
          From a production e-commerce platform to academic builds — each one taught me a layer of the stack.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
