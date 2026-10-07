import { useState } from "react";
import { GlassCard, PrimaryButton, Reveal, Section, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  upfront: number;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Explorer",
    tagline: "Self-paced, full library access.",
    monthly: 2499,
    upfront: 24990,
    cta: "Start learning",
    features: [
      "Full on-demand curriculum",
      "3 guided portfolio projects",
      "Community forums + Discord",
      "Monthly group AMA",
      "Certificate of completion",
    ],
  },
  {
    name: "Accelerator",
    tagline: "The flagship cohort experience.",
    monthly: 6999,
    upfront: 69990,
    cta: "Claim your seat",
    featured: true,
    features: [
      "Everything in Explorer",
      "Live studios 4×/week",
      "Weekly 1:1 mentor sessions",
      "9 reviewed production projects",
      "Career desk + mock interview loops",
      "420+ hiring partner intros",
      "Lifetime cohort re-access",
    ],
  },
  {
    name: "Fellowship",
    tagline: "For teams and sponsored talent.",
    monthly: 12999,
    upfront: 129990,
    cta: "Talk to admissions",
    features: [
      "Everything in Accelerator",
      "Dedicated career strategist",
      "Private mentor pod of 4",
      "Custom capstone with a partner co.",
      "Relocation & visa advisory",
      "Priority demo-day showcase",
    ],
  },
];

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <Section id="pricing">
      <SectionHeading
        eyebrow="Admissions"
        title="Invest once, compound"
        accent="forever"
        sub="Transparent pricing, no hidden placement fees. Every plan carries our 14-day full-refund promise."
      />

      <Reveal delay={120}>
        <div className="mt-10 flex justify-center">
          <div className="glass inline-flex items-center gap-1 rounded-full p-1.5">
            {[
              { l: "Monthly", v: false },
              { l: "Pay upfront", v: true },
            ].map((o) => (
              <button
                key={o.l}
                onClick={() => setAnnual(o.v)}
                aria-pressed={annual === o.v}
                className={cn(
                  "relative rounded-full px-5 py-2 text-[13px] font-semibold transition-all duration-400 focus-visible:ring-2 focus-visible:ring-aura-400 focus-visible:outline-none",
                  annual === o.v
                    ? "bg-[linear-gradient(100deg,#7c3aed,#0ea5e9)] text-white shadow-[0_10px_26px_-12px_rgba(124,58,237,1)]"
                    : "text-white/55 hover:text-white",
                )}
              >
                {o.l}
                {o.v && (
                  <span className="ml-2 rounded-full bg-emerald-400/20 px-1.5 py-0.5 text-[10px] text-emerald-300">
                    save 17%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3 lg:items-center">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 130}>
            <GlassCard
              tone={p.featured ? "strong" : "default"}
              className={cn("h-full p-7 sm:p-8", p.featured && "lg:scale-[1.045] ring-glow")}
            >
              {p.featured && (
                <>
                  <span className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-aura-500/30 blur-[70px]" />
                  <span className="absolute top-5 right-5 rounded-full bg-[linear-gradient(100deg,#7c3aed,#0ea5e9)] px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                    Most chosen
                  </span>
                </>
              )}

              <h3 className="text-lg font-semibold tracking-tight text-white">{p.name}</h3>
              <p className="mt-1 text-[13px] text-white/45">{p.tagline}</p>

              <div className="mt-7 flex items-end gap-1.5">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {annual ? inr(p.upfront) : inr(p.monthly)}
                </span>
                <span className="pb-1.5 text-[13px] text-white/45">{annual ? "one-time" : "/month"}</span>
              </div>
              <p className="mt-1.5 text-[12px] text-white/35">
                {annual ? `vs ${inr(p.monthly * 12)} billed monthly` : "no-cost EMI available"}
              </p>

              <PrimaryButton
                href="#contact"
                className={cn(
                  "mt-7 w-full",
                  !p.featured &&
                    "bg-white/8 shadow-none backdrop-blur-xl hover:bg-white/14 hover:shadow-[0_18px_40px_-20px_rgba(255,255,255,.4)]",
                )}
              >
                {p.cta}
              </PrimaryButton>

              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-white/65">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-aura-300" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mt-10 text-center text-sm text-white/40">
          Need financial aid?{" "}
          <a href="#contact" className="font-semibold text-aura-300 underline-offset-4 hover:underline">
            37% of our students receive a scholarship
          </a>{" "}
          — apply in under 5 minutes.
        </p>
      </Reveal>
    </Section>
  );
}
