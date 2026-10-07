import { GlassCard, Reveal, Section, SectionHeading } from "./ui";

const STEPS = [
  {
    n: "01",
    t: "Diagnose",
    d: "A 30-minute skill audit maps exactly where you stand against your target role — no guesswork, no generic roadmap.",
  },
  {
    n: "02",
    t: "Immerse",
    d: "Live studios, mentor pods and weekly shipping deadlines. You practice the job before you have the job.",
  },
  {
    n: "03",
    t: "Prove",
    d: "Nine portfolio projects with real users, reviewed line-by-line by engineers who hire for a living.",
  },
  {
    n: "04",
    t: "Land",
    d: "Warm intros, mock loops and negotiation coaching until the offer letter is in your inbox.",
  },
];

const PILLARS = [
  { k: "Lifetime access", v: "Re-attend any cohort, forever. Your tuition never expires.", icon: "♾️" },
  { k: "Learn & earn", v: "Paid freelance briefs from partner startups from month three.", icon: "💼" },
  { k: "Global community", v: "A 10K-strong alumni network across 38 countries, always one DM away.", icon: "🌍" },
];

export default function Benefits() {
  return (
    <Section id="benefits">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            align="left"
            eyebrow="The VITAM method"
            title="Four moves from stuck to"
            accent="hired"
            sub="We reverse-engineered the path of 10,000 graduates into a system you can actually follow — even with a full-time job."
          />
          <Reveal delay={230}>
            <div className="mt-9 grid gap-3">
              {PILLARS.map((p) => (
                <div
                  key={p.k}
                  className="glass-soft group flex items-start gap-4 rounded-2xl p-4 transition-all duration-500 hover:translate-x-1.5 hover:border-white/20"
                >
                  <span className="glass grid h-10 w-10 shrink-0 place-items-center rounded-xl text-base transition-transform duration-500 group-hover:scale-110">
                    {p.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{p.k}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-white/50">{p.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <ol className="relative space-y-5">
          <span
            aria-hidden
            className="absolute top-4 bottom-4 left-[2.1rem] w-px bg-gradient-to-b from-aura-500/60 via-glow-500/40 to-transparent"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 130} as="li">
              <GlassCard className="flex gap-5 p-6 sm:p-7">
                <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(140deg,rgba(124,58,237,.45),rgba(14,165,233,.3))] text-sm font-bold text-white ring-1 ring-white/15">
                  <span className="animate-pulse-ring absolute inset-0 rounded-2xl bg-aura-500/40" />
                  <span className="relative">{s.n}</span>
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{s.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/55">{s.d}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
