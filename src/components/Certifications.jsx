// src/components/Certifications.jsx
import { motion } from 'framer-motion';
import { FiAward, FiCheck } from 'react-icons/fi';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="eyebrow">Certifications</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          Verified Credentials
        </h2>
        <p className="text-muted mt-3 max-w-xl mx-auto">
          Specialized courses and professional certifications showing deep-dives into backend systems and data science.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-border glass p-6 hover:border-teal-400/30 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Background glow on hover */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-400/10 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 text-white text-xl shadow-lg shadow-teal-500/15">
                  <FiAward />
                </span>
                <span className="font-mono text-xs text-teal-400/80 bg-teal-400/10 border border-teal-400/20 rounded-full px-3 py-1">
                  {cert.date}
                </span>
              </div>

              <h3 className="font-display font-semibold text-lg sm:text-xl group-hover:text-teal-400 transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-xs font-mono text-muted/80 mt-1">{cert.issuer}</p>
              
              <p className="text-muted text-sm mt-4 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-border">
              <p className="text-xs font-mono text-ink/70 mb-2.5">Key topics covered:</p>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-teal-600 dark:text-teal-300"
                  >
                    <FiCheck className="text-teal-400 shrink-0" size={10} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
