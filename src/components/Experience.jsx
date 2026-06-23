// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section !pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="eyebrow">Experience</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          Where I've put it to work
        </h2>
      </motion.div>

      <div className="space-y-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-white">
                  <FiBriefcase size={18} />
                </span>
                <div>
                  <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                  <p className="text-teal-400 text-sm font-medium">{exp.company}</p>
                </div>
              </div>
              <span className="font-mono text-xs text-muted border border-border rounded-full px-3 py-1.5 whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {exp.points.map((pt) => (
                <li key={pt} className="flex gap-2 text-sm text-muted leading-relaxed">
                  <span className="text-teal-400 mt-1">▸</span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
