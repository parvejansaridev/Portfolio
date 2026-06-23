// src/components/GithubActivity.jsx
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

// Deterministic pseudo-random generator so the grid is stable across renders/builds
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const WEEKS = 52;
const DAYS = 7;

function intensity(value) {
  if (value < 0.45) return 'bg-white/[0.05]';
  if (value < 0.65) return 'bg-teal-700/40';
  if (value < 0.8) return 'bg-teal-500/60';
  if (value < 0.92) return 'bg-teal-400/80';
  return 'bg-teal-400';
}

export default function GithubActivity() {
  const cells = Array.from({ length: WEEKS * DAYS }, (_, i) => seededRandom(i * 12.9898 + 4));

  return (
    <section className="section !py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 sm:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <FiGithub className="text-teal-400 text-xl" />
            <h3 className="font-display font-semibold text-lg">Commit rhythm</h3>
          </div>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-teal-400 hover:text-teal-200 font-mono"
          >
            @parvej-devloper →
          </a>
        </div>

        <div className="overflow-x-auto">
          <div
            className="grid gap-[3px] min-w-[640px]"
            style={{ gridTemplateColumns: `repeat(${WEEKS}, minmax(0,1fr))`, gridTemplateRows: `repeat(${DAYS}, 1fr)` }}
          >
            {Array.from({ length: DAYS }).map((_, day) =>
              Array.from({ length: WEEKS }).map((_, week) => {
                const idx = week * DAYS + day;
                return (
                  <div
                    key={idx}
                    className={`aspect-square rounded-[2px] ${intensity(cells[idx])}`}
                    style={{ gridRow: day + 1, gridColumn: week + 1 }}
                    title="Shipping, steadily"
                  />
                );
              })
            )}
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted">
          <span>Less</span>
          <span className="h-3 w-3 rounded-[2px] bg-white/[0.05]" />
          <span className="h-3 w-3 rounded-[2px] bg-teal-700/40" />
          <span className="h-3 w-3 rounded-[2px] bg-teal-500/60" />
          <span className="h-3 w-3 rounded-[2px] bg-teal-400/80" />
          <span className="h-3 w-3 rounded-[2px] bg-teal-400" />
          <span>More</span>
        </div>
      </motion.div>
    </section>
  );
}
