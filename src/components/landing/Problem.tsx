"use client";

import { useI18n } from "@/lib/i18n/context";
import Eyebrow from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/animations/hooks";

export default function Problem() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section relative overflow-hidden">
      <div className="orb orb-magenta absolute -left-40 top-1/3 size-[400px] opacity-30" />

      <div className="container-zoomma relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 flex justify-center">
            <Eyebrow>{t.problem.eyebrow}</Eyebrow>
          </div>
          <h2 className="reveal font-display text-display-lg font-bold text-white">
            {t.problem.h2}
          </h2>
          <p className="reveal mt-6 text-lg text-white/65">{t.problem.intro}</p>
        </div>

        <ol className="mx-auto mt-16 grid max-w-4xl gap-4">
          {t.problem.pains.map((pain, i) => (
            <li
              key={i}
              className="reveal group flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 backdrop-blur transition-colors hover:border-alert/40 md:p-6"
            >
              <span
                aria-hidden
                className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-xl border border-alert/30 bg-alert/10 font-display text-sm font-semibold text-alert"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-base leading-relaxed text-white/82 md:text-lg">{pain}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
