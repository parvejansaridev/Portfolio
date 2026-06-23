// src/components/About.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { personal, stats } from '../data/portfolioData';

function Counter({ value, suffix = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 900;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = value / steps;
    const t = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(t);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);
    return () => clearInterval(t);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="eyebrow">About</span>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mt-3">
          The developer behind the API
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Photo card */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto md:mx-0 w-64 sm:w-72 md:w-full"
        >
          {/* Animated Glow effect */}
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-400/25 to-amber-400/15 blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="group relative rounded-[1.75rem] overflow-hidden border border-border glass p-2 transition-all duration-500 hover:scale-[1.02] hover:border-teal-400/30 hover:shadow-xl hover:shadow-teal-500/10">
            <img
              src={personal.photo}
              alt={personal.name}
              className="rounded-[1.4rem] w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Floating badge with live status dot */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-3 -right-3 glass rounded-xl px-4 py-2 font-mono text-xs text-teal-400 shadow-xl border border-border flex items-center gap-2 hover:border-teal-400/30 transition-colors duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            MCA · 2026
          </motion.div>
        </motion.div>

        {/* Text + stats */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          {personal.about.map((para, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4 text-[15px] sm:text-[16px]">
              {para}
            </p>
          ))}

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-9">
            {stats.map((s) => (
              <div 
                key={s.label} 
                className="glass rounded-xl p-4 text-center border border-border hover:border-teal-400/35 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300 cursor-default flex flex-col justify-center min-h-[100px] sm:min-h-[112px]"
              >
                <p className={`font-display font-semibold text-teal-400 font-mono leading-tight ${
                  s.display 
                    ? s.display.length > 12 
                      ? 'text-[13px] sm:text-[14px] md:text-[16px]' 
                      : 'text-sm sm:text-lg md:text-xl'
                    : 'text-2xl sm:text-3xl'
                }`}>
                  {s.display 
                    ? s.display.replace(/\//g, "/\u200B")
                    : <Counter value={s.value} suffix={s.suffix} />
                  }
                </p>
                <p className="text-xs text-muted mt-2 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
