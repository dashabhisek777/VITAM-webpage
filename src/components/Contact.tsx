import { useState, type FormEvent } from "react";
import { GlassCard, PrimaryButton, Reveal, Section, SectionHeading } from "./ui";

export const SOCIALS = [
  {
    name: "Discord",
    handle: "abhisekx999",
    desc: "24/7 study rooms, doubt channels & hackathon squads.",
    href: "https://discord.gg/abhisekx999",
    color: "#5865F2",
    members: "11.2K members",
    path: "M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.036A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.22.644-1.873.891a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z",
  },
  {
    name: "Instagram",
    handle: "@4bhiii.1",
    desc: "Campus life, demo-day reels and student spotlights.",
    href: "https://instagram.com/v4bhiii.1",
    color: "#E1306C",
    members: "86K followers",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
  {
    name: "WhatsApp",
    handle: "+91 6370486938",
    desc: "Instant answers from admissions, under an hour.",
    href: "https://wa.me/916370486938",
    color: "#25D366",
    members: "Avg. reply 11 min",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.993 2.898 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z",
  },
  {
    name: "Telegram",
    handle: "t.me/abhisekdash",
    desc: "Daily drops: jobs, resources and cohort announcements.",
    href: "https://t.me/abhisekdash",
    color: "#229ED9",
    members: "24K subscribers",
    path: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0Zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635Z",
  },
];

function SocialBubble({ s, i }: { s: (typeof SOCIALS)[number]; i: number }) {
  return (
    <Reveal delay={i * 110}>
      <a
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group glass glass-sheen relative block overflow-hidden rounded-[1.75rem] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 focus-visible:ring-2 focus-visible:ring-aura-400 focus-visible:outline-none"
        style={{ boxShadow: `0 20px 60px -34px ${s.color}` }}
      >
        {/* colored bloom */}
        <span
          aria-hidden
          className="absolute -top-16 -right-14 h-40 w-40 rounded-full opacity-35 blur-[48px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-70"
          style={{ background: s.color }}
        />
        {/* tiny bubbles */}
        <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {[14, 9, 20, 6].map((sz, k) => (
            <span
              key={k}
              className="absolute rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
              style={{
                width: sz,
                height: sz,
                left: `${12 + k * 22}%`,
                bottom: `${8 + (k % 2) * 14}%`,
                animation: `floaty ${5 + k}s ease-in-out ${k * 0.35}s infinite`,
              }}
            />
          ))}
        </span>

        <div className="relative flex items-start justify-between">
          <span
            className="grid h-14 w-14 place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
            style={{ background: `linear-gradient(140deg, ${s.color}, ${s.color}55)` }}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
              <path d={s.path} />
            </svg>
          </span>
          <span className="glass-soft grid h-9 w-9 place-items-center rounded-full text-white/60 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white/15 group-hover:text-white">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </div>

        <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-white">{s.name}</h3>
        <p className="relative mt-0.5 text-[13px] font-medium" style={{ color: s.color }}>
          {s.handle}
        </p>
        <p className="relative mt-3 text-[13.5px] leading-relaxed text-white/50">{s.desc}</p>
        <p className="relative mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-white/40 uppercase">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: s.color }} />
          {s.members}
        </p>
      </a>
    </Reveal>
  );
}

export default function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      {/* ---------- Big CTA ---------- */}
      <Section id="apply" className="pb-10">
        <Reveal>
          <GlassCard tone="strong" interactive={false} className="overflow-hidden px-6 py-16 text-center sm:px-14 sm:py-20">
            <span aria-hidden className="animate-float-slow absolute -top-28 left-1/4 h-72 w-72 rounded-full bg-aura-500/35 blur-[110px]" />
            <span aria-hidden className="animate-float-med absolute -right-20 -bottom-28 h-72 w-72 rounded-full bg-glow-500/30 blur-[110px]" />
            <span aria-hidden className="animate-float-fast absolute bottom-8 left-10 hidden h-20 w-20 rounded-full border border-white/15 bg-white/5 backdrop-blur-md sm:block" />
            <span aria-hidden className="animate-float-med absolute top-10 right-16 hidden h-12 w-12 rounded-full border border-white/15 bg-white/5 backdrop-blur-md sm:block" />

            <div className="relative mx-auto max-w-2xl">
              <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-aura-300 uppercase">
                Cohort 12 · 61 seats left
              </span>
              <h2 className="mt-6 text-4xl leading-[1.06] font-semibold tracking-tight text-white sm:text-5xl">
                Your next chapter starts
                <br />
                <span className="font-serif text-gradient italic">this Monday</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-white/55 sm:text-base">
                Join 10,000+ students who stopped waiting for permission. Applications take four
                minutes and we respond within one working day.
              </p>

              <form onSubmit={submit} className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="cta-email" className="sr-only">Email address</label>
                <input
                  id="cta-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="glass-soft w-full rounded-full px-5 py-3.5 text-sm text-white placeholder:text-white/35 focus:border-aura-400/60 focus:ring-2 focus:ring-aura-500/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group relative shrink-0 overflow-hidden rounded-full bg-[linear-gradient(100deg,#7c3aed,#a855f7_40%,#0ea5e9)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_-14px_rgba(124,58,237,.95)] transition-transform duration-300 hover:scale-[1.04] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.45),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative">{sent ? "Got it ✓" : "Apply now"}</span>
                </button>
              </form>
              <p className="mt-4 text-xs text-white/35">
                14-day refund promise · No placement fee · Scholarships available
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </Section>

      {/* ---------- Social bubbles ---------- */}
      <Section id="contact" className="pt-10">
        <SectionHeading
          eyebrow="Stay connected"
          title="Come hang out with the"
          accent="community"
          sub="The campus never really closes. Pick your favourite room and say hello — our team and alumni are always in there."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map((s, i) => (
            <SocialBubble key={s.name} s={s} i={i} />
          ))}
        </div>

        <Reveal delay={180}>
          <div className="glass-soft mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl p-7 sm:flex-row sm:p-8">
            <div>
              <p className="text-base font-semibold text-white">Prefer a human conversation?</p>
              <p className="mt-1 text-sm text-white/50">
                Book a free 20-minute counselling call with an admissions advisor.
              </p>
            </div>
            <PrimaryButton href="https://wa.me/916370486938" className="shrink-0">
              Book a call
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </PrimaryButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
