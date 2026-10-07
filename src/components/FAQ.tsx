import { useState } from "react";
import { Reveal, Section, SectionHeading } from "./ui";
import { cn } from "../utils/cn";

const ITEMS = [
  {
    q: "Do I need a technical background to join?",
    a: "No. Roughly 41% of our Accelerator students come from non-technical degrees. The first four weeks are a foundations sprint designed to bring everyone to the same baseline, with extra mentor hours if you need them.",
  },
  {
    q: "How much time should I commit each week?",
    a: "Plan for 12–15 hours: four live studios (90 minutes each), one mentor 1:1, and project build time. Most of our students hold full-time jobs, so studios run in the evening IST and every session is replayable.",
  },
  {
    q: "Is the 94% placement rate audited?",
    a: "Yes. Outcomes are verified annually by an independent firm and we publish a full cohort-by-cohort report, including students who did not get placed. You can request the latest PDF from admissions.",
  },
  {
    q: "What exactly does the career desk do?",
    a: "Resume and portfolio teardowns, LinkedIn positioning, unlimited mock interview loops with real hiring managers, salary negotiation coaching, and warm referrals into our 420+ partner companies. Support continues until you sign an offer.",
  },
  {
    q: "What if it isn't right for me?",
    a: "You have 14 days from your cohort start to request a complete, no-questions-asked refund. After that, you can pause your cohort once and rejoin any future batch at no extra cost.",
  },
  {
    q: "Do I get support after graduating?",
    a: "Always. Alumni keep Discord access, can re-attend any module for life, get invited to demo days, and tap the 10K-strong network across 38 countries for referrals.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Questions"
            title="Everything you were about to"
            accent="ask"
            sub="Still unsure? Our admissions team replies on WhatsApp within an hour, every day."
          />
        </div>

        <div className="space-y-3">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 80}>
                <div
                  className={cn(
                    "glass-soft overflow-hidden rounded-2xl transition-all duration-500",
                    isOpen && "glass border-white/20 shadow-[0_24px_70px_-36px_rgba(124,58,237,.9)]",
                  )}
                >
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left focus-visible:ring-2 focus-visible:ring-aura-400 focus-visible:outline-none"
                    >
                      <span className={cn("text-[15px] font-semibold transition-colors", isOpen ? "text-white" : "text-white/75")}>
                        {item.q}
                      </span>
                      <span
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 transition-all duration-500",
                          isOpen ? "rotate-45 bg-[linear-gradient(100deg,#7c3aed,#0ea5e9)] text-white" : "text-white/55",
                        )}
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    className="grid transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-white/55">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
