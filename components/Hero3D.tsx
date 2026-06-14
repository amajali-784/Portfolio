"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  radius: number;
};

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const particles: Particle[] = [];
    const particleCount = 84;
    const mouse = { x: 0, y: 0, active: false };

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const seedParticles = () => {
      particles.length = 0;
      for (let index = 0; index < particleCount; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 0.9 + 0.1,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2.2 + 0.8
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createRadialGradient(
        width * 0.55,
        height * 0.4,
        20,
        width * 0.55,
        height * 0.4,
        Math.max(width, height)
      );
      gradient.addColorStop(0, "rgba(20, 184, 166, 0.22)");
      gradient.addColorStop(0.45, "rgba(59, 130, 246, 0.08)");
      gradient.addColorStop(1, "rgba(3, 7, 18, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (const particle of particles) {
        const pullX = mouse.active ? (mouse.x - particle.x) * 0.0009 : 0;
        const pullY = mouse.active ? (mouse.y - particle.y) * 0.0009 : 0;
        particle.x += particle.vx + pullX;
        particle.y += particle.vy + pullY;

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 130) {
            const opacity = (1 - distance / 130) * 0.35;
            ctx.strokeStyle = `rgba(125, 211, 252, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const particle of particles) {
        const glow = particle.radius * (2.5 + particle.z);
        ctx.beginPath();
        ctx.fillStyle = "rgba(45, 212, 191, 0.82)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.9)";
        ctx.shadowBlur = glow;
        ctx.arc(particle.x, particle.y, particle.radius * (1 + particle.z), 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    resize();
    seedParticles();
    draw();

    const onResize = () => {
      resize();
      seedParticles();
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className="hero3d" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <div className="core-sphere">
        <span>AI</span>
      </div>
    </div>
  );
}
