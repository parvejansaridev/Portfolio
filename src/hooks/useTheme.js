// src/hooks/useTheme.js
import { useEffect, useState } from 'react';

/**
 * useTheme
 * Manages the dark/light theme class on <html>, persists choice to localStorage,
 * and defaults to dark mode per the design brief.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'light' || stored === 'dark' ? stored : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
