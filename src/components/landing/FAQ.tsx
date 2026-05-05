"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import Eyebrow from "@/components/ui/Eyebrow";
import { useReveal } from "@/lib/animations/hooks";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const { t } = useI18n();
  const ref = useReveal<HTMLElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="section relative overflow-hidden">
      <div className="container-zoomma relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 flex justify-center">
            <Eyebrow>{t.faq.eyebrow}</Eyebrow>
          </div>
          <h2 className="reveal font-display text-display-lg font-bold text-white">
            {t.faq.h2}
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <article
                key={i}
                className={cn(
                  "reveal overflow-hidden rounded-2xl border bg-white/[0.025] backdrop-blur transition-colors",
                  isOpen
                    ? "border-electric/30 bg-white/[0.045]"
                    : "border-white/[0.08]"
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition md:px-7 md:py-6"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display text-base font-semibold text-white md:text-lg">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "border-electric/40 bg-electric/15 rotate-45"
                        : "border-white/15 bg-white/[0.04]"
                    )}
                  >
                    <svg className="size-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
                    </svg>
                  </span>
                </button>

                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-500 ease-smooth",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-white/70 md:px-7 md:pb-7">
                      {item.a}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
