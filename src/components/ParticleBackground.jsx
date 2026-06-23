// src/components/ParticleBackground.jsx
import { useEffect, useRef } from 'react';

/**
 * ParticleBackground
 * Lightweight canvas particle field (no external lib needed) — small dots drifting
 * slowly with faint connecting lines, evoking a network/API-call graph.
 * Pauses automatically when the tab is hidden, and respects prefers-reduced-motion.
 */
export default function ParticleBackground({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let width, height;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      const count = Math.min(70, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(20,184,166,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = 'rgba(45,217,196,0.55)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    if (!prefersReduced) {
      draw();
    } else {
      // Static single frame for reduced-motion users
      draw();
      cancelAnimationFrame(animationId);
    }

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else if (!prefersReduced) {
        draw();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} aria-hidden="true" />;
}
