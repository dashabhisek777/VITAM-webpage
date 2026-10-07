import { useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "../utils/cn";

/* ---------------- Reveal wrapper ---------------- */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "header" | "article";
}) {
  return (
    <Tag data-reveal data-delay={delay} className={cn("reveal", className)}>
      {children}
    </Tag>
  );
}

/* ---------------- Spotlight glass card ---------------- */
export function GlassCard({
  children,
  className,
  tone = "default",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "soft" | "strong";
  interactive?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={cn(
        "group glass-sheen relative overflow-hidden rounded-3xl transition-all duration-500",
        tone === "soft" && "glass-soft",
        tone === "default" && "glass",
        tone === "strong" && "glass-strong",
        interactive &&
          "hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_30px_80px_-30px_rgba(124,58,237,.65)]",
        className,
      )}
    >
      {interactive && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(167,139,250,.18), transparent 70%)",
          }}
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/* ---------------- Buttons ---------------- */
export function PrimaryButton({
  children,
  href = "#apply",
  className,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-white",
        "bg-[linear-gradient(100deg,#7c3aed,#a855f7_38%,#0ea5e9)] shadow-[0_18px_45px_-14px_rgba(124,58,237,.9)]",
        "transition-all duration-400 hover:scale-[1.035] hover:shadow-[0_24px_60px_-14px_rgba(14,165,233,.8)]",
        "focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 focus-visible:outline-none",
        className,
      )}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.45),transparent)] transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative flex items-center gap-2">{children}</span>
    </a>
  );
}

export function GhostButton({
  children,
  href = "#curriculum",
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white/90",
        "transition-all duration-400 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white",
        "focus-visible:ring-2 focus-visible:ring-aura-400 focus-visible:outline-none",
        className,
      )}
    >
      {children}
    </a>
  );
}

/* ---------------- Section heading ---------------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-aura-300 uppercase">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-aura-400" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-aura-300" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl">
          {title}{" "}
          {accent && <span className="font-serif text-gradient-warm italic">{accent}</span>}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={170}>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Section shell ---------------- */
export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative px-5 py-24 sm:px-8 sm:py-32", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
