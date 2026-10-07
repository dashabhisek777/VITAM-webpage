import { GlassCard, Reveal, Section, SectionHeading } from "./ui";

const P = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=160&w=160`;

const QUOTES = [
  {
    q: "I joined VITAM while working a 10-hour support job. Eleven months later I was writing infra code at a Series C startup. The mentor pods are what made it survivable.",
    n: "Ananya Rathore",
    r: "SDE II · Razorpay",
    img: P(6497112),
    hl: "₹9L → ₹28L",
  },
  {
    q: "The career desk is unreal. They ran five mock loops with actual hiring managers and tore my answers apart until they were sharp. I walked into the real interview bored.",
    n: "Devansh Menon",
    r: "Product Designer · CRED",
    img: P(6102841),
    hl: "4 offers",
  },
  {
    q: "What surprised me was the honesty. My mentor told me I wasn't ready in month four, gave me a plan, and I was. No other program would risk saying that.",
    n: "Simran Kaur",
    r: "Data Scientist · Swiggy",
    img: P(11701102),
    hl: "Career switch",
  },
  {
    q: "Demo day put my project in front of 60 recruiters. Three of them messaged me the same night. The community keeps giving back even two years after graduating.",
    n: "Rohit Varma",
    r: "Frontend Eng · Atlassian",
    img: P(14950779),
    hl: "Hired in 3 weeks",
  },
  {
    q: "Coming from a tier-3 college I thought I'd always be filtered out. VITAM's portfolio standard made my resume impossible to ignore.",
    n: "Fatima Sheikh",
    r: "Backend Eng · Zoho",
    img: P(6497114),
    hl: "Tier-3 → product co.",
  },
  {
    q: "Lifetime access is not a marketing line. I re-attended the systems module last month, for free, three years after I graduated.",
    n: "Arjun Pillai",
    r: "Tech Lead · Freshworks",
    img: P(33799456),
    hl: "Alumni since '22",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Student stories"
        title="10,000 careers, one"
        accent="campus"
        sub="We don't publish averages without faces. Here are real graduates, real roles and real jumps."
      />

      <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {QUOTES.map((t, i) => (
          <Reveal key={t.n} delay={(i % 3) * 120} className="break-inside-avoid">
            <GlassCard className="p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-amber-300" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                      <path d="m12 2 2.9 6.26 6.85.72-5.1 4.6 1.44 6.72L12 16.9 5.91 20.3l1.44-6.72-5.1-4.6 6.85-.72L12 2Z" />
                    </svg>
                  ))}
                </div>
                <span className="glass-soft rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wide text-aura-300">
                  {t.hl}
                </span>
              </div>

              <blockquote className="mt-5 text-[15px] leading-relaxed text-white/75">“{t.q}”</blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <img
                  src={t.img}
                  alt=""
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{t.n}</p>
                  <p className="text-xs text-white/45">{t.r}</p>
                </div>
              </figcaption>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
