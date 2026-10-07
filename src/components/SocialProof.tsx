import { Reveal } from "./ui";

const BRANDS = [
  "Google", "Microsoft", "Razorpay", "Swiggy", "Zoho", "Flipkart",
  "Atlassian", "Adobe", "Zomato", "CRED", "Infosys", "Freshworks",
];

function BrandMark({ name }: { name: string }) {
  return (
    <span className="group flex shrink-0 items-center gap-2.5 px-7">
      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-aura-400 to-glow-400 opacity-60 transition-opacity group-hover:opacity-100" />
      <span className="text-lg font-semibold tracking-tight whitespace-nowrap text-white/35 transition-colors duration-300 group-hover:text-white/85 sm:text-xl">
        {name}
      </span>
    </span>
  );
}

export default function SocialProof() {
  return (
    <section id="proof" className="relative px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="text-center text-[11px] font-semibold tracking-[0.3em] text-white/35 uppercase">
            Our graduates build at
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mask-fade-x relative mt-9 overflow-hidden">
            <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
              {[...BRANDS, ...BRANDS].map((b, i) => (
                <BrandMark key={i} name={b} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "10,400+", v: "Students enrolled", i: "👥" },
            { k: "420+", v: "Hiring partners", i: "🏢" },
            { k: "94%", v: "Placement rate", i: "🎯" },
            { k: "₹18L", v: "Average package", i: "📈" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 90}>
              <div className="glass-soft group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <span className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-aura-500/15 blur-2xl transition-all duration-500 group-hover:bg-aura-500/30" />
                <span className="text-xl">{s.i}</span>
                <p className="mt-3 text-2xl font-bold tracking-tight text-white">{s.k}</p>
                <p className="mt-0.5 text-sm text-white/50">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
