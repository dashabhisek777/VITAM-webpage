import { useEffect, useMemo, useRef } from "react";

type Bubble = {
  left: number;
  size: number;
  delay: number;
  duration: number;
  hue: string;
  blur: number;
  opacity: number;
};

const HUES = [
  "rgba(167,139,250,0.55)",
  "rgba(56,189,248,0.45)",
  "rgba(244,63,142,0.35)",
  "rgba(255,255,255,0.30)",
  "rgba(125,211,252,0.40)",
];

/** Full-page ambient background: aurora orbs + rising glass bubbles + grid. */
export default function Atmosphere() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const bubbles = useMemo<Bubble[]>(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        left: (i * 97) % 100,
        size: 18 + ((i * 37) % 120),
        delay: -(i * 2.4) % 30,
        duration: 22 + ((i * 13) % 26),
        hue: HUES[i % HUES.length],
        blur: 0.5 + ((i * 7) % 5),
        opacity: 0.25 + ((i % 5) * 0.11),
      })),
    [],
  );

  // Parallax: orbs drift gently with pointer.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--px", String(x));
        el.style.setProperty("--py", String(y));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ ["--px" as string]: 0, ["--py" as string]: 0 }}
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#1b1038_0%,#0a0a18_45%,#06060f_100%)]" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(110% 70% at 50% 0%, #000 20%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(110% 70% at 50% 0%, #000 20%, transparent 78%)",
        }}
      />

      {/* aurora orbs */}
      <div
        className="animate-float-slow absolute -top-40 -left-32 h-[46rem] w-[46rem] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(124,58,237,.65), transparent 65%)",
          transform: "translate3d(calc(var(--px) * 26px), calc(var(--py) * 26px), 0)",
        }}
      />
      <div
        className="animate-float-med absolute top-[22%] -right-40 h-[40rem] w-[40rem] rounded-full blur-[150px]"
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(14,165,233,.55), transparent 66%)",
          transform: "translate3d(calc(var(--px) * -32px), calc(var(--py) * -22px), 0)",
        }}
      />
      <div
        className="animate-float-fast absolute bottom-[-18%] left-[28%] h-[38rem] w-[38rem] rounded-full blur-[150px]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(244,63,142,.38), transparent 68%)",
          transform: "translate3d(calc(var(--px) * 18px), calc(var(--py) * -18px), 0)",
        }}
      />

      {/* rising glass bubbles */}
      <div className="absolute inset-0">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="absolute bottom-[-20vh] rounded-full"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              opacity: b.opacity,
              background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,.85), ${b.hue} 46%, rgba(255,255,255,.05) 72%)`,
              boxShadow: `inset 0 0 ${b.size / 3}px rgba(255,255,255,.35), 0 0 ${b.size / 2}px ${b.hue}`,
              backdropFilter: `blur(${b.blur}px)`,
              animation: `bubbleRise ${b.duration}s linear ${b.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* grain */}
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
    </div>
  );
}
