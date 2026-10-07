import { useCallback, useEffect, useState } from "react";
import { useScrollProgress } from "../hooks/useReveal";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Programs", href: "#features" },
  { label: "Campus OS", href: "#showcase" },
  { label: "Outcomes", href: "#benefits" },
  { label: "Stories", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="VITAM College home">
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-[linear-gradient(135deg,#7c3aed,#0ea5e9)] shadow-[0_10px_30px_-8px_rgba(124,58,237,.9)] transition-transform duration-500 group-hover:rotate-[14deg]">
        <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
        <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
          <path d="M7 11v4.2c0 .7.4 1.3 1 1.6 1.2.7 2.6 1.2 4 1.2s2.8-.5 4-1.2c.6-.3 1-.9 1-1.6V11" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[15px] font-bold tracking-[0.18em] text-white">VITAM</span>
          <span className="block text-[9px] font-medium tracking-[0.42em] text-aura-300/80">COLLEGE</span>
        </span>
      )}
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const onProgress = useCallback((p: number) => {
    setProgress(p);
    setScrolled(window.scrollY > 24);
  }, []);
  useScrollProgress(onProgress);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="fixed top-0 left-0 z-60 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-[linear-gradient(90deg,#7c3aed,#a855f7,#0ea5e9)] shadow-[0_0_14px_rgba(124,58,237,.9)] transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-5",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex w-[min(100%-1.5rem,78rem)] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5",
            scrolled
              ? "glass-strong shadow-[0_20px_60px_-30px_rgba(0,0,0,.9)]"
              : "border border-transparent bg-transparent",
          )}
          aria-label="Primary"
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-4 py-2 text-[13px] font-medium text-white/65 transition-colors duration-300 hover:text-white focus-visible:ring-2 focus-visible:ring-aura-400 focus-visible:outline-none"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-0 scale-90 rounded-full bg-white/8 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full px-4 py-2 text-[13px] font-medium text-white/70 transition-colors hover:text-white sm:inline-flex"
            >
              Talk to us
            </a>
            <a
              href="#pricing"
              className="group relative hidden overflow-hidden rounded-full bg-[linear-gradient(100deg,#7c3aed,#0ea5e9)] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_12px_32px_-12px_rgba(124,58,237,.95)] transition-transform duration-300 hover:scale-105 sm:inline-flex"
            >
              <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.5),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Enroll now</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="glass grid h-10 w-10 place-items-center rounded-full text-white lg:hidden"
            >
              <span className="relative block h-3.5 w-4">
                <span className={cn("absolute left-0 h-[1.5px] w-full rounded bg-white transition-all duration-300", open ? "top-1.5 rotate-45" : "top-0")} />
                <span className={cn("absolute top-1.5 left-0 h-[1.5px] w-full rounded bg-white transition-all duration-300", open && "opacity-0")} />
                <span className={cn("absolute left-0 h-[1.5px] w-full rounded bg-white transition-all duration-300", open ? "top-1.5 -rotate-45" : "top-3")} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={cn(
            "glass-strong absolute inset-x-4 top-24 rounded-3xl p-6 transition-all duration-500",
            open ? "translate-y-0 scale-100" : "-translate-y-6 scale-95",
          )}
        >
          <ul className="space-y-1">
            {LINKS.map((l, i) => (
              <li
                key={l.href}
                style={{ transitionDelay: `${open ? i * 55 + 80 : 0}ms` }}
                className={cn(
                  "transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                )}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-white/80 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {l.label}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-aura-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-[linear-gradient(100deg,#7c3aed,#0ea5e9)] px-6 py-3.5 text-sm font-semibold text-white"
          >
            Enroll now
          </a>
        </div>
      </div>
    </>
  );
}
