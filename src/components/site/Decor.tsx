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

export function Star({ className, color = "var(--sun)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 3c1.6 7 4 10.5 14 13.5-9 2.6-12 6-14 15.5-2-9.5-5-13-14.5-15.5C15.5 13.5 18 10 20 3z" fill={color} />
    </svg>
  );
}

export function Squiggle({ className, color = "var(--pink)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 80 30" className={className} aria-hidden>
      <path d="M4 18c8-12 14-12 20 0s13 12 19 0 13-12 19 0 10 8 14 2" fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function Blob({ className, color = "var(--mint)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden>
      <path d="M8 26C2 14 14 3 30 5s28 10 24 22-18 12-28 10S12 34 8 26z" fill={color} />
    </svg>
  );
}

export function Eye({ className }: P) {
  return (
    <svg viewBox="0 0 70 50" className={className} aria-hidden>
      <path d="M6 34c4-14 22-20 34-14" stroke="var(--pink)" strokeWidth="9" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="22" r="15" fill="var(--cream)" stroke="var(--ink)" strokeWidth="6" />
      <circle cx="44" cy="24" r="6" fill="var(--ink)" />
    </svg>
  );
}

export function Scissors({ className, color = "var(--brand)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden fill="none" stroke={color} strokeWidth="5" strokeLinecap="round">
      <circle cx="16" cy="46" r="9" />
      <circle cx="16" cy="18" r="9" />
      <path d="M24 42 58 14M24 22l34 28" />
    </svg>
  );
}

export function Comb({ className, color = "var(--pink)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden>
      <rect x="4" y="4" width="56" height="12" rx="6" fill={color} />
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x={8 + i * 5.6} y="12" width="3" height="22" rx="1.5" fill={color} />
      ))}
    </svg>
  );
}

export function Drop({ className, color = "var(--sky)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 52" className={className} aria-hidden>
      <path d="M20 3C26 16 36 24 36 34a16 16 0 0 1-32 0C4 24 14 16 20 3z" fill={color} stroke="var(--ink)" strokeWidth="3" />
      <path d="M12 34c0 5 3 8 7 9" stroke="var(--cream)" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Bow({ className, color = "var(--pink)" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden>
      <path d="M32 20 6 6c-4 6-4 22 0 28zM32 20 58 6c4 6 4 22 0 28z" fill={color} stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="32" cy="20" r="6" fill="var(--sun)" stroke="var(--ink)" strokeWidth="3" />
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
