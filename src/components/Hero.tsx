import { useEffect, useRef, useState } from "react";
import { GhostButton, PrimaryButton, Reveal } from "./ui";

const HERO_IMG =
  "https://images.pexels.com/photos/7972949/pexels-photo-7972949.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

const AVATARS = [
  "https://images.pexels.com/photos/6497112/pexels-photo-6497112.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=120&w=120",
  "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=120&w=120",
  "https://images.pexels.com/photos/11701102/pexels-photo-11701102.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=120&w=120",
  "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=120&w=120",
];

function useCountUp(target: number, duration = 1800, start = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

function Stat({ value, suffix, label, decimals = 0 }: { value: number; suffix?: string; label: string; decimals?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setOn(true), io.disconnect()),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const n = useCountUp(value, 1700, on);
  return (
    <div ref={ref}>
      <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
        {n.toFixed(decimals)}
        <span className="text-gradient-warm">{suffix}</span>
      </div>
      <div className="mt-1 text-[11px] font-medium tracking-wider text-white/45 uppercase">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40">
      {/* decorative bubble cluster */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <span className="animate-float-med absolute top-[18%] left-[6%] h-28 w-28 rounded-full border border-white/15 bg-white/5 backdrop-blur-md" />
        <span className="animate-float-fast absolute top-[62%] left-[12%] h-16 w-16 rounded-full border border-white/10 bg-aura-500/10 backdrop-blur-sm" />
        <span className="animate-float-slow absolute top-[12%] right-[10%] h-20 w-20 rounded-full border border-white/10 bg-glow-400/10 backdrop-blur-md" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---- copy ---- */}
        <div className="max-w-2xl">
          <Reveal>
            <a
              href="#showcase"
              className="glass group inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-1.5 text-xs font-medium text-white/80 transition-all hover:border-white/30 hover:bg-white/10"
            >
              <span className="rounded-full bg-[linear-gradient(100deg,#7c3aed,#0ea5e9)] px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                New
              </span>
              Cohort 12 admissions are open
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={110}>
            <h1 className="mt-7 text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.3rem]">
              Learn beyond
              <br />
              limits at{" "}
              <span className="relative inline-block">
                <span className="text-gradient">VITAM</span>
                <svg viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full text-aura-500/70" fill="none" preserveAspectRatio="none" aria-hidden>
                  <path d="M2 9C45 3 120 2 198 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              A living, breathing campus for builders. Live mentorship from engineers at top
              product companies, portfolio-grade projects, and a career engine that has placed{" "}
              <span className="font-semibold text-white/90">10,000+ students</span> into roles they
              actually wanted.
            </p>
          </Reveal>

          <Reveal delay={290}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <PrimaryButton href="#pricing">
                Claim your seat
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </PrimaryButton>
              <GhostButton href="#showcase">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-aura-300" fill="currentColor" aria-hidden>
                  <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                </svg>
                Watch campus tour
              </GhostButton>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <div className="flex -space-x-3">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-ink-950 transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                  />
                ))}
                <span className="glass grid h-10 w-10 place-items-center rounded-full text-[10px] font-bold text-white">
                  10K+
                </span>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-amber-300" aria-label="Rated 4.9 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                      <path d="m12 2 2.9 6.26 6.85.72-5.1 4.6 1.44 6.72L12 16.9 5.91 20.3l1.44-6.72-5.1-4.6 6.85-.72L12 2Z" />
                    </svg>
                  ))}
                  <span className="ml-1.5 font-semibold text-white">4.9/5</span>
                </div>
                <p className="mt-0.5 text-white/45">from 3,210 verified student reviews</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---- visual ---- */}
        <Reveal delay={250} className="relative">
          <div className="animate-tilt relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_180deg,rgba(124,58,237,.5),rgba(14,165,233,.45),rgba(244,63,142,.4),rgba(124,58,237,.5))] opacity-50 blur-3xl"
            />
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-3 ring-glow">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={HERO_IMG}
                  alt="VITAM College students collaborating on a project outdoors"
                  className="h-[300px] w-full object-cover sm:h-[380px]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/15 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-aura-300 uppercase">Live now</p>
                    <p className="text-sm font-semibold text-white">Systems Design · Studio 4</p>
                  </div>
                  <span className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold text-white">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    412 watching
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 px-2 py-4 sm:gap-4">
                <Stat value={10.4} decimals={1} suffix="K+" label="Students" />
                <Stat value={94} suffix="%" label="Placed" />
                <Stat value={18} suffix="LPA" label="Avg. CTC" />
              </div>
            </div>

            {/* floating glass chips */}
            <div className="glass animate-float-fast absolute -top-6 -left-4 hidden rounded-2xl px-4 py-3 sm:block">
              <p className="text-[10px] tracking-wider text-white/50 uppercase">Mentor</p>
              <p className="text-sm font-semibold text-white">1:1 every week</p>
            </div>
            <div className="glass animate-float-med absolute -right-4 -bottom-6 hidden rounded-2xl px-4 py-3 sm:block">
              <p className="text-[10px] tracking-wider text-white/50 uppercase">Hiring partners</p>
              <p className="text-sm font-semibold text-white">420+ companies</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <Reveal delay={600} className="mt-20 flex justify-center">
        <a href="#proof" className="group flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.3em] text-white/35 uppercase transition-colors hover:text-white/70">
          Scroll
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1">
            <span className="h-1.5 w-1 animate-bounce rounded-full bg-aura-300" />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
