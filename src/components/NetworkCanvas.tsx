import React, { useEffect, useRef } from 'react';

export const NetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let points: Array<{ x: number; y: number; r: number; s: number }> = [];

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 768 ? 14 : 26;
      points = Array.from({ length: count }, (_, i) => ({
        x: width * (0.48 + Math.random() * 0.5),
        y: height * (0.06 + Math.random() * 0.88),
        r: i % 6 === 0 ? 3.2 : 1.6,
        s: Math.random() * Math.PI * 2,
      }));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const draw = (t: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        if (!prefersReducedMotion) {
          a.y += Math.sin(t * 0.0004 + a.s) * 0.06;
        }

        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 210) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.quadraticCurveTo((a.x + b.x) / 2, a.y - 28, b.x, b.y);
            const alpha = (1 - dist / 210) * 0.22;
            ctx.strokeStyle = `rgba(242, 106, 33, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = i % 7 === 0 ? '#ffc928' : 'rgba(242, 106, 33, 0.85)';
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(draw);
    } else {
      draw(0);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="network-canvas"
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
