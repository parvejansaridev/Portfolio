// src/components/Education.jsx
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="eyebrow">Education</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">Academic timeline</h2>
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/60 via-border to-transparent sm:-translate-x-1/2" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex sm:items-center gap-5 sm:gap-0 sm:flex-row"
            >
              <div
                className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}
              >
                {i % 2 === 0 && <TimelineCard edu={edu} />}
              </div>

              <span className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-lg shadow-teal-500/20 z-10">
                <FiBookOpen size={15} />
              </span>

              <div className={`sm:hidden pl-14 w-full`}>
                <TimelineCard edu={edu} />
              </div>

              <div className={`hidden sm:block sm:w-1/2 ${i % 2 !== 0 ? 'sm:pl-10' : 'sm:pr-10'}`}>
                {i % 2 !== 0 && <TimelineCard edu={edu} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ edu }) {
  return (
    <div className="glass rounded-xl p-5 inline-block w-full sm:w-auto sm:min-w-[260px]">
      <p className="font-mono text-xs text-teal-400">{edu.period}</p>
      <h3 className="font-display font-semibold mt-1.5">{edu.degree}</h3>
      <p className="text-muted text-sm mt-1">{edu.school}</p>
      <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mt-1.5">{edu.detail}</p>
    </div>
  );
}
