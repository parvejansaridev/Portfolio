// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';
import { skills } from '../data/portfolioData';

const categoryMeta = {
  Frontend: { icon: <FiCode />, color: 'from-teal-400 to-teal-600' },
  Backend: { icon: <FiServer />, color: 'from-amber-400 to-amber-600' },
  Database: { icon: <FiDatabase />, color: 'from-teal-300 to-teal-500' },
  Tools: { icon: <FiTool />, color: 'from-amber-300 to-amber-500' },
};

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-ink/90">{name}</span>
        <span className="font-mono text-muted text-xs">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-teal-400 to-teal-600"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="eyebrow">Skills</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          Tools of the trade
        </h2>
        <p className="text-muted mt-3 max-w-xl mx-auto">
          From schema design to the pixel — what I reach for at every layer of the stack.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items], catIdx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-teal-400/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${categoryMeta[category].color} text-[#06140F] text-lg`}
              >
                {categoryMeta[category].icon}
              </span>
              <h3 className="font-display font-semibold text-lg">{category}</h3>
            </div>
            <div className="space-y-4">
              {items.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
