// src/components/Skills.jsx
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Development',
    level: 'Expert',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    icon: <FiCode size={22} />,
    color: 'from-blue-500 to-indigo-600',
    glowColorHover: 'rgba(59, 130, 246, 0.12)',
    badgeColor: 'text-blue-600 bg-blue-500/10 border-blue-500/20 dark:text-blue-400 dark:bg-blue-400/10 dark:border-blue-400/20',
  },
  {
    title: 'Backend Development',
    level: 'Expert',
    skills: ['Python', 'FastAPI', 'REST APIs', 'JWT Authentication'],
    icon: <FiServer size={22} />,
    color: 'from-purple-500 to-pink-600',
    glowColorHover: 'rgba(168, 85, 247, 0.12)',
    badgeColor: 'text-purple-600 bg-purple-500/10 border-purple-500/20 dark:text-purple-400 dark:bg-purple-400/10 dark:border-purple-400/20',
  },
  {
    title: 'Database & Storage',
    level: 'Advanced',
    skills: ['PostgreSQL', 'SQL', 'MySQL'],
    icon: <FiDatabase size={22} />,
    color: 'from-teal-400 to-emerald-600',
    glowColorHover: 'rgba(52, 211, 153, 0.12)',
    badgeColor: 'text-emerald-600 bg-emerald-500/10 border-emerald-500/20 dark:text-emerald-400 dark:bg-emerald-400/10 dark:border-emerald-400/20',
  },
  {
    title: 'Development Tools',
    level: 'Advanced',
    skills: ['Git', 'GitHub', 'Cloudinary'],
    icon: <FiTool size={22} />,
    color: 'from-rose-500 to-orange-600',
    glowColorHover: 'rgba(244, 63, 94, 0.12)',
    badgeColor: 'text-rose-600 bg-rose-500/10 border-rose-500/20 dark:text-rose-400 dark:bg-rose-400/10 dark:border-rose-400/20',
  },
];

function SkillCard({ card, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-2xl border border-border/20 bg-surface/40 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-300"
    >
      {/* Dynamic glow overlay that tracks cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              320px circle at ${mouseX}px ${mouseY}px,
              ${card.glowColorHover},
              transparent 80%
            )
          `,
        }}
      />

      <div>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Icon inside gradient circle */}
            <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${card.color} text-white shadow-lg shadow-indigo-500/10`}>
              {card.icon}
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-ink">{card.title}</h3>
              <span className={`inline-block font-mono text-[10px] tracking-wider uppercase border rounded-full px-2.5 py-0.5 mt-1.5 ${card.badgeColor}`}>
                {card.level}
              </span>
            </div>
          </div>
        </div>

        {/* Skill tags/chips */}
        <div className="flex flex-wrap gap-2.5 mt-6">
          {card.skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-xs px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-ink/80 hover:text-teal-500 dark:hover:text-teal-400 hover:border-teal-500/40 dark:hover:border-teal-400/40 transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Floating blurred background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-float-delayed" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="eyebrow">Skills & Tech</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mt-3">
          Technical Expertise
        </h2>
        <p className="text-muted mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          A curated ecosystem of technologies I specialize in to design and build high-performance frontend interfaces, robust backend APIs, and scalable database architectures.
        </p>
      </motion.div>

      {/* Responsive Grid: 2 columns on desktop/tablet, 1 on mobile */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((card, i) => (
          <SkillCard key={card.title} card={card} index={i} />
        ))}
      </div>
    </section>
  );
}
