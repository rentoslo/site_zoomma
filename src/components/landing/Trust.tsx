"use client";

import { useI18n } from "@/lib/i18n/context";
import Eyebrow from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/animations/hooks";

export default function Trust() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="section relative overflow-hidden">
      <div className="orb orb-mint absolute right-0 top-0 size-[480px] opacity-30" />

      <div className="container-zoomma relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 flex justify-center">
            <Eyebrow>{t.trust.eyebrow}</Eyebrow>
          </div>
          <h2 className="reveal font-display text-display-lg font-bold">
            <span className="gradient-text-cool">{t.trust.h2}</span>
          </h2>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
            {t.trust.promise}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* NOT FOR */}
          <article className="reveal glass-card relative overflow-hidden p-8 lg:p-10">
            <div className="absolute right-0 top-0 size-32 -translate-y-12 translate-x-12 rounded-full bg-alert/10 blur-3xl" />
            <header className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-alert/30 bg-alert/10">
                <svg className="size-5 text-alert" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 11-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="font-display text-xl font-semibold text-white">{t.trust.notFor}:</h3>
            </header>
            <ul className="mt-6 space-y-4">
              {t.trust.notForList.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-white/70">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-alert/70" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* FOR YOU */}
          <article className="reveal glass-card relative overflow-hidden p-8 lg:p-10">
            <div className="absolute right-0 top-0 size-32 -translate-y-12 translate-x-12 rounded-full bg-mint/15 blur-3xl" />
            <header className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl border border-mint/30 bg-mint/10">
                <svg className="size-5 text-mint" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4L8.5 12l6.8-6.7a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <h3 className="font-display text-xl font-semibold text-white">{t.trust.forYou}:</h3>
            </header>
            <ul className="mt-6 space-y-4">
              {t.trust.forYouList.map((item, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-white/82">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-mint shadow-[0_0_8px_rgba(1,226,145,0.7)]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
