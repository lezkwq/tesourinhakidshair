import { useEffect, useRef, type ReactNode } from "react";

type P = { className?: string };

export function Sun({ className }: P) {
  const rays = Array.from({ length: 11 }, (_, i) => i);
  return (
    <svg viewBox="0 0 300 300" className={className} aria-hidden>
      <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
        {rays.map((i) => {
          const a = (i / 11) * Math.PI * 2;
          const x1 = 150 + Math.cos(a) * 112, y1 = 150 + Math.sin(a) * 112;
          const x2 = 150 + Math.cos(a) * (140 + (i % 2) * 10), y2 = 150 + Math.sin(a) * (140 + (i % 2) * 10);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--sun)" strokeWidth="7" strokeLinecap="round" />;
        })}
      </g>
      <path d="M150 52c58 0 96 42 96 98s-42 99-98 99-94-45-94-100 38-97 96-97z" fill="var(--sun)" />
    </svg>
  );
}

const WAVES = {
  hills: "M0 120V70c90-10 170-62 300-60 120 2 150 62 290 64 140 2 180-70 320-70 150 0 190 60 300 62 120 2 160-34 230-40V120z",
  soft: "M0 120V58c160 38 300 44 470 16S800 0 980 22s300 54 460 30v68z",
  drips: "M0 120V40c60 0 70 40 130 40s70-50 150-50 80 62 170 62 100-46 190-46 90 36 170 36 110-56 210-56 90 44 180 44 100-34 240-28v78z",
  bumpy: "M0 120V82c70-40 150-40 220-10s120 30 200-10 170-50 250-10 140 50 230 10 160-56 260-30 160 50 280 28v60z",
};

export function Wave({ fill, variant = "soft", flip, className = "" }: { fill: string; variant?: keyof typeof WAVES; flip?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden
      className={`relative -mb-px block h-14 w-full sm:h-20 md:h-28 ${flip ? "-scale-x-100" : ""} ${className}`}>
      <path d={WAVES[variant]} fill={fill} />
    </svg>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { el.classList.add("is-visible"); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
