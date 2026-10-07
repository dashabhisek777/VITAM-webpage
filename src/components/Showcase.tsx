import { useState } from "react";
import { GlassCard, Reveal, Section, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

const TABS = [
  {
    id: "studio",
    label: "Live Studio",
    heading: "Classrooms that feel like a product team",
    body: "Low-latency live rooms with shared IDEs, breakout pods and instant mentor pings. Replays auto-chaptered within minutes.",
    bullets: ["Shared cloud IDE", "Auto-chaptered replays", "Breakout pods of 6"],
  },
  {
    id: "track",
    label: "Progress Graph",
    heading: "Your skills, measured like metrics",
    body: "Every submission updates a live skill graph so you always know the exact gap between you and your target role.",
    bullets: ["Role-gap analysis", "Weekly velocity score", "Peer percentile"],
  },
  {
    id: "career",
    label: "Career Desk",
    heading: "A hiring pipeline built into your dashboard",
    body: "Track applications, mock interviews and recruiter conversations in one place. Your mentor sees it all and nudges you forward.",
    bullets: ["420+ partner roles", "Mock loop scheduler", "Offer negotiation kit"],
  },
];

const BARS = [38, 62, 51, 78, 66, 91, 74, 85];

function MockWindow({ tab }: { tab: string }) {
  return (
    <div className="glass-strong relative overflow-hidden rounded-[1.75rem] p-2.5 ring-glow">
      {/* chrome */}
      <div className="flex items-center gap-2 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="glass-soft ml-3 flex-1 truncate rounded-full px-3 py-1 text-[10px] text-white/45">
          campus.vitam.edu/{tab}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-[1.4rem] bg-[linear-gradient(160deg,rgba(18,14,38,.95),rgba(8,8,20,.95))] p-4 sm:p-6">
        <div className="pointer-events-none absolute -top-16 left-1/4 h-56 w-56 rounded-full bg-aura-500/25 blur-[90px]" />
        <div className="pointer-events-none absolute right-0 -bottom-20 h-56 w-56 rounded-full bg-glow-500/20 blur-[90px]" />

        <div className="relative grid gap-4 sm:grid-cols-[1fr_0.8fr]">
          {/* main panel */}
          <div className="glass-soft rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-white/80">Weekly velocity</p>
              <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                +23%
              </span>
            </div>
            <div className="mt-5 flex h-28 items-end gap-2">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-md bg-[linear-gradient(180deg,#a78bfa,#0ea5e9)] opacity-80 transition-all duration-700 hover:opacity-100"
                  style={{ height: `${h}%`, animation: `floaty ${6 + i}s ease-in-out ${i * 0.2}s infinite` }}
                />
              ))}
            </div>
            <div className="mt-4 flex gap-2 text-[10px] text-white/35">
              {["M", "T", "W", "T", "F", "S", "S", "M"].map((d, i) => (
                <span key={i} className="flex-1 text-center">{d}</span>
              ))}
            </div>
          </div>

          {/* side panels */}
          <div className="space-y-3">
            <div className="glass-soft rounded-2xl p-4">
              <p className="text-[10px] tracking-wider text-white/40 uppercase">Next session</p>
              <p className="mt-1.5 text-sm font-semibold text-white">Distributed Systems</p>
              <p className="text-[11px] text-white/45">Today · 7:30 PM · Studio 4</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span className="block h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#7c3aed,#0ea5e9)]" />
                </span>
                <span className="text-[10px] text-white/50">68%</span>
              </div>
            </div>
            {[
              { n: "Mentor review", s: "Approved", c: "text-emerald-300" },
              { n: "Mock interview", s: "Scheduled", c: "text-aura-300" },
            ].map((r) => (
              <div key={r.n} className="glass-soft flex items-center justify-between rounded-2xl px-4 py-3">
                <span className="text-xs text-white/70">{r.n}</span>
                <span className={cn("text-[11px] font-semibold", r.c)}>{r.s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <Section id="showcase">
      <SectionHeading
        eyebrow="Campus OS"
        title="One dashboard for your whole"
        accent="journey"
        sub="We built the software our students deserved. Live classes, mentor feedback, skill tracking and placements — in a single, beautifully quiet interface."
      />

      <Reveal delay={120}>
        <div
          role="tablist"
          aria-label="Campus OS modules"
          className="glass mx-auto mt-12 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1.5"
        >
          {TABS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all duration-400 focus-visible:ring-2 focus-visible:ring-aura-400 focus-visible:outline-none",
                active === i
                  ? "bg-[linear-gradient(100deg,#7c3aed,#0ea5e9)] text-white shadow-[0_10px_28px_-12px_rgba(124,58,237,1)]"
                  : "text-white/55 hover:bg-white/8 hover:text-white",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal delay={160}>
          <div
            key={tab.id}
            style={{ animation: "tabIn .65s cubic-bezier(.16,1,.3,1) both" }}
          >
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{tab.heading}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">{tab.body}</p>
            <ul className="mt-7 space-y-3">
              {tab.bullets.map((b, i) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-sm text-white/75"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="glass-strong grid h-6 w-6 shrink-0 place-items-center rounded-full text-emerald-300">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <GlassCard interactive={false} tone="soft" className="bg-transparent p-0">
            <MockWindow tab={tab.id} />
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
