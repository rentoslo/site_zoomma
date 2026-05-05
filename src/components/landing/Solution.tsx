"use client";

import { useI18n } from "@/lib/i18n/context";
import Eyebrow from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/animations/hooks";

const ICONS = [
  // 01 — Strategy
  (
    <svg key="ic1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
    </svg>
  ),
  // 02 — Marketing
  (
    <svg key="ic2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 18V8a2 2 0 0 1 2-2h2l3-3 3 3h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3l-3 3-3-3H5a2 2 0 0 1-2-2Z" />
      <path d="M8 11h8M8 14h5" />
    </svg>
  ),
  // 03 — Sales
  (
    <svg key="ic3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
      <circle cx="19" cy="7" r="1.5" fill="currentColor" />
    </svg>
  ),
];

const ACCENTS = ["text-electric", "text-magenta", "text-mint"];
const RINGS = ["ring-electric/30", "ring-magenta/30", "ring-mint/30"];
const GLOWS = ["shadow-glow-sm", "shadow-glow-magenta", "shadow-glow-mint"];

export default function Solution() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="servicos" className="section relative overflow-hidden">
      <div className="container-zoomma relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 flex justify-center">
            <Eyebrow>{t.solution.eyebrow}</Eyebrow>
          </div>
          <h2 className="reveal font-display text-display-lg font-bold">
            <span className="gradient-text">{t.solution.h2}</span>
          </h2>
          <p className="reveal mt-6 text-lg text-white/65">{t.solution.sub}</p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {t.solution.pillars.map((p, i) => (
            <article
              key={p.kicker}
              className={`reveal glass-card group p-8 lg:p-10 ${i === 1 ? "lg:translate-y-6" : ""} ${i === 2 ? "lg:translate-y-12" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-white/40">
                  {p.kicker}
                </span>
                <span
                  className={`flex size-12 items-center justify-center rounded-2xl bg-white/[0.04] ring-1 ${RINGS[i]} ${ACCENTS[i]} ${GLOWS[i]} transition-transform duration-500 ease-smooth group-hover:scale-110`}
                >
                  <span className="size-6">{ICONS[i]}</span>
                </span>
              </div>

              <h3 className="mt-8 font-display text-2xl font-semibold text-white md:text-[1.65rem]">
                {p.title}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/65">{p.desc}</p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
