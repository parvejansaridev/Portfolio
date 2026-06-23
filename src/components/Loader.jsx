// src/components/Loader.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LINES = ['booting environment', 'connecting to database', 'starting server', 'ready'];

/**
 * Loader
 * A brief terminal-style boot sequence on first load. Ties the "loading animation"
 * requirement directly to the developer's domain (API/server boot) instead of a
 * generic spinner.
 */
export default function Loader({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < LINES.length - 1) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(onDone, 500);
    return () => clearTimeout(t);
  }, [lineIndex, onDone]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
      >
        <div className="w-[280px] sm:w-[340px] font-mono text-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="rounded-lg border border-white/10 bg-surface p-4 text-left">
            {LINES.slice(0, lineIndex + 1).map((line, i) => (
              <p key={line} className="text-muted">
                <span className="text-teal-400">$</span>{' '}
                {line}
                {i === lineIndex && i !== LINES.length - 1 && (
                  <span className="ml-1 inline-block w-1.5 h-3 bg-teal-400 animate-blink align-middle" />
                )}
                {i < lineIndex && <span className="text-teal-500 ml-2">✓</span>}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
