"use client";

import { useI18n } from "@/lib/i18n/context";
import Eyebrow from "@/components/ui/Eyebrow";
import { useHorizontalPin, useReveal } from "@/lib/animations/hooks";

export default function Method() {
  const { t } = useI18n();
  const headerRef = useReveal<HTMLDivElement>();
  const { wrapperRef, trackRef } = useHorizontalPin<HTMLDivElement>();

  return (
    <section id="metodo" className="relative overflow-hidden">
      <div ref={headerRef} className="section pb-12">
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

      {/* Desktop: pinned horizontal */}
      <div ref={wrapperRef} className="relative hidden h-screen overflow-hidden lg:block">
        <div className="orb orb-electric absolute -left-40 top-1/2 size-[520px] -translate-y-1/2 opacity-50" />
        <div className="orb orb-magenta absolute right-0 top-20 size-[360px] opacity-40" />

        <div className="container-zoomma flex h-full items-center">
          <div ref={trackRef} className="flex h-[80%] items-center gap-8 will-change-transform">
            {t.method.steps.map((step, i) => (
              <article
                key={step.n}
                className="glass-card relative flex h-full w-[440px] shrink-0 flex-col justify-between p-10"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-6xl font-bold leading-none text-white/10">
                      {step.n}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-electric/50 to-transparent" />
                  </div>
                  <h3 className="mt-8 font-display text-3xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-white/68">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/35">
                  <span>
                    {String(i + 1).padStart(2, "0")} / {String(t.method.steps.length).padStart(2, "0")}
                  </span>
                  {i < t.method.steps.length - 1 && (
                    <svg className="size-5 text-electric/70" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M10.7 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-2.9-2.9a1 1 0 010-1.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: vertical stack */}
      <div className="container-zoomma pb-24 lg:hidden">
        <ol className="grid gap-4">
          {t.method.steps.map((step) => (
            <li key={step.n} className="glass-card p-6">
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
