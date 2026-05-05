"use client";

import { useI18n } from "@/lib/i18n/context";
import Eyebrow from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/animations/hooks";

export default function Comparison() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section relative overflow-hidden">
      <div className="container-zoomma relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 flex justify-center">
            <Eyebrow>{t.comparison.eyebrow}</Eyebrow>
          </div>
          <h2 className="reveal font-display text-display-lg font-bold text-white">
            {t.comparison.h2}
          </h2>
          <p className="reveal mt-6 text-lg text-white/65">{t.comparison.sub}</p>
        </div>

        <div className="reveal mt-16 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl">
          <div className="grid grid-cols-3 border-b border-white/[0.08] bg-white/[0.04]">
            <div className="px-4 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/40 md:px-6">
              {t.comparison.headers.col1}
            </div>
            <div className="px-4 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/55 md:px-6">
              {t.comparison.headers.col2}
            </div>
            <div className="border-l border-white/[0.08] bg-electric/[0.06] px-4 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-electric md:px-6">
              {t.comparison.headers.col3}
            </div>
          </div>

          {t.comparison.rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02]"
            >
              <div className="px-4 py-5 text-sm font-medium text-white md:px-6 md:py-6 md:text-base">
                {row.topic}
              </div>
              <div className="px-4 py-5 text-sm leading-relaxed text-white/55 md:px-6 md:py-6">
                {row.agency}
              </div>
              <div className="border-l border-white/[0.06] bg-electric/[0.03] px-4 py-5 text-sm font-medium leading-relaxed text-white md:px-6 md:py-6">
                {row.zoomma}
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-10 max-w-2xl text-center text-sm italic leading-relaxed text-white/50">
          {t.comparison.fairness}
        </p>
      </div>
    </section>
  );
}
