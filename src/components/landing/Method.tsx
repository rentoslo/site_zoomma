"use client";

import { useI18n } from "@/lib/i18n/context";
import Eyebrow from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/animations/hooks";

export default function Method() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="metodo" className="relative overflow-hidden">
      <div className="section pb-12">
        <div className="container-zoomma relative z-10 mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 flex justify-center">
            <Eyebrow>{t.method.eyebrow}</Eyebrow>
          </div>
          <h2 className="reveal font-display text-display-lg font-bold text-white">
            {t.method.h2}
          </h2>
          <p className="reveal mt-6 text-lg text-white/65">{t.method.sub}</p>
        </div>
      </div>

      <div className="orb orb-electric absolute -left-40 top-1/2 size-[520px] -translate-y-1/2 opacity-40" />
      <div className="orb orb-magenta absolute right-0 top-20 size-[360px] opacity-30" />

      {/* Desktop: 5-column grid */}
      <div className="container-zoomma relative z-10 hidden pb-24 lg:block">
        <div className="grid grid-cols-5 gap-4">
          {t.method.steps.map((step, i) => (
            <article
              key={step.n}
              className="reveal glass-card relative flex flex-col p-7"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Connector arrow (all except last) */}
              {i < t.method.steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3 top-9 z-10 flex size-6 items-center justify-center rounded-full border border-white/[0.08] bg-[#0A0A0A]"
                >
                  <svg className="size-3 text-electric/70" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.7 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-2.9-2.9a1 1 0 010-1.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
              <span className="font-display text-5xl font-bold leading-none text-white/10">
                {step.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-[0.85rem] leading-relaxed text-white/60">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile / tablet: vertical stack */}
      <div className="container-zoomma pb-24 lg:hidden">
        <ol className="grid gap-4">
          {t.method.steps.map((step) => (
            <li key={step.n} className="reveal glass-card p-6">
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl font-bold text-white/12">{step.n}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-electric/50 to-transparent" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-white/65">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
