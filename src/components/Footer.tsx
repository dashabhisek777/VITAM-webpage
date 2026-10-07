import { SOCIALS } from "./Contact";
import { Logo } from "./Navbar";
import { Reveal } from "./ui";

const COLUMNS = [
  {
    title: "Programs",
    links: ["Full-Stack Engineering", "Product Design", "Data & AI", "Product Management", "Cloud & DevOps"],
  },
  {
    title: "Campus",
    links: ["Campus OS", "Mentors", "Demo Day", "Scholarships", "Alumni network"],
  },
  {
    title: "Company",
    links: ["About VITAM", "Careers", "Hire our graduates", "Press kit", "Outcomes report"],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 px-5 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
            <span aria-hidden className="animate-float-slow absolute -top-24 -left-16 h-64 w-64 rounded-full bg-aura-600/25 blur-[100px]" />
            <span aria-hidden className="animate-float-med absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-glow-500/20 blur-[100px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1.3fr_2fr]">
              <div>
                <Logo />
                <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-white/50">
                  VITAM College is a modern learning campus for builders — live mentorship, real
                  projects and a career engine trusted by 10,000+ students.
                </p>

                <div className="mt-6 flex gap-2.5">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      title={s.name}
                      className="group glass-soft relative grid h-11 w-11 place-items-center rounded-full text-white/60 transition-all duration-400 hover:-translate-y-1.5 hover:text-white"
                    >
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full opacity-0 blur-md transition-opacity duration-400 group-hover:opacity-70"
                        style={{ background: s.color }}
                      />
                      <svg viewBox="0 0 24 24" className="relative h-[18px] w-[18px]" fill="currentColor" aria-hidden>
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>

                <p className="mt-6 text-[13px] text-white/40">
                  Koramangala, Bengaluru · hello@vitam.edu
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-3">
                {COLUMNS.map((c) => (
                  <div key={c.title}>
                    <h3 className="text-[11px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                      {c.title}
                    </h3>
                    <ul className="mt-4 space-y-2.5">
                      {c.links.map((l) => (
                        <li key={l}>
                          <a
                            href="#top"
                            className="group inline-flex items-center gap-1.5 text-[14px] text-white/60 transition-colors hover:text-white"
                          >
                            <span className="h-px w-0 bg-aura-400 transition-all duration-300 group-hover:w-3" />
                            {l}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
              <p className="text-[13px] text-white/35">
                © {new Date().getFullYear()} VITAM College. Crafted for people who build.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-5 text-[13px] text-white/35">
                <a href="#top" className="transition-colors hover:text-white/70">Privacy</a>
                <a href="#top" className="transition-colors hover:text-white/70">Terms</a>
                <a href="#top" className="transition-colors hover:text-white/70">Refund policy</a>
              </div>
            </div>
          </div>
        </Reveal>

        <p
          aria-hidden
          className="mt-10 bg-[linear-gradient(180deg,rgba(255,255,255,.085),transparent)] bg-clip-text text-center text-[16vw] leading-[0.8] font-bold tracking-tighter text-transparent select-none"
        >
          VITAM
        </p>
      </div>
    </footer>
  );
}
