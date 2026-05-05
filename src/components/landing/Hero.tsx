"use client";

import { useI18n } from "@/lib/i18n/context";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { useStaggerChars } from "@/lib/animations/hooks";

export default function Hero() {
  const { t, locale } = useI18n();
  const ref = useStaggerChars<HTMLElement>([locale]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      {/* Decorative background */}
      <div className="bg-grid" />
      <div className="orb orb-electric absolute -top-40 left-1/2 size-[680px] -translate-x-1/2 animate-float opacity-70" />
      <div className="orb orb-magenta absolute -right-32 top-40 size-[420px] opacity-60" />
      <div className="orb orb-mint absolute -left-32 bottom-20 size-[360px] opacity-40" />
      <div className="bg-noise" aria-hidden />

      <div className="container-zoomma relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          </div>

          <h1 className="font-display text-display-xl font-bold text-white">
            <span data-split className="block">
              {t.hero.h1_line1}
            </span>
            <span data-split className="gradient-text block">
              {t.hero.h1_line2}
            </span>
          </h1>

          <blockquote className="mx-auto mt-10 max-w-3xl border-l-2 border-electric/40 pl-5 text-left text-lg leading-relaxed text-white/72 md:text-xl">
            {t.hero.aeo}
          </blockquote>

          <p className="mx-auto mt-8 max-w-2xl text-base text-white/55">
            {t.hero.sub}
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("diagnostico")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.hero.cta_primary}
              <svg className="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M10.7 4.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 01-1.4-1.4L13.6 11H4a1 1 0 110-2h9.6l-2.9-2.9a1 1 0 010-1.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => {
                document.getElementById("metodo")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.hero.cta_secondary}
            </Button>
          </div>

          <div className="mt-16 flex justify-center">
            <p className="inline-flex items-center gap-3 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-2 text-xs uppercase tracking-[0.18em] text-white/45 backdrop-blur">
              <span className="size-1.5 rounded-full bg-mint shadow-[0_0_8px_rgba(1,226,145,0.8)]" />
              {t.hero.trust_strip}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">scroll</span>
          <div className="h-10 w-px overflow-hidden bg-white/15">
            <div className="h-full w-full origin-top animate-[shimmer_2.4s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-electric to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
