import { GlassCard, Reveal, Section, SectionHeading } from "./ui";
import type { ReactNode } from "react";

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  );
}

type F = { title: string; body: string; icon: ReactNode; span?: string; accent: string; tag: string };

const FEATURES: F[] = [
  {
    tag: "Mentorship",
    title: "1:1 with people who ship",
    body: "Weekly private sessions with senior engineers, designers and PMs from Google, CRED and Razorpay. Not recorded lectures — real humans reviewing your real work.",
    icon: <Icon d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM3 21a7 7 0 0 1 14 0M19 14v6M22 17h-6" />,
    accent: "from-aura-500/30 to-transparent",
    span: "lg:col-span-2",
  },
  {
    tag: "Curriculum",
    title: "Rebuilt every quarter",
    body: "Syllabus versioned like software. If the industry moves, your modules move with it.",
    icon: <Icon d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />,
    accent: "from-glow-500/30 to-transparent",
  },
  {
    tag: "Studios",
    title: "Build in public",
    body: "Ship 9 production projects with real users, code review and a live demo day.",
    icon: <Icon d="m8 6-6 6 6 6M16 6l6 6-6 6M14 4l-4 16" />,
    accent: "from-blush-500/30 to-transparent",
  },
  {
    tag: "Career Engine",
    title: "Placement that actually places",
    body: "Resume teardown, mock loops with hiring managers, salary negotiation coaching, and warm intros to 420+ partner companies until you sign an offer.",
    icon: <Icon d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM10 5h4v2h-4V5Z" />,
    accent: "from-emerald-400/25 to-transparent",
    span: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Why VITAM"
        title="A campus engineered for"
        accent="outcomes"
        sub="Everything here exists for one reason: to shorten the distance between where you are and the career you want."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 110} className={f.span}>
            <GlassCard className="h-full p-7 sm:p-8">
              <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${f.accent} blur-3xl`} />
              <div className="flex items-center gap-3">
                <span className="glass-strong grid h-11 w-11 place-items-center rounded-2xl text-aura-300 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {f.icon}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">{f.tag}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/55">{f.body}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
